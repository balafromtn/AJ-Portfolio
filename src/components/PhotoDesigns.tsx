"use client";

import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import instaThumbnail from '../../public/assets/Insta-Thambnail.jpg';
import collegeGroupPhoto from '../../public/assets/College-Group-Photo.jpg';
import greeting from '../../public/assets/Greeting.jpg';

export default function PhotoDesigns() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const items = gsap.utils.toArray('.design-item') as HTMLElement[];
    
    items.forEach((item) => {
      const image = item.querySelector('.design-image');
      const text = item.querySelector('.design-text');
      
      gsap.fromTo(image, 
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );

      gsap.fromTo(text, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative pt-40 pb-32 overflow-hidden z-20 -mt-16 md:-mt-32 rounded-t-[3rem] shadow-[0_-30px_60px_rgba(0,0,0,0.2)]" style={{ backgroundColor: 'var(--bg-color)', backgroundImage: 'radial-gradient(var(--dot-color) 2px, transparent 2px)', backgroundSize: '20px 20px' }}>
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#5d3a2f]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#5d3a2f]/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col items-center mb-24 md:mb-32">
          <h2 className="text-[14vw] md:text-[8vw] font-black uppercase tracking-tighter text-transparent leading-none"
              style={{ WebkitTextStroke: '3px var(--dark-brown, #5d3a2f)' }}>
            PHOTO
          </h2>
          <h2 className="text-[14vw] md:text-[8vw] font-black uppercase tracking-tighter text-[#5d3a2f] leading-none -mt-4 md:-mt-8">
            DESIGNS
          </h2>
        </div>
        
        <div className="flex flex-col gap-32 md:gap-48">
          {/* ITEM 1 */}
          <div className="design-item flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
            <div className="design-image w-full md:w-[42%] lg:w-[40%] order-1 rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] group z-0 film-border-frame p-3 md:p-5 bg-[#111] transform -rotate-2 hover:rotate-0 transition-all duration-500 ease-out cursor-pointer hover:scale-105 shrink-0">
              <div className="relative w-full overflow-hidden">
                <Image src={instaThumbnail} alt="Insta Thumbnail" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-sm" />
              </div>
            </div>
            <div className="design-text w-full md:w-[48%] lg:w-[45%] order-2 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/40 z-10 transition-transform duration-500 hover:-translate-y-2 shrink-0">
              <div className="text-[#5d3a2f] font-black text-sm uppercase tracking-widest mb-4">01 / Thumbnails</div>
              <h3 className="text-3xl md:text-5xl font-black text-[#5d3a2f] uppercase leading-tight mb-4">Designed To<br/>Get Clicks</h3>
              <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed uppercase">Attention-grabbing thumbnails and social media creatives built to stand out instantly in a crowded feed.</p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="design-item flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 mt-24 md:mt-0">
            <div className="design-text w-full md:w-[48%] lg:w-[45%] order-2 md:order-1 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/40 z-10 transition-transform duration-500 hover:-translate-y-2 shrink-0">
              <div className="text-[#5d3a2f] font-black text-sm uppercase tracking-widest mb-4">02 / Compositions</div>
              <h3 className="text-3xl md:text-5xl font-black text-[#5d3a2f] uppercase leading-tight mb-4">Stories Told<br/>Through Design</h3>
              <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed uppercase">Large-scale visual compositions beautifully crafted to showcase people, achievements, and memorable moments.</p>
            </div>
            <div className="design-image w-full md:w-[42%] lg:w-[40%] order-1 md:order-2 rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] group z-0 film-border-frame-vertical p-3 md:p-5 bg-[#111] transform rotate-3 hover:rotate-0 transition-all duration-500 ease-out cursor-pointer hover:scale-105 shrink-0">
              <div className="relative w-full overflow-hidden">
                <Image src={collegeGroupPhoto} alt="College Group Photo" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-sm" />
              </div>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="design-item flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 mt-24 md:mt-0">
            <div className="design-image w-full md:w-[42%] lg:w-[40%] order-1 rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] group z-0 film-border-frame-vertical p-3 md:p-5 bg-[#111] transform -rotate-3 hover:rotate-0 transition-all duration-500 ease-out cursor-pointer hover:scale-105 shrink-0">
              <div className="relative w-full overflow-hidden">
                <Image src={greeting} alt="Greeting" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-sm" />
              </div>
            </div>
            <div className="design-text w-full md:w-[48%] lg:w-[45%] order-2 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/40 z-10 transition-transform duration-500 hover:-translate-y-2 shrink-0">
              <div className="text-[#5d3a2f] font-black text-sm uppercase tracking-widest mb-4">03 / Posters</div>
              <h3 className="text-3xl md:text-5xl font-black text-[#5d3a2f] uppercase leading-tight mb-4">More Than Just<br/>A Greeting</h3>
              <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed uppercase">Custom-designed posters that turn special occasions into breathtaking, premium visual experiences.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
