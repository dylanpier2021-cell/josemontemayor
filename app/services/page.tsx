import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import BillBreakdown from "@/components/BillBreakdown";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Solar Services",
  description:
    "Honest, simple solar guidance for central Illinois: buying and owning solar, going solar through a power purchase agreement, and reading your electric bill.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Simple, honest help with solar"
        intro="Three ways I can help. No pressure, no jargon. Start wherever makes sense for you."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-14">
          {/* Buy Solar */}
          <div id="buy" className="scroll-mt-24">
            <p className="eyebrow mb-2">Option one</p>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Buy Solar (Own Your System)
            </h2>
            <p className="mt-3 text-ink/80">
              Pay for a system once, with cash or a loan, and it is yours. The
              power it makes offsets the power you would buy from the utility, and
              ownership usually offers the lowest lifetime cost and the most
              control.
            </p>
            <p className="mt-3 text-ink/80">
              One honest note for 2026. The 30 percent federal residential tax
              credit for buyers ended for systems placed in service after December
              31, 2025, so we build your estimate on what is actually true today.
              Illinois Shines and the utility rebate can still help. Always
              confirm tax details with a licensed professional.
            </p>
          </div>

          {/* PPA */}
          <div id="ppa" className="scroll-mt-24 border-t border-navy/10 pt-14">
            <p className="eyebrow mb-2">Option two</p>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Solar Through a State Agreement (PPA)
            </h2>
            <p className="mt-3 text-ink/80">
              With a power purchase agreement, a third-party company owns and
              maintains the panels, and you pay for the power they produce, often
              with little or no money down. It is a lower-barrier way to start, and
              maintenance is usually their job.
            </p>
            <p className="mt-3 text-ink/80">
              Go in with eyes open. Many PPAs include an annual price increase, and
              you do not build equity since you do not own the system. I will help
              you read the fine print so there are no surprises.
            </p>
          </div>

          {/* Read Your Bill */}
          <div id="read-your-bill" className="scroll-mt-24 border-t border-navy/10 pt-14">
            <p className="eyebrow mb-2">Start here if you are not sure</p>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              How to Read Your Electric Bill
            </h2>
            <p className="mt-3 text-ink/80">
              Most of your bill falls into three buckets: supply (the energy you
              use), delivery (the poles and wires, plus a fixed charge you pay no
              matter what), and taxes and fees. Solar can offset supply, but it
              does not erase the fixed delivery charges. Understanding that is the
              first step to deciding anything.
            </p>
            <div className="mt-6">
              <BillBreakdown />
            </div>
            <p className="mt-4 text-sm text-ink/70">
              Want to go deeper?{" "}
              <Link href="/blog/where-does-your-electric-bill-money-go" className="link-underline">
                Read where your bill money actually goes
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
