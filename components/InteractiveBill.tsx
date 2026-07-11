"use client";

import { useId, useState } from "react";
import Image from "next/image";
import SiteImage from "@/components/SiteImage";
import type { Bill } from "@/lib/billSections";

/**
 * InteractiveBill
 * =============================================================================
 * Renders one Ameren Illinois bill image with a transparent, numbered hotspot
 * over each section (driven entirely by lib/billSections.ts). Hovering a region
 * highlights it in the site green with its callout number; clicking it expands a
 * plain-English blurb and a photo slot below the bill. Only one section is open
 * at a time, and clicking it again closes it.
 *
 * A numbered legend under the bill mirrors the hotspots. It is a real list of
 * buttons, so the explainer stays fully usable on touch, on very small screens,
 * and with a keyboard or screen reader even where the hotspots are tiny.
 * =============================================================================
 */
export default function InteractiveBill({ bill }: { bill: Bill }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const panelId = useId();

  const open = bill.sections.find((s) => s.id === openId) ?? null;
  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <figure className="mx-auto w-full max-w-2xl">
      <figcaption className="mb-3">
        <h3 className="text-lg font-bold text-navy">{bill.title}</h3>
        <p className="mt-1 text-sm text-ink/65">{bill.caption}</p>
      </figcaption>

      {/* Bill image with hotspots */}
      <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card">
        <Image
          src={bill.image}
          alt={`Sample Ameren Illinois bill, ${bill.title}`}
          width={bill.width}
          height={bill.height}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 672px"
          className="block h-auto w-full"
        />

        {bill.sections.map((s) => {
          const isOpen = openId === s.id;
          const isLit = isOpen || hoverId === s.id;
          return (
            <button
              key={s.id}
              type="button"
              aria-label={`${s.label}. Show explanation.`}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(s.id)}
              onMouseEnter={() => setHoverId(s.id)}
              onMouseLeave={() => setHoverId((h) => (h === s.id ? null : h))}
              onFocus={() => setHoverId(s.id)}
              onBlur={() => setHoverId((h) => (h === s.id ? null : h))}
              style={{
                top: s.hotspot.top,
                left: s.hotspot.left,
                width: s.hotspot.width,
                height: s.hotspot.height,
              }}
              className={`absolute rounded-md border transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                isLit
                  ? "border-forest bg-forest/20 ring-1 ring-forest/40"
                  : "border-forest/25 bg-transparent hover:border-forest hover:bg-forest/15"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute left-1 top-1 grid h-5 w-5 place-items-center rounded-full text-[11px] font-bold shadow transition-colors ${
                  isLit ? "bg-sun text-navy" : "bg-forest text-white"
                }`}
              >
                {s.n}
              </span>
            </button>
          );
        })}
      </div>

      {/* Expander panel (one open at a time) */}
      <div className="mt-4" aria-live="polite">
        {open ? (
          <div
            id={panelId}
            role="region"
            aria-label={`${open.label}, explained`}
            className="animate-fade-up rounded-2xl border border-forest/20 bg-white p-5 shadow-card"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-forest text-xs font-bold text-white">
                    {open.n}
                  </span>
                  <h4 className="text-lg font-bold text-navy">{open.label}</h4>
                </div>
                <p className="mt-2 text-ink/80">{open.blurb}</p>
                <button
                  type="button"
                  onClick={() => setOpenId(null)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ocean hover:underline"
                >
                  Close
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M6.7 6.7a1 1 0 011.4 0L10 8.6l1.9-1.9a1 1 0 111.4 1.4L11.4 10l1.9 1.9a1 1 0 01-1.4 1.4L10 11.4l-1.9 1.9a1 1 0 01-1.4-1.4L8.6 10 6.7 8.1a1 1 0 010-1.4z" />
                  </svg>
                </button>
              </div>

              {/* Photo slot (graceful fallback until a photo is added) */}
              <div className="sm:w-56 sm:flex-shrink-0">
                {open.image ? (
                  <SiteImage
                    src={open.image}
                    alt={open.imageAlt ?? open.label}
                    width={400}
                    height={300}
                    className="h-40 w-full rounded-xl object-cover"
                    sizes="(max-width: 640px) 100vw, 224px"
                  />
                ) : (
                  <div className="flex h-32 w-full items-center justify-center rounded-xl border border-dashed border-navy/15 bg-cream/60 sm:h-40">
                    <span className="flex flex-col items-center gap-1 px-3 text-center text-xs text-ink/45">
                      <svg className="h-6 w-6 text-navy/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <circle cx="8.5" cy="10" r="1.5" />
                        <path d="M21 16l-5-5-8 8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Photo coming soon
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-navy/15 bg-cream/50 px-4 py-3 text-sm text-ink/60">
            Tap any highlighted number on the bill above, or a label below, to see
            what that part of your bill means.
          </p>
        )}
      </div>

      {/* Numbered legend: mirrors the hotspots and works everywhere */}
      <ul className="mt-4 flex flex-wrap gap-2">
        {bill.sections.map((s) => {
          const isOpen = openId === s.id;
          const isLit = isOpen || hoverId === s.id;
          return (
            <li key={s.id}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(s.id)}
                onMouseEnter={() => setHoverId(s.id)}
                onMouseLeave={() => setHoverId((h) => (h === s.id ? null : h))}
                onFocus={() => setHoverId(s.id)}
                onBlur={() => setHoverId((h) => (h === s.id ? null : h))}
                className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                  isLit
                    ? "border-forest bg-forest text-white"
                    : "border-navy/15 bg-white text-navy hover:border-forest hover:bg-cream"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`grid h-4 w-4 flex-shrink-0 place-items-center rounded-full text-[10px] font-bold ${
                    isLit ? "bg-white text-forest" : "bg-forest text-white"
                  }`}
                >
                  {s.n}
                </span>
                {s.label}
              </button>
            </li>
          );
        })}
      </ul>
    </figure>
  );
}
