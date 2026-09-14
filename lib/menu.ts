export type MenuItem = {
  id: string;
  name: string;
  desc?: string;
  priceCents: number;
  hot?: boolean;
  addLabel?: string;
  addPriceCents?: number;
  /** Shown price is a starting price — final total is settled at pickup. */
  variablePrice?: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  blurb?: string;
  items: MenuItem[];
};

export const MENU: MenuSection[] = [
  {
    id: "starters",
    title: "First Down Starters",
    blurb: "Built for sharing across a table full of people watching the game.",
    items: [
      { id: "touchdown-wings", name: "Touchdown Wings (10)", desc: "Mild, medium, hot, suicide, lemon pepper, cajun, teriyaki, BBQ or garlic parm.", priceCents: 1895, hot: true },
      { id: "seadrift-sampler", name: "Seadrift Sampler", desc: "Your choice of any 3 of our mouth-watering appetizers.", priceCents: 1695, hot: true },
      { id: "gator-bites", name: "Gator Bites", desc: "Half-pound of cajun breaded Louisiana style gator.", priceCents: 1595, hot: true },
      { id: "firecracker-shrimp", name: "Firecracker Shrimp", desc: "10 lightly breaded fried shrimp tossed in firecracker sauce.", priceCents: 1295, hot: true },
      { id: "shrimp-skewers", name: "Shrimp Skewers (10)", desc: "Blackened or grilled shrimp served with lemon butter.", priceCents: 1295 },
      { id: "fish-dip", name: "Fish Dip", desc: "Smoked fish dip with pickled jalapenos, diced onions and tomatoes.", priceCents: 1295 },
      { id: "crabby-cakes", name: "Crabby Cakes", desc: "4 oz patties filled with chunks of crab, with cajun sauce.", priceCents: 1295 },
      { id: "ham-blaster", name: "The Ham Blaster", desc: "Slices of ham with a choice of side: chips, salad, fries, rings or coleslaw.", priceCents: 1295 },
      { id: "cheese-wave-curds", name: "Cheese Wave Curds", desc: "Half-pound of deep fried premium cheese curds served with a side of cajun sauce.", priceCents: 1195 },
      { id: "tidal-tator-kegs", name: "Tidal Tator Kegs (8)", desc: "Cheddar and bacon filled tator kegs.", priceCents: 1195 },
      { id: "drifters-breakfast-sandwich", name: "Drifters Breakfast Sandwich", desc: "Morning sandwich with choice of side — fries, salad or classic American sides.", priceCents: 1195 },
      { id: "shrimp-jammers", name: "Shrimp Jammers", desc: "Fried shrimp stuffed with 3 cheeses and jalapeno, served with sweet chili sauce.", priceCents: 1095 },
      { id: "high-tide-mushrooms", name: "High Tide Mushrooms", desc: "Half-pound basket served with dijon horseradish sauce.", priceCents: 1095 },
      { id: "zucchini-fries", name: "Zucchini Fries", desc: "Battered zucchini fries served with sriracha ranch dressing.", priceCents: 1095 },
      { id: "golden-onion-rings", name: "Golden Onion Rings", desc: "Hand-breaded onion rings fried to golden brown, served with a dipping sauce.", priceCents: 1095 },
      { id: "sunset-corn-fritters", name: "Sunset Corn Fritters", desc: "Half-pound deep fried, served with a side of ranch sauce.", priceCents: 1095 },
      { id: "jalapeno-poppers", name: "Jalapeno Poppers", desc: "Spicy cream cheese-stuffed jalapeños, breaded and deep-fried to golden perfection.", priceCents: 995 },
      { id: "salty-swirl", name: "Salty Swirl", desc: "Crispy snack served with your choice of side — fries, chips, onion rings or salad.", priceCents: 975 },
      { id: "surfside-fries", name: "Surfside Fries", desc: "Basket of steak fries — plain, salted or cajun style.", priceCents: 795 },
      { id: "deep-blue-dog", name: "Deep Blue Dog", desc: "One all-beef hot dog. Add raw onions or relish on request.", priceCents: 600 },
    ],
  },
  {
    id: "burgers",
    title: "Handhelds & Burgers",
    blurb: "Every burger is a half-pound, hand pressed. Sides available with most handhelds.",
    items: [
      { id: "swiss-burger", name: "Swiss Burger", desc: "Half-pound hand pressed burger with thick apple bacon and swiss cheese.", priceCents: 1595, hot: true },
      { id: "bacon-bleu", name: "Bacon Bleu", desc: "Half-pound pressed burger topped with bleu cheese.", priceCents: 1595 },
      { id: "sailors-club", name: "Sailor's Club", desc: "Classic club sandwich. Choice of side: fries (regular, steak or cajun), salad or coleslaw.", priceCents: 1595, hot: true },
      { id: "patty-melt", name: "Patty Melt", desc: "Half-pound pressed burger, grilled onions, swiss cheese and thousand island dressing.", priceCents: 1495 },
      { id: "classic-american-burger", name: "Classic American Burger", desc: "Half-pound hand pressed burger with American cheese, lettuce, tomato and red onion.", priceCents: 1395, hot: true },
      { id: "buffalo-chicken-caesar", name: "Buffalo Chicken Caesar", desc: "Romaine lettuce, tomato, croutons, shredded parmesan and caesar dressing.", priceCents: 1395 },
      { id: "cuban-sandwich", name: "Cuban Sandwich", desc: "Ham, seasoned Cuban pork, melted swiss cheese, mayo, mustard and pickle.", priceCents: 1295 },
      { id: "philly-sandwich", name: "Philly Sandwich", desc: "Steak topped with provolone, green peppers, onions and mushrooms.", priceCents: 1295 },
      { id: "reef-reuben", name: "Reef Reuben", desc: "Corn beef, sauerkraut, swiss cheese and thousand island.", priceCents: 1295 },
      { id: "seaside-pastrami", name: "Seaside Pastrami", desc: "Premium pastrami topped with swiss and dijon mustard, grilled to perfection.", priceCents: 1295 },
      { id: "beach-blt", name: "Beach BLT", desc: "Thick apple bacon stacked with lettuce, tomatoes and mayo on fresh toasted bread.", priceCents: 1295 },
      { id: "chicken-sandwich", name: "Chicken Sandwich", desc: "8 oz chicken breast, grilled or blackened, served with lettuce and tomato.", priceCents: 1295 },
      { id: "veggie-sandwich", name: "Veggie Sandwich", desc: "Lettuce, tomato, onion, cucumber, carrots, feta cheese and green peppers. Vegan on request.", priceCents: 995 },
      { id: "grilled-cheese", name: "Grilled Cheese", priceCents: 895 },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    blurb: "Dressings: blue cheese, ranch, italian or caesar.",
    items: [
      { id: "harbor-chef", name: "Harbor Chef", desc: "Oven roasted turkey breast, black forest ham and provolone cheese.", priceCents: 1495 },
      { id: "house-shore", name: "House Shore", desc: "Iceberg lettuce, tomato, onion, cucumber and shredded cheddar.", priceCents: 1095 },
      { id: "caesar-salad", name: "Caesar Salad", desc: "Romaine lettuce, parmesan cheese and seasoned croutons topped with caesar.", priceCents: 1095 },
      { id: "greek-island", name: "Greek Island", desc: "Crisp romaine lettuce, cucumbers, green pepper and grape tomatoes.", priceCents: 1095 },
      { id: "side-caesar", name: "Side Caesar", desc: "Romaine lettuce, parmesan cheese and seasoned croutons topped with caesar.", priceCents: 695 },
      { id: "side-salad", name: "Side Salad", desc: "Iceberg lettuce, tomato, onion, cucumber and shredded cheddar.", priceCents: 695 },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    blurb: "Signature crust, house-made sauce and a blend of cheeses on every pie.",
    items: [
      { id: "meat-lovers-pizza", name: "Meat Lovers Pizza", desc: "Pepperoni, sausage, bacon, ham and Italian sausage on a classic pizza base.", priceCents: 1795 },
      { id: "veggie-supreme-pizza", name: "Veggie Supreme Pizza", desc: "Mushrooms, black olives, onions, green peppers, broccoli, pepperoni and sausage.", priceCents: 1795 },
      { id: "hawaiian-pizza", name: "Hawaiian Pizza", desc: "Ham, pineapple and cheese on a tomato pizza sauce base.", priceCents: 1495 },
      { id: "pepperoni-pizza", name: "Pepperoni Pizza", desc: "A savory combination of melted cheese, zesty tomato sauce and crispy pepperoni slices.", priceCents: 1395 },
      { id: "classic-cheese-pizza", name: "Classic Cheese Pizza", desc: "House-made tomato sauce and a blend of cheeses on a classic crust.", priceCents: 1295 },
      { id: "build-your-own-pizza", name: "Build Your Own Pizza", desc: "Build your own with your choice of toppings, starting with our signature crust, sauce and cheese.", priceCents: 1295, variablePrice: true },
    ],
  },
  {
    id: "soup",
    title: "Soup",
    items: [
      { id: "homemade-chili", name: "Homemade Chili", desc: "Topped with cheese and onions.", priceCents: 795, addLabel: "Add grilled cheese", addPriceCents: 200 },
      { id: "soup-of-the-day", name: "Soup Of The Day", priceCents: 795, addLabel: "Add grilled cheese", addPriceCents: 200 },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { id: "lava-overload", name: "Lava Overload", desc: "Rich, molten chocolate center. Available in small or large.", priceCents: 795, variablePrice: true },
      { id: "tiramisu-nightcap", name: "Tiramisu Nightcap", desc: "Espresso-soaked ladyfingers layered with mascarpone and a hint of coffee liqueur, topped with cocoa powder.", priceCents: 795 },
    ],
  },
];

const ITEMS_BY_ID = new Map(
  MENU.flatMap((section) => section.items).map((item) => [item.id, item])
);

export function getMenuItem(id: string): MenuItem | undefined {
  return ITEMS_BY_ID.get(id);
}

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export function formatItemPrice(item: MenuItem): string {
  return `${formatPrice(item.priceCents)}${item.variablePrice ? "+" : ""}`;
}

/** Volusia County, FL. Confirm with the bar's accountant before going live. */
export const TAX_RATE = 0.065;
