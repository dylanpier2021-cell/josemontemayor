import Image from "next/image";

/**
 * Thin wrapper around next/image with sensible defaults (lazy by default,
 * descriptive alt required). Works with the branded SVG placeholders in
 * /public/images today and with real JPG/PNG/WebP photos after you swap them.
 *
 * SWAP POINT: replace the `src` paths passed to this component (see each page)
 * or replace the files in /public/images with the same filenames. See
 * /public/images/SWAP-IMAGES.md for recommended photos and search terms.
 */
export default function SiteImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
      className={className}
    />
  );
}
