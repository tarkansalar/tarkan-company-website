"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CANGGUS_LOGO_SRC } from "../data/assets";
import { CANGGUS_BOOKING_HREF, CTA_LABEL, CTA_LABEL_SHORT } from "../data/content";
import Icon from "./Icon";

// Copy of components/layout/Header.tsx (main landing page) for /canggus:
// same structure (fixed black bar, max-w-7xl, logo left, CTA right) and the
// same 80px scroll threshold. Only the logo and the accent colour (pink
// #fb6ba8) differ. The main LP swaps its logo for the brand name on scroll;
// the Canggus logo is already a wordmark, so it just tightens instead.
// The shared component is not imported, so the main page is untouched.
type Props = {
  // Logo target. "#top" on /canggus; "/canggus" on the legal sub-pages.
  homeHref?: string;
  // Booking CTA target. Legal sub-pages pass "/canggus#book".
  bookingHref?: string;
};

export default function Header({
  homeHref = "#top",
  bookingHref = CANGGUS_BOOKING_HREF,
}: Props = {}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const THRESHOLD = 80;
    function onScroll() {
      setScrolled(window.scrollY > THRESHOLD);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#fb6ba8]/20">
      {/* px-4 / gap-3 below 360px so logo + CTA fit a 320px screen */}
      <div className="max-w-7xl mx-auto px-4 min-[360px]:px-6 lg:px-12 py-4 flex justify-between items-center gap-3 min-[360px]:gap-4">
        <a
          href={homeHref}
          className="flex h-12 items-center rounded transition-opacity duration-200 hover:opacity-85 active:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8]"
        >
          <Image
            src={CANGGUS_LOGO_SRC}
            alt="Canggus Community"
            width={1024}
            height={243}
            priority
            sizes="(min-width: 1024px) 170px, 120px"
            className={`w-auto origin-left transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] h-7 sm:h-8 lg:h-10 ${scrolled ? "scale-[0.88]" : "scale-100"}`}
          />
        </a>
        {/* [TUAN ISI link booking] */}
        <a
          href={bookingHref}
          className="inline-flex items-center gap-2 whitespace-nowrap bg-[#fb6ba8] text-white font-bold px-3 py-2 text-[11px] sm:px-4 sm:py-2.5 sm:text-xs lg:px-6 lg:py-3 lg:text-sm transition-colors duration-200 hover:bg-[#f466a2] active:bg-[#e85a96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Icon name="calendar" className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
          <span className="sm:hidden">{CTA_LABEL_SHORT}</span>
          <span className="hidden sm:inline">{CTA_LABEL}</span>
          <Icon name="arrowRight" className="hidden min-[360px]:block h-3.5 w-3.5 lg:h-4 lg:w-4" />
        </a>
      </div>
    </header>
  );
}
