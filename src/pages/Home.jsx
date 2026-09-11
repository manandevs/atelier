import React from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Collection from "../components/Collection";
import Philosophy from "../components/Philosophy";
import Atelier from "../components/Atelier";
import Commission from "../components/Commission";

export default function Home({ onOpenEnquiry }) {
  return (
    <>
      <Hero onOpenEnquiry={() => onOpenEnquiry()} />
      <Marquee />
      <Collection onOpenEnquiry={onOpenEnquiry} />
      <Philosophy />
      <Atelier />
      <Commission onOpenEnquiry={() => onOpenEnquiry()} />
    </>
  );
}
