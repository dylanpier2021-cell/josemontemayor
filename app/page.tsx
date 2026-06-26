import Link from "next/link";
import type { Metadata } from "next";
import SiteImage from "@/components/SiteImage";
import Section, { SectionHeading } from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import BillBreakdown from "@/components/BillBreakdown";
import VeteranBadge from "@/components/VeteranBadge";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: business.name,
  description:
    "Veteran-owned, independent solar consulting for central Illinois. Understand where your electric bill money goes and whether solar is worth it. Free, honest bill review.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy bg-sun-rays text-white">
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <VeteranBadge variant="dark" />
              <span className="text-sm text-cream/70">Serving {business.region}</span>
            </div>
            <h1 className="text-4xl font-bold !text-white sm:text-5xl lg:text-6xl">
              Where is your electric bill money actually going?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
              I am Jose Montemayor, a U.S. Army veteran and independent solar
              consultant. I help central Illinois homeowners understand their
              utility bills and decide, honestly, whether solar is right for them.
              No pressure. No hype. Just the real numbers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Get my free bill review
              </Link>
              <Link href="/services#read-your-bill" className="btn-ghost">
                Learn to read your bill
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/15 shadow-lift">
              <SiteImage
                src="/images/hero-rooftop-solar.svg"
                alt="A central Illinois home with rooftop solar panels under a bright sun"
                width={800}
                height={600}
                priority
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHERE IS YOUR MONEY GOING */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="The honest hook"
              title="Nothing on your bill is free"
              intro="Your money is split between the energy you use, the poles and wires that deliver it, and taxes and fees. A big chunk is fixed cost you pay no matter how little power you use. After decades of payments, you still own none of it."
            />
            <Link href="/services#read-your-bill" className="mt-6 inline-block link-underline">
              See how your bill breaks down
            </Link>
          </div>
          <BillBreakdown />
        </div>
      </Section>

      {/* HOW I HELP */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Ways I can help"
          title="Simple, honest guidance"
          centered
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Buy Solar (Own Your System)"
            href="/services#buy"
            cta="Learn more"
          >
            Own your system with cash or a loan. We cover long-term savings and
            what the 2026 federal tax credit change means for buyers.
          </FeatureCard>
          <FeatureCard
            title="Solar Through a PPA"
            href="/services#ppa"
            cta="Learn more"
          >
            Little or no money down with a power purchase agreement. We cover the
            honest pros and cons so there are no surprises.
          </FeatureCard>
          <FeatureCard
            title="Read Your Electric Bill"
            href="/services#read-your-bill"
            cta="Learn more"
          >
            Supply, delivery, taxes and fees, and how much is fixed cost. The best
            place to start if you are not sure.
          </FeatureCard>
        </div>
      </Section>

      {/* VETERAN TRUST BAND */}
      <section className="bg-forest text-white">
        <div className="container-page grid items-center gap-8 py-14 md:grid-cols-[auto,1fr]">
          <div className="flex justify-center">
            <span className="grid h-24 w-24 place-items-center rounded-full bg-white/10 ring-1 ring-white/25">
              <svg viewBox="0 0 24 24" className="h-12 w-12 text-sun-soft" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.3 7.2 17.7l.9-5.4L4.2 8.5l5.4-.8z" /></svg>
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold !text-white sm:text-3xl">
              I served my country. Now I want to serve my community.
            </h2>
            <p className="mt-3 max-w-2xl text-cream/85">
              As a disabled {business.veteranBranch} combat veteran, I learned that
              trust is earned through honesty. I bring that same standard to every
              conversation about your home and your money.
            </p>
            <Link href="/about" className="mt-5 inline-block btn-ghost">
              Read Jose&apos;s story
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="What people say"
          title="Straight talk people remember"
          centered
        />
        <div className="mt-10">
          <Testimonials />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
