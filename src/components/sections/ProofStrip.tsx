const proof = [
  { value: "40 VUOTTA", label: "Lämpötilahallittua kokemusta Kouvolasta." },
  { value: "FLEETLOGIS", label: "Reaaliaikainen lämpötilaseuranta ja data." },
  { value: "ATP-LUOKITUS", label: "Elintarvikehyväksytty ja luokiteltu kalusto." },
  { value: "24/7", label: "Suora yhteys päivystävään ajojärjestelyyn." },
];

export function ProofStrip() {
  return (
    <section className="proof-strip master-proof-strip" aria-label="Rantakaulion numeeriset ja tekniset todisteet">
      <div className="container proof-grid">
        {proof.map((item, index) => (
          <article className="proof-item" key={item.value}>
            <span className="master-proof-num">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
