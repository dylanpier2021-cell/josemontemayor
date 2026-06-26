import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Thank You",
  description:
    "Thank you for requesting a free solar bill review from Jose Montemayor. Your request has been received and Jose will be in touch.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <span className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-forest/10 text-forest">
          <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>

        <h1 className="mt-6 text-3xl font-bold text-navy sm:text-4xl">
          Thank you. Your request is in.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/75">
          I appreciate you reaching out. I will personally review your
          information and contact you to set up your free, no-pressure bill
          review. There is no obligation, and I will always give you a straight
          answer.
        </p>

        <div className="mt-8 rounded-2xl border border-navy/10 bg-cream p-6 text-left">
          <h2 className="text-lg font-bold text-navy">What happens next</h2>
          <ol className="mt-3 space-y-3 text-ink/80">
            <li className="flex gap-3">
              <span className="font-bold text-forest">1.</span>
              I reach out using the phone or email you provided.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-forest">2.</span>
              We look at your actual electric bill together, line by line.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-forest">3.</span>
              You get an honest read on whether solar fits your home. Your call,
              no pressure.
            </li>
          </ol>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/blog" className="btn-primary">
            Read the blog while you wait
          </Link>
          <Link href="/" className="btn-secondary">
            Back to home
          </Link>
        </div>

        <p className="mt-8 text-sm text-ink/60">
          Need to reach me sooner?{" "}
          {business.phoneHref ? (
            <a href={`tel:${business.phoneHref}`} className="link-underline">
              Call {business.phone}
            </a>
          ) : (
            <span>{business.phone}</span>
          )}{" "}
          or email{" "}
          <a href={`mailto:${business.email}`} className="link-underline">
            {business.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
