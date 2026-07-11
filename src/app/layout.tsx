import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ChatWidget } from "@/components/layout/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PROfix Appliance Care | #1 Appliance Repair in Kenya",
  description:
    "Professional repair, maintenance, installation, consultation & recovery services for all home and commercial appliances in Nairobi and surrounding areas.",
  keywords: [
    "appliance repair Kenya",
    "fridge repair Nairobi",
    "HVAC services",
    "washing machine repair",
    "PROfix Appliance Care",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <TopBar />
        <Header />
        <main>{children}</main>
        <ChatWidget />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
