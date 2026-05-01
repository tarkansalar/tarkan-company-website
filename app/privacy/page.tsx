import LegalLayout from "@/features/legal/components/LegalLayout";
import LegalSection from "@/features/legal/components/LegalSection";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy · Be Unstoppable 365",
  description: "Privacy Policy for Be Unstoppable 365.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 1, 2026">
      <LegalSection title="1. Introduction">
        <p>
          Be Unstoppable 365 (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
          explains how we collect, use, and protect your information when you
          visit our website at{" "}
          <span className="text-neon">www.tarkansalar.com</span> or use our
          services (collectively, the &ldquo;Service&rdquo;).
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <span className="text-neon font-medium">
              Information you provide:
            </span>{" "}
            Name, email address, business details, and any other information
            you submit when you book a call or contact us directly.
          </li>
          <li>
            <span className="text-neon font-medium">Quiz responses:</span> The
            answers you provide on our diagnostic quiz are processed entirely
            in your browser to generate your score and analysis. Quiz answers
            are not transmitted to or stored on our servers.
          </li>
          <li>
            <span className="text-neon font-medium">Server logs:</span> Our
            hosting provider (Vercel) may automatically log basic technical
            information such as IP address, browser type, and pages requested,
            for security and infrastructure purposes.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Provide, operate, and improve the Service</li>
          <li>Respond to inquiries and schedule consultations</li>
          <li>Send you relevant communications about our services</li>
          <li>Analyze usage patterns to improve the Service</li>
          <li>Comply with legal obligations</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Sharing Your Information">
        <p>
          We do not sell your personal information. We may share information
          with:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <span className="text-neon font-medium">Service providers</span>{" "}
            that help us operate the Service (for example, hosting, booking,
            and email providers), bound by appropriate confidentiality
            obligations.
          </li>
          <li>
            <span className="text-neon font-medium">Legal authorities</span>{" "}
            when required by law or to protect our rights.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Cookies and Tracking">
        <p>
          This website does not set any first-party cookies and does not use
          analytics, advertising, or behavioral tracking technologies. External
          services that you may interact with from this site (such as our
          booking provider or LinkedIn) may set their own cookies on their
          respective domains, governed by their own privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="6. Data Retention">
        <p>
          We retain personal information for as long as necessary to provide
          the Service, comply with our legal obligations, resolve disputes,
          and enforce our agreements. Quiz responses and analytics data may be
          retained in aggregated, non-identifiable form indefinitely.
        </p>
      </LegalSection>

      <LegalSection title="7. Your Rights">
        <p>
          Depending on your location, you may have the right to access,
          correct, delete, or restrict the use of your personal information.
          To exercise any of these rights, please contact us at the address
          below. We will respond within a reasonable timeframe in accordance
          with applicable law.
        </p>
      </LegalSection>

      <LegalSection title="8. Data Security">
        <p>
          We implement reasonable technical and organizational safeguards
          designed to protect your information. However, no method of
          transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="9. Third-Party Links">
        <p>
          The Service may contain links to third-party websites (for example,
          our booking provider or LinkedIn). We are not responsible for the
          privacy practices of those third parties. We encourage you to review
          their privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="10. Children's Privacy">
        <p>
          The Service is not directed to individuals under 18, and we do not
          knowingly collect personal information from children. If you believe
          a child has provided us with personal information, please contact us
          so we can remove it.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The updated
          version will be indicated by a revised &ldquo;Last updated&rdquo;
          date and will be effective as soon as it is posted.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <p>
          If you have any questions about this Privacy Policy or our handling
          of your information, please contact us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-neon hover:text-white transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
