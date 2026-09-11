import Button from "./Button";

export default function Hero({ onOpenEnquiry }) {
  return (
    <section className="relative overflow-hidden px-4 lg:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)] py-12">
        {/* Left Column */}
        <div className="flex flex-col items-start reveal">
          <span className="border border-amber-700/40 text-amber-700 bg-amber-600/5 px-2 rounded-full mb-2">
            Autumn / Winter 2026 Collection
          </span>

          <h1 className="display text-4xl sm:text-6xl xl:text-9xl font-medium text-stone-900">
            Modern
            <br />
            <span className="italic text-amber-700 pl-6 sm:pl-16">
              Elegance
            </span>
          </h1>

          <p className="lede mb-10">
            A quiet dialogue between architectural structure and fluid drapery.
            Each silhouette is conceived, patterned, and executed entirely by
            hand in our Paris atelier.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto mb-16">
            {/* Primary Button */}
            <Button href="#collection" showArrow={true} variant="outline">
              Explore Collection
            </Button>

            {/* Secondary Button */}
            <Button href="#commission" showArrow={true}>
              Private Commission
            </Button>
          </div>

          {/* Meta Row */}
          <div className="w-full p-4 border border-stone-900/10 grid grid-cols-3 gap-4">
            <div>
              <span className="block text-stone-400">House</span>
              <span className="text-stone-900 font-medium">ATELIER Paris</span>
            </div>
            <div>
              <span className="block text-stone-400">Director</span>
              <span className="text-stone-900 font-medium">G. Vane</span>
            </div>
            <div>
              <span className="block text-stone-400">Edition</span>
              <span className="text-stone-900 font-medium">Numbered 01–20</span>
            </div>
          </div>
        </div>

        {/* Right Column: Tall Portrait Plate */}
        <div className="relative reveal flex justify-center lg:justify-end">
          <div className="border border-stone-900/10 hover:scale-105 transition-transform duration-700 pointer-events-none z-0 p-1">
            <div className="relative w-full max-w-[440px] aspect-[3/4]">
              {/* Image Plate */}
              <div className="relative z-10 w-full h-full overflow-hidden bg-stone-200">
                <img
                  src="/images/card-1.png"
                  alt="Look 02 Luna - Haute Couture dress by Atelier"
                  className="w-full h-full object-cover filter grayscale-[0.16] hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Corner Tag */}
              <div className="absolute bottom-2 left-2 z-20 bg-stone-50 px-4 py-2 text-md font-bold text-stone-900">
                LOOK 02 — LUNA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
