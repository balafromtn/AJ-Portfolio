"use client";

import Link from "next/link";
import { FiInstagram, FiMail, FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Marquee from "./Marquee";

const FilmRail = () => (
  <div className="w-[30px] md:w-[45px] shrink-0 self-stretch z-10 relative" style={{
    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='45' height='35' viewBox='0 0 45 35' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cmask id='holeMask'%3E%3Crect width='45' height='35' fill='white' /%3E%3Crect x='10' y='8' width='25' height='19' rx='4' fill='black' /%3E%3C/mask%3E%3C/defs%3E%3Crect width='45' height='35' fill='%230f0905' mask='url(%23holeMask)' /%3E%3C/svg%3E")`,
    backgroundSize: '100% 35px',
    backgroundRepeat: 'repeat-y'
  }}></div>
);

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const email = formData.get('email') || '';
    const message = formData.get('message') || '';

    const text = `*New Inquiry from Website:*
*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}

*Message:*
${message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919994805585?text=${encodedText}`, '_blank');
  };

  return (
    <section className="contact-section relative z-10" id="contact">
      <div className="absolute top-0 left-0 w-full z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <Marquee />
        </div>
      </div>
      <div className="container mx-auto px-8 max-w-7xl pt-10 md:pt-16">
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch min-h-[95vh]">
          
          {/* LEFT COLUMN */}
          <div className="contact-left flex flex-col justify-center items-center text-center py-16 lg:py-24">
            {/* The Badge */}
            <div className="mb-8 md:mb-12 w-full flex justify-center">
               <h2 className="section-badge inline-block bg-[#5d3a2f] text-white px-6 md:px-8 py-2 md:py-3 text-3xl md:text-5xl transform -rotate-2 shadow-[4px_4px_0_rgba(0,0,0,0.3)] md:shadow-[6px_6px_0_rgba(0,0,0,0.3)] font-bangers tracking-widest">
                  CONTACT
               </h2>
            </div>
            
            <p className="contact-desc mb-10 md:mb-12 text-lg sm:text-xl md:text-2xl font-bold leading-snug md:leading-relaxed max-w-xl text-white font-alkatra tracking-wider" style={{ textShadow: "0 4px 8px rgba(0,0,0,0.8)" }}>
              WHETHER YOU&apos;RE A CREATOR, BRAND, OR BUSINESS, I&apos;M HERE TO TRANSFORM YOUR IDEAS INTO HIGH-QUALITY ENGAGING VISUAL CONTENT THROUGH HIGH-RETENTION EDITING, PHOTO DESIGNS AND MOTION GRAPHICS.
            </p>
            
            <div className="social-icons flex gap-4 md:gap-6 justify-center">
              <Link href="https://instagram.com/airen_pixelfx" target="_blank" rel="noopener noreferrer" className="relative group w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] md:border-[4px] border-[#2a1610] bg-[#8c5946]/40 hover:bg-[#2a1610] flex items-center justify-center text-[#2a1610] hover:text-[#f7cdb5] transform transition-all hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.4)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent h-[50%] pointer-events-none"></div>
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out pointer-events-none"></div>
                <FiInstagram className="w-6 h-6 md:w-8 md:h-8 relative z-10" strokeWidth={2.5} />
              </Link>
              <Link href="https://wa.me/919994805585" target="_blank" rel="noopener noreferrer" className="relative group w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] md:border-[4px] border-[#2a1610] bg-[#8c5946]/40 hover:bg-[#2a1610] flex items-center justify-center text-[#2a1610] hover:text-[#f7cdb5] transform transition-all hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.4)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent h-[50%] pointer-events-none"></div>
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out pointer-events-none"></div>
                <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8 relative z-10" />
              </Link>
              <Link href="mailto:airenpixelfx@gmail.com" className="relative group w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] md:border-[4px] border-[#2a1610] bg-[#8c5946]/40 hover:bg-[#2a1610] flex items-center justify-center text-[#2a1610] hover:text-[#f7cdb5] transform transition-all hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.4)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent h-[50%] pointer-events-none"></div>
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out pointer-events-none"></div>
                <FiMail className="w-6 h-6 md:w-8 md:h-8 relative z-10" strokeWidth={2.5} />
              </Link>
              <Link href="tel:9994805585" className="relative group w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] md:border-[4px] border-[#2a1610] bg-[#8c5946]/40 hover:bg-[#2a1610] flex items-center justify-center text-[#2a1610] hover:text-[#f7cdb5] transform transition-all hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.4)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent h-[50%] pointer-events-none"></div>
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out pointer-events-none"></div>
                <FiPhoneCall className="w-6 h-6 md:w-8 md:h-8 relative z-10" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
          
          {/* RIGHT COLUMN */}
          <div className="contact-right flex justify-center lg:justify-end w-full h-full pb-16 lg:pb-0">
            <div className="flex w-full max-w-[480px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] h-fit">
              
              {/* Left Film Rail */}
              <FilmRail />
              
              {/* Center Content Section */}
              <div className="flex flex-col w-full bg-[#5b3527] relative">
                
                {/* 1. Top empty filler - 62px aligns to 2 tiles */}
                <div className="w-full h-[62px] shrink-0 relative z-10"></div>
                
                {/* Black bar 1 */}
                <div className="w-full h-[16px] bg-[#0f0905] shrink-0 relative z-10"></div>
                
                {/* 2. Contact form wrapper - 544px aligns to exactly 18 tiles! */}
                <div className="w-full flex items-center justify-center h-[544px] shrink-0 relative z-10">
                  <form className="contact-form p-6 md:p-8 flex flex-col relative z-10 w-full" onSubmit={handleSubmit}>
                    
                    <div className="relative z-10 w-full flex flex-col">
                      <div className="input-group mb-5 md:mb-6">
                        <input 
                          type="text" 
                          name="name"
                          placeholder="YOUR NAME" 
                          required 
                          className="w-full bg-transparent border-b-2 border-[#3d2118] py-2 font-alkatra text-sm md:text-base font-bold text-white outline-none placeholder:text-[#f9e2d2]/70 placeholder:font-bold placeholder:tracking-widest"
                        />
                      </div>
                      
                      <div className="input-group mb-5 md:mb-6">
                        <input 
                          type="tel" 
                          name="phone"
                          placeholder="YOUR PHONE NUMBER" 
                          required 
                          className="w-full bg-transparent border-b-2 border-[#3d2118] py-2 font-alkatra text-sm md:text-base font-bold text-white outline-none placeholder:text-[#f9e2d2]/70 placeholder:font-bold placeholder:tracking-widest"
                        />
                      </div>
                      
                      <div className="input-group mb-6 md:mb-8">
                        <input 
                          type="email" 
                          name="email"
                          placeholder="YOUR EMAIL" 
                          required 
                          className="w-full bg-transparent border-b-2 border-[#3d2118] py-2 font-alkatra text-sm md:text-base font-bold text-white outline-none placeholder:text-[#f9e2d2]/70 placeholder:font-bold placeholder:tracking-widest"
                        />
                      </div>
                      
                      <div className="input-group mb-6">
                        <textarea 
                          name="message"
                          placeholder="YOUR MESSAGE" 
                          rows={3} 
                          required 
                          className="w-full bg-[#3d2118] border-none rounded-[16px] p-4 font-alkatra text-sm md:text-base font-bold text-white outline-none placeholder:text-[#f9e2d2]/70 placeholder:font-bold placeholder:tracking-widest resize-none shadow-inner"
                        ></textarea>
                      </div>
                      
                      <div className="flex flex-col items-center mt-4 md:mt-6">
                        <button type="submit" className="liquid-btn glass-btn w-max font-alkatra font-bold text-base md:text-lg tracking-widest px-8 py-3 rounded-[12px]">
                          SUBMIT MESSAGE
                        </button>
                        <p className="text-[#f9e2d2] text-xs md:text-sm mt-3 md:mt-4 font-bold tracking-wide">
                          Have a project in mind? Let&apos;s talk
                        </p>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Black bar 2 */}
                <div className="w-full h-[16px] bg-[#0f0905] shrink-0 relative z-10"></div>
                
                {/* Bottom empty filler - 62px aligns to 2 tiles, mirroring the top */}
                <div className="w-full h-[62px] shrink-0 relative z-10"></div>
              </div>

              {/* Right Film Rail */}
              <FilmRail />
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
