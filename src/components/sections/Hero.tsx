export function Hero() {
  return (
    <section className="hero master-hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <picture>
          <source srcSet="/images/rantakaulio-hero.avif" type="image/avif" />
          <source srcSet="/images/rantakaulio-hero.webp" type="image/webp" />
          <img
            src="/images/rantakaulio-hero.webp"
            alt=""
            width="1672"
            height="941"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-copy">
          <p className="master-live-badge">
            <span aria-hidden="true" /> LIVE · LÄMPÖTILAHALLITTUA LOGISTIIKKAA
          </p>

          <h1 id="hero-title">
            <span>KYLMÄKETJU NÄKYVISSÄ.</span>
            <span>KOKO MATKAN AJAN.</span>
          </h1>

          <p className="hero-lead">
            Autamme lämpötilakriittisen logistiikan päättäjiä pitämään kylmäketjun
            näkyvissä reaaliaikaisen sijainti- ja lämpötilatiedon avulla — vähemmän
            arvailua, vähemmän statuspuheluita ja nopeampi selvitys, kun tietoa tarvitaan.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary button-large"
              href="mailto:henri@rantakaulio.fi?subject=Kuljetustarjous"
            >
              Pyydä kuljetustarjous <span aria-hidden="true">→</span>
            </a>
            <a className="hero-phone" href="tel:+358503662215">
              <span>
                <small>Ajonjärjestely 24/7</small>
                <strong>050 366 2215</strong>
              </span>
            </a>
          </div>

          <div className="hero-microstrip">
            Sovittuun aikaan. Sovitussa paikassa. Sovitulla kalustolla.
          </div>
        </div>
      </div>
    </section>
  );
}
