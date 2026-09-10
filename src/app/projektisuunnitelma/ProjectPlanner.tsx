"use client";

import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import styles from "./page.module.css";

type TaskStatus = "Ei aloitettu" | "Työn alla" | "Odottaa asiakkaalta" | "Valmis";

type Task = {
  id: string;
  title: string;
  owner: string;
  due: string;
  status: TaskStatus;
  notes: string;
};

type Phase = {
  id: string;
  title: string;
  description: string;
  tasks: Task[];
};

type ProjectState = {
  projectName: string;
  phases: Phase[];
};

const STORAGE_KEY = "rantakaulio-project-plan-v5";
const LEGACY_STORAGE_KEYS = ["rantakaulio-project-plan-v4", "rantakaulio-project-plan-v3", "rantakaulio-project-plan-v2", "rantakaulio-project-plan-v1"];
const statuses: TaskStatus[] = ["Ei aloitettu", "Työn alla", "Odottaa asiakkaalta", "Valmis"];
const criticalTaskIds = new Set(["lock-kickoff", "lock-brand-route", "lock-offer"]);

const initialState: ProjectState = {
  projectName: "Juha Rantakaulio Oy × GhoulHouse Oy",
  phases: [
    {
      id: "lock",
      title: "Lukitus",
      description: "Kriittinen polku: Reitti A on hyväksytty 10.9.2026; jäljellä ovat tarjouksen hyväksyntä ja aloituspalaveri ennen tehokasta etenemistä muihin vaiheisiin.",
      tasks: [
        {
          id: "lock-kickoff",
          title: "Aloituspalaveri, vastuut ja materiaalioikeudet",
          owner: "GhoulHouse + Juha Rantakaulio Oy",
          due: "",
          status: "Ei aloitettu",
          notes: "Lukitaan omistajat, päätöksentekijät, palautekanava ja hyväksyntärytmi.",
        },
        {
          id: "lock-brand-route",
          title: "Brändin strategisen suunnan Reitti A/B lukitus",
          owner: "Juha Rantakaulio Oy + GhoulHouse",
          due: "2026-09-10",
          status: "Valmis",
          notes: "A/B-brändipäätös ratkaistu 10.9.2026: Reitti A – Konventio-strategia valittu. Canonical päätös: Notion ‘RANTAKAULIO – Brändipaketti ja tuotantomateriaalit’, kohta 8.",
        },
        {
          id: "lock-offer",
          title: "Tarjouksen hyväksyntä",
          owner: "Juha Rantakaulio Oy",
          due: "2026-09-17",
          status: "Odottaa asiakkaalta",
          notes: "Canonical tarjous: /projekti ja lopullinen 5 370 € + ALV PDF.",
        },
      ],
    },
    {
      id: "brand",
      title: "Brändi",
      description: "Visuaalinen identiteetti ja tuotantoon vietävät brändimateriaalit hyväksytyn Reitti A – Konventio-strategian mukaisesti.",
      tasks: [
        {
          id: "brand-livery",
          title: "Ajoneuvoteippauksen konsepti",
          owner: "GhoulHouse",
          due: "",
          status: "Ei aloitettu",
          notes: "Fyysinen teippaus ei sisälly tarjoukseen.",
        },
        {
          id: "brand-pack",
          title: "Logo Production Pack + brändiohjeistus",
          owner: "GhoulHouse",
          due: "",
          status: "Ei aloitettu",
          notes: "Tuotantoon soveltuvat masterit ja exportit.",
        },
        {
          id: "brand-lock",
          title: "Logo- ja brändisuunnan final lock",
          owner: "GhoulHouse",
          due: "",
          status: "Ei aloitettu",
          notes: "Varmistetaan hyväksytyn Reitti A -suunnan johdonmukaisuus ennen exportteja.",
        },
        {
          id: "brand-workwear",
          title: "Työvaatteiden mockupit",
          owner: "GhoulHouse",
          due: "",
          status: "Ei aloitettu",
          notes: "Fyysiset vaate- ja painatuskulut eivät sisälly tarjoukseen.",
        },
      ],
    },
    {
      id: "website",
      title: "Website",
      description: "Rantakaulion uuden sivuston sisältö, design, toteutus, QA ja julkaisuvalmius.",
      tasks: [
        {
          id: "web-qa",
          title: "Responsiivinen QA + toiminnalliset testit",
          owner: "GhoulHouse",
          due: "",
          status: "Ei aloitettu",
          notes: "CTA:t, lomakkeet, linkit, saavutettavuuden perustaso ja selaintarkistus.",
        },
        {
          id: "web-scope",
          title: "Sivurakenteen ja sisältötekstien lukitus",
          owner: "GhoulHouse + Juha Rantakaulio Oy",
          due: "",
          status: "Ei aloitettu",
          notes: "Varmistetaan palvelut, proof-pisteet, henkilötiedot ja CTA-polut.",
        },
        {
          id: "web-launch",
          title: "Tuotantoon viennin hyväksyntä",
          owner: "Juha Rantakaulio Oy + GhoulHouse",
          due: "",
          status: "Ei aloitettu",
          notes: "Domain-kytkentä ja indeksointi tehdään vasta erillisellä GO-päätöksellä.",
        },
        {
          id: "web-design",
          title: "Visuaalinen viimeistely",
          owner: "GhoulHouse",
          due: "",
          status: "Ei aloitettu",
          notes: "Brändisuunnan mukainen desktop- ja mobile-pass.",
        },
      ],
    },
    {
      id: "social",
      title: "Social",
      description: "90 päivän LinkedIn + Facebook -käynnistys kolmessa 30 päivän jaksossa.",
      tasks: [
        {
          id: "social-plan",
          title: "90 päivän sisältölinjan lukitus",
          owner: "GhoulHouse + Juha Rantakaulio Oy",
          due: "",
          status: "Ei aloitettu",
          notes: "12 sisältöä / 30 päivää, LinkedIn + Facebook.",
        },
        {
          id: "social-1",
          title: "Jakso 1 — 12 sisältöä",
          owner: "GhoulHouse",
          due: "",
          status: "Ei aloitettu",
          notes: "Ensimmäinen 30 päivän tuotantojakso.",
        },
        {
          id: "social-2",
          title: "Jakso 2 — 12 sisältöä",
          owner: "GhoulHouse",
          due: "",
          status: "Ei aloitettu",
          notes: "Toinen 30 päivän tuotantojakso.",
        },
        {
          id: "social-3",
          title: "Jakso 3 — 12 sisältöä",
          owner: "GhoulHouse",
          due: "",
          status: "Ei aloitettu",
          notes: "Kolmas 30 päivän tuotantojakso.",
        },
      ],
    },
    {
      id: "handoff",
      title: "Handoff",
      description: "Lopullinen luovutus, käyttöaineistot ja projektin päättäminen.",
      tasks: [
        {
          id: "handoff-social",
          title: "90 päivän yhteenveto ja jatkopäätös",
          owner: "GhoulHouse + Juha Rantakaulio Oy",
          due: "",
          status: "Ei aloitettu",
          notes: "Käydään läpi toimitukset, havainnot ja mahdollinen jatko.",
        },
        {
          id: "handoff-brand",
          title: "Brändin lopulliset masterit ja exportit",
          owner: "GhoulHouse",
          due: "",
          status: "Työn alla",
          notes: "Handoff-kansiorakenne ja READY/BLOCKED-manifesti valmisteltu 10.9.2026. Reitti A – Konventio-strategia on hyväksytty eikä enää blokkaa handoffia. FINAL-v1 odottaa vielä markkinointinimen/descriptorin vahvistusta, standalone R/chevron -vektorimasteria sekä tarvittavia tuotanto- ja digital-exportteja. Supplier-kohtaiset spot-värit validoidaan valmistajan kanssa; niitä ei keksitä.",
        },
        {
          id: "handoff-web",
          title: "Verkkosivuston handoff",
          owner: "GhoulHouse",
          due: "",
          status: "Ei aloitettu",
          notes: "Lukitaan julkaistu versio, käyttöoikeudet ja ylläpitovastuut.",
        },
      ],
    },
  ],
};

