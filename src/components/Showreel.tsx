"use client";

import React from 'react';

export default function Showreel() {
  return (
    <section className="showreel-section py-24 md:py-32" id="works">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col items-center mb-24 md:mb-32">
          <h2 className="text-[14vw] md:text-[8vw] font-black uppercase tracking-tighter text-transparent leading-none"
              style={{ WebkitTextStroke: '3px var(--dark-brown, #5d3a2f)' }}>
            SHOW
          </h2>
          <h2 className="text-[14vw] md:text-[8vw] font-black uppercase tracking-tighter text-[#5d3a2f] leading-none -mt-4 md:-mt-8">
            REEL
          </h2>
        </div>
        
        <div className="flex flex-col gap-32 md:gap-48">
          {/* ITEM 1 */}
          <div className="design-item flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
            <div className="design-image w-full md:w-[42%] lg:w-[40%] order-1 rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] group z-0 film-border-frame p-3 md:p-5 bg-[#111] transform -rotate-2 hover:rotate-0 transition-all duration-500 ease-out cursor-pointer hover:scale-105 shrink-0">
              <div className="relative w-full overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-sm">
                  <source src="/assets/videos/bike-edit.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="design-text w-full md:w-[48%] lg:w-[45%] order-2 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/40 z-10 transition-transform duration-500 hover:-translate-y-2 shrink-0">
              <div className="text-[#5d3a2f] font-black text-sm uppercase tracking-widest mb-4">01 / BIKE EDIT</div>
              <h3 className="text-3xl md:text-5xl font-black text-[#5d3a2f] uppercase leading-tight mb-4">SPEED. ENERGY.<br/>IMPACT.</h3>
              <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed uppercase">DYNAMIC SPEED RAMPS AND CINEMATIC TRANSITIONS CRAFTED TO MAKE EVERY FRAME FEEL ALIVE.</p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="design-item flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 mt-24 md:mt-0">
            <div className="design-text w-full md:w-[48%] lg:w-[45%] order-2 md:order-1 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/40 z-10 transition-transform duration-500 hover:-translate-y-2 shrink-0">
              <div className="text-[#5d3a2f] font-black text-sm uppercase tracking-widest mb-4">02 / FAST CUT</div>
              <h3 className="text-3xl md:text-5xl font-black text-[#5d3a2f] uppercase leading-tight mb-4">MOMENTS MADE<br/>LEGENDARY</h3>
              <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed uppercase">CINEMATIC STORYTELLING AND IMPACTFUL EDITS THAT TURN HIGHLIGHTS INTO UNFORGETTABLE MEMORIES.</p>
            </div>
            <div className="design-image w-full md:w-[42%] lg:w-[40%] order-1 md:order-2 rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] group z-0 film-border-frame-vertical p-3 md:p-5 bg-[#111] transform rotate-3 hover:rotate-0 transition-all duration-500 ease-out cursor-pointer hover:scale-105 shrink-0">
              <div className="relative w-full overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-sm">
                  <source src="/assets/videos/fast-cut.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="design-item flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 mt-24 md:mt-0">
            <div className="design-image w-full md:w-[42%] lg:w-[40%] order-1 rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] group z-0 film-border-frame-vertical p-3 md:p-5 bg-[#111] transform -rotate-3 hover:rotate-0 transition-all duration-500 ease-out cursor-pointer hover:scale-105 shrink-0">
              <div className="relative w-full overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-sm">
                  <source src="/assets/videos/god-mode.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="design-text w-full md:w-[48%] lg:w-[45%] order-2 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/40 z-10 transition-transform duration-500 hover:-translate-y-2 shrink-0">
              <div className="text-[#5d3a2f] font-black text-sm uppercase tracking-widest mb-4">03 / GOD MODE</div>
              <h3 className="text-3xl md:text-5xl font-black text-[#5d3a2f] uppercase leading-tight mb-4">WHERE MUSIC<br/>MEETS MOTION</h3>
              <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed uppercase">CREATIVE LYRIC ANIMATIONS AND MOTION DESIGN THAT BRING SOUND, RHYTHM, AND VISUALS TOGETHER.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
