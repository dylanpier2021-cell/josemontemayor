import Link from "next/link";
import { ReactNode } from "react";

/** Simple icon + title + body card, optionally linked. */
export default function FeatureCard({
  title,
  children,
  icon,
  href,
  cta,
}: {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  cta?: string;
}) {
  const inner = (
    <div className="card flex h-full flex-col transition hover:-translate-y-0.5 hover:shadow-lift">
      {icon ? (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest">
          {icon}
        </div>
      ) : null}
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <div className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink/75">
        {children}
      </div>
      {href && cta ? (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ocean">
          {cta}
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.17 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      ) : null}
    </div>
  );

  return href ? (
    <Link href={href} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}
