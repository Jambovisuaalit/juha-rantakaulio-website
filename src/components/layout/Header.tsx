import { ArrowUpRight, Menu, PhoneCall } from "lucide-react";

const navigation = [
  { href: "#proof", label: "Todisteet" },
  { href: "#prosessi", label: "Prosessi" },
  { href: "#palvelut", label: "Palvelut" },
  { href: "#yhteystiedot", label: "Tarjous" },
];

function Mark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-9 w-9">
      <path
        d="M13 12h27c8 0 14 6 14 14 0 6-3 11-9 13l11 13H43L31 38H25v14H13V12Zm12 10v7h14c2 0 4-1 4-3.5S41 22 39 22H25Z"
        fill="currentColor"
      />
      <path d="M8 38h14l-7 8H3l5-8Z" fill="#D94125" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#DDE3EA] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-[calc(100%-32px)] max-w-[1280px] items-center justify-between gap-4 md:h-[72px] md:w-[calc(100%-64px)]">
        <a
          href="/"
          className="flex min-w-0 items-center gap-3 text-[#0F2C59]"
          aria-label="Juha Rantakaulio Oy, etusivu"
        >
          <Mark />
          <span className="min-w-0">
            <strong className="block truncate font-[var(--font-display)] text-[13px] font-extrabold tracking-[-0.02em] md:text-sm">
              RANTAKAULIO
            </strong>
            <span className="hidden text-[9px] font-bold uppercase tracking-[0.14em] text-[#657184] sm:block">
              Lämpötilahallitut kuljetukset
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Päänavigaatio">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#516072] transition-colors hover:text-[#0F2C59]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <a
            href="tel:+358503662215"
            className="inline-flex min-h-11 items-center gap-2 border border-[#DDE3EA] px-4 text-[11px] font-bold text-[#0F2C59]"
          >
            <PhoneCall className="h-4 w-4" strokeWidth={1.8} />
            050 366 2215
          </a>
          <a
            href="#yhteystiedot"
            className="inline-flex min-h-11 items-center gap-2 bg-[#D94125] px-4 text-[11px] font-extrabold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#B7331D]"
          >
            Pyydä ratkaisu
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>

        <details className="relative md:hidden">
          <summary
            className="grid h-11 w-11 cursor-pointer list-none place-items-center border border-[#DDE3EA] text-[#0F2C59]"
            aria-label="Avaa valikko"
          >
            <Menu className="h-5 w-5" strokeWidth={1.8} />
          </summary>
          <nav className="absolute right-0 top-[calc(100%+10px)] grid w-[min(320px,calc(100vw-32px))] border border-[#DDE3EA] bg-white shadow-xl">
            <a
              href="tel:+358503662215"
              className="flex items-center gap-3 border-b border-[#DDE3EA] px-4 py-4 text-sm font-bold text-[#0F2C59]"
            >
              <PhoneCall className="h-4 w-4" strokeWidth={1.8} />
              Ajonjärjestely 24/7 · 050 366 2215
            </a>
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-[#DDE3EA] px-4 py-4 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#0F2C59]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#yhteystiedot"
              className="m-3 inline-flex min-h-12 items-center justify-center gap-2 bg-[#D94125] px-4 text-[11px] font-extrabold uppercase tracking-[0.06em] text-white"
            >
              Pyydä kuljetusratkaisu
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
