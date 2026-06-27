"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Showreel() {
  const [unmutedVideoIndex, setUnmutedVideoIndex] = React.useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.design-item');
    
    items.forEach((item: any, i) => {
      // Don't animate the last item scaling down
      if (i === items.length - 1) return;
      
      gsap.to(item, {
        scale: 0.85,
        opacity: 0,
        scrollTrigger: {
          trigger: items[i + 1],
          start: "top bottom",
          end: "top 40%",
          scrub: true,
        }
      });
    });
  }, { scope: containerRef });

  const VolumeButton = ({ index }: { index: number }) => (
    <button
      onClick={() => setUnmutedVideoIndex(unmutedVideoIndex === index ? null : index)}
      className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-black/60 p-2 md:p-3 rounded-full hover:bg-black/80 transition-colors text-white"
    >
      {unmutedVideoIndex !== index ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
      )}
    </button>
  );

  return (
    <section className="showreel-section bg-transparent" id="works" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pt-24 md:pt-32 pb-12">
        <div className="flex justify-center items-center">
          <h2 className="text-[14vw] md:text-[8vw] font-black uppercase tracking-tighter leading-none flex">
            <span className="text-transparent" style={{ WebkitTextStroke: '3px var(--dark-brown, #5d3a2f)' }}>SHOW</span>
            <span className="text-[#5d3a2f]">REEL</span>
          </h2>
        </div>
      </div>
      
      <div className="relative w-full pb-32">
        {/* ITEM 1 */}
        <div className="design-item sticky top-0 h-[100dvh] w-full flex items-center justify-center bg-transparent z-10 origin-top">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
            <div className="design-image w-full md:w-[40%] lg:w-[35%] order-1 rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] group z-0 film-border-frame p-3 md:p-5 bg-[#111] transform -rotate-2 hover:rotate-0 transition-all duration-500 ease-out cursor-pointer hover:scale-105 shrink-0 mx-auto md:mx-0">
              <div className="relative w-full overflow-hidden">
                <VolumeButton index={0} />
                <video autoPlay loop muted={unmutedVideoIndex !== 0} playsInline className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-sm">
                  <source src="/assets/videos/fast-cut.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="design-text w-full md:w-[48%] lg:w-[52%] order-2 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/40 z-10 transition-transform duration-500 hover:-translate-y-2 shrink-0">
              <div className="text-[#5d3a2f] font-black text-sm uppercase tracking-widest mb-4">01 / FAST CUT</div>
              <h3 className="text-3xl md:text-5xl font-black text-[#5d3a2f] uppercase leading-tight mb-4">MOMENTS MADE<br/>LEGENDARY</h3>
              <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed uppercase">CINEMATIC STORYTELLING AND IMPACTFUL EDITS THAT TURN HIGHLIGHTS INTO UNFORGETTABLE MEMORIES.</p>
            </div>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="design-item sticky top-0 h-[100dvh] w-full flex items-center justify-center bg-transparent z-20 origin-top">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
            <div className="design-text w-full md:w-[48%] lg:w-[52%] order-2 md:order-1 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/40 z-10 transition-transform duration-500 hover:-translate-y-2 shrink-0">
              <div className="text-[#5d3a2f] font-black text-sm uppercase tracking-widest mb-4">02 / PODCAST CAPTIONS</div>
              <h3 className="text-3xl md:text-5xl font-black text-[#5d3a2f] uppercase leading-tight mb-4">ENGAGE & RETAIN</h3>
              <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed uppercase">DYNAMIC CAPTIONS AND ENGAGING VISUAL HOOKS DESIGNED TO MAXIMIZE AUDIENCE RETENTION IN PODCASTS AND REELS THROUGH SEAMLESS STORYTELLING, PRECISE EDITING.</p>
            </div>
            <div className="design-image w-full md:w-[40%] lg:w-[35%] order-1 md:order-2 rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] group z-0 film-border-frame p-3 md:p-5 bg-[#111] transform rotate-3 hover:rotate-0 transition-all duration-500 ease-out cursor-pointer hover:scale-105 shrink-0 mx-auto md:mx-0">
              <div className="relative w-full overflow-hidden">
                <VolumeButton index={1} />
                <video autoPlay loop muted={unmutedVideoIndex !== 1} playsInline className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-sm">
                  <source src="/assets/videos/batmiton.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="design-item sticky top-0 h-[100dvh] w-full flex items-center justify-center bg-transparent z-30 origin-top">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
            <div className="design-image w-full md:w-[40%] lg:w-[35%] order-1 rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] group z-0 film-border-frame p-3 md:p-5 bg-[#111] transform -rotate-3 hover:rotate-0 transition-all duration-500 ease-out cursor-pointer hover:scale-105 shrink-0 mx-auto md:mx-0">
              <div className="relative w-full overflow-hidden">
                <VolumeButton index={2} />
                <video autoPlay loop muted={unmutedVideoIndex !== 2} playsInline className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-sm">
                  <source src="/assets/videos/aravindh_motion.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="design-text w-full md:w-[48%] lg:w-[52%] order-2 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/40 z-10 transition-transform duration-500 hover:-translate-y-2 shrink-0">
              <div className="text-[#5d3a2f] font-black text-sm uppercase tracking-widest mb-4">03 / TRENDING MOTION</div>
              <h3 className="text-3xl md:text-5xl font-black text-[#5d3a2f] uppercase leading-tight mb-4">TRENDING VISUALS</h3>
              <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed uppercase">EYE-CATCHING MOTION GRAPHICS AND SEAMLESS ANIMATIONS THAT ELEVATE YOUR CONTENT TO THE NEXT LEVEL.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
