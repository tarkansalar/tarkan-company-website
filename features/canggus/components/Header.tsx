"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CANGGUS_LOGO_SRC } from "../data/assets";

// Based on components/layout/Header.tsx (main landing page) for /canggus:
// same structure (fixed black bar, max-w-7xl, logo left) and the same 80px
// scroll threshold. No booking button here (Tuan 13 Nov): the CTA lives in
// the Hero, the sections, the Final CTA and the footer. The Canggus logo is a
// wordmark, so on scroll it just tightens. The shared component is not
// imported, so the main page is untouched.
type Props = {
  // Logo target. "#top" on /canggus; "/canggus" on the legal sub-pages.
  homeHref?: string;
};

export default function Header({ homeHref = "#top" }: Props = {}) {
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
      <div className="max-w-7xl mx-auto px-4 min-[360px]:px-6 lg:px-12 py-4 flex items-center">
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
      </div>
    </header>
  );
}
