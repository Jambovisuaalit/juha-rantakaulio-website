const proof = [
  { icon: "history", value: "Lähes 40 vuotta", label: "Perheyrityksen kokemusta" },
  { icon: "gps", value: "FleetLogis", label: "Sijainti ja lämpötila reaaliajassa" },
  { icon: "atp", value: "ATP-kalusto", label: "Hallittu lämpötila ympäri vuoden" },
  { icon: "phone", value: "24/7", label: "Ajonjärjestely aina tavoitettavissa" },
];

function ProofIcon({ type }: { type: string }) {
  if (type === "history") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7v5l3 2M4.8 6.3A9 9 0 1 1 3 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 5v4h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (type === "gps") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (type === "atp") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.5 2.8 8 7 10 4.2-2 7-5.5 7-10V6Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="m9 12 2 2 4-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.7 3.2 9.4 6.3a1.4 1.4 0 0 1 .2 1.6L8.2 10c1.1 2.3 3 4.2 5.3 5.3l2.2-1.4a1.4 1.4 0 0 1 1.6.2l3.1 2.7a1.4 1.4 0 0 1 .4 1.6c-.7 1.8-2.3 2.9-4.2 2.9C9 21.3 2.7 15 2.7 7.4c0-1.9 1.1-3.5 2.9-4.2a1.4 1.4 0 0 1 1.1 0Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Rantakaulion keskeiset vahvuudet">
      <div className="container proof-grid">
        {proof.map((item) => (
          <article className="proof-item" key={item.value}>
            <span className="proof-icon" aria-hidden="true"><ProofIcon type={item.icon} /></span>
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
