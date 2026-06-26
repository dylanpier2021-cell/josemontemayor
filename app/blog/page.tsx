import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { posts, formatPostDate } from "@/lib/posts";

export const metadata: Metadata = buildMetadata({
  title: "Blog: Honest Solar and Energy Education",
  description:
    "Plain-English articles on electric bills, solar incentives, net billing, and the real math of going solar in central Illinois. No hype, just honesty.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Honest solar and energy education"
        intro="No hype and no pressure. Just clear writing about your electric bill, solar incentives, and how to think about the real math, for central Illinois homeowners."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <Section>
        {/* Featured (newest) */}
        {featured ? (
          <Link
            href={`/blog/${featured.slug}`}
            className="group block overflow-hidden rounded-2xl border border-navy/10 bg-navy bg-sun-rays p-8 text-white shadow-card transition hover:shadow-lift sm:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-sun-soft">
              Latest article
            </p>
            <h2 className="mt-2 max-w-3xl text-2xl font-bold !text-white sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 max-w-2xl text-cream/85">{featured.excerpt}</p>
            <p className="mt-4 text-sm text-cream/65">
              {formatPostDate(featured.date)} &middot; {featured.readingTime}
            </p>
            <span className="mt-5 inline-flex items-center gap-1 font-semibold text-sun-soft">
              Read the article
              <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.17 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
            </span>
          </Link>
        ) : null}

        {/* Rest */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article key={post.slug} className="card flex h-full flex-col">
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-forest/10 px-2.5 py-0.5 text-xs font-medium text-forest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-3 text-lg font-bold text-navy">
                <Link href={`/blog/${post.slug}`} className="hover:text-ocean">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">
                {post.excerpt}
              </p>
              <p className="mt-4 text-xs text-ink/55">
                {formatPostDate(post.date)} &middot; {post.readingTime}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ocean"
              >
                Read more
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.17 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
