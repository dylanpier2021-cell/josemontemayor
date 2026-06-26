/** Central navigation model used by the header, footer, and sitemap. */

export interface NavLink {
  label: string;
  href: string;
  /** Child links shown in dropdowns / footer columns. */
  children?: NavLink[];
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/** Footer quick links (curated). */
export const footerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Jose", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];
