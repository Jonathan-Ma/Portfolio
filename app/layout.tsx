import type { Metadata } from "next";
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
      <body className={`${inter.className} bg-black text-gray-950`}>
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] "></div> */}
        {/* <div className="sm:w-[200rem] m:w-[90rem]">
          <img src="./B33LRGB_fb.png" className=" w-full h-full opacity-75  "/>
        </div>
        <div className="absolute bottom-0 w-full h-[10rem] bg-gradient-to-t from-black"></div> */}
        <div className="relative style=w-500px left-400px md:{relative min-h-screen flex}">
          <img src="./B33LRGB_fb.png" className="absolute object-cover object-right md: {w-full h-full object-cover} opacity-75" alt="Intro Image" />
          <div className="absolute bottom-0 w-full h-[10rem] bg-gradient-to-t from-black to-transparent"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