function makeId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function isProjectState(value: unknown): value is ProjectState {
  if (!value || typeof value !== "object") return false;
  const candidate = value as ProjectState;
  return typeof candidate.projectName === "string" && Array.isArray(candidate.phases);
}

export function ProjectPlanner() {
  const [data, setData] = useState<ProjectState>(initialState);
  const [ready, setReady] = useState(false);
  const [statusFilter, setStatusFilter] = useState("Kaikki");
  const [ownerFilter, setOwnerFilter] = useState("Kaikki");
  const [message, setMessage] = useState("Tallennetaan vain tähän selaimeen.");
  const importRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (isProjectState(parsed)) setData(parsed);
      } else {
        const hasLegacyVersion = LEGACY_STORAGE_KEYS.some((key) => window.localStorage.getItem(key));
        if (hasLegacyVersion) {
          setMessage("Canonical 18-tehtävän projektiversio päivitettiin hyväksyttyyn Reitti A -päätökseen. Aiemmat selainversiot säilyvät erillisinä varmuuskopioina.");
        }
      }
    } catch {
      setMessage("Tallennetun version lukeminen epäonnistui. Canonical 18-tehtävän projektiversio avattiin.");
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setMessage(`Tallennettu selaimeen ${new Date().toLocaleTimeString("fi-FI", { hour: "2-digit", minute: "2-digit" })}`);
    } catch {
      setMessage("Tallennus selaimeen epäonnistui. Vie varmuuskopio JSON-tiedostona.");
    }
  }, [data, ready]);

  const allTasks = useMemo(() => data.phases.flatMap((phase) => phase.tasks), [data]);
  const criticalTasks = allTasks.filter((task) => criticalTaskIds.has(task.id));
  const criticalOpen = criticalTasks.filter((task) => task.status !== "Valmis").length;
  const completed = allTasks.filter((task) => task.status === "Valmis").length;
  const progress = allTasks.length ? Math.round((completed / allTasks.length) * 100) : 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const overdue = allTasks.filter((task) => {
    if (!task.due || task.status === "Valmis") return false;
    const [year, month, day] = task.due.split("-").map(Number);
    const due = new Date(year, month - 1, day);
    return due < today;
  }).length;
  const waiting = allTasks.filter((task) => task.status === "Odottaa asiakkaalta").length;

  const owners = useMemo(() => {
    return Array.from(new Set(allTasks.map((task) => task.owner.trim()).filter(Boolean))).sort((a, b) => a.localeCompare(b, "fi"));
  }, [allTasks]);

  function updatePhase(phaseId: string, patch: Partial<Phase>) {
    setData((current) => ({
      ...current,
      phases: current.phases.map((phase) => (phase.id === phaseId ? { ...phase, ...patch } : phase)),
    }));
  }

  function updateTask(phaseId: string, taskId: string, patch: Partial<Task>) {
    setData((current) => ({
      ...current,
      phases: current.phases.map((phase) =>
        phase.id === phaseId
          ? {
              ...phase,
              tasks: phase.tasks.map((task) => (task.id === taskId ? { ...task, ...patch } : task)),
            }
          : phase,
      ),
    }));
  }

  function addTask(phaseId: string) {
    const task: Task = {
      id: makeId("task"),
      title: "Uusi tehtävä",
      owner: "GhoulHouse",
      due: "",
      status: "Ei aloitettu",
      notes: "",
    };
    setData((current) => ({
      ...current,
      phases: current.phases.map((phase) =>
        phase.id === phaseId ? { ...phase, tasks: [...phase.tasks, task] } : phase,
      ),
    }));
  }

  function deleteTask(phaseId: string, taskId: string) {
    if (!window.confirm("Poistetaanko tehtävä projektisuunnitelmasta?")) return;
    setData((current) => ({
      ...current,
      phases: current.phases.map((phase) =>
        phase.id === phaseId ? { ...phase, tasks: phase.tasks.filter((task) => task.id !== taskId) } : phase,
      ),
    }));
  }

  function addPhase() {
    setData((current) => ({
      ...current,
      phases: [
        ...current.phases,
        {
          id: makeId("phase"),
          title: "Uusi vaihe",
          description: "Kuvaa vaiheen tavoite.",
          tasks: [],
        },
      ],
    }));
  }

  function deletePhase(phaseId: string) {
    if (!window.confirm("Poistetaanko koko vaihe ja sen tehtävät?")) return;
    setData((current) => ({ ...current, phases: current.phases.filter((phase) => phase.id !== phaseId) }));
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `rantakaulio-projektisuunnitelma-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  function importJson(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed: unknown = JSON.parse(String(reader.result));
        if (!isProjectState(parsed)) throw new Error("invalid");
        setData(parsed);
        setMessage("JSON-varmuuskopio tuotu onnistuneesti.");
      } catch {
        setMessage("Tiedosto ei ole kelvollinen projektisuunnitelman JSON-varmuuskopio.");
      }
      if (importRef.current) importRef.current.value = "";
    };
    reader.readAsText(file);
  }

  function resetPlan() {
    if (!window.confirm("Palautetaanko canonical 18-tehtävän projektisuunnitelma? Nykyiset muutokset korvataan.")) return;
    setData(initialState);
    setStatusFilter("Kaikki");
    setOwnerFilter("Kaikki");
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.topline}>
            <span>Yksityinen projektityötila</span>
            <span>Juha Rantakaulio Oy × GhoulHouse Oy</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.kicker}>Projektisuunnitelma</p>
              <input
                className={styles.projectName}
                value={data.projectName}
                onChange={(event) => setData((current) => ({ ...current, projectName: event.target.value }))}
                aria-label="Projektin nimi"
              />
              <p className={styles.lead}>18 tehtävän canonical projektisuunnitelma. Reitti A – Konventio-strategia on hyväksytty 10.9.2026; Lukitus-vaiheessa ovat vielä avoinna tarjouksen hyväksyntä ja aloituspalaveri.</p>
            </div>
            <div className={styles.progressPanel}>
              <div className={styles.progressValue}>{progress}%</div>
              <div className={styles.progressLabel}>kokonaiseteneminen</div>
              <div className={styles.progressTrack} aria-label={`Projektin eteneminen ${progress} %`}>
                <span style={{ width: `${progress}%` }} />
              </div>
              <small>{completed} / {allTasks.length} tehtävää valmiina</small>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.dashboard}>
        <div className={styles.wrap}>
          <div style={{ marginBottom: 18, border: "1px solid #d94125", background: "#fff8f6", padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "baseline", marginBottom: 12 }}>
              <strong style={{ color: "#0f2c59" }}>Kriittinen polku · Lukitus</strong>
              <span style={{ color: "#d94125", fontSize: 12, fontWeight: 700 }}>{criticalOpen} avointa lukitustehtävää</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
              {criticalTasks.map((task) => (
                <div key={task.id} style={{ background: "#ffffff", border: "1px solid #ead9d4", padding: 12 }}>
                  <strong style={{ display: "block", fontSize: 14, marginBottom: 5 }}>{task.title}</strong>
                  <span style={{ display: "block", color: "#64707d", fontSize: 12 }}>{task.status}{task.due ? ` · ${task.due}` : ""}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.metrics}>
            <div><strong>{allTasks.length}</strong><span>Tehtäviä</span></div>
            <div><strong>{completed}</strong><span>Valmiina</span></div>
            <div><strong>{waiting}</strong><span>Odottaa asiakkaalta</span></div>
            <div><strong>{overdue}</strong><span>Myöhässä</span></div>
          </div>

          <div className={styles.toolbar}>
            <div className={styles.filters}>
              <label>
                Status
                <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                  <option>Kaikki</option>
                  {statuses.map((status) => <option key={status}>{status}</option>)}
                </select>
              </label>
              <label>
                Vastuu
                <select value={ownerFilter} onChange={(event) => setOwnerFilter(event.target.value)}>
                  <option>Kaikki</option>
                  {owners.map((owner) => <option key={owner}>{owner}</option>)}
                </select>
              </label>
            </div>
            <div className={styles.actions}>
              <button type="button" onClick={addPhase}>+ Vaihe</button>
              <button type="button" onClick={exportJson}>Vie JSON</button>
              <button type="button" onClick={() => importRef.current?.click()}>Tuo JSON</button>
              <button type="button" className={styles.secondaryButton} onClick={resetPlan}>Palauta</button>
              <input ref={importRef} className={styles.hiddenInput} type="file" accept="application/json,.json" onChange={importJson} />
            </div>
          </div>
          <p className={styles.saveMessage} aria-live="polite">{message}</p>
        </div>
      </section>

      <section className={styles.planSection}>
        <div className={styles.wrap}>
          <div className={styles.phaseRail} aria-label="Projektin vaiheet">
            {data.phases.map((phase, index) => {
              const phaseCompleted = phase.tasks.filter((task) => task.status === "Valmis").length;
              const phaseProgress = phase.tasks.length ? Math.round((phaseCompleted / phase.tasks.length) * 100) : 0;
              return (
                <a href={`#${phase.id}`} key={phase.id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{phase.title || "Nimetön vaihe"}</strong>
                  <small>{phaseProgress}%</small>
                </a>
              );
            })}
          </div>

          <div className={styles.phaseList}>
            {data.phases.map((phase, phaseIndex) => {
              const phaseCompleted = phase.tasks.filter((task) => task.status === "Valmis").length;
              const phaseProgress = phase.tasks.length ? Math.round((phaseCompleted / phase.tasks.length) * 100) : 0;
              const visibleTasks = phase.tasks.filter((task) =>
                (statusFilter === "Kaikki" || task.status === statusFilter) &&
                (ownerFilter === "Kaikki" || task.owner === ownerFilter),
              );

              return (
                <article className={styles.phase} id={phase.id} key={phase.id}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>{String(phaseIndex + 1).padStart(2, "0")}</div>
                    <div className={styles.phaseHeading}>
                      <input
                        value={phase.title}
                        onChange={(event) => updatePhase(phase.id, { title: event.target.value })}
                        aria-label={`Vaiheen ${phaseIndex + 1} nimi`}
                      />
                      <textarea
                        value={phase.description}
                        onChange={(event) => updatePhase(phase.id, { description: event.target.value })}
                        aria-label={`${phase.title} kuvaus`}
                        rows={2}
                      />
                    </div>
                    <div className={styles.phaseProgress}>
                      <strong>{phaseProgress}%</strong>
                      <span>{phaseCompleted}/{phase.tasks.length}</span>
                    </div>
                    <button type="button" className={styles.dangerButton} onClick={() => deletePhase(phase.id)} aria-label={`Poista vaihe ${phase.title}`}>Poista vaihe</button>
                  </div>

                  <div className={styles.taskTable}>
                    <div className={styles.taskHead} aria-hidden="true">
                      <span>Tehtävä</span><span>Vastuu</span><span>Deadline</span><span>Status</span><span>Muistiinpanot</span><span />
                    </div>
                    {visibleTasks.length === 0 ? (
                      <div className={styles.emptyState}>Ei tehtäviä valituilla suodattimilla.</div>
                    ) : visibleTasks.map((task) => (
                      <div className={`${styles.taskRow} ${task.status === "Valmis" ? styles.doneRow : ""}`} key={task.id}>
                        <label>
                          <span className={styles.mobileLabel}>Tehtävä</span>
                          <input value={task.title} onChange={(event) => updateTask(phase.id, task.id, { title: event.target.value })} />
                        </label>
                        <label>
                          <span className={styles.mobileLabel}>Vastuu</span>
                          <input value={task.owner} onChange={(event) => updateTask(phase.id, task.id, { owner: event.target.value })} />
                        </label>
                        <label>
                          <span className={styles.mobileLabel}>Deadline</span>
                          <input type="date" value={task.due} onChange={(event) => updateTask(phase.id, task.id, { due: event.target.value })} />
                        </label>
                        <label>
                          <span className={styles.mobileLabel}>Status</span>
                          <select value={task.status} onChange={(event) => updateTask(phase.id, task.id, { status: event.target.value as TaskStatus })}>
                            {statuses.map((status) => <option key={status}>{status}</option>)}
                          </select>
                        </label>
                        <label>
                          <span className={styles.mobileLabel}>Muistiinpanot</span>
                          <textarea rows={2} value={task.notes} onChange={(event) => updateTask(phase.id, task.id, { notes: event.target.value })} />
                        </label>
                        <button type="button" className={styles.iconButton} onClick={() => deleteTask(phase.id, task.id)} aria-label={`Poista tehtävä ${task.title}`}>×</button>
                      </div>
                    ))}
                  </div>

                  <button type="button" className={styles.addTaskButton} onClick={() => addTask(phase.id)}>+ Lisää tehtävä vaiheeseen</button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <span>Yksityinen työtila · noindex / nofollow · Basic Auth</span>
          <span>Selainkohtainen tallennus + JSON-varmuuskopiointi</span>
        </div>
      </footer>
    </main>
  );
}
