# TODO: facts and inputs to confirm with Jose

This site is built and production-ready. A few items need Jose's real inputs or a
final fact-check before launch. Search the codebase for `TBD` to find every
placeholder.

## 1. Business inputs still needed

- [ ] **Physical business address.** Currently `[BUSINESS ADDRESS - TBD]` in
      `siteConfig.ts` (`business.address`). A2P and the Contact + legal pages
      need a real street address. Update the `street`, `city`, and `postalCode`
      fields. Everything else (footer, contact page, Privacy, Terms, structured
      data) reads from there automatically.

- [x] **Business phone / SMS number.** Set to **(309) 861-9894** in
      `siteConfig.ts` (`business.phone` / `business.phoneHref`). It flows to the
      header, footer, contact page, all forms, the SMS HELP line, and both legal
      pages.

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

- [ ] **Testimonials.** `components/Testimonials.tsx` contains clearly-marked
      SAMPLE reviews. Replace with real, permissioned customer quotes. Do not
      publish fabricated reviews.

- [ ] **Images.** Replace branded SVG placeholders in `public/images/` with real
      licensed photos and Jose's real headshot. See
      `public/images/SWAP-IMAGES.md`.

- [ ] **Social Open Graph image.** Export a 1200x630 `og.png` and point
      `DEFAULT_OG_IMAGE` in `lib/seo.ts` to it (SVG share images are unreliable
      on social platforms).

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
