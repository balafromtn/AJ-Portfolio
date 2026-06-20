"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-[#111] text-white relative pt-24 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/time-line.png')] bg-center bg-cover opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10 footer-content">
        <div className="footer-top flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b-2 border-white/20 pb-12">
          <div className="footer-left">
            <h1 className="text-[4rem] md:text-[6rem] leading-[0.9] font-heading mb-8">
              LET&apos;S TELL<br/>YOUR STORY<br/>VISUALLY
            </h1>
            <div className="social-icons flex gap-4">
              <Link href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center font-bold hover:bg-white hover:text-[#111] transition-colors">IG</Link>
              <Link href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center font-bold hover:bg-white hover:text-[#111] transition-colors">WA</Link>
              <Link href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center font-bold hover:bg-white hover:text-[#111] transition-colors">EM</Link>
              <Link href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center font-bold hover:bg-white hover:text-[#111] transition-colors">PH</Link>
            </div>
          </div>
          <div className="footer-right max-w-md text-right flex flex-col items-end">
            <p className="text-xl font-semibold mb-8 leading-relaxed text-left md:text-right">
              Every project starts with an idea. Let&apos;s turn yours into something memorable, impactful, and worth sharing
            </p>
            <Link href="#contact" className="liquid-btn text-white border-white/30 text-center inline-block w-auto">
              LET&apos;S WORK TOGETHER
            </Link>
          </div>
        </div>
        
        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-sm font-semibold tracking-wider">
          <div className="footer-links flex gap-6 font-heading text-xl tracking-[3px]">
            <Link href="#home" className="hover:text-[#f7cdb5] transition-colors">HOME</Link>
            <Link href="#contact" className="hover:text-[#f7cdb5] transition-colors">CONTACT</Link>
            <Link href="#works" className="hover:text-[#f7cdb5] transition-colors">WORKS</Link>
            <Link href="#about" className="hover:text-[#f7cdb5] transition-colors">ABOUT</Link>
          </div>
          <p>&copy; 2026 AIREN PIXEL. ALL RIGHTS RESERVED.</p>
          <p className="opacity-70">Designed & Developed By Balaji</p>
        </div>
      </div>
    </footer>
  );
}
