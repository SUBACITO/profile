import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono  } from "next/font/google";
import "@/public/styles/global.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],         // hoặc ["latin-ext"] nếu cần
  weight: ["400", "500", "700"], // các trọng số bạn muốn
});

export const metadata: Metadata = {
  title: "DEV SUBACITO",
  description: "Hello World!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrains.className} antialiased`} 
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
