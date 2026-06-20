"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    gsap.utils.toArray('.testimonial-card').forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section className="bg-[#111] pb-24 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-[url('/assets/time-line.png')] bg-center bg-cover opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="testimonial-container relative py-16">
          <div className="testimonial-bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-0">
            <h1 className="text-[6rem] md:text-[12rem] text-center text-white/5 font-heading leading-none pointer-events-none">
              KIND WORDS
            </h1>
          </div>
          
          <div className="testimonial-cards-wrapper relative z-10 max-w-[600px] mx-auto pt-10">
            <div className="section-badge tilt-badge-left absolute -top-8 -left-12 z-20 inline-block bg-[#5d3a2f] text-white px-6 py-2 text-2xl transform rotate-3 shadow-[4px_4px_0_rgba(0,0,0,0.2)] font-heading">
              TESTIMONIAL
            </div>
            
            <div className="testimonial-card bg-white text-[#5d3a2f] p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.3)] mb-8 sticky top-[120px] rounded-lg origin-top z-10">
              <div className="w-10 h-10 bg-[#5d3a2f] mb-4" style={{ WebkitMask: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z\"/></svg>') no-repeat center", mask: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z\"/></svg>') no-repeat center" }}></div>
              <p className="font-heading text-4xl leading-tight mb-4">NICE WORK HIGHLY RECOMMENDED!</p>
              <p className="font-bold text-lg text-right">~ CLIENT</p>
            </div>

            <div className="testimonial-card bg-white text-[#5d3a2f] p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.3)] mb-8 sticky top-[140px] rounded-lg origin-top z-20">
              <div className="w-10 h-10 bg-[#5d3a2f] mb-4" style={{ WebkitMask: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z\"/></svg>') no-repeat center", mask: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z\"/></svg>') no-repeat center" }}></div>
              <p className="font-heading text-4xl leading-tight mb-4">AMAZING EDITS, EXCEEDED MY EXPECTATIONS!</p>
              <p className="font-bold text-lg text-right">~ CLIENT</p>
            </div>

            <div className="testimonial-card bg-white text-[#5d3a2f] p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.3)] mb-8 sticky top-[160px] rounded-lg origin-top z-30">
              <div className="w-10 h-10 bg-[#5d3a2f] mb-4" style={{ WebkitMask: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z\"/></svg>') no-repeat center", mask: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z\"/></svg>') no-repeat center" }}></div>
              <p className="font-heading text-4xl leading-tight mb-4">VERY PROFESSIONAL AND CREATIVE. WILL HIRE AGAIN!</p>
              <p className="font-bold text-lg text-right">~ CLIENT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
