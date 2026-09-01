import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileSearch,
  Mail,
  MapPin,
  PackageCheck,
  PhoneCall,
  PhoneOff,
  Radio,
  Route,
  ShieldCheck,
  Snowflake,
  Thermometer,
  Warehouse,
} from "lucide-react";

const painPoints = [
  {
    title: "Missä kuorma on?",
    text: "Statuspuhelu ei saa olla ensisijainen seurantajärjestelmä.",
    Icon: PhoneOff,
  },
  {
    title: "Pysyikö lämpötila hallinnassa?",
    text: "Kylmäketjun onnistumisen pitää perustua mitattavaan tietoon.",
    Icon: Thermometer,
  },
  {
    title: "Mitä tapahtui?",
    text: "Poikkeama- ja reklamaatiotilanteessa tarvitaan faktat nopeasti.",
    Icon: FileSearch,
  },
];

const process = [
  {
    step: "01",
    title: "Hallitse",
    text: "Oikea kalusto, sovittu aikataulu ja selkeä operatiivinen vastuu.",
    Icon: ShieldCheck,
  },
  {
    step: "02",
    title: "Seuraa",
    text: "Sijainti- ja lämpötilatieto kulkevat mukana FleetLogis-järjestelmässä.",
    Icon: Radio,
  },
  {
    step: "03",
    title: "Todista",
    text: "Kun tietoa tarvitaan, päätöksen ei tarvitse perustua muistikuviin tai arvaukseen.",
    Icon: PackageCheck,
  },
];

const services = [
  {
    title: "Lämpötilahallitut kuljetukset",
    text: "Pakaste-, tuore- ja lämpöherkät tuotteet hallituissa lämpötiloissa koko Suomeen.",
    Icon: Snowflake,
  },
  {
    title: "Elintarvikelogistiikka",
    text: "Kuljetus ja käsittely tuoteturvallisuus sekä toimitusvarmuus edellä.",
    Icon: PackageCheck,
  },
  {
    title: "Terminaali & varastointi",
    text: "Lämpötilasäädetty varastointi, tavarankäsittely, lajittelu ja keräily.",
    Icon: Warehouse,
  },
  {
    title: "Kokonaislogistiikka",
    text: "Kuljetus- ja terminaaliratkaisut yrityksen toimitusketjun tarpeisiin.",
    Icon: Route,
  },
];

const roi = [
  "Vähemmän statuspuheluita",
  "Nopeampi poikkeamien selvitys",
  "Parempi kuljetustiedon todennettavuus",
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-[var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D94125]">
      {children}
    </p>
  );
}

