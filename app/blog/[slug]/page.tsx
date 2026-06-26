import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import PostBody from "@/components/PostBody";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, articleJsonLd } from "@/lib/seo";
import { posts, getPost, formatPostDate } from "@/lib/posts";
import { business } from "@/siteConfig";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          datePublished: post.date,
        })}
      />

      <PageHero
        eyebrow="Blog"
        title={post.title}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      >
        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-cream/75">
          <span>By {business.owner}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime}</span>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr,18rem]">
          <article>
            <PostBody blocks={post.body} />

            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-cream-dark px-3 py-1 text-xs font-medium text-ink/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author / honesty note */}
            <div className="mt-10 rounded-2xl border border-navy/10 bg-cream p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-forest-mid">
                About the author
              </p>
              <p className="mt-2 text-ink/80">
                {business.owner} is a disabled U.S. Army combat veteran and an
                independent solar consultant working with {business.partner}
                across central Illinois. He writes to help homeowners understand
                their bills and make their own informed decisions, with no
                pressure.
              </p>
              <Link href="/contact" className="btn-primary mt-4">
                Get a free bill review
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="card">
              <h2 className="text-base font-bold text-navy">Keep reading</h2>
              <ul className="mt-3 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="text-sm font-medium text-navy hover:text-ocean"
                    >
                      {r.title}
                    </Link>
                    <p className="text-xs text-ink/55">{r.readingTime}</p>
                  </li>
                ))}
              </ul>
              <Link href="/blog" className="mt-4 inline-block link-underline text-sm">
                View all articles
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
