import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tu Partner Contable | Asesoría Contable y Tributaria",
  description: "Servicios profesionales de contabilidad, asesoría tributaria y recursos humanos para empresas en Chile.",
  keywords: ["Contabilidad", "Asesoría Tributaria", "Recursos Humanos", "Pymes", "Chile", "Finanzas"],
  authors: [{ name: "Tu Partner Contable" }],
  creator: "Tu Partner Contable",
  publisher: "Tu Partner Contable",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.tupartnercontable.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tu Partner Contable | Asesoría Contable y Tributaria",
    description: "Servicios profesionales de contabilidad, asesoría tributaria y recursos humanos para empresas en Chile.",
    url: "https://www.tupartnercontable.cl",
    siteName: "Tu Partner Contable",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/Partner-Accounting-Home-01.jpg",
        width: 1200,
        height: 630,
        alt: "Tu Partner Contable - Asesoría Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Partner Contable | Asesoría Contable y Tributaria",
    description: "Servicios profesionales de contabilidad, asesoría tributaria y recursos humanos para empresas en Chile.",
    images: ["/Partner-Accounting-Home-01.jpg"],
  },
  icons: {
    icon: "/logo_icon.png",
    apple: "/logo_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
