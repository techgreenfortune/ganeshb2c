import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
import { AppProviders } from "@/providers/AppProviders";

const switzer = localFont({
  src: [
    {
      path: '../fonts/Switzer-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-switzer',
});

export const metadata: Metadata = {
  title: "GreenFortune - Find the best deals",
  description: "Find the best deals and offers on GreenFortune",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${switzer.variable} font-sans`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}