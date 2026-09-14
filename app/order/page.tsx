import type { Metadata } from "next";
import { OrderClient } from "./OrderClient";

export const metadata: Metadata = {
  title: "Your Order",
  description:
    "Review your Seadrift Sports Bar & Grill order and check out for pickup in Ormond Beach.",
  alternates: {
    canonical: "/order",
  },
  robots: {
    index: false,
  },
};

export default function OrderPage() {
  return <OrderClient />;
}
