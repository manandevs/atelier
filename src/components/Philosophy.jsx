import React from "react";
import { useReveal } from "../hooks/useReveal";
import Button from "./Button";

export default function Philosophy() {
  const [ref, isVisible] = useReveal(0.1);

  const pillars = [
    {
      num: "i",
      title: "The Unhurried Hand",
      desc: "In an era of instant gratification, our atelier champions the sanctity of time. Every seam is calculated, draped, and executed entirely by master hands over hundreds of exacting hours.",
      svgIcon: (
        <svg
          className="w-10 h-10 stroke-amber-700"
          viewBox="0 0 32 32"
          fill="none"
          strokeWidth="0.75"
        >
          <circle cx="16" cy="16" r="12" />
          <path d="M16 8v16M8 16h16" />
        </svg>
      ),
    },
    {
      num: "ii",
      title: "Architectural Lineage",
      desc: "Garments should inhabit the space around the body with sculptural grace. We merge classic tailoring rigour with avant-garde spatial experimentation.",
      svgIcon: (
        <svg
          className="w-10 h-10 stroke-amber-700"
          viewBox="0 0 32 32"
          fill="none"
          strokeWidth="0.75"
        >
          <polygon points="16 4, 28 26, 4 26" />
          <line x1="16" y1="4" x2="16" y2="26" />
        </svg>
      ),
    },
    {
      num: "iii",
      title: "Conscious Legacy",
      desc: "True luxury is enduring. We source rare, regenerative natural fibers exclusively from heritage European mills that respect both ecological balance and generational craftsmanship.",
      svgIcon: (
        <svg
          className="w-10 h-10 stroke-amber-700"
          viewBox="0 0 32 32"
          fill="none"
          strokeWidth="0.75"
        >
          <path d="M16 6v20M10 12l6-6 6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="philosophy" className="py-12 px-4 lg:px-6">
      <div ref={ref} className="shell">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="border border-amber-700/40 text-amber-700 bg-amber-600/5 px-2 rounded-full mb-2">
            The Maison Ethos
          </span>
          <h2 className="text-3xl md:text-5xl text-stone-900">
            Pillars of
            <span className="block italic text-amber-700 font-light pl-[0.1em]">
              Craft
            </span>
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.num}
              className="flex flex-col h-full p-4 border-2 border-stone-900/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 p-2 aspect-square rounded-full flex items-center justify-center text-center text-xl font-bold tracking-wider border-2 border-amber-700/40 text-amber-700 bg-amber-600/5">
                  {pillar.num}
                </span>

                {pillar.svgIcon}
              </div>

              <h3 className="display text-2xl lg:text-3xl text-stone-900 mb-4">
                {pillar.title}
              </h3>

              <p className="text-stone-500  font-light leading-relaxed text-sm lg:text-base mb-8">
                {pillar.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-stone-900/5">
                <Button variant="link" href="#atelier" className="px-0">
                  Discover More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
