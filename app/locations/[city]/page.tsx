import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SiteImage from "@/components/SiteImage";
import LeadFormEmbed from "@/components/LeadFormEmbed";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { locations, getLocation } from "@/lib/locations";

export function generateStaticParams() {
  return locations.map((loc) => ({ city: loc.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const loc = getLocation(params.city);
  if (!loc) return {};
  return buildMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    path: `/locations/${loc.slug}`,
  });
}

export default function LocationPage({
  params,
}: {
  params: { city: string };
}) {
  const loc = getLocation(params.city);
  if (!loc) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${loc.utility} territory`}
        title={`Solar Consulting in ${loc.city}, Illinois`}
        intro={loc.heroIntro}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/locations" },
          { name: loc.city, path: `/locations/${loc.slug}` },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.6fr,1fr]">
          <div>
            <div className="mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-navy/10 shadow-card">
              <SiteImage
                src="/images/home.jpg"
                alt={`A family home in the ${loc.city}, Illinois area`}
                width={1600}
                height={1067}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="prose-site max-w-none">
              {loc.sections.map((section) => (
                <div key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border-l-4 border-sun bg-cream-dark/60 p-5">
              <p className="font-bold text-navy">Your local utility</p>
              <p className="mt-1 text-ink/85">{loc.utilityNote}</p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy">
                {loc.city} at a glance
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {loc.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-ink/80">
                    <span className="mt-0.5 text-forest">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy">Nearby communities I serve</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {loc.nearby.map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-navy/15 bg-white px-3 py-1 text-sm text-ink/75"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Link href="/locations" className="link-underline">
                Back to all service areas
              </Link>
            </div>
          </div>

          {/* Sidebar with local CTA + GoHighLevel form */}
          <aside className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-navy">
                Free bill review in {loc.city}
              </h2>
              <p className="text-sm text-ink/70">
                Tell me a little about you and I will reach out. No pressure.
              </p>
            </div>
            <LeadFormEmbed />
          </aside>
        </div>
      </Section>

      <CTASection
        title={`Curious about solar in ${loc.city}?`}
        body="Start with a free, no-pressure look at your electric bill. I will give you an honest answer based on your home and your local utility."
      />
    </>
  );
}
