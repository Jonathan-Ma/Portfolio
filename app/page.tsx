"use client"
import CanvasComponent from "@/components/CanvasComponent";
import About from "@/components/About";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
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
