const proof = [
  {
    value: "Lähes 40 vuotta",
    label: "lämpötilahallittua logistiikkaa",
  },
  {
    value: "Fleetlogis",
    label: "reaaliaikainen lämpötilaseuranta",
  },
  {
    value: "ATP",
    label: "luokiteltu kuljetuskalusto",
  },
  {
    value: "24 h",
    label: "ajojärjestely",
  },
];

export function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Rantakaulion keskeiset vahvuudet">
      <div className="container proof-grid">
        {proof.map((item, index) => (
          <article className="proof-item" key={item.value}>
            <span className="proof-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
