"use client";

import { useEffect, useState } from "react";

type Step = {
  id: string;
  title: string;
  short: string;
  description: string;
  proof: string;
  icon: "pickup" | "monitor" | "terminal" | "delivery";
};

const steps: Step[] = [
  {
    id: "nouto",
    title: "Nouto",
    short: "Lähtö hallitusti",
    description:
      "Kuljetus käynnistyy sovitusta noutopisteestä. Kuorman lämpötilavaatimus huomioidaan kuljetuksen suunnittelussa ja oikean kaluston valinnassa.",
    proof: "ATP-kalusto",
    icon: "pickup",
  },
  {
    id: "valvonta",
    title: "Valvonta",
    short: "Tieto kulkee mukana",
    description:
      "Kuljetuksen sijaintia ja lämpötilaa voidaan seurata FleetLogis-järjestelmällä koko matkan ajan. Seuranta tukee nopeaa reagointia poikkeamiin.",
    proof: "Reaaliaikainen seuranta",
    icon: "monitor",
  },
  {
    id: "terminaali",
    title: "Terminaali",
    short: "Tarvittaessa välietappi",
    description:
      "Kuorma voidaan käsitellä Kouvolan viileäterminaalissa osana toimitusketjua. Tavaran käsittely, lajittelu ja varastointi sovitetaan kuljetustarpeeseen.",
    proof: "Kouvolan viileäterminaali",
    icon: "terminal",
  },
  {
    id: "perilla",
    title: "Perillä",
    short: "Toimitus hallitusti",
    description:
      "Toimitus viedään sovittuun kohteeseen. Kuljetuksen seuranta ja dokumentointi tukevat laadunvarmistusta ja asiakkaan näkyvyyttä.",
    proof: "Dokumentoitu toimitusketju",
    icon: "delivery",
  },
];

function StepIcon({ type }: { type: Step["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  };

  if (type === "pickup") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path {...common} d="M4 10h16v12H4zM20 14h4l4 4v4h-8z" />
        <circle {...common} cx="9" cy="24" r="2.5" />
        <circle {...common} cx="24" cy="24" r="2.5" />
        <path {...common} d="M8 7h8M12 4v6" />
      </svg>
    );
  }

  if (type === "monitor") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path {...common} d="M8 19V8a4 4 0 0 1 8 0v11a6 6 0 1 1-8 0Z" />
        <path {...common} d="M12 11v10" />
        <path {...common} d="M21 9h7M21 15h5M21 21h7" />
      </svg>
    );
  }

  if (type === "terminal") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path {...common} d="m4 13 12-8 12 8v14H4Z" />
        <path {...common} d="M10 27V17h12v10M10 13h12" />
        <path {...common} d="M16 17v10" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path {...common} d="M4 10h16v12H4zM20 14h4l4 4v4h-8z" />
      <circle {...common} cx="9" cy="24" r="2.5" />
      <circle {...common} cx="24" cy="24" r="2.5" />
      <path {...common} d="m23 8 2 2 4-5" />
    </svg>
  );
}

