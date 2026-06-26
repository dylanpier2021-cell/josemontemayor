import type { BlogPost } from "@/lib/posts-types";
import { post as billMoney } from "@/content/posts/where-does-your-electric-bill-money-go";
import { post as buyVsPpa } from "@/content/posts/buying-solar-vs-ppa-illinois";
import { post as realMath } from "@/content/posts/is-solar-worth-it-central-illinois";

/** All blog posts, newest first. */
export const posts: BlogPost[] = [billMoney, buyVsPpa, realMath].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Human-readable date for display (avoids locale/runtime drift). */
export function formatPostDate(iso: string): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${months[m - 1]} ${d}, ${y}`;
}
