import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Showreel from "@/components/Showreel";
import FeaturedWorks from "@/components/FeaturedWorks";
import PhotoDesigns from "@/components/PhotoDesigns";
import Services from "@/components/Services";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Showreel />
      <FeaturedWorks />
      <PhotoDesigns />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
