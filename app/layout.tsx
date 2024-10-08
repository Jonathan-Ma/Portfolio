import type { Metadata } from "next";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import WeatherWidget from "@/components/WeatherWidget";

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
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-black text-zinc-200`}>
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/B33LRGB_fb.png')", backgroundPosition: "right center", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        ><WeatherWidget/></div>
        <div className="absolute bottom-0 w-full h-[30rem] bg-gradient-to-t from-black to-transparent"></div>
        <Header />
        {children}
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
}
