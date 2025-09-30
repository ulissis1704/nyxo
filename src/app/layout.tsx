import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NyxoSolution - Audit & Développement Web & Mobile | Rabat, Maroc",
  description: "NyxoSolution basé à Rabat, Maroc. Audit digital, développement web et mobile. Solutions performantes et sécurisées pour entreprises au Maroc et à l'international.",
  keywords: "audit digital Rabat, développement web Maroc, solutions mobiles, NyxoSolution, Hamza Bayahia, audit sécurité, développement full-stack, Next.js, TypeScript, Rabat, Casablanca",
  authors: [{ name: "Hamza Bayahia", url: "https://nyxosolution.com" }],
  creator: "NyxoSolution",
  publisher: "NyxoSolution",
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "NyxoSolution - Audit & Développement Web & Mobile",
    description: "Transformez vos idées en solutions digitales performantes. Audit, développement web et mobile à Rabat, Maroc.",
    type: "website",
    locale: "fr_FR",
    siteName: "NyxoSolution",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "NyxoSolution - Audit & Développement Web & Mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NyxoSolution - Audit & Développement Web & Mobile",
    description: "Transformez vos idées en solutions digitales performantes. Basé à Rabat, Maroc.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "https://nyxosolution.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
