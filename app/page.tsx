import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { BartenderBanner } from "@/components/BartenderBanner";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Your favorite sports bar in Ormond Beach. Great food, ice cold drinks, karaoke, live music, pool, darts and arcade games. Every game, every Sunday. (386) 333-9786.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Seadrift Sports Bar & Grill",
    title: "Seadrift Sports Bar & Grill | Ormond Beach, FL",
    description:
      "Good times. Cold drinks. Great people. Your local hangout spot in Ormond Beach.",
    url: "https://www.seadriftobs.com/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["BarOrPub", "Restaurant"],
      "@id": "https://www.seadriftobs.com/#bar",
      name: "Seadrift Sports Bar & Grill",
      url: "https://www.seadriftobs.com/",
      telephone: "+1-386-333-9786",
      email: "seadriftobs@gmail.com",
      servesCuisine: ["American", "Bar Food", "Seafood"],
      priceRange: "$",
      smokingAllowed: false,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1368 Ocean Shore Blvd",
        addressLocality: "Ormond Beach",
        addressRegion: "FL",
        postalCode: "32176",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "11:00",
          closes: "02:00",
        },
      ],
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Big screen TVs", value: true },
        { "@type": "LocationFeatureSpecification", name: "Pool tables", value: true },
        { "@type": "LocationFeatureSpecification", name: "Darts", value: true },
        { "@type": "LocationFeatureSpecification", name: "Arcade games", value: true },
        { "@type": "LocationFeatureSpecification", name: "Karaoke", value: true },
        { "@type": "LocationFeatureSpecification", name: "Live music", value: true },
        { "@type": "LocationFeatureSpecification", name: "Smoke-free indoors", value: true },
        { "@type": "LocationFeatureSpecification", name: "Outdoor seating", value: true },
      ],
      sameAs: ["https://www.facebook.com/seadriftsportsbarandgrill/"],
    },
    {
      "@type": "Event",
      "@id": "https://www.seadriftobs.com/#karaoke",
      name: "Karaoke Night at SeaDrift",
      description: "Karaoke every Sunday and Thursday from 9PM to 1AM.",
      eventSchedule: {
        "@type": "Schedule",
        byDay: ["https://schema.org/Sunday", "https://schema.org/Thursday"],
        startTime: "21:00",
        endTime: "01:00",
        repeatFrequency: "P1W",
      },
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@id": "https://www.seadriftobs.com/#bar" },
      organizer: { "@id": "https://www.seadriftobs.com/#bar" },
      isAccessibleForFree: true,
    },
    {
      "@type": "Event",
      "@id": "https://www.seadriftobs.com/#freepool",
      name: "Free Pool at SeaDrift",
      description: "Free pool all day every Monday and Thursday.",
      eventSchedule: {
        "@type": "Schedule",
        byDay: ["https://schema.org/Monday", "https://schema.org/Thursday"],
        startTime: "11:00",
        endTime: "02:00",
        repeatFrequency: "P1W",
      },
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@id": "https://www.seadriftobs.com/#bar" },
      organizer: { "@id": "https://www.seadriftobs.com/#bar" },
      isAccessibleForFree: true,
    },
    {
      "@type": "Event",
      "@id": "https://www.seadriftobs.com/#livemusic",
      name: "Live Entertainment at SeaDrift",
      description:
        "Live entertainment Friday and Saturday nights with a light up dance floor.",
      eventSchedule: {
        "@type": "Schedule",
        byDay: ["https://schema.org/Friday", "https://schema.org/Saturday"],
        startTime: "21:00",
        endTime: "01:00",
        repeatFrequency: "P1W",
      },
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@id": "https://www.seadriftobs.com/#bar" },
      organizer: { "@id": "https://www.seadriftobs.com/#bar" },
      isAccessibleForFree: true,
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.seadriftobs.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How late is the kitchen open?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The full menu is available from 11AM till 1AM, every day. From 1AM to 2AM we do fried food only.",
          },
        },
        {
          "@type": "Question",
          name: "Is SeaDrift smoke-free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. SeaDrift is the only smoke-free establishment in the area, with plenty of outdoor seating to accommodate smoking guests.",
          },
        },
        {
          "@type": "Question",
          name: "What nights is karaoke?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Karaoke is held Sundays and Thursdays from 9PM to 1AM.",
          },
        },
        {
          "@type": "Question",
          name: "When is free pool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Free pool all day on Mondays and Thursdays.",
          },
        },
        {
          "@type": "Question",
          name: "Do you show all the football games?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We have all NFL and college football games across 42 flat screens throughout the bar.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book a party at SeaDrift?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We will help celebrate any party. Call 386-333-9786 and ask for a manager.",
          },
        },
      ],
    },
  ],
};

