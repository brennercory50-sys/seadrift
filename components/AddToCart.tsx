"use client";

import { useCart } from "./CartProvider";
import styles from "./cart.module.css";

export function AddToCart({ itemId, name }: { itemId: string; name: string }) {
  const { add } = useCart();

  return (
    <button
      type="button"
      className={styles.addBtn}
      onClick={() => add(itemId)}
      aria-label={`Add ${name} to order`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z" />
      </svg>
      Add
    </button>
  );
}
