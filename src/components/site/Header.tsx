import { Link } from "@tanstack/react-router";
import { Wifi } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="w-9 h-9 rounded-xl bg-accent-gradient grid place-items-center shadow-elegant">
            <Wifi className="w-5 h-5 text-primary-foreground" />
          </span>
          <span>Home Internet Experts</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:(833)381-8223"
          className="hidden md:inline-flex items-center rounded-full bg-accent-gradient px-5 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 transition"
        >
          Call Now
        </a>
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-foreground mb-1.5" />
          <div className="w-5 h-0.5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border px-6 py-4 space-y-4">
          <div className="space-y-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <a
            href="tel:(833)381-8223"
            className="flex items-center justify-center rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 transition"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}
