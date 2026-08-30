import Image from "next/image";

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
              <a
                className="button button-primary button-large"
                href="mailto:henri@rantakaulio.fi?subject=Kuljetustarjous"
              >
                Pyydä kuljetustarjous <span aria-hidden="true">→</span>
              </a>

              <a className="text-link" href="tel:+358503662215">
                Ajojärjestely 24 h
                <span>050 366 2215</span>
              </a>
            </div>

            <p className="hero-note">
              Sovittuun aikaan. Sovitussa paikassa. Sovitulla kalustolla.
            </p>
          </div>
        </div>

        <div className="hero-media">
          <Image
            src="https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/bff2f0781863efdc9389faef87adc8cdb51e5594/public/images/rantakaulio-hero.webp"
            alt="Juha Rantakaulio Oy:n henkilöstöä lämpötilahallitun kuljetuskaluston edessä"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 58vw"
          />
          <div className="hero-media-label" aria-hidden="true">
            <span>Kouvola</span>
            <span>Finland</span>
          </div>
        </div>
      </div>
    </section>
  );
}
