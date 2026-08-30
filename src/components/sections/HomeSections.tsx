const serviceData = [
  {
    icon: "temp",
    title: "Lämpötilahallitut kuljetukset",
    text: "Pakaste-, tuore- ja lämpöherkkien tuotteiden kuljetukset tarkasti hallituissa lämpötiloissa koko Suomeen.",
  },
  {
    icon: "food",
    title: "Elintarvikelogistiikka",
    text: "Elintarvikkeiden turvallinen kuljetus ja käsittely tuoteturvallisuus aina etusijalla.",
  },
  {
    icon: "warehouse",
    title: "Terminaali & varastointi",
    text: "Lämpötilasäädetty varastointi, tehokas tavarankäsittely, lajittelu ja keräily eri tarpeisiin.",
  },
  {
    icon: "route",
    title: "Kokonaislogistiikka",
    text: "Räätälöidyt ratkaisut yrityksesi logistiikan ulkoistukseen ja toimitusketjun optimointiin.",
  },
];

function LineIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "temp") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M9 14.8V5a3 3 0 1 1 6 0v9.8a5 5 0 1 1-6 0Z"/><path {...common} d="M12 8v8"/></svg>;
  if (type === "food") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M6 3v7M9 3v7M6 7h3M7.5 10v11"/><path {...common} d="M15 3v18M15 3c3 1.5 4 5 4 8h-4"/></svg>;
  if (type === "warehouse") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="m3 10 9-6 9 6v10H3Z"/><path {...common} d="M8 20v-6h8v6M8 10h8"/></svg>;
  if (type === "route") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M4 18h4c3 0 3-6 6-6h6"/><path {...common} d="m17 9 3 3-3 3"/><circle {...common} cx="5" cy="6" r="2"/></svg>;
  if (type === "gps") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle {...common} cx="12" cy="10" r="3"/><path {...common} d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/></svg>;
  if (type === "report") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M5 3h14v18H5Z"/><path {...common} d="M8 8h8M8 12h8M8 16h5"/></svg>;
  if (type === "eye") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle {...common} cx="12" cy="12" r="2.5"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M12 3 5 6v5c0 4.5 2.8 8 7 10 4.2-2 7-5.5 7-10V6Z"/><path {...common} d="m9 12 2 2 4-5"/></svg>;
}

const qualityItems = [
  ["gps", "Reaaliaikainen seuranta", "Seuraamme kuljetuksen lämpötilaa ja sijaintia reaaliajassa 24/7."],
  ["eye", "Asiakasnäkyvyys", "Asiakkaanamme näet lähetyksesi tilaraportit suoraan järjestelmämme kautta."],
  ["report", "Laadun dokumentointi", "Kuljetukset dokumentoidaan läpinäkyvästi ja raportoidaan tarpeidesi mukaan."],
  ["shield", "Varma toimitusketju", "Oikea lämpötila, oikeaan aikaan, joka kerta."],
];

