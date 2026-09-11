import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { useScrollToHash } from "./hooks/useScrollToHash";

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedLook, setSelectedLook] = useState("");

  useScrollToHash();

  const handleOpenEnquiry = (lookTitle = "") => {
    setSelectedLook(typeof lookTitle === "string" ? lookTitle : "");
    setEnquiryOpen(true);
  };

  return (
    <div className="bg-amber-100 min-h-screen relative">
      <AnnouncementBar />
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />
      <main>
        <Routes>
          <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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
