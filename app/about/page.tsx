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
  openGraph: {
    title: "About — GS Marketing",
    description: "A culture-first organization that produces results most people never dream of.",
    images: [{ url: `/og?title=Built+on+Culture.&sub=An+independent+sales+organization+dominating+the+fiber+space.`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main style={{ paddingTop: "72px" }}>
        <PageHero label="WHO WE ARE" title="Built on" highlight="Culture." sub="GS Marketing is a culture-first organization that builds elite sales teams and produces results most people never dream of." />
        <About />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
