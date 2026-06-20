"use client";

import React from 'react';

export default function Marquee() {
  return (
    <section className="marquee-section relative w-full overflow-hidden flex justify-center items-center py-10 md:py-16 z-40 bg-transparent mt-4 md:mt-8">
      <div className="hero-film-strip w-[110%] flex-shrink-0 rotate-2 scale-105 pointer-events-none shadow-2xl origin-center">
        <div className="film-strip-inner film-border bg-[#1a1008] text-[#f7cdb5]">
          <div className="marquee-container py-3 md:py-4 overflow-hidden w-full">
            <div className="animate-marquee whitespace-nowrap inline-block font-alkatra text-xl md:text-3xl font-bold tracking-[6px] drop-shadow-md">
              <span className="pr-16">• AIREN PIXEL • VIDEO EDITING • MOTION GRAPHICS</span>
              <span className="pr-16">• AIREN PIXEL • VIDEO EDITING • MOTION GRAPHICS</span>
              <span className="pr-16">• AIREN PIXEL • VIDEO EDITING • MOTION GRAPHICS</span>
              <span className="pr-16">• AIREN PIXEL • VIDEO EDITING • MOTION GRAPHICS</span>
              <span className="pr-16">• AIREN PIXEL • VIDEO EDITING • MOTION GRAPHICS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
