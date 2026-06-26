import Link from "next/link";
import { business } from "@/siteConfig";

/** Reusable closing call-to-action band. Soft, no-pressure messaging. */
export default function CTASection({
  title = "Curious where your electric bill money is really going?",
  body = "Get a free, no-pressure bill review. I will walk you through your charges and tell you honestly whether solar makes sense for your home.",
  primaryLabel = "Get my free bill review",
  primaryHref = "/contact",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy bg-sun-rays py-16 sm:py-20">
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-cream/80">
            {body}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
            {business.phoneHref ? (
              <a href={`tel:${business.phoneHref}`} className="btn-ghost">
                Call {business.phone}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
