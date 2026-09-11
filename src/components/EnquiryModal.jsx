import React, { useState } from 'react';
import Button from './Button';

export default function EnquiryModal({ isOpen, onClose, initialLook = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Paris',
    look: initialLook || 'Aria — Monolith Coat',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-fade-in-up">
      <div className="relative bg-stone-50 border border-stone-900/10 w-full max-w-xl p-8 md:p-12 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-500 hover:text-stone-900 transition-colors font-sans text-sm tracking-widest uppercase"
        >
          [ Close ]
        </button>

        {submitted ? (
          <div className="text-center py-12 flex flex-col items-center gap-6">
            <span className="w-3 h-3 bg-amber-700 rotate-45" />
            <h3 className="display text-3xl text-stone-900">Commission Request Received</h3>
            <p className="text-stone-500 text-sm font-sans max-w-md">
              Thank you, {formData.name}. Our concierge will contact you at {formData.email} within 24 hours to schedule your private consultation at Place Vendôme.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4"
            >
              Return to Salon
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <span className="eyebrow text-amber-700">Private Appointment</span>
              <h3 className="display text-3xl text-stone-900 mt-2">
                {initialLook ? `Enquire — ${initialLook}` : 'Request Commission'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] uppercase tracking-[0.25em] text-stone-500 font-sans">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Comtesse de Grasse"
                  className="border border-stone-900/10 bg-transparent p-3 text-xs text-stone-900 focus:border-amber-700 focus:outline-none font-sans"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] uppercase tracking-[0.25em] text-stone-500 font-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="patron@domain.com"
                  className="border border-stone-900/10 bg-transparent p-3 text-xs text-stone-900 focus:border-amber-700 focus:outline-none font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] uppercase tracking-[0.25em] text-stone-500 font-sans">
                  Preferred Salon City
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="border border-stone-900/10 bg-stone-50 p-3 text-xs text-stone-900 focus:border-amber-700 focus:outline-none font-sans"
                >
                  <option value="Paris">Paris (Place Vendôme)</option>
                  <option value="London">London (Mayfair)</option>
                  <option value="New York">New York (Upper East Side)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] uppercase tracking-[0.25em] text-stone-500 font-sans">
                  Subject / Look
                </label>
                <select
                  value={formData.look}
                  onChange={(e) => setFormData({ ...formData, look: e.target.value })}
                  className="border border-stone-900/10 bg-stone-50 p-3 text-xs text-stone-900 focus:border-amber-700 focus:outline-none font-sans"
                >
                  <option value="Aria — Monolith Coat">Look 01 — Aria (Monolith Coat)</option>
                  <option value="Luna — Ethereal Silk Gown">Look 02 — Luna (Ethereal Silk Gown)</option>
                  <option value="Nova — Structured Tailored Ensemble">Look 03 — Nova (Urban Futurism)</option>
                  <option value="General Commission">General Custom Commission</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.62rem] uppercase tracking-[0.25em] text-stone-500 font-sans">
                Notes & Occasion (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Share details regarding posture, special dates, or specific styling preferences..."
                className="border border-stone-900/10 bg-transparent p-3 text-xs text-stone-900 focus:border-amber-700 focus:outline-none font-sans resize-none"
              />
            </div>

            <Button type="submit" variant="dark" className="w-full justify-center">
              Submit Commission Inquiry
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
