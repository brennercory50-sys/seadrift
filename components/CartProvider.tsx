"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { TAX_RATE } from "@/lib/menu";
import { availableStock, getCatalogEntry, makeLineId } from "@/lib/catalog";

export type CartLine = {
  /** Unique per item + variant, so a shirt in M and L are separate lines. */
  lineId: string;
  itemId: string;
  variant?: string;
  qty: number;
  note: string;
};

const STORAGE_KEY = "seadrift-cart";
const MAX_QTY = 99;

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

/** Upper bound for a line: merch is capped by stock on hand. */
function qtyCeiling(itemId: string, variant?: string): number {
  const stock = availableStock(itemId, variant);
  return stock === null ? MAX_QTY : Math.min(stock, MAX_QTY);
}

function clampQty(qty: number, itemId: string, variant?: string): number {
  return Math.max(0, Math.min(Math.floor(qty), qtyCeiling(itemId, variant)));
}

function readStoredLines(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;
    const restored = parsed.flatMap((entry): CartLine[] => {
      if (typeof entry !== "object" || entry === null) return [];
      const { itemId, variant, qty, note } = entry as Record<string, unknown>;
      if (typeof itemId !== "string" || !getCatalogEntry(itemId)) return [];
      if (typeof qty !== "number" || !Number.isFinite(qty)) return [];
      const size = typeof variant === "string" ? variant : undefined;
      // Stock may have changed since this cart was saved.
      const clamped = clampQty(qty, itemId, size);
      if (clamped < 1) return [];
      return [
        {
          lineId: makeLineId(itemId, size),
          itemId,
          variant: size,
          qty: clamped,
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
  qtyOf: (itemId: string, variant?: string) => number;
  add: (itemId: string, variant?: string) => void;
  setQty: (lineId: string, qty: number) => void;
  setNote: (lineId: string, note: string) => void;
  remove: (lineId: string) => void;
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

  const add = useCallback((itemId: string, variant?: string) => {
    if (!getCatalogEntry(itemId)) return;
    const ceiling = qtyCeiling(itemId, variant);
    if (ceiling < 1) return;

    const lineId = makeLineId(itemId, variant);
    const existing = lines.find((line) => line.lineId === lineId);
    setLines(
      existing
        ? lines.map((line) =>
            line.lineId === lineId
              ? { ...line, qty: Math.min(line.qty + 1, ceiling) }
              : line
          )
        : [...lines, { lineId, itemId, variant, qty: 1, note: "" }]
    );
    setDrawerOpen(true);
  }, []);

  const setQty = useCallback((lineId: string, qty: number) => {
    const target = lines.find((line) => line.lineId === lineId);
    if (!target) return;
    const next = clampQty(qty, target.itemId, target.variant);
    setLines(
      next < 1
        ? lines.filter((line) => line.lineId !== lineId)
        : lines.map((line) =>
            line.lineId === lineId ? { ...line, qty: next } : line
          )
    );
  }, []);

  const setNote = useCallback((lineId: string, note: string) => {
    setLines(
      lines.map((line) =>
        line.lineId === lineId ? { ...line, note: note.slice(0, 140) } : line
      )
    );
  }, []);

  const remove = useCallback((lineId: string) => {
    setLines(lines.filter((line) => line.lineId !== lineId));
  }, []);

  const clear = useCallback(() => setLines(EMPTY), []);

  const value = useMemo<CartContextValue>(() => {
    const count = currentLines.reduce((sum, line) => sum + line.qty, 0);
    const subtotalCents = currentLines.reduce((sum, line) => {
      const entry = getCatalogEntry(line.itemId);
      return entry ? sum + entry.priceCents * line.qty : sum;
    }, 0);
    const taxCents = Math.round(subtotalCents * TAX_RATE);
    const qtyOf = (itemId: string, variant?: string) =>
      currentLines.find((line) => line.lineId === makeLineId(itemId, variant))
        ?.qty ?? 0;

    return {
      lines: currentLines,
      count,
      subtotalCents,
      taxCents,
      totalCents: subtotalCents + taxCents,
      drawerOpen,
      qtyOf,
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
