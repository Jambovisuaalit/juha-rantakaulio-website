import type { Metadata } from "next";
import { ProjectPlanner } from "./ProjectPlanner";

export const metadata: Metadata = {
  title: "Projektisuunnitelma | Juha Rantakaulio Oy × GhoulHouse Oy",
  description: "Yksityinen projektisuunnitelma vaiheiden, vastuiden ja etenemisen hallintaan.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const brandQaItems = [
  {
    label: "Logo Production Pack",
    status: "PASS",
    detail: "Navy #0F2C59, red #D94125, white #FFFFFF, navy R + punainen oikealle osoittava nuoli. Flat/clean, ei gradientteja tai varjoja.",
  },
  {
    label: "Workwear-mockupit",
    status: "PASS",
    detail: "Brändimerkinnät noudattavat lukittua navy/red/white-linjaa. Huomiokeltainen turvavaate on tuotteen/suojavaatetuksen väri, ei uusi brändiväri.",
  },
  {
    label: "Vehicle Livery -mockupit",
    status: "TARKISTA",
    detail: "Vaaleansininen cab-/lasipinta sallitaan vain ajoneuvon lasina tai teknisenä havainneväriä. Jos se on tarkoitettu teippausgrafiikaksi, se poistetaan tai vaihdetaan ydinaletin väriin ennen asiakasnäyttöä.",
  },
  {
    label: "Valokuvat / kuvamaailma",
    status: "HOLD",
    detail: "Kuvavalinnat lukitaan vasta strategisen Reitti A/B -päätöksen jälkeen. Ennen päätöstä asiakkaalle ei esitetä yhtä kuvamaailmaa lopullisena brändiratkaisuna.",
  },
];

export default function ProjectPlanPage() {
  return (
    <>
      <section
        aria-labelledby="brand-visual-qa-title"
        style={{
          background: "#f7f8fa",
          borderBottom: "1px solid #dfe4ea",
          padding: "24px 20px",
          color: "#111820",
          fontFamily: "var(--font-sans), sans-serif",
        }}
      >
        <div style={{ width: "min(1180px, 100%)", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              alignItems: "baseline",
              flexWrap: "wrap",
              marginBottom: 16,
            }}
          >
            <div>
              <div
                style={{
                  color: "#d94125",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                Visual QA gate · asiakasnäyttö
              </div>
              <h2 id="brand-visual-qa-title" style={{ margin: 0, fontSize: 24, lineHeight: 1.1 }}>
                Näytä vain lukitun Rantakaulio-brändilinjan materiaaleja
              </h2>
            </div>
            <strong style={{ color: "#0f2c59" }}>2 PASS · 1 TARKISTA · 1 HOLD</strong>
          </div>

          <p style={{ margin: "0 0 16px", maxWidth: 900, color: "#5e6875", lineHeight: 1.55 }}>
            Lukittu visuaalinen järjestelmä: navy #0F2C59 · red #D94125 · white #FFFFFF · navy R + punainen oikealle osoittava nuoli · puhdas vektori · ei gradientteja/varjoja. Kuvamaailman strateginen Reitti A/B käsitellään erillisenä päätöksenä.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 12,
            }}
          >
            {brandQaItems.map((item) => (
              <article
                key={item.label}
                style={{
                  background: "#ffffff",
                  border: "1px solid #dfe4ea",
                  padding: 16,
                  minWidth: 0,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
                  <strong>{item.label}</strong>
                  <span
                    style={{
                      color: item.status === "PASS" ? "#0f2c59" : "#a43a25",
                      fontSize: 12,
                      fontWeight: 800,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <p style={{ margin: "10px 0 0", color: "#5e6875", fontSize: 14, lineHeight: 1.5 }}>{item.detail}</p>
              </article>
            ))}
          </div>

          <p style={{ margin: "14px 0 0", fontSize: 13, color: "#5e6875" }}>
            Asiakkaalle ei esitetä vaihtoehtoisia värejä, legacy-mockupeja tai keskeneräisiä visuaaleja ilman selkeää “konsepti / ei lopullinen” -merkintää.
          </p>
        </div>
      </section>
      <ProjectPlanner />
    </>
  );
}
