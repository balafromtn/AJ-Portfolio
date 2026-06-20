"use client";

import Link from "next/link";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://wa.me/919876543210?text=Hi%20Ajay,%20I%20want%20to%20hire%20you%20for%20a%20project.', '_blank');
  };

  return (
    <section className="contact-section py-24" id="contact">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="contact-left">
            <h2 className="section-badge tilt-badge-left inline-block bg-[#5d3a2f] text-white px-6 py-2 text-3xl transform rotate-3 shadow-[4px_4px_0_rgba(0,0,0,0.2)] font-heading mb-8">
              CONTACT
            </h2>
            <p className="contact-desc my-8 text-xl font-semibold leading-relaxed max-w-lg">
              WHETHER YOU&apos;RE A CREATOR, BRAND, OR BUSINESS, I&apos;M HERE TO TRANSFORM YOUR IDEAS INTO ENGAGING VISUAL CONTENT THROUGH HIGH-RETENTION EDITING, PHOTO DESIGNS AND MOTION GRAPHICS.
            </p>
            <div className="social-icons flex gap-4 mt-8">
              <Link href="#" className="w-12 h-12 rounded-full border-2 border-[#5d3a2f] text-[#5d3a2f] flex items-center justify-center font-bold hover:bg-[#5d3a2f] hover:text-[#f7cdb5] transition-colors">IG</Link>
              <Link href="#" className="w-12 h-12 rounded-full border-2 border-[#5d3a2f] text-[#5d3a2f] flex items-center justify-center font-bold hover:bg-[#5d3a2f] hover:text-[#f7cdb5] transition-colors">WA</Link>
              <Link href="#" className="w-12 h-12 rounded-full border-2 border-[#5d3a2f] text-[#5d3a2f] flex items-center justify-center font-bold hover:bg-[#5d3a2f] hover:text-[#f7cdb5] transition-colors">EM</Link>
              <Link href="#" className="w-12 h-12 rounded-full border-2 border-[#5d3a2f] text-[#5d3a2f] flex items-center justify-center font-bold hover:bg-[#5d3a2f] hover:text-[#f7cdb5] transition-colors">PH</Link>
            </div>
          </div>
          
          <div className="contact-right film-border-frame-vertical p-8 bg-[#111] rounded-lg text-[#5d3a2f]">
            <form className="contact-form bg-[#f7cdb5] p-8 rounded" onSubmit={handleSubmit}>
              <div className="input-group mb-6">
                <input 
                  type="text" 
                  placeholder="YOUR NAME" 
                  required 
                  className="w-full bg-transparent border-b-2 border-[#5d3a2f] py-4 font-body text-base font-semibold text-[#5d3a2f] outline-none placeholder:text-[#5d3a2f]/70"
                />
              </div>
              <div className="input-group mb-6">
                <input 
                  type="tel" 
                  placeholder="YOUR PHONE NUMBER" 
                  required 
                  className="w-full bg-transparent border-b-2 border-[#5d3a2f] py-4 font-body text-base font-semibold text-[#5d3a2f] outline-none placeholder:text-[#5d3a2f]/70"
                />
              </div>
              <div className="input-group mb-6">
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL" 
                  required 
                  className="w-full bg-transparent border-b-2 border-[#5d3a2f] py-4 font-body text-base font-semibold text-[#5d3a2f] outline-none placeholder:text-[#5d3a2f]/70"
                />
              </div>
              <div className="input-group mb-8">
                <textarea 
                  placeholder="YOUR MESSAGE" 
                  rows={4} 
                  required 
                  className="w-full bg-transparent border-b-2 border-[#5d3a2f] py-4 font-body text-base font-semibold text-[#5d3a2f] outline-none placeholder:text-[#5d3a2f]/70 resize-none"
                ></textarea>
              </div>
              <button type="submit" className="liquid-btn submit-btn w-full text-center rounded-md border-none">
                SUBMIT MESSAGE
              </button>
              <p className="text-center text-sm mt-4 font-semibold">Have a project in mind? Let&apos;s talk</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
