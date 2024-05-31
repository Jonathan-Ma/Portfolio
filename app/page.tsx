import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="z-[100] font-sans w-full h-full top-[0rem] absolute flex flex-col items-center justify-center">
      <Intro/>
      <SectionDivider/>
      <About/>
    </main>
  );
}
