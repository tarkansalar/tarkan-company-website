import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function LegalLayout({ title, lastUpdated, children }: Props) {
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
          {title}
        </h1>
        <p className="font-inter text-sm text-supporting mb-16">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-10 font-inter text-[16px] leading-[1.8] text-white/90 font-light">
          {children}
        </div>
      </div>
    </main>
  );
}
