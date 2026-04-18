export const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-bold text-primary">
              S
            </span>
            <span className="text-lg font-bold">Sington Dental Clinic</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/80">
            Creating confident smiles every day in Jemo 1, Addis Ababa. Compassionate,
            specialist-led dental care for the whole family.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#doctors" className="hover:text-white transition-colors">Doctors</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Visit Us</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Jemo 1, Addis Ababa</li>
            <li>+251 91 359 7532</li>
            <li>hello@singtondental.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/70 sm:flex-row">
        <p>© {new Date().getFullYear()} Sington Dental Clinic. All rights reserved.</p>
        <p>Built with care in Addis Ababa.</p>
      </div>
    </div>
  </footer>
);
