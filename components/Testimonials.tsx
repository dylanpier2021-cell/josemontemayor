/**
 * PLACEHOLDER TESTIMONIALS
 * =============================================================================
 * These are clearly-marked sample testimonials. SWAP THEM for real, verifiable
 * customer reviews before launch (with the customer's permission). Do not
 * publish fabricated reviews. Replace the array below with real quotes.
 * =============================================================================
 */
const placeholderTestimonials = [
  {
    quote:
      "Jose did not try to sell me anything. He sat down, explained my bill, and showed me what was fixed and what was not. I finally understood what I was paying for.",
    name: "Sample Homeowner",
    location: "Champaign, IL",
  },
  {
    quote:
      "I was skeptical about solar. Jose gave me the honest math for my house, including the parts that were not in my favor. That is why I trusted him.",
    name: "Sample Homeowner",
    location: "Bloomington, IL",
  },
  {
    quote:
      "As a veteran myself, I appreciated working with someone who shoots straight. No pressure, just real information so I could decide for myself.",
    name: "Sample Homeowner",
    location: "Peoria, IL",
  },
];

export default function Testimonials() {
  return (
    <div>
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sun/40 bg-sun/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sun-deep">
        Sample reviews, swap for real ones before launch
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {placeholderTestimonials.map((t, i) => (
          <figure key={i} className="card flex h-full flex-col">
            <div className="mb-3 flex gap-0.5 text-sun" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.9 6.3 6.8.6-5.2 4.5 1.6 6.7L12 17.3 5.9 20.6l1.6-6.7L2.3 8.9l6.8-.6z" />
                </svg>
              ))}
            </div>
            <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-ink/80">
              {t.quote}
            </blockquote>
            <figcaption className="mt-4 border-t border-navy/10 pt-3 text-sm">
              <span className="font-semibold text-navy">{t.name}</span>
              <span className="block text-ink/55">{t.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
