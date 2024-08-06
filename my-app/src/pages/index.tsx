import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Intro";
import Languages from "@/components/Languages";
import Framework from "@/components/Framework";
import Experience from "@/components/Experience";
import Connect from "@/components/Connect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="px-8 py-7 space-y-16">
      <Header />
      <Languages />
      <Framework />
      <Experience />
      <Connect />
    </main>
    </>
  );
}
