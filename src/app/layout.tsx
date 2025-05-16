import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";
import { AppProviders } from "@/providers/AppProviders";

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
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}