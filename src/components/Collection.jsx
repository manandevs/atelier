import React from 'react';
import { useReveal } from '../hooks/useReveal';
import Button from './Button';

export default function Collection({ onOpenEnquiry }) {
  const items = [
    {
      num: '01',
      model: 'ARIA',
      category: 'Architectural Minimalism',
      title: 'The Monolith Coat',
      image: '/images/card-1.png',
      desc: 'Structured wool-cashmere with concealed horn buttoning and an engineered collar that frames the clavicle with uncompromising precision.',
      specs: [
        { label: 'Silhouette', value: 'Straight columnar drape, extended shoulder' },
        { label: 'Fabrics', value: 'Double-face Vicuña and virgin wool' },
        { label: 'Details', value: 'Hand-turned welt pockets, silk-habotai lining' },
        { label: 'Styling', value: 'Worn with raw calfskin gloves and gold cuff' },
      ],
    },
    {
      num: '02',
      model: 'LUNA',
      category: 'Romantic Avant-Garde',
      title: 'Ethereal Silk Gown',
      image: '/images/card-2.png',
      desc: 'Layered chiffon cascades dissolving into hand-pleated organza, creating an ephemeral silhouette that moves with effortless theatricality.',
      specs: [
        { label: 'Silhouette', value: 'Bias-cut empire waist with train' },
        { label: 'Fabrics', value: 'Gauze silk organza and French tulle' },
        { label: 'Details', value: 'Hand-stitched micro-pleating throughout' },
        { label: 'Styling', value: 'Paired with antique silver hairpins' },
      ],
    },
    {
      num: '03',
      model: 'NOVA',
      category: 'Urban Futurism',
      title: 'Structured Tailored Ensemble',
      image: '/images/card-3.png',
      desc: 'Subversive tailoring featuring asymmetric lapels and sharp structural darts, marrying traditional Savile Row mastery with futuristic geometry.',
      specs: [
        { label: 'Silhouette', value: 'Asymmetric pinched waist, flared trouser' },
        { label: 'Fabrics', value: 'Heavyweight grain de poudre wool' },
        { label: 'Details', value: 'Ruthenium-plated custom hardware' },
        { label: 'Styling', value: 'Accented with minimal architectural choker' },
      ],
    },
  ];

  return (
    <section id="collection" className="section shell">
      {/* Section Header */}
      <div className="section-head">
        <div>
          <span className="eyebrow eyebrow--marked">The Runway Archive</span>
          <h2 className="display section-title text-stone-900">
            Current
            <span className="block italic text-amber-700 font-light pl-[0.1em]">
              Collection
            </span>
          </h2>
        </div>
        <div>
          <p className="lede">
            Three distinct visions of contemporary couture. Each garment is fabricated in singular editions by master hands in Paris.
          </p>
        </div>
      </div>

      {/* Alternating Editorial Spreads */}
      <div className="flex flex-col gap-24 lg:gap-36">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          return <CollectionSpread key={item.num} item={item} isEven={isEven} onOpenEnquiry={onOpenEnquiry} />;
        })}
      </div>
    </section>
  );
}

function CollectionSpread({ item, isEven, onOpenEnquiry }) {
  const [ref, isVisible] = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image Plate */}
      <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
        <div className="relative group overflow-hidden bg-stone-200 aspect-[4/5]">
          <img
            src={item.image}
            alt={`${item.model} - ${item.title}`}
            className="w-full h-full object-cover filter grayscale-[0.16] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-[1.015]"
          />
          <div className="absolute top-4 right-4 bg-stone-50/90 backdrop-blur-sm px-3 py-1 text-[0.6rem] tracking-[0.3em] font-sans text-stone-900 border border-stone-900/10">
            LOOK {item.num} — {item.model}
          </div>
        </div>
      </div>

      {/* Content Details */}
      <div className={`lg:col-span-6 flex flex-col justify-center relative ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
        {/* Oversized Italic Gold Index Numeral */}
        <span className="font-serif italic text-[7rem] lg:text-[10rem] font-light text-amber-700 opacity-[0.28] absolute -top-16 -left-6 lg:-top-24 lg:-left-12 pointer-events-none select-none leading-none">
          {item.num}
        </span>

        <div className="relative z-10 flex flex-col items-start gap-6">
          <span className="eyebrow text-amber-700 font-medium tracking-[0.3em]">
            {item.category}
          </span>

          <h3 className="display text-3xl lg:text-5xl text-stone-900">
            {item.title}
          </h3>

          <p className="text-stone-500 leading-relaxed font-sans font-light text-base lg:text-lg max-w-xl">
            {item.desc}
          </p>

          {/* Spec Table */}
          <div className="w-full border-t border-stone-900/10 mt-2">
            {item.specs.map((spec, sIdx) => (
              <div
                key={sIdx}
                className="grid grid-cols-[130px_1fr] py-3.5 border-b border-stone-900/5 text-xs font-sans items-center"
              >
                <span className="text-stone-500 tracking-wider uppercase font-medium">
                  {spec.label}
                </span>
                <span className="text-stone-900 font-light">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Enquire Link */}
          <div className="pt-4">
            <Button variant="link" onClick={() => onOpenEnquiry(item.title)}>
              Enquire For Look {item.num}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
