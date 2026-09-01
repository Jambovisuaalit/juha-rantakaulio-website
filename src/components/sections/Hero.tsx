import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Radio,
  Thermometer,
} from "lucide-react";

const proofRows = [
  { label: "Sijainti", value: "Reaaliaikainen", Icon: MapPin },
  { label: "Lämpötila", value: "Reaaliaikainen", Icon: Thermometer },
  { label: "Järjestelmä", value: "FleetLogis", Icon: Radio },
  { label: "Ajonjärjestely", value: "24/7", Icon: Clock3 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#DDE3EA] bg-[#F7F9FC]" aria-labelledby="hero-title">
      <div className="mx-auto grid min-h-[720px] w-full max-w-[1440px] lg:grid-cols-[1.08fr_.92fr]">
        <div className="flex items-center px-5 py-14 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[760px]">
            <div className="mb-6 inline-flex items-center gap-2 border border-[#DDE3EA] bg-white px-3 py-2 font-[var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#526174]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D94125]" />
              Kylmäketju näkyvissä · koko matkan ajan
            </div>

            <h1
              id="hero-title"
              className="max-w-[10.5ch] font-[var(--font-display)] text-[clamp(48px,6.2vw,92px)] font-extrabold leading-[0.92] tracking-[-0.055em] text-[#0F2C59]"
            >
              Älä arvaa mitä kuljetuksessa tapahtui.
            </h1>

            <p className="mt-7 max-w-[640px] text-base leading-7 text-[#516072] md:text-lg md:leading-8">
              Lämpötilahallittu kuljetus reaaliaikaisella sijainti- ja lämpötilaseurannalla.
              Vähemmän selvitystyötä. Enemmän varmuutta.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#yhteystiedot"
                className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#D94125] px-6 text-[11px] font-extrabold uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#B7331D]"
              >
                Pyydä kuljetusratkaisu
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href="#proof"
                className="inline-flex min-h-14 items-center justify-center gap-2 border border-[#C8D1DC] bg-white px-6 text-[11px] font-extrabold uppercase tracking-[0.07em] text-[#0F2C59] transition-colors hover:border-[#0F2C59]"
              >
                Katso todisteet
              </a>
            </div>

            <div className="mt-5 flex items-start gap-2 text-xs leading-5 text-[#657184]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0F2C59]" strokeWidth={1.8} />
              <span>Ei sitoumusta. Kerro reitti ja kuljetustarve.</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[500px] border-t border-[#DDE3EA] bg-[#0A2144] lg:min-h-[720px] lg:border-l lg:border-t-0">
          <picture className="absolute inset-0">
            <source srcSet="/images/rantakaulio-hero.avif" type="image/avif" />
            <source srcSet="/images/rantakaulio-hero.webp" type="image/webp" />
            <img
              src="/images/rantakaulio-hero.webp"
              alt="Juha Rantakaulio Oy:n lämpötilahallittua kuljetuskalustoa"
              width="1672"
              height="941"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A36] via-[#071A36]/45 to-transparent" />

          <div className="absolute inset-x-4 bottom-4 border border-white/20 bg-[#071A36]/92 p-5 backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-6 lg:inset-x-8 lg:bottom-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
              <div>
                <p className="font-[var(--font-mono)] text-[9px] font-semibold uppercase tracking-[0.14em] text-[#FFB7A6]">
                  Operatiivinen näkyvyys
                </p>
                <p className="mt-1 font-[var(--font-display)] text-2xl font-extrabold tracking-[-0.03em] text-white">
                  FLEETLOGIS
                </p>
              </div>
              <div className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 font-[var(--font-mono)] text-[9px] font-semibold uppercase tracking-[0.12em] text-white/65">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D94125]" />
                Seuranta käytössä
              </div>
            </div>

            <div className="grid sm:grid-cols-2">
              {proofRows.map(({ label, value, Icon }) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 border-b border-white/10 py-4 sm:odd:border-r sm:odd:pr-4 sm:even:pl-4"
                >
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.09em] text-white/45">
                    <Icon className="h-4 w-4 text-white/70" strokeWidth={1.6} />
                    {label}
                  </span>
                  <strong className="font-[var(--font-mono)] text-[11px] font-semibold uppercase text-white">
                    {value}
                  </strong>
                </div>
              ))}
            </div>

            <p className="pt-4 text-xs leading-5 text-white/55">
              Ei demoarvoja. Vain nykyiset, vahvistetut operatiiviset kyvykkyydet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
