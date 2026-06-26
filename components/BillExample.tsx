"use client";

import { useState } from "react";

/**
 * BillExample
 * =============================================================================
 * Realistic, anonymized example electric bills (ComEd and Ameren Illinois) so
 * homeowners recognize their own charges. All figures are from real Illinois
 * bills with personal info removed ("Sample Customer").
 *
 * SWAP POINT (real bill images): when the client provides real, blurred photos
 * of an actual ComEd / Ameren bill, drop them in /public/images (e.g.
 * comed-bill.jpg, ameren-bill.jpg) and render them beside or below the matching
 * tab. Example:
 *   import SiteImage from "@/components/SiteImage";
 *   {tab === "comed" && (
 *     <SiteImage src="/images/comed-bill.jpg" alt="Sample ComEd bill" width={...} height={...} />
 *   )}
 * Keep the data tables below as the accessible, text version.
 * =============================================================================
 */

type Line = { name: string; amount: number; def: string; solar?: boolean };
type Group = { key: string; label: string; total: number; def: string; lines: Line[] };
type Bill = {
  utility: string;
  kwh: number;
  days: number;
  total: number;
  groups: Group[];
};

const comed: Bill = {
  utility: "ComEd",
  kwh: 884,
  days: 30,
  total: 130.64,
  groups: [
    {
      key: "supply",
      label: "Supply",
      total: 60.09,
      def: "The electricity itself. This is the part rooftop solar can offset, and net metering can bring it close to or all the way down to $0.",
      lines: [
        { name: "Electricity Supply Charge", amount: 47.29, def: "The price of the energy you used, per kWh." },
        { name: "Transmission Services", amount: 12.91, def: "Moving power over high-voltage lines to your area." },
        { name: "Purchased Electricity Adjustment", amount: -0.11, def: "A small true-up so the price matches the actual cost of power." },
      ],
    },
    {
      key: "delivery",
      label: "Delivery",
      total: 41.20,
      def: "The cost to bring power to your home over the poles and wires. You pay this on every kWh you pull from the grid, even with solar.",
      lines: [
        { name: "Customer Charge", amount: 8.05, def: "A fixed monthly charge to keep your account and connection, billed no matter how little you use." },
        { name: "Standard Metering Charge", amount: 3.16, def: "Reading and maintaining your meter." },
        { name: "Distribution Facility Charge", amount: 28.82, def: "The local poles, wires, and equipment that deliver power to your street." },
        { name: "IL Electricity Distribution Charge", amount: 1.17, def: "A state distribution charge based on how much you use." },
      ],
    },
    {
      key: "taxes",
      label: "Taxes & Fees",
      total: 29.35,
      def: "State and local taxes plus state-mandated programs. Several of these fund Illinois solar and clean energy, which means you are already paying toward solar today.",
      lines: [
        { name: "Renewable Portfolio Standard", amount: 4.44, def: "Funds Illinois solar and wind farms. You are already paying toward renewables right here.", solar: true },
        { name: "Zero Emission Standard", amount: 1.72, def: "Supports carbon-free energy generation in Illinois.", solar: true },
        { name: "Carbon-Free Energy Resource Adjustment", amount: 10.97, def: "Supports carbon-free generation under Illinois law.", solar: true },
        { name: "Environmental Cost Recovery", amount: 0.32, def: "Recovers approved environmental program costs." },
        { name: "Energy Efficiency Programs", amount: 2.44, def: "Funds rebates and efficiency programs you can use." },
        { name: "Energy Transition Assistance", amount: 0.64, def: "Supports the state's move to clean energy." },
        { name: "Franchise Cost", amount: 0.76, def: "A local fee for using public rights of way." },
        { name: "State Tax", amount: 2.92, def: "Illinois electricity tax." },
        { name: "Municipal Tax", amount: 5.14, def: "Your city's electricity tax." },
      ],
    },
  ],
};

