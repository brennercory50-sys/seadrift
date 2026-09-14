import type { Metadata } from "next";
import Image from "next/image";
import { ShopGrid } from "./ShopGrid";
import { MERCH, MERCH_SECTIONS, totalStock } from "@/lib/merch";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Merch",
  description:
    "Seadrift Sports Bar & Grill merch — tees, hoodies, trucker hats, beanies and visors. Reserve online and pick it up at the bar in Ormond Beach.",
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    type: "website",
    siteName: "Seadrift Sports Bar & Grill",
    title: "Merch | Seadrift Sports Bar & Grill",
    description:
      "Tees, hoodies and hats from your favorite sports bar in Ormond Beach.",
    url: "https://www.seadriftobs.com/shop",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Seadrift Sports Bar & Grill Merch",
  itemListElement: MERCH.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      ...(product.desc ? { description: product.desc } : {}),
      offers: {
        "@type": "Offer",
        price: (product.priceCents / 100).toFixed(2),
        priceCurrency: "USD",
        availability:
          totalStock(product) > 0
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
      },
    },
  })),
};

export default function ShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main id="main">
        <section className={styles.phead}>
          <Image
            src="/seadrift-exterior.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
          />
          <div className="wrap">
            <h1>
              Seadrift Merch
              <span className={styles.script}>Wear The Wave.</span>
            </h1>
            <p>
              Tees, hoodies and hats. Reserve online and pick it up at the bar
              — 1368 Ocean Shore Blvd, open every day 11AM to 2AM.
            </p>
          </div>
        </section>

        <nav className={styles.jump} aria-label="Merch categories">
          <div className="wrap">
            {MERCH_SECTIONS.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
          </div>
        </nav>

        <ShopGrid />

        <section className={styles.cta}>
          <div className="wrap">
            <h2>Want It Held Behind The Bar?</h2>
            <p>
              Give us a call and we&apos;ll set it aside for you. Sizes run out
              fast on game days.
            </p>
            <a className="btn btn-red" href="tel:+13863339786">
              Call 386-333-9786
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
