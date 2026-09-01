import { Clock3, History, Radio, ShieldCheck } from "lucide-react";

const items = [
  {
    value: "Lähes 40 vuotta",
    label: "Lämpötilahallittua logistiikkaa",
    Icon: History,
  },
  {
    value: "FleetLogis",
    label: "Sijainti + lämpötila reaaliajassa",
    Icon: Radio,
  },
  {
    value: "ATP",
    label: "Lämpötilakuljetuksiin soveltuva kalusto",
    Icon: ShieldCheck,
  },
  {
    value: "24/7",
    label: "Ajonjärjestely tavoitettavissa",
    Icon: Clock3,
  },
];

export function ProofStrip() {
  return (
    <section id="proof" className="border-b border-[#DDE3EA] bg-white" aria-label="Rantakaulion todisteet">
      <div className="mx-auto grid w-full max-w-[1440px] sm:grid-cols-2 xl:grid-cols-4">
        {items.map(({ value, label, Icon }, index) => (
          <article
            key={value}
            className="flex min-h-[132px] items-center gap-4 border-b border-[#DDE3EA] px-5 py-6 sm:px-8 xl:border-b-0 xl:border-r xl:px-9"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center border border-[#DDE3EA] bg-[#F7F9FC] text-[#0F2C59]">
              <Icon className="h-5 w-5" strokeWidth={1.7} />
            </div>
            <div>
              <p className="font-[var(--font-display)] text-xl font-extrabold tracking-[-0.03em] text-[#0F2C59]">
                {value}
              </p>
              <p className="mt-1 text-xs leading-5 text-[#657184]">{label}</p>
            </div>
            <span className="ml-auto self-start pt-1 font-[var(--font-mono)] text-[9px] font-semibold text-[#A6B1BF]">
              0{index + 1}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
