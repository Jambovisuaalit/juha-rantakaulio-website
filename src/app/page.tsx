import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
      </main>
    </>
  );
}
