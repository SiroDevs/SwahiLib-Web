import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { info } from "@/utils/data/app.info";
import Footer from "@/presentation/components/general/footer";
import ScrollToTop from "@/presentation/components/action/scroll.to.top";
import Navbar from "@/presentation/components/action/navbar";
import "@/styles/card.scss";
import "@/styles/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${info.callout} - ${info.tagline}`,
  description: info.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
