import React, { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import Button from "./Button";

const SALONS = [
  {
    num: "i",
    city: "Paris",
    address: "14 Place Vendôme",
    hours: "Tuesday — Saturday, 10h00 — 18h00",
  },
  {
    num: "ii",
    city: "London",
    address: "Mayfair, by private arrangement",
    hours: "Wednesday — Friday, 10h00 — 17h00",
  },
  {
    num: "iii",
    city: "New York",
    address: "Upper East Side, seasonal residency",
    hours: "February & September, by invitation",
  },
];

const FAQS = [
  {
    question: "How long does a commission take?",
    answer:
      "A first fitting is scheduled within three weeks of your enquiry. From the first fitting, a garment requires eight to sixteen weeks — roughly two hundred hours of hand work, across three fittings.",
  },
  {
    question: "May I visit the atelier without an appointment?",
    answer:
      "The workrooms remain closed to preserve the quiet our artisans work in. Every visit is arranged in advance so that a member of the salon team, and your fabrics, are ready for you.",
  },
  {
    question: "Do you travel for fittings?",
    answer:
      "Our master tailors travel to patrons in Europe, the Gulf, and North America for second and final fittings. Please note your city in your enquiry and the concierge will propose dates.",
  },
  {
    question: "Can pieces from the runway archive be reproduced?",
    answer:
      "Selected archive looks may be re-cut to your measurements in singular editions. Certain fabrics are no longer milled, in which case we will propose an equivalent from our heritage European mills.",
  },
];

export default function ContactAppointments() {
  const [ref, isVisible] = useReveal(0.1);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="appointments" className="py-12 px-4 lg:px-6">
      {/* Section Header */}
      <div className="max-w-xl pb-8">
        <span className="border border-amber-700/40 text-amber-700 bg-amber-600/5 px-2 rounded-full mb-2">
          Before You Write
        </span>
        <h2 className="text-3xl md:text-5xl text-stone-900">
          Appointments
          <span className="block italic text-amber-700 font-light pl-[0.1em]">
            &amp; Questions
          </span>
        </h2>
      </div>

      <div
        ref={ref}
        className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Left Column: Salons & Hours */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h3 className="text-2xl lg:text-3xl text-stone-900">Private Salons</h3>

          <div className="border-2 border-stone-900/10">
            {SALONS.map((salon, idx) => (
              <div
                key={salon.city}
                className={`p-6 flex flex-col gap-2 ${
                  idx < SALONS.length - 1 ? "border-b-2 border-stone-900/10" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 p-2 aspect-square rounded-full flex items-center justify-center text-center text-xl font-bold tracking-wider border-2 border-amber-700/40 text-amber-700 bg-amber-600/5">
                    {salon.num}
                  </span>
                  <span className="text-xl text-stone-900">{salon.city}</span>
                </div>
                <span className="text-stone-500 font-light">
                  {salon.address}
                </span>
                <span className="text-stone-900">{salon.hours}</span>
              </div>
            ))}
          </div>

          <p className="text-stone-500 font-light leading-relaxed text-sm">
            Appointments run ninety minutes and are held one patron at a time.
            Should you need to reschedule, a note to the concierge is enough.
          </p>

          <div>
            <Button variant="secondary" href="#enquiry" showArrow={true}>
              Request an Appointment
            </Button>
          </div>
        </div>

        {/* Right Column: FAQ */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h3 className="text-2xl lg:text-3xl text-stone-900">
            Frequent Questions
          </h3>

          <div className="border border-stone-900/10">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className={
                    idx < FAQS.length - 1 ? "border-b border-stone-900/10" : ""
                  }
                >
                  <h4>
                    <button
                      type="button"
                      id={`faq-trigger-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="w-full flex items-center justify-between gap-6 text-left p-4 md:p-6 text-stone-900 hover:text-amber-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
                    >
                      <span className="text-base lg:text-lg">
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`w-2.5 h-2.5 shrink-0 bg-amber-700 transition-transform duration-300 ${
                          isOpen ? "rotate-[135deg]" : "rotate-45"
                        }`}
                      />
                    </button>
                  </h4>

                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${idx}`}
                    hidden={!isOpen}
                    className="px-4 md:px-6 pb-6 -mt-1"
                  >
                    <p className="text-stone-500 leading-relaxed font-light max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-stone-500 font-light leading-relaxed text-sm">
            Another question? Write to{" "}
            <a
              href="mailto:concierge@atelier-couture.com"
              className="text-amber-700 underline underline-offset-4 hover:opacity-75 transition-colors"
            >
              concierge@atelier-couture.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
