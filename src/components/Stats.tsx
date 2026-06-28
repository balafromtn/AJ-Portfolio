"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const numbers = containerRef.current.querySelectorAll('.stat-number');
    
    numbers.forEach(num => {
      const target = parseInt(num.getAttribute('data-target') || "0");
      const counter = { val: 0 };
      
      gsap.to(counter, {
        val: target,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (num) {
            num.textContent = Math.round(counter.val).toString();
          }
        },
        scrollTrigger: {
          trigger: num,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "restart reset restart reset"
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section className="stats-testimonial-section py-20 md:py-24 bg-[#111] text-white relative overflow-hidden" id="testimonials">
      {/* Static Top Single Reel Stripe */}
      <div className="absolute top-0 left-0 w-full bg-[#1a1008] h-[18px] z-20 shadow-md">
        <div className="absolute inset-x-0 top-[4px] h-[10px] w-full" style={{ backgroundImage: 'repeating-linear-gradient(to right, rgba(247, 205, 181, 0.8) 0, rgba(247, 205, 181, 0.8) 12px, transparent 12px, transparent 22px)' }}></div>
      </div>

      <div className="absolute inset-0 bg-[url('/assets/time-line.png')] bg-center bg-cover opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-8 max-w-5xl relative z-10" ref={containerRef}>
        <div className="stats-grid flex flex-col md:flex-row justify-around items-center gap-12 md:gap-8">
          <div className="stat-item text-center">
            <div className="flex items-baseline justify-center">
              <h2 className="stat-number text-[5rem] md:text-[6rem] font-sans font-black leading-none text-white drop-shadow-md" data-target="40">0</h2>
              <span className="text-[3rem] md:text-[4rem] font-sans font-black text-white ml-1">+</span>
            </div>
            <p className="tracking-[0.2em] font-alkatra font-bold text-white/80 mt-2 text-lg md:text-xl uppercase">HAPPY CLIENTS</p>
          </div>
          <div className="stat-item text-center">
            <div className="flex items-baseline justify-center">
              <h2 className="stat-number text-[5rem] md:text-[6rem] font-sans font-black leading-none text-white drop-shadow-md" data-target="2">0</h2>
              <span className="text-[3rem] md:text-[4rem] font-sans font-black text-white ml-1">M+</span>
            </div>
            <p className="tracking-[0.2em] font-alkatra font-bold text-white/80 mt-2 text-lg md:text-xl uppercase">VIEWS GENERATED</p>
          </div>
          <div className="stat-item text-center">
            <div className="flex items-baseline justify-center">
              <h2 className="stat-number text-[5rem] md:text-[6rem] font-sans font-black leading-none text-white drop-shadow-md" data-target="3">0</h2>
              <span className="text-[3rem] md:text-[4rem] font-sans font-black text-white ml-1">+</span>
            </div>
            <p className="tracking-[0.2em] font-alkatra font-bold text-white/80 mt-2 text-lg md:text-xl uppercase">YEARS EXPERIENCE</p>
          </div>
        </div>
      </div>

      {/* Static Bottom Single Reel Stripe */}
      <div className="absolute bottom-0 left-0 w-full bg-[#1a1008] h-[18px] z-20 shadow-md">
        <div className="absolute inset-x-0 top-[4px] h-[10px] w-full" style={{ backgroundImage: 'repeating-linear-gradient(to right, rgba(247, 205, 181, 0.8) 0, rgba(247, 205, 181, 0.8) 12px, transparent 12px, transparent 22px)' }}></div>
      </div>
    </section>
  );
}
