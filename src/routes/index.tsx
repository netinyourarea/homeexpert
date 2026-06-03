import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  ArrowRight,
  Gauge,
  Shield,
  Tv,
  Zap,
  Wifi,
  Headphones,
  Check,
  Star,
  Quote,
  PlugZap,
  CalendarCheck,
  Sparkles,
} from "lucide-react";
import hero from "@/assets/hero-fiber.jpg";
import family from "@/assets/family-tv.jpg";
import router from "@/assets/router.jpg";
import technician from "@/assets/technician.jpg";
import support from "@/assets/support.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home Internet Experts — Independent Service Assistance Platform" },
      { name: "description", content: "Home Internet Experts helps you navigate and optimize cable, internet, and streaming services. Independent guidance from a trusted startup." },
      { property: "og:title", content: "Home Internet Experts — Service Assistance & Guidance" },
      { property: "og:description", content: "Navigate your cable, internet, and streaming services with expert guidance." },
    ],
  }),
  component: Home,
});

const testimonials = [
  { name: "Sarah M.", role: "Small Business Owner, Texas", quote: "Home Internet Experts helped me understand my bill and find the right service mix. They're truly independent and transparent.", stars: 5 },
  { name: "James K.", role: "Freelancer, California", quote: "Finally someone who explains things clearly without a sales agenda. Worth every penny for the peace of mind.", stars: 5 },
  { name: "Elena & Marco", role: "Family, New York", quote: "We saved hours of research and got real answers. They walked us through everything without pressure.", stars: 5 },
];

const steps = [
  { icon: CalendarCheck, t: "Share your details", d: "Tell us about your current services and what you're looking to improve." },
  { icon: PlugZap, t: "Get guidance", d: "Our team analyzes your situation and provides personalized recommendations." },
  { icon: Sparkles, t: "Optimize your setup", d: "We guide you through implementation with ongoing support and assistance." },
];

const faqs = [
  { q: "Are you an official cable or internet service provider?", a: "No. Home Internet Experts is an independent third-party service assistance platform. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming provider." },
  { q: "Do you sell internet, cable, or streaming plans?", a: "No. We provide guidance, education, and assistance only. We do not sell services directly." },
  { q: "Do you charge for your services?", a: "Yes. Our service assistance fees are separate from provider charges. You continue paying your provider directly." },
  { q: "Will I still be billed by my service provider?", a: "Yes. Provider billing remains completely unchanged. You pay them directly as always." },
  { q: "Do you need my account passwords?", a: "No. We never request provider account passwords or sensitive credentials." },
  { q: "Which providers do you work with?", a: "We provide guidance on multiple providers including major names like Comcast®, Charter Spectrum®, AT&T™, and others. We have no partnership or affiliation with any provider." },
  { q: "Are your services refundable?", a: "Yes. Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. See our Refund Policy for full details." },
];

