import type { Metadata } from "next";
import { business, formattedAddress } from "@/siteConfig";

/** Absolute site origin used for canonical + Open Graph URLs. */
export const SITE_URL = business.url;

/** Default social share image (1200x630 recommended). See TODO to add og.png. */
export const DEFAULT_OG_IMAGE = "/og.svg";

interface BuildMetaArgs {
  title: string;
  description: string;
  /** Path beginning with "/" (used for canonical + OG url). */
  path: string;
  image?: string;
  /** Set true only on utility pages you do not want indexed (none required). */
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
}

/**
 * Builds a complete, consistent Metadata object: unique title, description,
 * canonical URL, Open Graph, and Twitter card. Used by every page.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  type = "website",
  publishedTime,
}: BuildMetaArgs): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const fullTitle =
    title === business.name ? title : `${title} | ${business.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: business.name,
      locale: "en_US",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: image, width: 1200, height: 630, alt: business.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/** LocalBusiness JSON-LD (veteran-owned, service areas). */
export function localBusinessJsonLd() {
  const hasRealPhone = Boolean(business.phoneHref);
  const addr = business.address;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
    description: business.shortDescription,
    url: SITE_URL,
    email: business.email,
    ...(hasRealPhone ? { telephone: business.phoneHref } : {}),
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    founder: { "@type": "Person", name: business.owner },
    foundingLocation: business.region,
    knowsAbout: [
      "Residential solar consulting",
      "Solar power purchase agreements",
      "Illinois Shines incentives",
      "Electric bill analysis",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: addr.street,
      addressLocality: addr.city,
      addressRegion: addr.region,
      postalCode: addr.postalCode,
      addressCountry: "US",
    },
    areaServed: business.serviceAreas.map((city) => ({
      "@type": "City",
      name: `${city}, Illinois`,
    })),
    // Veteran-owned signal (no formal schema property exists; we surface it here).
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Veteran-owned",
        value: "Yes, U.S. Army veteran-owned",
      },
    ],
    slogan: business.tagline,
  };
}

/** Article JSON-LD for blog posts. */
export function articleJsonLd(args: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    datePublished: args.datePublished,
    dateModified: args.datePublished,
    mainEntityOfPage: `${SITE_URL}${args.path}`,
    image: `${SITE_URL}${args.image ?? DEFAULT_OG_IMAGE}`,
    author: { "@type": "Person", name: business.owner },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      },
    },
  };
}

/** BreadcrumbList JSON-LD. Pass ordered [{name, path}] crumbs. */
export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

/** FAQPage JSON-LD. */
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export { formattedAddress };
