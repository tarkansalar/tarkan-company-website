import type { ReactNode } from "react";
import Link from "next/link";
import { greatVibes, montserrat } from "../fonts";
import "../visual.css";
import Header from "../components/Header";
import Footer from "../sections/Footer";
import Icon from "../components/Icon";
import { CANGGUS_BOOKING_HREF } from "../data/content";

// Canggus version of features/legal/components/LegalLayout.tsx (the old
// /privacy and /terms belong to Be Unstoppable 365 and are not touched).
// Same wrapper as app/canggus/page.tsx: Montserrat + script accent, white
// page, pink #fb6ba8, and the Canggus header/footer. The logo points back to
// /canggus (there is no top anchor here); booking opens the real booking page.

type Props = {
  title: string;
  // Rendered after "Last updated:".
  lastUpdated: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
};

const HOME = "/canggus";

export default function CanggusLegalLayout({ title, lastUpdated, intro, children }: Props) {
  return (
    <div
      className={`cg-root ${montserrat.variable} ${greatVibes.variable} relative min-h-screen bg-white text-[#282828] font-[family-name:var(--font-cg-sans)] antialiased`}
    >
      <Header homeHref={HOME} />
      <main>
        <section
          id="top"
          className="relative overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16 bg-[radial-gradient(60%_50%_at_85%_10%,rgba(251,107,168,0.16),transparent_70%),radial-gradient(50%_40%_at_0%_100%,rgba(251,107,168,0.10),transparent_70%)]"
        >
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <Link
              href={HOME}
              className="group/back inline-flex min-h-11 items-center gap-2 rounded-full border border-[#282828]/15 bg-white px-4 py-2 text-xs font-semibold text-[#282828] transition-[background-color,border-color,transform] duration-200 hover:border-[#fb6ba8] hover:bg-[#fff1f7] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8]"
            >
              <Icon
                name="arrowRight"
                className="h-4 w-4 rotate-180 text-[#fb6ba8] transition-transform duration-200 group-hover/back:-translate-x-0.5"
              />
              Back to Canggus
            </Link>
            <p className="mt-10 font-[family-name:var(--font-cg-script)] text-[#fb6ba8] text-[34px] sm:text-[42px] leading-none">
              Canggus
            </p>
            <h1 className="mt-3 text-[34px] sm:text-5xl lg:text-[56px] font-extrabold uppercase leading-[1.06] tracking-[-0.02em] text-[#282828]">
              {title}
            </h1>
            <p className="mt-5 text-sm text-[#666666]">Last updated: {lastUpdated}</p>
            {intro ? (
              <div className="mt-8 text-[16px] sm:text-[17px] leading-[1.75] text-[#444444]">
                {intro}
              </div>
            ) : null}
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="h-px bg-gradient-to-r from-[#fb6ba8]/50 via-[#fb6ba8]/15 to-transparent mb-12" />
            <div className="space-y-12 text-[16px] leading-[1.8] text-[#444444]">{children}</div>
          </div>
        </section>
      </main>
      <Footer homeHref={HOME} />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold leading-tight tracking-[-0.01em] text-[#282828] mb-4">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#fb6ba8]">{children}</ul>
  );
}

export function Term({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-[#282828]">{children}</span>;
}

// Inline link in legal copy (email, booking page). External links open in a new tab.
export function LegalLink({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className="font-semibold text-[#c2185b] underline decoration-[#fb6ba8]/40 underline-offset-4 break-words transition-colors duration-200 hover:text-[#fb6ba8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8]"
    >
      {children}
    </a>
  );
}

// Booking call link used in the Contact sections.
export function BookingLink({ children }: { children: ReactNode }) {
  return (
    <LegalLink href={CANGGUS_BOOKING_HREF} external>
      {children}
    </LegalLink>
  );
}
