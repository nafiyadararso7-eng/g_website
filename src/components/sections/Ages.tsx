import { Check } from "lucide-react";
import kid from "@/assets/kid-smile.jpg";
import d1 from "@/assets/d1.jpg";
import smile from "@/assets/smile-1.jpg";

const groups = [
  {
    age: "Ages 2-12",
    audience: "KIDS",
    count: "2,500+",
    success: "99%",
    title: "Pediatric Dental Care",
    desc: "Gentle, fun dental care designed to make your child's visit comfortable while building healthy habits for life.",
    benefits: [
      "Fun, stress-free environment",
      "Specialized pediatric techniques",
      "Parent education and support",
      "Early habit formation",
    ],
    treatments: [
      { name: "Preventive Care", time: "30-45 min", popular: "95%" },
      { name: "Early Orthodontics", time: "45-60 min", popular: "75%" },
    ],
    img: kid,
  },
  {
    age: "Ages 13-19",
    audience: "TEENS",
    count: "1,800+",
    success: "97%",
    title: "Adolescent Dental Solutions",
    desc: "Specialized treatments for teenagers focusing on confidence-building and long-term oral health during crucial developmental years.",
    benefits: [
      "Confidence-boosting treatments",
      "Flexible scheduling around school",
      "Teen-friendly environment",
      "Social media worthy results",
    ],
    treatments: [
      { name: "Invisalign Teen", time: "12-18 months", popular: "85%" },
      { name: "Traditional Braces", time: "18-24 months", popular: "70%" },
    ],
    img: d1,
  },
  {
    age: "Ages 20+",
    audience: "ADULTS",
    count: "5,200+",
    success: "98%",
    title: "Comprehensive Adult Care",
    desc: "Advanced dental solutions for adults seeking to maintain, restore, or enhance their smile with cutting-edge technology and techniques.",
    benefits: [
      "Professional-friendly treatments",
      "Advanced technology and techniques",
      "Flexible appointment scheduling",
      "Long-lasting, natural results",
    ],
    treatments: [
      { name: "Invisalign", time: "12-18 months", popular: "90%" },
      { name: "Dental Implants", time: "3-6 months", popular: "80%" },
    ],
    img: smile,
  },
];

export const Ages = () => (
  <section id="ages" className="container py-20 md:py-28">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Personalized Care for Every Age
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
        Dental Care Tailored <br />
        <span className="text-gradient">For Every Life Stage</span>
      </h2>
      <p className="mt-5 text-muted-foreground">
        From your child's first tooth to your golden years, we provide specialized dental care
        that grows with you and your family's unique needs.
      </p>
    </div>

    <div className="mt-14 space-y-10">
      {groups.map((g, i) => (
        <article
          key={g.audience}
          className={`grid gap-8 overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-soft md:grid-cols-2 md:p-10 ${
            i % 2 ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img src={g.img} alt={g.title} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute left-4 top-4 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              {g.age}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold tracking-wider text-accent-foreground">
                {g.audience}
              </span>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">{g.count}</strong> patients
              </span>
              <span className="text-sm text-muted-foreground">
                <strong className="text-primary">{g.success}</strong> success
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-bold md:text-3xl">{g.title}</h3>
            <p className="mt-3 text-muted-foreground">{g.desc}</p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {g.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {g.treatments.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-border bg-background p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{t.name}</p>
                    <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
                      Popular
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{t.time}</span>
                    <span className="font-semibold text-primary">{t.popular}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
