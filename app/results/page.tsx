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
  openGraph: {
    title: "Results — GS Marketing",
    description: "Rookie $40K. Veteran $173K. Manager $365K. 100% commission, unlimited ceiling.",
    images: [{ url: `/og?title=100%25+Commission.+Unlimited+Ceiling.&sub=Rookie+%2440K.+Veteran+%24173K.+Manager+%24365K.`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function ResultsPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main style={{ paddingTop: "72px" }}>
        <PageHero label="LET'S TALK MONEY" title="100% Commission." highlight="Unlimited Ceiling." sub="The GS Marketing pay scale is entirely commission-based. The number climbs as high as you're willing to push it." />
        <Earnings />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
