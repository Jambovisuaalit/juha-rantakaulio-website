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
    detail: "Reitti A:n mukainen: navy #0F2C59, red #D94125, white #FFFFFF, R/chevron-järjestelmä ja RANTAKAULIO-wordmark. Flat/clean, ei gradientteja tai ydinpaletin ulkopuolisia värimuunnoksia.",
  },
  {
    label: "Workwear-mockupit",
    status: "PASS",
    detail: "Nykyinen hi-vis-linja kuuluu hyväksyttyyn Reitti A -pakettiin. Turva-oranssi on vain turvallisuusvaatetuksen funktionaalinen väri, ei markkinointipalettiin lisättävä brändiväri.",
  },
  {
    label: "Vehicle Livery -mockupit",
    status: "PASS",
    detail: "Nykyinen navy-runko, punaoranssi korostuslinja, täysleveä wordmark ja ohjaamon symboli kuuluvat Reitti A:n tuotantolinjaan. Mahdollinen vaaleansininen renderöintipinta saa kuvata vain lasia/teknistä pintaa — ei teippausgrafiikkaa.",
  },
  {
    label: "Valokuvat / kuvamaailma",
    status: "TARKISTA",
    detail: "Strateginen Reitti A on lukittu, joten kuvat eivät saa rakentaa kilpailevaa monokromi+syaani-identiteettiä. Erillistä valokuvauksen tyyliopasta ei kuitenkaan ole vielä määritelty, joten jokainen asiakasnäyttöön tuleva kuva tarkistetaan konventionaalisen, luotettavan B2B-linjan mukaan.",
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
                Reitti A – Konventio-strategia lukittu 10.9.2026
              </h2>
            </div>
            <strong style={{ color: "#0f2c59" }}>3 PASS · 1 TARKISTA</strong>
          </div>

          <p style={{ margin: "0 0 16px", maxWidth: 980, color: "#5e6875", lineHeight: 1.55 }}>
            Tuotantoon vietävä linja: laivastonsininen #0F2C59 · punaoranssi #D94125 · valkoinen #FFFFFF · R/chevron-nuolisymboli · RANTAKAULIO-wordmark · hi-vis vain turvallisuusvaatetuksessa. Aiempi monokromi+syaani / ei-nuolta -Reitti B ei kuulu asiakkaalle esitettävään ratkaisuun.
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

          <div
            style={{
              marginTop: 16,
              padding: 16,
              background: "#0f2c59",
              color: "#ffffff",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) auto",
              gap: 20,
              alignItems: "center",
            }}
          >
            <div>
              <strong style={{ display: "block", marginBottom: 4 }}>Seuraava prioriteetti · digitaalinen data-UI-kieli</strong>
              <span style={{ color: "rgba(255,255,255,.78)", lineHeight: 1.5 }}>
                Johda dashboard-, live-lämpötila-, lämpötilakäyrä- ja chain-of-custody-komponentit samasta Reitti A -identiteetistä. Tämä vastaa suoraan ostokriteeriin #2: reaaliaikainen näkyvyys ja dataintegraatio.
              </span>
            </div>
            <strong style={{ color: "#ffffff", whiteSpace: "nowrap" }}>NEXT</strong>
          </div>

          <p style={{ margin: "14px 0 0", fontSize: 13, color: "#5e6875" }}>
            Asiakkaalle ei esitetä Reitti B -väritystä, legacy-mockupeja, vaihtoehtoisia logoja tai keskeneräisiä visuaaleja ilman selkeää “konsepti / ei lopullinen” -merkintää. 5 hengen mockup-validointitestiä ei ajettu ennen Reitti A -päätöstä; tämä kirjataan riskinä, ei avoimena brändipäätöksenä.
          </p>
        </div>
      </section>
      <ProjectPlanner />
    </>
  );
}