function Home() {
  return (
    <Layout>
      {/* HERO — redesigned: split layout for assistance positioning */}
      <section className="relative overflow-hidden bg-deep text-primary-foreground">
        {/* Ambient glow blobs */}
        <div aria-hidden className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-accent-gradient opacity-30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-40 right-0 w-[40rem] h-[40rem] rounded-full bg-primary opacity-25 blur-3xl" />

        {/* Grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pt-4 pb-16 md:pt-8 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-glow opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-glow" />
                </span>
                Expert guidance for cable, internet & streaming services
              </span>

              <h1 className="mt-7 text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
                Navigate your services
                <span className="relative inline-block">
                  <span className="text-gradient">with confidence.</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 300 14" fill="none">
                    <path d="M2 8 C 80 -2, 160 14, 298 6" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="g" x1="0" x2="1">
                        <stop offset="0%" stopColor="oklch(0.72 0.16 195)" />
                        <stop offset="100%" stopColor="oklch(0.45 0.16 235)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg text-primary-foreground/75 leading-relaxed">
                Navigate cable, internet, and streaming services with clarity. Call our experts at <span className="text-white font-semibold">(833) 381-8223</span> to understand your options, optimize your setup, and get the most from your services.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="tel:(833)381-8223"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-7 py-3.5 text-sm font-semibold shadow-elegant hover:opacity-90 transition"
                >
                  Call Now (833) 381-8223 <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Hero image card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-elegant">
                <img src={hero} alt="Independent service guidance" className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-deep via-deep/30 to-transparent" />

                {/* Info card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5">
                  <div className="flex items-center justify-between text-xs text-primary-foreground/70">
                    <span>SINCE 2026</span>
                    <span className="text-glow">● independent</span>
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl font-display font-bold">100%</span>
                    <span className="text-sm text-primary-foreground/70">Unbiased</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-full bg-accent-gradient" />
                  </div>
                  <div className="mt-2 text-xs text-primary-foreground/60">No vendor relationships</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="hidden md:flex absolute -top-4 -left-4 items-center gap-2 rounded-2xl bg-card text-foreground px-4 py-3 shadow-elegant">
                <div className="w-9 h-9 rounded-lg bg-accent-gradient grid place-items-center">
                  <Shield className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold">Fully independent</div>
                  <div className="text-muted-foreground">No affiliations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/10 border border-white/10">
            {[
              ["24/7", "Support"],
              ["100%", "Independent"],
              ["7-15d", "Refund window"],
              ["No", "Contracts"],
            ].map(([n, l]) => (
              <div key={l} className="bg-deep px-6 py-6">
                <div className="text-3xl md:text-4xl font-display font-bold">{n}</div>
                <div className="mt-1 text-sm text-primary-foreground/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HOME INTERNET EXPERTS */}
      <section id="why" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Why Home Internet Experts</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Guidance without the sales agenda.</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, t: "Unbiased analysis", d: "We have no financial incentives. Your service clarity comes first." },
            { icon: Shield, t: "Full transparency", d: "Clear disclosures about our role, fees, and independence." },
            { icon: Gauge, t: "Expert guidance", d: "Real expertise navigating cable, internet, and streaming." },
            { icon: Tv, t: "Personalized support", d: "Custom recommendations based on your unique situation." },
            { icon: Headphones, t: "Ongoing assistance", d: "Help through implementation and continued support." },
            { icon: Wifi, t: "No vendor ties", d: "We do not sell, promote, or profit from any provider." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-2xl border border-border bg-card p-7 hover:shadow-elegant transition">
              <div className="w-12 h-12 rounded-xl bg-accent-gradient grid place-items-center shadow-soft">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">How it works</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Three simple steps to clarity.</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6 relative">
            {steps.map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="relative rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-deep text-primary-foreground grid place-items-center font-display font-bold">
                  0{i + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent-gradient grid place-items-center">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDEPENDENCE FOCUS */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <img src={family} alt="Families making informed service decisions" loading="lazy" width={1600} height={1100} className="rounded-3xl shadow-elegant object-cover w-full h-[480px]" />
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our commitment</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Truly independent guidance.</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Home Internet Experts is a startup founded in 2026 with one mission: help customers understand and optimize their service options without any vendor bias or hidden agendas. We don't sell services. We don't take commissions. We just help.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {["No financial incentives from any provider", "Transparent about our role and fees", "7-15 day refund guarantee", "24/7 independent support"].map((x) => (
              <li key={x} className="flex gap-3"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary" />{x}</li>
            ))}
          </ul>
          <a href="tel:(833)381-8223" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
            Call Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">What customers say</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Real guidance from a real independent company.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-card border border-border p-8 shadow-soft">
                <Quote className="w-8 h-8 text-primary/40" />
                <blockquote className="mt-4 text-foreground leading-relaxed">"{t.quote}"</blockquote>
                <div className="mt-6 flex items-center justify-between">
                  <figcaption>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </figcaption>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT & ASSISTANCE */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our support</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Real experts, always available.</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Our team provides genuine guidance without sales pressure. We're independent consultants focused on helping you make informed decisions about your services.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {[["24/7", "availability"], ["100%", "independent"], ["4.9/5", "customer rating"], ["No", "commissions"]].map(([a, b]) => (
              <div key={b} className="rounded-2xl border border-border p-5">
                <div className="text-2xl font-display font-bold">{a}</div>
                <div className="text-xs text-muted-foreground mt-1">{b}</div>
              </div>
            ))}
          </div>
        </div>
        <img src={support} alt="Home Internet Experts support team" loading="lazy" className="order-1 md:order-2 rounded-3xl shadow-elegant object-cover w-full h-[480px]" />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Questions, answered.</h2>
            <p className="mt-5 text-muted-foreground">
              Couldn't find what you need? <Link to="/contact" className="text-primary font-medium">Get in touch</Link> — we usually reply within an hour.
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold text-lg">{f.q}</span>
                  <span className="ml-4 w-8 h-8 rounded-full border border-border grid place-items-center text-muted-foreground group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-3xl bg-hero-gradient text-primary-foreground p-12 md:p-20 text-center shadow-elegant">
          <h2 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto">Ready for independent guidance?</h2>
          <p className="mt-5 text-primary-foreground/80 max-w-xl mx-auto">
            Speak with our team about your cable, internet, and streaming services. No sales pressure, just honest expertise.
          </p>
          <a
            href="tel:(833)381-8223"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white text-deep px-8 py-4 text-sm font-semibold hover:opacity-90 transition"
          >
            Call Now: (833) 381-8223 <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
