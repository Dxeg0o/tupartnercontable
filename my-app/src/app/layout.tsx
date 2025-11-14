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
  title: "Partner Accounting | Asesoría Contable & Tributaria",
  description:
    "Consultoría contable, financiera y tributaria para empresas en Santiago de Chile. Optimiza tus procesos con Partner Accounting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f6f7fb] text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
