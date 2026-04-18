import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alemayehu Tesfaye",
    quote:
      "I had a great experience at the clinic. The doctors were very professional and caring. I felt comfortable throughout my treatment.",
  },
  {
    name: "Sara Gebremariam",
    quote:
      "The staff were kind and the facilities are modern. I'm very happy with the service I received here.",
  },
  {
    name: "Bekele Degu",
    quote:
      "I recommend this clinic to anyone looking for excellent dental care. They helped me a lot with my treatment plan.",
  },
];

export const Testimonials = () => (
  <section id="testimonials" className="container py-20 md:py-28">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Testimonials
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
        What Our Patients <span className="text-gradient">Are Saying</span>
      </h2>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {reviews.map((r) => (
        <figure
          key={r.name}
          className="rounded-3xl border border-border bg-card p-7 shadow-soft"
        >
          <div className="flex items-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary" />
            ))}
          </div>
          <blockquote className="mt-4 text-foreground">"{r.quote}"</blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary font-bold text-primary-foreground">
              {r.name.charAt(0)}
            </span>
            <div>
              <p className="font-semibold">{r.name}</p>
              <p className="text-xs text-muted-foreground">Patient</p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);
