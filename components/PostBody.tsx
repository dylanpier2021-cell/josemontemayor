import type { Block } from "@/lib/posts-types";

/** Renders structured blog/content blocks into accessible, styled HTML. */
export default function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-site">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return <h2 key={i}>{block.text}</h2>;
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "p":
            return <p key={i}>{block.text}</p>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="my-6 rounded-xl border-l-4 border-sun bg-cream-dark/60 p-5"
              >
                {block.title ? (
                  <p className="mb-1 font-bold text-navy">{block.title}</p>
                ) : null}
                <p className="m-0 text-ink/85">{block.text}</p>
              </aside>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-6 border-l-4 border-forest pl-5 text-lg italic text-navy/90"
              >
                <p className="m-0">{block.text}</p>
                {block.cite ? (
                  <cite className="mt-2 block text-sm not-italic text-ink/60">
                    {block.cite}
                  </cite>
                ) : null}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
