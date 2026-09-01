export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
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
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Lämpötilahallitut kuljetukset</p>
            <h1 id="hero-title">Älä arvaa mitä kuljetuksessa tapahtui.</h1>
            <p className="hero-lead">
              Lämpötilahallittu kuljetus reaaliaikaisella sijainti- ja
              lämpötilaseurannalla. Vähemmän selvitystyötä. Enemmän varmuutta.
            </p>

            <div className="hero-actions">
              <a className="button button-primary button-large" href="#yhteystiedot">
                Pyydä kuljetusratkaisu <span aria-hidden="true">→</span>
              </a>
              <a className="hero-secondary-link" href="#laatu">
                Katso miten seuranta toimii <span aria-hidden="true">→</span>
              </a>
            </div>

            <p className="hero-microcopy">
              Ei sitoumusta. Kerro reitti ja kuljetustarve.
            </p>

            <div className="hero-tags" aria-label="Keskeiset palvelulupaukset">
              <span>ATP-kalusto</span>
              <span>FleetLogis</span>
              <span>Reaaliaikainen lämpötilaseuranta</span>
              <span>24/7 ajonjärjestely</span>
            </div>
          </div>

          <aside className="hero-proof-panel" aria-label="Rantakaulion seurannan nykyiset kyvykkyydet">
            <p className="hero-proof-kicker">Kuljetuksen näkyvyys</p>
            <strong className="hero-proof-title">FLEETLOGIS</strong>
            <div className="hero-proof-rows">
              <div><span>Sijainti</span><strong>Reaaliaikainen</strong></div>
              <div><span>Lämpötila</span><strong>Reaaliaikainen</strong></div>
              <div><span>Kalusto</span><strong>ATP</strong></div>
              <div><span>Ajojärjestely</span><strong>24/7</strong></div>
            </div>
            <p className="hero-proof-note">Olennaiset tiedot eivät jää arvailun varaan.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
