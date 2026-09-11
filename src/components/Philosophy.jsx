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
          role="img"
          className="w-10 h-10 stroke-amber-700 fill-amber-700"
          viewBox="0 0 512 512"
          height="200px"
          width="200px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M363 277h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"></path>
          <path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422c-44.3 0-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256c0-44.3 17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
        </svg>
      ),
    },
    {
      num: "ii",
      title: "Architectural Lineage",
      desc: "Garments should inhabit the space around the body with sculptural grace. We merge classic tailoring rigour with avant-garde spatial experimentation.",
      svgIcon: (
        <svg
          role="img"
          className="w-8 h-8 stroke-amber-700 fill-amber-700"
          viewBox="0 0 24 24"
          height="200px"
          width="200px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.667 22.884V24H1.333v-1.116zm-.842-1.675v1.396H2.175v-1.396zM4.233 6.14l.234.118.118 1.882.117 3.058v2.941l-.117 3.666-.02 2.47-.332.098H3.062l-.352-.098-.136-2.47-.118-3.646v-2.941l.118-3.078.107-1.892.244-.107zm16.842 0l.235.118.117 1.882.117 3.058v2.941l-.117 3.666-.02 2.47-.332.098h-1.171l-.352-.098-.137-2.47-.117-3.646v-2.941l.117-3.078.108-1.892.244-.107zm-11.79 0l.235.118.117 1.882.117 3.058v2.941l-.117 3.666-.02 2.47-.331.098H8.114l-.352-.098-.136-2.47-.117-3.646v-2.941l.117-3.078.107-1.892.244-.107zm6.457 0l.234.118.117 1.882.118 3.058v2.941l-.118 3.666-.019 2.47-.332.098H14.57l-.351-.098-.137-2.47-.117-3.646v-2.941l.117-3.078.108-1.892.244-.107zm6.083-2.511V5.58H2.175V3.628zM11.798 0l10.307 2.347-.413.723H1.951l-.618-.587Z"></path>
        </svg>
      ),
    },
    {
      num: "iii",
      title: "Conscious Legacy",
      desc: "True luxury is enduring. We source rare, regenerative natural fibers exclusively from heritage European mills that respect both ecological balance and generational craftsmanship.",
      svgIcon: (
        <svg
          role="img"
          className="w-8 h-8 stroke-amber-700 fill-amber-700"
          viewBox="0 0 384 512"
          height="200px"
          width="200px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
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
                <span className="w-10 h-10 p-2 aspect-square rounded-full flex items-center justify-center text-center text-xl font-black tracking-wider border-2 border-amber-700 text-amber-700 bg-amber-600/5">
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
