import { ShieldCheck, Zap, Sparkles } from "lucide-react";
import clinic from "@/assets/clinic-interior.jpg";

const features = [
  { icon: ShieldCheck, title: "Safe & Sterile Environment" },
  { icon: Zap, title: "Efficient Service" },
  { icon: Sparkles, title: "Expert Team" },
];

export const About = () => (
  <section id="about" className="container py-20 md:py-28">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="relative">
        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-primary opacity-10 blur-2xl" />
        <img
          src={clinic}
          alt="Sington Dental Clinic interior"
          loading="lazy"
          width={900}
          height={1200}
          className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-elegant"
        />
        <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-card p-5 shadow-elegant sm:block">
          <p className="text-3xl font-bold text-primary">15+</p>
          <p className="text-xs text-muted-foreground">Years experience</p>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          About Our Practice
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          Creating Confident <br /> Smiles Everyday
        </h2>
        <p className="mt-5 text-muted-foreground">
          We specialize in braces, oral surgery, pediatric dentistry, and gentle restorative
          care, creating confident smiles for our community every day. Our practice is built on
          a foundation of excellence, compassion, and innovation — every patient deserves
          personalized care in a comfortable, welcoming environment.
        </p>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Why Choose Sington
          </p>
          <ul className="mt-4 space-y-3">
            {features.map((f) => (
              <li key={f.title} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <span className="font-medium">{f.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-3xl font-bold text-primary">100%</p>
            <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
