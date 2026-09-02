const services = [
  {
    number: "01",
    title: "Lämpötilahallitut kuljetukset",
    body:
      "Kylmä- ja pakastekuljetukset täsmällisissä lämpötiloissa (+2…+6 °C / -18 °C).",
  },
  {
    number: "02",
    title: "Viileäterminaali & varastointi",
    body:
      "Vastaanotto ja lämpösäädelty välivarastointi Kouvolassa, Tiilitie 6:ssa.",
  },
  {
    number: "03",
    title: "Lajittelu & keräily",
    body:
      "Tilausten mukainen tavaran keräily, lajittelu ja kuormaus jatkolähetyksiin.",
  },
  {
    number: "04",
    title: "Kokonaislogistiikka",
    body:
      "Sisäisen logistiikan ja toimitusketjun välivaiheiden hallinta yhden vastuullisen kumppanin kautta.",
  },
];

const mechanism = [
  {
    number: "01",
    title: "HALLITSE",
    body:
      "ATP-luokiteltu kalusto ja Kouvolan viileäterminaali varmistavat puitteet ennen kuormausta.",
    proof: "ATP / TERMINAALI",
  },
  {
    number: "02",
    title: "SEURAA",
    body:
      "FleetLogis-järjestelmä tarjoaa jatkuvan näkyvyyden sijaintiin ja lämpötilaan matkan aikana.",
    proof: "SIJAINTI / LÄMPÖTILA",
  },
  {
    number: "03",
    title: "TODISTA",
    body:
      "Dokumentoitava olosuhdehistoria tukee laadun osoittamista asiakkaalle ja auditoijille.",
    proof: "HISTORIA / RAPORTOINTI",
  },
];

const people = [
  {
    name: "Henri Rantakaulio",
    role: "Toimitusjohtaja",
    phoneDisplay: "040 729 5278",
    phoneHref: "+358407295278",
    email: "henri@rantakaulio.fi",
  },
  {
    name: "Juha Rantakaulio",
    role: "Hallituksen puheenjohtaja",
    phoneDisplay: "0400 750 007",
    phoneHref: "+358400750007",
    email: "juha@rantakaulio.fi",
  },
  {
    name: "Juho Rantakaulio",
    role: "Työnjohto / Ajojärjestely",
    phoneDisplay: "0400 344 800",
    phoneHref: "+358400344800",
    email: "juho@rantakaulio.fi",
  },
];

const faqs = [
  {
    q: "Mitä tuotteita Rantakaulio kuljettaa?",
    a:
      "Palvelemme lämpötilakriittisen logistiikan tarpeissa, kuten kylmä-, pakaste- ja muissa lämpötilahallintaa vaativissa kuljetuksissa. Ratkaisu määritetään kuorman, lämpötilavaatimuksen ja reitin mukaan.",
  },
  {
    q: "Miten kuljetuksen lämpötilaa seurataan?",
    a:
      "FleetLogis-järjestelmä tukee kuljetuksen sijainti- ja lämpötilatiedon seurantaa sekä olosuhdehistorian dokumentointia.",
  },
  {
    q: "Missä viileäterminaali sijaitsee?",
    a:
      "Viileäterminaali sijaitsee osoitteessa Tiilitie 6, 45200 Kouvola, Tehontien logistiikka-alueella.",
  },
  {
    q: "Saako ajojärjestelyn kiinni ympäri vuorokauden?",
    a:
      "Kyllä. Ajojärjestelyn 24/7-numero on 050 366 2215.",
  },
];

