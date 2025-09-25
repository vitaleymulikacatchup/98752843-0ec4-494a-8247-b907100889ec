import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BrainRot Coin — Fun memecoin with simple buy steps",
  description: "BrainRot Coin is a playful memecoin with clear buy steps, transparent tokenomics, and a community-driven vibe for fast, fun crypto wins.",
  keywords: ["memecoin", "crypto", "brain rot coin", "buy crypto", "tokenomics", "web3", "community", "BRN"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BrainRot Coin — Fun memecoin with simple buy steps",
    description: "BrainRot Coin is a playful memecoin with clear buy steps, transparent tokenomics, and a community-driven vibe for fast, fun crypto wins.",
    type: "website",
    url: "/",
    siteName: "BrainRot Coin",
    images: [{
      url: "/images/logo.svg",
      width: 1200,
      height: 630,
      alt: "BrainRot Coin — Fun memecoin with simple buy steps"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainRot Coin — Fun memecoin with simple buy steps",
    description: "BrainRot Coin is a playful memecoin with clear buy steps, transparent tokenomics, and a community-driven vibe for fast, fun crypto wins.",
    images: ["/images/logo.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}