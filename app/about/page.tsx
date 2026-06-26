import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SiteImage from "@/components/SiteImage";
import VeteranBadge from "@/components/VeteranBadge";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { business, formattedAddress } from "@/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "About Jose Montemayor",
  description:
    "Jose Montemayor is a U.S. Army combat veteran and solar veteran since 2012, from utility-scale solar farms to your rooftop. Honest, kitchen-table guidance for central Illinois.",
  path: "/about",
});

const armyValues = [
  "Leadership",
  "Loyalty",
  "Duty",
  "Respect",
  "Selfless Service",
  "Honor",
  "Integrity",
  "Personal Courage",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="I served my country. Now I want to serve my community."
        intro="I am Jose Montemayor. I am a U.S. Army combat veteran who served four tours in Iraq, and I have worked in solar since 2012, from large utility-scale solar farms all the way to your rooftop."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr,1.5fr]">
          <div className="lg:sticky lg:top-24">
            <div className="mx-auto max-w-xs">
              {/* SWAP POINT: replace /images/jose.jpg with a higher-resolution
                  professional headshot from Jose when available (square or
                  portrait works). Source file is currently 400x400. */}
              <div className="aspect-square overflow-hidden rounded-2xl border border-navy/10 shadow-card">
                <SiteImage
                  src="/images/jose.jpg"
                  alt="Jose Montemayor, U.S. Army veteran and solar consultant"
                  width={400}
                  height={400}
                  priority
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 80vw, 320px"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <VeteranBadge />
              </div>
            </div>
          </div>

          <div className="prose-site max-w-none">
            <h2>From the Army to solar</h2>
            <p>
              Four tours in Iraq taught me what it means to be responsible for
              other people. You do the work, you tell the truth, and you stand
              behind it. Those years shaped how I treat everyone I work with
              today.
            </p>
            <p>
              When I came home, I found a mission in solar. I started in 2012 as a
              direct solar consultant at SolarCity in southern California, sitting
              with families and helping them understand their power and their
              options. I have been in the industry ever since.
            </p>

            <h2>Solar at every scale</h2>
            <p>
              In 2016, I co-founded BFA Energy LLC, a national solar developer, and
              I serve as its Chief Operating Officer. We develop utility-scale
              solar farms, power purchase agreements, and solar plus storage
              projects. That work gave me a big-picture view of how clean energy
              is built and paid for across the country.
            </p>
            <p>
              Now I bring that experience down to the kitchen table. Working as an
              independent consultant through Ion Solar, I help central Illinois
              homeowners use the same programs and technology that power those big
              projects to lower their own bills and own a piece of their energy
              future.
            </p>

            <h2>The values I lead with</h2>
            <p>
              The Army gave me a clear set of values, and I still carry them into
              every conversation:
            </p>
            <ul className="not-prose mt-2 flex flex-wrap gap-2">
              {armyValues.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-forest/20 bg-forest/5 px-3 py-1 text-sm font-medium text-forest"
                >
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-5">
              That is exactly why I will only ever recommend solar when it
              genuinely helps you. If the numbers put you in a better spot, a
              better rate or protecting what you already have, I will show you how.
              If they do not, I will tell you straight. You will always get an
              honest answer from me.
            </p>

            <h2>Who I serve</h2>
            <p>
              I work with homeowners across central Illinois, with my core markets
              being the Champaign and Bloomington areas and the surrounding
              communities. If you are nearby and you have an electric bill, I am
              glad to help you understand it and see what is possible.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-xl font-bold text-navy">The honest details</h2>
          <dl className="mt-4 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-forest-mid">
                Business
              </dt>
              <dd className="mt-1 text-ink/80">
                {business.name}, {business.legalEntityDescription}. No DBA.
                Independent solar consultant working with {business.partner}.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-forest-mid">
                Service area
              </dt>
              <dd className="mt-1 text-ink/80">
                {business.region}, with a focus on the{" "}
                {business.serviceAreas.join(" and ")} areas.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-forest-mid">
                Contact
              </dt>
              <dd className="mt-1 text-ink/80">
                {business.phoneHref ? (
                  <a href={`tel:${business.phoneHref}`} className="link-underline">
                    {business.phone}
                  </a>
                ) : (
                  business.phone
                )}
                <br />
                <a href={`mailto:${business.email}`} className="link-underline">
                  {business.email}
                </a>
                <br />
                <span className="text-sm text-ink/60">{formattedAddress}</span>
                <br />
                <span className="text-sm text-ink/60">Hours: {business.hours}</span>
              </dd>
            </div>
          </dl>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">
              Request your free bill review
            </Link>
          </div>
        </div>
      </Section>

      <CTASection
        title="Want a straight answer about your electric bill?"
        body="Bring it to a veteran who will give it to you straight. The review is free and there is never any obligation."
      />
    </>
  );
}
