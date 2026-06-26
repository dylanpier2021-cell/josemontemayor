import { ReactNode } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { legalLastUpdated } from "@/siteConfig";

/** Shared shell for Privacy and Terms so they look and read consistently. */
export default function LegalLayout({
  title,
  intro,
  path,
  children,
}: {
  title: string;
  intro: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        intro={intro}
        crumbs={[
          { name: "Home", path: "/" },
          { name: title, path },
        ]}
      />
      <Section>
        <p className="mb-8 text-sm text-ink/60">
          Last updated: {legalLastUpdated}
        </p>
        <div className="prose-site max-w-prose">{children}</div>
      </Section>
    </>
  );
}
