import React from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Philosophy() {
  const [ref, isVisible] = useReveal(0.1);

  const pillars = [
    {
      num: 'i',
      title: 'The Unhurried Hand',
      desc: 'In an era of instant gratification, our atelier champions the sanctity of time. Every seam is calculated, draped, and executed entirely by master hands over hundreds of exacting hours.',
      svgIcon: (
        <svg className="w-8 h-8 stroke-gold" viewBox="0 0 32 32" fill="none" strokeWidth="0.75">
          <circle cx="16" cy="16" r="12" />
          <path d="M16 8v16M8 16h16" />
        </svg>
      ),
    },
    {
      num: 'ii',
      title: 'Architectural Lineage',
      desc: 'Garments should inhabit the space around the body with sculptural grace. We merge classic tailoring rigour with avant-garde spatial experimentation.',
      svgIcon: (
        <svg className="w-8 h-8 stroke-gold" viewBox="0 0 32 32" fill="none" strokeWidth="0.75">
          <polygon points="16 4, 28 26, 4 26" />
          <line x1="16" y1="4" x2="16" y2="26" />
        </svg>
      ),
    },
    {
      num: 'iii',
      title: 'Conscious Legacy',
      desc: 'True luxury is enduring. We source rare, regenerative natural fibers exclusively from heritage European mills that respect both ecological balance and generational craftsmanship.',
      svgIcon: (
        <svg className="w-8 h-8 stroke-gold" viewBox="0 0 32 32" fill="none" strokeWidth="0.75">
          <path d="M16 6v20M10 12l6-6 6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="philosophy" className="bg-paper border-y border-line py-24 lg:py-32">
      <div ref={ref} className="shell">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="eyebrow eyebrow--marked justify-center">The Maison Ethos</span>
          <h2 className="display section-title text-ink mt-4">
            Pillars of
            <span className="block italic text-gold font-light">Craft</span>
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.num}
              className={`flex flex-col h-full ${
                idx > 0 ? 'md:border-l md:border-line md:pl-12 lg:pl-16' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif italic text-3xl font-light text-gold">
                  {pillar.num}
                </span>
                {pillar.svgIcon}
              </div>

              <h3 className="display text-2xl lg:text-3xl text-ink mb-4">
                {pillar.title}
              </h3>

              <p className="text-muted font-sans font-light leading-relaxed text-sm lg:text-base mb-8">
                {pillar.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-line-soft">
                <a
                  href="#atelier"
                  className="group inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase font-sans text-ink hover:text-gold transition-colors"
                >
                  <span className="w-4 h-[1px] bg-current transition-all duration-300 group-hover:w-8" />
                  <span>Discover More</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
