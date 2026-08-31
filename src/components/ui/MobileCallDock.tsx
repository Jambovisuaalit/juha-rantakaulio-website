"use client";

import { useEffect, useState } from "react";

export function MobileCallDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    const contact = document.querySelector("#yhteystiedot");

    if (!hero || !("IntersectionObserver" in window)) {
      return;
    }

    let heroVisible = true;
    let contactVisible = false;

    const syncVisibility = () => {
      setVisible(!heroVisible && !contactVisible);
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        syncVisibility();
      },
      { threshold: 0.01 }
    );

    const contactObserver = contact
      ? new IntersectionObserver(
          ([entry]) => {
            contactVisible = entry.isIntersecting;
            syncVisibility();
          },
          { threshold: 0.01 }
        )
      : null;

    heroObserver.observe(hero);
    if (contact && contactObserver) contactObserver.observe(contact);

    return () => {
      heroObserver.disconnect();
      contactObserver?.disconnect();
    };
  }, []);

  return (
    <a
      className={`mobile-call-dock${visible ? " is-visible" : ""}`}
      href="tel:+358503662215"
      aria-label="Soita ajonjärjestelyyn 24/7, 050 366 2215"
    >
      <span className="mobile-call-dock-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.7 3.2 9.4 6.3a1.4 1.4 0 0 1 .2 1.6L8.2 10c1.1 2.3 3 4.2 5.3 5.3l2.2-1.4a1.4 1.4 0 0 1 1.6.2l3.1 2.7a1.4 1.4 0 0 1 .4 1.6c-.7 1.8-2.3 2.9-4.2 2.9C9 21.3 2.7 15 2.7 7.4c0-1.9 1.1-3.5 2.9-4.2a1.4 1.4 0 0 1 1.1 0Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="mobile-call-dock-copy">
        <small>Ajonjärjestely 24/7</small>
        <strong>050 366 2215</strong>
      </span>
      <span className="mobile-call-dock-action">Soita</span>
    </a>
  );
}
