import Button from './Button';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-stone-100 py-clamp(5rem,11vw,10rem) shell">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[calc(100vh-160px)] py-12">
        
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start reveal">
          <div className="eyebrow eyebrow--marked mb-6">
            Autumn / Winter 2026 Collection
          </div>

          <h1 className="display text-4xl sm:text-6xl xl:text-[7.4rem] font-serif font-light text-stone-900 mb-6">
            Modern<br />
            <span className="italic text-amber-700 pl-6 sm:pl-16">Elegance</span>
          </h1>

          <p className="lede mb-10">
            A quiet dialogue between architectural structure and fluid drapery. Each silhouette is conceived, patterned, and executed entirely by hand in our Paris atelier.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto mb-16">
            {/* Primary Button */}
            <Button href="#collection" variant="primary" showArrow={true}>
              Explore Collection
            </Button>

            {/* Secondary Button */}
            <Button href="#commission" variant="secondary" showArrow={true}>
              Private Commission
            </Button>
          </div>

          {/* Meta Row */}
          <div className="w-full pt-8 border-t border-stone-900/10 grid grid-cols-3 gap-6 text-[0.64rem] uppercase tracking-[0.3em] text-stone-500">
            <div>
              <span className="block text-stone-400 mb-1">House</span>
              <span className="text-stone-900 font-medium">ATELIER Paris</span>
            </div>
            <div>
              <span className="block text-stone-400 mb-1">Director</span>
              <span className="text-stone-900 font-medium">G. Vane</span>
            </div>
            <div>
              <span className="block text-stone-400 mb-1">Edition</span>
              <span className="text-stone-900 font-medium">Numbered 01–20</span>
            </div>
          </div>
        </div>

        {/* Right Column: Tall Portrait Plate */}
        <div className="lg:col-span-5 relative reveal flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[440px] aspect-[3/4]">
            {/* Gold Hairline Frame with hover transition */}
            <div className="absolute inset-0 border border-amber-700/40 translate-x-[18px] translate-y-[18px] hover:translate-x-[9px] hover:translate-y-[9px] transition-transform duration-700 pointer-events-none z-0" />
            
            {/* Image Plate */}
            <div className="relative z-10 w-full h-full overflow-hidden bg-stone-200">
              <img
                src="/images/card-1.png"
                alt="Look 02 Luna - Haute Couture dress by Atelier"
                className="w-full h-full object-cover filter grayscale-[0.16] hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Corner Tag */}
            <div className="absolute bottom-6 left-6 z-20 bg-stone-50/90 backdrop-blur-sm border border-stone-900/10 px-4 py-2 text-[0.6rem] tracking-[0.3em] uppercase text-stone-900">
              LOOK 02 — LUNA
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
