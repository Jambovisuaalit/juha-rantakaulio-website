import { Mail, MapPin, PhoneCall } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071A36] text-white">
      <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1280px] gap-10 py-12 md:w-[calc(100%-64px)] md:grid-cols-[1.4fr_1fr_1fr] md:py-14">
        <div>
          <div className="font-[var(--font-display)] text-xl font-extrabold tracking-[-0.03em]">
            RANTAKAULIO
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
            Lämpötilahallitut kuljetukset, joissa olennaiset tiedot eivät jää arvailun varaan.
          </p>
          <div className="mt-6 inline-flex border border-white/15 px-3 py-2 font-[var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.12em] text-white/65">
            Kouvola · Suomi · 24/7
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-white/40">
            Ajonjärjestely
          </p>
          <a href="tel:+358503662215" className="flex items-center gap-3 text-sm font-semibold text-white/85 hover:text-white">
            <PhoneCall className="h-4 w-4" strokeWidth={1.8} />
            050 366 2215
          </a>
          <a href="mailto:ajo@rantakaulio.fi" className="flex items-center gap-3 text-sm text-white/65 hover:text-white">
            <Mail className="h-4 w-4" strokeWidth={1.8} />
            ajo@rantakaulio.fi
          </a>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-white/40">
            Myynti
          </p>
          <a href="tel:+35853755200" className="flex items-center gap-3 text-sm font-semibold text-white/85 hover:text-white">
            <PhoneCall className="h-4 w-4" strokeWidth={1.8} />
            05 375 5200
          </a>
          <a href="mailto:myynti@rantakaulio.fi" className="flex items-center gap-3 text-sm text-white/65 hover:text-white">
            <Mail className="h-4 w-4" strokeWidth={1.8} />
            myynti@rantakaulio.fi
          </a>
          <div className="flex items-center gap-3 text-sm text-white/50">
            <MapPin className="h-4 w-4" strokeWidth={1.8} />
            Kouvola
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-[calc(100%-32px)] max-w-[1280px] flex-col gap-2 py-5 text-[10px] font-bold uppercase tracking-[0.1em] text-white/35 md:w-[calc(100%-64px)] md:flex-row md:justify-between">
          <span>© 2026 Juha Rantakaulio Oy · Y-tunnus 0767846-3</span>
          <span>Preview · noindex</span>
        </div>
      </div>
    </footer>
  );
}
