/**
 * Root Layout Component
 * 
 * This file defines the root layout for novelty.ai app. It implements:
 * - Global fonts.
 * - Metadata.
 * - Global State Management.
 */
// Imports
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";


// App Metadata
export const metadata: Metadata = {
  title: "novelty.ai - Break the routine. Feel ALIVE.",
  description: "Novelty.ai is a platform for generating novel ideas. It is a tool to help you break the routine and feel alive.",
};

// Fonts
const qlaxe = localFont({
  src: "../fonts/QlaxeSerif-Black.woff2",
  variable: "--font-qlaxe",
});
const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});
const bellMT = localFont({
  src: "../fonts/Bell MT Regular.woff2",
  variable: "--font-bell-mt",
});


// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="h-screen overflow-hidden">
      <body className={`${qlaxe.variable} ${kumbhSans.variable} ${bellMT.variable} antialiased h-screen overflow-hidden m-0 p-0`}>
        <div className="app-container w-screen h-screen overflow-hidden fixed inset-0">
          {children}
        </div>
      </body>
    </html>
  );
}
