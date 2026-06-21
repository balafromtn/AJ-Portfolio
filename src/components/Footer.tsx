"use client";

import Link from "next/link";
import { FiInstagram, FiMail, FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer relative pt-20 pb-8 overflow-hidden bg-[#0f0905] text-white">
      {/* Background with blurred time-line.png and dot matrix overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/assets/time-line.png')] bg-center bg-cover opacity-20 blur-[2px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
          backgroundImage: `radial-gradient(#1a0a05 2px, transparent 2px)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10 footer-content">
        
        {/* Top Section: Text and Button */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center pb-12 md:pb-24 pt-8">
          {/* Left: Big Title */}
          <div className="flex flex-col items-start">
            <h1 className="text-5xl md:text-[5.5rem] leading-[1.15] font-sans font-black tracking-wide text-white drop-shadow-lg">
              LET&apos;S TELL<br/>YOUR STORY<br/>VISUALLY
            </h1>
          </div>
          
          {/* Right: Paragraph & Button */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right gap-8 md:gap-10">
            <p className="text-lg md:text-xl font-medium max-w-[420px] leading-relaxed tracking-wide text-white font-sans">
              Every Project Starts With An Idea.<br className="hidden md:block"/> Let&apos;s Turn Yours Into Something<br className="hidden md:block"/> Memorable, Impactful, And Worth Sharing.
            </p>
            <Link href="#contact" className="liquid-btn !rounded-[16px] !bg-white/5 hover:!bg-white/10 !border-white/10 font-alkatra font-bold tracking-widest text-white text-base md:text-lg">
              LET&apos;S WORK TOGETHER
            </Link>
          </div>
        </div>
        
        {/* Middle Section: Socials and Nav Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-6">
          {/* Social Icons (Matched to Contact Section but brightened for dark bg) */}
          <div className="social-icons flex gap-4 md:gap-6 relative -top-2 left-2 md:left-4">
            <Link href="#" className="relative group w-12 h-12 md:w-16 md:h-16 rounded-full border-[2px] md:border-[3px] border-white/30 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transform transition-all hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent h-[50%] pointer-events-none"></div>
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out pointer-events-none"></div>
              <FiInstagram className="w-6 h-6 md:w-8 md:h-8 relative z-10" strokeWidth={2.5} />
            </Link>
            
            <Link href="#" className="relative group w-12 h-12 md:w-16 md:h-16 rounded-full border-[2px] md:border-[3px] border-white/30 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transform transition-all hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent h-[50%] pointer-events-none"></div>
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out pointer-events-none"></div>
              <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8 relative z-10" />
            </Link>
            
            <Link href="#" className="relative group w-12 h-12 md:w-16 md:h-16 rounded-full border-[2px] md:border-[3px] border-white/30 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transform transition-all hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent h-[50%] pointer-events-none"></div>
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out pointer-events-none"></div>
              <FiMail className="w-6 h-6 md:w-8 md:h-8 relative z-10" strokeWidth={2.5} />
            </Link>
            
            <Link href="#" className="relative group w-12 h-12 md:w-16 md:h-16 rounded-full border-[2px] md:border-[3px] border-white/30 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transform transition-all hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent h-[50%] pointer-events-none"></div>
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out pointer-events-none"></div>
              <FiPhoneCall className="w-6 h-6 md:w-8 md:h-8 relative z-10" strokeWidth={2.5} />
            </Link>
          </div>
          
          {/* Nav Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10 font-black font-sans text-xl tracking-wider text-white">
            <Link href="#home" className="text-white/90 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">HOME</Link>
            <Link href="#contact" className="text-white/90 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">CONTACT</Link>
            <Link href="#works" className="text-white/90 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">WORKS</Link>
            <Link href="#about" className="text-white/90 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">ABOUT</Link>
          </div>
        </div>
        
        {/* Divider Line */}
        <div className="w-full h-[2px] bg-white/20 mb-6 shadow-sm"></div>
        
        {/* Bottom Section: Copyright */}
        <div className="flex flex-col items-center justify-center gap-3 text-center pb-4 pt-2">
          <p className="font-bold text-white tracking-wider text-xs md:text-sm drop-shadow-md">
            &copy; 2026 AIREN PIXEL. ALL RIGHTS RESERVED.
          </p>
          <p className="font-medium text-white tracking-wide text-xs">
            Designed & Developed By{" "}
            <a href="https://instagram.com/_.ba7aji._" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              Balaji
            </a>
          </p>
        </div>
        
      </div>
    </footer>
  );
}