const EVENTS = [
  {
    day: "MON",
    img: "https://www.seadriftobs.com/wp-content/uploads/2024/08/image_50413569-1024x768.jpg",
    title: "Free Pool",
    k: "All Day Long",
    t: "Open 11AM – 2AM",
  },
  {
    day: "TUE",
    img: "https://www.seadriftobs.com/wp-content/uploads/2024/08/image_50429697-1024x768.jpg",
    title: "Taco Tuesday",
    k: "Tacos All Day",
    t: "Kitchen till 1AM",
  },
  {
    day: "THU",
    img: "https://www.seadriftobs.com/wp-content/uploads/2024/08/image_50459393-1024x768.jpg",
    title: "Karaoke + Free Pool",
    k: "Free Tables All Day",
    t: "Karaoke 9PM – 1AM",
  },
  {
    day: "FRI",
    img: "https://www.seadriftobs.com/wp-content/uploads/2024/08/Seadrift-Fish-Dip-1-768x1024.jpg",
    title: "Fried Fish N Chips",
    k: "$12.95",
    t: "Live entertainment & dance floor",
  },
  {
    day: "SAT",
    img: "https://www.seadriftobs.com/wp-content/uploads/2024/08/seadrift-pic11.jpg",
    title: "Live Entertainment",
    k: "Light Up Dance Floor",
    t: "Kitchen till 1AM",
  },
  {
    day: "SUN",
    img: "https://www.seadriftobs.com/wp-content/uploads/2024/08/image_50408193-1024x768.jpg",
    title: "Football + Karaoke",
    k: "All NFL & College Games",
    t: "Karaoke 9PM – 1AM",
  },
];

