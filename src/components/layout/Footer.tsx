export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid master-footer-grid">
        <div className="footer-brand">
          <a className="brand-lockup brand-lockup-light" href="/" aria-label="Juha Rantakaulio Oy">
            <span className="brand-mark">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <path d="M13 12h27c8 0 14 6 14 14 0 6-3 11-9 13l11 13H43L31 38H25v14H13V12Zm12 10v7h14c2 0 4-1 4-3.5S41 22 39 22H25Z" fill="currentColor"/>
                <path d="M8 38h14l-7 8H3l5-8Z" fill="#D94125"/>
              </svg>
            </span>
            <span className="brand-wordmark">
              <strong>Juha Rantakaulio Oy</strong>
              <small>Lämpötilahallittu logistiikka</small>
            </span>
          </a>
          <p>Todennettava kylmäketju. Suora yhteys oikeaan ihmiseen.</p>
        </div>

        <div>
          <span className="footer-label">Ajonjärjestely 24/7</span>
          <a href="tel:+358503662215">050 366 2215</a>
        </div>

        <div>
          <span className="footer-label">Toimitusjohtaja</span>
          <a href="tel:+358407295278">040 729 5278</a>
          <a href="mailto:henri@rantakaulio.fi">henri@rantakaulio.fi</a>
        </div>

        <div>
          <span className="footer-label">Yritys</span>
          <strong>Juha Rantakaulio Oy</strong>
          <span>Y-tunnus 0767846-3</span>
          <span>Tiilitie 6, 45200 Kouvola</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Juha Rantakaulio Oy</span>
        <span>Y-tunnus 0767846-3</span>
      </div>
    </footer>
  );
}
