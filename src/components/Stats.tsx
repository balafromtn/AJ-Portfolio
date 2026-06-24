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
      ScrollTrigger.create({
        trigger: num,
        start: "top 85%",
        onEnter: () => {
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
            }
          });
        },
        once: true
      });
    });
  }, { scope: containerRef });

  return (
    <section className="stats-testimonial-section pt-24 pb-12 bg-[#111] text-white relative" id="testimonials">
      {/* Static Top Single Reel Stripe */}
      <div className="absolute top-0 left-0 w-full bg-[#1a1008] h-[18px] z-20 shadow-md">
        <div className="absolute inset-x-0 top-[4px] h-[10px] w-full" style={{ backgroundImage: 'repeating-linear-gradient(to right, rgba(247, 205, 181, 0.8) 0, rgba(247, 205, 181, 0.8) 12px, transparent 12px, transparent 22px)' }}></div>
      </div>

      <div className="absolute inset-0 bg-[url('/assets/time-line.png')] bg-center bg-cover opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-8 max-w-5xl relative z-10" ref={containerRef}>
        <div className="stats-grid flex flex-col md:flex-row justify-around items-center gap-12 border-b-2 border-white/20 pb-12 mb-16">
          <div className="stat-item text-center">
            <div className="flex items-baseline justify-center">
              <h2 className="stat-number text-[5rem] font-bangers leading-none" data-target="40">0</h2>
              <span className="text-[3rem] font-bangers">+</span>
            </div>
            <p className="tracking-widest font-semibold mt-2">HAPPY CLIENTS</p>
          </div>
          <div className="stat-item text-center">
            <div className="flex items-baseline justify-center">
              <h2 className="stat-number text-[5rem] font-bangers leading-none" data-target="2">0</h2>
              <span className="text-[3rem] font-bangers">M+</span>
            </div>
            <p className="tracking-widest font-semibold mt-2">VIEWS GENERATED</p>
          </div>
          <div className="stat-item text-center">
            <div className="flex items-baseline justify-center">
              <h2 className="stat-number text-[5rem] font-bangers leading-none" data-target="3">0</h2>
              <span className="text-[3rem] font-bangers">+</span>
            </div>
            <p className="tracking-widest font-semibold mt-2">YEARS EXPERIENCE</p>
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
