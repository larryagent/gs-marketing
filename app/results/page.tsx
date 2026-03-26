import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Earnings from "@/components/Earnings";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results — GS Marketing",
  description: "See what GS Marketing reps really earn. 100% commission, unlimited ceiling.",
};

export default function ResultsPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main style={{ paddingTop: "72px" }}>
        <PageHero
          label="LET'S TALK MONEY"
          title="100% Commission."
          highlight="Unlimited Ceiling."
          sub="The GS Marketing pay scale is 100% commission based — so this number can get as high as you want."
        />
        <Earnings />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
