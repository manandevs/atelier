import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-50 pt-6 border-t border-white/25">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/25 px-4 lg:px-6">
          {/* Column 1: Wordmark + Blurb + Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="flex flex-col">
              <a
                href="#"
                className="text-2xl md:text-3xl font-black text-stone-50"
              >
                Atelier
              </a>
              <span className="uppercase text-stone-400 text-xs tracking-widest">
                Haute Couture
              </span>
            </div>

            <p className="text-stone-200 tracking-wider max-w-sm">
              An uncompromising house of contemporary fashion, creating singular
              garments by hand in Paris for discerning patrons worldwide.
            </p>

            {subscribed ? (
              <p className="text-xs text-amber-300 tracking-wider">
                Thank you for subscribing to private salon dispatches.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3 mt-4">
                <span className="text-stone-400 ">
                  Private Gazette
                </span>
                <div className="flex items-center border-b border-stone-50/30 pb-2 focus-within:border-amber-300 transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="bg-transparent text-md text-stone-50 placeholder:text-stone-400/60 focus:outline-none w-full  tracking-wider"
                  />
                  <button
                    type="submit"
                    className="uppercase  text-amber-300 hover:text-stone-50 transition-colors pl-4 shrink-0"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Column 2: Collection Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-md uppercase text-amber-300 font-medium">
              Collection
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Aria — Monolith",
                "Luna — Ethereal",
                "Nova — Futurism",
                "Runway Archives",
                "Custom Fittings",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#collection"
                    className="text-md  text-stone-200/70 hover:text-amber-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Maison Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-md uppercase text-amber-300 font-medium">
              Maison
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "The Philosophy",
                "Paris Workrooms",
                "Master Artisans",
                "Press & Journal",
                "Private Salon",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#philosophy"
                    className="text-md text-stone-200/70 hover:text-amber-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Address */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-md uppercase text-amber-300 font-medium">
              Flagship Atelier
            </h4>
            <address className="not-italic text-md text-stone-200/70 leading-relaxed">
              14 Place Vendôme
              <br />
              75001 Paris, France
              <br />
              <br />
              concierge@atelier-couture.com
              <br />
              +33 1 42 68 00 00
            </address>
          </div>
        </div>

        {/* Base Row */}
        <div className="py-4 px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-stone-400">
          <p>© 2026 ATELIER Haute Couture. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-amber-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors">
              Legal Notice
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
