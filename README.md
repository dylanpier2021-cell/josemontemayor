# Jose Montemayor Solar

A production, fully indexable, A2P/10DLC-compliant marketing website for
**Jose Montemayor**, an independent, veteran-owned solar consultant serving
central Illinois (working with Ion Solar). Built with Next.js (App Router),
TypeScript, and Tailwind CSS.

> Jose Montemayor is a **sole proprietorship owned by Jose Montemayor** (no DBA,
> not an LLC). All copy, legal pages, and consent language reflect that.

---

## 1. Quick start

```bash
# from the boochies/ folder
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (static-generated)
npm run start    # serve the production build
npm run lint     # eslint
npm run typecheck # tsc --noEmit
```

Requires Node 18.18+ (Node 20 LTS recommended).

---

## 2. Where to edit content

| You want to change... | Edit this |
| --- | --- |
| Business name, phone, email, address, hours, service areas, domain, governing law | `siteConfig.ts` (single source of truth) |
| SMS consent checkbox wording | `siteConfig.ts` -> `sms` (kept in sync with the business name) |
| The required Privacy "no sharing" sentence | `siteConfig.ts` -> `noSharingStatement` |
| Navigation links / dropdowns | `lib/nav.ts` |
| Homepage sections | `app/page.tsx` |
| About / Jose's story | `app/about/page.tsx` |
| Services (single page, three sections) | `app/services/page.tsx` |
| City pages (Champaign + Bloomington) | `lib/locations.ts` (data) + `app/locations/[city]/page.tsx` (layout) |
| Blog posts | `content/posts/*.ts` (one file per post), listed in `lib/posts.ts` |
| FAQs | `lib/faqs.ts` |
| Legal copy | `app/privacy/page.tsx`, `app/terms/page.tsx` (shell: `components/LegalLayout.tsx`) |
| The opt-in form | `components/LeadForm.tsx` (one component, used everywhere) |
| Colors / fonts / design tokens | `tailwind.config.ts`, `app/globals.css` |
| Images | `public/images/` (see `public/images/SWAP-IMAGES.md`) |

### Add a new blog post

1. Copy an existing file in `content/posts/` and edit the fields (slug, title,
   metaTitle, description, excerpt, date, readingTime, tags, body blocks).
2. Import it in `lib/posts.ts` and add it to the `posts` array.
   The blog index, post page, and sitemap update automatically.

---

## 3. How to rebrand later (e.g. "ION with Jose")

The brand name lives in **one field**. To rebrand:

1. Open `siteConfig.ts` and change `business.name`.
   This updates the logo, header, footer, copyright, legal pages, **and the SMS
   consent text** (the consent strings interpolate the business name).
2. Confirm the new name is a registered legal name or DBA before launch.
3. Re-submit your A2P brand + campaign so the carrier crawl matches the site.

> Do not hardcode the business name, phone, email, or address anywhere else.
> Carriers reject A2P registrations when these values are inconsistent.

---

## 4. The lead / opt-in form (A2P compliance)

One reusable component, `components/LeadForm.tsx`, is used on the homepage, the
contact page, and every location page, so every phone-collecting form is
**guaranteed identical**. It enforces:

- Field order: First Name, Last Name, Phone (required), Email (required).
- **Two separate, optional, unchecked** consent checkboxes (transactional and
  marketing) with verbatim A2P language.
- Consent is **not** required to submit (consent is never a condition of
  purchase).
- Privacy Policy and Terms of Service appear as **separate links below** the
  checkboxes, never inside the checkbox text.
- On submit it redirects to `/thank-you` (never to another opt-in form).
- The phrase "text START" appears nowhere.

### Connecting the form to a CRM / GoHighLevel

The form currently validates and redirects client-side. To capture leads, send
the `payload` to your webhook in `components/LeadForm.tsx` (look for
`TODO: send payload to your CRM`). Keep the redirect to `/thank-you`.

---

## 5. Ready-to-paste GHL A2P registration text

**Campaign use-case description**

