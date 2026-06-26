# Image credits and swap notes

The site now uses **real, licensed stock photos** (Pexels License: free for
commercial use, no attribution required). Credits are listed below as a courtesy
and for your records. All images are served locally through `next/image` via
`components/SiteImage.tsx`.

## Photos in use

| File | Used on | Subject | Source / credit |
| --- | --- | --- | --- |
| `hero.jpg` | Home hero | Modern home with rooftop solar | Pexels (Pexels License) — https://www.pexels.com/photo/sustainable-energy-modern-brick-house-exterior-31912311/ |
| `about.jpg` | About page | Installer placing solar panels | Pexels, photo by Trinh Trần — https://www.pexels.com/photo/a-man-installing-solar-panels-14613939/ |
| `panels.jpg` | Services banner | Solar panel array, sunny sky | Pexels, via Pixabay — https://www.pexels.com/photo/blue-solar-panels-under-sunny-sky-371900/ |
| `home.jpg` | Location pages | Suburban family home | Pexels, photo by Curtis Adams — https://www.pexels.com/photo/american-suburban-family-house-4469133/ |
| `../og.jpg` | Social share card (1200x630) | Solar panels (cropped from panels.jpg) | Pexels, via Pixabay — same as panels.jpg |
| `../icon.svg` | Favicon | Sun mark (brand icon) | First-party (kept as SVG; correct for icons) |

## Still to add

- **Jose's real professional headshot.** The About page currently shows a
  licensed stock photo of a solar installer as an honest stand-in (it is not
  presented as Jose). When you have Jose's photo, drop it in as
  `public/images/jose.jpg` and update the `src` in `app/about/page.tsx`
  (the `SiteImage` in the left column) to `/images/jose.jpg`, with a portrait
  aspect (the container uses `aspect-[3/4]`). Then remove the "photo coming
  soon" note just below it.

## How to swap any photo

Keep the same filename: replace the file in `public/images/` (or `public/og.jpg`)
with your new image at a similar aspect ratio. If you change the filename or
extension, update the matching `src="/images/..."` in the page that uses it
(a project-wide search for the filename shows every reference). `next/image`
handles optimization and lazy loading automatically.

## Licensing

Pexels images are free for commercial use, and attribution is appreciated but
not required. Prefer Ion Solar approved assets and Jose's own photos where
available. Do not use Google Images results or competitor photos.
