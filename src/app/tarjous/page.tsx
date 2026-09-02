import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteWizard } from "@/components/quote/QuoteWizard";

export const metadata: Metadata = {
  title: "Kuljetustarjous | Juha Rantakaulio Oy",
  description:
    "Määritä reitti, lämpötilavaatimus ja kuorman tiedot. Juha Rantakaulio Oy:n kuljetustarjouspyyntö.",
};

export default function QuotePage() {
  return (
    <>
      <Header />
      <main className="route-request-page">
        <QuoteWizard />
      </main>
      <Footer />
    </>
  );
}
