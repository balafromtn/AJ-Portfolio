"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";

const iconBaseRotations: Record<string, number> = {
  picsart: 12,
  capcut: -15,
  alight: 10,
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const iconRefs = useRef<(HTMLImageElement | null)[]>([]);
  const floatRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const prefix = "HI, I'M A ";
    const words = ["VIDEO EDITOR", "MOTION GRAPHIC DESIGNER"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const tick = () => {
      const currentWord = words[wordIndex];
      setTypedText(prefix + currentWord.substring(0, charIndex));

      if (isDeleting) {
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timeoutId = setTimeout(tick, 500);
        } else {
          timeoutId = setTimeout(tick, 40);
        }
      } else {
        charIndex++;
        if (charIndex > currentWord.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, 3000);
        } else {
          timeoutId = setTimeout(tick, 120);
        }
      }
    };

    timeoutId = setTimeout(tick, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;

    // 1. Continuous floating animation applied to the WRAPPER divs
    floatRefs.current.forEach((wrapper, i) => {
      if (!wrapper) return;
      gsap.to(wrapper, {
        y: "+=20",
        duration: 2 + i * 0.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    });

    // 2. Proximity mouse interaction applied to the inner IMG elements
    const handleMouseMove = (e: MouseEvent) => {
      iconRefs.current.forEach((icon) => {
        if (!icon) return;
        const rect = icon.getBoundingClientRect();
        
        // Calculate center of icon
        const iconCenterX = rect.left + rect.width / 2;
        const iconCenterY = rect.top + rect.height / 2;
        
        // Calculate distance from cursor to icon center
        const distX = e.clientX - iconCenterX;
        const distY = e.clientY - iconCenterY;
        
        // Maximum distance for the effect to trigger
        const maxDist = 300;
        const dist = Math.sqrt(distX * distX + distY * distY);
        
        const type = icon.getAttribute("data-icon-type") || "picsart";
        const baseRot = iconBaseRotations[type];

        if (dist < maxDist) {
          // Calculate repulsion (closer = stronger push)
          const force = (maxDist - dist) / maxDist;
          
          // Use opposite direction of cursor (-distX, -distY)
          const moveX = -(distX / dist) * force * 30; // Max 30px move
          const moveY = -(distY / dist) * force * 30;
          
          gsap.to(icon, {
            x: moveX,
            y: moveY,
            rotation: baseRot + (distX * 0.05 * force),
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto"
          });
        } else {
          // Return to origin if mouse is far
          gsap.to(icon, {
            x: 0,
            y: 0,
            rotation: baseRot,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
            overwrite: "auto"
          });
        }
      });
    };

    const handleMouseLeave = () => {
      iconRefs.current.forEach((icon) => {
        if (!icon) return;
        const type = icon.getAttribute("data-icon-type") || "picsart";
        const baseRot = iconBaseRotations[type];
        gsap.to(icon, {
          x: 0,
          y: 0,
          rotation: baseRot,
          duration: 1,
          ease: "elastic.out(1, 0.4)",
          overwrite: "auto"
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: containerRef });

  const setIconFloatRef = (index: number) => (el: HTMLDivElement | null) => {
    floatRefs.current[index] = el;
  };

  const setIconHoverRef = (index: number) => (el: HTMLImageElement | null) => {
    iconRefs.current[index] = el;
  };

  return (
    <header className="hero-section relative w-full flex flex-col justify-center items-center pt-2 md:pt-4 pb-0" id="home" ref={containerRef}>
      <Navbar />

      <div className="hero-content relative z-10 flex flex-col items-center mt-0 justify-center w-full">
        {/* Image Wrapper - scale responsively based on viewport height, carefully bounded so it doesn't clip */}
        <div className="hero-image-wrapper relative w-[95vw] sm:w-[85vw] md:w-auto h-auto md:h-[92vh] max-w-[650px] md:max-w-none max-h-[1050px] aspect-[560/720] mx-auto z-10 mt-4 md:mt-8 mb-0">
          
          {/* Large crisp translucent brown circle behind everything */}
          <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[75vw] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] rounded-full bg-[#8c5946]/15 z-[-1] pointer-events-none"></div>

          {/* Background Watermark and Subtitle Group - pinned EXACTLY to the center of the image wrapper */}
          <div className="hero-title-group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-max pointer-events-none select-none">
            {/* Subtitle — "HI, I'M A VIDEO EDITOR" (Alkatra font) positioned absolute to the top-center of AIREN PIXEL */}
            <div className="absolute -top-[16%] md:-top-[20%] left-1/2 -translate-x-1/2 whitespace-nowrap z-10 w-max text-center">
              <span className="font-alkatra text-[#5d3a2f] text-sm sm:text-xl md:text-3xl font-bold tracking-[0.1em] sm:tracking-[0.2em] drop-shadow-sm">{typedText}<span className="animate-pulse border-r-[2px] sm:border-r-[3px] border-[#5d3a2f] ml-[2px]"></span></span>
            </div>
            {/* Large watermark title behind everything (Bangers font) */}
            <h1 className="hero-watermark font-bangers text-[18vw] leading-none whitespace-nowrap text-white drop-shadow-[8px_8px_0_rgba(92,38,38,0.2)] tracking-widest">
              AIREN PIXEL
            </h1>
          </div>

          <Image
            src="/assets/main.png"
            alt="Ajay Kumar"
            width={600}
            height={770}
            priority
            className="hero-main-img relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] pointer-events-none"
          />

          {/* Picsart - top right */}
          <div ref={setIconFloatRef(0)} className="absolute z-30 w-[80px] md:w-[110px] top-[30%] md:top-[35%] -right-[5%] md:-right-[10%]">
            <div className="w-full h-full animate-wave-1">
              <img
                ref={setIconHoverRef(0)}
                src="/assets/picsart-icon.webp"
                alt="Picsart"
                className="floating-icon icon-picsart drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] w-full h-auto"
                data-icon-type="picsart"
                style={{ transform: 'rotate(12deg)' }}
              />
            </div>
          </div>
          
          {/* CapCut - bottom left */}
          <div ref={setIconFloatRef(1)} className="absolute z-30 w-[90px] md:w-[115px] top-[55%] -left-[20%]">
            <div className="w-full h-full animate-wave-2">
              <img
                ref={setIconHoverRef(1)}
                src="/assets/capcut-hero.webp"
                alt="CapCut"
                className="floating-icon icon-capcut drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] w-full h-auto"
                data-icon-type="capcut"
                style={{ transform: 'rotate(-15deg)' }}
              />
            </div>
          </div>

          {/* Alight Motion - bottom right */}
          <div ref={setIconFloatRef(2)} className="absolute z-30 w-[130px] md:w-[160px] top-[60%] -right-[20%] md:-right-[25%]">
            <div className="w-full h-full animate-wave-3">
              <img
                ref={setIconHoverRef(2)}
                src="/assets/alight-motion-hero.webp"
                alt="Alight Motion"
                className="floating-icon icon-alight drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] w-full h-auto"
                data-icon-type="alight"
                style={{ transform: 'rotate(10deg)' }}
              />
            </div>
          </div>
          
          {/* CTA Buttons - positioned tightly to the image wrapper */}
          <div className="hero-cta absolute bottom-[6%] md:bottom-[8%] left-1/2 -translate-x-1/2 flex gap-4 md:gap-8 z-30 w-max">
            <Link href="#works" className="liquid-btn glass-btn font-alkatra !font-bold">
              SHOWREEL
            </Link>
            <Link href="#contact" className="liquid-btn glass-btn font-alkatra !font-bold">
              HIRE ME
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
