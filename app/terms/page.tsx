import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { buildMetadata } from "@/lib/seo";
import { business, formattedAddress } from "@/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Jose Montemayor, a sole proprietorship providing independent solar consulting in central Illinois, including SMS messaging terms.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      path="/terms"
      intro="These Terms and Conditions govern your use of this website and the services provided by Jose Montemayor, including our text messaging program."
    >
      <p>
        These Terms and Conditions (&quot;Terms&quot;) are a legal agreement
        between you and {business.name}, {business.legalEntityDescription}{" "}
        (referred to as &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
        accessing this website, contacting us, submitting a form, or using our
        services, you agree to these Terms. If you do not agree, please do not use
        the website or services.
      </p>

      <h2>1. Who we are</h2>
      <p>
        {business.name} is {business.legalEntityDescription}. We are an
        independent solar consultant working with Ion Solar to help homeowners in{" "}
        {business.region} understand their electric bills and evaluate solar
        options. We are not an electric utility, a tax advisor, or a financial
        advisor.
      </p>

      <h2>2. Our services</h2>
      <p>
        We provide educational guidance, electric bill reviews, and consulting to
        help you decide whether solar is right for your home. Any consultation,
        review, or estimate we provide is for informational purposes. Final
        products, pricing, financing, and installation are provided through Ion
        Solar or other partners and are subject to their separate agreements.
      </p>

      <h2>3. No guarantee of savings or outcomes</h2>
      <p>
        Solar savings depend on many factors that are specific to your home and
        that can change over time, including your electricity usage, utility
        rates, roof conditions, system size, financing, incentive programs, and
        applicable laws. Any figures, estimates, or examples we provide are
        illustrations and are not a promise of results. We do not guarantee any
        particular savings, payback period, or financial outcome.
      </p>

      <h2>4. Not tax, legal, or financial advice</h2>
      <p>
        Information about tax credits, incentives such as Illinois Shines, net
        billing, rebates, and similar programs is provided for general
        educational purposes and may change. It is not tax, legal, or financial
        advice. You should confirm your eligibility and any financial decision
        with a licensed tax professional, attorney, or financial advisor.
      </p>

      <h2>5. SMS text messaging terms</h2>
      <p>
        By opting in to our text messaging program, you agree to the following
        terms.
      </p>
      <ul>
        <li>
          <strong>Opt-in.</strong> You opt in by submitting a form on our website
          and checking the optional consent box or boxes. We offer separate,
          optional consents for transactional messages and for marketing and
          promotional messages.
        </li>
        <li>
          <strong>Age requirement.</strong> You must be at least 18 years old to
          opt in.
        </li>
        <li>
          <strong>Consent is not a condition of purchase.</strong> You are never
          required to receive text messages to use our services or make any
          purchase.
        </li>
        <li>
          <strong>Message frequency.</strong> Message frequency may vary.
        </li>
        <li>
          <strong>Rates.</strong> Message and data rates may apply, based on your
          mobile carrier and plan.
        </li>
        <li>
          <strong>Opt out.</strong> Reply STOP at any time to cancel. You will
          receive a single confirmation message, and then no further messages
          unless you opt in again.
        </li>
        <li>
          <strong>Help.</strong> Reply HELP for assistance, or contact us at{" "}
          {business.phoneHref ? (
            <a href={`tel:${business.phoneHref}`}>{business.phone}</a>
          ) : (
            <strong>{business.phone}</strong>
          )}{" "}
          or <a href={`mailto:${business.email}`}>{business.email}</a>.
        </li>
        <li>
          <strong>Carrier liability.</strong> Carriers are not liable for delayed
          or undelivered messages. Message delivery is subject to your carrier and
          is not guaranteed.
        </li>
        <li>
          <strong>No lead sharing or affiliate marketing.</strong> We do not sell
          leads, and we do not share your mobile opt-in information or consent with
          third parties or affiliates for marketing or promotional purposes. See
          our{" "}
          <a href={business.privacyPath}>Privacy Policy</a> for full details.
        </li>
      </ul>

      <h2>6. Your responsibilities</h2>
      <p>
        You agree to provide accurate information and to use this website and our
        services lawfully. You agree not to misuse the website, interfere with its
        operation, or attempt to access it in an unauthorized way.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        The content on this website, including text, graphics, and logos, is owned
        by or licensed to {business.name} and is protected by applicable laws. You
        may not copy, reproduce, or distribute our content without our permission.
      </p>

      <h2>8. Third-party links and partners</h2>
      <p>
        This website may link to or reference third parties, including Ion Solar.
        We are not responsible for the content, products, or practices of third
        parties. Any transaction you enter into with a third party is between you
        and that third party.
      </p>

      <h2>9. Disclaimer of warranties</h2>
      <p>
        This website and our informational services are provided on an &quot;as
        is&quot; and &quot;as available&quot; basis without warranties of any
        kind, whether express or implied, to the fullest extent permitted by law.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {business.name} will not be liable
        for any indirect, incidental, special, or consequential damages arising
        out of or related to your use of this website or our informational
        services.
      </p>

      <h2>11. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise
        the &quot;Last updated&quot; date at the top of this page. Your continued
        use of the website or services after a change means you accept the updated
        Terms.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of{" "}
        {business.governingLawState}, without regard to its conflict of laws
        principles. Any dispute arising under these Terms will be subject to the
        jurisdiction of the state and federal courts located in{" "}
        {business.governingLawState}.
      </p>

      <h2>13. Contact us</h2>
      <p>If you have questions about these Terms, please contact us:</p>
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
        <li>Address: {formattedAddress}</li>
      </ul>
    </LegalLayout>
  );
}
