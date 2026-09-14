/* ---------------------------------------------------------------
   PLACEHOLDER DRINK LIST — replace with the bar's real menu.
   Prices are invented. The brands are ones visible on Seadrift's own
   storefront and window signage (Budweiser, Stella Artois, Blue Moon,
   Michelob Ultra, Coors Light, White Claw, Kona Big Wave), but what's
   actually on tap and what it costs needs to come from the bar.
---------------------------------------------------------------- */

export type Drink = {
  id: string;
  name: string;
  desc?: string;
  priceCents: number;
  hot?: boolean;
};

export type DrinkSection = {
  id: string;
  title: string;
  blurb?: string;
  items: Drink[];
};

export const DRINKS: DrinkSection[] = [
  {
    id: "draft",
    title: "On Draft",
    blurb: "Rotating taps — ask what just kicked and what went on.",
    items: [
      { id: "bud-light-draft", name: "Bud Light", priceCents: 500, hot: true },
      { id: "michelob-ultra-draft", name: "Michelob Ultra", priceCents: 550 },
      { id: "blue-moon-draft", name: "Blue Moon", desc: "Served with an orange slice.", priceCents: 650 },
      { id: "stella-draft", name: "Stella Artois", priceCents: 650, hot: true },
      { id: "big-wave-draft", name: "Kona Big Wave", desc: "Golden ale.", priceCents: 650 },
      { id: "yuengling-draft", name: "Yuengling", priceCents: 550 },
      { id: "seasonal-draft", name: "Seasonal Rotator", desc: "Ask your bartender what's pouring.", priceCents: 700 },
    ],
  },
  {
    id: "bottles",
    title: "Bottles & Cans",
    items: [
      { id: "budweiser", name: "Budweiser", priceCents: 450 },
      { id: "bud-light-bottle", name: "Bud Light", priceCents: 450 },
      { id: "coors-light", name: "Coors Light", priceCents: 450 },
      { id: "miller-lite", name: "Miller Lite", priceCents: 450 },
      { id: "corona", name: "Corona Extra", priceCents: 550 },
      { id: "modelo", name: "Modelo Especial", priceCents: 550 },
      { id: "heineken", name: "Heineken", priceCents: 550 },
      { id: "na-beer", name: "O'Doul's (N/A)", priceCents: 400 },
    ],
  },
  {
    id: "seltzers",
    title: "Seltzers & Ciders",
    items: [
      { id: "white-claw", name: "White Claw", desc: "Black cherry, mango or lime.", priceCents: 550, hot: true },
      { id: "truly", name: "Truly", desc: "Wild berry or citrus.", priceCents: 550 },
      { id: "high-noon", name: "High Noon", desc: "Vodka seltzer.", priceCents: 650 },
      { id: "angry-orchard", name: "Angry Orchard", desc: "Crisp apple cider.", priceCents: 550 },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    blurb: "Well pours unless you name a brand.",
    items: [
      { id: "rum-runner", name: "Seadrift Rum Runner", desc: "Light and dark rum, blackberry, banana and citrus.", priceCents: 1100, hot: true },
      { id: "painkiller", name: "Painkiller", desc: "Rum, pineapple, orange and coconut with fresh nutmeg.", priceCents: 1100 },
      { id: "margarita", name: "Margarita", desc: "On the rocks or frozen. Add salt.", priceCents: 950, hot: true },
      { id: "long-island", name: "Long Island Iced Tea", priceCents: 1100 },
      { id: "bloody-mary", name: "Bloody Mary", desc: "Loaded garnish. Good for a Sunday.", priceCents: 950 },
      { id: "rum-punch", name: "Beach Punch", desc: "Rum, fruit juice and a float of grenadine.", priceCents: 950 },
      { id: "well-drink", name: "Well Drink", desc: "Any well liquor with a standard mixer.", priceCents: 700 },
    ],
  },
  {
    id: "shots",
    title: "Shots",
    items: [
      { id: "fireball", name: "Fireball", priceCents: 600 },
      { id: "green-tea", name: "Green Tea", priceCents: 700 },
      { id: "lemon-drop", name: "Lemon Drop", priceCents: 700 },
      { id: "washington-apple", name: "Washington Apple", priceCents: 700 },
      { id: "tequila-shot", name: "Tequila", desc: "Salt and lime on request.", priceCents: 700 },
    ],
  },
  {
    id: "wine",
    title: "Wine",
    blurb: "By the glass.",
    items: [
      { id: "house-red", name: "House Red", desc: "Cabernet or merlot.", priceCents: 700 },
      { id: "house-white", name: "House White", desc: "Chardonnay or pinot grigio.", priceCents: 700 },
      { id: "moscato", name: "Moscato", priceCents: 750 },
      { id: "prosecco", name: "Prosecco", priceCents: 850 },
    ],
  },
  {
    id: "nonalcoholic",
    title: "Non-Alcoholic",
    items: [
      { id: "fountain-soda", name: "Fountain Soda", desc: "Free refills.", priceCents: 300 },
      { id: "iced-tea", name: "Iced Tea", desc: "Sweet or unsweet.", priceCents: 300 },
      { id: "lemonade", name: "Lemonade", priceCents: 300 },
      { id: "coffee", name: "Coffee", priceCents: 300 },
      { id: "red-bull", name: "Red Bull", priceCents: 450 },
      { id: "bottled-water", name: "Bottled Water", priceCents: 250 },
    ],
  },
];

export function formatDrinkPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}
