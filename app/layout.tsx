import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BeautiCare AI - AI-Powered Skincare Solutions",
  description:
    "Discover the future of skincare with BeautiCare AI. AI-powered insights for your personal beauty journey.",
  keywords:
    "AI, skincare, beauty, artificial intelligence, personalized skincare, beauty tech",
  authors: [{ name: "BeautiCare AI Team" }],
  openGraph: {
    title: "BeautiCare AI - AI-Powered Skincare Solutions",
    description: "AI-powered insights for your personal beauty journey.",
    type: "website",
    locale: "en_US",
  },
  generator: "v0.dev",
  icons: {
    icon: "/faviconbe.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
