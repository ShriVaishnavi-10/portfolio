import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shri Vaishnavi | Portfolio",
  description: "Boutique digital portfolio of Shri Vaishnavi, Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${jakarta.variable} ${inter.variable} font-jakarta antialiased`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