const ameren: Bill = {
  utility: "Ameren Illinois",
  kwh: 470,
  days: 31,
  total: 89.39,
  groups: [
    {
      key: "delivery",
      label: "Delivery",
      total: 37.40,
      def: "The cost to bring power to your home over the poles and wires. You pay this on every kWh you pull from the grid, even with solar.",
      lines: [
        { name: "Customer Charge", amount: 7.56, def: "A fixed monthly charge to keep your account and connection, billed no matter how little you use." },
        { name: "Meter Charge", amount: 5.96, def: "Reading and maintaining your meter." },
        { name: "Distribution Delivery Charge", amount: 21.49, def: "The local poles, wires, and equipment that deliver power to your street." },
        { name: "Delivery Service Cost Adjustment", amount: 1.29, def: "A small true-up on delivery costs." },
        { name: "Revenue Balancing Adjustment", amount: 1.10, def: "A state-approved balancing adjustment on delivery." },
      ],
    },
    {
      key: "supply",
      label: "Supply",
      total: 39.69,
      def: "The electricity itself. This is the part rooftop solar can offset, and net metering can bring it close to or all the way down to $0.",
      lines: [
        { name: "Purchased Electricity", amount: 27.86, def: "The price of the energy you used, per kWh." },
        { name: "Purchased Electricity Adjustment", amount: -1.51, def: "A small true-up so the price matches the actual cost of power." },
        { name: "Supply Cost Adjustment", amount: 0.99, def: "A minor adjustment to the supply price." },
        { name: "Transmission Service Charge", amount: 12.35, def: "Moving power over high-voltage lines to your area." },
      ],
    },
    {
      key: "taxes",
      label: "Taxes & Mandated Charges",
      total: 12.30,
      def: "State and local taxes plus state-mandated programs. Several of these fund Illinois solar and clean energy, which means you are already paying toward solar today.",
      lines: [
        { name: "Customer Generation Charge", amount: 0.31, def: "A small charge tied to distributed generation programs." },
        { name: "Clean Energy Assistance Charge", amount: 0.86, def: "Supports Illinois clean-energy assistance programs." },
        { name: "Coal to Solar and Energy Storage Charge", amount: 0.04, def: "Funds the transition from coal sites to solar and storage in Illinois.", solar: true },
        { name: "Renewable Energy Adjustment", amount: 2.15, def: "Funds Illinois renewable energy, including solar. You are already paying toward solar right here.", solar: true },
        { name: "EDT Cost Recovery", amount: 0.59, def: "Recovers approved electric distribution tax costs." },
        { name: "Electric Environmental Adjustment", amount: 0.03, def: "Recovers approved environmental costs." },
        { name: "Energy Efficiency Programs", amount: 3.03, def: "Funds rebates and efficiency programs you can use." },
        { name: "Energy Transition Assistance", amount: 0.39, def: "Supports the state's move to clean energy." },
        { name: "Utility-Owned Solar and Storage Adjustment", amount: 0.05, def: "Funds utility-owned solar and storage in Illinois.", solar: true },
        { name: "Municipal Tax", amount: 2.53, def: "Your city's electricity tax." },
        { name: "Excess Franchise Charge", amount: 0.77, def: "A local fee for using public rights of way." },
        { name: "Illinois State Electricity Excise Tax", amount: 1.55, def: "Illinois electricity tax." },
      ],
    },
  ],
};

function fmt(n: number) {
  return (n < 0 ? "-$" : "$") + Math.abs(n).toFixed(2);
}

function BillCard({ bill }: { bill: Bill }) {
  const solarLines = bill.groups
    .flatMap((g) => g.lines)
    .filter((l) => l.solar);

  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card">
      {/* Bill header */}
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-navy/10 bg-cream/60 px-5 py-4">
        <div>
          <p className="text-lg font-bold text-navy">{bill.utility}</p>
          <p className="text-sm text-ink/60">
            Sample Customer &middot; {bill.kwh} kWh &middot; {bill.days} days
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-wide text-ink/50">Total</p>
          <p className="text-2xl font-bold text-navy">{fmt(bill.total)}</p>
        </div>
      </div>

      {/* Groups */}
      <div className="divide-y divide-navy/5">
        {bill.groups.map((g) => (
          <div key={g.key} className="px-5 py-4">
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="text-base font-bold text-navy">{g.label}</h4>
              <span className="font-semibold text-navy">{fmt(g.total)}</span>
            </div>
            <p className="mt-1 text-sm text-ink/65">{g.def}</p>
            <ul className="mt-3 space-y-1.5">
              {g.lines.map((l) => (
                <li
                  key={l.name}
                  className={`flex items-start justify-between gap-3 text-sm ${
                    l.solar ? "rounded-md bg-sun/10 px-2 py-1" : ""
                  }`}
                  title={l.def}
                >
                  <span className="flex items-start gap-1.5 text-ink/80">
                    {l.solar ? (
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-sun-deep" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                      </svg>
                    ) : null}
                    <span className="border-b border-dotted border-ink/25">{l.name}</span>
                  </span>
                  <span className="whitespace-nowrap font-medium text-ink/80">{fmt(l.amount)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Already-paying-for-solar callout */}
      <div className="border-t border-navy/10 bg-forest/5 px-5 py-4">
        <p className="flex items-center gap-2 text-sm font-bold text-forest">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" /></svg>
          You are already paying toward solar
        </p>
        <p className="mt-1 text-sm text-ink/70">
          The highlighted line items are state-mandated charges from the 2021
          Illinois clean-energy law that fund solar and renewables across the
          state. On this sample {bill.utility} bill that is{" "}
          <strong className="text-navy">
            {fmt(solarLines.reduce((s, l) => s + l.amount, 0))}
          </strong>{" "}
          this month. Going solar lets that money start working for your own home.
        </p>
      </div>

      {/* Full definitions */}
      <details className="group border-t border-navy/10 px-5 py-3 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-ocean">
          Plain-English definitions for every charge
          <span className="transition group-open:rotate-45 text-lg leading-none">+</span>
        </summary>
        <dl className="mt-3 space-y-2">
          {bill.groups.flatMap((g) =>
            g.lines.map((l) => (
              <div key={g.key + l.name} className="text-sm">
                <dt className="font-semibold text-navy">
                  {l.name} <span className="font-normal text-ink/50">({fmt(l.amount)})</span>
                </dt>
                <dd className="text-ink/70">{l.def}</dd>
              </div>
            ))
          )}
        </dl>
      </details>
    </div>
  );
}

export default function BillExample() {
  const [tab, setTab] = useState<"comed" | "ameren">("comed");

  return (
    <div>
      <div role="tablist" aria-label="Example electric bills" className="mb-4 inline-flex rounded-full border border-navy/15 bg-white p-1">
        {([["comed", "ComEd"], ["ameren", "Ameren Illinois"]] as const).map(([key, label]) => (
          <button
            key={key}
            role="tab"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              tab === key ? "bg-navy text-white" : "text-navy hover:bg-cream"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <BillCard bill={tab === "comed" ? comed : ameren} />
    </div>
  );
}
