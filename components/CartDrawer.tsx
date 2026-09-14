"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/menu";
import { getCatalogEntry } from "@/lib/catalog";
import styles from "./cart.module.css";

export function CartDrawer() {
  const {
    lines,
    count,
    subtotalCents,
    taxCents,
    totalCents,
    drawerOpen,
    setQty,
    setNote,
    remove,
    closeDrawer,
  } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!drawerOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeDrawer();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [drawerOpen, closeDrawer]);

  return (
    <div className={styles.drawerRoot} data-open={drawerOpen || undefined}>
      <button
        type="button"
        className={styles.scrim}
        onClick={closeDrawer}
        tabIndex={drawerOpen ? 0 : -1}
        aria-label="Close order"
      />
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Your order"
        tabIndex={-1}
        ref={panelRef}
        hidden={!drawerOpen}
      >
        <header className={styles.panelHead}>
          <h2>
            Your Order
            {count > 0 && <span className={styles.headCount}>{count}</span>}
          </h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeDrawer}
            aria-label="Close order"
          >
            &times;
          </button>
        </header>

        {lines.length === 0 ? (
          <div className={styles.empty}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 4h-2l-1 2H2v2h2l3 8h10l3-8h2V6h-2l-1-2H7zm0 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
            </svg>
            <p>Your order is empty.</p>
            <Link className="btn btn-red btn-sm" href="/menu" onClick={closeDrawer}>
              Browse The Menu
            </Link>
          </div>
        ) : (
          <>
            <ul className={styles.lines}>
              {lines.map((line) => {
                const item = getCatalogEntry(line.itemId);
                if (!item) return null;
                return (
                  <li className={styles.line} key={line.lineId}>
                    <div className={styles.lineTop}>
                      <h3>
                        {item.name}
                        {line.variant && (
                          <span className={styles.variant}>{line.variant}</span>
                        )}
                      </h3>
                      <span className={styles.linePrice}>
                        {formatPrice(item.priceCents * line.qty)}
                      </span>
                    </div>

                    {item.variablePrice && (
                      <p className={styles.variableNote}>
                        Starting price — final total settled at pickup.
                      </p>
                    )}

                    <div className={styles.lineControls}>
                      <div className={styles.stepper}>
                        <button
                          type="button"
                          onClick={() => setQty(line.lineId, line.qty - 1)}
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          &minus;
                        </button>
                        <span aria-live="polite">{line.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(line.lineId, line.qty + 1)}
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className={styles.removeBtn}
                        onClick={() => remove(line.lineId)}
                      >
                        Remove
                      </button>
                    </div>

                    <input
                      className={styles.noteInput}
                      type="text"
                      value={line.note}
                      placeholder={
                        item.kind === "merch"
                          ? "Add a note (color, gift wrap…)"
                          : "Add a note (flavor, temp, no onions…)"
                      }
                      aria-label={`Notes for ${item.name}`}
                      onChange={(event) => setNote(line.lineId, event.target.value)}
                    />
                  </li>
                );
              })}
            </ul>

            <footer className={styles.panelFoot}>
              <dl className={styles.totals}>
                <div>
                  <dt>Subtotal</dt>
                  <dd>{formatPrice(subtotalCents)}</dd>
                </div>
                <div>
                  <dt>Tax</dt>
                  <dd>{formatPrice(taxCents)}</dd>
                </div>
                <div className={styles.grand}>
                  <dt>Total</dt>
                  <dd>{formatPrice(totalCents)}</dd>
                </div>
              </dl>
              <Link className="btn btn-red" href="/order" onClick={closeDrawer}>
                Checkout
              </Link>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}
