import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";

// Configure fonts based on design guidelines
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// Global SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Top Computer & Paramedical Institute",
    template: "%s | Professional Institute",
  },
  description: "Build Your Future with Professional Computer and Paramedical Skills. Certified courses, affordable fees, and 100% placement assistance.",
  keywords: ["computer institute near me", "DCA course near me", "tally course institute", "paramedical courses", "ADCA"],
  authors: [{ name: "Institute Admin" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Top Computer & Paramedical Institute",
    description: "Job-oriented computer and paramedical courses for your career growth.",
    siteName: "Professional Institute",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="flex flex-col min-h-screen bg-[#FFFFFF] text-gray-800 font-sans antialiased">
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}