"use client";

import React from 'react';

export default function Showreel() {
  return (
    <section className="showreel-section py-24" id="works">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="section-title-wrapper mb-12">
          <h2 className="section-badge inline-block bg-[#5d3a2f] text-white px-6 py-2 text-3xl transform -rotate-3 shadow-[4px_4px_0_rgba(0,0,0,0.2)] font-heading">
            SHOWREEL
          </h2>
        </div>
        
        <div className="showreel-grid grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-y-16 md:gap-x-8 items-center mt-12">
          {/* Video 1 */}
          <div className="video-card relative w-full rounded-lg overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.2)] film-border-frame">
            <video autoPlay loop muted playsInline className="w-full block">
              <source src="/assets/videos/bike-edit.mp4" type="video/mp4" />
            </video>
            <div className="video-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 px-4 py-2 font-heading text-[#5d3a2f] text-xl">
              <h3>BIKE EDIT</h3>
            </div>
          </div>
          
          <div className="showreel-text text-left md:text-right">
            <h3 className="text-3xl mb-4 text-[#5d3a2f] font-heading">SPEED. ENERGY. IMPACT.</h3>
            <p className="font-semibold text-lg leading-relaxed">
              DYNAMIC SPEED RAMPS AND CINEMATIC TRANSITIONS CRAFTED TO MAKE EVERY FRAME FEEL ALIVE.
            </p>
          </div>

          {/* Video 2 */}
          <div className="video-card relative w-full rounded-lg overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.2)] film-border-frame order-3 md:order-none">
            <video autoPlay loop muted playsInline className="w-full block">
              <source src="/assets/videos/fast-cut.mp4" type="video/mp4" />
            </video>
            <div className="video-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 px-4 py-2 font-heading text-[#5d3a2f] text-xl">
              <h3>FAST CUT</h3>
            </div>
          </div>

          <div className="showreel-text text-left order-4 md:order-none">
            <h3 className="text-3xl mb-4 text-[#5d3a2f] font-heading">MOMENTS MADE LEGENDARY</h3>
            <p className="font-semibold text-lg leading-relaxed">
              CINEMATIC STORYTELLING AND IMPACTFUL EDITS THAT TURN HIGHLIGHTS INTO UNFORGETTABLE MEMORIES.
            </p>
          </div>

          {/* Video 3 */}
          <div className="video-card relative w-full rounded-lg overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.2)] film-border-frame order-5 md:order-none">
            <video autoPlay loop muted playsInline className="w-full block">
              <source src="/assets/videos/god-mode.mp4" type="video/mp4" />
            </video>
            <div className="video-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 px-4 py-2 font-heading text-[#5d3a2f] text-xl">
              <h3>GOD MODE</h3>
            </div>
          </div>

          <div className="showreel-text text-left md:text-right order-6 md:order-none">
            <h3 className="text-3xl mb-4 text-[#5d3a2f] font-heading">WHERE MUSIC MEETS MOTION</h3>
            <p className="font-semibold text-lg leading-relaxed">
              CREATIVE LYRIC ANIMATIONS AND MOTION DESIGN THAT BRING SOUND, RHYTHM, AND VISUALS TOGETHER.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
