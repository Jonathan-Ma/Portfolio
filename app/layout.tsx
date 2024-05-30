import type { Metadata } from "next";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Ma | Portfolio",
  description: "Jack of all trades master of none",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white h-[5000px]`}>
        <div className="relative min-h-screen flex -z-[100]">
          <img src="./B33LRGB_fb.png" className="absolute object-right h-full object-cover md:object-cover md:w-full md:h-full opacity-45" alt="Intro Image" />
          <div className="absolute bottom-0 w-full h-[10rem] bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
