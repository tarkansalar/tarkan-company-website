import Image from "next/image";
import Link from "next/link";
import { CANGGUS_LOGO_SRC } from "../data/assets";
import { CANGGUS_BOOKING_HREF, CTA_LABEL } from "../data/content";
import Icon from "../components/Icon";

// Copy of components/layout/Footer.tsx (main landing page) for /canggus:
// same black footer, 2-column top (brand + blurb | connect block), gradient
// divider, bottom row with copyright + legal links + values line. Logo and
// accent colour swapped to Canggus. Contact details for Canggus are not
// known yet, so the connect block uses the booking CTA instead of LinkedIn /
// email ([TUAN ISI] contact). Legal links go to the Canggus-specific
// /canggus/terms and /canggus/privacy (the old /terms and /privacy belong to
// Be Unstoppable 365 and are left untouched).
type Props = {
  // Logo target. "#top" on /canggus; "/canggus" on the legal sub-pages.
  homeHref?: string;
  // Booking CTA target. Legal sub-pages pass "/canggus#book".
  bookingHref?: string;
};

export default function Footer({
  homeHref = "#top",
  bookingHref = CANGGUS_BOOKING_HREF,
}: Props = {}) {
  return (
    <footer className="bg-black relative border-t border-[#fb6ba8]/15 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-10">
          <div className="space-y-4 max-w-sm">
            <a
              href={homeHref}
              className="inline-flex min-h-11 items-center rounded transition-opacity duration-200 hover:opacity-85 active:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8]"
            >
              <Image
                src={CANGGUS_LOGO_SRC}
                alt="Canggus Community"
                width={1024}
                height={243}
                sizes="150px"
                className="h-9 w-auto"
              />
            </a>
            <p className="text-sm text-[#aaaaaa] leading-[1.7]">
              Private label supplement partnership for established health, fitness and wellness
              businesses that already have customers and want to develop their own supplement
              brand.
            </p>
          </div>

          <div>
            <p className="font-bold text-[11px] tracking-[0.18em] uppercase text-[#fb6ba8] mb-6">
              Your next step
            </p>
            {/* [TUAN ISI link booking] [TUAN ISI contact: email / LinkedIn for Canggus] */}
            <a
              href={bookingHref}
              className="inline-flex items-center gap-3 px-4 py-3 border border-white/10 bg-white/[0.02] transition-[background-color,border-color,transform] duration-200 hover:bg-[#111111] hover:border-white/20 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8]"
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#fb6ba8] text-white">
                <Icon name="calendar" className="h-4 w-4" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-semibold text-[10px] tracking-wide uppercase text-[#aaaaaa]">
                  Free call
                </span>
                <span className="text-xs text-white">{CTA_LABEL}</span>
              </span>
              <Icon name="arrowRight" className="h-4 w-4 text-[#fb6ba8]" />
            </a>
            <p className="mt-4 text-xs text-[#aaaaaa] leading-[1.6] max-w-sm">
              No obligation. We&rsquo;ll tell you honestly if this makes sense for your business.
            </p>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-1">
            <p className="text-xs text-[#aaaaaa]">&copy; 2026 Canggus. All rights reserved.</p>
            <span className="text-[#aaaaaa]/30 text-xs hidden sm:inline">|</span>
            <Link
              href="/canggus/terms"
              className="inline-flex min-h-11 items-center text-xs text-[#aaaaaa] transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-[#fb6ba8]"
            >
              Terms of Service
            </Link>
            <span className="text-[#aaaaaa]/30 text-xs">|</span>
            <Link
              href="/canggus/privacy"
              className="inline-flex min-h-11 items-center text-xs text-[#aaaaaa] transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-[#fb6ba8]"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-center sm:text-right text-[10px] tracking-[0.12em] text-[#aaaaaa] uppercase">
            Your brand · Your formulations · Your positioning
          </p>
        </div>
      </div>
    </footer>
  );
}
