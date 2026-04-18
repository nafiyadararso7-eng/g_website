import { Star } from "lucide-react";
import d2 from "@/assets/d2.jpg";
import d3 from "@/assets/d3.jpg";
import d4 from "@/assets/d4.jpg";

const doctors = [
  {
    name: "Dr. Shimelis Assefa",
    role: "Lead Dentist & Founder",
    creds: "DDS, MS, FAGD",
    img: d2,
    rating: 4.8,
    years: "15+",
    patients: "5,000+",
    reviews: 324,
    specialties: ["Cosmetic Dentistry", "Implantology", "Oral Surgery"],
    speaks: "English, Amharic",
  },
  {
    name: "Dr. Shiv Shanker",
    role: "Orthodontist Specialist",
    creds: "DDS, MS",
    img: d3,
    rating: 4.9,
    years: "12+",
    patients: "3,500+",
    reviews: 256,
    specialties: ["Orthodontics", "Invisalign", "Pediatric Dentistry"],
    speaks: "English, Hindi, Amharic",
  },
  {
    name: "Dr. Jacob Jones",
    role: "Periodontal Specialist",
    creds: "DDS, MS",
    img: d4,
    rating: 4.9,
    years: "10+",
    patients: "2,800+",
    reviews: 189,
    specialties: ["Periodontics", "Gum Surgery", "Dental Implants"],
    speaks: "English, French, Amharic",
  },
];

export const Doctors = () => (
  <section id="doctors" className="bg-gradient-soft py-20 md:py-28">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Meet Our Expert Team
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          World-Class <span className="text-gradient">Dental Professionals</span>
        </h2>
        <p className="mt-5 text-muted-foreground">
          Our team combines years of experience with cutting-edge technology to deliver
          exceptional care tailored to your unique needs.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4 text-center">
        {[
          ["15+", "Years Experience"],
          ["1K+", "Happy Patients"],
          ["98%", "Success Rate"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-2xl border border-border bg-card p-5">
            <p className="text-2xl font-bold text-primary md:text-3xl">{n}</p>
            <p className="mt-1 text-xs text-muted-foreground md:text-sm">{l}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((d) => (
          <article
            key={d.name}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:shadow-elegant"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                <Star className="h-3 w-3 fill-primary text-primary" />
                {d.rating}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{d.name}</h3>
              <p className="text-sm text-primary">{d.role}</p>
              <p className="mt-1 text-xs text-muted-foreground">{d.creds}</p>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-muted py-2">
                  <p className="text-sm font-bold">{d.years}</p>
                  <p className="text-[10px] text-muted-foreground">Years</p>
                </div>
                <div className="rounded-xl bg-muted py-2">
                  <p className="text-sm font-bold">{d.patients}</p>
                  <p className="text-[10px] text-muted-foreground">Patients</p>
                </div>
                <div className="rounded-xl bg-muted py-2">
                  <p className="text-sm font-bold">{d.reviews}</p>
                  <p className="text-[10px] text-muted-foreground">Reviews</p>
                </div>
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Specialties
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {d.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Speaks: {d.speaks}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
