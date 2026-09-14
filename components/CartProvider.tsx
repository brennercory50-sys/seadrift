"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { getMenuItem, TAX_RATE } from "@/lib/menu";

export type CartLine = {
  itemId: string;
  qty: number;
  note: string;
};

const STORAGE_KEY = "seadrift-cart";

/* ---------------------------------------------------------------
   The cart lives in a module-level store rather than component
   state so it can be read with useSyncExternalStore: the server
   snapshot is always empty, and the stored cart is only picked up
   once the client subscribes. That keeps hydration consistent
   without a setState-in-effect cascade.
---------------------------------------------------------------- */

const EMPTY: CartLine[] = [];

let lines: CartLine[] = EMPTY;
let hydrated = false;
const listeners = new Set<() => void>();

function readStoredLines(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;
    const restored = parsed.flatMap((entry): CartLine[] => {
      if (typeof entry !== "object" || entry === null) return [];
      const { itemId, qty, note } = entry as Record<string, unknown>;
      if (typeof itemId !== "string" || !getMenuItem(itemId)) return [];
      if (typeof qty !== "number" || !Number.isFinite(qty) || qty < 1) return [];
      return [
        {
          itemId,
          qty: Math.min(Math.floor(qty), 99),
          note: typeof note === "string" ? note.slice(0, 140) : "",
        },
      ];
    });
    return restored.length > 0 ? restored : EMPTY;
  } catch {
    return EMPTY;
  }
}

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    // Private mode or blocked storage — the cart still works for this visit.
  }
}

function setLines(next: CartLine[]) {
  lines = next;
  persist();
  listeners.forEach((listener) => listener());
}

function subscribe(onStoreChange: () => void) {
  if (!hydrated) {
    hydrated = true;
    lines = readStoredLines();
  }
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

const getSnapshot = () => lines;
const getServerSnapshot = () => EMPTY;

/* ---------------------------------------------------------------
   Context
---------------------------------------------------------------- */

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotalCents: number;
  taxCents: number;
  totalCents: number;
  drawerOpen: boolean;
  add: (itemId: string) => void;
  setQty: (itemId: string, qty: number) => void;
  setNote: (itemId: string, note: string) => void;
  remove: (itemId: string) => void;
  clear: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const currentLines = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const add = useCallback((itemId: string) => {
    if (!getMenuItem(itemId)) return;
    const existing = lines.find((line) => line.itemId === itemId);
    setLines(
      existing
        ? lines.map((line) =>
            line.itemId === itemId
              ? { ...line, qty: Math.min(line.qty + 1, 99) }
              : line
          )
        : [...lines, { itemId, qty: 1, note: "" }]
    );
    setDrawerOpen(true);
  }, []);

  const setQty = useCallback((itemId: string, qty: number) => {
    setLines(
      qty < 1
        ? lines.filter((line) => line.itemId !== itemId)
        : lines.map((line) =>
            line.itemId === itemId
              ? { ...line, qty: Math.min(Math.floor(qty), 99) }
              : line
          )
    );
  }, []);

  const setNote = useCallback((itemId: string, note: string) => {
    setLines(
      lines.map((line) =>
        line.itemId === itemId ? { ...line, note: note.slice(0, 140) } : line
      )
    );
  }, []);

  const remove = useCallback((itemId: string) => {
    setLines(lines.filter((line) => line.itemId !== itemId));
  }, []);

  const clear = useCallback(() => setLines(EMPTY), []);

  const value = useMemo<CartContextValue>(() => {
    const count = currentLines.reduce((sum, line) => sum + line.qty, 0);
    const subtotalCents = currentLines.reduce((sum, line) => {
      const item = getMenuItem(line.itemId);
      return item ? sum + item.priceCents * line.qty : sum;
    }, 0);
    const taxCents = Math.round(subtotalCents * TAX_RATE);
    return {
      lines: currentLines,
      count,
      subtotalCents,
      taxCents,
      totalCents: subtotalCents + taxCents,
      drawerOpen,
      add,
      setQty,
      setNote,
      remove,
      clear,
      openDrawer,
      closeDrawer,
    };
  }, [
    currentLines,
    drawerOpen,
    add,
    setQty,
    setNote,
    remove,
    clear,
    openDrawer,
    closeDrawer,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
