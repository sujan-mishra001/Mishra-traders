import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer  from "./components/Footer";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mishra Brother's",
  description: "Mishra Brother's provides the services for fabrication, refurbishing of house interior & ecterior ,that has been serving the community for over 5 years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <head>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Signika+Negative:wght@400;700&display=swap" rel="stylesheet" />
      </head>  
      <body className="flex flex-col min-h-screen">
        <header>
          <Header />
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
