"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !contentRef.current || !sectionRef.current) return;

    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    const section = sectionRef.current;

    // Entrance Transition (Scale Up)
    gsap.fromTo(wrapper,
      { scale: 0.85, borderRadius: "3rem" },
      {
        scale: 1,
        borderRadius: "0rem",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // Start when top of section hits bottom of screen
          end: "top top",      // End when it pins at the top
          scrub: 1,
        }
      }
    );

    const getScrollAmount = () => {
      return -(content.scrollWidth - window.innerWidth);
    };

    const tween = gsap.to(content, {
      x: getScrollAmount,
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="featured-works-section bg-[#5d3a2f] text-white overflow-hidden" id="featured">
      <div className="horizontal-scroll-wrapper relative w-full h-[100dvh]" ref={wrapperRef}>
        <div className="horizontal-scroll-content flex h-[100dvh] items-center w-max" ref={contentRef}>
          
          {/* Intro Title Panel */}
          <div className="h-panel w-[100dvw] h-[100dvh] flex items-center justify-center p-8 shrink-0 relative overflow-hidden">
            <div className="featured-bg absolute inset-0 bg-cover bg-center opacity-30 blur-[5px]" style={{ backgroundImage: "url('/assets/time-line.png')" }}></div>
            <div className="featured-text-wrapper relative z-10 flex items-center gap-8">
              <h2 className="featured-title text-[5rem] md:text-[8rem] leading-none font-heading">FEATURED<br/>WORKS</h2>
              <h3 className="vertical-text text-2xl tracking-[5px] border-l-2 border-white pl-3 font-heading" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>TRENDING REEL</h3>
            </div>
          </div>
          
          {/* Reel Panels */}
          <div className="h-panel w-[100dvw] h-[100dvh] flex items-center justify-center shrink-0">
            <div className="video-panel h-[100dvh] aspect-[9/16] max-w-[85vw] mx-[2vw] film-border-frame-vertical rounded-none overflow-hidden relative p-3 md:p-5 bg-[#111]">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/assets/videos/trending-reel.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="h-panel w-[100dvw] h-[100dvh] flex items-center justify-center shrink-0">
            <div className="video-panel h-[100dvh] aspect-[9/16] max-w-[85vw] mx-[2vw] film-border-frame-vertical rounded-none overflow-hidden relative p-3 md:p-5 bg-[#111]">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/assets/videos/vlog.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="h-panel w-[100dvw] h-[100dvh] flex items-center justify-center shrink-0">
            <div className="video-panel h-[100dvh] aspect-[9/16] max-w-[85vw] mx-[2vw] film-border-frame-vertical rounded-none overflow-hidden relative p-3 md:p-5 bg-[#111]">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/assets/videos/batmiton.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="h-panel w-[100dvw] h-[100dvh] flex items-center justify-center shrink-0">
            <div className="video-panel h-[100dvh] aspect-[9/16] max-w-[85vw] mx-[2vw] film-border-frame-vertical rounded-none overflow-hidden relative p-3 md:p-5 bg-[#111]">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/assets/videos/kho-kho-team.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="h-panel w-[100dvw] h-[100dvh] flex items-center justify-center shrink-0">
            <div className="video-panel h-[100dvh] aspect-[9/16] max-w-[85vw] mx-[2vw] film-border-frame-vertical rounded-none overflow-hidden relative p-3 md:p-5 bg-[#111]">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/assets/videos/motion-graphics.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </div>
      
      {/* Film Marquee */}
      <div className="marquee-container film-border">
        <div className="marquee-content empty-film h-[30px]"></div>
      </div>
    </section>
  );
}
