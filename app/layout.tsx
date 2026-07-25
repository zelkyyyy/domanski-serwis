import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore: side-effect import of CSS without type declarations
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://domanski.lukow.pl'),
  title: "Strona główna - Domańscy Autoserwis",
  description: "Domańscy Autoserwis - Firma na terenie Łukowa, mechanik, naprawa pojazdów. Chip tuning, Urwane Świece żarowe, Dynamiczna wymiana oleju ATF, Chiptuning, Klimatyzacja",
  openGraph: {
    title: "Strona główna - Domańscy Autoserwis",
    description: "Domańscy Autoserwis - Firma na terenie Łukowa, mechanik, naprawa pojazdów. Chip tuning, Urwane Świece żarowe, Dynamiczna wymiana oleju ATF, Chiptuning, Klimatyzacja",
    url: "https://domanski.lukow.pl/",
    siteName: "Domańscy Autoserwis",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-logo.png", 
      width: 1200,
      height: 630,
      }
    ]
  },
};

 const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://domanski.lukow.pl/#website",
        "url": "https://domanski.lukow.pl/",
        "name": "Domańscy Autoserwis",
        "description": "Firma na terenie Łukowa, mechanik, naprawa pojazdów. Chip tuning, Urwane Świece żarowe, Dynamiczna wymiana oleju ATF, Chiptuning, Klimatyzacja",
        "inLanguage": "pl-PL"
      },
      {
        "@type": "WebPage",
        "@id": "https://domanski.lukow.pl/",
        "url": "https://domanski.lukow.pl/",
        "name": "Strona główna - Domańscy Autoserwis",
        "isPartOf": {
          "@id": "https://domanski.lukow.pl/#website"
        },
        "inLanguage": "pl-PL"
      }
    ]
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

        {children}
      <Footer />
      
      </body>
    </html>
  );
}
