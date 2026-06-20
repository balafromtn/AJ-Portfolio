import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import FeaturedWorks from "@/components/FeaturedWorks";
import PhotoDesigns from "@/components/PhotoDesigns";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Showreel />
      <FeaturedWorks />
      <PhotoDesigns />
      <About />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
