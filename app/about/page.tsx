import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section, { SectionHeading } from "@/components/Section";
import SiteImage from "@/components/SiteImage";
import VeteranBadge from "@/components/VeteranBadge";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { business, formattedAddress } from "@/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "About Jose Montemayor",
  description:
    "Meet Jose Montemayor, a disabled U.S. Army combat veteran and independent solar consultant serving central Illinois with honesty-first guidance.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="I served my country. Now I want to serve my community."
        intro="My name is Jose Montemayor. I am a disabled U.S. Army combat veteran and an independent solar consultant working with Ion Solar across central Illinois."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr,1.4fr]">
          <div className="lg:sticky lg:top-24">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-navy/10 shadow-card">
              <SiteImage
                src="/images/about.jpg"
                alt="A solar professional installing panels on a rooftop"
                width={1600}
                height={2133}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="mt-4">
              <VeteranBadge />
            </div>
            <p className="mt-2 text-xs text-ink/55">
              A professional photo of Jose is coming soon. Image shown is a
              licensed stock photo.
            </p>
          </div>

          <div className="prose-site max-w-none">
            <h2>Why I do this</h2>
            <p>
              I spent years in uniform learning what it means to be accountable
              for other people. You do not get to cut corners when the stakes are
              real. You tell the truth, you do the work, and you stand behind it.
              When I came home, I wanted a way to keep serving with that same
              standard. Helping my neighbors understand their energy costs turned
              out to be it.
            </p>
            <p>
              Most homeowners I meet are not anti-solar and they are not ready to
              sign anything either. They are curious and a little skeptical, and
              they have every right to be. They have been paying an electric bill
              for twenty years or more without anyone ever sitting down to
              explain where that money actually goes. That is the gap I want to
              close.
            </p>

            <h2>My honesty-first promise</h2>
            <p>
              I am not here to talk anyone into anything. My first job is to help
              you understand your own bill, the part you control and the part you
              do not. My second job is to lay out your options clearly, including
              the recent changes to federal tax credits and Illinois net
              metering that affect the math. If solar does not make sense for your
              home, I will tell you that plainly. That is not bad for business.
              That is the business.
            </p>
            <ul>
              <li>I explain, I do not pressure.</li>
              <li>I use real numbers for your home, never inflated promises.</li>
              <li>I tell you the downsides, not just the upsides.</li>
              <li>I treat your time and your trust as things I have to earn.</li>
            </ul>

            <h2>How I work</h2>
            <p>
              As an independent consultant working with Ion Solar, I can walk you
              through both owning a system outright and going solar through a
              power purchase agreement. We start with a free, no-pressure review
              of your electric bill. From there, you decide what makes sense, on
              your timeline, with no obligation.
            </p>

            <h2>Who I serve</h2>
            <p>
              I work with homeowners across central Illinois, with my core markets
              being the Champaign and Bloomington areas and the surrounding
              communities. If you are nearby and you have an electric bill, I am
              glad to help you understand it.
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
        title="Have questions about your electric bill?"
        body="Bring it to someone who will give you a straight answer. The review is free and there is never any obligation."
      />
    </>
  );
}
