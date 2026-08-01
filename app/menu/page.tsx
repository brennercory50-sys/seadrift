import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The full Seadrift menu — First Down Starters, wings, burgers, handhelds, salads, soup and dessert. Full menu served 11AM till 1AM every day in Ormond Beach.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    type: "website",
    siteName: "Seadrift Sports Bar & Grill",
    title: "Menu | Seadrift Sports Bar & Grill",
    description:
      "Wings, burgers, handhelds, starters, salads and dessert. Full menu 11AM – 1AM every day.",
    url: "https://www.seadriftobs.com/menu",
  },
};

type MenuItemData = {
  name: string;
  desc?: string;
  price: string;
  hot?: boolean;
  addLabel?: string;
  addPrice?: string;
};

const STARTERS: MenuItemData[] = [
  { name: "Touchdown Wings (10)", desc: "Mild, medium, hot, suicide, lemon pepper, cajun, teriyaki, BBQ or garlic parm.", price: "$18.95", hot: true },
  { name: "Seadrift Sampler", desc: "Your choice of any 3 of our mouth-watering appetizers.", price: "$16.95", hot: true },
  { name: "Gator Bites", desc: "Half-pound of cajun breaded Louisiana style gator.", price: "$15.95", hot: true },
  { name: "Firecracker Shrimp", desc: "10 lightly breaded fried shrimp tossed in firecracker sauce.", price: "$12.95", hot: true },
  { name: "Shrimp Skewers (10)", desc: "Blackened or grilled shrimp served with lemon butter.", price: "$12.95" },
  { name: "Fish Dip", desc: "Smoked fish dip with pickled jalapenos, diced onions and tomatoes.", price: "$12.95" },
  { name: "Crabby Cakes", desc: "4 oz patties filled with chunks of crab, with cajun sauce.", price: "$12.95" },
  { name: "The Ham Blaster", desc: "Slices of ham with a choice of side: chips, salad, fries, rings or coleslaw.", price: "$12.95" },
  { name: "Cheese Wave Curds", desc: "Half-pound of deep fried premium cheese curds served with a side of cajun sauce.", price: "$11.95" },
  { name: "Tidal Tator Kegs (8)", desc: "Cheddar and bacon filled tator kegs.", price: "$11.95" },
  { name: "Drifters Breakfast Sandwich", desc: "Morning sandwich with choice of side — fries, salad or classic American sides.", price: "$11.95" },
  { name: "Shrimp Jammers", desc: "Fried shrimp stuffed with 3 cheeses and jalapeno, served with sweet chili sauce.", price: "$10.95" },
  { name: "High Tide Mushrooms", desc: "Half-pound basket served with dijon horseradish sauce.", price: "$10.95" },
  { name: "Zucchini Fries", desc: "Battered zucchini fries served with sriracha ranch dressing.", price: "$10.95" },
  { name: "Golden Onion Rings", desc: "Hand-breaded onion rings fried to golden brown, served with a dipping sauce.", price: "$10.95" },
  { name: "Sunset Corn Fritters", desc: "Half-pound deep fried, served with a side of ranch sauce.", price: "$10.95" },
  { name: "Jalapeno Poppers", desc: "Spicy cream cheese-stuffed jalapeños, breaded and deep-fried to golden perfection.", price: "$9.95" },
  { name: "Salty Swirl", desc: "Crispy snack served with your choice of side — fries, chips, onion rings or salad.", price: "$9.75" },
  { name: "Surfside Fries", desc: "Basket of steak fries — plain, salted or cajun style.", price: "$7.95" },
  { name: "Deep Blue Dog", desc: "One all-beef hot dog. Add raw onions or relish on request.", price: "$6.00" },
];

