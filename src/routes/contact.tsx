import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Home Internet Experts" },
      { name: "description", content: "Get assistance from our independent team. Contact us today for guidance on cable, internet, and streaming services. We respond within 24 hours." },
      { property: "og:title", content: "Contact — Home Internet Experts" },
      { property: "og:description", content: "Contact our independent assistance team." },
      { name: "canonical", content: "https://homeinternetexperts.io/contact" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-glow">Contact</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold max-w-3xl">Let's help you navigate your services.</h1>
          <p className="mt-5 max-w-xl text-primary-foreground/80 text-lg">Call us directly for immediate assistance or tell us about your needs below. We're here to help.</p>
          <a
            href="tel:(833)381-8223"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white text-deep px-8 py-4 text-lg font-bold shadow-elegant hover:opacity-90 transition"
          >
            <Phone className="w-5 h-5" /> Call Now: (833) 381-8223
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-5 rounded-3xl border border-border bg-card p-8 shadow-soft"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Phone number" name="phone" type="tel" />
            <div>
              <label className="text-sm font-medium">What can we help you with?</label>
              <select className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm">
                <option>Understand my current services</option>
                <option>Optimize my service setup</option>
                <option>Compare service options</option>
                <option>General inquiry</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Tell us more</label>
              <textarea rows={4} placeholder="Describe your situation, current providers, or questions..." className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm" />
            </div>
            <div className="flex flex-wrap gap-4">
              <button type="submit" className="rounded-full border border-border bg-background px-7 py-3 text-sm font-semibold hover:bg-secondary transition w-full md:w-auto">
                {sent ? "Thanks! We'll be in touch." : "Submit Request"}
              </button>
              <a href="tel:(833)381-8223" className="rounded-full bg-accent-gradient text-primary-foreground px-7 py-3 text-sm font-semibold shadow-elegant w-full md:w-auto text-center">
                Call Now
              </a>
            </div>
          </form>
        </div>
        <div className="md:col-span-2 space-y-6">
          <Info icon={Phone} title="Support & Assistance" body="Call Now: (833) 381-8223" />
          <Info icon={Mail} title="Email" body="support@homeinternetexperts.io" />
          <Info icon={MapPin} title="Fully Remote" body="We serve customers nationwide" />
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Important</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Home Internet Experts is an independent third-party service assistance startup. We are not affiliated with any provider.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input id={name} name={name} type={type} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm" />
    </div>
  );
}

function Info({ icon: I, title, body }: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <I className="w-6 h-6 text-primary" />
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
