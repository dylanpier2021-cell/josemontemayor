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
    "Jose Montemayor is a U.S. Army combat veteran and an independent solar consultant working with central Illinois homeowners and businesses through Ion Solar. Honest, down-to-earth guidance on making the most of your own roof space.",
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
        intro="I am Jose Montemayor, a U.S. Army combat veteran who served four tours in Iraq. Today I work as an independent solar consultant through Ion Solar, helping central Illinois homeowners and businesses make the most of their own roof space."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr,1.5fr]">
          <div className="lg:sticky lg:top-24">
            <div className="mx-auto max-w-xs">
              {/* SWAP POINT — HEADSHOT.
                  This is a neutral, brand-colored placeholder avatar
                  (/images/jose-placeholder.svg). When Jose sends his own
                  professional photo, drop it into /public/images and update the
                  `src` below (square or portrait works best). Also update the
                  `alt` text to describe him, and refresh the credit row in
                  /public/images/SWAP-IMAGES.md. */}
              <div className="aspect-square overflow-hidden rounded-2xl border border-navy/10 shadow-card">
                <SiteImage
                  src="/images/jose-placeholder.svg"
                  alt="Placeholder headshot — Jose Montemayor's professional photo coming soon"
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
              When I came home, I found a mission in solar. I have spent years as
              a solar consultant since, and the work I care about is simple and
              close to home: sitting down with people, looking at their real
              energy costs, and figuring out honestly whether solar makes sense
              for them.
            </p>

            <h2>What I focus on</h2>
            <p>
              Today I work as an independent consultant through Ion Solar with
              homeowners and businesses across central Illinois. My focus is
              helping you make the most of the roof space you already have,
              whether that is a family home or an industrial or commercial
              building, to bring down your energy costs. I am not here to sell you
              on anything bigger or more complicated than that.
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
              Those values are exactly why I will only ever recommend solar when
              it genuinely puts you in a better situation. If the numbers work, a
              better rate, more control over your costs, or protecting what you
              already have, I will show you how. If they do not, I will tell you
              straight. Whether you are a homeowner or a business owner, you will
              always get an honest answer from me.
            </p>

            <h2>Who I serve</h2>
            <p>
              I work with homeowners and businesses across central Illinois, with
              my core markets being the Champaign and Bloomington areas and the
              surrounding communities. If you are nearby and you have an electric
              bill, I am glad to help you understand it and see what is possible
              on your own roof.
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
