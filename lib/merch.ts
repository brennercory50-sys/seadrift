/* ---------------------------------------------------------------
   PLACEHOLDER CATALOG — replace with the bar's real merch.
   Names, prices, sizes and stock counts below are invented stand-ins
   so the shop UI has something to render. Nothing here reflects
   actual Seadrift inventory.
---------------------------------------------------------------- */

export type MerchCategory = "apparel" | "hats";

export type MerchProduct = {
  id: string;
  name: string;
  desc?: string;
  priceCents: number;
  category: MerchCategory;
  /** Selectable sizes. A single entry renders as a plain label. */
  sizes: string[];
  /** Units on hand per size. Missing or 0 renders as sold out. */
  stock: Record<string, number>;
  hot?: boolean;
};

export const APPAREL_SIZES = ["S", "M", "L", "XL", "2XL"];
export const ONE_SIZE = ["One Size"];

export const MERCH: MerchProduct[] = [
  {
    id: "logo-tee",
    name: "Seadrift Logo Tee",
    desc: "Soft cotton tee with the classic Seadrift wave logo across the chest.",
    priceCents: 2400,
    category: "apparel",
    sizes: APPAREL_SIZES,
    stock: { S: 8, M: 14, L: 12, XL: 6, "2XL": 3 },
    hot: true,
  },
  {
    id: "long-sleeve-tee",
    name: "Ormond Beach Long Sleeve",
    desc: "Long sleeve tee with the bar's address printed down one arm.",
    priceCents: 3000,
    category: "apparel",
    sizes: APPAREL_SIZES,
    stock: { S: 4, M: 9, L: 7, XL: 5, "2XL": 0 },
  },
  {
    id: "pullover-hoodie",
    name: "Pullover Hoodie",
    desc: "Heavyweight fleece hoodie with an embroidered front logo.",
    priceCents: 5000,
    category: "apparel",
    sizes: APPAREL_SIZES,
    stock: { S: 2, M: 6, L: 8, XL: 4, "2XL": 2 },
    hot: true,
  },
  {
    id: "tank-top",
    name: "Beach Tank",
    desc: "Lightweight tank for the patio and the pool tables.",
    priceCents: 2200,
    category: "apparel",
    sizes: APPAREL_SIZES,
    stock: { S: 5, M: 7, L: 5, XL: 3, "2XL": 0 },
  },
  {
    id: "trucker-hat",
    name: "Trucker Hat",
    desc: "Mesh back, snap closure, embroidered wave patch.",
    priceCents: 2800,
    category: "hats",
    sizes: ONE_SIZE,
    stock: { "One Size": 18 },
    hot: true,
  },
  {
    id: "snapback-cap",
    name: "Snapback Cap",
    desc: "Flat brim snapback with the full Sports Bar & Grill wordmark.",
    priceCents: 3000,
    category: "hats",
    sizes: ONE_SIZE,
    stock: { "One Size": 11 },
  },
  {
    id: "beanie",
    name: "Knit Beanie",
    desc: "Cuffed knit beanie for the handful of cold nights we get.",
    priceCents: 2400,
    category: "hats",
    sizes: ONE_SIZE,
    stock: { "One Size": 6 },
  },
  {
    id: "visor",
    name: "Sun Visor",
    desc: "Adjustable visor, built for A1A afternoons.",
    priceCents: 2200,
    category: "hats",
    sizes: ONE_SIZE,
    stock: { "One Size": 0 },
  },
];

export const MERCH_SECTIONS: { id: MerchCategory; title: string; blurb: string }[] =
  [
    {
      id: "apparel",
      title: "Shirts & Hoodies",
      blurb: "Wear it to the game, wear it to the beach.",
    },
    {
      id: "hats",
      title: "Hats",
      blurb: "Caps, beanies and visors — mostly one size, all adjustable.",
    },
  ];

const MERCH_BY_ID = new Map(MERCH.map((product) => [product.id, product]));

export function getMerchProduct(id: string): MerchProduct | undefined {
  return MERCH_BY_ID.get(id);
}

export function stockFor(product: MerchProduct, size: string): number {
  return product.stock[size] ?? 0;
}

export function totalStock(product: MerchProduct): number {
  return product.sizes.reduce((sum, size) => sum + stockFor(product, size), 0);
}
