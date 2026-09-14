"use client";

import { useEffect, useRef, useState } from "react";
import { BARTENDERS, bartenderSubtitle } from "@/lib/staff";
import styles from "./bartenderBanner.module.css";

/**
 * A crew list narrower than the screen would leave a gap in the loop,
 * so each track repeats the list. How many repeats depends on actual
 * rendered width — name lengths and viewport size both vary — so this
 * is a starting guess that the client corrects by measuring.
 */
const INITIAL_REPEATS = 4;

function Track({
  repeats,
  trackRef,
  ariaHidden,
}: {
  repeats: number;
  trackRef?: React.Ref<HTMLUListElement>;
  ariaHidden?: boolean;
}) {
  const entries = Array.from({ length: repeats }, (_, pass) =>
    BARTENDERS.map((person) => ({ person, key: `${person.id}-${pass}`, pass }))
  ).flat();

  return (
    <ul className={styles.track} ref={trackRef} aria-hidden={ariaHidden || undefined}>
      {entries.map(({ person, key, pass }) => {
        const subtitle = bartenderSubtitle(person);
        // Only the first pass is real content for a screen reader.
        const echo = pass > 0 || undefined;
        return (
          <li className={styles.entry} key={key}>
            <span className={styles.name} aria-hidden={echo}>
              {person.name}
            </span>
            {subtitle && (
              <span className={styles.sub} aria-hidden={echo}>
                {subtitle}
              </span>
            )}
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
  const [repeats, setRepeats] = useState(INITIAL_REPEATS);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    function measure() {
      if (!viewport || !track) return;
      const onePass = track.scrollWidth / repeats;
      if (onePass <= 0) return;
      // One spare pass so the trailing edge is always covered mid-loop.
      const needed = Math.max(2, Math.ceil(viewport.clientWidth / onePass) + 1);
      setRepeats((prev) => (prev === needed ? prev : needed));
    }

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [repeats]);

  if (BARTENDERS.length === 0) return null;

  return (
    <section className={styles.banner} aria-label="Meet the bartenders">
      <span className={styles.label}>Behind The Bar</span>

      <div className={styles.viewport} ref={viewportRef}>
        <div className={styles.rail} data-paused={paused || undefined}>
          <Track repeats={repeats} trackRef={trackRef} />
          {/* Duplicate so the loop is seamless; hidden from screen
              readers so the crew isn't announced twice. */}
          <Track repeats={repeats} ariaHidden />
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
