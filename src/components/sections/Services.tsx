import {
  Smile,
  Crown,
  Activity,
  Leaf,
  Baby,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    cat: "ORTHODONTICS",
    icon: Smile,
    title: "Straighten Your Perfect Smile",
    desc: "Personalized treatment plans that straighten teeth efficiently and comfortably.",
    duration: "12-24 months",
    success: "98%",
    treatments: ["Invisalign", "Ceramic Braces", "Metal Braces"],
    complexity: "Moderate",
  },
  {
    cat: "PROSTHODONTICS",
    icon: Crown,
    title: "Restore Your Natural Smile",
    desc: "Custom restorations that look, feel, and function like natural teeth.",
    duration: "2-6 weeks",
    success: "96%",
    treatments: ["Porcelain Crowns", "Dental Bridges", "Implant Crowns"],
    complexity: "Moderate",
  },
  {
    cat: "ENDODONTICS",
    icon: Activity,
    title: "Save Your Natural Teeth",
    desc: "Advanced techniques to save infected or damaged teeth, eliminating pain.",
    duration: "1-3 visits",
    success: "95%",
    treatments: ["Root Canal", "Composite Fillings", "Ceramic Inlays"],
    complexity: "Complex",
  },
  {
    cat: "PERIODONTICS",
    icon: Leaf,
    title: "Healthy Gums, Healthy Smile",
    desc: "Preventing, diagnosing, and treating gum disease to maintain your foundation.",
    duration: "2-8 weeks",
    success: "94%",
    treatments: ["Scaling & Root Planing", "Gum Grafting", "Pocket Reduction"],
    complexity: "Moderate",
  },
  {
    cat: "PEDIATRIC",
    icon: Baby,
    title: "Gentle Care for Little Smiles",
    desc: "A fun, comfortable environment where children learn healthy dental habits.",
    duration: "30-60 min",
    success: "99%",
    treatments: ["Preventive Cleanings", "Sealants", "Fluoride Treatments"],
    complexity: "Simple",
  },
  {
    cat: "ORAL SURGERY",
    icon: Stethoscope,
    title: "Advanced Surgical Solutions",
    desc: "Complex procedures performed safely with modern techniques and technology.",
    duration: "1-4 hours",
    success: "97%",
    treatments: ["Wisdom Tooth Removal", "Dental Implants", "Bone Grafts"],
    complexity: "Complex",
  },
];

export const Services = () => (
  <section id="services" className="bg-gradient-soft py-20 md:py-28">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Comprehensive Dental Services
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          How We Transform <br />
          <span className="text-gradient">Your Smile</span>
        </h2>
        <p className="mt-5 text-muted-foreground">
          From routine cleanings to complex procedures, our expert team provides comprehensive
          dental care using the latest technology for exceptional results.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.cat}
            className="group relative flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {s.cat}
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-muted p-3">
                <p className="text-[10px] uppercase text-muted-foreground">Duration</p>
                <p className="text-sm font-bold">{s.duration}</p>
              </div>
              <div className="rounded-xl bg-muted p-3">
                <p className="text-[10px] uppercase text-muted-foreground">Success</p>
                <p className="text-sm font-bold text-primary">{s.success}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {s.treatments.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs">
              <span className="text-muted-foreground">
                Complexity: <strong className="text-foreground">{s.complexity}</strong>
              </span>
              <a href="#contact" className="font-semibold text-primary hover:underline">
                Book →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
