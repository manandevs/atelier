import React from 'react';
import { useReveal } from '../hooks/useReveal';
import Button from './Button';

export default function Commission({ onOpenEnquiry }) {
  const [ref, isVisible] = useReveal(0.1);

  return (
    <section id="commission" className="bg-stone-950 text-stone-50 py-28 lg:py-40 text-center">
      <div ref={ref} className="shell max-w-4xl mx-auto flex flex-col items-center">
        <div
          className={`flex flex-col items-center gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Rotated-square diamond */}
          <span className="w-2.5 h-2.5 bg-amber-700 rotate-45 mb-2" />

          <span className="eyebrow text-amber-300">Bespoke Services</span>

          <h2 className="display text-[clamp(2.8rem,6.5vw,5.5rem)] text-stone-50">
            Begin Your
            <span className="block italic text-amber-300 font-light mt-2">
              Private Commission
            </span>
          </h2>

          <p className="lede text-stone-200/80 max-w-2xl mx-auto mt-2">
            Private salons are held by appointment in Paris, London, and New York. Allow our master tailors to curate a wardrobe tailored exclusively to your silhouette and life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button variant="dark" onClick={onOpenEnquiry} showArrow={true}>
              Book Private Salon
            </Button>

            <Button variant="dark" href="#atelier" showArrow={true}>
              Contact Concierge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
