"use client";

import Link from "next/link";
import { FiInstagram, FiMail, FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const FilmRail = () => (
  <div className="flex w-[30px] md:w-[45px] shrink-0 self-stretch bg-transparent">
    {/* Outer black edge */}
    <div className="w-[8px] md:w-[12px] bg-[#1a1008] self-stretch"></div>
    {/* Transparent holes strip */}
    <div className="w-[14px] md:w-[21px] bg-transparent self-stretch" style={{
      backgroundImage: 'repeating-linear-gradient(to bottom, #1a1008 0px, #1a1008 16px, transparent 16px, transparent 32px)'
    }}></div>
    {/* Inner black edge */}
    <div className="w-[8px] md:w-[12px] bg-[#1a1008] self-stretch"></div>
  </div>
);

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://wa.me/919876543210?text=Hi%20Ajay,%20I%20want%20to%20hire%20you%20for%20a%20project.', '_blank');
  };

  return (
    <section className="contact-section py-24 relative z-10" id="contact">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <div className="contact-left flex flex-col justify-center items-center text-center">
            {/* The Badge */}
            <div className="mb-8 md:mb-12 w-full flex justify-center">
               <h2 className="section-badge inline-block bg-[#5d3a2f] text-white px-6 md:px-8 py-2 md:py-3 text-3xl md:text-5xl transform -rotate-2 shadow-[4px_4px_0_rgba(0,0,0,0.3)] md:shadow-[6px_6px_0_rgba(0,0,0,0.3)] font-bangers tracking-widest">
                 CONTACT
               </h2>
            </div>
            
            <p className="contact-desc mb-10 md:mb-12 text-lg sm:text-xl md:text-2xl font-bold leading-snug md:leading-relaxed max-w-xl text-white font-alkatra drop-shadow-md tracking-wider">
              WHETHER YOU&apos;RE A CREATOR, BRAND, OR BUSINESS, I&apos;M HERE TO TRANSFORM YOUR IDEAS INTO ENGAGING VISUAL CONTENT THROUGH HIGH-RETENTION EDITING, PHOTO DESIGNS AND MOTION GRAPHICS.
            </p>
            
            <div className="social-icons flex gap-4 md:gap-6 justify-center">
              <Link href="#" className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] md:border-[4px] border-[#2a1610] bg-[#8c5946]/40 flex items-center justify-center text-[#2a1610] hover:bg-[#2a1610] hover:text-[#f7cdb5] transition-all transform hover:scale-110 shadow-lg">
                <FiInstagram className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
              </Link>
              <Link href="#" className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] md:border-[4px] border-[#2a1610] bg-[#8c5946]/40 flex items-center justify-center text-[#2a1610] hover:bg-[#2a1610] hover:text-[#f7cdb5] transition-all transform hover:scale-110 shadow-lg">
                <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
              </Link>
              <Link href="#" className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] md:border-[4px] border-[#2a1610] bg-[#8c5946]/40 flex items-center justify-center text-[#2a1610] hover:bg-[#2a1610] hover:text-[#f7cdb5] transition-all transform hover:scale-110 shadow-lg">
                <FiMail className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
              </Link>
              <Link href="#" className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] md:border-[4px] border-[#2a1610] bg-[#8c5946]/40 flex items-center justify-center text-[#2a1610] hover:bg-[#2a1610] hover:text-[#f7cdb5] transition-all transform hover:scale-110 shadow-lg">
                <FiPhoneCall className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
          
          {/* RIGHT COLUMN */}
          <div className="contact-right flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
            <div className="flex w-full max-w-md drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] h-full min-h-[500px]">
              
              <FilmRail />
              
              <form className="contact-form flex-grow bg-[#7d4b3c] p-6 sm:p-8 md:p-10 h-full" onSubmit={handleSubmit}>
                
                <div className="input-group mb-6 md:mb-8">
                  <input 
                    type="text" 
                    placeholder="YOUR NAME" 
                    required 
                    className="w-full bg-transparent border-b-2 border-[#3a150e] py-2 md:py-3 font-alkatra text-sm md:text-base font-bold text-white outline-none placeholder:text-[#f9e2d2] placeholder:font-bold placeholder:tracking-widest"
                  />
                </div>
                
                <div className="input-group mb-6 md:mb-8">
                  <input 
                    type="tel" 
                    placeholder="YOUR PHONE NUMBER" 
                    required 
                    className="w-full bg-transparent border-b-2 border-[#3a150e] py-2 md:py-3 font-alkatra text-sm md:text-base font-bold text-white outline-none placeholder:text-[#f9e2d2] placeholder:font-bold placeholder:tracking-widest"
                  />
                </div>
                
                <div className="input-group mb-8">
                  <input 
                    type="email" 
                    placeholder="YOUR EMAIL" 
                    required 
                    className="w-full bg-transparent border-b-2 border-[#3a150e] py-2 md:py-3 font-alkatra text-sm md:text-base font-bold text-white outline-none placeholder:text-[#f9e2d2] placeholder:font-bold placeholder:tracking-widest"
                  />
                </div>
                
                <div className="input-group mb-8 h-full">
                  <textarea 
                    placeholder="YOUR MESSAGE" 
                    rows={4} 
                    required 
                    className="w-full bg-[#4a2215] border-none rounded-lg p-4 md:p-5 font-alkatra text-sm md:text-base font-bold text-white outline-none placeholder:text-[#f9e2d2] placeholder:font-bold placeholder:tracking-widest resize-none shadow-inner"
                  ></textarea>
                </div>
                
                <div className="flex flex-col items-center mt-4">
                  <button type="submit" className="bg-[#3a150e] text-white font-alkatra font-bold text-base md:text-lg tracking-widest px-8 py-3 rounded-lg hover:bg-[#2a0e08] transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                    SUBMIT MESSAGE
                  </button>
                  <p className="text-[#f9e2d2] text-xs md:text-sm mt-4 font-bold tracking-wide">
                    Have a project in mind? Let&apos;s talk
                  </p>
                </div>
                
              </form>

              <FilmRail />
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
