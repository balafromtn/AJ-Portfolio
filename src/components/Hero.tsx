"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
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

  useGSAP(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

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
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        // Trigger radius for movement (e.g., 250px)
        const triggerRadius = 250;
        
        const type = icon.getAttribute("data-icon-type") || "picsart";
        const baseRot = iconBaseRotations[type];

        if (distance < triggerRadius) {
          // Calculate movement intensity based on how close cursor is
          const intensity = (1 - distance / triggerRadius);
          
          gsap.to(icon, {
            x: -(distX * 0.2 * intensity),
            y: -(distY * 0.2 * intensity),
            rotation: baseRot + (distX * 0.05 * intensity),
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto"
          });
        } else {
          // Revert if cursor is far
          gsap.to(icon, {
            x: 0,
            y: 0,
            rotation: baseRot,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)",
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

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: containerRef });

  const setIconFloatRef = (index: number) => (el: HTMLDivElement | null) => {
    floatRefs.current[index] = el;
  };

  const setIconHoverRef = (index: number) => (el: HTMLImageElement | null) => {
    iconRefs.current[index] = el;
  };

  return (
    <header className="hero-section relative min-h-screen w-full flex flex-col justify-center items-center overflow-x-hidden pt-24 pb-[15vh]" id="home" ref={containerRef}>
      <Navbar />

      {/* Large watermark title behind everything (Bangers font) */}
      <h1 className="hero-watermark absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-bangers text-[16vw] whitespace-nowrap z-0 text-white drop-shadow-[8px_8px_0_rgba(92,38,38,0.2)] tracking-widest pointer-events-none select-none">
        AIREN PIXEL
      </h1>

      <div className="hero-content relative z-10 flex flex-col items-center mt-4 h-full justify-center w-full">
        {/* Image Wrapper - ensuring it stays within viewport */}
        <div className="hero-image-wrapper relative w-[320px] h-[450px] md:w-[480px] md:h-[650px] lg:w-[560px] lg:h-[720px] mx-auto z-10">
          
          {/* Subtitle — "HI, I'M A VIDEO EDITOR" (Alkatra font) */}
          <div className="absolute top-[20%] -right-[10%] md:-right-[5%] whitespace-nowrap z-20 hidden sm:block">
            <span className="font-alkatra text-[#5d3a2f] text-2xl font-bold tracking-widest">HI, I&apos;M A VIDEO EDITOR</span>
          </div>

          <div className="background-circle absolute top-[45%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(190,145,115,0.45)_0%,rgba(190,145,115,0.15)_50%,transparent_70%)] z-0 pointer-events-none"></div>

          <Image
            src="/assets/main.png"
            alt="Ajay Kumar"
            width={560}
            height={720}
            priority
            className="hero-main-img relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] pointer-events-none"
          />

          {/* Picsart - top right */}
          <div ref={setIconFloatRef(0)} className="absolute z-30 w-[110px] md:w-[140px] top-[5%] -right-[10%] md:-right-[20%]">
            <img
              ref={setIconHoverRef(0)}
              src="/assets/picsart-icon.webp"
              alt="Picsart"
              className="floating-icon icon-picsart drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] w-full h-auto"
              data-icon-type="picsart"
              style={{ transform: 'rotate(12deg)' }}
            />
          </div>
          
          {/* CapCut - bottom left */}
          <div ref={setIconFloatRef(1)} className="absolute z-30 w-[110px] md:w-[140px] top-[55%] -left-[20%]">
            <img
              ref={setIconHoverRef(1)}
              src="/assets/capcut-hero.webp"
              alt="CapCut"
              className="floating-icon icon-capcut drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] w-full h-auto"
              data-icon-type="capcut"
              style={{ transform: 'rotate(-15deg)' }}
            />
          </div>

          {/* Alight Motion - bottom right */}
          <div ref={setIconFloatRef(2)} className="absolute z-30 w-[130px] md:w-[160px] top-[60%] -right-[20%] md:-right-[25%]">
            <img
              ref={setIconHoverRef(2)}
              src="/assets/alight-motion-hero.webp"
              alt="Alight Motion"
              className="floating-icon icon-alight drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] w-full h-auto"
              data-icon-type="alight"
              style={{ transform: 'rotate(10deg)' }}
            />
          </div>
          
          {/* CTA Buttons - positioned tightly to the image wrapper */}
          <div className="hero-cta absolute bottom-[0%] md:bottom-[2%] left-1/2 -translate-x-1/2 flex gap-4 md:gap-8 z-30 w-max">
            <Link href="#works" className="liquid-btn glass-btn font-alkatra !font-bold">
              SHOWREEL
            </Link>
            <Link href="#contact" className="liquid-btn glass-btn font-alkatra !font-bold">
              HIRE ME
            </Link>
          </div>
        </div>
      </div>

      {/* Sloped Horizontal Film Strip Marquee, strictly at the bottom */}
      <div className="hero-film-strip absolute -bottom-[2%] md:-bottom-[4%] left-1/2 -translate-x-1/2 w-[110%] z-40 rotate-2 scale-105 pointer-events-none shadow-2xl origin-center">
        <div className="film-strip-inner film-border bg-[#1a1008] text-[#f7cdb5]">
          <div className="marquee-container py-3 md:py-4 overflow-hidden w-full">
            <div className="animate-marquee whitespace-nowrap inline-block font-alkatra text-xl md:text-3xl font-bold tracking-[6px] drop-shadow-md">
              <span className="pr-16">• AIREN PIXEL • VIDEO EDITING • MOTION GRAPHICS</span>
              <span className="pr-16">• AIREN PIXEL • VIDEO EDITING • MOTION GRAPHICS</span>
              <span className="pr-16">• AIREN PIXEL • VIDEO EDITING • MOTION GRAPHICS</span>
              <span className="pr-16">• AIREN PIXEL • VIDEO EDITING • MOTION GRAPHICS</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
