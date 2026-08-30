import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Lämpötilahallitut kuljetukset",
    text: "Kylmä- ja lämpötilaherkkien tuotteiden kuljetukset hallitussa ketjussa lähtöpisteestä määränpäähän.",
  },
  {
    number: "02",
    title: "Elintarvikelogistiikka",
    text: "Pitkä kokemus elintarvikekuljetuksista, joissa aikataulu, hygienia ja lämpötila ratkaisevat.",
  },
  {
    number: "03",
    title: "Terminaali & varastointi",
    text: "Vastaanotto, välivarastointi, lajittelu ja keräily osana samaa logistista kokonaisuutta.",
  },
  {
    number: "04",
    title: "Kokonaislogistiikka",
    text: "Tarvittaessa hoidamme myös asiakkaan sisäistä logistiikkaa, varastonhallintaa ja toimitusketjun välivaiheita.",
  },
];

const coldChain = [
  ["LIVE", "Reaaliaikainen lämpötilaseuranta", "Kuljetuslämpötiloja seurataan matkan aikana jatkuvasti."],
  ["ATP", "Luokiteltu kalusto", "Kalusto täyttää lämpötilahallittujen kuljetusten vaatimukset."],
  ["DATA", "Fleetlogis", "Kuljetuksesta jää seurattava tieto laadunvarmistusta varten."],
  ["CLIENT", "Asiakasnäkyvyys", "Ajankohtaista lämpötilatietoa voidaan tuoda myös asiakkaan käyttöön."],
];

const contacts = [
  ["Henri Rantakaulio", "Toimitusjohtaja", "040 729 5278", "henri@rantakaulio.fi"],
  ["Juha Rantakaulio", "Hallituksen puheenjohtaja", "0400 750 007", "juha@rantakaulio.fi"],
  ["Juho Rantakaulio", "Työnjohto / ajojärjestely", "0400 344 800", "juho@rantakaulio.fi"],
];

