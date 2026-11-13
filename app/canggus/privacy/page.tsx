import type { Metadata } from "next";
import CanggusLegalLayout, {
  BookingLink,
  LegalLink,
  LegalList,
  LegalSection,
  Term,
} from "@/features/canggus/legal/LegalLayout";
import {
  CANGGUS_ADDRESS,
  CANGGUS_COMPANY,
  CANGGUS_EMAIL,
  CANGGUS_ID_ENTITY,
} from "@/features/canggus/data/content";

// Canggus-specific Privacy Policy. Structure follows the old /privacy
// (Be Unstoppable 365, untouched). Operator, address and contact are from
// Tuan (13 Nov 2026). Not stated on purpose (unknown): managing director,
// commercial register number, VAT ID, phone.
export const metadata: Metadata = {
  title: "Privacy Policy | Canggu’s",
  openGraph: { title: "Privacy Policy | Canggu’s" },
  twitter: { title: "Privacy Policy | Canggu’s" },
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
      lastUpdated="13 November 2026"
      intro={
        <p>
          This policy explains what information we collect when you visit the Canggus private
          label supplement partnership page and when you book a call with us, and how we use it.
        </p>
      }
    >
      <LegalSection title="1. Introduction">
        <p>
          Canggus is a brand operated by {CANGGUS_COMPANY}, {CANGGUS_ADDRESS} (in Indonesia:{" "}
          {CANGGUS_ID_ENTITY}) (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We
          respect your privacy. This Privacy Policy explains how we collect, use, and protect your
          information when you visit our private label supplement partnership page at
          tarkansalar.com/canggus, book a call, or otherwise contact us about a partnership
          (collectively, the &ldquo;Service&rdquo;).
        </p>
        <p>
          We process personal data in line with the EU General Data Protection Regulation (GDPR)
          and other applicable data protection laws.
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
            confidentiality obligations. These include our hosting provider (Vercel), our image
            storage provider (Supabase), and the third-party booking and communication tools we
            use to schedule and follow up on calls.
          </li>
          <li>
            <Term>Manufacturing partners</Term>: only the product and business details needed to
            quote, sample or produce your order, and only after you ask us to proceed.
          </li>
          <li>
            <Term>Legal authorities</Term> when required by law or to protect our rights.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="5. Cookies and Tracking">
        <p>
          This page does not set any first-party cookies and does not use analytics, advertising,
          or behavioral tracking technologies. If that changes, we will update this policy first.
          External services that you may interact with from this page (such as our booking
          provider) may set their own cookies on their respective domains, governed by their own
          privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="6. Data Retention">
        <p>
          We keep personal information only as long as needed for the purposes above or as
          required by law.
        </p>
      </LegalSection>

      <LegalSection title="7. Your Rights">
        <p>
          Under the GDPR you have the right to access the personal data we hold about you, to
          have it corrected, and to have it deleted. You may also have the right to restrict or
          object to its use, and to receive a copy of it. To exercise any of these rights, email
          us at <LegalLink href={`mailto:${CANGGUS_EMAIL}`}>{CANGGUS_EMAIL}</LegalLink>. We will
          respond within the time required by applicable law.
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
          information, email us at{" "}
          <LegalLink href={`mailto:${CANGGUS_EMAIL}`}>{CANGGUS_EMAIL}</LegalLink> or contact us
          through the <BookingLink>booking call</BookingLink> on this page.
        </p>
        <p>
          {CANGGUS_COMPANY}
          <br />
          {CANGGUS_ADDRESS}
          <br />
          In Indonesia: {CANGGUS_ID_ENTITY}
        </p>
      </LegalSection>
    </CanggusLegalLayout>
  );
}
