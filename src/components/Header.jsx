import { useState, useEffect } from 'react';

export default function Header({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemClass = "relative text-[0.68rem] tracking-[0.25em] uppercase text-muted hover:text-ink transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300";

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 bg-ivory/90 backdrop-blur-md border-b border-line flex items-center shell ${
          scrolled ? 'h-[74px]' : 'h-[96px]'
        }`}
      >
        <div className="w-full grid grid-cols-3 items-center">
          {/* Left Nav (Desktop) */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main Navigation">
            <a href="#collection" className={navItemClass}>Collection</a>
            <a href="#philosophy" className={navItemClass}>Philosophy</a>
            <a href="#atelier" className={navItemClass}>Maison</a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle Navigation Menu"
              className="flex flex-col justify-center gap-[6px] w-8 h-8 p-1 focus:outline-none"
            >
              <span className={`block h-[1px] bg-ink transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`block h-[1px] bg-ink transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[1px] bg-ink transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
            </button>
          </div>

          {/* Center Wordmark */}
          <div className="text-center flex flex-col items-center">
            <a href="#" className="font-serif text-2xl md:text-3xl tracking-[0.28em] font-light text-ink">
              ATELIER
            </a>
            <span className="text-[0.52rem] tracking-[0.4em] uppercase text-muted -mt-1">
              Haute Couture
            </span>
          </div>

          {/* Right Nav / Actions */}
          <div className="flex items-center justify-end gap-8">
            <nav className="hidden lg:flex items-center gap-10" aria-label="Secondary Navigation">
              <a href="#commission" className={navItemClass}>Commission</a>
              <a href="#commission" className={navItemClass}>Contact</a>
            </nav>
            <a
              href="#commission"
              className="hidden sm:inline-flex items-center justify-center text-[0.64rem] tracking-[0.3em] uppercase px-5 py-[0.6rem] border border-ink text-ink relative overflow-hidden group hover:border-gold transition-colors duration-500"
            >
              <span className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover:text-ivory transition-colors duration-500">
                Enquire
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[calc(74px+32px)] bg-ivory border-b border-line z-40 lg:hidden shadow-lg p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="font-serif text-2xl text-ink hover:text-gold transition-colors"
          >
            Collection
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="font-serif text-2xl text-ink hover:text-gold transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#atelier"
            onClick={() => setMobileMenuOpen(false)}
            className="font-serif text-2xl text-ink hover:text-gold transition-colors"
          >
            Maison
          </a>
          <a
            href="#commission"
            onClick={() => setMobileMenuOpen(false)}
            className="font-serif text-2xl text-ink hover:text-gold transition-colors"
          >
            Commission
          </a>
          <div className="pt-4 border-t border-line flex flex-col gap-3">
            <span className="eyebrow">Private Salons</span>
            <p className="text-sm text-muted">Paris · Place Vendôme<br />By appointment only.</p>
          </div>
        </div>
      )}
    </>
  );
}


