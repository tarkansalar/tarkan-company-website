import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CANGGUS_LOGO_SRC } from "../data/assets";
import {
  CANGGUS_EMAIL,
  CANGGUS_INSTAGRAM,
  CANGGUS_LINKEDIN,
  CANGGUS_OPERATOR,
} from "../data/content";

// Copy of components/layout/Footer.tsx (main landing page) for /canggus:
// same black footer, 2-column top (brand + blurb | connect block), gradient
// divider, bottom row with copyright + legal links + values line. Logo and
// accent colour swapped to Canggus. Connect block: email, LinkedIn and
// Instagram from Tuan (13 Nov 2026), same inline SVG tiles as the main LP.
// The footer booking CTA was removed on Tuan's request (13 Nov 2026); the
// booking CTAs in the hero, sections and final CTA remain. Legal links go to the Canggus-specific
// /canggus/terms and /canggus/privacy (the old /terms and /privacy belong to
// Be Unstoppable 365 and are left untouched).
type Props = {
  // Logo target. "#top" on /canggus; "/canggus" on the legal sub-pages.
  homeHref?: string;
};

const TILE =
  "flex min-h-11 items-center gap-3 px-4 py-3 border border-white/10 bg-white/[0.02] transition-[background-color,border-color,transform] duration-200 hover:bg-[#111111] hover:border-white/20 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8]";

function ConnectTile({
  href,
  label,
  value,
  ariaLabel,
  external = false,
  iconBg,
  children,
}: {
  href: string;
  label: string;
  value: string;
  ariaLabel: string;
  external?: boolean;
  iconBg: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={`w-full ${TILE}`}
    >
      <span
        aria-hidden="true"
        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white ${iconBg}`}
      >
        {children}
      </span>
      <span className="flex flex-col leading-tight min-w-0">
        <span className="font-semibold text-[10px] tracking-wide uppercase text-[#aaaaaa]">
          {label}
        </span>
        <span className="text-xs text-white truncate">{value}</span>
      </span>
    </a>
  );
}

export default function Footer({ homeHref = "#top" }: Props = {}) {
  return (
    <footer className="bg-black relative border-t border-[#fb6ba8]/15 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-8">
        {/* Brand + connect stack until lg so tablets get a full-width,
            tidy 2-column tile grid; side by side from lg (desktop as before). */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-10">
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
              Connect with us
            </p>
            {/* Phones: one full-width column. sm+: 2 columns, email spans the
                full row so the address is never truncated. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 [&>a:first-child]:sm:col-span-2">
              <ConnectTile
                href={`mailto:${CANGGUS_EMAIL}`}
                label="Email"
                value={CANGGUS_EMAIL}
                ariaLabel={`Email Canggus at ${CANGGUS_EMAIL}`}
                iconBg="bg-[#fb6ba8]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </ConnectTile>
              <ConnectTile
                href={CANGGUS_LINKEDIN}
                label="LinkedIn"
                value="Tarkan Salar"
                ariaLabel="Tarkan Salar on LinkedIn (opens in a new tab)"
                external
                iconBg="bg-[#0A66C2]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </ConnectTile>
              <ConnectTile
                href={CANGGUS_INSTAGRAM}
                label="Instagram"
                value="@canggus.co"
                ariaLabel="Canggus on Instagram (opens in a new tab)"
                external
                iconBg="bg-[linear-gradient(45deg,#f9a825,#e1306c,#833ab4)]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.56.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.382.896-.422.164-1.057.36-2.227.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.413a3.71 3.71 0 01-1.381-.896 3.71 3.71 0 01-.896-1.382c-.164-.422-.36-1.057-.413-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.381.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a5.88 5.88 0 00-2.126 1.384A5.88 5.88 0 00.63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.058 1.277.261 2.15.558 2.913a5.88 5.88 0 001.384 2.126 5.88 5.88 0 002.126 1.384c.763.297 1.636.5 2.913.558C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.15-.261 2.913-.558a5.88 5.88 0 002.126-1.384 5.88 5.88 0 001.384-2.126c.297-.763.5-1.636.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.668-.072-4.948c-.058-1.277-.261-2.15-.558-2.913a5.88 5.88 0 00-1.384-2.126A5.88 5.88 0 0019.86.63C19.098.333 18.225.13 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </ConnectTile>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom row. Phones/tablets: centred stack (copyright, then Terms +
            Privacy side by side, then the values line). Desktop (lg+):
            copyright + links left, values line right. No "|" characters:
            spacing comes from flex gaps, so nothing dangles when it wraps. */}
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:justify-between lg:gap-6">
          <div className="flex flex-col items-center sm:flex-row sm:gap-x-6">
            <p className="text-xs text-[#aaaaaa] text-center">&copy; 2026 Canggus. All rights reserved.</p>
            <nav aria-label="Legal" className="flex items-center gap-x-6">
              <Link
                href="/canggus/terms"
                className="inline-flex min-h-11 items-center px-1 text-xs text-[#aaaaaa] transition-colors duration-200 hover:text-white active:text-white/70 focus-visible:outline-2 focus-visible:outline-[#fb6ba8]"
              >
                Terms of Service
              </Link>
              <Link
                href="/canggus/privacy"
                className="inline-flex min-h-11 items-center px-1 text-xs text-[#aaaaaa] transition-colors duration-200 hover:text-white active:text-white/70 focus-visible:outline-2 focus-visible:outline-[#fb6ba8]"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
          {/* One phrase per line on phones, one line with dots from sm up.
              Each phrase is nowrap so it never breaks mid-phrase. */}
          <p className="flex flex-col items-center gap-1 text-center text-[10px] tracking-[0.12em] text-[#aaaaaa] uppercase sm:flex-row sm:gap-2">
            <span className="whitespace-nowrap">Your brand</span>
            <span aria-hidden="true" className="hidden sm:inline">&middot;</span>
            <span className="whitespace-nowrap">Your formulations</span>
            <span aria-hidden="true" className="hidden sm:inline">&middot;</span>
            <span className="whitespace-nowrap">Your positioning</span>
          </p>
        </div>
        <p className="mt-6 mx-auto max-w-2xl text-center text-[11px] leading-[1.6] text-[#aaaaaa]/80 lg:mx-0 lg:max-w-none lg:text-left">
          {CANGGUS_OPERATOR}.
        </p>
      </div>
    </footer>
  );
}
