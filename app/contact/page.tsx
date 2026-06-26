import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import { buildMetadata } from "@/lib/seo";
import { generalFaqs } from "@/lib/faqs";
import { business } from "@/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Contact Jose Montemayor",
  description:
    "Contact Jose Montemayor for a free, no-pressure solar bill review in central Illinois. Call, email, or request a review online.",
  path: "/contact",
});

const IconPhone = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.69 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0122 16.92z" /></svg>
);
const IconMail = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 6 10-6" /></svg>
);
const IconPin = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
const IconClock = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us look at your bill together"
        intro="Reach out for a free, no-pressure bill review. I will explain where your money is going and whether solar makes sense for your home. You are never obligated to do anything."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: contact details + map */}
          <div>
            <h2 className="text-2xl font-bold text-navy">Get in touch</h2>
            <p className="mt-2 text-ink/75">
              Prefer to talk first? Call or email anytime. Otherwise, fill out
              the form and I will reach out.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  {IconPhone}
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">Phone</p>
                  {business.phoneHref ? (
                    <a href={`tel:${business.phoneHref}`} className="text-lg font-semibold text-navy hover:text-ocean">
                      {business.phone}
                    </a>
                  ) : (
                    <span className="text-lg font-semibold text-navy">{business.phone}</span>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  {IconMail}
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">Email</p>
                  <a href={`mailto:${business.email}`} className="text-lg font-semibold text-navy hover:text-ocean">
                    {business.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  {IconPin}
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">Service area</p>
                  <address className="not-italic text-navy">{business.serviceAreaLabel}</address>
                  <p className="mt-0.5 text-sm text-ink/60">{business.serviceAreaSentence}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  {IconClock}
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">Hours</p>
                  <span className="text-navy">{business.hours}</span>
                </div>
              </li>
            </ul>

            {/* Service-area map. Home-based business, so this shows the central
                Illinois service area rather than a street address. */}
            <div className="mt-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-ink/50">
                Serving central Illinois
              </p>
              <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-card">
                <iframe
                  title="Map of the central Illinois service area"
                  src="https://www.google.com/maps?q=Central+Illinois&z=7&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0"
                />
              </div>
              <p className="mt-2 text-sm text-ink/60">
                Core markets: the Champaign and Bloomington areas, plus
                surrounding central Illinois communities.
              </p>
            </div>
          </div>

          {/* Right: the compliant lead form */}
          <div className="card lg:sticky lg:top-24 lg:self-start">
            <LeadForm
              source="contact-page"
              heading="Request your free bill review"
              subheading="Fields marked with an asterisk are required. The text-message consent boxes are optional."
            />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <h2 className="text-2xl font-bold text-navy">Questions before you reach out?</h2>
        <p className="mt-2 max-w-2xl text-ink/75">
          Here are answers to a few common ones. If yours is not here, just ask.
        </p>
        <div className="mt-8 max-w-3xl">
          <FAQ faqs={generalFaqs} />
        </div>
      </Section>
    </>
  );
}
