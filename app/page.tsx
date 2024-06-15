"use client"
import CanvasComponent from "@/components/CanvasComponent";
import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import '/app/globals.css'

export default function Home() {
  return (
    <main className="font-sans w-full top-[0rem] absolute flex flex-col items-center justify-center">
      <Intro />
      <SectionDivider />
      <About />
      <div className="canvas-container">
        <CanvasComponent />
      </div>
    </main>
  );
}