export function HomeSections() {
  return (
    <>
      <section className="section-block services-section" id="palvelut" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <p className="section-kicker">01 / Palvelut</p>
              <h2 id="services-title">Koko ketju hallinnassa.</h2>
            </div>
            <p className="section-intro">
              Kuljetuksesta terminaaliin ja varastointiin. Rantakaulio rakentaa
              tarvittavan kokonaisuuden yhden vastuullisen kumppanin kautta.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cold-chain" id="kylmaketju" aria-labelledby="cold-title">
        <div className="container cold-layout">
          <div className="cold-copy">
            <p className="section-kicker section-kicker-light">02 / Kylmäketju</p>
            <h2 id="cold-title">Tiedämme, mitä kuormassa tapahtuu.</h2>
            <p>
              Lämpötila ei ole sivuseikka. Se on mitattava osa toimitusvarmuutta.
              Rantakaulion järjestelmä yhdistää oikean kaluston, seurannan ja
              dokumentoitavan tiedon.
            </p>
            <a className="button button-primary button-large" href="mailto:henri@rantakaulio.fi?subject=Kuljetustarjous">
              Kysy lämpötilakuljetuksesta <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="cold-grid">
            {coldChain.map(([tag, title, text]) => (
              <article className="cold-card" key={tag}>
                <span>{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block terminal-section" id="terminaali" aria-labelledby="terminal-title">
        <div className="container terminal-layout">
          <div className="terminal-visual" aria-hidden="true">
            <div className="terminal-gridlines" />
            <span className="terminal-code">KVL / 45200</span>
            <div className="terminal-door terminal-door-1"><b>01</b><i /></div>
            <div className="terminal-door terminal-door-2"><b>02</b><i /></div>
            <div className="terminal-door terminal-door-3"><b>03</b><i /></div>
            <p>VIIDETTY TERMINAALI · TIILITIE 6</p>
          </div>

          <div className="terminal-copy">
            <p className="section-kicker">03 / Terminaali</p>
            <h2 id="terminal-title">Enemmän kuin kuljetus.</h2>
            <p className="section-intro">
              Tavara voidaan vastaanottaa, käsitellä, välivarastoida ja
              toimittaa eteenpäin osana samaa ketjua.
            </p>

            <div className="terminal-services">
              <div><span>01</span><strong>Vastaanotto & välivarastointi</strong></div>
              <div><span>02</span><strong>Lajittelu & keräily</strong></div>
              <div><span>03</span><strong>Jatkokuljetus</strong></div>
            </div>

            <div className="address-note">
              <span>Viileäterminaali</span>
              <strong>Tiilitie 6, 45200 Kouvola</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="area-section" id="toiminta-alue" aria-labelledby="area-title">
        <div className="container area-layout">
          <div>
            <p className="section-kicker section-kicker-light">04 / Toiminta-alue</p>
            <h2 id="area-title">Kouvolasta koko Suomeen.</h2>
          </div>

          <div className="area-routes" aria-label="Toiminta-alueet">
            <div className="route-row route-primary">
              <span>01</span>
              <strong>Itä-Suomi</strong>
              <i />
            </div>
            <div className="route-row route-primary">
              <span>02</span>
              <strong>Etelä-Suomi</strong>
              <i />
            </div>
            <div className="route-row route-primary">
              <span>03</span>
              <strong>Keski-Suomi</strong>
              <i />
            </div>
            <div className="route-row">
              <span>04</span>
              <strong>Koko Suomi verkoston kautta</strong>
              <i />
            </div>
            <div className="route-row">
              <span>05</span>
              <strong>Pohjoismaat & Baltia tarvittaessa</strong>
              <i />
            </div>
          </div>
        </div>
      </section>

      <section className="section-block fleet-section" id="kalusto" aria-labelledby="fleet-title">
        <div className="container fleet-layout">
          <div className="fleet-copy">
            <p className="section-kicker">05 / Kalusto</p>
            <h2 id="fleet-title">Kalusto, jolla työ tehdään.</h2>
            <p className="section-intro">
              Nykyaikainen kalusto, ATP-luokitus ja lämpötilaseuranta tekevät
              kylmäketjusta hallittavan myös käytännössä.
            </p>

            <div className="fleet-facts">
              <div><span>ATP</span><p>Lämpötilahallittu kuljetuskalusto</p></div>
              <div><span>LIVE</span><p>Seuranta matkan aikana</p></div>
              <div><span>24H</span><p>Ajojärjestely</p></div>
            </div>
          </div>

          <figure className="fleet-media">
            <Image
              src="/images/rantakaulio-fleet.webp"
              alt="Juha Rantakaulio Oy:n kuljetuskalustoa ylhäältä kuvattuna"
              fill
              sizes="(max-width: 900px) 100vw, 54vw"
            />
            <figcaption>KOUVOLA · KULJETUSKALUSTO</figcaption>
          </figure>
        </div>
      </section>

      <section className="people-section" id="yritys" aria-labelledby="people-title">
        <div className="container people-layout">
          <figure className="people-media">
            <Image
              src="/images/rantakaulio-portrait.webp"
              alt="Juha Rantakaulio Oy:n kuljetusammattilainen työvaatetuksessa"
              fill
              sizes="(max-width: 760px) 100vw, 38vw"
            />
          </figure>

          <div className="people-copy">
            <p className="section-kicker section-kicker-light">06 / Yritys</p>
            <h2 id="people-title">Logistiikan takana ovat ihmiset.</h2>
            <p>
              Rantakaulio on Kouvolasta kasvanut perheyritys. Pitkä kokemus,
              käytännön työn tuntemus ja suora yhteys vastuuhenkilöihin ovat
              osa palvelua — eivät erillinen lisä.
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

      <section className="section-block history-section" aria-labelledby="history-title">
        <div className="container history-layout">
          <div>
            <p className="section-kicker">07 / Historia</p>
            <h2 id="history-title">Lähes 40 vuotta Kouvolasta.</h2>
          </div>

          <div className="history-line">
            <article>
              <span>ALKU</span>
              <h3>Kuljetusliike</h3>
              <p>Toiminta kasvaa Kouvolan alueelta pitkäjänteisesti asiakkaiden tarpeiden mukana.</p>
            </article>
            <article>
              <span>→</span>
              <h3>Elintarvikelogistiikka</h3>
              <p>Lämpötilahallituista kuljetuksista muodostuu keskeinen osa osaamista.</p>
            </article>
            <article>
              <span>→</span>
              <h3>Terminaali</h3>
              <p>Kuljetuksen rinnalle rakentuvat käsittely-, varastointi- ja terminaalipalvelut.</p>
            </article>
            <article>
              <span>NYT</span>
              <h3>Seuraava sukupolvi</h3>
              <p>Yrityksen jatkuvuus yhdistää kokemuksen, uuden kaluston ja modernin seurannan.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="faq-section" aria-labelledby="faq-title">
        <div className="container faq-layout">
          <div>
            <p className="section-kicker section-kicker-light">08 / Usein kysyttyä</p>
            <h2 id="faq-title">Ennen kuin kuorma lähtee.</h2>
          </div>

          <div className="faq-list">
            <details>
              <summary>Mitä Rantakaulio kuljettaa?<span>+</span></summary>
              <p>Erityisosaamista ovat lämpötilahallitut kuljetukset ja elintarvikelogistiikka. Sopivuus varmistetaan aina kuljetuskohtaisesti.</p>
            </details>
            <details>
              <summary>Missä terminaali sijaitsee?<span>+</span></summary>
              <p>Viileäterminaali sijaitsee osoitteessa Tiilitie 6, 45200 Kouvola.</p>
            </details>
            <details>
              <summary>Miten lämpötilaa seurataan?<span>+</span></summary>
              <p>Fleetlogis-järjestelmä mahdollistaa kuljetuslämpötilojen reaaliaikaisen seurannan ja ajankohtaisen tiedon välittämisen asiakkaalle.</p>
            </details>
            <details>
              <summary>Mille alueille kuljetuksia järjestetään?<span>+</span></summary>
              <p>Pääpaino on Itä-, Etelä- ja Keski-Suomessa. Verkoston kautta toimituksia voidaan järjestää koko Suomeen sekä tarvittaessa Pohjoismaihin ja Baltiaan.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="quote-section" id="yhteystiedot" aria-labelledby="quote-title">
        <div className="container quote-layout">
          <div className="quote-copy">
            <p className="section-kicker">09 / Tarjouspyyntö</p>
            <h2 id="quote-title">Onko kuorma lähdössä?</h2>
            <p>Kerro mistä, minne ja mitä kuljetetaan. Otamme yhteyttä ja varmistamme sopivan ratkaisun.</p>

            <a className="dispatch-link" href="tel:+358503662215">
              <span>Ajojärjestely 24 h</span>
              <strong>050 366 2215</strong>
            </a>
          </div>

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
      </section>
    </>
  );
}
