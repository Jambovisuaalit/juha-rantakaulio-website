import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HomeSections } from "@/components/sections/HomeSections";
import { ProofStrip } from "@/components/sections/ProofStrip";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <HomeSections />
      </main>
      <Footer />
    </>
  );
}
