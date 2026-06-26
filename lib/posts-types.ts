/**
 * Shared content model for blog posts. Posts are stored as structured data
 * (not raw HTML/MDX) so a single <PostBody /> renderer guarantees consistent,
 * accessible, em-dash-free formatting across every article.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title?: string; text: string }
  | { type: "quote"; text: string; cite?: string };

export interface BlogPost {
  /** URL slug, e.g. "where-does-your-electric-bill-money-go". */
  slug: string;
  /** Visible H1 / card title. */
  title: string;
  /** <title> tag text (can be slightly longer/keyword-aware). */
  metaTitle: string;
  /** Meta description, ideally 140-160 characters. */
  description: string;
  /** Short teaser shown on the blog index card. */
  excerpt: string;
  /** Publish date, ISO format YYYY-MM-DD. */
  date: string;
  /** Estimated reading time, e.g. "7 min read". */
  readingTime: string;
  /** Topical tags. */
  tags: string[];
  /** Ordered content blocks rendered by <PostBody />. */
  body: Block[];
}
