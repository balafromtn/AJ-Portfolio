import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <center className="absolute top-4 md:top-8 w-full z-[100]">
      <nav className="inline-flex justify-center w-max min-w-[85%] md:min-w-[500px] glass-nav rounded-full px-5 md:px-12 py-3 md:py-4 shadow-lg">
        <div className="flex justify-between items-center w-full max-w-[600px] flex-nowrap">
          <Link href="#" className="flex-shrink-0 mr-4 md:mr-8">
            <Image
              src="/assets/APFXLogo.png"
              alt="Airen Pixel Logo"
              width={54}
              height={54}
              className="rounded-full border border-white/40 object-cover w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
            />
          </Link>
          <div className="flex gap-4 sm:gap-6 md:gap-12 items-center flex-nowrap whitespace-nowrap">
            <Link href="/#works" className="nav-link text-white font-bold text-[0.85rem] sm:text-[1rem] md:text-[1.2rem] hover:text-[#f7cdb5]">WORKS</Link>
            <Link href="/#about" className="nav-link text-white font-bold text-[0.85rem] sm:text-[1rem] md:text-[1.2rem] hover:text-[#f7cdb5]">ABOUT</Link>
            <Link href="/#contact" className="nav-link text-white font-bold text-[0.85rem] sm:text-[1rem] md:text-[1.2rem] hover:text-[#f7cdb5]">CONTACT</Link>
          </div>
        </div>
      </nav>
    </center>
  );
}
