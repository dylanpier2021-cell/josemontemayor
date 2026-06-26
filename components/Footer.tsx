import Link from "next/link";
import Logo from "@/components/Logo";
import VeteranBadge from "@/components/VeteranBadge";
import { footerNav } from "@/lib/nav";
import { locations } from "@/lib/locations";
import { business } from "@/siteConfig";

export default function Footer() {
  const year = 2026; // Static export friendly. Update or compute server-side as needed.

  return (
    <footer className="mt-auto bg-navy-dark text-cream/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-12">
        {/* Brand + contact (NAP appears on every page for A2P consistency) */}
        <div className="md:col-span-5">
          <Logo variant="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            {business.shortDescription}
          </p>
          <div className="mt-5">
            <VeteranBadge variant="dark" />
          </div>

          <address className="mt-6 space-y-2 text-sm not-italic">
            <div>
              <span className="font-semibold text-white">Phone: </span>
              {business.phoneHref ? (
                <a href={`tel:${business.phoneHref}`} className="hover:text-sun">
                  {business.phone}
                </a>
              ) : (
                <span>{business.phone}</span>
              )}
            </div>
            <div>
              <span className="font-semibold text-white">Email: </span>
              <a href={`mailto:${business.email}`} className="hover:text-sun">
                {business.email}
              </a>
            </div>
            <div>
              <span className="font-semibold text-white">Service area: </span>
              <span>{business.serviceAreaLabel}</span>
            </div>
            <div className="text-cream/65">{business.serviceAreaSentence}</div>
          </address>
        </div>

        {/* Quick links */}
        <div className="md:col-span-4 md:col-start-7">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sun">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service areas */}
        <div className="md:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Service Areas
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link href={`/locations/${loc.slug}`} className="hover:text-sun">
                  {loc.city}, IL
                </Link>
              </li>
            ))}
            <li>
              <Link href="/locations" className="hover:text-sun">
                All of central Illinois
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/60 sm:flex-row">
          <p>
            &copy; {year} {business.owner}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            {business.name} is {business.legalEntityDescription}. Independent
            solar consultant working with {business.partner}.
          </p>
          <div className="flex gap-4">
            <Link href={business.privacyPath} className="hover:text-sun">
              Privacy
            </Link>
            <Link href={business.termsPath} className="hover:text-sun">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
