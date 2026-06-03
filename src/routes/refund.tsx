import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { RefreshCcw, ShieldCheck, Clock, CreditCard } from "lucide-react";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Home Internet Experts" },
      { name: "description", content: "Home Internet Experts's 7-15 day refund guarantee. Clear, transparent refund procedures explained simply. Risk-free service assistance." },
      { property: "og:title", content: "Refund Policy — Home Internet Experts" },
      { property: "og:description", content: "7-15 day refund guarantee for our independent service assistance." },
      { name: "canonical", content: "https://homeinternetexperts.io/refund" },
    ],
  }),
  component: Refund,
});

const highlights = [
  { icon: ShieldCheck, t: "7-15 day guarantee", d: "Refund requests within 7 to 15 days of purchase, based on service type." },
  { icon: Clock, t: "5 business days", d: "Refunds are processed to the original payment method within 5 business days." },
  { icon: CreditCard, t: "Clear eligibility", d: "Eligibility depends on service type and whether assistance was delivered." },
];

function Refund() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <RefreshCcw className="w-3.5 h-3.5" /> Refund Policy
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold">Risk-free service assistance.</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80 text-lg">
            We're confident in our guidance. If our assistance doesn't meet your needs, we offer refunds within 7 to 15 days — no questions asked.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-accent-gradient grid place-items-center">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-[220px_1fr] gap-12">
          <aside className="md:sticky md:top-24 h-fit">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Effective June 1, 2026</p>
            <h2 className="mt-2 text-sm font-semibold">On this page</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#guarantee" className="hover:text-primary">Refund guarantee</a></li>
              <li><a href="#eligibility" className="hover:text-primary">Eligibility</a></li>
              <li><a href="#process" className="hover:text-primary">How to request</a></li>
              <li><a href="#exceptions" className="hover:text-primary">Exceptions</a></li>
            </ul>
          </aside>
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <article id="guarantee" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground">7 to 15 Day Refund Guarantee</h2>
              <p className="mt-4">Home Internet Experts offers refunds for service assistance purchased within the past 7 to 15 days, depending on the type of assistance provided. The refund window varies based on whether assistance has already been delivered and the complexity of the service.</p>
              <p className="mt-3">If you request a refund within the eligible window, we will refund your service assistance fee in full. Refunds are processed to the original payment method within 5 business days of approval.</p>
            </article>
            <article id="eligibility" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground">Eligibility</h2>
              <p className="mt-4">The refund guarantee applies to all customers who purchase our service assistance. Eligibility depends on:</p>
              <ul className="mt-3 space-y-2 ml-4">
                <li>• Service type and complexity</li>
                <li>• Whether assistance has already been provided</li>
                <li>• Whether the refund window (7-15 days) has elapsed</li>
              </ul>
              <p className="mt-3">Refunds may be denied if requested outside the 7 to 15 day window, or if our terms have been violated.</p>
            </article>
            <article id="process" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground">How to Request a Refund</h2>
              <p className="mt-4">To request a refund, contact us at <a href="mailto:support@homeinternetexperts.io" className="text-primary font-medium">support@homeinternetexperts.io</a> with your customer account number and reason for the refund request. You may also contact us by phone if needed.</p>
              <p className="mt-3">We will review your request and respond within 2 business days. Approved refunds are processed to your original payment method within 5 business days.</p>
            </article>
            <article id="exceptions" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground">Exceptions</h2>
              <p className="mt-4">Refunds may be denied in the following cases:</p>
              <ul className="mt-3 space-y-2 ml-4">
                <li>• Refund request is outside the 7 to 15 day window</li>
                <li>• Fraud or misuse of our services is detected</li>
                <li>• Our Terms of Service have been violated</li>
                <li>• Full assistance has already been provided and completed</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}
