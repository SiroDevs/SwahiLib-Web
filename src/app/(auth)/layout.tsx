import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { info } from "@/utils/data/app.info";
import Footer from "@/presentation/components/general/footer";
import ScrollToTop from "@/presentation/components/action/scroll.to.top";
import Navbar from "@/presentation/components/action/navbar";
import "@/styles/card.scss";
import "@/styles/globals.scss";
import { checkAuth } from "@/infrastucture/supabase/auth";
import { redirect } from "next/navigation";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = await checkAuth();
  if (isAuthenticated) {
    redirect('/dashboard');
  }
return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Simple auth navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-semibold">
                Your App
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
