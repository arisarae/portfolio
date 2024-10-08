import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Languages from "@/components/Languages";
import Framework from "@/components/Framework";
import Experience from "@/components/Experience";
import Connect from "@/components/Connect";
import Projects from "@/components/Projects";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar />
    <Intro />
    <main className="px-8 py-7 2sm:p-12 sm:p-20 md:p-28 lg:p-40 space-y-20">
      <About />
      <Languages />
      <Framework />
      <Projects />
      <Connect />
    </main>
    </>
  );
}
