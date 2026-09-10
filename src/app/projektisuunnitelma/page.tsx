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

const typographyRules = [
  {
    weight: "400",
    role: "Leipäteksti",
    use: "Dokumentit, esitykset ja pidemmät tekstiosuudet. Suositus 15–18 px digissä ja 14–18 pt esityksissä.",
  },
  {
    weight: "500",
    role: "Data & UI",
    use: "Dashboard-luvut, taulukot, tilat, labelit ja pienemmät käyttöliittymätekstit. Suositus 12–16 px.",
  },
  {
    weight: "700 / 800",
    role: "Hierarkia",
    use: "Otsikot, numeronostot ja vahva brändihierarkia. Ei käytetä pitkiin leipätekstikappaleisiin.",
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

      <section
        aria-labelledby="typography-qa-title"
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #dfe4ea",
          padding: "28px 20px",
          color: "#111820",
          fontFamily: "var(--font-display), sans-serif",
        }}
      >
        <div style={{ width: "min(1180px, 100%)", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "baseline", flexWrap: "wrap" }}>
            <div>
              <div style={{ color: "#d94125", fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 6 }}>
                Typography QA · lukittu 10.9.2026
              </div>
              <h2 id="typography-qa-title" style={{ margin: 0, color: "#0f2c59", fontSize: 28, lineHeight: 1.08, fontWeight: 800 }}>
                Toinen leikkaus: Montserrat 400 / 500
              </h2>
            </div>
            <strong style={{ color: "#0f2c59", fontWeight: 700 }}>4 / 4 PASS</strong>
          </div>

          <p style={{ margin: "14px 0 20px", maxWidth: 900, fontSize: 16, lineHeight: 1.65, fontWeight: 400, color: "#4d5864" }}>
            Sama geometrinen groteski säilyy koko järjestelmässä: 400 toimii rauhallisena leipätekstinä ja 500 antaa pieniin UI-teksteihin sekä numeroihin riittävän kontrastin ilman, että ne kilpailevat 700/800-otsikoiden tai wordmarkin kanssa.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 12, marginBottom: 20 }}>
            {typographyRules.map((rule) => (
              <article key={rule.weight} style={{ border: "1px solid #dfe4ea", padding: 16, background: "#f8f9fb" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline", marginBottom: 10 }}>
                  <strong style={{ fontSize: 19, fontWeight: Number(rule.weight.split(" ")[0]) }}>{rule.role}</strong>
                  <span style={{ fontSize: 12, color: "#d94125", fontWeight: 700 }}>{rule.weight}</span>
                </div>
                <p style={{ margin: 0, color: "#5e6875", fontSize: 14, lineHeight: 1.55, fontWeight: rule.weight === "400" ? 400 : 500 }}>{rule.use}</p>
              </article>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(300px, .9fr)", gap: 12 }}>
            <article style={{ border: "1px solid #dfe4ea", padding: 18 }}>
              <div style={{ color: "#64707d", fontSize: 12, fontWeight: 500, marginBottom: 8 }}>LEIPÄTEKSTI · 16 PX / 400</div>
              <p style={{ margin: 0, maxWidth: 700, fontSize: 16, lineHeight: 1.65, fontWeight: 400 }}>
                Kylmäketjun hallinta perustuu dokumentoituun lämpötilaseurantaan, selkeään vastuuketjuun ja ajantasaiseen tilannekuvaan. Tekstin pitää säilyä rauhallisena ja helposti luettavana myös pitkissä dokumenteissa.
              </p>
            </article>

            <article style={{ border: "1px solid #dfe4ea", padding: 18, background: "#0f2c59", color: "#ffffff" }}>
              <div style={{ color: "rgba(255,255,255,.68)", fontSize: 12, fontWeight: 500, marginBottom: 10 }}>DATA UI · 500 · TABULAR NUMERALS</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, fontVariantNumeric: "tabular-nums" }}>
                <div><strong style={{ display: "block", fontSize: 34, lineHeight: 1, fontWeight: 500 }}>+2,4 °C</strong><span style={{ display: "block", marginTop: 6, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,.72)" }}>Kuljetustila</span></div>
                <div><strong style={{ display: "block", fontSize: 34, lineHeight: 1, fontWeight: 500 }}>99,8 %</strong><span style={{ display: "block", marginTop: 6, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,.72)" }}>Kylmäketju</span></div>
              </div>
              <div style={{ marginTop: 18, borderTop: "1px solid rgba(255,255,255,.18)", paddingTop: 10, display: "grid", gridTemplateColumns: "1fr auto", gap: 8, fontSize: 13, fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>
                <span style={{ color: "rgba(255,255,255,.72)" }}>KOUVOLA → HELSINKI</span><span>04:18</span>
                <span style={{ color: "rgba(255,255,255,.72)" }}>Min / Max</span><span>+1,9 / +2,8 °C</span>
              </div>
            </article>
          </div>

          <p style={{ margin: "14px 0 0", color: "#5e6875", fontSize: 13, lineHeight: 1.5, fontWeight: 400 }}>
            Minimikoko: jatkuva teksti 14 px, UI-/taulukkoteksti 12 px. Alle 12 px käyttöä vältetään. Dataluvuissa käytetään tabular-nums-asettelua. JetBrains Mono voidaan säilyttää teknisissä koodeissa/tunnisteissa, mutta se ei ole brändin toinen pääleikkaus.
          </p>
        </div>
      </section>

      <ProjectPlanner />
    </>
  );
}
