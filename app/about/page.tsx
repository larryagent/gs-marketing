import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — GS Marketing",
  description: "GS Marketing is a culture-first sales organization dominating the fiber optic industry.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main style={{ paddingTop: "72px" }}>
        <PageHero
          label="WHO WE ARE"
          title="Built on"
          highlight="Culture."
          sub="GS Marketing is a culture-first organization that builds elite sales teams and produces results most people never dream of."
        />
        <About />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
