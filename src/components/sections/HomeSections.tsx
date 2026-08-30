const services = [
  {
    number: "01",
    icon: "temp",
    title: "Lämpötilahallitut kuljetukset",
    text: "Kylmä- ja lämpötilaherkkien tuotteiden kuljetukset hallitussa ketjussa lähtöpisteestä määränpäähän.",
  },
  {
    number: "02",
    icon: "food",
    title: "Elintarvikelogistiikka",
    text: "Pitkä kokemus elintarvikekuljetuksista, joissa aikataulu, hygienia ja lämpötila ratkaisevat.",
  },
  {
    number: "03",
    icon: "warehouse",
    title: "Terminaali & varastointi",
    text: "Vastaanotto, välivarastointi, lajittelu ja keräily osana samaa logistista kokonaisuutta.",
  },
  {
    number: "04",
    icon: "route",
    title: "Kokonaislogistiikka",
    text: "Tarvittaessa hoidamme myös sisäistä logistiikkaa, varastonhallintaa ja toimitusketjun välivaiheita.",
  },
];

function ServiceIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "temp") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M9 14.8V5a3 3 0 1 1 6 0v9.8a5 5 0 1 1-6 0Z"/><path {...common} d="M12 8v8"/><path {...common} d="M5 7h2M5 11h2"/></svg>;
  }
  if (type === "food") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M6 3v7M9 3v7M6 7h3M7.5 10v11"/><path {...common} d="M15 3v18M15 3c3 1.5 4 5 4 8h-4"/></svg>;
  }
  if (type === "warehouse") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="m3 10 9-6 9 6v10H3Z"/><path {...common} d="M8 20v-6h8v6M8 10h8"/></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M4 18h4c3 0 3-6 6-6h6"/><path {...common} d="m17 9 3 3-3 3"/><circle {...common} cx="5" cy="6" r="2"/></svg>;
}

const coldChain = [
  ["LIVE", "Reaaliaikainen seuranta", "Kuljetuslämpötiloja seurataan matkan aikana jatkuvasti."],
  ["ATP", "Luokiteltu kalusto", "Kalusto täyttää lämpötilahallittujen kuljetusten vaatimukset."],
  ["DATA", "Fleetlogis", "Kuljetuksesta jää seurattava tieto laadunvarmistusta varten."],
  ["CLIENT", "Asiakasnäkyvyys", "Ajankohtaista lämpötilatietoa voidaan tuoda asiakkaan käyttöön."],
];

const contacts = [
  ["Henri Rantakaulio", "Toimitusjohtaja", "040 729 5278", "henri@rantakaulio.fi"],
  ["Juha Rantakaulio", "Hallituksen puheenjohtaja", "0400 750 007", "juha@rantakaulio.fi"],
  ["Juho Rantakaulio", "Työnjohto / ajojärjestely", "0400 344 800", "juho@rantakaulio.fi"],
];

