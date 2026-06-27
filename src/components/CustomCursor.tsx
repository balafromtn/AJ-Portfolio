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

      const isLink = target.tagName.toLowerCase() === 'a' || target.closest('a');
      const isButton = target.tagName.toLowerCase() === 'button' || target.closest('button');
      const isNavLink = target.classList.contains('nav-link') || target.classList.contains('liquid-btn');
      
      // Exclude social app icons since they have their own huge hover state
      const isAppIcon = target.closest('.social-icons');

      if ((isLink || isButton || isNavLink) && !isAppIcon) {
        cursor.classList.add('hovering');
      } else {
        cursor.classList.remove('hovering');
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block"></div>;
}
