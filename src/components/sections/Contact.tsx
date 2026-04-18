import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => (
  <section id="contact" className="bg-gradient-soft py-20 md:py-28">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Visit Our Modern Clinic
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          Find Us in the Heart of <br />
          <span className="text-gradient">Addis Ababa</span>
        </h2>
        <p className="mt-5 text-muted-foreground">
          Located in Jemo 1, Addis Ababa — a modern, accessible facility with state-of-the-art
          equipment designed for your optimal dental care experience.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {[
            {
              icon: MapPin,
              title: "Location",
              text: "Jemo 1, Addis Ababa, Ethiopia",
            },
            { icon: Phone, title: "Phone", text: "+251 91 359 7532" },
            { icon: Mail, title: "Email", text: "hello@singtondental.com" },
            {
              icon: Clock,
              title: "Hours",
              text: "Mon–Sat: 8:30 AM – 7:00 PM",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.title}
                </p>
                <p className="mt-1 font-medium">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="rounded-3xl border border-border bg-card p-6 shadow-soft lg:col-span-3 md:p-8">
          <h3 className="text-2xl font-bold">Book an Appointment</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill out the form and we'll get back to you within 24 hours.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full name"
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <input
              type="email"
              placeholder="Email address"
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:col-span-2"
            />
            <select className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:col-span-2">
              <option>Choose a service</option>
              <option>Orthodontics</option>
              <option>Pediatric Dentistry</option>
              <option>Oral Surgery</option>
              <option>Cosmetic Dentistry</option>
            </select>
            <textarea
              rows={4}
              placeholder="How can we help?"
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:col-span-2"
            />
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-full bg-gradient-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.01]"
          >
            Request Appointment
          </button>
        </form>
      </div>
    </div>
  </section>
);
