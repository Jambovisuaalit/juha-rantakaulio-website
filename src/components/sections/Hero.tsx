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
        <div className="hero-copy">
          <p className="eyebrow">Juha Rantakaulio Oy · Lämpötilahallittu logistiikka</p>
          <h1 id="hero-title"><span>Kylmäketju</span><span>ei saa katketa.</span></h1>
          <p className="hero-lead">
            Lämpötilahallitut kuljetukset ja elintarvikelogistiikka lähes 40 vuoden
            kokemuksella. Nykyaikainen kalusto, reaaliaikainen lämpötilaseuranta ja
            varmat toimitukset koko Suomeen.
          </p>

          <div className="hero-actions">
            <a className="button button-primary button-large" href="#yhteystiedot">
              Pyydä kuljetustarjous <span aria-hidden="true">→</span>
            </a>
            <a className="hero-phone" href="tel:+358503662215">
              <span className="line-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.7 3.2 9.4 6.3a1.4 1.4 0 0 1 .2 1.6L8.2 10c1.1 2.3 3 4.2 5.3 5.3l2.2-1.4a1.4 1.4 0 0 1 1.6.2l3.1 2.7a1.4 1.4 0 0 1 .4 1.6c-.7 1.8-2.3 2.9-4.2 2.9C9 21.3 2.7 15 2.7 7.4c0-1.9 1.1-3.5 2.9-4.2a1.4 1.4 0 0 1 1.1 0Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              <span>
                <small>Ajonjärjestely 24/7</small>
                <strong>050 366 2215</strong>
              </span>
            </a>
          </div>

          <div className="hero-tags" aria-label="Keskeiset palvelulupaukset">
            <span>ATP-kalusto</span>
            <span>Reaaliaikainen seuranta</span>
            <span>24/7 ajonjärjestely</span>
          </div>
        </div>
      </div>
    </section>
  );
}
