import type { Metadata } from "next";
import { Quicksand, Anton, Bebas_Neue, Silkscreen, Bangers, Alkatra } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
  subsets: ["latin"],
});

const alkatra = Alkatra({
  variable: "--font-alkatra",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airen Pixel | Video Editing & Motion Graphics",
  description: "Dynamic speed ramps and cinematic transitions crafted to make every frame feel alive.",
  icons: {
    icon: "/assets/APFXLogo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${anton.variable} ${bebas.variable} ${bangers.variable} ${alkatra.variable} antialiased`}
      >
        <CustomCursor />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
