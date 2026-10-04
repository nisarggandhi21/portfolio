import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { shareMetadata, siteDescription } from "@/lib/seo";
import { rssAlternate, siteTitle, siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const description = siteDescription();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description,
  alternates: {
    canonical: "/",
    types: rssAlternate,
  },
  ...shareMetadata({ title: siteTitle, description, url: "/" }),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
    },
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0c0b09",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="relative min-h-screen bg-bg font-sans text-ink">
        {/* Blueprint grid behind the top of every page */}
        <div
          aria-hidden
          className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[900px]"
        />
        {children}
      </body>
    </html>
  );
}
