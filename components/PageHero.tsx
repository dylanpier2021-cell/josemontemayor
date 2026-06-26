import { ReactNode } from "react";
import Breadcrumbs, { Crumb } from "@/components/Breadcrumbs";

/** Standard inner-page hero with optional breadcrumbs and eyebrow. */
export default function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy/10 bg-navy bg-sun-rays text-white">
      <div className="container-page py-12 sm:py-16">
        {crumbs ? (
          <div className="mb-5 [&_*]:text-cream/70 [&_a:hover]:text-sun [&_[aria-current]]:text-white">
            <Breadcrumbs crumbs={crumbs} />
          </div>
        ) : null}
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sun-soft">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-bold !text-white sm:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/85">
            {intro}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
