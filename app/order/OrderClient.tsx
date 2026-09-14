"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPrice, getMenuItem } from "@/lib/menu";
import styles from "./page.module.css";

const PICKUP_TIMES = [
  "As soon as possible",
  "In 30 minutes",
  "In 45 minutes",
  "In 1 hour",
  "In 1.5 hours",
  "In 2 hours",
];

export function OrderClient() {
  const { lines, count, subtotalCents, taxCents, totalCents, setQty, remove } =
    useCart();

  return (
    <main id="main" className={styles.page}>
      <div className="wrap">
        <header className={styles.head}>
          <h1>
            Your Order
            <span className={styles.script}>Pickup At The Bar.</span>
          </h1>
          <p>
            1368 Ocean Shore Blvd, Ormond Beach — kitchen open 11AM till 1AM
            every day.
          </p>
        </header>

        {lines.length === 0 ? (
          <div className={styles.empty}>
            <h2>Nothing here yet</h2>
            <p>Add something off the menu and it&apos;ll show up here.</p>
            <Link className="btn btn-red" href="/menu">
              Browse The Menu
            </Link>
          </div>
        ) : (
          <div className={styles.grid}>
            <section className={styles.items} aria-label="Order items">
              <h2 className={styles.sectionTitle}>
                {count} {count === 1 ? "Item" : "Items"}
              </h2>
              <ul>
                {lines.map((line) => {
                  const item = getMenuItem(line.itemId);
                  if (!item) return null;
                  return (
                    <li className={styles.line} key={line.itemId}>
                      <div className={styles.lineMain}>
                        <h3>{item.name}</h3>
                        {line.note && (
                          <p className={styles.note}>{line.note}</p>
                        )}
                        {item.variablePrice && (
                          <p className={styles.note}>
                            Starting price — final total settled at pickup.
                          </p>
                        )}
                        <div className={styles.lineControls}>
                          <div className={styles.stepper}>
                            <button
                              type="button"
                              onClick={() => setQty(line.itemId, line.qty - 1)}
                              aria-label={`Decrease ${item.name} quantity`}
                            >
                              &minus;
                            </button>
                            <span>{line.qty}</span>
                            <button
                              type="button"
                              onClick={() => setQty(line.itemId, line.qty + 1)}
                              aria-label={`Increase ${item.name} quantity`}
                            >
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            className={styles.removeBtn}
                            onClick={() => remove(line.itemId)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <span className={styles.linePrice}>
                        {formatPrice(item.priceCents * line.qty)}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <Link className={styles.backLink} href="/menu">
                &larr; Add more items
              </Link>
            </section>

            <aside className={styles.checkout} aria-label="Checkout">
              <h2 className={styles.sectionTitle}>Checkout</h2>

              <form
                className={styles.form}
                onSubmit={(event) => event.preventDefault()}
              >
                <label>
                  <span>Name</span>
                  <input type="text" name="name" autoComplete="name" required />
                </label>
                <label>
                  <span>Phone</span>
                  <input type="tel" name="tel" autoComplete="tel" required />
                </label>
                <label>
                  <span>Pickup time</span>
                  <select name="pickup" defaultValue={PICKUP_TIMES[0]}>
                    {PICKUP_TIMES.map((time) => (
                      <option key={time}>{time}</option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Order notes (optional)</span>
                  <textarea name="notes" rows={3} />
                </label>

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

                <button type="submit" className="btn btn-red" disabled>
                  Pay &amp; Place Order
                </button>

                <p className={styles.disclaimer}>
                  Online payment isn&apos;t switched on yet — this checkout is a
                  preview. To order right now, call{" "}
                  <a href="tel:+13863339786">386-333-9786</a>.
                </p>
              </form>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
