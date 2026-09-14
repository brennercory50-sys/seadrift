import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { DRINKS, formatDrinkPrice } from "@/lib/drinks";

export const metadata: Metadata = {
  title: "Drinks",
  description:
    "The Seadrift drink menu — draft beer, bottles and cans, seltzers, cocktails, shots and wine. Ice cold drinks every day 11AM to 2AM in Ormond Beach.",
  alternates: {
    canonical: "/drinks",
  },
  openGraph: {
    type: "website",
    siteName: "Seadrift Sports Bar & Grill",
    title: "Drinks | Seadrift Sports Bar & Grill",
    description:
      "Draft beer, bottles, seltzers, cocktails and shots. Open every day 11AM to 2AM.",
    url: "https://www.seadriftobs.com/drinks",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": "https://www.seadriftobs.com/drinks#drinks",
  name: "Seadrift Sports Bar & Grill Drink Menu",
  url: "https://www.seadriftobs.com/drinks",
  inLanguage: "en-US",
  hasMenuSection: DRINKS.map((section) => ({
    "@type": "MenuSection",
    name: section.title,
    hasMenuItem: section.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      ...(item.desc ? { description: item.desc } : {}),
      offers: {
        "@type": "Offer",
        price: (item.priceCents / 100).toFixed(2),
        priceCurrency: "USD",
      },
    })),
  })),
};

export default function DrinksPage() {
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
              The Drinks
              <span className={styles.script}>Ice Cold. Always.</span>
            </h1>
            <p>
              Draft beer, bottles and cans, seltzers, cocktails and shots.
              Pouring every day from 11AM till 2AM — come watch the game with
              something cold in your hand.
            </p>
          </div>
        </section>

        <div className={styles.servedbar}>
          <div className="wrap">
            <span>
              <b>Open Daily</b> 11AM – 2AM
            </span>
            <span>
              <b>Free Pool</b>{" "}
              Mondays &amp; Thursdays
            </span>
            <span>
              <b>Karaoke</b>{" "}
              Sundays &amp; Thursdays 9PM
            </span>
          </div>
        </div>

        <nav className={styles.jump} aria-label="Drink categories">
          <div className="wrap">
            {DRINKS.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
          </div>
        </nav>

        {DRINKS.map((section) => (
          <section className={styles.dsec} id={section.id} key={section.id}>
            <div className="wrap">
              <div className={styles.dsecHead}>
                <h2>{section.title}</h2>
                {section.blurb && <p>{section.blurb}</p>}
              </div>
              <div className={styles.items}>
                {section.items.map((item) => (
                  <div
                    className={`${styles.item}${item.hot ? ` ${styles.itemHot}` : ""}`}
                    key={item.id}
                  >
                    <div className={styles.top}>
                      <h3>{item.name}</h3>
                      <span className={styles.dots} />
                      <span className={styles.price}>
                        {formatDrinkPrice(item.priceCents)}
                      </span>
                    </div>
                    {item.desc && <p>{item.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className={styles.cta}>
          <div className="wrap">
            <h2>Drinks Are Bar &amp; Table Service</h2>
            <p>
              Drinks aren&apos;t available for online order — grab a seat and
              we&apos;ll take care of you. Food can be ordered ahead from the
              menu.
            </p>
            <div className={styles.acts}>
              <Link className="btn btn-red" href="/menu">
                Food Menu
              </Link>
              <a className={`btn btn-ghost ${styles.ctaGhost}`} href="tel:+13863339786">
                Call 386-333-9786
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
