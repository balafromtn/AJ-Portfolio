"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Highlight text animation (realistic marker sequence)
    const highlights = gsap.utils.toArray('.highlight-text') as HTMLElement[];
    if (highlights.length > 0) {
      gsap.to(highlights, {
        backgroundSize: "100% 100%",
        color: "white",
        ease: "power1.inOut",
        duration: 0.4,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 75%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        }
      });
    }

    // Circle and Logo intro animations
    const circle = containerRef.current.querySelector('.about-circle');
    const logo = containerRef.current.querySelector('.about-logo');

    if (circle) {
      gsap.fromTo(circle,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    }

    if (logo) {
      gsap.fromTo(logo,
        { scale: 0.5, opacity: 0, rotation: -15 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          delay: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="about-section py-20 relative overflow-hidden" id="about">
      {/* Top Centered ABOUT ME Badge */}
      <div className="container mx-auto px-6 flex justify-center mb-16 relative z-10">
        <h2 className="inline-block bg-[#5d3a2f] text-white px-8 md:px-12 py-2 text-4xl md:text-5xl font-bangers transform -rotate-2 shadow-[6px_6px_0_rgba(0,0,0,0.2)] tracking-widest">
          ABOUT ME
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-8 max-w-6xl about-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left: Profile Image with Solid Circle Backdrop */}
        <div className="about-image-wrapper relative flex justify-center items-center">
          {/* Large solid background circle (darker beige/peach), faded and larger */}
          <div className="about-circle absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] bg-[#d59a7a]/40 rounded-full -z-10 origin-center"></div>

          {/* APFX Logo */}
          <div className="about-logo relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] origin-center">
            <Image
              src="/assets/APFXLogo.png"
              alt="APFX Logo"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Right: Text Content and Tool Stack */}
        <div className="about-text-content flex flex-col items-center text-center lg:items-center w-full lg:pl-8 xl:pl-12">
          <div className="text-[#2a1610] font-alkatra font-bold tracking-wide text-lg sm:text-[22px] md:text-[26px] leading-tight mb-10 w-full max-w-[800px] text-center">
            {/* Desktop exact line breaks enforced via spans */}
            <p className="hidden md:flex flex-col items-center justify-center space-y-1">
              <span className="block whitespace-nowrap">HI, I&apos;M AJAY KUMAR,</span>
              <span className="block whitespace-nowrap">THE CREATIVE MIND BEHIND AIREN PIXEL.</span>
              <span className="block whitespace-nowrap">I CREATE <span className="highlight-text inline-block">HIGH-QUALITY VIDEO EDITS</span>,</span>
              <span className="block whitespace-nowrap"><span className="highlight-text inline-block">MOTION GRAPHICS</span>, AND <span className="highlight-text inline-block">CINEMATIC VISUALS</span></span>
              <span className="block whitespace-nowrap">THAT HELP CREATORS AND BRANDS</span>
              <span className="block whitespace-nowrap">CAPTURE ATTENTION AND BUILD</span>
              <span className="block whitespace-nowrap">STRONGER AUDIENCE CONNECTIONS.</span>
            </p>
            {/* Mobile/Tablet fluid text */}
            <p className="md:hidden px-4">
              HI, I&apos;M AJAY KUMAR, THE CREATIVE MIND BEHIND AIREN PIXEL. I CREATE <span className="highlight-text inline-block">HIGH-QUALITY VIDEO EDITS</span>, <span className="highlight-text inline-block">MOTION GRAPHICS</span>, AND <span className="highlight-text inline-block">CINEMATIC VISUALS</span> THAT HELP CREATORS AND BRANDS CAPTURE ATTENTION AND BUILD STRONGER AUDIENCE CONNECTIONS.
            </p>
          </div>

          <h3 className="inline-block bg-[#5d3a2f] text-white px-6 py-1 md:py-2 text-2xl md:text-3xl font-bangers transform -rotate-2 shadow-[4px_4px_0_rgba(0,0,0,0.2)] tracking-widest mb-8 mt-2">
            TOOL STACK
          </h3>

          <div className="tool-icons flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {[
              { src: "/assets/capcut-3d-icon.png", alt: "CapCut", sizeClasses: "w-[80px] h-[80px] md:w-[90px] md:h-[90px]" },
              { src: "/assets/Alight-Motion-Logo.webp", alt: "Alight Motion", sizeClasses: "w-[80px] h-[80px] md:w-[90px] md:h-[90px]" },
              { src: "/assets/picsart-icon.png", alt: "Picsart", sizeClasses: "w-[80px] h-[80px] md:w-[90px] md:h-[90px]" },
              { src: "/assets/snapseed-icon.png", alt: "Snapseed", sizeClasses: "w-[80px] h-[80px] md:w-[90px] md:h-[90px]" }
            ].map((tool, idx) => (
              <div key={idx} className={`${tool.sizeClasses} hover:-translate-y-[5px] transition-transform duration-300 relative flex items-center justify-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]`}>
                <Image src={tool.src} alt={tool.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
