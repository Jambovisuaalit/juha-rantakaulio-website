import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juha Rantakaulio Oy | Lämpötilahallittu logistiikka",
  description:
    "Lämpötilahallitut kuljetukset, elintarvikelogistiikka ja terminaalipalvelut Kouvolasta koko Suomeen.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
