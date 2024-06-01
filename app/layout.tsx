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
      <body className={`${inter.className} bg-black text-blue-50 h-[5000px]`}>
        <div className="relative min-h-screen flex -z-[100]">
          <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/B33LRGB_fb.png')", backgroundPosition: "right center", backgroundAttachment: "fixed" }}
          ></div>
          <div className="absolute bottom-0 w-full h-[30rem] bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
