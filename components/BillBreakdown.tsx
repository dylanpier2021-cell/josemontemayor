/**
 * Visual, accessible breakdown of a typical Illinois electric bill into its
 * three buckets: supply, delivery, and taxes/fees. The shares below are
 * ILLUSTRATIVE and clearly labeled as such. They are NOT a quote of any
 * specific utility's exact percentages, which vary by rate, season, and usage.
 */
const segments = [
  {
    label: "Supply",
    blurb: "The electricity itself. This is the part solar directly offsets, so you keep more of that money.",
    pct: 45,
    color: "bg-ocean",
  },
  {
    label: "Delivery",
    blurb:
      "Poles, wires, maintenance, and the utility's regulated return. Includes fixed charges that stay steady, so when you generate your own power the savings show up on the supply side.",
    pct: 45,
    color: "bg-forest-mid",
  },
  {
    label: "Taxes & Fees",
    blurb: "State and local taxes, riders, and adjustment line items.",
    pct: 10,
    color: "bg-sun",
  },
];

export default function BillBreakdown() {
  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
      <p className="text-sm font-semibold uppercase tracking-wide text-forest-mid">
        A typical bill, simplified
      </p>
      <h3 className="mt-1 text-xl font-bold text-navy">
        Where each dollar tends to go
      </h3>

      {/* Stacked bar */}
      <div
        className="mt-5 flex h-6 w-full overflow-hidden rounded-full"
        role="img"
        aria-label="Illustrative split of an electric bill: roughly equal supply and delivery, with a smaller taxes and fees portion."
      >
        {segments.map((s) => (
          <div
            key={s.label}
            className={`${s.color} h-full`}
            style={{ width: `${s.pct}%` }}
          />
        ))}
      </div>

      <dl className="mt-6 space-y-4">
        {segments.map((s) => (
          <div key={s.label} className="flex gap-3">
            <span
              className={`mt-1 h-3 w-3 flex-shrink-0 rounded-full ${s.color}`}
              aria-hidden="true"
            />
            <div>
              <dt className="font-semibold text-navy">
                {s.label}{" "}
                <span className="font-normal text-ink/50">
                  (about {s.pct}%, illustrative)
                </span>
              </dt>
              <dd className="text-sm text-ink/70">{s.blurb}</dd>
            </div>
          </div>
        ))}
      </dl>

      <p className="mt-5 rounded-lg bg-cream-dark/60 p-3 text-xs text-ink/60">
        These shares are for illustration only. Your real split depends on your
        utility, rate, season, and usage. Bring your bill and we will look at
        your actual numbers.
      </p>
    </div>
  );
}
