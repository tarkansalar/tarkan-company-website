"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BOOKING_URL } from "@/lib/quiz-data";

export default function Header() {
  useEffect(() => {
    const brand = document.getElementById("brand-link");
    if (!brand) return;
    const THRESHOLD = 80;
    function onScroll() {
      if (window.scrollY > THRESHOLD) brand!.classList.add("is-scrolled");
      else brand!.classList.remove("is-scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-neon/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <Link
          id="brand-link"
          href="/"
          className="flex items-center gap-2.5 font-space font-bold text-white"
        >
          <Image
            src="https://wobiecnlwkpkjseambzd.supabase.co/storage/v1/object/public/tarkan-company-asset/Logo.png"
            alt="Be Unstoppable 365"
            width={48}
            height={48}
            className="brand-logo-img w-12 h-12 object-contain"
            priority
          />
          <span className="brand-text text-sm sm:text-base lg:text-2xl font-extrabold tracking-tight text-neon">
            BE UNSTOPPABLE 365
          </span>
        </Link>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener"
          className="bg-neon text-black font-space font-bold px-3 py-2 text-[11px] sm:px-4 sm:py-2.5 sm:text-xs lg:px-6 lg:py-3 lg:text-sm hover:bg-neon/90 transition-colors inline-block whitespace-nowrap"
        >
          Find My Trapped Cash
        </a>
      </div>
    </header>
  );
}
