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

import "@/styles/globals.css";


// App Metadata
export const metadata: Metadata = {
  title: "novelty.ai - Break the routine. Feel ALIVE.",
  description: "Novelty.ai is a platform for generating novel ideas. It is a tool to help you break the routine and feel alive.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "novelty.ai",
    statusBarStyle: "default",
  },
  icons: {
    icon: "/n.png",
  },
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
      
      <head>
        {/* Manually add viewport meta here */}
        <meta name="viewport" content="width=device-width; initial-scale=1; viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      
      
      <body className={`${qlaxe.variable} ${kumbhSans.variable} ${bellMT.variable} antialiased h-screen overflow-hidden m-0 p-0`}>
        <div className="app-container w-screen h-screen overflow-hidden fixed inset-0">
          {children}
        </div>
      </body>
    </html>
  );
}
