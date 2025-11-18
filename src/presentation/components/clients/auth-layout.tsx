// app/(auth)/AuthLayoutClient.tsx
"use client";

import { info } from "@/core/utils/data/app.info";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-3">
              <Image 
                src={info.appIcon} 
                width={32} 
                height={32} 
                alt="SwahiLib" 
                className="w-8 h-8" 
              />
              <span className="text-xl font-semibold text-gray-900">
                SwahiLib
              </span>
            </div>
            <div className="flex items-center">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 flex items-center space-x-1 transition-colors"
              >
                <span>←</span>
                <span>Rejea Nyumbani</span>
              </Link>
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
