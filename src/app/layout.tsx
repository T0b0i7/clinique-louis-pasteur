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
  title: "Clinique Louis Pasteur | Porto-Novo, Bénin",
  description:
    "Clinique polyvalente à Porto-Novo depuis 1998. Plus de 20 spécialités, laboratoire et radiologie 24h/24, maternité, hospitalisation, ambulance et examens médicaux pour l'immigration canadienne.",
  keywords: [
    "Clinique Louis Pasteur",
    "clinique Porto-Novo",
    "hôpital Porto-Novo",
    "santé Bénin",
    "maternité Porto-Novo",
    "examens immigration Canada",
    "laboratoire 24h",
    "radiologie Porto-Novo",
  ],
  authors: [{ name: "Clinique Louis Pasteur" }],
  creator: "Clinique Louis Pasteur",
  publisher: "Clinique Louis Pasteur",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Clinique Louis Pasteur | Porto-Novo, Bénin",
    description:
      "Une clinique polyvalente au service des patients depuis 1998. Spécialités, maternité, hospitalisation, laboratoire et radiologie 24h/24 à Porto-Novo.",
    url: "https://cliniquelouispasteur.bj",
    siteName: "Clinique Louis Pasteur",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinique Louis Pasteur | Porto-Novo, Bénin",
    description:
      "Plus de 20 spécialités, des urgences 24h/24 et des examens d'immigration Canada à Porto-Novo.",
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
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased text-navy-dark bg-hospital-bg font-sans selection:bg-primary/20 selection:text-secondary`}
      >
        {children}
      </body>
    </html>
  );
}
