import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projektitarjous | Juha Rantakaulio Oy × GhoulHouse Oy",
  description:
    "GhoulHouse Oy:n projektitarjous Juha Rantakaulio Oy:lle: brändi, verkkosivusto ja 90 päivän sosiaalisen median käynnistys.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const deliveries = [
  {
    number: "01",
    title: "Brändi ja tuotantomateriaalit",
    items: [
      "Logon tuotantopaketti ja brändiohjeistus",
      "Ajoneuvoteippauksen konsepti",
      "Työvaatteiden mockupit",
      "Master-aineistot ja tuotantoon soveltuvat exportit",
    ],
  },
  {
    number: "02",
    title: "Verkkosivuston uudistus",
    items: [
      "Sivurakenne ja sisältötekstit",
      "Visuaalinen suunnittelu",
      "Responsiivinen toteutus",
      "QA ja julkaisuvalmis kokonaisuus",
    ],
  },
  {
    number: "03",
    title: "Sosiaalinen media — 90 pv",
    items: [
      "LinkedIn + Facebook",
      "12 sisältöä / 30 päivää",
      "Kolme 30 päivän tuotantojaksoa",
      "Sisältöjen suunnittelu ja julkaisuvalmiit toteutukset",
    ],
  },
];

const process = ["Lukitus", "Brändi", "Website", "Social", "Handoff"];

const exclusions = [
  "Maksettu mainonta ja mediabudjetit",
  "Ulkopuolinen valokuvaus tai videotuotanto",
  "Fyysiset ajoneuvoteippaus-, painatus- tai työvaatekustannukset",
];

const approvalHref =
  "mailto:hello@ghoulhouse.fi?subject=Juha%20Rantakaulio%20Oy%20%E2%80%94%20tarjouksen%20hyv%C3%A4ksynt%C3%A4&body=Hei%20Hanna%2C%0A%0AHyv%C3%A4ksymme%20Juha%20Rantakaulio%20Oy%3An%20projektitarjouksen%20(5%20370%20%E2%82%AC%20%2B%20ALV)%20ja%20sovitaan%20aloituksesta.%0A%0AYst%C3%A4v%C3%A4llisin%20terveisin%2C%0A";

export default function ProjectProposalPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="proposal-title">
        <div className={styles.heroInner}>
          <div className={styles.topline}>
            <span className={styles.eyebrow}>Projektitarjous</span>
            <span className={styles.preview}>Luottamuksellinen preview</span>
          </div>

          <div className={styles.heroGrid}>
            <div>
              <p className={styles.kicker}>Juha Rantakaulio Oy × GhoulHouse Oy</p>
              <h1 id="proposal-title">Brändi, verkkosivusto ja 90 päivän somekäynnistys</h1>
              <p className={styles.lead}>
                Yksi kokonaisuus, jolla Rantakaulion visuaalinen ilme, digitaalinen asiakaspolku ja
                jatkuva sisältötuotanto viedään samaan järjestelmään.
              </p>
            </div>

            <dl className={styles.meta}>
              <div>
                <dt>Tarjoaja</dt>
                <dd>GhoulHouse Oy / Hanna Nyholm</dd>
              </div>
              <div>
                <dt>Asiakas</dt>
                <dd>Juha Rantakaulio Oy</dd>
              </div>
              <div>
                <dt>Tarjouspäivä</dt>
                <dd>3.9.2026</dd>
              </div>
              <div>
                <dt>Voimassa</dt>
                <dd>17.9.2026 asti</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="investment-title">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>01</span>
            <h2 id="investment-title">Investointi</h2>
          </div>

          <div className={styles.investmentGrid}>
            <div className={styles.totalCard}>
              <span>Kokonaisuus</span>
              <strong>5 370 €</strong>
              <small>+ ALV</small>
            </div>
            <div className={styles.priceBreakdown}>
              <div>
                <span>Brändi + verkkosivusto</span>
                <strong>3 900 € + ALV</strong>
              </div>
              <div>
                <span>Sosiaalinen media / 90 pv</span>
                <strong>1 470 € + ALV</strong>
              </div>
              <div className={styles.mathRow} aria-label="Hintojen tarkistus">
                <span>3 900 € + 1 470 €</span>
                <strong>= 5 370 € + ALV</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="deliveries-title">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>02</span>
            <h2 id="deliveries-title">Kolme toimituskokonaisuutta</h2>
          </div>

          <div className={styles.deliveryGrid}>
            {deliveries.map((delivery) => (
              <article className={styles.deliveryCard} key={delivery.number}>
                <span className={styles.cardNumber}>{delivery.number}</span>
                <h3>{delivery.title}</h3>
                <ul>
                  {delivery.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.darkSection} aria-labelledby="process-title">
        <div className={styles.sectionInner}>
          <div className={`${styles.sectionHeading} ${styles.lightHeading}`}>
            <span className={styles.sectionNumber}>03</span>
            <h2 id="process-title">Prosessi</h2>
          </div>

          <ol className={styles.processList}>
            {process.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="terms-title">
        <div className={styles.sectionInner}>
          <div className={styles.twoColumn}>
            <div>
              <div className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>04</span>
                <h2 id="terms-title">Maksuehdot</h2>
              </div>
              <div className={styles.termRows}>
                <div>
                  <strong>Brändi + web</strong>
                  <span>50 % hyväksynnästä / 50 % julkaisuvalmiina</span>
                </div>
                <div>
                  <strong>Some 90 pv</strong>
                  <span>Laskutus 30 päivän jaksoissa</span>
                </div>
                <div>
                  <strong>Maksuaika</strong>
                  <span>7 päivää</span>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>05</span>
                <h2>Rajaukset</h2>
              </div>
              <ul className={styles.exclusionList}>
                {exclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.ctaInner}>
          <span className={styles.eyebrow}>Seuraava askel</span>
          <h2 id="cta-title">Hyväksy tarjous / Sovitaan aloitus</h2>
          <p>
            Hyväksyntä avaa valmiiksi täytetyn sähköpostin GhoulHouse Oy:lle. Mitään tietoja ei
            tallenneta sivulle.
          </p>
          <a className={styles.primaryCta} href={approvalHref}>
            Hyväksy tarjous / Sovitaan aloitus
          </a>
          <small>Vastaanottaja: hello@ghoulhouse.fi</small>
        </div>
      </section>
    </main>
  );
}
