import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Services", href: "#services" },
  { label: "Ages", href: "#ages" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const GlassNavbar = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      )}
      aria-hidden={!visible}
    >
      <nav className="glass flex items-center gap-2 rounded-full px-3 py-2 sm:gap-6 sm:px-4">
        <a href="#top" className="flex items-center gap-2 pl-2 pr-1">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm">
            S
          </span>
          <span className="hidden font-semibold tracking-tight text-foreground sm:inline">
            Sington
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="ml-1 hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:opacity-90 sm:inline-flex"
        >
          <Phone className="h-3.5 w-3.5" />
          Book Now
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-foreground md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="glass mt-2 rounded-3xl p-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-full bg-foreground px-4 py-2 text-center text-sm font-semibold text-background"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
