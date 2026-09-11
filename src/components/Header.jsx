import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

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

  const navItemClass = "relative text-md text-stone-700 hover:text-stone-900 transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-700 hover:after:w-full after:transition-all after:duration-300";

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 bg-amber-100 border-y border-amber-200/75 flex items-center px-4 lg:px-6 ${
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
              <span className={`block h-[1px] bg-stone-900 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`block h-[1px] bg-stone-900 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[1px] bg-stone-900 transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
            </button>
          </div>

          {/* Center Wordmark */}
          <div className="text-center flex flex-col items-center">
            <Link to="/" className="text-2xl md:text-3xl font-black text-stone-900">
              Atelier
            </Link>
            <span className="uppercase text-stone-800 text-xs tracking-widest">
              Haute Couture
            </span>
          </div>

          {/* Right Nav / Actions */}
          <div className="flex items-center justify-end gap-8">
            <nav className="hidden lg:flex items-center gap-10" aria-label="Secondary Navigation">
              <a href="#commission" className={navItemClass}>Commission</a>
              <Link to="/contact" className={navItemClass}>Contact</Link>
            </nav>
            <div className="hidden sm:block">
              <Button href="#commission" className="">
                Enquire
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[calc(74px+32px)] bg-stone-50 border-b border-stone-900/10 z-40 lg:hidden shadow-lg p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className=" text-2xl text-stone-900 hover:text-amber-700 transition-colors"
          >
            Collection
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className=" text-2xl text-stone-900 hover:text-amber-700 transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#atelier"
            onClick={() => setMobileMenuOpen(false)}
            className=" text-2xl text-stone-900 hover:text-amber-700 transition-colors"
          >
            Maison
          </a>
          <a
            href="#commission"
            onClick={() => setMobileMenuOpen(false)}
            className=" text-2xl text-stone-900 hover:text-amber-700 transition-colors"
          >
            Commission
          </a>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className=" text-2xl text-stone-900 hover:text-amber-700 transition-colors"
          >
            Contact
          </Link>
          <div className="pt-4 border-t border-stone-900/10 flex flex-col gap-3">
            <span className="eyebrow">Private Salons</span>
            <p className="text-sm text-stone-500">Paris · Place Vendôme<br />By appointment only.</p>
          </div>
        </div>
      )}
    </>
  );
}
