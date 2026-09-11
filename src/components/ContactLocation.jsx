import React from "react";
import { useReveal } from "../hooks/useReveal";
import Button from "./Button";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=14+Place+Vend%C3%B4me%2C+75001+Paris";

export default function ContactLocation() {
  const [ref, isVisible] = useReveal(0.1);

  const arrivals = [
    { label: "Métro", value: "Tuileries (1) · Opéra (3, 7, 8)" },
    { label: "Parking", value: "Vendôme — entrance rue de la Paix" },
    { label: "Arrival", value: "Ring for the concierge at the courtyard gate" },
  ];

  return (
    <section id="location" className="border-y border-stone-900/10">
      <div
        ref={ref}
        className={`relative transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Full-bleed Plate */}
        <div className="relative w-full bg-stone-200 overflow-hidden aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9] group">
          <img
            src="/images/card-2.png"
            alt="Editorial portrait of a patron in a striped shirt dress, photographed in the Paris salon"
            className="w-full h-full object-cover filter grayscale-[0.16] transition-transform duration-1000 group-hover:scale-[1.015]"
          />

          {/* Corner Tag — matches the Collection / Hero plates */}
          <div className="absolute top-2 right-2 bg-stone-50 px-4 py-2 font-bold text-stone-900">
            48.8675° N — 2.3295° E
          </div>

          {/* Address Card */}
          <div className="absolute bottom-2 left-2 right-2 sm:right-auto sm:max-w-sm bg-stone-50 border border-stone-900/10 p-4 sm:p-6 shadow-sm flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-amber-700 rotate-45" />
              <span className="text-amber-700 font-medium">Flagship Atelier</span>
            </div>

            <address className="not-italic text-stone-900 leading-relaxed">
              14 Place Vendôme
              <br />
              75001 Paris, France
            </address>

            <p className="text-stone-500 font-light leading-relaxed text-sm">
              The salon sits on the second floor, behind the courtyard. Visits
              are by appointment only.
            </p>

            <div>
              <Button
                variant="outline"
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                showArrow={true}
              >
                Open in Maps
              </Button>
            </div>
          </div>
        </div>

        {/* Arrival Notes */}
        <div className="px-4 lg:px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-stone-900/10">
          {arrivals.map((item) => (
            <div key={item.label}>
              <span className="block text-stone-400 uppercase text-xs tracking-widest">
                {item.label}
              </span>
              <span className="text-stone-900">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