export function MasterSections() {
  return (
    <>
      <section className="master-mechanism" id="mekanismi" aria-labelledby="mechanism-title">
        <div className="container">
          <div className="master-section-head">
            <p className="master-kicker">TODENNETTAVA KYLMÄKETJU / MEKANISMI</p>
            <h2 id="mechanism-title">TODENNETTAVA KYLMÄKETJU KOLMESSA VAIHEESSA.</h2>
            <p>
              Yksi toimintamalli läpi toimitusketjun: hallitse olosuhteet, seuraa
              mitä tapahtuu ja säilytä tieto myöhempää todentamista varten.
            </p>
          </div>

          <div className="mechanism-grid">
            {mechanism.map((item, index) => (
              <article className="mechanism-card" key={item.number}>
                <div className="mechanism-card-top">
                  <span>{item.number}</span>
                  <small>{item.proof}</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="mechanism-progress" aria-hidden="true">
                  <span className="mechanism-node">{item.number}</span>
                  {index < mechanism.length - 1 && <i />}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="master-services" id="palvelut" aria-labelledby="services-title">
        <div className="container">
          <div className="master-section-head">
            <p className="master-kicker">01 / PALVELUT</p>
            <h2 id="services-title">
              LÄMPÖTILAKRIITTINEN LOGISTIIKKA. YHDEN VASTUULLISEN KUMPPANIN KAUTTA.
            </h2>
          </div>

          <div className="master-services-grid">
            {services.map((service) => (
              <article className="master-service-card" key={service.number}>
                <span className="master-card-num">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="telemetry-section" id="kylmaketju" aria-labelledby="telemetry-title">
        <div className="container telemetry-layout">
          <div className="telemetry-copy">
            <p className="master-kicker master-kicker-light">02 / KYLMÄKETJU</p>
            <h2 id="telemetry-title">TIEDÄMME, MITÄ KUORMASSA TAPAHTUU.</h2>
            <p>
              FleetLogis-seuranta tekee sijainnista, lämpötilasta ja olosuhdehistoriasta
              näkyvää tietoa kuljetuksen aikana ja sen jälkeen.
            </p>

            <div className="telemetry-feature-list">
              <article>
                <span>LIVE-SEURANTA</span>
                <p>Jatkuva lämpötila- ja sijaintiseuranta ajoajalta.</p>
              </article>
              <article>
                <span>DOKUMENTOITAVA DATA</span>
                <p>Raportoitava olosuhdehistoria laadunvarmistukseen.</p>
              </article>
              <article>
                <span>ASIAKASNÄKYVYYS</span>
                <p>Ajankohtainen tieto tuotavissa asiakkaan käyttöön.</p>
              </article>
            </div>
          </div>

          <div className="telemetry-dashboard" aria-label="FleetLogis-esimerkkinäkymä">
            <div className="telemetry-head">
              <div>
                <span>FLEETLOGIS / TELEMETRY</span>
                <strong>KOUVOLA → HELSINKI</strong>
              </div>
              <span className="telemetry-live"><i aria-hidden="true" /> LIVE</span>
            </div>

            <div className="telemetry-metrics">
              <div>
                <span>TEMP NOW</span>
                <strong>+2.8 °C</strong>
                <small>TARGET +2…+6 °C</small>
              </div>
              <div>
                <span>LOCATION</span>
                <strong>LAHTI</strong>
                <small>UPDATED 08:42</small>
              </div>
              <div>
                <span>STATUS</span>
                <strong className="telemetry-ok">OK</strong>
                <small>POIKKEAMAT 0</small>
              </div>
            </div>

            <div className="telemetry-chart">
              <div className="telemetry-chart-meta">
                <span>LÄMPÖTILA / 4 H</span>
                <span>+2…+6 °C</span>
              </div>
              <svg
                viewBox="0 0 620 220"
                role="img"
                aria-labelledby="telemetry-chart-title telemetry-chart-desc"
              >
                <title id="telemetry-chart-title">Esimerkkilämpötilakäyrä</title>
                <desc id="telemetry-chart-desc">
                  Esimerkkikäyrä näyttää lämpötilan pysyvän tavoitealueella kahden ja
                  kuuden celsiusasteen välillä.
                </desc>
                <g aria-hidden="true">
                  <rect x="0" y="45" width="620" height="120" fill="#10B981" fillOpacity="0.08" />
                  <g stroke="#244A78" strokeWidth="1">
                    <path d="M0 45H620" />
                    <path d="M0 85H620" />
                    <path d="M0 125H620" />
                    <path d="M0 165H620" />
                    <path d="M124 0V220" />
                    <path d="M248 0V220" />
                    <path d="M372 0V220" />
                    <path d="M496 0V220" />
                  </g>
                  <path
                    d="M0 118 C62 105 91 120 138 109 S230 102 276 112 S366 116 414 105 S518 108 620 98"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="4"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx="620" cy="98" r="6" fill="#10B981" />
                </g>
              </svg>
              <div className="telemetry-chart-axis" aria-hidden="true">
                <span>04:42</span><span>05:42</span><span>06:42</span><span>07:42</span><span>08:42</span>
              </div>
            </div>

            <div className="telemetry-foot">
              <span>ESIMERKKINÄKYMÄ / EI LIVE-DATAA</span>
              <span>FLEETLOGIS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="terminal-section" id="terminaali" aria-labelledby="terminal-title">
        <div className="container terminal-layout">
          <div className="terminal-copy">
            <p className="master-kicker">03 / TERMINAALI</p>
            <h2 id="terminal-title">KOUVOLAN VIILEÄTERMINAALI — STRATEGINEN SOLMUKOHTA.</h2>
            <p>
              Kouvolan viileäterminaali yhdistää vastaanoton, välivarastoinnin,
              lajittelun ja jatkokuljetuksen samaan hallittuun ketjuun.
            </p>

            <address className="terminal-address">
              <span>VIILEÄTERMINAALI</span>
              <strong>Tiilitie 6, 45200 Kouvola</strong>
              <small>Tehontien logistiikka-alue</small>
            </address>
          </div>

          <div className="terminal-process" aria-label="Terminaaliprosessi">
            <article>
              <span>01</span>
              <h3>Vastaanotto & välivarastointi</h3>
              <p>Kuorman vastaanotto ja lämpösäädelty välivarastointi.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Lajittelu & keräily</h3>
              <p>Tilauskohtainen käsittely, lajittelu ja keräily jatkoa varten.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Jatkokuljetus</h3>
              <p>Kuorma jatkaa suunnitellulle reitille hallitusti ja dokumentoidusti.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="people-section" id="yritys" aria-labelledby="people-title">
        <div className="container">
          <div className="people-lead-grid">
            <div>
              <p className="master-kicker">04 / YRITYS</p>
              <h2 id="people-title">LOGISTIIKAN TAKANA OVAT IHMISET.</h2>
            </div>
            <div className="people-message">
              <strong>SAAT KIINNI OIKEAN IHMISEN.</strong>
              <p>
                Ei tikettijärjestelmää ensimmäisenä välikätenä. Kuljetusasioissa
                yhteys ohjautuu ihmiselle, joka tuntee operatiivisen tilanteen.
              </p>
            </div>
          </div>

          <div className="people-grid">
            {people.map((person) => (
              <article className="person-card" key={person.email}>
                <span className="person-role">{person.role}</span>
                <h3>{person.name}</h3>
                <a href={`tel:${person.phoneHref}`}>{person.phoneDisplay}</a>
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </article>
            ))}
          </div>

          <div className="people-direct-strip">
            <div>
              <span>24/7 AJONJÄRJESTELY</span>
              <strong>Yksi puhelu. Selkeä tilannekuva.</strong>
            </div>
            <a href="tel:+358503662215">050 366 2215</a>
          </div>
        </div>
      </section>

      <section className="faq-section" id="ukk" aria-labelledby="faq-title">
        <div className="container faq-layout">
          <div className="faq-head">
            <p className="master-kicker">USEIN KYSYTTYÄ</p>
            <h2 id="faq-title">MITÄ HALUAT TIETÄÄ ENNEN KUIN KUORMA LÄHTEE?</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.q}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {faq.q}
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section" aria-labelledby="final-cta-title">
        <div className="container final-cta-grid">
          <div>
            <p className="master-kicker master-kicker-light">KULJETUSTARJOUS</p>
            <h2 id="final-cta-title">ONKO KUORMA LÄHDÖSSÄ?</h2>
            <p>Kerro mistä, minne ja mitä kuljetetaan.</p>
          </div>
          <div className="final-cta-actions">
            <a
              className="button button-primary button-large"
              href="mailto:henri@rantakaulio.fi?subject=Kuljetustarjous"
            >
              Pyydä tarjous <span aria-hidden="true">→</span>
            </a>
            <a className="final-cta-phone" href="tel:+358503662215">
              <small>Ajonjärjestely 24/7</small>
              <strong>050 366 2215</strong>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
