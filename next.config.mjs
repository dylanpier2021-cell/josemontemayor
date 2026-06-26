/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Local SVG/branded placeholders ship in /public/images. They are first-party
    // assets, so we allow next/image to serve them. When you swap in real photos
    // (JPG/PNG/WebP), these settings keep working with no changes needed.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ["image/avif", "image/webp"],
    // If you later host photos on Unsplash/Pexels/a CDN, add the host here.
    remotePatterns: [],
  },
};

export default nextConfig;
