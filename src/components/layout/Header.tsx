import Image from "next/image";

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
        <a className="brand" href="/" aria-label="Juha Rantakaulio Oy, etusivu">
          <Image
            src="/brand/rantakaulio-logo.webp"
            alt="Juha Rantakaulio Oy"
            width={220}
            height={49}
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label="Päänavigaatio">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="button button-primary header-cta" href="#yhteystiedot">
          Pyydä tarjous <span aria-hidden="true">→</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Avaa valikko">
            <span>Valikko</span>
            <span className="menu-icon" aria-hidden="true"><i /><i /></span>
          </summary>
          <nav aria-label="Mobiilinavigaatio">
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
