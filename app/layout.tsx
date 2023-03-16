import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What The Floor - The Ultimate NFT Tracker in Zilliqa",
  description:
    "Discover the power of Zilliqa NFT analytics with What The Floor! Our platform provides real-time data insights for token distribution, pricing trends, and more. Explore the market with confidence and gain a competitive edge. Visit us today and start analyzing your Zilliqa NFT portfolio like never before!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
