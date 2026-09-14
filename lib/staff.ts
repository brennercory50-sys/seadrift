/* ---------------------------------------------------------------
   PLACEHOLDER CREW — replace with the bar's real staff.
   These are invented first names and shifts so the banner has
   something to scroll. Swap in the actual bartenders (and check
   they're happy to be named on the site) before this goes live.
---------------------------------------------------------------- */

export type Bartender = {
  id: string;
  name: string;
  /** Nights they're usually behind the bar. */
  nights?: string;
  /** Optional title, shown instead of nights when present. */
  role?: string;
};

export const BARTENDERS: Bartender[] = [
  { id: "jess", name: "Jess", role: "Bar Manager" },
  { id: "mike", name: "Mike", nights: "Mon & Tue" },
  { id: "ashley", name: "Ashley", nights: "Wed & Thu" },
  { id: "danny", name: "Danny", nights: "Fri & Sat" },
  { id: "carla", name: "Carla", nights: "Sundays" },
  { id: "tj", name: "T.J.", nights: "Game Days" },
  { id: "brooke", name: "Brooke", nights: "Karaoke Nights" },
];

export function bartenderSubtitle(person: Bartender): string {
  return person.role ?? person.nights ?? "";
}
