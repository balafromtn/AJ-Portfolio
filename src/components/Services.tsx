"use client";

import React from 'react';

export default function Services() {
  const services = [
    "VIDEO EDITING",
    "MOTION GRAPHICS",
    "PHOTO EDITING"
  ];

  return (
    <section className="services-section relative w-full flex flex-col">
      {/* Static Top Single Reel Stripe */}
      <div className="w-full bg-[#1a1008] h-[18px] relative z-20 shadow-md">
        <div className="absolute inset-x-0 top-[4px] h-[10px] w-full" style={{ backgroundImage: 'repeating-linear-gradient(to right, rgba(247, 205, 181, 0.8) 0, rgba(247, 205, 181, 0.8) 12px, transparent 12px, transparent 22px)' }}></div>
      </div>

      {/* Services Content with Timeline Background */}
      <div className="relative w-full py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Dark Brown Overlay and Blur */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/assets/time-line.png')] bg-cover bg-center bg-no-repeat blur-[4px] scale-105"></div>
          <div className="absolute inset-0 bg-[#3a1a11]/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-transparent to-[#111111]/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wider mb-10 md:mb-14 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            SERVICES
          </h2>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 w-full">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="relative group bg-[#dca385]/90 backdrop-blur-md px-8 py-3 md:px-12 md:py-4 rounded-full border-[2px] border-white/20 hover:border-white/40 hover:bg-[#dca385] hover:-translate-y-1 transition-all duration-300 cursor-default shadow-[0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.3)] overflow-hidden"
              >
                {/* Glossy Top Highlight */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-transparent h-[50%] pointer-events-none rounded-t-full"></div>
                {/* Hover Sweep Shine */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out pointer-events-none"></div>
                
                <span className="relative z-10 text-[#2a1610] font-alkatra font-bold tracking-widest text-lg md:text-xl lg:text-2xl drop-shadow-sm">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Static Bottom Single Reel Stripe */}
      <div className="w-full bg-[#1a1008] h-[18px] relative z-20 shadow-2xl">
        <div className="absolute inset-x-0 top-[4px] h-[10px] w-full" style={{ backgroundImage: 'repeating-linear-gradient(to right, rgba(247, 205, 181, 0.8) 0, rgba(247, 205, 181, 0.8) 12px, transparent 12px, transparent 22px)' }}></div>
      </div>
    </section>
  );
}
