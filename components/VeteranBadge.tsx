import { business } from "@/siteConfig";

/** Veteran-owned trust badge. Subtle, tasteful nod (no flag clichés). */
export default function VeteranBadge({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  if (!business.veteranOwned) return null;

  const base =
    variant === "dark"
      ? "border-white/25 bg-white/10 text-white"
      : "border-forest/20 bg-forest/5 text-forest";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${base} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.3 7.2 17.7l.9-5.4L4.2 8.5l5.4-.8z" />
      </svg>
      Veteran Owned
    </span>
  );
}
