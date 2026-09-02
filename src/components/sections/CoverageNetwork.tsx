const proofCards = [
  {
    number: "01",
    meta: "OMALLA KALUSTOLLA",
    title: "OMA KALUSTO",
    body:
      "Vahva operatiivinen suorituskyky ja oma kalusto Kouvola–Jyväskylä-akselilla sekä Etelä-, Keski- ja Itä-Suomessa.",
  },
  {
    number: "02",
    meta: "VALTAKUNNALLINEN",
    title: "KOKO SUOMI",
    body:
      "Tarkkaan valitut ja auditoidut kumppaniverkostot takaavat täsmälliset toimitukset Hangosta Utsjoelle.",
  },
  {
    number: "03",
    meta: "KANSAINVÄLINEN",
    title: "POHJOISMAAT & BALTIA",
    body:
      "Lämpötilahallitut kuljetukset järjestyvät saumattomasti myös rajojen yli Pohjoismaihin ja Baltian alueelle.",
  },
];

function CoverageMap({ compact = false }: { compact?: boolean }) {
  const titleId = compact ? "coverage-map-title-mobile" : "coverage-map-title-desktop";
  const descId = compact ? "coverage-map-desc-mobile" : "coverage-map-desc-desktop";

  return (
    <svg
      viewBox={compact ? "120 30 420 460" : "0 0 680 520"}
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      focusable="false"
      className={compact ? "coverage-svg coverage-svg-mobile" : "coverage-svg coverage-svg-desktop"}
    >
      <title id={titleId}>Toiminta-alue ja kuljetusverkosto</title>
      <desc id={descId}>
        Juha Rantakaulio Oy:n oman kaluston ydinalue Kouvolan ja Jyväskylän
        ympärillä sekä kumppaniverkoston kattavuus koko Suomessa, Pohjoismaissa
        ja Baltiassa.
      </desc>

      <defs>
        <pattern
          id={compact ? "coverage-grid-pattern-mobile" : "coverage-grid-pattern-desktop"}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#E1E7EE"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </pattern>
      </defs>

      <g aria-hidden="true">
        <rect
          width="680"
          height="520"
          fill={`url(#${compact ? "coverage-grid-pattern-mobile" : "coverage-grid-pattern-desktop"})`}
        />

        <g
          fill="none"
          stroke="#7FA9D5"
          strokeWidth="2"
          strokeDasharray="5 7"
          vectorEffect="non-scaling-stroke"
        >
          <path d="M 310 330 L 320 140" />
          <path d="M 310 330 L 180 180" />
          <path d="M 320 410 L 480 450" />
        </g>

        <path
          d="M 310 40 L 350 60 L 380 120 L 410 180 L 390 260 L 420 340 L 390 410 L 340 460 L 280 450 L 250 380 L 280 310 L 240 240 L 290 120 Z"
          fill="#FFFFFF"
          stroke="#0F2C59"
          strokeWidth="2.5"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        <path
          d="M 280 310 L 390 260 L 420 340 L 390 410 L 340 460 L 280 450 L 250 380 Z"
          fill="#D94125"
          fillOpacity="0.10"
          stroke="#D94125"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          vectorEffect="non-scaling-stroke"
        />

        <g className="coverage-region-labels">
          <text x="278" y="365">KESKI-SUOMI</text>
          <text x="356" y="386">ITÄ-SUOMI</text>
          <text x="298" y="438">ETELÄ-SUOMI</text>
        </g>

        <line
          x1="320"
          y1="410"
          x2="310"
          y2="330"
          stroke="#D94125"
          strokeWidth="6"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        <g transform="translate(320 410)">
          <circle r="9" fill="#0F2C59" />
          <circle r="6.5" fill="#FFFFFF" />
          <circle r="4" fill="#D94125" />
          <text x="18" y="2" className="coverage-hub-primary">KOUVOLA</text>
          <text x="18" y="16" className="coverage-hub-meta-red">
            HUB / AJONJÄRJESTELY
          </text>
        </g>

        <g transform="translate(310 330)">
          <circle r="7" fill="#FFFFFF" stroke="#0F2C59" strokeWidth="1.5" />
          <circle r="4" fill="#D94125" />
          <text x="16" y="1" className="coverage-hub-secondary">JYVÄSKYLÄ</text>
          <text x="16" y="15" className="coverage-hub-meta">YDINALUE</text>
        </g>

        <g transform="translate(320 140)">
          <circle r="5" fill="#FFFFFF" stroke="#0F2C59" strokeWidth="2" />
          <rect x="-48" y="-30" width="96" height="22" fill="#FFFFFF" stroke="#DDE3EA" />
          <text x="0" y="-15" textAnchor="middle" className="coverage-node-label">
            KOKO SUOMI
          </text>
        </g>

        <g transform="translate(180 180)">
          <circle r="5" fill="#FFFFFF" stroke="#0F2C59" strokeWidth="2" />
          <rect x="-54" y="-30" width="108" height="22" fill="#FFFFFF" stroke="#DDE3EA" />
          <text x="0" y="-15" textAnchor="middle" className="coverage-node-label">
            POHJOISMAAT
          </text>
        </g>

        <g transform="translate(480 450)">
          <circle r="5" fill="#FFFFFF" stroke="#0F2C59" strokeWidth="2" />
          <rect x="-38" y="-5" width="76" height="22" fill="#FFFFFF" stroke="#DDE3EA" />
          <text x="0" y="10" textAnchor="middle" className="coverage-node-label">
            BALTIA
          </text>
        </g>

        <g className="coverage-map-caption">
          <text x="48" y="476">OMA KALUSTO / YDINALUE</text>
          <text x="48" y="495">VERKOSTO / KOKO SUOMI + POHJOISMAAT + BALTIA</text>
        </g>
      </g>
    </svg>
  );
}

