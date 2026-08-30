export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <img
            src="https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/main/public/brand/rantakaulio-logo.webp"
            alt="Juha Rantakaulio Oy"
            width="700"
            height="229"
            loading="lazy"
            decoding="async"
          />
          <p>Lämpötilahallittua logistiikkaa Kouvolasta koko Suomeen.</p>
        </div>

        <div className="footer-grid">
          <div>
            <span>Yritys</span>
            <strong>Juha Rantakaulio Oy</strong>
            <small>Y-tunnus 0767846-3</small>
          </div>
          <div>
            <span>Viileäterminaali</span>
            <strong>Tiilitie 6</strong>
            <small>45200 Kouvola</small>
          </div>
          <div>
            <span>Ajojärjestely 24 h</span>
            <a href="tel:+358503662215">050 366 2215</a>
          </div>
          <div>
            <span>Sähköposti</span>
            <a href="mailto:henri@rantakaulio.fi">henri@rantakaulio.fi</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© Juha Rantakaulio Oy</span>
        <span>Verkkosivun uudistus · julkinen demo</span>
      </div>
    </footer>
  );
}
