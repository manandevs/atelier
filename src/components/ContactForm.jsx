import React, { useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import Button from "./Button";
import { cn } from "@/lib/utils";

const SALON_CITIES = [
  { value: "Paris", label: "Paris (Place Vendôme)" },
  { value: "London", label: "London (Mayfair)" },
  { value: "New York", label: "New York (Upper East Side)" },
];

const SUBJECTS = [
  "Private Commission",
  "Salon Appointment",
  "Runway Archive Enquiry",
  "Press & Editorial",
  "Other Correspondence",
];

const FIELD_ORDER = ["name", "email", "phone", "message", "consent"];

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  city: "Paris",
  subject: "Private Commission",
  message: "",
  consent: false,
};

const inputClass =
  "border border-stone-900/10 bg-transparent p-3  text-stone-900 placeholder:text-stone-400 focus:border-amber-700 focus:outline-none transition-colors";

const selectClass =
  "border border-stone-900/10 bg-amber-100 p-3  text-stone-900 focus:border-amber-700 focus:outline-none transition-colors";

const labelClass = "text-[0.62rem] uppercase tracking-[0.25em] text-stone-500";

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please tell us who we are writing to.";
  }

  if (!values.email.trim()) {
    errors.email = "An email address is required so we may reply.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  // Telephone is optional, but validate the shape when one is supplied.
  if (
    values.phone.trim() &&
    !/^[+(\d][\d\s().-]{5,}$/.test(values.phone.trim())
  ) {
    errors.phone = "Please enter a valid telephone number, or leave it blank.";
  }

  if (!values.message.trim()) {
    errors.message = "Please share a few words about your enquiry.";
  } else if (values.message.trim().length < 20) {
    errors.message = "A little more detail, please — at least 20 characters.";
  }

  if (!values.consent) {
    errors.consent = "Please consent to being contacted by our concierge.";
  }

  return errors;
}

/**
 * Stubbed submit handler.
 *
 * Replace the timeout with the real transport (a fetch to the concierge
 * endpoint, a form service, etc.). It resolves with the payload so the success
 * state can address the patron by name, and rejects on failure so the form
 * surfaces its error state.
 */
async function submitEnquiry(values) {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  if (import.meta.env.DEV) {
    console.info("[ATELIER] Contact enquiry (stub):", values);
  }
  return { ok: true, ...values };
}

function FieldShell({ id, label, error, hint, className, children }) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-stone-400">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [ref, isVisible] = useReveal(0.1);
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [submittedName, setSubmittedName] = useState("");
  const fieldRefs = useRef({});

  const isLoading = status === "loading";

  const setField = (name) => (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const next = { ...values, [name]: value };
    setValues(next);

    // Clear a message as soon as its field becomes valid again.
    if (errors[name]) {
      const nextErrors = validate(next);
      setErrors((current) => ({ ...current, [name]: nextErrors[name] }));
    }
  };

  const handleBlur = (name) => () => {
    setTouched((current) => ({ ...current, [name]: true }));
    const nextErrors = validate(values);
    setErrors((current) => ({ ...current, [name]: nextErrors[name] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched(
      FIELD_ORDER.reduce((acc, name) => ({ ...acc, [name]: true }), {}),
    );

    const firstInvalid = FIELD_ORDER.find((name) => nextErrors[name]);
    if (firstInvalid) {
      setStatus("idle");
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    setStatus("loading");
    try {
      await submitEnquiry(values);
      setSubmittedName(values.name.trim());
      setStatus("success");
      setValues(EMPTY_FORM);
      setErrors({});
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  const errorFor = (name) => (touched[name] ? errors[name] : undefined);

  const describedBy = (name, hasHint) => {
    if (errorFor(name)) return `${name}-error`;
    return hasHint ? `${name}-hint` : undefined;
  };

  return (
    <section id="enquiry" className="py-12 px-4 lg:px-6">
      {/* Section Header */}
      <div className="max-w-xl pb-8">
        <span className="border border-amber-700/40 text-amber-700 bg-amber-600/5 px-2 rounded-full mb-2">
          Correspondence
        </span>
        <h2 className="text-3xl md:text-5xl text-stone-900">
          Write to
          <span className="block italic text-amber-700 font-light pl-[0.1em]">
            Our Concierge
          </span>
        </h2>
        <p className="text-stone-500 leading-relaxed font-light mt-4">
          Share the occasion, the silhouette you have in mind, and your
          preferred city. A member of our salon team will reply personally.
        </p>
      </div>

      <div
        ref={ref}
        className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Left Column: Form */}
        <div className="lg:col-span-7 border border-stone-900/10 p-6 md:p-8">
          {/* Status region — announced to assistive technology */}
          <div aria-live="polite" className="sr-only">
            {isLoading ? "Sending your enquiry." : ""}
            {status === "success" ? "Your enquiry has been received." : ""}
            {status === "error"
              ? "Your enquiry could not be sent. Please try again."
              : ""}
          </div>

          {status === "success" ? (
            <div className="py-12 flex flex-col items-center text-center gap-6">
              <span className="w-2.5 h-2.5 bg-amber-700 rotate-45" />
              <h3 className="text-2xl lg:text-3xl text-stone-900">
                Enquiry
                <span className="block italic text-amber-700 font-light pl-[0.1em]">
                  Received
                </span>
              </h3>
              <p className="text-stone-500 leading-relaxed font-light max-w-md">
                Thank you{submittedName ? `, ${submittedName}` : ""}. Our
                concierge will write to you within 24 hours to arrange your
                private consultation at Place Vendôme.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setStatus("idle");
                  setSubmittedName("");
                }}
                showArrow={true}
              >
                Send Another Enquiry
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-6"
            >
              {status === "error" && (
                <p
                  role="alert"
                  className="border border-red-700/40 bg-red-700/5 text-red-700  p-3"
                >
                  Your enquiry could not be sent just now. Please try again, or
                  write to concierge@atelier-couture.com.
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FieldShell id="name" label="Full Name" error={errorFor("name")}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    ref={(el) => {
                      fieldRefs.current.name = el;
                    }}
                    value={values.name}
                    onChange={setField("name")}
                    onBlur={handleBlur("name")}
                    placeholder="e.g. Comtesse de Grasse"
                    aria-required="true"
                    aria-invalid={Boolean(errorFor("name"))}
                    aria-describedby={describedBy("name")}
                    className={cn(inputClass, errorFor("name") && "border-red-700")}
                  />
                </FieldShell>

                <FieldShell
                  id="email"
                  label="Email Address"
                  error={errorFor("email")}
                >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    ref={(el) => {
                      fieldRefs.current.email = el;
                    }}
                    value={values.email}
                    onChange={setField("email")}
                    onBlur={handleBlur("email")}
                    placeholder="patron@domain.com"
                    aria-required="true"
                    aria-invalid={Boolean(errorFor("email"))}
                    aria-describedby={describedBy("email")}
                    className={cn(
                      inputClass,
                      errorFor("email") && "border-red-700",
                    )}
                  />
                </FieldShell>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FieldShell
                  id="phone"
                  label="Telephone (Optional)"
                  error={errorFor("phone")}
                  hint="Include your country code."
                >
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    ref={(el) => {
                      fieldRefs.current.phone = el;
                    }}
                    value={values.phone}
                    onChange={setField("phone")}
                    onBlur={handleBlur("phone")}
                    placeholder="+33 1 42 68 00 00"
                    aria-invalid={Boolean(errorFor("phone"))}
                    aria-describedby={describedBy("phone", true)}
                    className={cn(
                      inputClass,
                      errorFor("phone") && "border-red-700",
                    )}
                  />
                </FieldShell>

                <FieldShell id="city" label="Preferred Salon City">
                  <select
                    id="city"
                    name="city"
                    value={values.city}
                    onChange={setField("city")}
                    className={selectClass}
                  >
                    {SALON_CITIES.map((city) => (
                      <option key={city.value} value={city.value}>
                        {city.label}
                      </option>
                    ))}
                  </select>
                </FieldShell>
              </div>

              <FieldShell id="subject" label="Nature of Enquiry">
                <select
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={setField("subject")}
                  className={selectClass}
                >
                  {SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </FieldShell>

              <FieldShell
                id="message"
                label="Your Message"
                error={errorFor("message")}
                hint="Occasion, timeline, and any silhouette you have in mind."
              >
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  ref={(el) => {
                    fieldRefs.current.message = el;
                  }}
                  value={values.message}
                  onChange={setField("message")}
                  onBlur={handleBlur("message")}
                  placeholder="Share details regarding the occasion, dates, or specific styling preferences..."
                  aria-required="true"
                  aria-invalid={Boolean(errorFor("message"))}
                  aria-describedby={describedBy("message", true)}
                  className={cn(
                    inputClass,
                    "resize-none",
                    errorFor("message") && "border-red-700",
                  )}
                />
              </FieldShell>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    ref={(el) => {
                      fieldRefs.current.consent = el;
                    }}
                    checked={values.consent}
                    onChange={setField("consent")}
                    onBlur={handleBlur("consent")}
                    aria-required="true"
                    aria-invalid={Boolean(errorFor("consent"))}
                    aria-describedby={
                      errorFor("consent") ? "consent-error" : undefined
                    }
                    className={cn(
                      "mt-1 h-4 w-4 shrink-0 accent-amber-700 border border-stone-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2",
                      errorFor("consent") && "border-red-700",
                    )}
                  />
                  <label
                    htmlFor="consent"
                    className=" text-stone-500 font-light"
                  >
                    I consent to ATELIER contacting me about this enquiry.
                  </label>
                </div>
                {errorFor("consent") && (
                  <p id="consent-error" className="text-xs text-red-700">
                    {errorFor("consent")}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="secondary"
                disabled={isLoading}
                aria-busy={isLoading}
                showArrow={!isLoading}
                className="w-full justify-center self-stretch sm:w-auto sm:self-start sm:justify-between"
              >
                {isLoading ? "Sending Enquiry…" : "Submit Enquiry"}
              </Button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
