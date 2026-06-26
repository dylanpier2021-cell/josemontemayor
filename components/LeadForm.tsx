"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { business, sms } from "@/siteConfig";

/**
 * LeadForm
 * =============================================================================
 * The ONE reusable, A2P/10DLC-compliant opt-in form. Use this everywhere a
 * phone number is collected so every form on the site is GUARANTEED identical.
 *
 * Compliance rules enforced here (do not change without re-checking A2P review):
 *  - Field order: First Name, Last Name, Phone (required), Email (required).
 *  - TWO separate, optional, UNCHECKED consent checkboxes (transactional +
 *    marketing) using the verbatim text from siteConfig.sms.
 *  - Consent is NOT required to submit. The form submits whether or not either
 *    box is checked.
 *  - Privacy Policy and Terms of Service appear as SEPARATE links BELOW the
 *    checkboxes, never inside the checkbox label text.
 *  - On submit, redirect to /thank-you (never to another opt-in form).
 *  - The phrase "text START" appears nowhere.
 *
 * BACKEND NOTE: This currently performs a client-side submit and redirect. To
 * capture leads, POST `payload` to your CRM / GoHighLevel webhook where marked
 * "TODO: send to CRM" below, then keep the redirect to /thank-you.
 * =============================================================================
 */
export default function LeadForm({
  source = "website",
  heading = "Request your free bill review",
  subheading = "Tell me a little about you and I will reach out. No pressure, no obligation.",
  compact = false,
}: {
  source?: string;
  heading?: string;
  subheading?: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if (data.get("company")) {
      router.push("/thank-you");
      return;
    }

    const payload = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      // Consent is optional; we still record what the user chose for our records.
      consentTransactional: data.get("consentTransactional") === "on",
      consentMarketing: data.get("consentMarketing") === "on",
      source,
      submittedAt: new Date().toISOString(),
    };

    if (!payload.phone || !payload.email) {
      setError("Please enter both a phone number and an email address.");
      return;
    }

    setSubmitting(true);
    try {
      // TODO: send `payload` to your CRM / GoHighLevel webhook here, e.g.
      //   await fetch("/api/lead", { method: "POST", body: JSON.stringify(payload) });
      // Keep the redirect below so users always land on the Thank-You page.
      router.push("/thank-you");
    } catch {
      setSubmitting(false);
      setError("Something went wrong. Please try again or call the number above.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Solar consultation request form"
      className="space-y-5"
    >
      {(heading || subheading) && (
        <div className="space-y-1">
          {heading ? (
            <h2 className="text-2xl font-bold text-navy">{heading}</h2>
          ) : null}
          {subheading ? (
            <p className="text-sm text-ink/70">{subheading}</p>
          ) : null}
        </div>
      )}

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field id="firstName" label="First Name" autoComplete="given-name" />
        <Field id="lastName" label="Last Name" autoComplete="family-name" />
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field
          id="phone"
          label="Phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
        />
      </div>

      {/* Honeypot (visually hidden, off-screen, not announced to AT). */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* TWO separate, optional, unchecked consent checkboxes. */}
      <fieldset className="space-y-4 rounded-xl border border-navy/10 bg-cream/60 p-4">
        <legend className="px-1 text-sm font-semibold text-navy">
          Optional: stay in touch by text
        </legend>

        <ConsentCheckbox
          id="consentTransactional"
          text={sms.transactionalConsent}
        />
        <ConsentCheckbox id="consentMarketing" text={sms.marketingConsent} />

        <p className="text-xs text-ink/60">
          Both boxes are optional. You can submit this form without checking
          either one, and consent is never a condition of any purchase.
        </p>
      </fieldset>

      {/* Privacy + Terms as SEPARATE links, NOT inside the checkbox text. */}
      <p className="text-sm text-ink/70">
        <Link href={business.privacyPath} className="link-underline">
          Privacy Policy
        </Link>
        <span className="mx-2 text-ink/40">|</span>
        <Link href={business.termsPath} className="link-underline">
          Terms of Service
        </Link>
      </p>

      {error ? (
        <p role="alert" className="text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={submitting} className="btn-primary w-full">
        {submitting ? "Sending..." : "Request my free bill review"}
      </button>

      <p className="text-center text-xs text-ink/55">
        We respect your privacy. Your information is used only to contact you
        about your request.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email";
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-navy">
        {label}
        {required ? (
          <span className="ml-1 text-red-600" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1 text-xs font-normal text-ink/50">(optional)</span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        aria-required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-ink shadow-sm outline-none transition focus:border-ocean focus:ring-2 focus:ring-sun/60"
      />
    </div>
  );
}

function ConsentCheckbox({ id, text }: { id: string; text: string }) {
  return (
    <div className="flex gap-3">
      <input
        id={id}
        name={id}
        type="checkbox"
        // Intentionally NOT defaultChecked: opt-in must start unchecked.
        className="mt-1 h-5 w-5 flex-shrink-0 rounded border-navy/30 text-forest accent-forest focus:ring-2 focus:ring-sun"
      />
      <label htmlFor={id} className="text-xs leading-relaxed text-ink/80">
        {text}
      </label>
    </div>
  );
}
