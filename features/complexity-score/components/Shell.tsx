import Link from "next/link";
import type { ReactNode } from "react";

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
        <div className="flex items-center justify-between mb-6 gap-4">
          <span className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon">
            {eyebrow ?? "The Complexity Score™"}
          </span>
          <Link
            href="/"
            className="font-space font-bold text-sm text-supporting hover:text-white transition-colors flex-shrink-0"
          >
            ✕ Close
          </Link>
        </div>

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
