"use client";

import React from 'react';

export default function Marquee() {
  return (
    <section className="marquee-section relative w-full overflow-hidden flex justify-center items-center py-10 md:py-12 z-40 bg-transparent -mt-10 md:-mt-12">
      <div className="hero-film-strip w-[120%] flex-shrink-0 -rotate-2 scale-105 pointer-events-none shadow-2xl origin-center">
        <div className="film-strip-inner film-border bg-[#1a1008] text-[#f7cdb5]">
          <div className="marquee-container py-5 md:py-6 overflow-hidden w-full flex">
            <div className="animate-marquee whitespace-nowrap flex items-center font-alkatra text-2xl md:text-4xl font-bold tracking-[8px] drop-shadow-md" style={{ animationDirection: 'reverse' }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <React.Fragment key={i}>
                  <span className="pr-10">•</span>
                  <span className="pr-10">AIREN PIXEL</span>
                  <span className="pr-10">•</span>
                  <span className="pr-10">VIDEO EDITING</span>
                  <span className="pr-10">•</span>
                  <span className="pr-10">MOTION GRAPHICS</span>
                  <span className="pr-10">•</span>
                  <span className="pr-10">POSTER DESIGNING</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
