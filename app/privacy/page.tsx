import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { buildMetadata } from "@/lib/seo";
import { business, formattedAddress, noSharingStatement } from "@/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Jose Montemayor, a sole proprietorship providing independent solar consulting in central Illinois, including our SMS text messaging terms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      path="/privacy"
      intro="This Privacy Policy explains how Jose Montemayor collects, uses, and protects your information, including how our text messaging program works."
    >
      <p>
        This Privacy Policy describes the privacy practices of {business.name},{" "}
        {business.legalEntityDescription} (referred to as &quot;we,&quot;
        &quot;us,&quot; &quot;our,&quot; or simply &quot;{business.name}&quot;).
        We are an independent solar consulting business serving homeowners in{" "}
        {business.region}. By using our website, contacting us, or submitting a
        form, you agree to the practices described here.
      </p>

      <h2>1. Information we collect</h2>
      <p>We collect information you provide directly to us, which may include:</p>
      <ul>
        <li>Your first and last name.</li>
        <li>Your phone number.</li>
        <li>Your email address.</li>
        <li>
          Information about your home, electric utility, and electric bill that
          you choose to share so we can provide a bill review or consultation.
        </li>
        <li>
          Any messages or details you send us by form, phone, email, or text.
        </li>
      </ul>
      <p>
        We may also automatically collect limited technical information when you
        visit our website, such as your browser type, device, and general usage,
        through standard server logs and any analytics tools we use. We do not
        sell this information.
      </p>

      <h2>2. How we use your information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your requests and provide a free bill review or consultation.</li>
        <li>Contact you about the services you have requested.</li>
        <li>
          Send transactional messages such as consultation reminders, appointment
          confirmations, and account notifications.
        </li>
        <li>
          Send marketing or promotional messages, but only if you have separately
          opted in to receive them.
        </li>
        <li>Improve our website and services.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2>3. SMS text messaging program</h2>
      <p>
        We offer text messaging so we can serve you conveniently. The following
        terms apply to our SMS program.
      </p>

      <h3>How you opt in</h3>
      <p>
        You opt in to receive text messages by submitting a form on our website
        (for example, the contact form at{" "}
        <a href={`${business.url}/contact`}>{business.domain}/contact</a>) and
        checking the optional consent box or boxes for the type of messages you
        want to receive. We offer two separate, optional consents: one for
        transactional messages and one for marketing and promotional messages.
        Checking these boxes is entirely optional.
      </p>

      <h3>Consent is not a condition of purchase</h3>
      <p>
        You are never required to agree to receive text messages in order to
        submit a form, request a consultation, or purchase any product or
        service. Consent to receive marketing or transactional text messages is
        not a condition of any purchase.
      </p>

      <h3>Age requirement</h3>
      <p>
        You must be at least 18 years of age to opt in to our text messaging
        program.
      </p>

      <h3>Message frequency</h3>
      <p>
        Message frequency may vary depending on your interactions with us and the
        type of messages you have consented to receive.
      </p>

      <h3>Message and data rates</h3>
      <p>
        Message and data rates may apply, depending on your mobile carrier and
        plan. We are not responsible for any charges from your carrier.
      </p>

      <h3>How to opt out (STOP)</h3>
      <p>
        You can cancel the SMS service at any time by replying{" "}
        <strong>STOP</strong> to any text message you receive from us. After you
        send STOP, we will send you a single confirmation message to confirm that
        you have been unsubscribed. After that confirmation, you will not receive
        any further text messages from us unless you opt in again.
      </p>

      <h3>How to get help (HELP)</h3>
      <p>
        If you are experiencing any issues, you can reply with the keyword{" "}
        <strong>HELP</strong> for assistance, or you can reach us directly at{" "}
        {business.phoneHref ? (
          <a href={`tel:${business.phoneHref}`}>{business.phone}</a>
        ) : (
          <strong>{business.phone}</strong>
        )}{" "}
        or by email at <a href={`mailto:${business.email}`}>{business.email}</a>.
      </p>

      <h3>Carrier liability</h3>
      <p>
        Carriers are not liable for delayed or undelivered messages. Delivery of
        messages is subject to effective transmission by your mobile carrier and
        is not guaranteed.
      </p>

      <h3>No sharing of mobile opt-in data</h3>
      <p>
        We do not share your mobile opt-in information or text messaging consent
        with third parties for their own marketing purposes, and we do not engage
        in affiliate marketing or sell leads. Specifically:
      </p>
      <p>
        <strong>{noSharingStatement}</strong>
      </p>

      <h2>4. How we share information</h2>
      <p>
        We do not sell your personal information. We do not share your mobile
        information with third parties or affiliates for marketing or promotional
        purposes. We may share limited information only in these situations:
      </p>
      <ul>
        <li>
          With service providers and subcontractors who support our operations,
          such as customer service, scheduling, or technology vendors, who are
          permitted to use the information only to perform services for us.
        </li>
        <li>
          With Ion Solar or installation partners when needed to move forward with
          a service you have specifically requested.
        </li>
        <li>
          When required by law, regulation, legal process, or a governmental
          request.
        </li>
        <li>
          To protect the rights, property, or safety of our customers or others.
        </li>
      </ul>
      <p>
        Text messaging originator opt-in data and consent are never shared with
        any third parties for any purpose other than as described above.
      </p>

      <h2>5. Cookies and analytics</h2>
      <p>
        Our website may use cookies and similar technologies to keep the site
        working properly and to understand general usage. You can control cookies
        through your browser settings. Disabling cookies may affect how some parts
        of the site function.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We keep your information only as long as needed to provide our services,
        comply with our legal obligations, resolve disputes, and enforce our
        agreements. When information is no longer needed, we take reasonable steps
        to delete or de-identify it.
      </p>

      <h2>7. Your choices and rights</h2>
      <p>
        You may opt out of marketing emails by following the unsubscribe
        instructions in the message, and you may opt out of text messages by
        replying STOP. You may also contact us to ask about the information we
        hold about you or to request that we update or delete it, subject to any
        legal requirements that may apply.
      </p>

      <h2>8. Children&apos;s privacy</h2>
      <p>
        Our website and services are intended for adults. We do not knowingly
        collect personal information from anyone under 18 years of age. If you
        believe a minor has provided us with personal information, please contact
        us and we will take appropriate steps to remove it.
      </p>

      <h2>9. Third-party links</h2>
      <p>
        Our website may contain links to other websites that we do not control.
        We are not responsible for the privacy practices of those websites. We
        encourage you to review the privacy policies of any site you visit.
      </p>

      <h2>10. Security</h2>
      <p>
        We take reasonable measures to protect your information. However, no
        method of transmission or storage is completely secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the &quot;Last updated&quot; date at the top of this page. Your
        continued use of our website or services after a change means you accept
        the updated policy.
      </p>

      <h2>12. Governing law</h2>
      <p>
        This Privacy Policy is governed by the laws of the State of{" "}
        {business.governingLawState}, without regard to its conflict of laws
        principles.
      </p>

      <h2>13. Contact us</h2>
      <p>
        If you have questions about this Privacy Policy or our practices, please
        contact us:
      </p>
      <ul>
        <li>
          <strong>{business.name}</strong> ({business.legalEntityDescription})
        </li>
        <li>
          Phone:{" "}
          {business.phoneHref ? (
            <a href={`tel:${business.phoneHref}`}>{business.phone}</a>
          ) : (
            business.phone
          )}
        </li>
        <li>
          Email: <a href={`mailto:${business.email}`}>{business.email}</a>
        </li>
        <li>Service area: {formattedAddress} (home-based, by appointment)</li>
      </ul>
    </LegalLayout>
  );
}
