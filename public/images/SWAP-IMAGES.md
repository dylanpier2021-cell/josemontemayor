# Image swap guide

The site ships with clean, branded **SVG placeholders** so there are no broken
images and nothing copyrighted is bundled. Replace them with real, licensed
photos before (or shortly after) launch.

## How to swap

**Easiest:** keep the same filename. Drop a real photo into `/public/images/`
using the exact name below (you can change the extension, then update the `src`
in the page that uses it). All images render through `<SiteImage />`
(`components/SiteImage.tsx`), which uses `next/image` for lazy loading and
optimization.

If you change extensions (for example `.svg` to `.jpg`), update the matching
`src="/images/..."` value in the page that references it. A quick project-wide
search for the filename will show every place it is used.

## Files to replace

| File | Used on | Suggested photo | Free sources / search terms |
| --- | --- | --- | --- |
| `hero-rooftop-solar.svg` | Home hero | Modern home with rooftop solar, daylight | Unsplash / Pexels: "rooftop solar home", "residential solar panels house" |
| `jose-portrait.svg` | About, Home | Jose's real professional headshot | Provided by Jose (preferred). Keep portrait ~600x700. |
| `central-illinois-home.svg` | About, Locations | Midwest single-family home, farmland backdrop | Unsplash / Pexels: "midwest house", "illinois suburban home" |
| `solar-panels.svg` | Services | Close-up solar panel array, blue sky | Unsplash / Pexels: "solar panels close up", "photovoltaic array" |
| `../og.svg` | Social share card | 1200x630 branded card (export to `og.png`) | See note below |

## Licensing reminder

- **Unsplash** and **Pexels** images are free for commercial use; attribution is
  appreciated but not required. Confirm the current license on each photo.
- Prefer **Ion Solar approved** marketing assets where available, and Jose's own
  photos for anything showing him or his work.
- Do not use Google Images results or competitor photos.

## Social (Open Graph) image

`og.svg` is a starting design. Most social platforms (Facebook, LinkedIn, X) do
**not** render SVG share images reliably. For best results, export a
**1200x630 PNG** named `og.png`, place it in `/public`, and update
`DEFAULT_OG_IMAGE` in `lib/seo.ts` to `"/og.png"`.

## Add photo credits here as you swap

- (example) hero-rooftop-solar.jpg — Photo by [Name] on Unsplash, [link]
