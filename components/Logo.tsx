import Link from "next/link";
import { business } from "@/siteConfig";

/**
 * Text-based logo with an inline sun mark. Business name comes from siteConfig
 * so a rebrand updates the logo automatically. To use a real logo image later,
 * drop it in /public and replace the SVG mark below with next/image.
 */
export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-cream/80" : "text-forest-mid";

  return (
    <Link
      href="/"
      aria-label={`${business.name} home`}
      className="group inline-flex items-center gap-3"
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sun to-sun-deep shadow-card">
        {/* Sun + energy motif */}
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-navy-dark"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-bold tracking-tight ${textColor}`}>
          {business.name}
        </span>
        <span className={`text-[0.7rem] font-medium uppercase tracking-[0.16em] ${subColor}`}>
          Solar Consulting
        </span>
      </span>
    </Link>
  );
}
