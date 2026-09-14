"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/menu";
import {
  MERCH,
  MERCH_SECTIONS,
  stockFor,
  totalStock,
  type MerchProduct,
} from "@/lib/merch";
import styles from "./page.module.css";

const LOW_STOCK = 5;

function ProductCard({ product }: { product: MerchProduct }) {
  const { add, qtyOf } = useCart();
  const oneSize = product.sizes.length === 1;
  const firstInStock =
    product.sizes.find((size) => stockFor(product, size) > 0) ?? product.sizes[0];
  const [size, setSize] = useState(firstInStock);

  const remaining = stockFor(product, size);
  const inCart = qtyOf(product.id, size);
  const soldOut = totalStock(product) === 0;
  const sizeSoldOut = remaining === 0;
  const atLimit = inCart >= remaining && remaining > 0;

  return (
    <article className={`${styles.card}${soldOut ? ` ${styles.cardOut}` : ""}`}>
      <div className={styles.thumb} aria-hidden="true">
        <svg viewBox="0 0 44 26">
          <path d="M22 2v10M13 8l9-6 9 6M4 17c3.5-3 6.5 3 10 0s6.5 3 10 0 6.5 3 10 0" />
          <circle cx="22" cy="12" r="2" />
        </svg>
        {product.hot && !soldOut && <span className={styles.tag}>Popular</span>}
        {soldOut && <span className={styles.tagOut}>Sold Out</span>}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <h3>{product.name}</h3>
          <span className={styles.price}>{formatPrice(product.priceCents)}</span>
        </div>

        {product.desc && <p className={styles.desc}>{product.desc}</p>}

        {!oneSize && (
          <div className={styles.sizes} role="group" aria-label={`${product.name} size`}>
            {product.sizes.map((option) => {
              const optionOut = stockFor(product, option) === 0;
              return (
                <button
                  key={option}
                  type="button"
                  className={styles.sizeBtn}
                  data-active={option === size || undefined}
                  disabled={optionOut}
                  aria-pressed={option === size}
                  title={optionOut ? `${option} — sold out` : option}
                  onClick={() => setSize(option)}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}

        <div className={styles.cardFoot}>
          <button
            type="button"
            className={styles.addBtn}
            disabled={sizeSoldOut || atLimit}
            onClick={() => add(product.id, oneSize ? product.sizes[0] : size)}
            aria-label={`Add ${product.name}${oneSize ? "" : `, size ${size}`} to order`}
          >
            {sizeSoldOut ? "Sold Out" : atLimit ? "All In Cart" : "Add To Order"}
          </button>

          <span className={styles.stock}>
            {sizeSoldOut
              ? oneSize
                ? "Out of stock"
                : `${size} out of stock`
              : remaining <= LOW_STOCK
                ? `Only ${remaining} left`
                : `${remaining} in stock`}
            {inCart > 0 && ` · ${inCart} in cart`}
          </span>
        </div>
      </div>
    </article>
  );
}

export function ShopGrid() {
  return (
    <>
      {MERCH_SECTIONS.map((section) => {
        const products = MERCH.filter(
          (product) => product.category === section.id
        );
        if (products.length === 0) return null;
        return (
          <section className={styles.msec} id={section.id} key={section.id}>
            <div className="wrap">
              <div className={styles.msecHead}>
                <h2>{section.title}</h2>
                <p>{section.blurb}</p>
              </div>
              <div className={styles.grid}>
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
