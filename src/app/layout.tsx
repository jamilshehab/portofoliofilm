import type { Metadata } from "next";
import localFont from "next/font/local";
import "./assets/css/tailwind.css";
import './assets/css/material.css'
import "./globals.css";
import { Footer, Navbar } from "./components";
 
 
// /const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "My Portofolio",
  description: "Film Maker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="LTR">
      <body
        className=""
      >
        <Navbar navClass="nav-light"/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