const BURGERS: MenuItemData[] = [
  { name: "Swiss Burger", desc: "Half-pound hand pressed burger with thick apple bacon and swiss cheese.", price: "$15.95", hot: true },
  { name: "Bacon Bleu", desc: "Half-pound pressed burger topped with bleu cheese.", price: "$15.95" },
  { name: "Sailor's Club", desc: "Classic club sandwich. Choice of side: fries (regular, steak or cajun), salad or coleslaw.", price: "$15.95", hot: true },
  { name: "Patty Melt", desc: "Half-pound pressed burger, grilled onions, swiss cheese and thousand island dressing.", price: "$14.95" },
  { name: "Classic American Burger", desc: "Half-pound hand pressed burger with American cheese, lettuce, tomato and red onion.", price: "$13.95", hot: true },
  { name: "Buffalo Chicken Caesar", desc: "Romaine lettuce, tomato, croutons, shredded parmesan and caesar dressing.", price: "$13.95" },
  { name: "Cuban Sandwich", desc: "Ham, seasoned Cuban pork, melted swiss cheese, mayo, mustard and pickle.", price: "$12.95" },
  { name: "Philly Sandwich", desc: "Steak topped with provolone, green peppers, onions and mushrooms.", price: "$12.95" },
  { name: "Reef Reuben", desc: "Corn beef, sauerkraut, swiss cheese and thousand island.", price: "$12.95" },
  { name: "Seaside Pastrami", desc: "Premium pastrami topped with swiss and dijon mustard, grilled to perfection.", price: "$12.95" },
  { name: "Beach BLT", desc: "Thick apple bacon stacked with lettuce, tomatoes and mayo on fresh toasted bread.", price: "$12.95" },
  { name: "Chicken Sandwich", desc: "8 oz chicken breast, grilled or blackened, served with lettuce and tomato.", price: "$12.95" },
  { name: "Veggie Sandwich", desc: "Lettuce, tomato, onion, cucumber, carrots, feta cheese and green peppers. Vegan on request.", price: "$9.95" },
  { name: "Grilled Cheese", price: "$8.95" },
];

const SALADS: MenuItemData[] = [
  { name: "Harbor Chef", desc: "Oven roasted turkey breast, black forest ham and provolone cheese.", price: "$14.95" },
  { name: "House Shore", desc: "Iceberg lettuce, tomato, onion, cucumber and shredded cheddar.", price: "$10.95" },
  { name: "Caesar Salad", desc: "Romaine lettuce, parmesan cheese and seasoned croutons topped with caesar.", price: "$10.95" },
  { name: "Greek Island", desc: "Crisp romaine lettuce, cucumbers, green pepper and grape tomatoes.", price: "$10.95" },
  { name: "Side Caesar", desc: "Romaine lettuce, parmesan cheese and seasoned croutons topped with caesar.", price: "$6.95" },
  { name: "Side Salad", desc: "Iceberg lettuce, tomato, onion, cucumber and shredded cheddar.", price: "$6.95" },
];

const PIZZAS: MenuItemData[] = [
  { name: "Meat Lovers Pizza", desc: "Pepperoni, sausage, bacon, ham and Italian sausage on a classic pizza base.", price: "$17.95" },
  { name: "Veggie Supreme Pizza", desc: "Mushrooms, black olives, onions, green peppers, broccoli, pepperoni and sausage.", price: "$17.95" },
  { name: "Hawaiian Pizza", desc: "Ham, pineapple and cheese on a tomato pizza sauce base.", price: "$14.95" },
  { name: "Pepperoni Pizza", desc: "A savory combination of melted cheese, zesty tomato sauce and crispy pepperoni slices.", price: "$13.95" },
  { name: "Classic Cheese Pizza", desc: "House-made tomato sauce and a blend of cheeses on a classic crust.", price: "$12.95" },
  { name: "Build Your Own Pizza", desc: "Build your own with your choice of toppings, starting with our signature crust, sauce and cheese.", price: "$12.95" },
];

const SOUPS: MenuItemData[] = [
  { name: "Homemade Chili", desc: "Topped with cheese and onions.", price: "$7.95", addLabel: "Add grilled cheese", addPrice: "$2.00" },
  { name: "Soup Of The Day", price: "$7.95", addLabel: "Add grilled cheese", addPrice: "$2.00" },
];

const DESSERTS: MenuItemData[] = [
  { name: "Lava Overload", desc: "Rich, molten chocolate center. Available in small or large.", price: "$7.95+" },
  { name: "Tiramisu Nightcap", desc: "Espresso-soaked ladyfingers layered with mascarpone and a hint of coffee liqueur, topped with cocoa powder.", price: "$7.95" },
];

