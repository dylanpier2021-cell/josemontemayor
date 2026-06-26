/**
 * siteConfig.ts
 * =============================================================================
 * SINGLE SOURCE OF TRUTH for all business, contact, and legal information.
 *
 * Every page, form, footer, and legal document reads from this file. A2P/10DLC
 * carrier review rejects sites where the business name, phone, address, or email
 * are inconsistent, so NEVER hardcode those values anywhere else. Change them
 * here and they update everywhere.
 *
 * ---------------------------------------------------------------------------
 * HOW TO REBRAND LATER (e.g. to "ION with Jose")
 * ---------------------------------------------------------------------------
 * 1. Change `business.name` below. That string is the legal/visible business
 *    name and is interpolated into the SMS consent text automatically, so the
 *    consent checkboxes, footer, legal pages, and copyright all update at once.
 * 2. Confirm the new name is a registered legal name / DBA before launch, then
 *    re-submit your A2P brand + campaign so the carrier crawl matches the site.
 *
 * ---------------------------------------------------------------------------
 * ITEMS STILL TO FILL IN (see TODO.md) -> search for "TBD"
 * ---------------------------------------------------------------------------
 *  - business.address.*    (physical business address)
 *
 * CONFIRMED: business.phone = (309) 861-9894 (also the SMS sending number).
 * =============================================================================
 */

const ADDRESS_TBD = "[BUSINESS ADDRESS - TBD]";

export const business = {
  /**
   * Legal + visible business name. Jose operates as a SOLE PROPRIETOR under his
   * own legal name with NO DBA. Do not invent a company entity. This one field
   * drives the brand name everywhere (rebrand point).
   */
  name: "Jose Montemayor",

  /** How we describe the legal entity in Privacy/Terms (sole proprietorship). */
  legalEntityDescription: "a sole proprietorship owned by Jose Montemayor",

  /** Owner's full legal name (used in legal copy and consent language). */
  owner: "Jose Montemayor",

  /** Short positioning line used in headers / meta. No em dashes anywhere. */
  tagline: "Honest solar guidance for central Illinois homeowners",

  /** One-line description used for meta + structured data. */
  shortDescription:
    "Independent solar consultant helping central Illinois homeowners understand their electric bills and decide if solar is right for them.",

  /** Jose works with Ion Solar as an independent consultant. */
  partner: "Ion Solar",

  /** Veteran-owned business (U.S. Army combat veteran, disabled). */
  veteranOwned: true,
  veteranBranch: "U.S. Army",

  /** Business hours. */
  hours: "By appointment",

  // --- Contact -------------------------------------------------------------
  /** Branded email. NEVER use Gmail/Yahoo/Hotmail anywhere on the site. */
  email: "jose.m@ionsolar.com",

  /**
   * Phone is also the SMS sending number. Confirmed and live.
   * `phone` is the display string; `phoneHref` is the tel: target (digits only).
   */
  phone: "(309) 861-9894",
  phoneHref: "+13098619894",

  /** Physical business address (required for Contact + legal pages). */
  address: {
    street: ADDRESS_TBD,
    line2: "",
    city: "[CITY - TBD]",
    region: "IL",
    postalCode: "[ZIP - TBD]",
    country: "USA",
  },

  // --- Web -----------------------------------------------------------------
  /** Registered domain (spelled exactly as registered). */
  domain: "thesolarwayjose.com",
  url: "https://thesolarwayjose.com",

  /** No social profiles yet. Add objects like { label, href } when available. */
  social: [] as { label: string; href: string }[],

  // --- Service area --------------------------------------------------------
  region: "Central Illinois",
  /** Core markets with dedicated location pages. */
  serviceAreas: ["Champaign", "Bloomington"],

  // --- Legal ---------------------------------------------------------------
  governingLawState: "Illinois",
  privacyPath: "/privacy",
  termsPath: "/terms",
} as const;

/** Full formatted address string for display (skips empty line2). */
export const formattedAddress = [
  business.address.street,
  business.address.line2,
  `${business.address.city}, ${business.address.region} ${business.address.postalCode}`,
]
  .filter(Boolean)
  .join(", ");

/**
 * SMS consent language. Stored here (not in the form component) so the business
 * name stays in sync on a rebrand. The two strings below are VERBATIM A2P
 * consent copy. Both checkboxes are optional; consent is never a condition of
 * submitting the form or of purchase.
 */
export const sms = {
  transactionalConsent: `By checking this box, I consent to receive transactional messages related to my account or the services I have requested from ${business.name}. These messages may include consultation reminders, appointment confirmations, and account notifications among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt out.`,
  marketingConsent: `By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, and new product updates, among others, from ${business.name}. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt out.`,
} as const;

/** Verbatim sentence required in the Privacy Policy by the carrier. */
export const noSharingStatement =
  "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.";

/** Last-updated date used on legal pages. Update when you revise the policy. */
export const legalLastUpdated = "June 25, 2026";

export const siteConfig = {
  business,
  formattedAddress,
  sms,
  noSharingStatement,
  legalLastUpdated,
} as const;

export type SiteConfig = typeof siteConfig;
export default siteConfig;
