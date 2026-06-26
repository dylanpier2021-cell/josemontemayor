import Link from "next/link";
import Section from "@/components/Section";

/** Friendly 404. Keeps users on the site (no dead ends). */
export default function NotFound() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-mid">
          Page not found
        </p>
        <h1 className="mt-3 text-4xl font-bold text-navy">
          We could not find that page
        </h1>
        <p className="mt-4 text-ink/75">
          The link may be broken or the page may have moved. Let us get you back
          to something useful.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Get a free bill review
          </Link>
        </div>
        <nav aria-label="Helpful links" className="mt-8 text-sm">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-ocean">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/locations" className="hover:underline">Service Areas</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </nav>
      </div>
    </Section>
  );
}
