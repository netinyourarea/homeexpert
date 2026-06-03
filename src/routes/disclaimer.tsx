import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Home Internet Experts" },
      { name: "description", content: "Important disclaimers about Home Internet Experts's independence, services, and limitations. We are not an ISP and provide guidance only." },
      { property: "og:title", content: "Disclaimer — Home Internet Experts" },
      { property: "og:description", content: "Important disclaimers about our services and independence." },
      { name: "canonical", content: "https://homeinternetexperts.io/disclaimer" },
    ],
  }),
  component: Disclaimer,
});

const sections = [
  {
    id: "independence",
    title: "We Are Not an ISP",
    body: "Home Internet Experts is an independent third-party service assistance startup, not an Internet Service Provider (ISP), cable provider, or streaming provider. We do not sell, provide, or install internet, cable, or streaming services. We are not affiliated with, endorsed by, or sponsored by any service provider.",
  },
  {
    id: "guidance",
    title: "Guidance Only",
    body: "Our services consist of independent guidance, education, and assistance regarding cable, internet, and streaming services. We do not guarantee specific service improvements, speeds, or outcomes. Your actual experience will depend on your provider's network, your equipment, and other factors beyond our control.",
  },
  {
    id: "provider-billing",
    title: "Provider Billing Unchanged",
    body: "Using Home Internet Experts's services does not change how you are billed by your provider. You will continue to be billed directly by your service provider for their services. Home Internet Experts charges separate assistance fees.",
  },
  {
    id: "no-passwords",
    title: "Account Security",
    body: "Home Internet Experts never requests provider account passwords or sensitive credentials. You are responsible for protecting your provider account credentials. We only request information necessary to provide guidance.",
  },
  {
    id: "third-party",
    title: "Third-Party Content",
    body: "Services, channels, and applications referenced in our guidance are provided under license from third parties. Availability, pricing, and lineups may change without notice. We do not control or endorse third-party content.",
  },
  {
    id: "no-warranty",
    title: "No Warranty",
    body: "Home Internet Experts's services are provided on an 'as is' and 'as available' basis. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.",
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    body: "To the maximum extent permitted by law, Home Internet Experts's liability for any claim is limited to the amount you paid for the service. We are not liable for indirect, incidental, or consequential damages arising from your use of our services or your provider relationships.",
  },
  {
    id: "trademarks",
    title: "Trademarks",
    body: "All provider names, logos, and trademarks referenced on our website are the property of their respective owners. Use of these trademarks is for identification purposes only and does not imply affiliation or endorsement.",
  },
];

function Disclaimer() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <AlertTriangle className="w-3.5 h-3.5" /> Disclaimer
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold">Important information about our services.</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80 text-lg">
            Clear disclosures about Home Internet Experts's role, limitations, and the relationship between our services and your provider relationships.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-[220px_1fr] gap-12">
        <aside className="md:sticky md:top-24 h-fit">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Effective June 1, 2026</p>
          <h2 className="mt-2 text-sm font-semibold">On this page</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="hover:text-primary">{s.title}</a></li>
            ))}
          </ul>
        </aside>
        <div className="space-y-12">
          {sections.map((s) => (
            <article key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-3xl font-bold">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
          <div className="rounded-2xl border border-border bg-secondary p-8 text-sm text-muted-foreground">
            For questions, contact <a href="mailto:support@homeinternetexperts.io" className="text-primary font-medium">support@homeinternetexperts.io</a>.
          </div>
        </div>
      </section>
    </Layout>
  );
}

