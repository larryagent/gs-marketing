import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — GS Marketing",
  description: "Everything GS Marketing provides to help you win — training, housing, uncapped commission, and more.",
  openGraph: {
    title: "Services — GS Marketing",
    description: "Elite training, housing, uncapped commission, and a clear path to ownership.",
    images: [{ url: `/og?title=Everything+You+Need+To+Win.&sub=Elite+training%2C+housing%2C+and+uncapped+commission.`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function ServicesPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main style={{ paddingTop: "72px" }}>
        <PageHero label="WHAT WE PROVIDE" title="Everything You Need" highlight="To Win." sub="From elite training to housing support and uncapped commission — we give you every tool to dominate." />
        <Services />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
