import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MediCare Hospital | Advanced Healthcare, Compassionate Care",
  description: "Experience luxury, modern, and production-quality healthcare at MediCare Hospital. Featuring advanced medical technologies, world-class specialists, and customized treatment programs.",
  keywords: ["MediCare Hospital", "luxury healthcare", "advanced medical technology", "best cardiologists", "modern surgery clinic", "private hospital", "expert doctors"],
  authors: [{ name: "MediCare Hospital Editorial Team" }],
  creator: "MediCare Hospital",
  publisher: "MediCare Hospital Group",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "MediCare Hospital | Advanced Healthcare & Compassionate Care",
    description: "Welcome to MediCare Hospital, offering state-of-the-art diagnostics, treatments, and compassionate patient recovery plans. Discover our departments, elite doctors, and custom checkup packages.",
    url: "https://medicare-hospital.vercel.app",
    siteName: "MediCare Hospital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediCare Hospital | Modern Private Healthcare",
    description: "Experience premium, state-of-the-art medical services at MediCare Hospital.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased text-navy-dark bg-hospital-bg font-sans selection:bg-primary/20 selection:text-secondary`}
      >
        {children}
      </body>
    </html>
  );
}
