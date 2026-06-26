"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;

    // Set initial position immediately to avoid flash at top left
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      // Use GSAP quickTo for performance
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    // Add hover effect for clickable elements
      const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Theme Detection: Determine if we are hovering over a dark section
      // Check against background colors or specific section IDs
      const isDarkSection = target.closest('.bg-\\[\\#111\\], .bg-\\[\\#1a1008\\], .bg-\\[\\#0f0905\\], .bg-\\[\\#5d3a2f\\], .bg-\\[\\#2a1610\\], .bg-\\[\\#111111\\], .bg-\\[\\#0a0503\\], footer, #testimonials, #featured, #contact, .film-strip-inner, .design-image');
      
      if (isDarkSection) {
        cursor.classList.add('on-dark');
      } else {
        cursor.classList.remove('on-dark');
      }

      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('nav-link') ||
        target.classList.contains('liquid-btn') ||
        target.classList.contains('floating-icon')
      ) {
        cursor.classList.add('hovering');
      }
    };

    const handleMouseOut = () => {
      cursor.classList.remove('hovering');
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block"></div>;
}
