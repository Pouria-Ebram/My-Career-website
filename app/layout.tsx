import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

// Body / UI font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Serif headings (the editorial flourish)
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"], // optical sizing — Fraunces looks great large
});

export const metadata: Metadata = {
  title: "Pouria Ebram — Lead Data Scientist & AI Product Builder",
  description:
    "Lead Data Scientist at I-MED Radiology. A decade across telecom and healthcare. Moving toward AI product leadership.",
  // Open Graph (link previews when shared on LinkedIn, Slack, etc.)
  openGraph: {
    title: "Pouria Ebram",
    description: "Lead Data Scientist & AI Product Builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
