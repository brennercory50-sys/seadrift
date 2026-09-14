/* ---------------------------------------------------------------
   The crew shown in the "Behind The Bar" banner.
   Add the rest of the bartenders here as they're confirmed — Friday
   and Sunday nights aren't covered below yet.
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
  { id: "amber", name: "Amber", nights: "Nights · Mon–Thu & Sat" },
  // Nights not confirmed yet — add `nights:` once we know who covers
  // Friday and who covers Sunday.
  { id: "lexi", name: "Lexi" },
  { id: "trenti", name: "Trenti" },
];

export function bartenderSubtitle(person: Bartender): string {
  return person.role ?? person.nights ?? "";
}
