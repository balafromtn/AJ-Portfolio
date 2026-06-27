"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-[#5d3a2f] hover:bg-[#45261d] text-white p-3 md:p-4 rounded-full shadow-[0_10px_20px_rgba(93,58,47,0.3)] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Go to top"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  );
}
