import Image from "next/image";

const navigation = [
  { href: "#palvelut", label: "Palvelut" },
  { href: "#kalusto", label: "Kalusto" },
  { href: "#terminaali", label: "Terminaali" },
  { href: "#yritys", label: "Yritys" },
  { href: "#yhteystiedot", label: "Yhteystiedot" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Juha Rantakaulio Oy, etusivu">
          <Image
            src="https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/bff2f0781863efdc9389faef87adc8cdb51e5594/public/brand/rantakaulio-logo.webp"
            alt="Juha Rantakaulio Oy"
            width={220}
            height={49}
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label="Päänavigaatio">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="button button-primary header-cta"
          href="mailto:henri@rantakaulio.fi?subject=Kuljetustarjous"
        >
          Pyydä tarjous
          <span aria-hidden="true">→</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Avaa valikko">
            <span>Valikko</span>
            <span className="menu-icon" aria-hidden="true">
              <i />
              <i />
            </span>
          </summary>
          <nav aria-label="Mobiilinavigaatio">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a
              className="button button-primary"
              href="mailto:henri@rantakaulio.fi?subject=Kuljetustarjous"
            >
              Pyydä tarjous <span aria-hidden="true">→</span>
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
