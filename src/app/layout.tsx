import type { Metadata } from "next";
import { Orbitron, Press_Start_2P } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-press-start",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shrivas V.M. — Developer · Marketer · Builder",
  description:
    "Portfolio of Shrivas V.M. — Full-Stack Developer, Digital Marketer, and AI enthusiast crafting premium digital experiences.",
  keywords: [
    "Shrivas VM",
    "portfolio",
    "web developer",
    "digital marketer",
    "AI tools",
    "Next.js",
    "Python",
    "public speaking",
  ],
  authors: [{ name: "Shrivas V.M." }],
  creator: "Shrivas V.M.",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Shrivas V.M. — Developer · Marketer · Builder",
    description:
      "Premium portfolio showcasing digital experiences built with precision and craft.",
    siteName: "Shrivas V.M.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrivas V.M. — Developer · Marketer · Builder",
    description:
      "Premium portfolio showcasing digital experiences built with precision and craft.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${pressStart.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
