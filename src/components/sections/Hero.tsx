import heroImg from "@/assets/hero-dentists.jpg";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import React from "react";

interface HeroProps {
  cycleWords: string[];
}

export const Hero: React.FC<HeroProps> = ({ cycleWords }) => {
  const FADE = {
    hidden: { opacity: 0, y: 18 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, type: "spring" as const, stiffness: 90, damping: 18 },
    }),
  };

  return (
    <section className="relative isolate overflow-hidden min-h-[92vh]">
      {/* Full background image */}
      <motion.img
        src={heroImg}
        alt="Sington Dental Clinic doctor smiling"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      {/* Readability overlay: stronger on left, fades to transparent on right */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/80 to-white/0 md:from-white md:via-white/70 md:to-transparent" />
      {/* Subtle bottom fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent to-background" />

      {/* Top utility nav */}
      <div className="container relative z-20 flex items-center justify-between pt-6 md:pt-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/85 shadow-soft">
            <span className="font-serif-display text-base font-bold leading-none text-mint">
              S<span className="text-[10px]">D</span>
            </span>
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-foreground/80 sm:inline">
            Sington Dental
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+251913597532"
            className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-soft transition hover:scale-[1.02]"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-soft transition hover:scale-[1.02]"
          >
            Book
          </a>
        </div>
      </div>

      {/* Hero content */}
      <div className="container relative z-10 grid min-h-[78vh] grid-cols-1 items-center gap-8 pt-10 md:grid-cols-2 md:pt-6">
        <div className="relative z-10">
          <motion.h1
            custom={0}
            variants={FADE}
            initial="hidden"
            animate="show"
            className="font-sans text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ textShadow: "0 2px 30px hsl(0 0% 100% / 0.6)" }}
          >
            Your Perfect <br />
            <span className="text-primary">Smile Starts Here</span>
          </motion.h1>

          <motion.p
            custom={1}
            variants={FADE}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md text-lg font-medium text-foreground/80 md:text-xl"
          >
            Why Sington Dental is Addis Ababa's most trusted clinic for{" "}
            <span className="font-semibold text-primary">
              <AnimatedTextCycle words={cycleWords} interval={2400} />
            </span>
          </motion.p>

          <motion.div
            custom={2}
            variants={FADE}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#testimonials"
              className="inline-flex items-center justify-center rounded-full bg-mint px-7 py-3.5 text-sm font-semibold text-mint-foreground shadow-soft transition hover:scale-[1.03]"
            >
              Read Our Reviews
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-mint px-7 py-3.5 text-sm font-semibold text-mint-foreground shadow-soft transition hover:scale-[1.03]"
            >
              Book Now
            </a>
          </motion.div>
        </div>

        {/* Right column intentionally empty — image is the background */}
        <div aria-hidden />
      </div>
    </section>
  );
};
