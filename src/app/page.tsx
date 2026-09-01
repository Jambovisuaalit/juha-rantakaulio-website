import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HomeSections } from "@/components/sections/HomeSections";
import { ProofStrip } from "@/components/sections/ProofStrip";

const allDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const dispatchHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: allDays,
  opens: "00:00",
  closes: "23:59",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://rantakaulio.fi/#business",
      name: "Juha Rantakaulio Oy",
      legalName: "Juha Rantakaulio Oy",
      url: "https://rantakaulio.fi/",
      telephone: "+358503662215",
      email: "ajo@rantakaulio.fi",
      taxID: "0767846-3",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tiilitie 6",
        postalCode: "45200",
        addressLocality: "Kouvola",
        addressCountry: "FI",
      },
      areaServed: {
        "@type": "Country",
        name: "Finland",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "ajonjärjestely",
          telephone: "+358503662215",
          email: "ajo@rantakaulio.fi",
          areaServed: "FI",
          availableLanguage: ["fi"],
          hoursAvailable: dispatchHours,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://rantakaulio.fi/#logistics-service",
      name: "Lämpötilahallitut kuljetukset ja elintarvikelogistiikka",
      serviceType: [
        "Lämpötilahallitut kuljetukset",
        "Elintarvikelogistiikka",
        "Terminaali ja varastointi",
        "Kokonaislogistiikka",
      ],
      provider: {
        "@id": "https://rantakaulio.fi/#business",
      },
      areaServed: {
        "@type": "Country",
        name: "Finland",
      },
      hoursAvailable: dispatchHours,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
