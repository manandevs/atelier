import React from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Atelier() {
  const [ref, isVisible] = useReveal(0.1);

  const stats = [
    { number: '50+', label: 'Master Artisans' },
    { number: '200+', label: 'Hours per Piece' },
    { number: '15', label: 'Years Experience' },
    { number: '100%', label: 'Handcrafted' },
  ];

  return (
    <section id="atelier" className="section shell">
      <div
        ref={ref}
        className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Left Column: Heading, Lede, 2x2 Stat Grid */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <div>
            <span className="eyebrow eyebrow--marked">The Paris Workrooms</span>
            <h2 className="display section-title text-stone-900 mt-4">
              Where Rigour
              <span className="block italic text-amber-700 font-light">
                Meets Poetics
              </span>
            </h2>
          </div>

          <p className="lede">
            Tucked away behind the historic facades of Place Vendôme, our atelier operates as a sanctuary of silence and precision. Here, raw European textiles transform into wearable art.
          </p>

          {/* 2x2 Stat Grid */}
          <div className="grid grid-cols-2 border border-stone-900/10 mt-2">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`p-6 md:p-8 flex flex-col justify-between border-stone-900/10 ${
                  idx % 2 === 0 ? 'border-r' : ''
                } ${idx < 2 ? 'border-b' : ''}`}
              >
                <span className="font-serif text-3xl md:text-5xl font-light text-stone-900 mb-2">
                  {stat.number}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] font-sans text-stone-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image with bordered stone-50 pull-quote card overlapping bottom-right */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end pt-8 lg:pt-0">
          <div className="relative max-w-lg w-full">
            <div className="relative bg-stone-200 overflow-hidden aspect-[4/5]">
              <img
                src="/images/card-2.png"
                alt="Atelier Paris Workroom"
                className="w-full h-full object-cover filter grayscale-[0.16]"
              />
            </div>

            {/* Overlapping Pull-Quote Card */}
            <div className="absolute -bottom-8 -left-6 md:-bottom-10 md:-left-10 bg-stone-50 border border-stone-900/10 p-6 md:p-8 max-w-xs shadow-sm">
              <p className="font-serif italic text-lg text-stone-900 mb-3 leading-snug">
                &ldquo;We do not merely construct garments; we tailor confidence for the moments that define a lifetime.&rdquo;
              </p>
              <span className="text-[0.6rem] uppercase tracking-[0.3em] font-sans text-stone-500 block">
                — Head Couturier, Paris
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