function toOffer(items: MenuItemData[]) {
  return items.map((item) => ({
    "@type": "MenuItem",
    name: item.name,
    ...(item.desc ? { description: item.desc } : {}),
    offers: {
      "@type": "Offer",
      price: item.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
    },
  }));
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Menu",
      "@id": "https://www.seadriftobs.com/menu#menu",
      name: "Seadrift Sports Bar & Grill Menu",
      url: "https://www.seadriftobs.com/menu",
      inLanguage: "en-US",
      hasMenuSection: [
        { "@type": "MenuSection", name: "First Down Starters", hasMenuItem: toOffer(STARTERS) },
        { "@type": "MenuSection", name: "Handhelds & Burgers", hasMenuItem: toOffer(BURGERS) },
        { "@type": "MenuSection", name: "Salads", hasMenuItem: toOffer(SALADS) },
        { "@type": "MenuSection", name: "Soup", hasMenuItem: toOffer(SOUPS) },
        { "@type": "MenuSection", name: "Pizza", hasMenuItem: toOffer(PIZZAS) },
        { "@type": "MenuSection", name: "Desserts", hasMenuItem: toOffer(DESSERTS) },
      ],
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

function MenuItemRow({ item }: { item: MenuItemData }) {
  return (
    <div className={`${styles.item}${item.hot ? ` ${styles.itemHot}` : ""}`}>
      <div className={styles.top}>
        <h3>{item.name}</h3>
        <span className={styles.dots} />
        <span className={styles.price}>{item.price}</span>
      </div>
      {item.desc && <p>{item.desc}</p>}
      {item.addLabel && (
        <span className={styles.add}>
          {item.addLabel} <b>{item.addPrice}</b>
        </span>
      )}
    </div>
  );
}

const JUMP_LINKS = [
  { href: "#starters", label: "First Down Starters" },
  { href: "#burgers", label: "Handhelds & Burgers" },
  { href: "#salads", label: "Salads" },
  { href: "#pizza", label: "Pizza" },
  { href: "#soup", label: "Soup" },
  { href: "#desserts", label: "Desserts" },
];

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
              2AM.
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
            {JUMP_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <section className={styles.msec} id="starters">
          <div className="wrap">
            <div className={styles.msecHead}>
              <h2>First Down Starters</h2>
              <p>Built for sharing across a table full of people watching the game.</p>
            </div>

            <div className={styles.flavors}>
              <h3>Touchdown Wing Flavors</h3>
              <ul>
                {["Mild", "Medium", "Hot", "Suicide", "Lemon Pepper", "Cajun", "Teriyaki", "BBQ", "Garlic Parm"].map(
                  (flavor) => (
                    <li key={flavor}>{flavor}</li>
                  )
                )}
              </ul>
            </div>

            <div className={styles.items}>
              {STARTERS.map((item) => (
                <MenuItemRow item={item} key={item.name} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.msec} id="burgers">
          <div className="wrap">
            <div className={styles.msecHead}>
              <h2>Handhelds &amp; Burgers</h2>
              <p>Every burger is a half-pound, hand pressed. Sides available with most handhelds.</p>
            </div>
            <div className={styles.items}>
              {BURGERS.map((item) => (
                <MenuItemRow item={item} key={item.name} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.msec} id="salads">
          <div className="wrap">
            <div className={styles.msecHead}>
              <h2>Salads</h2>
              <p>Dressings: blue cheese, ranch, italian or caesar.</p>
            </div>
            <div className={styles.items}>
              {SALADS.map((item) => (
                <MenuItemRow item={item} key={item.name} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.msec} id="pizza">
          <div className="wrap">
            <div className={styles.msecHead}>
              <h2>Pizza</h2>
              <p>Signature crust, house-made sauce and a blend of cheeses on every pie.</p>
            </div>
            <div className={styles.items}>
              {PIZZAS.map((item) => (
                <MenuItemRow item={item} key={item.name} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.msec} id="soup">
          <div className="wrap">
            <div className={styles.msecHead}>
              <h2>Soup</h2>
            </div>
            <div className={styles.items}>
              {SOUPS.map((item) => (
                <MenuItemRow item={item} key={item.name} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.msec} id="desserts">
          <div className="wrap">
            <div className={styles.msecHead}>
              <h2>Desserts</h2>
            </div>
            <div className={styles.items}>
              {DESSERTS.map((item) => (
                <MenuItemRow item={item} key={item.name} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="wrap">
            <h2>Kitchen&apos;s On Till 1AM</h2>
            <p>
              Call ahead, or just come sit down. We&apos;re on A1A in Ormond
              by the Sea, open every day from 11AM to 2AM.
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
