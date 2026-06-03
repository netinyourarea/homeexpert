import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Shield, Lightbulb, Heart, Zap } from "lucide-react";
import technician from "@/assets/technician.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Home Internet Experts" },
      { name: "description", content: "Home Internet Experts is an independent third-party service assistance startup launched in 2026. Learn our mission, principles, and commitment to transparency." },
      { property: "og:title", content: "About — Home Internet Experts" },
      { property: "og:description", content: "About our independent service guidance mission." },
      { name: "canonical", content: "https://homeinternetexperts.io/about" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our story</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-bold max-w-3xl mx-auto">Independent guidance for service clarity.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Home Internet Experts was founded in 2026 with a single mission: help customers cut through the confusion and make informed decisions about their services. Call us at <span className="text-foreground font-semibold">(833) 381-8223</span> for independent guidance without vendor bias.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <img src={technician} alt="Home Internet Experts team" loading="lazy" width={1600} height={1100} className="rounded-3xl w-full h-[520px] object-cover shadow-elegant" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-3 gap-10">
        {[
          ["1,000+", "Customers guided"],
          ["100%", "Independent"],
          ["7-15d", "Money-back guarantee"],
        ].map(([n, l]) => (
          <div key={l} className="border-t border-border pt-6">
            <div className="text-5xl font-display font-bold text-gradient">{n}</div>
            <div className="mt-2 text-muted-foreground">{l}</div>
          </div>
        ))}
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Our principles</h2>
            <p className="mt-4 text-lg text-muted-foreground">The values that guide every decision we make — from service recommendations to customer support.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                t: "Complete independence",
                d: "We don't sell services, take commissions, or have vendor partnerships. Your interests come first.",
              },
              {
                icon: Lightbulb,
                t: "Radical transparency",
                d: "Clear disclosures about who we are, how we work, and what we charge. No hidden agendas.",
              },
              {
                icon: Heart,
                t: "Customer first",
                d: "Your clarity and service savings drive our mission, not vendor relationships or profits.",
              },
              {
                icon: Zap,
                t: "Ethical assistance",
                d: "We help customers understand their options without pushing any particular provider.",
              },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="group rounded-2xl border border-border bg-card p-8 hover:shadow-elegant transition hover:border-primary/30">
                <div className="w-12 h-12 rounded-xl bg-accent-gradient grid place-items-center shadow-soft group-hover:scale-110 transition">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
