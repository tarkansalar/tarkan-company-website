import LegalLayout from "@/features/legal/components/LegalLayout";
import LegalSection from "@/features/legal/components/LegalSection";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Terms of Service · Be Unstoppable 365",
  description: "Terms of Service for Be Unstoppable 365.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="May 1, 2026">
      <LegalSection title="1. Agreement to Terms">
        <p>
          By accessing or using the website operated by Be Unstoppable 365
          (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) at{" "}
          <span className="text-neon">www.tarkansalar.com</span> and any
          associated services (collectively, the &ldquo;Service&rdquo;), you
          agree to be bound by these Terms of Service. If you do not agree to
          these terms, please do not use the Service.
        </p>
      </LegalSection>

      <LegalSection title="2. Description of Service">
        <p>
          Be Unstoppable 365 provides advisory, diagnostic, and operational
          consulting services for consumer brands, including the 80/20
          Bestseller Engine and related deliverables. The specific scope of any
          engagement is defined in a separate written agreement between you and
          us.
        </p>
      </LegalSection>

      <LegalSection title="3. Eligibility">
        <p>
          You must be at least 18 years old and have the legal authority to
          enter into a binding agreement to use this Service. By using the
          Service, you represent that you meet these requirements.
        </p>
      </LegalSection>

      <LegalSection title="4. Use of the Service">
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Use the Service for any unlawful or fraudulent purpose</li>
          <li>
            Attempt to gain unauthorized access to any part of the Service or
            its related systems
          </li>
          <li>Interfere with or disrupt the Service</li>
          <li>
            Reproduce, duplicate, copy, or resell any portion of the Service
            without our written permission
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Intellectual Property">
        <p>
          All content, frameworks, methodologies, and materials provided by Be
          Unstoppable 365 — including but not limited to the 80/20 Bestseller
          Engine, diagnostics, and written deliverables — are the intellectual
          property of Be Unstoppable 365 and are protected by applicable
          copyright and trademark law. You receive a limited, non-transferable
          license to use such materials solely for your own internal business
          purposes.
        </p>
      </LegalSection>

      <LegalSection title="6. Bookings and Consultations">
        <p>
          Calls and consultations booked through the Service are subject to
          availability. Any guarantees or refund commitments related to a
          specific engagement (for example, the &ldquo;5x value or I keep
          working&rdquo; promise) are governed by the written engagement
          agreement signed between you and us.
        </p>
      </LegalSection>

      <LegalSection title="7. Disclaimers">
        <p>
          The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis. We make no warranties, express or implied,
          regarding the accuracy, completeness, or business outcomes of any
          information or recommendations provided. All business decisions
          remain your sole responsibility.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, Be Unstoppable 365
          and its principals shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages, or any loss of profits
          or revenues, whether incurred directly or indirectly, arising from
          your use of the Service.
        </p>
      </LegalSection>

      <LegalSection title="9. Termination">
        <p>
          We reserve the right to suspend or terminate your access to the
          Service at any time, without notice, for any conduct that we believe
          violates these Terms or is otherwise harmful to other users or to us.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws applicable to Be Unstoppable 365&apos;s principal place of
          business, without regard to its conflict of law provisions. Any
          disputes arising under these Terms shall be resolved in the courts of
          that jurisdiction.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to These Terms">
        <p>
          We may update these Terms from time to time. The updated version will
          be indicated by a revised &ldquo;Last updated&rdquo; date and will be
          effective as soon as it is posted. Your continued use of the Service
          after any changes constitutes acceptance of the new Terms.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <p>
          If you have any questions about these Terms, please contact us at{" "}
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
