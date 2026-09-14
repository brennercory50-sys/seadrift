import { getMenuItem } from "./menu";
import { getMerchProduct, stockFor } from "./merch";

/** What the cart needs to know about anything it holds. */
export type CatalogEntry = {
  id: string;
  name: string;
  priceCents: number;
  kind: "food" | "merch";
  /** Shown price is a starting price — final total settled at pickup. */
  variablePrice?: boolean;
};

export function getCatalogEntry(id: string): CatalogEntry | undefined {
  const item = getMenuItem(id);
  if (item) {
    return {
      id: item.id,
      name: item.name,
      priceCents: item.priceCents,
      kind: "food",
      variablePrice: item.variablePrice,
    };
  }

  const product = getMerchProduct(id);
  if (product) {
    return {
      id: product.id,
      name: product.name,
      priceCents: product.priceCents,
      kind: "merch",
    };
  }

  return undefined;
}

/** Cart identity: merch is per-size, food is per-item. */
export function makeLineId(itemId: string, variant?: string): string {
  return variant ? `${itemId}::${variant}` : itemId;
}

/**
 * Units available for a given line, or null when the line has no
 * stock ceiling (food is made to order).
 */
export function availableStock(itemId: string, variant?: string): number | null {
  const product = getMerchProduct(itemId);
  if (!product) return null;
  return stockFor(product, variant ?? product.sizes[0]);
}
