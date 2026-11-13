import type { Metadata } from "next";
import CanggusLegalLayout, {
  LegalList,
  LegalSection,
  Term,
  TuanIsi,
} from "@/features/canggus/legal/LegalLayout";

// Canggus-specific Privacy Policy. Structure follows the old /privacy
// (Be Unstoppable 365, untouched). Legal facts that are not confirmed are
// shown as [TUAN ISI: ...] on the page.
export const metadata: Metadata = {
  title: "Privacy Policy · Canggus",
  description:
    "How Canggus collects, uses and protects the information you share when you visit this page or book a call about a private label supplement partnership.",
  // noindex, same as /canggus, until Tuan approves the page
  robots: { index: false, follow: false },
  icons: {
    icon: [{ url: "/canggus/icon.png", sizes: "64x64", type: "image/png" }],
    apple: [{ url: "/canggus/icon.png", sizes: "64x64", type: "image/png" }],
  },
};

export default function CanggusPrivacyPage() {
  return (
    <CanggusLegalLayout
      title="Privacy Policy"
      lastUpdated={<TuanIsi>effective date</TuanIsi>}
      intro={
        <p>
          This policy explains what information we collect when you visit the Canggus private
          label supplement partnership page and when you book a call with us, and how we use it.
        </p>
      }
    >
      <LegalSection title="1. Introduction">
        <p>
          Canggus (<TuanIsi>legal entity name</TuanIsi>, &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we collect,
          use, and protect your information when you visit our private label supplement
          partnership page at <TuanIsi>website address</TuanIsi>, book a call, or otherwise
          contact us about a partnership (collectively, the &ldquo;Service&rdquo;).
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We may collect the following types of information:</p>
        <LegalList>
          <li>
            <Term>Information you provide:</Term> Your name, email address, phone number, business
            name, website or social channels, and any details you share about your business,
            customers, and product ideas when you fill in a form, book a call, or contact us
            directly.
          </li>
          <li>
            <Term>Call notes:</Term> Notes we take during a discovery call about your business,
            the products you are interested in, starting quantities, and timelines, so we can
            follow up properly.
          </li>
          <li>
            <Term>Server logs:</Term> Our hosting provider (Vercel) may automatically log basic
            technical information such as IP address, browser type, and pages requested, for
            security and infrastructure purposes.
          </li>
        </LegalList>
        <p>
          Please do not send us personal health or medical information. We do not need it to
          discuss a supplement partnership.
        </p>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <LegalList>
          <li>Provide, operate, and improve the Service</li>
          <li>Respond to inquiries and schedule calls</li>
          <li>
            Assess whether a private label supplement partnership makes sense for your business
            and prepare relevant options (for example, product types, quantities, and timelines)
          </li>
          <li>Send you relevant communications about our services</li>
          <li>Comply with legal obligations</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="4. Sharing Your Information">
        <p>We do not sell your personal information. We may share information with:</p>
        <LegalList>
          <li>
            <Term>Service providers</Term> that help us operate the Service, bound by appropriate
            confidentiality obligations. These include our hosting provider (Vercel), our file
            storage provider for website images (Supabase), and our booking, form, and email
            providers (<TuanIsi>booking / CRM / email providers actually used</TuanIsi>).
          </li>
          <li>
            <Term>Manufacturing partners</Term>, only when you decide to move forward with a
            partnership and only the business details needed to quote, develop, or produce your
            products (<TuanIsi>confirm whether and how this is shared</TuanIsi>).
          </li>
          <li>
            <Term>Legal authorities</Term> when required by law or to protect our rights.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="5. Cookies and Tracking">
        <p>
          This page does not set any first-party cookies and does not use analytics, advertising,
          or behavioral tracking technologies (<TuanIsi>confirm; update if a pixel or analytics
          is added</TuanIsi>). External services that you may interact with from this page (such
          as our booking provider) may set their own cookies on their respective domains,
          governed by their own privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="6. Data Retention">
        <p>
          We retain personal information for as long as necessary to provide the Service, follow
          up on a potential partnership, comply with our legal obligations, resolve disputes, and
          enforce our agreements (<TuanIsi>retention period, if any</TuanIsi>).
        </p>
      </LegalSection>

      <LegalSection title="7. Your Rights">
        <p>
          Depending on your location, you may have the right to access, correct, delete, or
          restrict the use of your personal information. To exercise any of these rights, please
          contact us at the address below. We will respond within a reasonable timeframe in
          accordance with applicable law.
        </p>
      </LegalSection>

      <LegalSection title="8. Data Security">
        <p>
          We implement reasonable technical and organizational safeguards designed to protect
          your information. However, no method of transmission or storage is completely secure,
          and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="9. Third-Party Links">
        <p>
          The Service may contain links to third-party websites (for example, our booking
          provider). We are not responsible for the privacy practices of those third parties. We
          encourage you to review their privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="10. Children's Privacy">
        <p>
          The Service is intended for businesses and is not directed to individuals under 18. We
          do not knowingly collect personal information from children. If you believe a child
          has provided us with personal information, please contact us so we can remove it.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The updated version will be
          indicated by a revised &ldquo;Last updated&rdquo; date and will be effective as soon as
          it is posted.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <p>
          If you have any questions about this Privacy Policy or our handling of your
          information, please contact us at <TuanIsi>contact email</TuanIsi>.
        </p>
        <p>
          <TuanIsi>registered business address</TuanIsi>
        </p>
      </LegalSection>
    </CanggusLegalLayout>
  );
}
