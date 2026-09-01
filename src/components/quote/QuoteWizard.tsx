'use client';

import { useMemo, useState } from "react";
import type { FormEvent } from "react";

type Temperature = "+2..+6" | "-18" | "ambient" | "multi";

type QuoteRequest = {
  origin: string;
  destination: string;
  tempRange: Temperature;
  volume: string;
  company: string;
  contactName: string;
  email: string;
  phone: string;
};

const temperatureOptions: Array<{
  value: Temperature;
  label: string;
  meta: string;
}> = [
  { value: "+2..+6", label: "Viileä", meta: "+2 … +6 °C" },
  { value: "-18", label: "Pakaste", meta: "-18 °C" },
  { value: "ambient", label: "Kuiva", meta: "Huonelämpö" },
  { value: "multi", label: "Moni", meta: "Monilämpötila" },
];

const initialFormData: QuoteRequest = {
  origin: "",
  destination: "",
  tempRange: "+2..+6",
  volume: "",
  company: "",
  contactName: "",
  email: "",
  phone: "",
};

export function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<QuoteRequest>(initialFormData);

  const canContinueStep1 =
    formData.origin.trim().length > 1 && formData.destination.trim().length > 1;
  const canContinueStep2 = formData.volume.trim().length > 1;
  const canSubmit =
    formData.company.trim().length > 1 &&
    formData.contactName.trim().length > 1 &&
    formData.email.includes("@") &&
    formData.phone.trim().length > 5;

  const routeLabel = useMemo(() => {
    const origin = formData.origin.trim() || "NOUTO";
    const destination = formData.destination.trim() || "TOIMITUS";
    return `${origin.toUpperCase()} → ${destination.toUpperCase()}`;
  }, [formData.origin, formData.destination]);

  const tempLabel =
    temperatureOptions.find((option) => option.value === formData.tempRange)?.meta ??
    formData.tempRange;

  const reset = () => {
    setFormData(initialFormData);
    setSubmitted(false);
    setStep(1);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;

    // Preview only: no network request, backend, CRM, storage or email integration.
    console.info("Rantakaulio route request preview:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="route-request-shell route-request-success" aria-live="polite">
        <div className="route-request-success-mark" aria-hidden="true">✓</div>
        <p className="route-request-kicker">REQUEST / RECEIVED</p>
        <h1>Tarjouspyyntö vastaanotettu.</h1>
        <p className="route-request-success-lead">
          Preview-tilassa pyyntöä ei lähetetty eikä tallennettu. Alla näkyy käyttöliittymän
          muodostama kuljetuksen yhteenveto.
        </p>

        <div className="route-request-receipt">
          <div>
            <span>REITTI</span>
            <strong>{routeLabel}</strong>
          </div>
          <div>
            <span>LÄMPÖTILA</span>
            <strong>{tempLabel}</strong>
          </div>
          <div>
            <span>VOLYYMI</span>
            <strong>{formData.volume}</strong>
          </div>
          <div>
            <span>STATUS</span>
            <strong>PREVIEW / EI LÄHETETTY</strong>
          </div>
        </div>

        <div className="route-request-success-actions">
          <button className="button button-primary" type="button" onClick={reset}>
            Tee uusi pyyntö <span aria-hidden="true">→</span>
          </button>
          <a className="route-request-call" href="tel:+358503662215">
            <span>Ajonjärjestely 24/7</span>
            <strong>050 366 2215</strong>
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="route-request-shell" aria-labelledby="route-request-title">
      <div className="route-request-intro">
        <p className="route-request-kicker">TODENNETTAVA KYLMÄKETJU / REITTIKYSELY</p>
        <h1 id="route-request-title">Määritä kuljetus.</h1>
        <p>
          Anna reitti, lämpötilavaatimus ja kuorman perustiedot. Tämä on käyttöliittymän
          preview-versio — tietoja ei lähetetä, tallenneta tai siirretä CRM-järjestelmään.
        </p>
      </div>

      <div className="route-request-layout">
        <aside className="route-request-summary" aria-label="Kuljetuksen yhteenveto">
          <div className="route-request-summary-head">
            <span>JR / ROUTE REQUEST 01</span>
            <span>{String(step).padStart(2, "0")} / 03</span>
          </div>

          <div className="route-request-route">
            <span className="route-request-route-label">REITTI</span>
            <strong>{routeLabel}</strong>
            <div className="route-request-line" aria-hidden="true">
              <span />
              <i />
              <span />
            </div>
          </div>

          <dl className="route-request-spec">
            <div>
              <dt>TEMP</dt>
              <dd>{tempLabel}</dd>
            </div>
            <div>
              <dt>VOLUME</dt>
              <dd>{formData.volume || "—"}</dd>
            </div>
            <div>
              <dt>STATUS</dt>
              <dd>PREVIEW</dd>
            </div>
          </dl>

          <div className="route-request-chain" aria-label="Kylmäketjun vaiheet">
            {["NOUTO", "VALVONTA", "TERMINAALI", "PERILLÄ"].map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </aside>

        <form className="route-request-form" onSubmit={handleSubmit} noValidate>
          <div className="route-request-progress" aria-label="Lomakkeen eteneminen">
            {[1, 2, 3].map((item) => (
              <span
                key={item}
                className={item <= step ? "is-active" : ""}
                aria-hidden="true"
              />
            ))}
          </div>

          {step === 1 && (
            <fieldset className="route-request-step">
              <legend>
                <span>01 / REITTI</span>
                Nouto ja toimitus
              </legend>

              <label>
                <span>Lähtöpaikka / kunta tai postinumero</span>
                <input
                  type="text"
                  placeholder="Esim. Kouvola tai 45100"
                  value={formData.origin}
                  onChange={(event) =>
                    setFormData({ ...formData, origin: event.target.value })
                  }
                  autoComplete="address-level2"
                  required
                />
              </label>

              <label>
                <span>Määränpää / kunta tai postinumero</span>
                <input
                  type="text"
                  placeholder="Esim. Helsinki tai 00100"
                  value={formData.destination}
                  onChange={(event) =>
                    setFormData({ ...formData, destination: event.target.value })
                  }
                  autoComplete="address-level2"
                  required
                />
              </label>

              <div className="route-request-actions route-request-actions-single">
                <button
                  className="button button-primary"
                  type="button"
                  disabled={!canContinueStep1}
                  onClick={() => setStep(2)}
                >
                  Jatka kuorman tietoihin <span aria-hidden="true">→</span>
                </button>
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className="route-request-step">
              <legend>
                <span>02 / KUORMA</span>
                Lämpötila ja volyymi
              </legend>

              <div>
                <span className="route-request-label">Lämpötilavaatimus</span>
                <div className="route-request-temp-grid">
                  {temperatureOptions.map((option) => (
                    <label
                      key={option.value}
                      className={
                        formData.tempRange === option.value
                          ? "route-request-temp is-selected"
                          : "route-request-temp"
                      }
                    >
                      <input
                        type="radio"
                        name="temperature"
                        value={option.value}
                        checked={formData.tempRange === option.value}
                        onChange={() =>
                          setFormData({ ...formData, tempRange: option.value })
                        }
                      />
                      <strong>{option.label}</strong>
                      <span>{option.meta}</span>
                    </label>
                  ))}
                </div>
              </div>

              <label>
                <span>Arvioitu volyymi</span>
                <input
                  type="text"
                  placeholder="Esim. 3 rullakkoa tai 5 EUR-lavaa"
                  value={formData.volume}
                  onChange={(event) =>
                    setFormData({ ...formData, volume: event.target.value })
                  }
                  required
                />
              </label>

              <div className="route-request-actions">
                <button className="button route-request-button-secondary" type="button" onClick={() => setStep(1)}>
                  <span aria-hidden="true">←</span> Takaisin
                </button>
                <button
                  className="button button-primary"
                  type="button"
                  disabled={!canContinueStep2}
                  onClick={() => setStep(3)}
                >
                  Jatka yhteystietoihin <span aria-hidden="true">→</span>
                </button>
              </div>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset className="route-request-step">
              <legend>
                <span>03 / YHTEYSTIEDOT</span>
                Kenelle vastaamme?
              </legend>

              <div className="route-request-review">
                <span>SPEC / READY</span>
                <strong>{routeLabel}</strong>
                <small>{tempLabel} · {formData.volume || "Volyymi puuttuu"}</small>
              </div>

              <div className="route-request-field-grid">
                <label>
                  <span>Yritys</span>
                  <input
                    type="text"
                    placeholder="Yrityksen nimi Oy"
                    value={formData.company}
                    onChange={(event) =>
                      setFormData({ ...formData, company: event.target.value })
                    }
                    autoComplete="organization"
                    required
                  />
                </label>

                <label>
                  <span>Kontaktihenkilö</span>
                  <input
                    type="text"
                    placeholder="Etunimi Sukunimi"
                    value={formData.contactName}
                    onChange={(event) =>
                      setFormData({ ...formData, contactName: event.target.value })
                    }
                    autoComplete="name"
                    required
                  />
                </label>
              </div>

              <div className="route-request-field-grid">
                <label>
                  <span>Sähköposti</span>
                  <input
                    type="email"
                    placeholder="nimi@yritys.fi"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                    autoComplete="email"
                    required
                  />
                </label>

                <label>
                  <span>Puhelinnumero</span>
                  <input
                    type="tel"
                    placeholder="+358..."
                    value={formData.phone}
                    onChange={(event) =>
                      setFormData({ ...formData, phone: event.target.value })
                    }
                    autoComplete="tel"
                    required
                  />
                </label>
              </div>

              <p className="route-request-privacy">
                Preview: lomakkeen lähetys käsitellään vain selaimen käyttöliittymässä.
                Tietoja ei välitetä backendille, sähköpostiin, analytiikkaan tai CRM:ään.
              </p>

              <div className="route-request-actions">
                <button className="button route-request-button-secondary" type="button" onClick={() => setStep(2)}>
                  <span aria-hidden="true">←</span> Takaisin
                </button>
                <button className="button button-primary" type="submit" disabled={!canSubmit}>
                  Lähetä preview-pyyntö <span aria-hidden="true">→</span>
                </button>
              </div>
            </fieldset>
          )}
        </form>
      </div>
    </section>
  );
}
