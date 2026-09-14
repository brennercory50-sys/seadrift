"use client";

import { useState } from "react";
import { BARTENDERS, bartenderSubtitle } from "@/lib/staff";
import styles from "./bartenderBanner.module.css";

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul className={styles.track} aria-hidden={ariaHidden || undefined}>
      {BARTENDERS.map((person) => {
        const subtitle = bartenderSubtitle(person);
        return (
          <li className={styles.entry} key={person.id}>
            <span className={styles.name}>{person.name}</span>
            {subtitle && <span className={styles.sub}>{subtitle}</span>}
            <span className={styles.sep} aria-hidden="true">
              ◆
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function BartenderBanner() {
  const [paused, setPaused] = useState(false);

  if (BARTENDERS.length === 0) return null;

  return (
    <section className={styles.banner} aria-label="Meet the bartenders">
      <span className={styles.label}>Behind The Bar</span>

      <div className={styles.viewport}>
        <div className={styles.rail} data-paused={paused || undefined}>
          <Track />
          {/* Duplicate so the loop is seamless; hidden from screen
              readers so the crew isn't announced twice. */}
          <Track ariaHidden />
        </div>
      </div>

      <button
        type="button"
        className={styles.toggle}
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Resume scrolling banner" : "Pause scrolling banner"}
      >
        {paused ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
          </svg>
        )}
      </button>
    </section>
  );
}
