const navigation = [
  { href: "#palvelut", label: "Palvelut" },
  { href: "#laatu", label: "Tekniikka & laatu" },
  { href: "#meista", label: "Meistä" },
  { href: "#yhteystiedot", label: "Yhteystiedot" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand-lockup" href="/" aria-label="Juha Rantakaulio Oy, etusivu">
          <span className="brand-mark"><svg viewBox="0 0 64 64" aria-hidden="true">
  <path d="M13 12h27c8 0 14 6 14 14 0 6-3 11-9 13l11 13H43L31 38H25v14H13V12Zm12 10v7h14c2 0 4-1 4-3.5S41 22 39 22H25Z" fill="currentColor"/>
  <path d="M8 38h14l-7 8H3l5-8Z" fill="#D94125"/>
</svg></span>
          <span className="brand-wordmark">
            <strong>Juha Rantakaulio Oy</strong>
            <small>Lämpötilahallittu logistiikka</small>
          </span>
        </a>

        <a className="header-phone" href="tel:+358503662215">
          <span className="line-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.7 3.2 9.4 6.3a1.4 1.4 0 0 1 .2 1.6L8.2 10c1.1 2.3 3 4.2 5.3 5.3l2.2-1.4a1.4 1.4 0 0 1 1.6.2l3.1 2.7a1.4 1.4 0 0 1 .4 1.6c-.7 1.8-2.3 2.9-4.2 2.9C9 21.3 2.7 15 2.7 7.4c0-1.9 1.1-3.5 2.9-4.2a1.4 1.4 0 0 1 1.1 0Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          <span>
            <small>Ajonjärjestely 24/7</small>
            <strong>050 366 2215</strong>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Päänavigaatio">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="button button-primary header-cta" href="#yhteystiedot">
          Pyydä kuljetustarjous
        </a>

        <a className="mobile-call" href="tel:+358503662215" aria-label="Ajonjärjestely 24/7, 050 366 2215">
          <span className="mobile-247-badge">24/7</span>
          <strong className="mobile-phone-number">050 366 2215</strong>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Avaa valikko">
            <span className="menu-icon" aria-hidden="true"><i /><i /></span>
          </summary>
          <nav aria-label="Mobiilinavigaatio">
            <a className="mobile-menu-phone" href="tel:+358503662215">
              <small>Ajonjärjestely 24/7</small>
              <strong>050 366 2215</strong>
            </a>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
            <a className="button button-primary" href="#yhteystiedot">
              Pyydä kuljetustarjous
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
