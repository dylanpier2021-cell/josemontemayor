import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import type { Faq } from "@/lib/faqs";

/**
 * Accessible FAQ using native <details>/<summary> (no client JS needed) plus
 * FAQPage structured data for rich results.
 */
export default function FAQ({
  faqs,
  withSchema = true,
}: {
  faqs: Faq[];
  withSchema?: boolean;
}) {
  return (
    <div className="space-y-3">
      {withSchema ? <JsonLd data={faqJsonLd(faqs)} /> : null}
      {faqs.map((faq) => (
        <details
          key={faq.q}
          className="group rounded-xl border border-navy/10 bg-white p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-navy">
            {faq.q}
            <span
              aria-hidden="true"
              className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-cream text-navy transition group-open:rotate-45"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
