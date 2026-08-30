export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-copy-inner">
            <p className="eyebrow">Lämpötilahallittua logistiikkaa</p>

            <h1 id="hero-title">
              Kylmäketju
              <br />
              ei saa
              <br />
              katketa.
            </h1>

            <p className="hero-lead">
              Lämpötilahallitut kuljetukset, elintarvikelogistiikka ja
              terminaalipalvelut Kouvolasta koko Suomeen.
            </p>

            <div className="hero-actions">
              <a className="button button-primary button-large" href="#yhteystiedot">
                Pyydä kuljetustarjous <span aria-hidden="true">→</span>
              </a>

              <a className="text-link" href="tel:+358503662215">
                <span className="text-link-label">Ajojärjestely 24 h</span>
                <strong>050 366 2215</strong>
              </a>
            </div>

            <p className="hero-note">
              Sovittuun aikaan. Sovitussa paikassa. Sovitulla kalustolla.
            </p>
          </div>
        </div>

        <figure className="hero-media">
          <img
            src="/images/rantakaulio-hero.webp"
            alt="Rantakaulion henkilöstöä lämpötilahallitun kuljetuskaluston edessä"
            width="760"
            height="428"
            fetchPriority="high"
            decoding="async"
          />
          <figcaption className="hero-media-label">
            <span>Kouvola</span><span>Finland</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
