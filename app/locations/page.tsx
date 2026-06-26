import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { locations } from "@/lib/locations";
import { business } from "@/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas in Central Illinois",
  description:
    "Jose Montemayor provides honest solar consulting across central Illinois, including Champaign, Urbana, Bloomington, Normal, Peoria, Springfield, and Decatur.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Local, honest solar help across central Illinois"
        intro={`I work with homeowners throughout ${business.region}. Pick your city to see local utility details and how solar fits where you live.`}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/locations" },
        ]}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="card flex h-full flex-col transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <h2 className="text-xl font-bold text-navy">{loc.city}, IL</h2>
              <p className="mt-1 text-sm font-medium text-forest-mid">
                {loc.utility}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                {loc.heroIntro}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ocean">
                See {loc.city} details
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.17 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-ink/70">
          Do not see your town? I serve the surrounding communities too.{" "}
          <Link href="/contact" className="link-underline">
            Reach out
          </Link>{" "}
          and ask.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