export function HomeSections() {
  return (
    <>
      <section className="section services-section" id="palvelut" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-kicker">01 / Palvelut</p>
              <h2 id="services-title">Koko ketju hallinnassa.</h2>
            </div>
            <p className="section-intro">
              Kuljetuksesta terminaaliin ja varastointiin. Tarvittava kokonaisuus
              yhden vastuullisen kumppanin kautta.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <span className="service-icon" aria-hidden="true"><ServiceIcon type={service.icon} /></span>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cold-chain" id="kylmaketju" aria-labelledby="cold-title">
        <div className="container cold-shell">
          <div className="cold-copy">
            <p className="section-kicker section-kicker-light">02 / Kylmäketju</p>
            <h2 id="cold-title">Tiedämme, mitä kuormassa tapahtuu.</h2>
            <p className="cold-lead">
              Lämpötila on mitattava osa toimitusvarmuutta. Rantakaulion
              järjestelmä yhdistää oikean kaluston, seurannan ja dokumentoitavan tiedon.
            </p>
            <a className="button button-primary button-large" href="#yhteystiedot">
              Kysy lämpötilakuljetuksesta <span aria-hidden="true">→</span>
            </a>
          </div>

          <figure className="cold-visual">
            <div className="cold-halo" aria-hidden="true" />
            <img
              src="https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/main/public/images/truck-cutout.webp"
              alt="Rantakaulion lämpötilahallittu Mercedes-Benz Actros -yhdistelmä"
              width="500"
              height="368"
              loading="lazy"
              decoding="async"
            />
            <figcaption>ATP · LÄMPÖTILAHALLITTU KULJETUSKALUSTO</figcaption>
          </figure>

          <div className="cold-facts">
            {coldChain.map(([tag, title, text]) => (
              <article key={tag}>
                <span>{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section terminal-section" id="terminaali" aria-labelledby="terminal-title">
        <div className="container terminal-layout">
          <div className="terminal-copy">
            <p className="section-kicker">03 / Terminaali</p>
            <h2 id="terminal-title">Enemmän kuin kuljetus.</h2>
            <p className="section-intro">
              Tavara voidaan vastaanottaa, käsitellä, välivarastoida ja toimittaa
              eteenpäin osana samaa ketjua.
            </p>

            <div className="terminal-services">
              <div><span>01</span><strong>Vastaanotto & välivarastointi</strong></div>
              <div><span>02</span><strong>Lajittelu & keräily</strong></div>
              <div><span>03</span><strong>Jatkokuljetus</strong></div>
            </div>
          </div>

          <div className="terminal-panel" aria-label="Viileäterminaalin tiedot">
            <div className="terminal-gridlines" aria-hidden="true" />
            <span className="terminal-code">KVL / 45200</span>
            <strong>VIILEÄTERMINAALI</strong>
            <p>Tiilitie 6, 45200 Kouvola</p>
            <div className="dock-row" aria-hidden="true">
              <i>01</i><i>02</i><i>03</i>
            </div>
            <small>LAJITTELU · KERÄILY · VARASTOINTI</small>
          </div>
        </div>
      </section>

      <section className="area-section" id="toiminta-alue" aria-labelledby="area-title">
        <div className="container area-layout">
          <div>
            <p className="section-kicker section-kicker-light">04 / Toiminta-alue</p>
            <h2 id="area-title">Kouvolasta koko Suomeen.</h2>
            <p>
              Pääpaino Itä-, Etelä- ja Keski-Suomessa. Verkosto mahdollistaa
              toimitusketjun koko Suomeen sekä tarvittaessa Pohjoismaihin ja Baltiaan.
            </p>
          </div>

          <div className="area-routes">
            <div className="route-main"><span>01</span><strong>Itä-Suomi</strong></div>
            <div className="route-main"><span>02</span><strong>Etelä-Suomi</strong></div>
            <div className="route-main"><span>03</span><strong>Keski-Suomi</strong></div>
            <div><span>04</span><strong>Koko Suomi verkoston kautta</strong></div>
            <div><span>05</span><strong>Pohjoismaat & Baltia tarvittaessa</strong></div>
          </div>
        </div>
      </section>

      <section className="fleet-section" id="kalusto" aria-labelledby="fleet-title">
        <div className="fleet-media">
          <img
            src="https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/main/public/images/fleet-lineup.webp"
            alt="Juha Rantakaulio Oy:n lämpötilahallittua kuljetuskalustoa Kouvolassa"
            width="760"
            height="428"
            loading="lazy"
            decoding="async"
          />
          <div className="fleet-overlay" />
          <div className="container fleet-caption">
            <p className="section-kicker section-kicker-light">05 / Kalusto</p>
            <h2 id="fleet-title">Kalusto, jolla työ tehdään.</h2>
            <p>
              Nykyaikainen kalusto, ATP-luokitus ja lämpötilaseuranta tekevät
              kylmäketjusta hallittavan myös käytännössä.
            </p>
          </div>
        </div>

        <div className="fleet-facts-wrap">
          <div className="container fleet-facts">
            <div><span>ATP</span><p>Lämpötilahallittu kuljetuskalusto</p></div>
            <div><span>LIVE</span><p>Seuranta matkan aikana</p></div>
            <div><span>24 H</span><p>Ajojärjestely</p></div>
          </div>
        </div>
      </section>

      <section className="people-section" id="yritys" aria-labelledby="people-title">
        <div className="container people-layout">
          <figure className="people-media">
            <img
              src="https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/main/public/images/rantakaulio-hero.webp"
              alt="Rantakaulion henkilöstöä kuljetuskaluston edessä"
              width="760"
              height="428"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="people-copy">
            <p className="section-kicker section-kicker-light">06 / Yritys</p>
            <h2 id="people-title">Logistiikan takana ovat ihmiset.</h2>
            <p className="people-lead">
              Rantakaulio on Kouvolasta kasvanut perheyritys. Pitkä kokemus,
              käytännön työn tuntemus ja suora yhteys vastuuhenkilöihin ovat osa palvelua.
            </p>

            <div className="contact-list">
              {contacts.map(([name, role, phone, email]) => (
                <article key={name}>
                  <div>
                    <h3>{name}</h3>
                    <p>{role}</p>
                  </div>
                  <div className="contact-links">
                    <a href={`tel:+358${phone.replace(/\s/g, "").replace(/^0/, "")}`}>{phone}</a>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section history-section" aria-labelledby="history-title">
        <div className="container history-layout">
          <div>
            <p className="section-kicker">07 / Historia</p>
            <h2 id="history-title">Lähes 40 vuotta Kouvolasta.</h2>
          </div>

          <div className="history-line">
            <article><span>ALKU</span><h3>Kuljetusliike</h3><p>Toiminta kasvaa asiakkaiden tarpeiden mukana.</p></article>
            <article><span>→</span><h3>Elintarvikelogistiikka</h3><p>Lämpötilahallitusta logistiikasta muodostuu ydinosaamista.</p></article>
            <article><span>→</span><h3>Terminaali</h3><p>Kuljetuksen rinnalle rakentuvat käsittely- ja varastointipalvelut.</p></article>
            <article><span>NYT</span><h3>Seuraava sukupolvi</h3><p>Kokemus yhdistyy uuteen kalustoon ja moderniin seurantaan.</p></article>
          </div>
        </div>
      </section>

      <section className="conversion-section" id="yhteystiedot">
        <div className="container conversion-grid">
          <div className="faq-block" aria-labelledby="faq-title">
            <p className="section-kicker section-kicker-light">08 / Usein kysyttyä</p>
            <h2 id="faq-title">Ennen kuin kuorma lähtee.</h2>
            <div className="faq-list">
              <details>
                <summary>Mitä Rantakaulio kuljettaa?<span>+</span></summary>
                <p>Erityisosaamista ovat lämpötilahallitut kuljetukset ja elintarvikelogistiikka. Sopivuus varmistetaan kuljetuskohtaisesti.</p>
              </details>
              <details>
                <summary>Missä terminaali sijaitsee?<span>+</span></summary>
                <p>Viileäterminaali sijaitsee osoitteessa Tiilitie 6, 45200 Kouvola.</p>
              </details>
              <details>
                <summary>Miten lämpötilaa seurataan?<span>+</span></summary>
                <p>Fleetlogis mahdollistaa kuljetuslämpötilojen reaaliaikaisen seurannan ja ajankohtaisen tiedon asiakkaalle.</p>
              </details>
              <details>
                <summary>Mille alueille kuljetuksia järjestetään?<span>+</span></summary>
                <p>Pääpaino on Itä-, Etelä- ja Keski-Suomessa. Verkosto ulottuu koko Suomeen sekä tarvittaessa Pohjoismaihin ja Baltiaan.</p>
              </details>
            </div>
          </div>

          <div className="quote-block" aria-labelledby="quote-title">
            <p className="section-kicker">09 / Tarjouspyyntö</p>
            <h2 id="quote-title">Onko kuorma lähdössä?</h2>
            <p className="quote-lead">
              Kerro mistä, minne ja mitä kuljetetaan. Otamme yhteyttä ja
              varmistamme sopivan ratkaisun.
            </p>

            <a className="dispatch-link" href="tel:+358503662215">
              <span>Ajojärjestely 24 h</span><strong>050 366 2215</strong>
            </a>

            <form className="quote-form" action="mailto:henri@rantakaulio.fi" method="post" encType="text/plain">
              <div className="field-row">
                <label>Yritys *<input name="Yritys" required autoComplete="organization" /></label>
                <label>Nimi *<input name="Nimi" required autoComplete="name" /></label>
              </div>
              <div className="field-row">
                <label>Sähköposti *<input type="email" name="Sähköposti" required autoComplete="email" /></label>
                <label>Puhelin<input type="tel" name="Puhelin" autoComplete="tel" /></label>
              </div>
              <div className="field-row">
                <label>Lähtöpaikka<input name="Lähtöpaikka" /></label>
                <label>Määränpää<input name="Määränpää" /></label>
              </div>
              <div className="field-row">
                <label>Kuljetettava tuote<input name="Tuote" /></label>
                <label>Lämpötilavaatimus<input name="Lämpötila" placeholder="esim. +2…+6 °C" /></label>
              </div>
              <label>Lisätiedot<textarea name="Lisätiedot" rows={4} /></label>
              <button className="button button-primary button-large" type="submit">
                Lähetä tarjouspyyntö <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
