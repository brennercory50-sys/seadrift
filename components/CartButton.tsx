"use client";

import { useCart } from "./CartProvider";
import styles from "./cart.module.css";

export function CartButton() {
  const { count, openDrawer } = useCart();

  return (
    <button
      type="button"
      className={styles.cartBtn}
      onClick={openDrawer}
      aria-label={
        count > 0 ? `Your order, ${count} item${count === 1 ? "" : "s"}` : "Your order, empty"
      }
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h-2l-1 2H2v2h2l3 8h10l3-8h2V6h-2l-1-2H7zm0 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      </svg>
      {count > 0 && <span className={styles.cartCount}>{count}</span>}
    </button>
  );
}
