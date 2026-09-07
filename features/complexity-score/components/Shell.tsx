import Link from "next/link";
import type { ReactNode } from "react";
import BrandLockup from "@/components/widgets/BrandLockup";

type Props = {
  children: ReactNode;
  /** 0-1. Omit to hide the progress bar. */
  progress?: number;
  eyebrow?: string;
  /** Result screen needs a wider column than the question cards. */
  wide?: boolean;
};

export default function Shell({ children, progress, eyebrow, wide }: Props) {
  // my-auto (rather than items-center) centres the card when it fits, and
  // collapses to the padding when the card is taller than the viewport - so a
  // long result page is never clipped above the scroll origin.
  return (
    <main className="min-h-screen bg-black flex justify-center p-4 sm:p-8">
      <div
        className={`bg-card-bg border-l-4 border-neon w-full my-auto p-6 sm:p-10 ${
          wide ? "max-w-3xl" : "max-w-2xl"
        }`}
      >
        {/* Screens that pass an eyebrow (Q3 of 10, Your result) keep the small
            label; the rest carry the full brand lockup. */}
        {eyebrow ? (
          <div className="flex items-center justify-between mb-6 gap-4">
            <span className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon">
              {eyebrow}
            </span>
            <Link
              href="/"
              className="font-space font-bold text-sm text-supporting hover:text-white transition-colors flex-shrink-0"
            >
              ✕ Close
            </Link>
          </div>
        ) : (
          <div className="relative mb-8">
            <Link
              href="/"
              className="absolute right-0 top-0 font-space font-bold text-sm text-supporting hover:text-white transition-colors"
            >
              ✕ Close
            </Link>
            <div className="pt-8 sm:pt-2">
              <BrandLockup />
            </div>
          </div>
        )}

        {progress !== undefined && (
          <div className="h-1 bg-white/10 rounded mb-10 overflow-hidden">
            <div
              className="h-full bg-neon transition-[width] duration-300"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        )}

        {children}
      </div>
    </main>
  );
}
