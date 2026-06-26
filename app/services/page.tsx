import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SiteImage from "@/components/SiteImage";
import BillExample from "@/components/BillExample";
import NetMeterSamples from "@/components/NetMeterSamples";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Solar Services",
  description:
    "No-cost solar through the state agreement, batteries that keep your own power, and a plain-English look at your Ameren or ComEd bill. Honest help for central Illinois.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Solar that puts you in a better spot from day one"
        intro="Simple, honest help. If solar will save you money and improve your situation, I will show you how. If it will not, I will tell you that too."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-16">
          {/* Banner photo (all-black panels) */}
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-navy/10 shadow-card">
            <SiteImage
              src="/images/panels.jpg"
              alt="A home with sleek all-black rooftop solar panels"
              width={1600}
              height={1067}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* PPA + BATTERY */}
          {/* DOOR-PITCH PLACEHOLDER: when Jose provides his real in-person
              door-pitch wording, weave it into this PPA section (and the Home
              hero and About page) so the website mirrors his pitch word for
              word. See TODO.md. */}
          <div id="ppa" className="scroll-mt-24">
            <p className="eyebrow mb-2">No money down</p>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              No-cost solar through the state agreement
            </h2>
            <p className="mt-3 text-ink/80">
              With a power purchase agreement, you go solar with $0 down. You keep
              your money in your pocket. If your home qualifies, the system is
              fully covered by the available funding. Qualifying simply means your
              home has what solar needs to perform well:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Good sunlight",
                "The right roof orientation",
                "Enough roof space",
                "Sound structural and electrical integrity",
              ].map((q) => (
                <li key={q} className="flex gap-2 text-sm text-ink/80">
                  <span className="mt-0.5 text-forest">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                  </span>
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-ink/80">
              You stay free of any loan, debt, lien, or investment, so your
              finances stay completely yours. This is the simplest part of the
              whole conversation.
            </p>
            <div className="mt-5 rounded-xl border-l-4 border-sun bg-cream-dark/60 p-5">
              <p className="font-bold text-navy">My promise</p>
              <p className="mt-1 text-ink/85">
                Going solar only makes sense if it puts you in a better situation
                from day one. That means a better rate, or protecting what you
                already have. If the numbers do not do that for you, I will say so.
              </p>
            </div>

            <h3 className="mt-8 text-xl font-bold text-navy">
              Batteries keep your own power working for you
            </h3>
            <p className="mt-3 text-ink/80">
              Your system is sized to produce the power your home uses across the
              full year. Under the current net metering rules, power you send back
              to the grid is credited at the supply rate, so the smart move is to
              keep more of your own power. We store as much of it as possible in
              batteries for you to use day and night, instead of sending it back.
            </p>
            <p className="mt-3 text-ink/80">
              Your batteries do double duty. They also keep your lights on with
              backup power during storms or any grid outage, so your home stays
              comfortable and protected.
            </p>
          </div>

          {/* ION ONE-STOP-SHOP */}
          <div id="ion" className="scroll-mt-24 border-t border-navy/10 pt-14">
            <p className="eyebrow mb-2">One team, start to finish</p>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              One company handles everything
            </h2>
            <div className="mt-5">
              <div>
                <p className="text-ink/80">
                  Jose is an independent consultant contracted through Ion Solar.
                  Here is how it works. The solar provider acts as your utility.
                  Ion runs the analysis to find qualified homes and builds a
                  personalized energy savings report for your home, sizing the
                  panels to the exact power your home uses across the year.
                </p>
                <p className="mt-3 text-ink/80">
                  If your home qualifies and the savings are there, Ion handles
                  everything else for you:
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {[
                    "CAD drawings",
                    "Permits",
                    "Installation",
                    "Monitoring",
                    "Maintenance",
                    "Service agreements",
                    "Equipment insurance",
                    "Coverage for any home damage from the solar",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink/80">
                      <span className="mt-0.5 text-forest">
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-ink/80">
                  One company, from start to finish. Many companies split this
                  across three different companies for the analysis, the install,
                  and the service. Homeowners tell us they would rather have one
                  team that owns the whole process, so that is exactly what you get.
                </p>
              </div>
              <div className="mt-6 aspect-[4/3] overflow-hidden rounded-2xl border border-navy/10 shadow-card">
                <SiteImage
                  src="/images/about.jpg"
                  alt="A solar professional installing all-black solar panels on a rooftop"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>
          </div>

          {/* NET METERING */}
          <div id="net-metering" className="scroll-mt-24 border-t border-navy/10 pt-14">
            <p className="eyebrow mb-2">How the credits work</p>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              How net metering works for you
            </h2>
            <p className="mt-3 text-ink/80">
              Your meter tracks the energy flowing in from the grid and the excess
              energy flowing out to the grid. The current Illinois on-site net
              metering method applies to systems turned on after January 1, 2025.
              Excess power you generate but do not use is banked as a Supply
              Carryover credit that you can use in later months.
            </p>
            <div className="mt-4 rounded-xl border-l-4 border-forest bg-forest/5 p-5">
              <p className="font-bold text-navy">The key point</p>
              <p className="mt-1 text-ink/85">
                Net metering lowers your supply charge, and it can reach $0 when
                your credits cover your usage. Your delivery charges and taxes
                apply to each kWh you pull in from the grid, so using and storing
                your own power with batteries keeps more of those kWh at home and
                puts you further ahead.
              </p>
            </div>

            <details className="group mt-5 rounded-xl border border-navy/10 bg-white p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 text-base font-semibold text-navy">
                Learn more: two real bill examples
                <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-cream text-navy transition group-open:rotate-45">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" d="M12 5v14M5 12h14" /></svg>
                </span>
              </summary>
              <p className="mb-5 mt-4 text-sm text-ink/70">
                These are real, anonymized Ameren Illinois outcomes that show net
                metering bringing the supply charge down, including all the way to
                $0. With delivery and taxes tied to each kWh from the grid,
                keeping your own power is what puts you ahead.
              </p>
              <NetMeterSamples />
            </details>
          </div>

          {/* READ YOUR BILL */}
          <div id="read-your-bill" className="scroll-mt-24 border-t border-navy/10 pt-14">
            <p className="eyebrow mb-2">Know where your money goes</p>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Read your electric bill
            </h2>
            <p className="mt-3 text-ink/80">
              Once you can read your bill, you can see exactly where your money
              goes. Here are realistic example bills for the two main central
              Illinois utilities, with personal details removed. Switch between
              them, and hover or tap any charge to see what it means.
            </p>
            <div className="mt-6">
              <BillExample />
            </div>
            <p className="mt-4 text-sm text-ink/70">
              The good news in those numbers: you are already paying toward solar
              and clean energy through your bill today. Going solar simply puts
              that money to work for your own home.
            </p>
          </div>

          {/* LEARN MORE: ILLINOIS ENERGY */}
          <div id="learn-more" className="scroll-mt-24 border-t border-navy/10 pt-14">
            <details className="group rounded-xl border border-navy/10 bg-white p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 text-xl font-bold text-navy">
                Learn more about Illinois energy and solar
                <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-cream text-navy transition group-open:rotate-45">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" d="M12 5v14M5 12h14" /></svg>
                </span>
              </summary>
              <div className="mt-5 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-navy">
                    The Illinois Renewable Portfolio Standard
                  </h3>
                  <p className="mt-2 text-ink/80">
                    Illinois has had a Renewable Portfolio Standard in place since
                    2009. It funds the state&apos;s solar and wind farms. You can
                    see it on your bill as the Renewable Portfolio Standard line on
                    ComEd and the Renewable Energy Adjustment on Ameren. In other
                    words, you are already helping pay for solar today.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">
                    The same programs build big solar farms
                  </h3>
                  <p className="mt-2 text-ink/80">
                    Those same programs on your bill fund large utility-scale solar
                    farms across Illinois. Jose has spent years developing these
                    big solar projects. The same clean-energy push you already pay
                    for is what makes residential solar possible for your home now.
                    You have helped build the grid of the future. This is your
                    chance to own a piece of it.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">
                    Growing demand from data centers
                  </h3>
                  <p className="mt-2 text-ink/80">
                    New data center development across the region is increasing
                    electricity demand. Producing and storing your own power is a
                    smart way to take control of your energy and protect your
                    household budget as that demand grows.
                  </p>
                </div>
              </div>
            </details>
          </div>

          {/* OWN YOUR SYSTEM (positive option) */}
          <div id="buy" className="scroll-mt-24 border-t border-navy/10 pt-14">
            <p className="eyebrow mb-2">Prefer to own it</p>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Want to own your system?
            </h2>
            <p className="mt-3 text-ink/80">
              Some homeowners would rather purchase their system and keep every bit
              of the long-term savings, plus the added value to their home. If that
              is you, I am glad to walk through ownership and the Illinois
              incentives that help, so you can compare it side by side with the
              no-cost agreement and pick what is best for you.
            </p>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
