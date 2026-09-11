import React, { useEffect } from "react";
import Marquee from "../components/Marquee";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactLocation from "../components/ContactLocation";
import ContactAppointments from "../components/ContactAppointments";

const PAGE_TITLE = "Contact — ATELIER Haute Couture";

export default function Contact() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <ContactHero />
      <Marquee />
      <ContactForm />
      <ContactLocation />
      <ContactAppointments />
    </>
  );
}
