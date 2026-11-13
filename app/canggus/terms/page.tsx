import type { Metadata } from "next";
import CanggusLegalLayout, {
  LegalList,
  LegalSection,
  TuanIsi,
} from "@/features/canggus/legal/LegalLayout";

// Canggus-specific Terms of Service. Structure follows the old /terms
// (Be Unstoppable 365, untouched). Legal facts that are not confirmed are
// shown as [TUAN ISI: ...] on the page.
export const metadata: Metadata = {
  title: "Terms of Service · Canggus",
  description:
    "Terms for using the Canggus private label supplement partnership page and booking a call with Canggus.",
  // noindex, same as /canggus, until Tuan approves the page
  robots: { index: false, follow: false },
  icons: {
    icon: [{ url: "/canggus/icon.png", sizes: "64x64", type: "image/png" }],
    apple: [{ url: "/canggus/icon.png", sizes: "64x64", type: "image/png" }],
  },
};

export default function CanggusTermsPage() {
  return (
    <CanggusLegalLayout
      title="Terms of Service"
      lastUpdated={<TuanIsi>effective date</TuanIsi>}
      intro={
        <p>
          These terms apply to the Canggus private label supplement partnership page and to
          booking a call with us. Any actual partnership is governed by a separate written
          agreement.
        </p>
      }
    >
      <LegalSection title="1. Agreement to Terms">
        <p>
          By accessing or using the website operated by Canggus (
          <TuanIsi>legal entity name</TuanIsi>, &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) at <TuanIsi>website address</TuanIsi> and any associated services
          (collectively, the &ldquo;Service&rdquo;), you agree to be bound by these Terms of
          Service. If you do not agree to these terms, please do not use the Service.
        </p>
      </LegalSection>

      <LegalSection title="2. Description of Service">
        <p>
          Canggus offers a private label supplement partnership for established businesses that
          want to develop their own supplement brand. Through the Service you can learn about the
          partnership and book a free call to discuss whether it makes sense for your business.
        </p>
        <p>
          The specific scope of any partnership, including products, formulations, packaging,
          quantities, pricing, and timelines, is defined in a separate written agreement between
          you and us. Nothing on this page is an offer or a binding quote.
        </p>
      </LegalSection>

      <LegalSection title="3. Eligibility">
        <p>
          You must be at least 18 years old and have the legal authority to enter into a binding
          agreement, including on behalf of the business you represent, to use this Service. By
          using the Service, you represent that you meet these requirements.
        </p>
      </LegalSection>

      <LegalSection title="4. Use of the Service">
        <p>You agree not to:</p>
        <LegalList>
          <li>Use the Service for any unlawful or fraudulent purpose</li>
          <li>Submit false or misleading information when booking a call or contacting us</li>
          <li>
            Attempt to gain unauthorized access to any part of the Service or its related systems
          </li>
          <li>Interfere with or disrupt the Service</li>
          <li>
            Reproduce, duplicate, copy, or resell any portion of the Service without our written
            permission
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="5. Product Information">
        <p>
          Products, formats, and images shown on this page are examples of what can be developed.
          They are not a fixed catalogue, and availability, specifications, minimum quantities,
          costs, and timelines are confirmed only in writing for each project.
        </p>
        <p>
          Nothing on the Service is medical or health advice, and nothing on it is a claim that
          any product diagnoses, treats, cures, or prevents any condition. Responsibilities for
          product labelling, claims, and regulatory compliance in the markets where you sell are
          set out in the written partnership agreement (
          <TuanIsi>confirm how responsibilities are split</TuanIsi>).
        </p>
      </LegalSection>

      <LegalSection title="6. Intellectual Property">
        <p>
          All content, materials, and branding on the Service, including text, images, and the
          Canggus name and logo, are the property of Canggus or its licensors and are protected
          by applicable copyright and trademark law. Ownership of your own brand, formulations,
          and packaging developed under a partnership is governed by the written partnership
          agreement.
        </p>
      </LegalSection>

      <LegalSection title="7. Bookings and Calls">
        <p>
          Calls booked through the Service are free and subject to availability. A call does not
          create any obligation for either side. Any commitments related to a specific
          partnership are governed by the written agreement signed between you and us.
        </p>
      </LegalSection>

      <LegalSection title="8. Disclaimers">
        <p>
          The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
          We make no warranties, express or implied, regarding the accuracy, completeness, or
          business outcomes of any information provided. All business decisions remain your sole
          responsibility.
        </p>
      </LegalSection>

      <LegalSection title="9. Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, Canggus and its principals shall not
          be liable for any indirect, incidental, special, consequential, or punitive damages, or
          any loss of profits or revenues, whether incurred directly or indirectly, arising from
          your use of the Service.
        </p>
      </LegalSection>

      <LegalSection title="10. Termination">
        <p>
          We reserve the right to suspend or terminate your access to the Service at any time,
          without notice, for any conduct that we believe violates these Terms or is otherwise
          harmful to other users or to us.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of{" "}
          <TuanIsi>country / jurisdiction</TuanIsi>, without regard to its conflict of law
          provisions. Any disputes arising under these Terms shall be resolved in the courts of
          that jurisdiction.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to These Terms">
        <p>
          We may update these Terms from time to time. The updated version will be indicated by
          a revised &ldquo;Last updated&rdquo; date and will be effective as soon as it is
          posted. Your continued use of the Service after any changes constitutes acceptance of
          the new Terms.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact">
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <TuanIsi>contact email</TuanIsi>.
        </p>
        <p>
          <TuanIsi>registered business address</TuanIsi>
        </p>
      </LegalSection>
    </CanggusLegalLayout>
  );
}
