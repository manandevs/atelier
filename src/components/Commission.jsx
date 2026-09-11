import React from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Commission({ onOpenEnquiry }) {
  const [ref, isVisible] = useReveal(0.1);

  return (
    <section id="commission" className="bg-black text-ivory py-28 lg:py-40 text-center">
      <div ref={ref} className="shell max-w-4xl mx-auto flex flex-col items-center">
        <div
          className={`flex flex-col items-center gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Rotated-square diamond */}
          <span className="w-2.5 h-2.5 bg-gold rotate-45 mb-2" />

          <span className="eyebrow text-goldSoft">Bespoke Services</span>

          <h2 className="display text-[clamp(2.8rem,6.5vw,5.5rem)] text-ivory">
            Begin Your
            <span className="block italic text-goldSoft font-light mt-2">
              Private Commission
            </span>
          </h2>

          <p className="lede text-bone/80 max-w-2xl mx-auto mt-2">
            Private salons are held by appointment in Paris, London, and New York. Allow our master tailors to curate a wardrobe tailored exclusively to your silhouette and life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <button
              onClick={onOpenEnquiry}
              className="group relative overflow-hidden border border-ivory/30 bg-transparent px-8 py-4 text-[0.68rem] tracking-[0.3em] uppercase font-sans text-ivory transition-colors duration-500 hover:text-black"
            >
              <span className="absolute inset-x-0 bottom-0 h-0 bg-ivory transition-all duration-500 ease-custom group-hover:h-full z-0" />
              <span className="relative z-10 flex items-center gap-3">
                <span>Book Private Salon</span>
                <span className="flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="w-4 h-[1px] bg-current" />
                  <svg
                    className="w-2.5 h-2.5 stroke-current"
                    viewBox="0 0 10 10"
                    fill="none"
                    strokeWidth="0.75"
                  >
                    <path d="M1 5h8M5 1l4 4-4 4" />
                  </svg>
                </span>
              </span>
            </button>

            <a
              href="#atelier"
              className="group relative overflow-hidden border border-ivory/30 bg-transparent px-8 py-4 text-[0.68rem] tracking-[0.3em] uppercase font-sans text-ivory transition-colors duration-500 hover:text-black"
            >
              <span className="absolute inset-x-0 bottom-0 h-0 bg-goldSoft transition-all duration-500 ease-custom group-hover:h-full z-0" />
              <span className="relative z-10 flex items-center gap-3">
                <span>Contact Concierge</span>
                <span className="flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="w-4 h-[1px] bg-current" />
                  <svg
                    className="w-2.5 h-2.5 stroke-current"
                    viewBox="0 0 10 10"
                    fill="none"
                    strokeWidth="0.75"
                  >
                    <path d="M1 5h8M5 1l4 4-4 4" />
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