export function HomeSections() {
  return (
    <>
      <section className="border-b border-[#DDE3EA] bg-white py-20 md:py-28" aria-labelledby="problem-title">
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1280px] md:w-[calc(100%-64px)]">
          <div className="max-w-[900px]">
            <Label>Toimialan kitka</Label>
            <h2
              id="problem-title"
              className="mt-4 max-w-[12ch] font-[var(--font-display)] text-[clamp(40px,5.4vw,72px)] font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0F2C59]"
            >
              Ongelma alkaa, kun joku kysyy mitä tapahtui.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#657184]">
              Viivästys, lämpötilapoikkeama, reklamaatio tai auditointi muuttaa kuljetuksen nopeasti kysymykseksi: missä oltiin, mitä lämpötilalle tapahtui ja milloin.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-[#DDE3EA] md:grid-cols-3">
            {painPoints.map(({ title, text, Icon }, index) => (
              <article
                key={title}
                className="min-h-[240px] border-b border-r border-[#DDE3EA] p-6 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center border border-[#DDE3EA] bg-[#F7F9FC] text-[#0F2C59]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <span className="font-[var(--font-mono)] text-[10px] font-semibold text-[#A6B1BF]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-10 font-[var(--font-display)] text-2xl font-extrabold tracking-[-0.03em] text-[#0F2C59]">
                  {title}
                </h3>
                <p className="mt-3 max-w-[34ch] text-sm leading-6 text-[#657184]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="prosessi" className="border-b border-[#DDE3EA] bg-[#F7F9FC] py-20 md:py-28">
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1280px] md:w-[calc(100%-64px)]">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Label>Toimintamalli</Label>
              <h2 className="mt-4 font-[var(--font-display)] text-[clamp(40px,4.8vw,66px)] font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0F2C59]">
                Hallitse. Seuraa. Todista.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-[#657184] md:text-base md:leading-7">
                Ei ylimääräistä teknologiajargonia. Kolme asiaa ratkaisevat: operaatio, näkyvyys ja tieto, johon voidaan palata.
              </p>
            </div>

            <div className="border-l border-t border-[#DDE3EA] bg-white">
              {process.map(({ step, title, text, Icon }) => (
                <article
                  key={step}
                  className="grid gap-5 border-b border-r border-[#DDE3EA] p-6 sm:grid-cols-[76px_1fr_auto] sm:items-center md:p-8"
                >
                  <span className="font-[var(--font-mono)] text-sm font-semibold text-[#D94125]">{step}</span>
                  <div>
                    <h3 className="font-[var(--font-display)] text-2xl font-extrabold tracking-[-0.03em] text-[#0F2C59]">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#657184]">{text}</p>
                  </div>
                  <Icon className="hidden h-6 w-6 text-[#0F2C59] sm:block" strokeWidth={1.6} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="laatu" className="overflow-hidden bg-[#071A36] text-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[.95fr_1.05fr]">
          <div className="flex items-center px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28 xl:px-20">
            <div className="max-w-[650px]">
              <p className="font-[var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FFB7A6]">
                Operatiivinen näkyvyys
              </p>
              <h2 className="mt-4 font-[var(--font-display)] text-[clamp(42px,5vw,70px)] font-extrabold leading-[0.95] tracking-[-0.05em]">
                Oikea lämpötila ei riitä. Tarvitaan myös näyttö.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/62">
                RANTAKAULION nykyinen seuranta yhdistää sijainti- ja lämpötilatiedon operatiiviseen kuljetusprosessiin. Kun jotain pitää selvittää, faktat ovat lähtökohta.
              </p>

              <div className="mt-9 grid gap-px bg-white/10 sm:grid-cols-2">
                <div className="bg-[#0A2144] p-5">
                  <MapPin className="h-5 w-5 text-white/75" strokeWidth={1.6} />
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.1em] text-white/40">Sijainti</p>
                  <p className="mt-1 font-[var(--font-mono)] text-sm font-semibold uppercase">Reaaliaikainen</p>
                </div>
                <div className="bg-[#0A2144] p-5">
                  <Thermometer className="h-5 w-5 text-white/75" strokeWidth={1.6} />
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.1em] text-white/40">Lämpötila</p>
                  <p className="mt-1 font-[var(--font-mono)] text-sm font-semibold uppercase">Reaaliaikainen</p>
                </div>
                <div className="bg-[#0A2144] p-5">
                  <Radio className="h-5 w-5 text-white/75" strokeWidth={1.6} />
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.1em] text-white/40">Järjestelmä</p>
                  <p className="mt-1 font-[var(--font-mono)] text-sm font-semibold uppercase">FleetLogis</p>
                </div>
                <div className="bg-[#0A2144] p-5">
                  <Clock3 className="h-5 w-5 text-white/75" strokeWidth={1.6} />
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.1em] text-white/40">Ajonjärjestely</p>
                  <p className="mt-1 font-[var(--font-mono)] text-sm font-semibold uppercase">24/7</p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {roi.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/72">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FFB7A6]" strokeWidth={1.8} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] border-t border-white/10 lg:min-h-[760px] lg:border-l lg:border-t-0">
            <img
              src="/images/fleet-lineup.webp"
              alt="Juha Rantakaulio Oy:n lämpötilahallittua kuljetuskalustoa"
              width="760"
              height="428"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A36] via-[#071A36]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 border border-white/20 bg-[#071A36]/90 p-5 backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-8">
              <p className="font-[var(--font-mono)] text-[9px] font-semibold uppercase tracking-[0.14em] text-white/45">
                Proof stack
              </p>
              <div className="mt-4 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10">
                <div className="py-4 pr-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/35">Kalusto</p>
                  <p className="mt-1 font-[var(--font-mono)] text-sm font-semibold">ATP</p>
                </div>
                <div className="px-4 py-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/35">Seuranta</p>
                  <p className="mt-1 font-[var(--font-mono)] text-sm font-semibold">LIVE</p>
                </div>
                <div className="py-4 pl-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/35">Alue</p>
                  <p className="mt-1 font-[var(--font-mono)] text-sm font-semibold">SUOMI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="palvelut" className="border-b border-[#DDE3EA] bg-white py-20 md:py-28">
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1280px] md:w-[calc(100%-64px)]">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <Label>Palvelut</Label>
              <h2 className="mt-4 font-[var(--font-display)] text-[clamp(40px,4.8vw,64px)] font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0F2C59]">
                Kylmäketju ilman ylimääräistä kitkaa.
              </h2>
            </div>
            <p className="max-w-xl self-end text-sm leading-6 text-[#657184] md:text-base md:leading-7">
              Oikea kuljetusratkaisu, hallittu lämpötila ja selkeä vastuu koko ketjun ajan.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-[#DDE3EA] md:grid-cols-2">
            {services.map(({ title, text, Icon }) => (
              <article
                key={title}
                className="group min-h-[250px] border-b border-r border-[#DDE3EA] p-6 transition-colors hover:bg-[#F7F9FC] md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center border border-[#DDE3EA] text-[#0F2C59]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <ArrowRight className="h-5 w-5 text-[#B5C0CC] transition-transform group-hover:translate-x-1 group-hover:text-[#D94125]" strokeWidth={1.6} />
                </div>
                <h3 className="mt-10 max-w-[18ch] font-[var(--font-display)] text-2xl font-extrabold tracking-[-0.03em] text-[#0F2C59]">
                  {title}
                </h3>
                <p className="mt-3 max-w-[48ch] text-sm leading-6 text-[#657184]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="meista" className="border-b border-[#DDE3EA] bg-[#F7F9FC] py-20 md:py-28">
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1280px] gap-10 md:w-[calc(100%-64px)] lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <figure className="m-0 overflow-hidden border border-[#DDE3EA] bg-white">
            <picture>
              <source srcSet="/images/rantakaulio-hero.avif" type="image/avif" />
              <source srcSet="/images/rantakaulio-hero.webp" type="image/webp" />
              <img
                src="/images/rantakaulio-hero.webp"
                alt="Juha Rantakaulio Oy:n kuljetuskalustoa"
                width="760"
                height="428"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </picture>
          </figure>

          <div>
            <Label>Kokemus</Label>
            <h2 className="mt-4 font-[var(--font-display)] text-[clamp(40px,4.8vw,66px)] font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0F2C59]">
              Kokemus kuljettaa. Data todistaa.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#657184]">
              RANTAKAULION kuljetustoiminnan juuret ulottuvat vuoteen 1984. Kalusto, kapasiteetti ja järjestelmät ovat kehittyneet — vastuu sovitusta kuljetuksesta ei.
            </p>

            <div className="mt-8 grid grid-cols-3 border-l border-t border-[#DDE3EA] bg-white">
              <div className="border-b border-r border-[#DDE3EA] p-4 sm:p-5">
                <p className="font-[var(--font-display)] text-xl font-extrabold text-[#0F2C59]">~40 v</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[#7A8796]">Kokemusta</p>
              </div>
              <div className="border-b border-r border-[#DDE3EA] p-4 sm:p-5">
                <p className="font-[var(--font-display)] text-xl font-extrabold text-[#0F2C59]">ATP</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[#7A8796]">Kalusto</p>
              </div>
              <div className="border-b border-r border-[#DDE3EA] p-4 sm:p-5">
                <p className="font-[var(--font-display)] text-xl font-extrabold text-[#0F2C59]">Suomi</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[#7A8796]">Toimitusalue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="yhteystiedot" className="bg-white py-20 md:py-28">
        <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1280px] gap-10 md:w-[calc(100%-64px)] lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <Label>Kuljetustarjous</Label>
            <h2 className="mt-4 max-w-[10ch] font-[var(--font-display)] text-[clamp(42px,5vw,70px)] font-extrabold leading-[0.95] tracking-[-0.05em] text-[#0F2C59]">
              Tarvitsetko kuljetuksen, jonka onnistumista ei tarvitse arvailla?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#657184]">
              Kerro reitti, ajankohta ja lämpötilavaatimus. Saat arvion tarpeeseesi sopivasta kuljetusratkaisusta.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href="tel:+358503662215"
                className="flex items-center justify-between gap-4 border border-[#DDE3EA] px-5 py-4 text-[#0F2C59]"
              >
                <span className="flex items-center gap-3">
                  <PhoneCall className="h-5 w-5" strokeWidth={1.7} />
                  <span>
                    <span className="block text-[9px] font-bold uppercase tracking-[0.1em] text-[#7A8796]">Ajonjärjestely 24/7</span>
                    <strong className="mt-1 block text-base">050 366 2215</strong>
                  </span>
                </span>
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </a>
              <a
                href="mailto:myynti@rantakaulio.fi"
                className="flex items-center justify-between gap-4 border border-[#DDE3EA] px-5 py-4 text-[#0F2C59]"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-5 w-5" strokeWidth={1.7} />
                  <span>
                    <span className="block text-[9px] font-bold uppercase tracking-[0.1em] text-[#7A8796]">Myynti</span>
                    <strong className="mt-1 block text-base">myynti@rantakaulio.fi</strong>
                  </span>
                </span>
                <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
              </a>
            </div>
          </div>

          <form
            className="border border-[#DDE3EA] bg-[#F7F9FC] p-5 sm:p-7 md:p-8"
            action="mailto:myynti@rantakaulio.fi"
            method="post"
            encType="text/plain"
          >
            <div className="mb-7 flex items-center justify-between gap-4 border-b border-[#DDE3EA] pb-5">
              <div>
                <p className="font-[var(--font-mono)] text-[9px] font-semibold uppercase tracking-[0.14em] text-[#D94125]">RFQ / Kuljetuspyyntö</p>
                <p className="mt-1 text-sm font-semibold text-[#0F2C59]">Minimitiedot arvioon</p>
              </div>
              <span className="font-[var(--font-mono)] text-[9px] font-semibold uppercase text-[#8D99A8]">Ei sitoumusta</span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0F2C59]">
                Yritys *
                <input
                  name="Yritys"
                  required
                  autoComplete="organization"
                  className="min-h-12 border border-[#C8D1DC] bg-white px-3 text-sm font-normal normal-case text-[#172033] outline-none transition-colors focus:border-[#0F2C59]"
                />
              </label>
              <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0F2C59]">
                Sähköposti *
                <input
                  type="email"
                  name="Sähköposti"
                  required
                  autoComplete="email"
                  className="min-h-12 border border-[#C8D1DC] bg-white px-3 text-sm font-normal normal-case text-[#172033] outline-none transition-colors focus:border-[#0F2C59]"
                />
              </label>
              <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0F2C59]">
                Reitti
                <input
                  name="Reitti"
                  placeholder="Kouvola → Helsinki"
                  className="min-h-12 border border-[#C8D1DC] bg-white px-3 text-sm font-normal normal-case text-[#172033] outline-none transition-colors focus:border-[#0F2C59]"
                />
              </label>
              <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0F2C59]">
                Lämpötilavaatimus
                <select
                  name="Lämpötilavaatimus"
                  defaultValue=""
                  className="min-h-12 border border-[#C8D1DC] bg-white px-3 text-sm font-normal normal-case text-[#172033] outline-none transition-colors focus:border-[#0F2C59]"
                >
                  <option value="">Valitse</option>
                  <option>Pakaste</option>
                  <option>Tuore</option>
                  <option>Kuivakuorma</option>
                  <option>Muu</option>
                </select>
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0F2C59]">
              Kuljetustarve
              <textarea
                name="Viesti"
                rows={4}
                placeholder="Ajankohta, määrä, erityisvaatimukset..."
                className="border border-[#C8D1DC] bg-white p-3 text-sm font-normal normal-case text-[#172033] outline-none transition-colors focus:border-[#0F2C59]"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 bg-[#D94125] px-6 text-[11px] font-extrabold uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#B7331D]"
            >
              Lähetä kuljetuspyyntö
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>

            <p className="mt-3 text-center text-[10px] leading-4 text-[#7A8796]">
              Lomake avaa sähköpostiohjelman. Tuotantoversioon voidaan kytkeä suora Vercel API -lead flow.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
