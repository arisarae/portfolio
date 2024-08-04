import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Languages from "@/components/Languages";
import Framework from "@/components/Framework";
import Experience from "@/components/Experience";
import Connect from "@/components/Connect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <Header />
      <Languages />
      <Framework />
      <Experience />
      <Connect />
    </main>
    </>
  );
}
