"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/drinks", label: "Drinks" },
  { href: "/#events", label: "Events" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    function onScroll() {
      setStuck(window.scrollY > 120);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <>
      <div className="util">
        <div className="wrap">
          <span className="pin">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
            </svg>
            1368 Ocean Shore Blvd, Ormond Beach, FL 32176
          </span>
          <a className="tel" href="tel:+13863339786">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" />
            </svg>
            (386) 333-9786
          </a>
          <span className="r">
            <a
              className="soc"
              href="https://www.facebook.com/seadriftsportsbarandgrill/"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13V9.9H7.5V13h2.77v8h3.23z" />
              </svg>
            </a>
            <a
              className="soc"
              href="https://www.instagram.com/seadrift_obs/"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.9.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2zm0 4.86a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88zm0 8.15a3.21 3.21 0 1 0 0-6.42 3.21 3.21 0 0 0 0 6.42zm6.29-8.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
              </svg>
            </a>
          </span>
        </div>
      </div>

      <header
        className={`site-header${isHome ? " is-transparent" : ""}${stuck ? " is-stuck" : ""}`}
      >
        <div className="wrap">
          <Link
            className="logo"
            href="/"
            aria-label="Seadrift Sports Bar and Grill, home"
          >
            <span className="mark" aria-hidden="true">
              <svg viewBox="0 0 44 26">
                <path d="M22 2v10M13 8l9-6 9 6M4 17c3.5-3 6.5 3 10 0s6.5 3 10 0 6.5 3 10 0" />
                <circle cx="22" cy="12" r="2" />
              </svg>
            </span>
            <span className="n1">SEADRIFT</span>
            <span className="n2">SPORTS BAR &amp; GRILL</span>
            <span className="n3">ORMOND BEACH, FL</span>
          </Link>
          <nav className="main" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a className="btn btn-red btn-sm" href="tel:+13863339786">
            Call To Order
          </a>
          <button
            className="burger"
            aria-expanded={menuOpen}
            aria-controls="mnav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            &#9776;
          </button>
        </div>
        <div id="mnav" className={menuOpen ? "open" : undefined}>
          <div className="wrap">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
