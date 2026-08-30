import Image from "next/image";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Image
          src="/brand/rantakaulio-logo.webp"
          alt="Juha Rantakaulio Oy"
          width={220}
          height={49}
        />
        <p>Lämpötilahallittua logistiikkaa Kouvolasta.</p>
      </div>

      <div className="container footer-grid">
        <div>
          <span>Juha Rantakaulio Oy</span>
          <strong>Y-tunnus 0767846-3</strong>
        </div>
        <div>
          <span>Viileäterminaali</span>
          <strong>Tiilitie 6, 45200 Kouvola</strong>
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

      <div className="container footer-bottom">
        <span>© Juha Rantakaulio Oy</span>
        <span>Verkkosivun uudistus · preview</span>
      </div>
    </footer>
  );
}
