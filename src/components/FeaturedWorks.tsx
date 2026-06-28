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
  const [unmutedVideoIndex, setUnmutedVideoIndex] = React.useState<number | null>(null);

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
      trigger: section,
      start: "top top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: wrapper,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    // Fix for the background gap issue: force a refresh after components mount and media loads
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 500);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };

  }, { scope: sectionRef });

  const VolumeButton = ({ index }: { index: number }) => (
    <button
      onClick={() => setUnmutedVideoIndex(unmutedVideoIndex === index ? null : index)}
      className="absolute top-6 right-6 md:top-10 md:right-10 z-20 bg-black/60 p-3 md:p-4 rounded-full hover:bg-black/80 transition-colors text-white"
    >
      {unmutedVideoIndex !== index ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
      )}
    </button>
  );

  return (
    <section ref={sectionRef} className="featured-works-section bg-[var(--bg-color)] overflow-hidden relative" id="featured">
      <div className="horizontal-scroll-wrapper relative w-full h-[100vh] bg-black text-white overflow-hidden" ref={wrapperRef}>

        {/* Global blurred timeline background inside wrapper so it scales correctly */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30 blur-[5px]" style={{ backgroundImage: "url('/assets/time-line.png')" }}></div>

        <div className="horizontal-scroll-content flex h-[100vh] items-center w-max" ref={contentRef}>

          {/* Intro Title Panel */}
          <div className="h-panel w-[100vw] h-[100vh] flex items-center justify-center p-8 shrink-0 relative overflow-hidden">
            <div className="featured-text-wrapper relative z-10 flex items-center justify-center">
              <h2
                className="featured-title text-[5rem] md:text-[10rem] leading-none font-sans font-black text-white tracking-tight text-center"
                style={{ WebkitTextStroke: '4px #5d3a2f' }}
              >
                FEATURED<br />WORKS
              </h2>
            </div>
          </div>

          {/* Reel Panels */}
          {/* Reel 1 */}
          <div className="h-panel w-auto h-[100vh] flex items-center justify-center shrink-0 px-12 md:px-32">
            <div className="h-full flex items-center justify-center mr-4 md:mr-8">
              <h3
                className="text-3xl md:text-5xl font-sans font-black tracking-[0.3em] text-[var(--bg-color)] opacity-60 uppercase m-0"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                TRENDING REEL
              </h3>
            </div>
            <div className="video-panel h-[100vh] aspect-[9/16] max-w-[85vw] md:max-w-[70vw] film-border-frame-vertical rounded-none overflow-hidden relative px-3 md:px-5 py-0 bg-[#111]">
              <VolumeButton index={0} />
              <video autoPlay loop muted={unmutedVideoIndex !== 0} playsInline className="w-full h-full object-cover">
                <source src="/assets/videos/trending-reel.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Reel 2 */}
          <div className="h-panel w-auto h-[100vh] flex items-center justify-center shrink-0 px-12 md:px-32">
            <div className="h-full flex items-center justify-center mr-4 md:mr-8">
              <h3
                className="text-3xl md:text-5xl font-sans font-black tracking-[0.3em] text-[var(--bg-color)] opacity-60 uppercase m-0"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                LYRICAL VIDEO
              </h3>
            </div>
            <div className="video-panel h-[100vh] aspect-[9/16] max-w-[85vw] md:max-w-[70vw] film-border-frame-vertical rounded-none overflow-hidden relative px-3 md:px-5 py-0 bg-[#111]">
              <VolumeButton index={1} />
              <video autoPlay loop muted={unmutedVideoIndex !== 1} playsInline className="w-full h-full object-cover">
                <source src="/assets/videos/love-motion.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Reel 3 */}
          <div className="h-panel w-auto h-[100vh] flex items-center justify-center shrink-0 px-12 md:px-32">
            <div className="h-full flex items-center justify-center mr-4 md:mr-8">
              <h3
                className="text-3xl md:text-5xl font-sans font-black tracking-[0.3em] text-[var(--bg-color)] opacity-60 uppercase m-0"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                FUNNY VLOGS
              </h3>
            </div>
            <div className="video-panel h-[100vh] aspect-[9/16] max-w-[85vw] md:max-w-[70vw] film-border-frame-vertical rounded-none overflow-hidden relative px-3 md:px-5 py-0 bg-[#111]">
              <VolumeButton index={2} />
              <video autoPlay loop muted={unmutedVideoIndex !== 2} playsInline className="w-full h-full object-cover">
                <source src="/assets/videos/vlog.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Reel 4 */}
          <div className="h-panel w-auto h-[100vh] flex items-center justify-center shrink-0 px-12 md:px-32 pr-24 md:pr-48">
            <div className="h-full flex items-center justify-center mr-4 md:mr-8">
              <h3
                className="text-3xl md:text-5xl font-sans font-black tracking-[0.3em] text-[var(--bg-color)] opacity-60 uppercase m-0"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                MOTION GRAPHICS
              </h3>
            </div>
            <div className="video-panel h-[100vh] aspect-[9/16] max-w-[85vw] md:max-w-[70vw] film-border-frame-vertical rounded-none overflow-hidden relative px-3 md:px-5 py-0 bg-[#111]">
              <VolumeButton index={3} />
              <video autoPlay loop muted={unmutedVideoIndex !== 3} playsInline className="w-full h-full object-cover">
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
