export default function Marquee() {
  const phrases = [
    "Haute Couture",
    "Made Entirely by Hand",
    "Paris Place Vendôme",
    "Architectural Minimalism",
    "Private Salons",
    "Uncompromising Craft"
  ];

  return (
    <div className="border-y border-stone-900/10 bg-stone-100 py-4 overflow-hidden relative select-none">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {/* Render twice for infinite seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6 shrink-0">
            {phrases.map((phrase, idx) => (
              <div key={idx} className="flex items-center gap-12 font-serif italic text-lg sm:text-xl text-stone-500 tracking-wide">
                <span>{phrase}</span>
                <span className="w-[5px] h-[5px] bg-amber-700 rotate-45 inline-block shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
