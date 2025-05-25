import Cert from "@/components/main/Cert";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-24">
        <Hero />
        <About />
        <Skills />
        <Cert />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