export function HomeSections() {
  return (
    <>
      <section className="section services-section" id="palvelut" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Palvelumme</p>
            <h2 id="services-title">Koko ketju hallinnassa – täsmälliset elintarvikekuljetukset</h2>
            <p>
              Suunnittelemme ja toteutamme koko logistiikkaketjun tarpeidesi mukaan –
              luotettavasti, täsmällisesti ja lämpötilatakuulla.
            </p>
          </div>

          <div className="services-grid">
            {serviceData.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-icon" aria-hidden="true"><LineIcon type={service.icon} /></span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-section" id="laatu" aria-labelledby="quality-title">
        <div className="container quality-grid">
          <div className="quality-copy">
            <p className="section-kicker section-kicker-light">Tekniikka & laatu</p>
            <h2 id="quality-title">Tekniikka, joka vartioi laatua</h2>
            <p className="quality-lead">
              Kylmäkuljetus on enemmän kuin kyydin viemistä perille. Se on tekniikkaa,
              jatkuvaa valvontaa ja tarkkaa dokumentointia.
            </p>

            <div className="quality-items">
              {qualityItems.map(([icon, title, text]) => (
                <article key={title}>
                  <span className="quality-icon" aria-hidden="true"><LineIcon type={icon} /></span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>

          <div className="quality-visual">
            <div className="quality-photo">
              <img
                src="https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/main/public/images/fleet-lineup.webp"
                alt="Juha Rantakaulio Oy:n lämpötilahallittua kuljetuskalustoa"
                width="760"
                height="428"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="quality-data" aria-label="FleetLogis-laadunvalvonnan esimerkkitiedot">
              <div><small>Seuranta</small><strong>LIVE</strong></div>
              <div><small>Lämpötila</small><strong>24/7</strong></div>
              <div><small>Kalusto</small><strong>ATP</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="meista" aria-labelledby="about-title">
        <div className="container about-grid">
          <figure className="about-photo">
            <img
              src="https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/main/public/images/rantakaulio-hero.webp"
              alt="Rantakaulion henkilöstöä kuljetuskaluston edessä"
              width="760"
              height="428"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="about-copy">
            <p className="section-kicker">Perheyritys</p>
            <h2 id="about-title">Perheyritys. Vastuuta ja välittämistä.</h2>
            <p>
              Juha Rantakaulio Oy on kotimainen perheyritys, joka on palvellut
              asiakkaitaan jo lähes 40 vuotta. Tunnemme toimintaympäristömme ja pidämme
              lupauksemme. Nykyaikainen kalustomme ja sitoutunut henkilöstömme takaavat,
              että kylmäketjusi säilyy katkeamattomana alusta loppuun.
            </p>

            <div className="about-values">
              <div><strong>Lähes 40 v</strong><span>Kokemusta</span></div>
              <div><strong>Kouvola</strong><span>Kotipaikka</span></div>
              <div><strong>Koko Suomi</strong><span>Toimitusalue</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="yhteystiedot" aria-labelledby="contact-title">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="section-kicker section-kicker-light">Tarjouspyyntö</p>
            <h2 id="contact-title">Ota yhteyttä tai pyydä tarjous</h2>
            <p>
              Kerro reitti, ajankohta ja lämpötilavaatimus. Otamme yhteyttä ja
              varmistamme sopivan kuljetusratkaisun.
            </p>

            <div className="direct-contacts">
              <a href="tel:+358503662215">
                <small>Ajonjärjestely 24/7</small>
                <strong>050 366 2215</strong>
                <span>ajo@rantakaulio.fi</span>
              </a>
              <a href="tel:+35853755200">
                <small>Myynti & tarjoukset</small>
                <strong>05 375 5200</strong>
                <span>myynti@rantakaulio.fi</span>
              </a>
            </div>
          </div>

          <form className="quote-form" action="mailto:myynti@rantakaulio.fi" method="post" encType="text/plain">
            <div className="field-row">
              <label>Nimi *<input name="Nimi" required autoComplete="name" /></label>
              <label>Yritys *<input name="Yritys" required autoComplete="organization" /></label>
            </div>
            <div className="field-row">
              <label>Sähköposti *<input type="email" name="Sähköposti" required autoComplete="email" /></label>
              <label>Puhelinnumero<input type="tel" name="Puhelin" autoComplete="tel" /></label>
            </div>
            <div className="field-row">
              <label>Reitti / reittitoive<input name="Reitti" placeholder="Esim. Kouvola → Helsinki" /></label>
              <label>Nouto / toimitus<input name="Ajankohta" placeholder="Päivä ja kellonaika" /></label>
            </div>
            <label>Lämpötilavaatimus
              <select name="Lämpötilavaatimus" defaultValue="">
                <option value="" disabled>Valitse</option>
                <option>Pakaste</option>
                <option>Tuore</option>
                <option>Kuivakuorma</option>
                <option>Muu</option>
              </select>
            </label>
            <label>Viesti / lisätiedot<textarea name="Viesti" rows={4} /></label>
            <button className="button button-primary button-large" type="submit">
              Lähetä tarjouspyyntö <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
