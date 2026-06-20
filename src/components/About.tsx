import Image from "next/image";

export default function About() {
  return (
    <section className="about-section py-24" id="about">
      <div className="container mx-auto px-8 max-w-7xl about-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="about-image-wrapper relative flex justify-center">
          <div className="section-badge tilt-badge inline-block bg-[#5d3a2f] text-white px-6 py-2 text-2xl transform -rotate-5 shadow-[4px_4px_0_rgba(0,0,0,0.2)] font-heading absolute -top-5 left-1/2 -translate-x-1/2 z-10">
            ABOUT ME
          </div>
          <div className="profile-circle w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[10px] border-[#c92a2a] shadow-[0_0_0_10px_white,0_10px_30px_rgba(0,0,0,0.3)] relative">
            <Image
              src="/assets/main.png"
              alt="Ajay Kumar"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="about-text-content">
          <p className="text-xl font-semibold mb-4 leading-relaxed">
            HI, I&apos;M AJAY KUMAR,
          </p>
          <p className="text-xl font-semibold mb-4 leading-relaxed">
            THE CREATIVE MIND BEHIND AIREN PIXEL.
          </p>
          <p className="text-xl font-semibold mb-6 leading-relaxed">
            I SPECIALIZE IN VIDEO EDITING, MOTION GRAPHICS, PHOTO EDITING AND
            CINEMATIC CONTENT THAT HELPS CREATORS AND BRANDS CAPTURE ATTENTION
            AND ENGAGE THEIR AUDIENCE.
          </p>

          <h3 className="section-badge small-badge mt-8 inline-block bg-[#5d3a2f] text-white px-4 py-1.5 text-xl transform -rotate-3 shadow-[4px_4px_0_rgba(0,0,0,0.2)] font-heading">
            TOOL STACK
          </h3>
          <div className="tool-icons flex gap-4 mt-6">
            <div className="w-[60px] h-[60px] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-transform duration-300 relative overflow-hidden bg-white flex items-center justify-center p-2">
              <Image src="/assets/capcut-hero.webp" alt="CapCut" width={40} height={40} className="object-contain" />
            </div>
            <div className="w-[60px] h-[60px] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-transform duration-300 relative overflow-hidden bg-white flex items-center justify-center p-2">
              <Image src="/assets/alight-motion-hero.webp" alt="Alight Motion" width={40} height={40} className="object-contain" />
            </div>
            <div className="w-[60px] h-[60px] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-transform duration-300 relative overflow-hidden bg-white flex items-center justify-center p-2">
              <Image src="/assets/picsart-icon.webp" alt="Picsart" width={40} height={40} className="object-contain" />
            </div>
            <div className="w-[60px] h-[60px] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-transform duration-300 relative overflow-hidden bg-white flex items-center justify-center p-2">
              <Image src="/assets/snapseed-icon.webp" alt="Snapseed" width={40} height={40} className="object-contain" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Film Marquee */}
      <div className="marquee-container film-border mt-24">
        <div className="marquee-content empty-film h-[30px]"></div>
      </div>
    </section>
  );
}
