import React from "react";
import { useReveal } from "../hooks/useReveal";
import Button from "./Button";

export default function ContactHero() {
  const [ref, isVisible] = useReveal(0.1);

  const meta = [
    { label: "Concierge", value: "concierge@atelier-couture.com" },
    { label: "Salons", value: "Paris · London · New York" },
    { label: "Response", value: "Within 24 Hours" },
  ];

  const details = [
    { label: "Atelier", value: "14 Place Vendôme, 75001 Paris, France" },
    { label: "Telephone", value: "+33 1 42 68 00 00" },
    { label: "Concierge", value: "concierge@atelier-couture.com" },
    { label: "Fittings", value: "Tuesday — Saturday, 10h00 — 18h00" },
    { label: "Press", value: "press@atelier-couture.com" },
  ];

  return (
    <section className="relative overflow-hidden px-4 lg:px-6">
      <div
        ref={ref}
        className={`gap-12 items-center min-h-[calc(100vh-260px)] py-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Left Column: Heading, Subheading, Actions */}
        <div className="flex flex-col items-center justify-center text-center">
          <span className="border border-amber-700/40 text-amber-700 bg-amber-600/5 px-2 rounded-full mb-2">
            Private Salons &amp; Enquiries
          </span>

          <h1 className="text-5xl sm:text-7xl xl:text-9xl font-medium text-stone-900 leading-none">
            Contact{" "}
            <span className="italic text-amber-700 font-light pl-[0.1em]">
              the Maison
            </span>
          </h1>

          <p className="text-stone-500 leading-relaxed font-light text-base lg:text-lg max-w-4xl mt-6 mb-10">
            Write to our Place Vendôme concierge to arrange a fitting, discuss a
            private commission, or request the archive lookbook. Every enquiry
            is read by hand.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto mb-12">
            <Button href="#enquiry" showArrow={true} variant="outline">
              Write to the Atelier
            </Button>

            <Button href="#appointments" showArrow={true}>
              Book a Private Salon
            </Button>
          </div>

          {/* Meta Row */}
          <div className="w-full p-4 border border-stone-900/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {meta.map((item) => (
              <div key={item.label}>
                <span className="block text-stone-400">{item.label}</span>
                <span className="text-stone-900 font-medium break-words">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Portrait Plate */}
      <div className="relative flex flex-col md:flex-row items-end gap-4 py-12">
        {/* Right Column: Atelier Details */}
        <div className="w-full flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-amber-700 rotate-45" />
              <span className="text-amber-700 font-medium">The Maison</span>
            </div>

            {/* Detail Table — same spec-row rhythm as the Collection spreads */}
            <div className="w-full border border-stone-900/10">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1 sm:gap-0 py-3.5 px-2 border-b border-stone-900/5 items-center"
                >
                  <span className="text-stone-500 uppercase font-medium text-xs tracking-widest">
                    {detail.label}
                  </span>
                  <span className="text-stone-900 break-words">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dark Concierge Card */}
          <div className="bg-stone-950 text-stone-50 p-6 flex flex-col gap-4">
            <span className="text-amber-300">Private Concierge</span>
            <p className="text-stone-200/80 font-light leading-relaxed">
              For urgent fittings, travelling wardrobes, or archive requests our
              concierge may be reached directly by telephone during salon hours.
            </p>
            <address className="not-italic text-stone-200/70 leading-relaxed">
              +33 1 42 68 00 00
              <br />
              concierge@atelier-couture.com
            </address>
            <div className="pt-2">
              <Button variant="dark" href="#appointments" showArrow={true}>
                Salon Hours
              </Button>
            </div>
          </div>
        </div>

        <div className="border border-stone-900/10 hover:scale-105 transition-transform duration-700 pointer-events-none z-0 p-1">
          <div className="relative w-full max-w-[540px] aspect-[3/4]">
            <div className="relative z-10 w-full h-full overflow-hidden bg-stone-200">
              <img
                src="/images/card-3.png"
                alt="Editorial portrait in profile from the Autumn / Winter 2026 lookbook"
                className="w-full h-full object-cover filter grayscale-[0.16] hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Corner Tag */}
            <div className="absolute bottom-2 left-2 z-20 bg-stone-50 px-4 py-2 font-bold text-stone-900">
              SALON — VENDÔME
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
