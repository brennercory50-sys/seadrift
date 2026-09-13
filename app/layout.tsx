import type { Metadata, Viewport } from "next";
import { Barlow, Oswald, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileDock } from "@/components/MobileDock";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seadriftobs.com"),
  title: {
    template: "%s | Seadrift Sports Bar & Grill",
    default: "Seadrift Sports Bar & Grill | Ormond Beach, FL",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0D0D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${oswald.variable} ${permanentMarker.variable}`}
    >
      <body>
        <a className="skip" href="#main">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileDock />
      </body>
    </html>
  );
}
