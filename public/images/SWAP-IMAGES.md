# Image credits and swap notes

The site uses **real, licensed stock photos** (Pexels License: free for
commercial use, no attribution required) plus Jose's own photo. Credits are
listed below for your records. All images are served locally through
`next/image` via `components/SiteImage.tsx`.

## Imagery rule: all-black panels

Every solar-panel image on the site shows **all-black (monocrystalline) panels**,
not blue/silver polycrystalline panels. Keep this aesthetic when swapping any
photo.

## Photos in use

| File | Used on | Subject | Source / credit |
| --- | --- | --- | --- |
| `hero.jpg` | Home hero | Rooftop with all-black solar panels | Pexels, photo by Budget Bizar — https://www.pexels.com/photo/modern-rooftop-solar-panels-and-tiled-roof-35726122/ |
| `panels.jpg` | Services banner | Home with all-black rooftop solar | Pexels, photo by Robert So — https://www.pexels.com/photo/palm-trees-around-house-12284244/ |
| `about.jpg` | Services (Ion section) | Installer placing an all-black panel | Pexels, photo by William Mead — https://www.pexels.com/photo/man-installing-solar-panels-6040783/ |
| `home.jpg` | Location pages | Suburban family home | Pexels, photo by Curtis Adams — https://www.pexels.com/photo/american-suburban-family-house-4469133/ |
| `jose.jpg` | About page | Jose Montemayor (his own photo) | Provided by Jose (BFA Energy). See swap note below. |
| `../og.jpg` | Social card (1200x630) | All-black solar home (cropped from panels.jpg) | Pexels, photo by Robert So |
| `../icon.svg` | Favicon | Sun mark (brand icon) | First-party (kept as SVG; correct for icons) |

## Swap notes

- **Jose's headshot (`jose.jpg`).** The current file is a casual, low-resolution
  (400x400) photo Jose provided. When he sends a higher-resolution professional
  headshot, replace `public/images/jose.jpg` (keep it square or portrait). The
  swap point is commented in `app/about/page.tsx` next to the `SiteImage`.
- **Real bill images.** When Jose provides real, blurred photos of an actual
  ComEd / Ameren bill, see the commented SWAP POINT in
  `components/BillExample.tsx` to drop them in beside the matching tab.

## How to swap any photo

Keep the same filename: replace the file in `public/images/` (or `public/og.jpg`)
with a new image at a similar aspect ratio (and the all-black panel look). If you
change the filename or extension, update the matching `src="/images/..."` in the
page that uses it. `next/image` handles optimization and lazy loading.

## Licensing

Pexels images are free for commercial use, attribution appreciated but not
required. Prefer Ion Solar approved assets and Jose's own photos where available.
Do not use Google Images results or competitor photos.