```
This campaign sends confirmations, updates, and reminder messages to customers from Jose Montemayor through the website, and opt in to receive marketing and promotional messages, including special offers, discounts, and new product updates.
```

**How end users consent (opt-in description)**

```
End users opt in by visiting https://thesolarwayjose.com/contact, filling out the fields, and optionally selecting checkboxes to consent to receive transactional communications such as confirmations, updates, and reminders. Users may also separately opt in to receive marketing and promotional messages from Jose Montemayor, including special offers, discounts, and product or service updates.
```

**Sample messages** (examples you can adapt for the registration form)

```
Transactional: "Hi {Name}, this is Jose Montemayor confirming your solar bill review on {date} at {time}. Reply STOP to opt out, HELP for help. Msg & data rates may apply."
Marketing: "Hi {Name}, Jose Montemayor here. Illinois solar incentives are changing. Reply to set up a free bill review. Reply STOP to opt out, HELP for help. Msg & data rates may apply."
```

**Helpful links for the registration**

- Opt-in page: https://thesolarwayjose.com/contact
- Privacy Policy: https://thesolarwayjose.com/privacy
- Terms & Conditions: https://thesolarwayjose.com/terms

**Email + domain details for the registration**

- Website domain: `thesolarwayjose.com`
- Email-sending domain (GHL / Mailgun): `mail.thesolarwayjose.com` (a sending
  subdomain only, not a mailbox shown on the site)
- Public contact email shown on the site (Jose's inbox): `jose.m@ionsolar.com`

---

## 6. SEO and technical

- Every page is **indexable** (no `noindex`). Unique title, meta description,
  canonical, Open Graph, and Twitter tags via `lib/seo.ts`.
- `app/sitemap.ts` and `app/robots.ts` auto-generate `sitemap.xml` and
  `robots.txt`.
- Structured data: `LocalBusiness` (veteran-owned, service areas) site-wide,
  `Article` on posts, `BreadcrumbList` on inner pages, `FAQPage` where used.
- Semantic HTML, one `h1` per page, descriptive `alt` text, visible focus
  states, reduced-motion support.
- Images use `next/image` via `components/SiteImage.tsx` (lazy by default).

### Deploy

Deploy to Vercel (recommended for Next.js) or any Node host:

1. Point the build to the `boochies/` directory.
2. Set the production domain to `thesolarwayjose.com` (HTTPS).
3. `SITE_URL` is derived from `siteConfig.business.url`; update it there if the
   domain changes.

---

## 7. Images

The site ships with clean, branded **SVG placeholders** so nothing is broken and
nothing copyrighted is bundled. Replace them with real licensed photos (Unsplash,
Pexels, or Ion-approved assets) and Jose's real headshot. See
`public/images/SWAP-IMAGES.md` for filenames, sources, and search terms.

For the social share image, export a 1200x630 `og.png` and point
`DEFAULT_OG_IMAGE` in `lib/seo.ts` to it (see that file's notes).

---

## 8. Important accuracy note (verify before launch)

Solar incentives and rules changed recently. The copy reflects what was verified
in mid-2026, but please confirm current details with Jose and a licensed tax
professional. See `TODO.md` for the full checklist, including:

- The federal residential solar tax credit (Section 25D) ended for systems
  placed in service after Dec 31, 2025.
- ComEd and Ameren moved new solar customers to net billing on Jan 1, 2025.
- Illinois Shines, Solar for All, and the Smart Inverter/DG Rebate are described
  without invented dollar figures.

---

## 9. Project structure

```
boochies/
  siteConfig.ts            # single source of truth (business + legal + SMS)
  app/
    layout.tsx             # header, footer, fonts, LocalBusiness JSON-LD
    page.tsx               # home
    about/ services/ locations/ blog/ contact/ thank-you/ privacy/ terms/
    sitemap.ts robots.ts not-found.tsx
  components/              # Header, Footer, LeadForm, FAQ, SiteImage, etc.
  content/posts/           # one .ts file per blog post
  lib/                     # seo, nav, posts, locations, faqs, types
  public/images/           # branded placeholders + swap guide
```
