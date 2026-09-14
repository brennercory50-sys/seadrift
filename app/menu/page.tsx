import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { AddToCart } from "@/components/AddToCart";
import { MENU, formatItemPrice, formatPrice, type MenuItem } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The full Seadrift menu — First Down Starters, wings, burgers, handhelds, salads, soup and dessert. Order online for pickup. Full menu served 11AM till 1AM every day in Ormond Beach.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    type: "website",
    siteName: "Seadrift Sports Bar & Grill",
    title: "Menu | Seadrift Sports Bar & Grill",
    description:
      "Wings, burgers, handhelds, starters, salads and dessert. Order online for pickup. Full menu 11AM – 1AM every day.",
    url: "https://www.seadriftobs.com/menu",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Menu",
      "@id": "https://www.seadriftobs.com/menu#menu",
      name: "Seadrift Sports Bar & Grill Menu",
      url: "https://www.seadriftobs.com/menu",
      inLanguage: "en-US",
      hasMenuSection: MENU.map((section) => ({
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
    },
    {
      "@type": ["BarOrPub", "Restaurant"],
      "@id": "https://www.seadriftobs.com/#bar",
      name: "Seadrift Sports Bar & Grill",
      hasMenu: { "@id": "https://www.seadriftobs.com/menu#menu" },
      telephone: "+1-386-333-9786",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1368 Ocean Shore Blvd",
        addressLocality: "Ormond Beach",
        addressRegion: "FL",
        postalCode: "32176",
        addressCountry: "US",
      },
    },
  ],
};

const WING_FLAVORS = [
  "Mild",
  "Medium",
  "Hot",
  "Suicide",
  "Lemon Pepper",
  "Cajun",
  "Teriyaki",
  "BBQ",
  "Garlic Parm",
];

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className={`${styles.item}${item.hot ? ` ${styles.itemHot}` : ""}`}>
      <div className={styles.top}>
        <h3>{item.name}</h3>
        <span className={styles.dots} />
        <span className={styles.price}>{formatItemPrice(item)}</span>
      </div>
      {item.desc && <p>{item.desc}</p>}
      {item.addLabel && item.addPriceCents !== undefined && (
        <span className={styles.add}>
          {item.addLabel} <b>{formatPrice(item.addPriceCents)}</b>
        </span>
      )}
      <div>
        <AddToCart itemId={item.id} name={item.name} />
      </div>
    </div>
  );
}

export default function MenuPage() {
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
              The Menu
              <span className={styles.script}>Served Till 1AM.</span>
            </h1>
            <p>
              Wings, burgers, handhelds, starters, salads and dessert. Full
              menu every day from 11AM till 1AM — fried food only from 1AM to
              2AM. Add anything to your order and pick it up at the bar.
            </p>
          </div>
        </section>

        <div className={styles.servedbar}>
          <div className="wrap">
            <span>
              <b>Full Menu</b> 11AM – 1AM Daily
            </span>
            <span>
              <b>Fried Only</b> 1AM – 2AM
            </span>
            <span>
              <b>Fridays</b> Fish N Chips $12.95
            </span>
            <span>
              <b>Tuesdays</b> Taco Tuesday
            </span>
          </div>
        </div>

        <nav className={styles.jump} aria-label="Menu sections">
          <div className="wrap">
            {MENU.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
          </div>
        </nav>

        {MENU.map((section) => (
          <section className={styles.msec} id={section.id} key={section.id}>
            <div className="wrap">
              <div className={styles.msecHead}>
                <h2>{section.title}</h2>
                {section.blurb && <p>{section.blurb}</p>}
              </div>

              {section.id === "starters" && (
                <div className={styles.flavors}>
                  <h3>Touchdown Wing Flavors</h3>
                  <ul>
                    {WING_FLAVORS.map((flavor) => (
                      <li key={flavor}>{flavor}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.items}>
                {section.items.map((item) => (
                  <MenuItemRow item={item} key={item.id} />
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className={styles.cta}>
          <div className="wrap">
            <h2>Kitchen&apos;s On Till 1AM</h2>
            <p>
              Order online for pickup, or just come sit down. We&apos;re on A1A
              in Ormond by the Sea, open every day from 11AM to 2AM.
            </p>
            <div className={styles.acts}>
              <a className="btn btn-red" href="tel:+13863339786">
                Call 386-333-9786
              </a>
              <Link className={`btn btn-ghost ${styles.ctaGhost}`} href="/#events">
                See What&apos;s On
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
