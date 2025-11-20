import type { Metadata } from "next";
import { Sen, Teko } from "next/font/google";
import './globals.scss';
import { texts } from '@/app/i18n';

// components
import TopMenu from "@/components/TopMenu";
import Footer from "@/components/Footer";
import React from "react";

const senFont = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
});

const tekoFont = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
});

const { metadata: meta } = texts.en;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords || 'developer, portfolio, frontend, react, nextjs',
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: 'https://igor-edison.ru',
    siteName: meta.title,
    images: [
      {
        url: '/image/i_edison.jpg',
        width: 1200,
        height: 630,
        alt: 'Igor Edison',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    images: ['/image/i_edison.jpg'],
  },
  metadataBase: new URL('https://igor-edison.ru'),
  alternates: {
    canonical: 'https://igor-edison.ru',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${senFont.variable} ${tekoFont.variable} antialiased`}
      >
        <header className="relative"> <TopMenu /> </header>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
