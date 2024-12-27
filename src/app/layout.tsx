import type { Metadata } from "next";
import { Sen, Teko } from "next/font/google";
import './globals.scss';

// components
import TopMenu from "@/components/TopMenu";
import Footer from "@/components/Footer";

const senFont = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
});

const tekoFont = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Igor Edison",
  description: "Personal page about me",
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
