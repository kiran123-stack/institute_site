import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";

//  Roboto Font Setup
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap", // better performance
});

//  SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Top Computer & Paramedical Institute",
    template: "%s | Professional Institute",
  },
  description:
    "Build Your Future with Professional Computer and Paramedical Skills. Certified courses, affordable fees, and 100% placement assistance.",
  keywords: [
    "computer institute near me",
    "DCA course near me",
    "tally course institute",
    "paramedical courses",
    "ADCA",
  ],
  authors: [{ name: "Institute Admin" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Top Computer & Paramedical Institute",
    description:
      "Job-oriented computer and paramedical courses for your career growth.",
    siteName: "Professional Institute",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.className} flex flex-col min-h-screen bg-white text-gray-800 antialiased overflow-x-hidden w-full`}>
        <Navbar />
        {/* Added overflow-x-hidden here to catch child component bleeds */}
        <main className="flex-grow w-full overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}