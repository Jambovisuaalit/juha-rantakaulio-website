const navigation = [
  { href: "#palvelut", label: "Palvelut" },
  { href: "#kylmaketju", label: "Kylmäketju" },
  { href: "#terminaali", label: "Terminaali" },
  { href: "#kalusto", label: "Kalusto" },
  { href: "#yritys", label: "Yritys" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-brand-group">
          <a className="brand" href="/" aria-label="Juha Rantakaulio Oy, etusivu">
            <img
              src="https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/main/public/brand/rantakaulio-logo.webp"
              alt="Juha Rantakaulio Oy"
              width="700"
              height="229"
              decoding="async"
            />
          </a>

          <a className="header-phone" href="tel:+358503662215" aria-label="Ajonjärjestely 24/7, soita 050 366 2215">
            <span className="line-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8 9.4 6a1.5 1.5 0 0 1 .2 1.7L8.2 10c1.1 2.3 3 4.2 5.3 5.3l2.3-1.4a1.5 1.5 0 0 1 1.7.2l3.2 2.8a1.5 1.5 0 0 1 .4 1.7c-.7 1.8-2.4 3-4.3 3C9 21.6 2.4 15 2.4 7.2c0-2 1.2-3.6 3-4.3a1.5 1.5 0 0 1 1.2-.1Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            <span>
              <small>Ajonjärjestely 24/7</small>
              <strong>050 366 2215</strong>
            </span>
          </a>
        </div>

        <nav className="desktop-nav" aria-label="Päänavigaatio">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="button button-primary header-cta" href="#yhteystiedot">
          Pyydä tarjous <span aria-hidden="true">→</span>
        </a>

        <a className="mobile-call" href="tel:+358503662215" aria-label="Soita ajonjärjestelyyn 050 366 2215">
          <span className="line-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8 9.4 6a1.5 1.5 0 0 1 .2 1.7L8.2 10c1.1 2.3 3 4.2 5.3 5.3l2.3-1.4a1.5 1.5 0 0 1 1.7.2l3.2 2.8a1.5 1.5 0 0 1 .4 1.7c-.7 1.8-2.4 3-4.3 3C9 21.6 2.4 15 2.4 7.2c0-2 1.2-3.6 3-4.3a1.5 1.5 0 0 1 1.2-.1Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Avaa valikko">
            <span>Valikko</span>
            <span className="menu-icon" aria-hidden="true"><i /><i /></span>
          </summary>
          <nav aria-label="Mobiilinavigaatio">
            <a className="mobile-menu-phone" href="tel:+358503662215">
              <span>Ajonjärjestely 24/7</span>
              <strong>050 366 2215</strong>
            </a>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
            <a className="button button-primary" href="#yhteystiedot">
              Pyydä tarjous <span aria-hidden="true">→</span>
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