const INSTA = [
  {
    img: "https://www.seadriftobs.com/wp-content/uploads/2024/08/Seadrift-Fish-Dip-1-768x1024.jpg",
    alt: "Smoked fish dip at Seadrift",
  },
  {
    img: "https://www.seadriftobs.com/wp-content/uploads/2024/08/image_50413569-1024x768.jpg",
    alt: "Pool tables at Seadrift",
  },
  {
    img: "https://www.seadriftobs.com/wp-content/uploads/2024/08/image_50408193-1024x768.jpg",
    alt: "Guests watching the games on the big screens",
  },
  {
    img: "https://www.seadriftobs.com/wp-content/uploads/2019/09/skiBall1-768x1024.jpg",
    alt: "Skee-ball machines in the arcade",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main id="main">
        <section className={styles.hero}>
          <div className={styles.heroMedia}>
            <video
              className={styles.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              poster="/seadrift-exterior.jpg"
              aria-hidden="true"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={styles.badge} aria-hidden="true">
            <div>
              <div className={styles.badgeName1}>SEADRIFT</div>
              <svg className={styles.wave} viewBox="0 0 60 22">
                <path
                  d="M2 15c5-5 9 4 14 0s9 4 14 0 9 4 14 0 9 4 14 0"
                  strokeLinecap="round"
                />
                <path
                  d="M8 8c4-3 7 2 11 0"
                  strokeLinecap="round"
                  opacity=".7"
                />
              </svg>
              <div className={styles.badgeName2}>SPORTS BAR &amp; GRILL</div>
            </div>
          </div>

          <div className="wrap">
            <h1>
              Good Times.
              <br />
              Cold Drinks.
              <span className={styles.script}>Great People.</span>
            </h1>
            <div className={styles.rule} />
            <p className={styles.sub}>Your favorite sports bar in Ormond Beach.</p>
            <ul className={styles.pills}>
              <li>Great Food</li>
              <li>Ice Cold Drinks</li>
              <li>Live Entertainment</li>
              <li>Games</li>
            </ul>
            <div className={styles.acts}>
              <Link className="btn btn-red" href="/menu">
                View Menu
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4 4 0 0 0 0 5.66l4.19 4.18zm6.78-1.81a4.6 4.6 0 0 0 4.24-1.23l.02-.02a4.6 4.6 0 0 0 0-6.5l-6.5 6.5 2.24 1.25zM14.5 14.5L20 20l-1.4 1.4-5.5-5.5-5.5 5.5L6.2 20l9.9-9.9" />
                </svg>
              </Link>
              <a className="btn btn-ghost" href="#events">
                See Events
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm12 8v9H5v-9h14z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.strip} aria-label="What we have">
          <div className="wrap">
            <div className={styles.ic}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 6h-7.6l3.3-3.3-1.4-1.4L12 4.6 8.7 1.3 7.3 2.7 10.6 6H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 13H3V8h18v11z" />
              </svg>
              <h3>Big Screen TVs</h3>
              <p>
                Every game.
                <br />
                Every Sunday.
              </p>
            </div>
            <div className={styles.ic}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2 2 21h20L12 2zm0 4.6 6.5 12.4h-13L12 6.6z" />
                <circle cx="12" cy="10" r="1.5" />
                <circle cx="9.6" cy="15" r="1.5" />
                <circle cx="14.4" cy="15" r="1.5" />
              </svg>
              <h3>Pool Tables</h3>
              <p>
                All day.
                <br />
                Every day.
              </p>
            </div>
            <div className={styles.ic}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm0 2.5A5.5 5.5 0 1 0 17.5 12 5.5 5.5 0 0 0 12 6.5zm0 2A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5z" />
              </svg>
              <h3>Darts</h3>
              <p>
                Bring your
                <br />
                A game.
              </p>
            </div>
            <div className={styles.ic}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v7h12V4H6zm0 9v7h12v-7H6zm2 1.5h3v2H8v-2z" />
              </svg>
              <h3>Arcade Games</h3>
              <p>
                Classic games.
                <br />
                New favorites.
              </p>
            </div>
            <div className={styles.ic}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z" />
              </svg>
              <h3>Karaoke</h3>
              <p>
                Sing your
                <br />
                heart out.
              </p>
            </div>
            <div className={styles.ic}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 3v12.5a3.5 3.5 0 1 1-2-3.16V7L10 8.6v9.9a3.5 3.5 0 1 1-2-3.16V6.2L20 3z" />
              </svg>
              <h3>Live Entertainment</h3>
              <p>
                Great music.
                <br />
                Good vibes.
              </p>
            </div>
          </div>
        </section>

        <BartenderBanner />

        <section
          className={styles.tiles}
          id="gallery"
          aria-label="Food, drinks and entertainment"
        >
          <div className={styles.tile}>
            <Image
              src="https://www.seadriftobs.com/wp-content/uploads/2024/08/Seadrift-Fish-Dip-1-768x1024.jpg"
              alt="House smoked fish dip served at Seadrift"
              fill
              sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 25vw"
            />
            <div className={styles.tc}>
              <h3>Delicious Food</h3>
              <Link className="btn btn-red btn-sm" href="/menu">
                View Menu
              </Link>
            </div>
          </div>
          <div className={styles.tile}>
            <Image
              src="https://www.seadriftobs.com/wp-content/uploads/2024/08/image_50429697-1024x768.jpg"
              alt="The full bar at Seadrift Sports Bar and Grill"
              fill
              sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 25vw"
            />
            <div className={styles.tc}>
              <h3>Ice Cold Drinks</h3>
              <Link className="btn btn-red btn-sm" href="/drinks">
                Drinks Menu
              </Link>
            </div>
          </div>
          <div className={styles.tile}>
            <Image
              src="https://www.seadriftobs.com/wp-content/uploads/2024/08/image_50459393-1024x768.jpg"
              alt="The dance floor and stage area at Seadrift"
              fill
              sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 25vw"
            />
            <div className={styles.tc}>
              <h3>Karaoke Night</h3>
              <p>
                Sundays &amp; Thursdays
                <br />
                9PM – 1AM
              </p>
            </div>
          </div>
          <div className={styles.tile}>
            <Image
              src="https://www.seadriftobs.com/wp-content/uploads/2024/08/seadrift-pic11.jpg"
              alt="Live music night inside Seadrift"
              fill
              sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 25vw"
            />
            <div className={styles.tc}>
              <h3>Live Music</h3>
              <p>
                Fridays &amp; Saturdays
                <br />
                Check our events
              </p>
            </div>
          </div>
        </section>

        <section className={styles.events} id="events">
          <div className="wrap">
            <div className={styles.evHead}>
              <h2>What&apos;s On Every Week</h2>
              <a className="btn btn-ghost btn-sm" href="tel:+13863339786">
                Book A Party
              </a>
            </div>
            <div className={styles.evGrid}>
              {EVENTS.map((event) => (
                <article className={styles.ev} key={event.day}>
                  <div className={styles.evImg}>
                    <Image
                      src={event.img}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.date}>
                    <span className={styles.m}>Every</span>
                    <span className={styles.d}>{event.day}</span>
                    <span className={styles.w}>Weekly</span>
                  </div>
                  <div className={styles.info}>
                    <h3>{event.title}</h3>
                    <p className={styles.k}>{event.k}</p>
                    <p className={styles.t}>{event.t}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.know}>
          <div className="wrap">
            <div className={styles.knowGrid}>
              <div className={styles.kb}>
                <h3>Smoke-Free Environment</h3>
                <p>
                  With plenty of outdoor seating to accommodate our smoking
                  guests, SeaDrift Sports Bar &amp; Grill is the{" "}
                  <strong>only smoke-free establishment in the area.</strong>
                </p>
              </div>
              <div className={styles.kb}>
                <h3>Full Menu Till 1AM</h3>
                <p>
                  Our full menu is available from{" "}
                  <strong>11AM till 1AM, every day.</strong> From 1AM to 2AM
                  we do fried food only. Stop by for lunch, dinner or some
                  late-night snacks.
                </p>
              </div>
              <div className={styles.kb}>
                <h3>NFL Ticket</h3>
                <p>
                  With <strong>42 flat screens</strong>{" "}
                  throughout the bar
                  you&apos;ll never miss a moment of the action. Bring the
                  family or bring your friends — with multiple games on you
                  can hang out, eat and catch it all.
                </p>
              </div>
              <div className={styles.kb}>
                <h3>Need To Book A Party?</h3>
                <p>We will help celebrate any party. Just call and ask for a manager.</p>
                <a className="btn btn-red btn-sm" href="tel:+13863339786">
                  Call 386-333-9786
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.about} id="about">
          <div className={styles.aboutImg}>
            <Image
              src="https://www.seadriftobs.com/wp-content/uploads/2024/08/outside-drift2024-1-1024x768.jpg"
              alt="The Seadrift Sports Bar and Grill building on Ocean Shore Boulevard"
              fill
              sizes="(max-width: 1000px) 100vw, 33vw"
            />
          </div>
          <div className={styles.aboutCopy}>
            <h2>Your Local Hangout Spot</h2>
            <p>
              Seadrift Sports Bar &amp; Grill is the go-to spot in Ormond
              Beach for good food, cold drinks, games, and unforgettable
              nights. Whether you&apos;re here for{" "}
              <strong>the game, the music, or just to hang with friends</strong>{" "}
              — you&apos;re always welcome at Seadrift.
            </p>
            <Link className="btn btn-red" href="/menu">
              See The Menu
            </Link>
          </div>
          <div className={styles.hours}>
            <h2>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" strokeLinecap="round" />
              </svg>
              Hours
            </h2>
            <dl>
              <div>
                <dt>Every Day</dt>
                <dd>11:00AM – 2:00AM</dd>
              </div>
              <div>
                <dt>Full Menu</dt>
                <dd>11:00AM – 1:00AM</dd>
              </div>
              <div>
                <dt>Late Night</dt>
                <dd>
                  1:00AM – 2:00AM
                  <br />
                  Fried food only
                </dd>
              </div>
              <div>
                <dt>Kitchen</dt>
                <dd>Open every day of the week</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className={styles.insta} aria-label="Photos from Seadrift">
          <div className={styles.instaGrid}>
            {INSTA.map((photo) => (
              <a
                key={photo.img}
                className={styles.instaFrame}
                href="https://www.instagram.com/seadrift_obs/"
              >
                <Image
                  src={photo.img}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 700px) 50vw, 25vw"
                />
              </a>
            ))}
          </div>
          <a className={styles.instaTag} href="https://www.instagram.com/seadrift_obs/">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.9.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2zm0 4.86a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88zm0 8.15a3.21 3.21 0 1 0 0-6.42 3.21 3.21 0 0 0 0 6.42zm6.29-8.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
            </svg>
            Follow Us <b>@SEADRIFT_OBS</b>
          </a>
        </section>
      </main>
    </>
  );
}
