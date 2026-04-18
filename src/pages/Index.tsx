import { GlassNavbar } from "@/components/GlassNavbar";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { About } from "@/components/sections/About";
import { Doctors } from "@/components/sections/Doctors";
import { Ages } from "@/components/sections/Ages";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

import d1 from "@/assets/d1.jpg";
import d2 from "@/assets/d2.jpg";
import d3 from "@/assets/d3.jpg";
import d4 from "@/assets/d4.jpg";
import smile from "@/assets/smile-1.jpg";
import kid from "@/assets/kid-smile.jpg";
import dentist from "@/assets/dentist-tools.jpg";
import clinic from "@/assets/clinic-interior.jpg";

const MARQUEE_IMAGES = [d2, d1, d3, smile, d4, kid, dentist, clinic];

const Index = () => {
  return (
    <main id="top" className="min-h-screen bg-background">
      <GlassNavbar />

      <Hero
        cycleWords={[
          "braces",
          "implants",
          "kids dentistry",
          "cosmetic care",
          "checkups",
          "confident smiles",
        ]}
      />

      <MarqueeStrip images={MARQUEE_IMAGES} />

      <About />
      <Doctors />
      <Ages />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
