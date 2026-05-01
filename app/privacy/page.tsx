import Link from "next/link";

export const metadata = {
  title: "Privacy Policy · Be Unstoppable 365",
  description: "Privacy Policy for Be Unstoppable 365.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <Link
          href="/"
          className="bg-neon text-black font-space font-bold px-6 py-3 text-sm hover:bg-white transition-colors mb-12 inline-block"
        >
          Back to Home
        </Link>

        <h1 className="font-syne font-extrabold text-4xl lg:text-6xl text-neon leading-[1.05] tracking-[-0.025em] mb-4">
          Privacy Policy
        </h1>
        <p className="font-inter text-sm text-supporting mb-16">
          Last updated: May 1, 2026
        </p>

        <div className="space-y-10 font-inter text-[16px] leading-[1.8] text-white/90 font-light">
          <Section title="1. Introduction">
            <p>
              Be Unstoppable 365 (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
              explains how we collect, use, and protect your information when
              you visit our website at{" "}
              <span className="text-neon">www.tarkansalar.com</span> or use our
              services (collectively, the &ldquo;Service&rdquo;).
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <span className="text-neon font-medium">
                  Information you provide:
                </span>{" "}
                Name, email address, business details, and any other
                information you submit when you book a call, complete the
                diagnostic quiz, or contact us directly.
              </li>
              <li>
                <span className="text-neon font-medium">
                  Quiz responses:
                </span>{" "}
                The answers you provide on our diagnostic quiz are processed to
                generate your score and analysis. We do not associate quiz
                answers with personally identifiable information unless you
                proceed to book a call.
              </li>
              <li>
                <span className="text-neon font-medium">
                  Automatically collected:
                </span>{" "}
                Browser type, device information, IP address, pages visited,
                and time spent on the Service. This may be collected through
                cookies and similar technologies used by our hosting and
                analytics providers.
              </li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide, operate, and improve the Service</li>
              <li>Respond to inquiries and schedule consultations</li>
              <li>Send you relevant communications about our services</li>
              <li>Analyze usage patterns to improve the Service</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="4. Sharing Your Information">
            <p>
              We do not sell your personal information. We may share information
              with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <span className="text-neon font-medium">
                  Service providers
                </span>{" "}
                that help us operate the Service (for example, hosting,
                booking, and email providers), bound by appropriate
                confidentiality obligations.
              </li>
              <li>
                <span className="text-neon font-medium">
                  Legal authorities
                </span>{" "}
                when required by law or to protect our rights.
              </li>
            </ul>
          </Section>

          <Section title="5. Cookies and Tracking">
            <p>
              We use cookies and similar technologies to enhance your
              experience, remember preferences, and analyze traffic. You can
              control cookies through your browser settings. Disabling cookies
              may limit some functionality of the Service.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain personal information for as long as necessary to
              provide the Service, comply with our legal obligations, resolve
              disputes, and enforce our agreements. Quiz responses and analytics
              data may be retained in aggregated, non-identifiable form
              indefinitely.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>
              Depending on your location, you may have the right to access,
              correct, delete, or restrict the use of your personal information.
              To exercise any of these rights, please contact us at the address
              below. We will respond within a reasonable timeframe in accordance
              with applicable law.
            </p>
          </Section>

          <Section title="8. Data Security">
            <p>
              We implement reasonable technical and organizational safeguards
              designed to protect your information. However, no method of
              transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </Section>

          <Section title="9. Third-Party Links">
            <p>
              The Service may contain links to third-party websites (for
              example, our booking provider or LinkedIn). We are not responsible
              for the privacy practices of those third parties. We encourage you
              to review their privacy policies.
            </p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>
              The Service is not directed to individuals under 18, and we do
              not knowingly collect personal information from children. If you
              believe a child has provided us with personal information, please
              contact us so we can remove it.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The updated
              version will be indicated by a revised &ldquo;Last updated&rdquo;
              date and will be effective as soon as it is posted.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              If you have any questions about this Privacy Policy or our
              handling of your information, please contact us at{" "}
              <a
                href="mailto:tarkan@beunstoppable365.com"
                className="text-neon hover:text-white transition-colors"
              >
                tarkan@beunstoppable365.com
              </a>
              .
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-syne font-bold text-xl lg:text-2xl text-neon mb-4 leading-tight">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
