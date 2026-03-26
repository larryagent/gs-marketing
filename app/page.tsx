import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Earnings from "@/components/Earnings";
import Services from "@/components/Services";
import AITools from "@/components/AITools";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Earnings />
        <Ticker />
        <Services />
        <AITools />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
