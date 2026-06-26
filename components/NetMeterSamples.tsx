/**
 * NetMeterSamples
 * Two real, anonymized Ameren Illinois net-metering outcomes that show how
 * net metering drives the SUPPLY charge down (toward $0) while delivery and
 * taxes are still owed. Positive framing: this is exactly why storing your own
 * power with batteries is the smart move.
 */

const samples = [
  {
    tag: "Sample A",
    summary: "The home used a little more than the system made that month",
    flow: [
      { label: "Energy pulled in from the grid", value: "983 kWh" },
      { label: "Excess sent out to the grid", value: "642 kWh" },
      { label: "Prior banked credit applied", value: "287 kWh" },
      { label: "Billable supply left", value: "54 kWh" },
    ],
    bill: [
      { label: "Delivery", value: "$94.92" },
      { label: "Supply", value: "$6.52", good: true },
      { label: "Taxes", value: "$17.18" },
    ],
    total: "$118.62",
    note: "Net metering credits cut the supply charge down to just $6.52.",
  },
  {
    tag: "Sample B",
    summary: "The system made more than the home used that month",
    flow: [
      { label: "Energy pulled in from the grid", value: "913 kWh" },
      { label: "Excess sent out to the grid", value: "997 kWh" },
      { label: "Banked for next month", value: "1,203 kWh" },
      { label: "Billable supply left", value: "0 kWh" },
    ],
    bill: [
      { label: "Delivery", value: "$89.11" },
      { label: "Supply", value: "$0.00", good: true },
      { label: "Taxes", value: "$15.99" },
    ],
    total: "$105.10",
    note: "Supply hit $0.00 and 1,203 kWh was banked for later. Delivery and taxes are still owed, which is why keeping your own power is so valuable.",
  },
];

export default function NetMeterSamples() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {samples.map((s) => (
        <div key={s.tag} className="flex flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-card">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-navy px-2.5 py-0.5 text-xs font-semibold text-white">
              {s.tag}
            </span>
          </div>
          <p className="mt-2 text-sm font-medium text-ink/80">{s.summary}</p>

          <dl className="mt-4 space-y-1.5 border-t border-navy/10 pt-4 text-sm">
            {s.flow.map((f) => (
              <div key={f.label} className="flex justify-between gap-3">
                <dt className="text-ink/65">{f.label}</dt>
                <dd className="font-medium text-navy">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 space-y-1.5 border-t border-navy/10 pt-4 text-sm">
            {s.bill.map((b) => (
              <div key={b.label} className="flex justify-between gap-3">
                <span className={b.good ? "font-semibold text-forest" : "text-ink/65"}>
                  {b.label}
                </span>
                <span className={b.good ? "font-bold text-forest" : "font-medium text-navy"}>
                  {b.value}
                </span>
              </div>
            ))}
            <div className="flex justify-between gap-3 border-t border-navy/10 pt-2">
              <span className="font-bold text-navy">Total</span>
              <span className="font-bold text-navy">{s.total}</span>
            </div>
          </div>

          <p className="mt-4 rounded-lg bg-cream-dark/60 p-3 text-xs text-ink/70">{s.note}</p>
        </div>
      ))}
    </div>
  );
}
