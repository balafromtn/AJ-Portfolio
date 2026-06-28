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

  const testimonials = [
    { 
      quote: "The caption hooks completely changed how our reels performed. Clean edits, great pacing, and exactly what we needed.", 
      author: "ARUN KUMAR",
      role: "OWNER, SERVE BADMINTON ACADEMY"
    },
    { 
      quote: "Our TV commercial looked professional and engaging. The final reel brought our products to life and impressed our customers.", 
      author: "KARTHIK RAJ",
      role: "OWNER, Sanyou TV MART"
    },
    { 
      quote: "The motion graphics reel exceeded my expectations. It looked premium, grabbed attention instantly, and my audience absolutely loved it.", 
      author: "ASHOK KUMAR",
      role: "CONTENT CREATOR"
    },
    { 
      quote: "The birthday photo design was beautifully crafted and loved by everyone. It made the celebration feel extra special.", 
      author: "SURESH",
      role: "CLIENT - BIRTHDAY GREETING DESIGN"
    }
  ];

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const cards = gsap.utils.toArray('.testimonial-card') as HTMLElement[];
    
    // Set initial state
    cards.forEach((card, i) => {
      const tilts = [-6, 4, -5, 6];
      gsap.set(card, { 
        rotation: tilts[i % tilts.length], 
        transformOrigin: "center center",
        y: "100vh" // All cards start below screen
      });
    });

    // Create a master timeline locked to the section's scroll progress
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // Starts when section hits top of screen
        end: "bottom bottom", // Ends when bottom of section hits bottom of screen
        scrub: true,
      }
    });

    // Sequence the cards coming up one by one
    cards.forEach((card, i) => {
      // Bring the new card up. Pause before subsequent cards.
      tl.to(card, { y: 0, ease: "none", duration: 1 }, i === 0 ? undefined : "+=0.5");
      
      // Shrink all previous cards simultaneously using ABSOLUTE values
      for (let j = 0; j < i; j++) {
        const shrinkSteps = i - j; // How many times has this card been pushed back?
        tl.to(cards[j], { 
          scale: 1 - (shrinkSteps * 0.03), 
          y: -(shrinkSteps * 8), 
          ease: "none", 
          duration: 1 
        }, "<"); // "<" means perfectly synchronized with the card coming up
      }
    });

  }, { scope: containerRef });

  return (
    <>
      {/* 400vh gives enough scroll distance for 4 cards to come up smoothly */}
      <section ref={containerRef} className="relative font-sans w-full h-[350vh]" style={{ backgroundColor: 'var(--bg-color)', backgroundImage: 'radial-gradient(var(--dot-color) 2px, transparent 2px)', backgroundSize: '20px 20px', backgroundAttachment: 'fixed' }}>
        
        {/* SINGLE STICKY WRAPPER: Holds everything on screen until the section ends, then everything moves up TOGETHER */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0">
            
            {/* KIND WORDS BACKGROUND */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="relative flex items-center justify-center w-[85vw] md:w-[75vw]">
                <h1 className="w-full font-black leading-[0.85] uppercase text-white flex flex-col items-center"
                    style={{ 
                      WebkitTextStroke: '2.5px var(--dark-brown, #5d3a2f)',
                      textShadow: '0 10px 30px rgba(0,0,0,0.05)',
                      fontSize: 'clamp(6rem, 20vw, 30rem)'
                    }}>
                    <span>KIND</span>
                    <span className="relative">
                      <div className="absolute left-[10%] md:left-[15%] -top-[25%] md:-top-[30%] z-20 px-4 md:px-6 py-1 md:py-2 text-[0.8rem] md:text-xl lg:text-2xl font-black transform -rotate-[15deg] tracking-widest shadow-[4px_4px_0_rgba(0,0,0,0.2)] text-white leading-normal"
                           style={{ backgroundColor: 'var(--dark-brown, #5d3a2f)', WebkitTextStroke: '0px' }}>
                        TESTIMONIAL
                      </div>
                      WORDS
                    </span>
                </h1>
              </div>
            </div>

            {/* CARDS STACK */}
            <div className="relative z-10 w-full max-w-[85%] md:max-w-2xl">
              {/* This wrapper gives the absolute cards a height context so they are centered vertically in the sticky screen */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] max-h-[50vh]">
                {testimonials.map((t, i) => (
                  <div 
                      key={i} 
                      className="testimonial-card absolute inset-0 w-full h-fit bg-white/90 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-10 md:p-14 border border-white/40 rounded-2xl"
                      style={{ zIndex: i + 10 }}
                  >
                      {/* Hollow Slanted Quotes Icon */}
                      <div className="absolute top-6 left-6 md:top-8 md:left-8 opacity-60">
                        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--dark-brown, #5d3a2f)" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                          <path d="M5 10 L10 10 L8 16 L3 16 Z M13 10 L18 10 L16 16 L11 16 Z" />
                        </svg>
                      </div>
                      
                      <h2 className="text-center font-alkatra text-base md:text-xl lg:text-2xl font-medium uppercase mt-8 mb-10 tracking-wide leading-tight" style={{ color: 'var(--dark-brown, #5d3a2f)' }}>
                        {t.quote}
                      </h2>
                      <div className="text-right">
                        <p className="font-black text-xs md:text-lg uppercase tracking-wider" style={{ color: 'var(--dark-brown, #5d3a2f)' }}>{t.author}</p>
                        <p className="font-bold text-[0.60rem] md:text-[0.70rem] uppercase tracking-widest opacity-70 mt-1" style={{ color: 'var(--dark-brown, #5d3a2f)' }}>{t.role}</p>
                      </div>
                  </div>
                ))}
              </div>
            </div>

        </div>
      </section>
    </>
  );
}
