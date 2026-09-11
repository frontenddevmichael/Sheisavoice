import type { Metadata, Viewport } from "next";
import { Epilogue, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
  weight: ["600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://sheisavoice.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SHEISAVOICE | Global Children Advocacy Foundation",
    template: "%s | SHEISAVOICE Foundation",
  },
  description:
    "SHEISAVOICE is a social impact and advocacy organization committed to supporting children with special needs and students facing financial hardship across Africa.",
  keywords: [
    "children advocacy",
    "special needs",
    "Nigeria",
    "Africa",
    "education",
    "child safeguarding",
    "nonprofit",
    "social impact",
    "therapy",
    "inclusive education",
  ],
  authors: [{ name: "SHEISAVOICE Foundation" }],
  creator: "SHEISAVOICE Foundation",
  publisher: "SHEISAVOICE Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "SHEISAVOICE Foundation",
    title: "SHEISAVOICE | Global Children Advocacy Foundation",
    description:
      "Amplifying the Voice of the Unheard. Supporting children with special needs and students facing financial hardship across Africa.",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "SHEISAVOICE Global Children Advocacy Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHEISAVOICE | Global Children Advocacy Foundation",
    description:
      "Amplifying the Voice of the Unheard. Supporting children with special needs and students facing financial hardship across Africa.",
    images: ["/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.jpeg" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${epilogue.variable} ${manrope.variable} font-body bg-surface text-on-surface antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
