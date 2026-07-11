"use client";

import { useId, useState } from "react";
import SiteImage from "@/components/SiteImage";

/**
 * ExpandableFeatures
 * =============================================================================
 * The same "click a piece and it expands into a short blurb plus a photo"
 * pattern used by the interactive bill, in a reusable grid. Each card shows a
 * title and a one-line teaser; clicking it reveals a longer blurb and a photo
 * slot. One card is open at a time, and clicking it again closes it.
 *
 * Sections without a photo yet fall back to a tidy placeholder, so this is safe
 * to drop in before real photos exist.
 * =============================================================================
 */
export type ExpandableItem = {
  id: string;
  title: string;
  teaser: string;
  blurb: string;
  image?: string;
  imageAlt?: string;
};

export default function ExpandableFeatures({
  items,
  columns = 2,
}: {
  items: ExpandableItem[];
  columns?: 2 | 3;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();
  const gridCols = columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";

  return (
    <ul className={`grid gap-4 ${gridCols}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}`;
        return (
          <li key={item.id} className="h-full">
            <div
              className={`flex h-full flex-col rounded-2xl border bg-white shadow-card transition-colors ${
                isOpen ? "border-forest/40" : "border-navy/10"
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpenId((cur) => (cur === item.id ? null : item.id))
                }
                className="flex items-start gap-3 rounded-2xl p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-navy">{item.title}</span>
                  <span className="mt-0.5 block text-sm text-ink/65">{item.teaser}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={`grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-cream text-navy transition ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              {isOpen ? (
                <div id={panelId} className="animate-fade-up border-t border-navy/10 p-5 pt-4">
                  <p className="text-sm text-ink/80">{item.blurb}</p>
                  <div className="mt-4">
                    {item.image ? (
                      <SiteImage
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        width={480}
                        height={300}
                        className="h-40 w-full rounded-xl object-cover"
                        sizes="(max-width: 640px) 100vw, 320px"
                      />
                    ) : (
                      <div className="flex h-28 w-full items-center justify-center rounded-xl border border-dashed border-navy/15 bg-cream/60">
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
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
