"use client";

import React, { useRef, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // State for tracking which video is unmuted (only one at a time)
  const [unmutedVideoId, setUnmutedVideoId] = useState<string | null>(null);

  useGSAP(() => {
    // Fade up animations for sections
    const sections = gsap.utils.toArray('.fade-up-section') as HTMLElement[];
    
    sections.forEach((section: any) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, { scope: containerRef });

  const VolumeButton = ({ id }: { id: string }) => (
    <button
      onClick={() => setUnmutedVideoId(unmutedVideoId === id ? null : id)}
      className="absolute top-4 right-4 z-20 bg-black/60 p-2 md:p-3 rounded-full hover:bg-black/80 transition-colors text-white"
    >
      {unmutedVideoId !== id ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
      )}
    </button>
  );

  return (
    <main className="min-h-screen bg-[var(--bg-color)] overflow-hidden bg-dotted" ref={containerRef}>
      <Navbar />
      
      {/* Back to Home Button */}
      <Link href="/" className="fixed top-6 left-6 z-[200] bg-[#3a1a11]/80 backdrop-blur-md text-white font-alkatra px-4 py-2 rounded-full border border-white/20 hover:bg-[#5d3a2f] transition-all shadow-lg flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Back to Home
      </Link>

      <div className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto w-full">
        {/* SHOWCASE Title */}
        <h1 className="text-center text-4xl md:text-6xl font-black tracking-widest text-[#5d3a2f] mb-20 drop-shadow-sm fade-up-section">
          SHOWCASE
        </h1>

        {/* Video Editing */}
        <section className="mb-32">
          <h2 className="text-xl md:text-2xl font-black text-[#5d3a2f] tracking-widest mb-10 border-l-4 border-[#5d3a2f] pl-4 fade-up-section">
            VIDEO EDITING
          </h2>
          
          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            {/* Row 1: 3 Verticals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up-section">
              {['v_vid_1', 'v_vid_2', 'v_vid_3'].map((id) => (
                <div key={id} className="film-border-frame-vertical aspect-[9/16] bg-black flex items-center justify-center overflow-hidden relative">
                  <VolumeButton id={id} />
                  <video src="/assets/videos/vlog.mp4" autoPlay loop muted={unmutedVideoId !== id} playsInline className="w-full h-full object-cover opacity-80" />
                </div>
              ))}
            </div>
            
            {/* Row 2: 3 Verticals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up-section">
              {['v_vid_4', 'v_vid_5', 'v_vid_6'].map((id) => (
                <div key={id} className="film-border-frame-vertical aspect-[9/16] bg-black flex items-center justify-center overflow-hidden relative">
                  <VolumeButton id={id} />
                  <video src="/assets/videos/vlog.mp4" autoPlay loop muted={unmutedVideoId !== id} playsInline className="w-full h-full object-cover opacity-80" />
                </div>
              ))}
            </div>

            {/* Row 3: 3 Verticals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up-section">
              {['v_vid_7', 'v_vid_8', 'v_vid_9'].map((id) => (
                <div key={id} className="film-border-frame-vertical aspect-[9/16] bg-black flex items-center justify-center overflow-hidden relative">
                  <VolumeButton id={id} />
                  <video src="/assets/videos/vlog.mp4" autoPlay loop muted={unmutedVideoId !== id} playsInline className="w-full h-full object-cover opacity-80" />
                </div>
              ))}
            </div>

            {/* Row 4: 3 Horizontals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up-section">
              {['v_vid_10', 'v_vid_11', 'v_vid_12'].map((id) => (
                <div key={id} className="film-border-frame aspect-video bg-black flex items-center justify-center overflow-hidden relative">
                  <VolumeButton id={id} />
                  <video src="/assets/videos/fast-cut.mp4" autoPlay loop muted={unmutedVideoId !== id} playsInline className="w-full h-full object-cover opacity-80" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Motion Graphics */}
        <section className="mb-32">
          <h2 className="text-xl md:text-2xl font-black text-[#5d3a2f] tracking-widest mb-10 border-l-4 border-[#5d3a2f] pl-4 fade-up-section">
            MOTION GRAPHICS
          </h2>
          
          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            {/* Row 1: Horizontal | Vertical */}
            <div className="flex flex-col md:flex-row gap-6 fade-up-section">
              <div className="flex-grow md:w-[60%] film-border-frame aspect-video bg-black flex items-center justify-center overflow-hidden relative">
                <VolumeButton id="m_vid_1" />
                <video src="/assets/videos/aravindh_motion.mp4" autoPlay loop muted={unmutedVideoId !== 'm_vid_1'} playsInline className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="flex-shrink-0 md:w-[40%] film-border-frame-vertical aspect-[9/16] bg-black flex items-center justify-center overflow-hidden relative">
                <VolumeButton id="m_vid_2" />
                <video src="/assets/videos/love-motion.mp4" autoPlay loop muted={unmutedVideoId !== 'm_vid_2'} playsInline className="w-full h-full object-cover opacity-80" />
              </div>
            </div>

            {/* Row 2: Vertical | Horizontal */}
            <div className="flex flex-col md:flex-row gap-6 fade-up-section">
              <div className="flex-shrink-0 md:w-[40%] film-border-frame-vertical aspect-[9/16] bg-black flex items-center justify-center overflow-hidden relative">
                <VolumeButton id="m_vid_3" />
                <video src="/assets/videos/love-motion.mp4" autoPlay loop muted={unmutedVideoId !== 'm_vid_3'} playsInline className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="flex-grow md:w-[60%] film-border-frame aspect-video bg-black flex items-center justify-center overflow-hidden relative">
                <VolumeButton id="m_vid_4" />
                <video src="/assets/videos/motion-graphics.mp4" autoPlay loop muted={unmutedVideoId !== 'm_vid_4'} playsInline className="w-full h-full object-cover opacity-80" />
              </div>
            </div>

            {/* Row 3: 2 Horizontals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-up-section">
              <div className="film-border-frame aspect-video bg-black flex items-center justify-center overflow-hidden relative">
                <VolumeButton id="m_vid_5" />
                <video src="/assets/videos/aravindh_motion.mp4" autoPlay loop muted={unmutedVideoId !== 'm_vid_5'} playsInline className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="film-border-frame aspect-video bg-black flex items-center justify-center overflow-hidden relative">
                <VolumeButton id="m_vid_6" />
                <video src="/assets/videos/motion-graphics.mp4" autoPlay loop muted={unmutedVideoId !== 'm_vid_6'} playsInline className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>
        </section>

        {/* Photo Designs */}
        <section className="mb-24 flex flex-col items-center w-full">
          <h1 className="text-center text-4xl md:text-6xl font-black tracking-widest text-[#5d3a2f] mb-16 drop-shadow-sm fade-up-section">
            PHOTO DESIGNS
          </h1>

          {/* Thumbnails */}
          <div className="w-full mb-20 fade-up-section">
            <h2 className="text-xl md:text-2xl font-black text-[#5d3a2f] tracking-widest mb-10 border-l-4 border-[#5d3a2f] pl-4 self-start">
              THUMBNAILS
            </h2>
            {/* 1 Vertical, 1 Horizontal, 1 Vertical */}
            <div className="flex flex-col md:flex-row gap-6 justify-center max-w-6xl mx-auto">
              <div className="w-full md:w-[25%] film-border-frame-vertical aspect-[9/16] bg-black flex items-center justify-center overflow-hidden group">
                 <Image src="/assets/Greeting.jpg" alt="Thumbnail" width={450} height={800} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500 ease-out" />
              </div>
              <div className="w-full md:w-[50%] film-border-frame aspect-video bg-black flex items-center justify-center overflow-hidden group">
                 <Image src="/assets/Insta-Thambnail.jpg" alt="Thumbnail" width={800} height={450} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500 ease-out" />
              </div>
              <div className="w-full md:w-[25%] film-border-frame-vertical aspect-[9/16] bg-black flex items-center justify-center overflow-hidden group">
                 <Image src="/assets/Greeting.jpg" alt="Thumbnail" width={450} height={800} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500 ease-out" />
              </div>
            </div>
          </div>

          {/* Logo Designs (Moved above Greetings, no brown borders) */}
          <div className="w-full mb-20 fade-up-section">
            <h2 className="text-xl md:text-2xl font-black text-[#5d3a2f] tracking-widest mb-10 border-l-4 border-[#5d3a2f] pl-4 self-start">
              LOGO DESIGNS
            </h2>
            {/* 2 Circles */}
            <div className="flex flex-row justify-center gap-12">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] bg-[#3a1a11] rounded-full flex items-center justify-center overflow-hidden shadow-xl group">
                  <Image src="/assets/APFXLogo.png" alt="Logo" width={250} height={250} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500 ease-out" />
                </div>
              ))}
            </div>
          </div>

          {/* Greeting Designs */}
          <div className="w-full mb-16 fade-up-section max-w-4xl">
            <h2 className="text-xl md:text-2xl font-black text-[#5d3a2f] tracking-widest mb-10 border-l-4 border-[#5d3a2f] pl-4 self-start">
              GREETING DESIGNS
            </h2>
            {/* 3 Vertical */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="film-border-frame-vertical aspect-[9/16] bg-black flex items-center justify-center overflow-hidden group">
                  <Image src="/assets/Greeting.jpg" alt="Greeting" width={450} height={800} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500 ease-out" />
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </main>
  );
}
