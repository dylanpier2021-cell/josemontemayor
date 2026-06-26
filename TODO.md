# TODO: facts and inputs to confirm with Jose

This site is built and production-ready. A few items need Jose's real inputs or a
final fact-check before launch. Search the codebase for `TBD` to find every
placeholder.

## 1. Business inputs (all resolved)

- [x] **Business phone / SMS number.** Set to **(309) 861-9894** in
      `siteConfig.ts` (`business.phone` / `business.phoneHref`). It flows to the
      header, footer, contact page, all forms, the SMS HELP line, and both legal
      pages.

- [x] **Business address.** Resolved: home-based sole proprietorship with **no
      public street address**. The site shows the service area
      (**Champaign & Bloomington, IL**, by appointment) wherever an address would
      appear, sourced from `siteConfig.ts` (`business.serviceAreaLabel` /
      `business.serviceAreaSentence`). This is fully fine for a home-based sole
      proprietor.

> Confirmed and already wired: legal name "Jose Montemayor" (sole proprietor,
> no DBA), domain `thesolarwayjose.com`, branded email
> `jose.m@ionsolar.com`, hours "By appointment", no social links.

## 2. Facts to verify before launch (do not invent numbers)

These were researched and verified in mid-2026. Re-confirm at launch because
solar policy is changing fast. Confirm anything tax-related with a licensed tax
professional.

- [ ] **Federal residential solar tax credit (Section 25D).** Verified: the
      One Big Beautiful Bill (signed July 2025) ended the 30% residential credit
      for systems placed in service after **December 31, 2025**. As of 2026,
      homeowners who buy/own a system generally cannot claim it; third-party
      owned systems (lease/PPA) may still capture a federal credit via the owner.
      Confirm this is still the law at launch.

- [ ] **Illinois net metering -> net billing.** Verified: under CEJA, new ComEd
      and Ameren solar customers moved to net billing on **January 1, 2025**
      (exports credited at the supply rate; Ameren also transmission). Pre-2025
      systems grandfathered. Confirm current status.

- [ ] **Illinois Shines (Adjustable Block Program).** Verified active in 2026.
      Described without specific REC dollar amounts. Confirm program is open and
      add current REC values only if you can verify them.

- [ ] **Illinois Solar for All.** Verified as an active income-qualified program.
      Confirm eligibility details before quoting them to a client.

- [ ] **Smart Inverter / DG Rebate (~$300/kW).** Described in general terms.
      Confirm the current per-kW amount for ComEd and Ameren at launch.

- [ ] **Illinois property tax treatment for solar.** Described generally
      (added value not assessed). Confirm current county rules.

- [ ] **Springfield utility = CWLP (municipal), not Ameren/ComEd.** Handled
      accurately in `lib/locations.ts`. Confirm CWLP's current solar
      interconnection/credit policy, which differs from the statewide change.

## 3. Content to swap before/after launch

- [ ] **DOOR-PITCH VERBIAGE (placeholder).** Incorporate Jose's real in-person
      door-pitch wording so the website mirrors his pitch word for word. When he
      provides the script, weave it through the Home hero, the Services PPA
      section, and the About page so the online message matches what homeowners
      hear at the door. A matching in-code marker is in
      `app/services/page.tsx` (search for "DOOR-PITCH PLACEHOLDER").

- [ ] **Testimonials.** `components/Testimonials.tsx` contains clearly-marked
      SAMPLE reviews. Replace with real, permissioned customer quotes. Do not
      publish fabricated reviews.

- [x] **Images.** Real, licensed all-black-panel photos are installed in
      `public/images/` (hero, panels, Ion installer, suburban home) plus Jose's
      own photo. See `public/images/SWAP-IMAGES.md` for credits and swap notes.
      Still optional: a higher-resolution professional headshot for Jose, and
      real blurred bill images for `components/BillExample.tsx`.

- [x] **Social Open Graph image.** A real 1200x630 `og.jpg` (all-black-panel
      home) is in place and wired in `lib/seo.ts`.

- [ ] **Social links.** None included (per direction). Add to
      `siteConfig.business.social` when available; the footer will render them.

## 4. Wiring before launch

- [ ] **Connect the lead form to your CRM / GoHighLevel.** See the
      `TODO: send payload to your CRM` note in `components/LeadForm.tsx`. Keep
      the redirect to `/thank-you`.

- [ ] **Set up the branded email + SMS number** with the carrier (Twilio/GHL)
      and submit the A2P brand + campaign using the text in `README.md`.

- [ ] **Configure the email-sending domain.** Set up `mail.thesolarwayjose.com`
      as the GHL / Mailgun sending subdomain (add the DNS records Mailgun
      provides). The public contact email shown on the site stays
      `jose.m@ionsolar.com` (Jose's inbox).

- [ ] **Deploy over HTTPS** at `thesolarwayjose.com` and submit the sitemap
      to Google Search Console.
