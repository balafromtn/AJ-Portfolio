import Image from 'next/image';

export default function PhotoDesigns() {
  return (
    <section className="photo-designs-section py-24">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="section-title-wrapper text-center mb-16">
          <h2 className="section-badge inline-block bg-[#5d3a2f] text-white px-6 py-2 text-3xl transform -rotate-3 shadow-[4px_4px_0_rgba(0,0,0,0.2)] font-heading">
            PHOTO DESIGNS
          </h2>
        </div>
        
        <div className="photo-grid grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="photo-card transform -rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105 film-border-frame p-5 bg-[#111] rounded-lg">
            <Image src="/assets/Insta-Thambnail.jpg" alt="Insta Thumbnail" width={600} height={400} className="w-full h-auto block" />
          </div>
          <div className="photo-text">
            <h3 className="text-[1.8rem] text-[#5d3a2f] mb-2 font-heading">DESIGNED TO GET CLICKS</h3>
            <p className="font-semibold text-lg">ATTENTION-GRABBING THUMBNAILS AND SOCIAL MEDIA CREATIVES BUILT TO STAND OUT INSTANTLY.</p>
          </div>
          
          <div className="photo-text text-left md:text-right order-4 md:order-none">
            <h3 className="text-[1.8rem] text-[#5d3a2f] mb-2 font-heading">STORIES TOLD THROUGH DESIGN</h3>
            <p className="font-semibold text-lg">LARGE-SCALE VISUAL COMPOSITIONS DESIGNED TO SHOWCASE PEOPLE, ACHIEVEMENTS, AND MEMORABLE MOMENTS.</p>
          </div>
          <div className="photo-card film-border-frame-vertical p-5 bg-[#111] rounded-lg order-3 md:order-none">
            <Image src="/assets/College-Group-Photo.jpg" alt="College Group Photo" width={600} height={400} className="w-full h-auto block" />
          </div>
          
          <div className="photo-card transform -rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105 film-border-frame-vertical p-5 bg-[#111] rounded-lg order-5 md:order-none">
            <Image src="/assets/Greeting.jpg" alt="Greeting" width={600} height={400} className="w-full h-auto block" />
          </div>
          <div className="photo-text text-left md:text-right order-6 md:order-none">
            <h3 className="text-[1.8rem] text-[#5d3a2f] mb-2 font-heading">MORE THAN JUST A GREETING</h3>
            <p className="font-semibold text-lg">CUSTOM-DESIGNED POSTERS THAT TURN SPECIAL OCCASIONS INTO MEMORABLE VISUAL EXPERIENCES.</p>
          </div>
        </div>
      </div>
      
      {/* Film Marquee */}
      <div className="marquee-container film-border mt-16">
        <div className="marquee-content empty-film h-[30px]"></div>
      </div>
    </section>
  );
}
