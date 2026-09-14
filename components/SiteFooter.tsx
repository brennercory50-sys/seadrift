import Link from "next/link";
import { ROCKEFELLERS_URL } from "@/lib/links";

export function SiteFooter() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="fgrid">
          <Link className="logo" href="/" style={{ alignItems: "flex-start" }}>
            <span className="n1">SEADRIFT</span>
            <span className="n2">SPORTS BAR &amp; GRILL</span>
            <span className="n3">ORMOND BEACH, FL</span>
          </Link>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/menu">Menu</Link>
              </li>
              <li>
                <Link href="/shop">Merch</Link>
              </li>
              <li>
                <Link href="/drinks">Drinks</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>&nbsp;</h4>
            <ul>
              <li>
                <Link href="/#events">Events</Link>
              </li>
              <li>
                <Link href="/#gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <ul className="fcontact">
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                </svg>
                <span>
                  1368 Ocean Shore Blvd
                  <br />
                  Ormond Beach, FL 32176
                </span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" />
                </svg>
                <a href="tel:+13863339786">(386) 333-9786</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:seadriftobs@gmail.com">seadriftobs@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <div style={{ display: "flex", gap: ".6rem" }}>
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
            </div>
          </div>

          <iframe
            className="fmap"
            title="Map to Seadrift Sports Bar and Grill"
            src="https://www.google.com/maps?q=1368+Ocean+Shore+Blvd,+Ormond+Beach,+FL+32176&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="fother">
          <span className="fother-label">Our Other Spot</span>
          <a
            href={ROCKEFELLERS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Rockefeller&apos;s <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <p className="copy">
          &copy; {new Date().getFullYear()} Seadrift Sports Bar &amp; Grill.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
