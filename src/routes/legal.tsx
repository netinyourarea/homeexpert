import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal — Home Internet Experts Terms & Privacy" },
      { name: "description", content: "Terms of service, privacy policy, and independence disclosures for Home Internet Experts service assistance. Clear, transparent policies." },
      { property: "og:title", content: "Legal — Home Internet Experts" },
      { property: "og:description", content: "Terms, privacy, and service policies." },
      { name: "canonical", content: "https://homeinternetexperts.io/legal" },
    ],
  }),
  component: Legal,
});

const sections = [
  {
    id: "terms",
    title: "Terms of Service",
    updated: "Effective June 1, 2026",
    paragraphs: [
      "Home Internet Experts ('we', 'our', 'us') is an independent third-party service assistance startup. These Terms of Service govern your use of our guidance, consultation, and assistance services ('Services'). By requesting or using our Services, you accept these Terms. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.",
      "Home Internet Experts provides independent guidance and assistance regarding cable, internet, and streaming services. We do not sell, provide, or install services directly. You remain responsible for all dealings with your service providers.",
      "Service fees are charged separately from provider charges. You will continue to be billed by your service provider directly. Home Internet Experts fees do not include provider charges.",
      "Either party may terminate the service relationship at any time. Refund requests must be submitted within 7 to 15 days of service purchase, as outlined in our Refund Policy.",
    ],
  },
  {
    id: "independence",
    title: "Independence Disclosure",
    updated: "Effective June 1, 2026",
    paragraphs: [
      "Home Internet Experts is an independent third-party service assistance startup launched in 2026. We operate with complete independence from all service providers.",
      "We do not receive commissions, referral fees, or compensation from any provider. We do not have partnerships, reseller agreements, or vendor relationships with any provider.",
      "Our recommendations are based on your specific situation and needs, not on vendor incentives or financial arrangements.",
      "We never request provider account passwords or sensitive credentials. Your account security remains your responsibility.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    updated: "Effective June 1, 2026",
    paragraphs: [
      "Home Internet Experts collects information you provide directly (name, email, phone, service details) to facilitate guidance. We use this information solely to provide assistance and communicate with you about our Services.",
      "We do not sell your personal information to third parties. We do not share your information with service providers unless you explicitly authorize it.",
      "We maintain industry-standard security practices to protect your information from unauthorized access.",
      "You have the right to access, correct, or delete your personal information. Contact support@homeinternetexperts.io to exercise these rights.",
    ],
  },
];

function Legal() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-glow">Legal</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold">Clear. Honest. Transparent.</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80 text-lg">
            Plain-language versions of our key policies. The full legal documents are available on request from support@homeinternetexperts.io.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-[220px_1fr] gap-12">
        <aside className="md:sticky md:top-24 h-fit">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">On this page</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-foreground hover:text-primary transition">{s.title}</a>
              </li>
            ))}
          </ul>
        </aside>
        <div className="space-y-16">
          {sections.map((s) => (
            <article key={s.id} id={s.id} className="scroll-mt-24">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.updated}</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">{s.title}</h2>
              <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
                {s.paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
              </div>
            </article>
          ))}
          <div className="rounded-2xl border border-border bg-secondary p-8 text-sm text-muted-foreground">
            Questions about these policies? Email <a href="mailto:support@homeinternetexperts.io" className="text-primary font-medium">support@homeinternetexperts.io</a>.
          </div>
        </div>
      </section>
    </Layout>
  );
}

