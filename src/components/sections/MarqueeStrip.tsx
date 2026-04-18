interface MarqueeStripProps {
  images: string[];
}

export const MarqueeStrip = ({ images }: MarqueeStripProps) => {
  const duplicated = [...images, ...images];
  return (
    <section className="bg-background py-10 md:py-14">
      <div className="marquee-mask relative">
        <div className="flex w-max animate-marquee gap-5">
          {duplicated.map((src, i) => (
            <div
              key={i}
              className="relative h-56 w-44 shrink-0 overflow-hidden rounded-3xl shadow-soft sm:h-64 sm:w-52 md:h-72 md:w-60"
            >
              <img
                src={src}
                alt="Smiling patient"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
