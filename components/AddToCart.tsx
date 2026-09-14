"use client";

import { useCart } from "./CartProvider";
import styles from "./cart.module.css";

export function AddToCart({
  itemId,
  name,
  variant,
  disabled,
  label = "Add",
}: {
  itemId: string;
  name: string;
  variant?: string;
  disabled?: boolean;
  label?: string;
}) {
  const { add } = useCart();
  const fullName = variant ? `${name}, ${variant}` : name;

  return (
    <button
      type="button"
      className={styles.addBtn}
      onClick={() => add(itemId, variant)}
      disabled={disabled}
      aria-label={`Add ${fullName} to order`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z" />
      </svg>
      {label}
    </button>
  );
}