export function CoverageNetwork() {
  return (
    <section
      id="toiminta-alue"
      className="coverage-section"
      aria-labelledby="coverage-title"
    >
      <div className="coverage-container">
        <div className="coverage-top-grid">
          <div className="coverage-copy-col">
            <span className="coverage-eyebrow">TOIMINTA-ALUE &amp; VERKOSTO</span>

            <h2 id="coverage-title" className="coverage-title">
              LAAJA VERKOSTO.
              <br />
              SELKEÄ YDINALUE.
            </h2>

            <p className="coverage-ingress">
              Juha Rantakaulio Oy palvelee omalla kalustollaan vahvasti{" "}
              <strong>Kouvolan–Jyväskylän akselilla</strong> sekä{" "}
              <strong>Etelä-, Keski- ja Itä-Suomessa</strong>. Kumppaniverkoston
              kautta kuljetukset järjestyvät <strong>koko Suomeen</strong> sekä
              tarvittaessa <strong>Pohjoismaihin ja Baltiaan</strong>.
            </p>

            <div className="coverage-legend" aria-label="Kartan selite">
              <div className="coverage-legend-item">
                <span className="coverage-legend-line coverage-legend-line-own" aria-hidden="true" />
                <span className="coverage-legend-copy">
                  <strong>OMA KALUSTO</strong>
                  <small>Ydinalue ja suora operointi</small>
                </span>
              </div>

              <div className="coverage-legend-item">
                <span className="coverage-legend-line coverage-legend-line-partner" aria-hidden="true" />
                <span className="coverage-legend-copy">
                  <strong>KUMPPANIVERKOSTO</strong>
                  <small>Laajempi toimitusalue</small>
                </span>
              </div>
            </div>

            <a className="button button-primary coverage-primary-cta" href="/tarjous">
              Kysy reitistäsi <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="coverage-map-col">
            <div className="coverage-map-card">
              <div className="coverage-map-header">
                <div>
                  <span className="coverage-map-meta">COVERAGE / NETWORK</span>
                  <strong>Oma kalusto + kumppaniverkosto</strong>
                </div>
                <span className="coverage-map-id">JR / MAP 01</span>
              </div>

              <div className="coverage-map-body">
                <CoverageMap />
                <CoverageMap compact />
              </div>
            </div>
          </div>
        </div>

        <div className="coverage-proof-row">
          {proofCards.map((card) => (
            <article className="coverage-proof-card" key={card.number}>
              <div className="coverage-proof-head">
                <span>{card.number}</span>
                <small>{card.meta}</small>
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>

        <div className="coverage-cta-strip">
          <div className="coverage-cta-copy">
            <h3>Meneekö reittisi ydinalueen ulkopuolelle?</h3>
            <p>
              Kerro noutopaikka, määränpää ja lämpötilavaatimus. Selvitämme nopeasti,
              miten kuljetus kannattaa toteuttaa.
            </p>
          </div>

          <div className="coverage-cta-contact">
            <span>AJONJÄRJESTELY 24/7</span>
            <a
              href="tel:+358503662215"
              aria-label="Soita ajonjärjestelyyn 050 366 2215"
            >
              050 366 2215
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
