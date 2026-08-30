export function Hero() {
  return (
    <section className="hero hero-cover" aria-labelledby="hero-title">
      <div className="hero-cover-media" aria-hidden="true">
        <img
          src="https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/main/public/images/rantakaulio-hero.webp"
          alt=""
          width="1672"
          height="941"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero-cover-shade" aria-hidden="true" />

      <div className="container hero-cover-content">
        <div className="hero-cover-copy">
          <p className="eyebrow">Lämpötilahallittua logistiikkaa</p>

          <h1 id="hero-title">Kylmäketju ei saa katketa.</h1>

          <p className="hero-lead">
            Lämpötilahallitut kuljetukset ja elintarvikelogistiikka lähes 40 vuoden
            kokemuksella – varmoilla toimituksilla koko Suomeen.
          </p>

          <div className="hero-actions">
            <a className="button button-primary button-large" href="#yhteystiedot">
              Pyydä kuljetustarjous <span aria-hidden="true">→</span>
            </a>

            <a className="hero-call-card" href="tel:+358503662215">
              <span className="line-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8 9.4 6a1.5 1.5 0 0 1 .2 1.7L8.2 10c1.1 2.3 3 4.2 5.3 5.3l2.3-1.4a1.5 1.5 0 0 1 1.7.2l3.2 2.8a1.5 1.5 0 0 1 .4 1.7c-.7 1.8-2.4 3-4.3 3C9 21.6 2.4 15 2.4 7.2c0-2 1.2-3.6 3-4.3a1.5 1.5 0 0 1 1.2-.1Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              <span>
                <small>Ajonjärjestely 24/7</small>
                <strong>050 366 2215</strong>
              </span>
            </a>
          </div>

          <p className="hero-note">
            Sovittuun aikaan. Sovitussa paikassa. Sovitulla kalustolla.
          </p>
        </div>

        <div className="hero-location" aria-hidden="true">
          <span>Kouvola</span><span>Finland</span>
        </div>
      </div>
    </section>
  );
}
