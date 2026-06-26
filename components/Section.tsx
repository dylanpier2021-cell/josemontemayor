import { ReactNode } from "react";

/** A vertical page section with a centered max-width container. */
export default function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className}`}>
      <div className={`container-page ${containerClassName}`}>{children}</div>
    </section>
  );
}

/** Standard section heading block (eyebrow + title + optional intro). */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  centered = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  centered?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <Tag className="text-3xl font-bold sm:text-4xl">{title}</Tag>
      {intro ? (
        <p className="mt-4 text-lg leading-relaxed text-ink/75">{intro}</p>
      ) : null}
    </div>
  );
}
