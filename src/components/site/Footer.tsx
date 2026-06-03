import { Link } from "@tanstack/react-router";
import { Wifi } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-deep text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="w-9 h-9 rounded-xl bg-accent-gradient grid place-items-center">
              <Wifi className="w-5 h-5" />
            </span>
            Home Internet Experts
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
            Independent service assistance for cable, internet, and streaming. Launched 2026.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/60 leading-relaxed">
            <strong>Important Disclosure:</strong> Home Internet Experts is an independent third-party service assistance startup. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. All trademarks belong to their respective owners.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="tel:(833)381-8223">Call Now: (833) 381-8223</a></li>
            <li><Link to="/">FAQ</Link></li>
            <li><a href="mailto:support@homeinternetexperts.io">Email Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/legal" hash="terms">Terms of Service</Link></li>
            <li><Link to="/legal" hash="privacy">Privacy Policy</Link></li>
            <li><Link to="/refund">Refund Policy</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} Home Internet Experts. All rights reserved.</span>
          <span>Independent &middot; Transparent &middot; Unbiased</span>
        </div>
      </div>
    </footer>
  );
}