export function ColdChainFlow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches || paused) return;

    const timer = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [paused, activeIndex]);

  const active = steps[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="kylmaketju"
      aria-labelledby="cold-chain-title"
      className="border-y border-[#DDE3EA] bg-white py-16 md:py-24"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="mx-auto w-[calc(100%_-_40px)] max-w-[1280px] md:w-[calc(100%_-_96px)]">
        <div className="mb-9 max-w-3xl md:mb-12">
          <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#D94125]">
            Kylmäketju käytännössä
          </p>
          <h2
            id="cold-chain-title"
            className="font-[var(--font-display-stack)] text-[clamp(38px,5vw,68px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-[#0F2C59]"
          >
            Yksi ketju. Neljä hallittua vaihetta.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#657184] md:text-base">
            Noudosta toimitukseen sama periaate säilyy: oikea lämpötila, näkyvä
            seuranta ja selkeä vastuu koko matkan ajan.
          </p>
        </div>

        <div
          className="grid grid-cols-2 border-l border-t border-[#DDE3EA] md:grid-cols-4"
          role="tablist"
          aria-label="Kylmäketjun vaiheet"
        >
          {steps.map((step, index) => {
            const selected = index === activeIndex;
            const complete = index < activeIndex;

            return (
              <button
                key={step.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="cold-chain-panel"
                id={`cold-chain-tab-${step.id}`}
                onClick={() => setActiveIndex(index)}
                className={[
                  "relative min-h-28 border-b border-r border-[#DDE3EA] px-4 py-5 text-left transition-colors focus-visible:z-10 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-[#F4A18E] md:min-h-36 md:px-6",
                  selected ? "bg-[#0F2C59] text-white" : "bg-white text-[#0F2C59] hover:bg-[#F6F8FB]",
                ].join(" ")}
              >
                <span
                  className={[
                    "mb-4 flex h-9 w-9 items-center justify-center border text-xs font-extrabold",
                    selected
                      ? "border-[#D94125] bg-[#D94125] text-white"
                      : complete
                        ? "border-[#0F2C59] bg-[#0F2C59] text-white"
                        : "border-[#DDE3EA] bg-white text-[#0F2C59]",
                  ].join(" ")}
                >
                  {index + 1}
                </span>
                <strong className="block font-[var(--font-display-stack)] text-xl font-extrabold md:text-2xl">
                  {step.title}
                </strong>
                <span
                  className={[
                    "mt-1 block text-[10px] font-bold uppercase tracking-[0.08em]",
                    selected ? "text-white/65" : "text-[#657184]",
                  ].join(" ")}
                >
                  {step.short}
                </span>
                {selected && (
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-[#D94125]" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>

        <div
          id="cold-chain-panel"
          role="tabpanel"
          aria-labelledby={`cold-chain-tab-${active.id}`}
          className="grid border-x border-b border-[#DDE3EA] bg-[#F6F8FB] lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="flex min-h-72 flex-col justify-between border-b border-[#DDE3EA] p-6 md:p-9 lg:border-b-0 lg:border-r">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center bg-[#0F2C59] text-white">
                  <span className="h-8 w-8">
                    <StepIcon type={active.icon} />
                  </span>
                </span>
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#D94125]">
                    Vaihe {activeIndex + 1} / 4
                  </span>
                  <h3 className="font-[var(--font-display-stack)] text-3xl font-extrabold tracking-[-0.03em] text-[#0F2C59]">
                    {active.title}
                  </h3>
                </div>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-[#4F5B6D] md:text-base">
                {active.description}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-[#DDE3EA] pt-5">
              <span className="h-2 w-2 bg-[#D94125]" aria-hidden="true" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#0F2C59]">
                {active.proof}
              </span>
            </div>
          </div>

          <div className="relative min-h-72 overflow-hidden bg-[#0F2C59] p-6 text-white md:min-h-80 md:p-9">
            <div className="absolute inset-x-6 top-1/2 h-px bg-white/25 md:inset-x-9" aria-hidden="true" />
            <div
              className="absolute left-6 top-1/2 h-px bg-[#D94125] transition-[width] duration-500 md:left-9"
              style={{ width: `calc((100% - 4.5rem) * ${activeIndex / 3})` }}
              aria-hidden="true"
            />

            <div className="relative grid h-full min-h-56 grid-cols-4 items-center gap-2">
              {steps.map((step, index) => {
                const reached = index <= activeIndex;
                const current = index === activeIndex;

                return (
                  <div key={step.id} className="grid justify-items-center gap-3 text-center">
                    <span
                      className={[
                        "grid h-12 w-12 place-items-center border md:h-16 md:w-16",
                        current
                          ? "border-[#D94125] bg-[#D94125] text-white"
                          : reached
                            ? "border-white bg-white text-[#0F2C59]"
                            : "border-white/35 bg-[#0F2C59] text-white/55",
                      ].join(" ")}
                    >
                      <span className="h-7 w-7 md:h-9 md:w-9">
                        <StepIcon type={step.icon} />
                      </span>
                    </span>
                    <span
                      className={[
                        "text-[8px] font-extrabold uppercase tracking-[0.08em] md:text-[10px]",
                        current ? "text-white" : reached ? "text-white/80" : "text-white/45",
                      ].join(" ")}
                    >
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="absolute bottom-4 right-5 text-[8px] font-bold uppercase tracking-[0.12em] text-white/40 md:bottom-6 md:right-7">
              {paused ? "Manuaalinen tila" : "Automaattinen eteneminen"}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex gap-1.5" aria-hidden="true">
            {steps.map((step, index) => (
              <span
                key={step.id}
                className={[
                  "h-1.5 transition-[width,background-color] duration-300",
                  index === activeIndex ? "w-8 bg-[#D94125]" : "w-3 bg-[#DDE3EA]",
                ].join(" ")}
              />
            ))}
          </div>
          <p className="text-right text-[9px] font-bold uppercase tracking-[0.08em] text-[#657184]">
            Klikkaa vaihetta tai seuraa automaattisesti
          </p>
        </div>
      </div>
    </section>
  );
}
