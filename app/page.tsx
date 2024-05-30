import About from "@/components/about";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="z-[100] w-full top-40 absolute h-full">
      <Intro/>
      <About/>
    </main>
  );
}
