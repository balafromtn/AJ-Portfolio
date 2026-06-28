"use client";

import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import instaThumbnail from '../../public/assets/Insta-Thambnail.jpg';
import collegeGroupPhoto from '../../public/assets/College-Group-Photo.jpg';
import greeting from '../../public/assets/Greeting.jpg';

export default function PhotoDesigns() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const items = gsap.utils.toArray('.design-item') as HTMLElement[];
    
    items.forEach((item, i) => {
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

  return (
    <section ref={containerRef} className="relative z-20 -mt-16 md:-mt-32 rounded-t-[3rem] shadow-[0_-30px_60px_rgba(0,0,0,0.2)] bg-dotted" id="photo-designs">
      {/* BACKGROUND BLUR ELEMENTS - isolated with overflow-hidden so they don't break sticky children */}
      <div className="absolute inset-0 overflow-hidden rounded-t-[3rem] pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#5d3a2f]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#5d3a2f]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl pt-32 md:pt-48 pb-12">
        <div className="flex flex-col items-center">
          <h2 className="text-[14vw] md:text-[8vw] font-black uppercase tracking-tighter text-transparent leading-none"
              style={{ WebkitTextStroke: '3px var(--dark-brown, #5d3a2f)' }}>
            PHOTO
          </h2>
          <h2 className="text-[14vw] md:text-[8vw] font-black uppercase tracking-tighter text-[#5d3a2f] leading-none -mt-4 md:-mt-8">
            DESIGNS
          </h2>
        </div>
      </div>
      
      <div className="relative w-full pb-32">
        {/* ITEM 1 */}
        <div className="design-item sticky top-0 h-[100dvh] w-full flex items-center justify-center bg-transparent z-10 origin-top">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
            <div className="design-image-wrapper w-full md:w-[45%] lg:w-[40%] order-1 shrink-0">
              <div className="design-image w-full rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] group z-0 film-border-frame p-3 md:p-5 bg-[#111] transform -rotate-6 hover:rotate-0 transition-all duration-500 ease-out cursor-pointer hover:scale-105">
                <div className="relative w-full overflow-hidden">
                  <Image src={instaThumbnail} alt="Insta Thumbnail" className="w-full h-auto group-hover:scale-110 transition-transform duration-700 ease-out rounded-sm" />
                </div>
              </div>
            </div>
            <div className="design-text w-full md:w-[45%] lg:w-[50%] order-2 bg-white/80 backdrop-blur-md p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-white/40 z-10 transition-transform duration-500 hover:-translate-y-2 shrink-0 mt-4 md:mt-0">
              <div className="text-[#5d3a2f] font-black text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-4">01 / Thumbnails</div>
              <h3 className="text-2xl md:text-5xl font-black text-[#5d3a2f] uppercase leading-tight mb-2 md:mb-4">Designed To<br/>Get Clicks</h3>
              <p className="text-sm md:text-lg font-bold text-gray-700 leading-relaxed uppercase">Attention-grabbing thumbnails and social media creatives built to stand out instantly in a crowded feed.</p>
            </div>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="design-item sticky top-0 h-[100dvh] w-full flex items-center justify-center bg-transparent z-20 origin-top">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
            <div className="design-text w-full md:w-[45%] lg:w-[50%] order-2 md:order-1 bg-white/80 backdrop-blur-md p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-white/40 z-10 transition-transform duration-500 hover:-translate-y-2 shrink-0 mt-4 md:mt-0">
              <div className="text-[#5d3a2f] font-black text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-4">02 / Compositions</div>
              <h3 className="text-2xl md:text-5xl font-black text-[#5d3a2f] uppercase leading-tight mb-2 md:mb-4">Stories Told<br/>Through Design</h3>
              <p className="text-sm md:text-lg font-bold text-gray-700 leading-relaxed uppercase">Large-scale visual compositions beautifully crafted to showcase people, achievements, and memorable moments.</p>
            </div>
            <div className="design-image-wrapper w-full md:w-[45%] lg:w-[40%] order-1 md:order-2 shrink-0">
              <div className="design-image w-full rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] group z-0 film-border-frame-vertical p-3 md:p-5 bg-[#111] transform rotate-6 hover:rotate-0 transition-all duration-500 ease-out cursor-pointer hover:scale-105">
                <div className="relative w-full overflow-hidden">
                  <Image src={collegeGroupPhoto} alt="College Group Photo" className="w-full h-auto group-hover:scale-110 transition-transform duration-700 ease-out rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="design-item sticky top-0 h-[100dvh] w-full flex items-center justify-center bg-transparent z-30 origin-top">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
            <div className="design-image-wrapper w-full md:w-[45%] lg:w-[40%] order-1 shrink-0">
              <div className="design-image w-full rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] group z-0 film-border-frame-vertical p-3 md:p-5 bg-[#111] transform -rotate-6 hover:rotate-0 transition-all duration-500 ease-out cursor-pointer hover:scale-105">
                <div className="relative w-full overflow-hidden">
                  <Image src={greeting} alt="Greeting" className="w-full h-auto bg-[#111] group-hover:scale-110 transition-transform duration-700 ease-out rounded-sm" />
                </div>
              </div>
            </div>
            <div className="design-text w-full md:w-[45%] lg:w-[50%] order-2 bg-white/80 backdrop-blur-md p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-white/40 z-10 transition-transform duration-500 hover:-translate-y-2 shrink-0 mt-4 md:mt-0">
              <div className="text-[#5d3a2f] font-black text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-4">03 / Posters</div>
              <h3 className="text-2xl md:text-5xl font-black text-[#5d3a2f] uppercase leading-tight mb-2 md:mb-4">More Than Just<br/>A Greeting</h3>
              <p className="text-sm md:text-lg font-bold text-gray-700 leading-relaxed uppercase">Custom-designed posters that turn special occasions into breathtaking, premium visual experiences.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
