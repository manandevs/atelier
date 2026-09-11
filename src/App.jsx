import React, { useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Collection from "./components/Collection";
import Philosophy from "./components/Philosophy";
import Atelier from "./components/Atelier";
import Commission from "./components/Commission";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedLook, setSelectedLook] = useState("");

  const handleOpenEnquiry = (lookTitle = "") => {
    setSelectedLook(typeof lookTitle === "string" ? lookTitle : "");
    setEnquiryOpen(true);
  };

  return (
    <div className="bg-amber-100 min-h-screen relative">
      <AnnouncementBar />
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />
      <main>
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />
        <Marquee />
        <Collection onOpenEnquiry={handleOpenEnquiry} />
        <Philosophy />
        <Atelier />
        <Commission onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>
      <Footer />
      {/*
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        initialLook={selectedLook}
      />
       */}
    </div>
  );
}
