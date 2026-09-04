"use client";

import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import { NEXT_STEP } from "../data/tiers";
import { MAX_SCORE } from "../data/questions";
import type { Tier } from "../types";

type Props = {
  score: number;
  tier: Tier;
};

export default function ResultScreen({ score, tier }: Props) {
  return (
    <main className="min-h-screen bg-black flex items-start justify-center p-4 sm:p-8">
      <div className="w-full max-w-3xl my-8">
        <Link
          href="/"
          className="bg-neon text-black font-space font-bold px-6 py-3 text-sm hover:bg-white transition-colors mb-6 inline-block"
        >
          Back to Home
        </Link>

        {/* Score */}
        <div className="bg-card-bg border-l-4 border-neon p-8 lg:p-10 mb-6">
          <div className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon mb-4">
            Your Complexity Score&trade;
          </div>
          <div className="font-space font-extrabold text-6xl lg:text-7xl text-white leading-none">
            {score}
            <span className="text-2xl text-supporting font-bold">
              {" "}
              / {MAX_SCORE}
            </span>
          </div>
          <div className="font-space font-bold text-2xl lg:text-3xl text-neon mt-4 mb-3 tracking-[0.04em]">
            {tier.label}
          </div>
          <p className="font-inter text-[17px] leading-[1.6] text-white">
            {tier.body[0]}
          </p>
        </div>

        {/* Rest of the tier copy */}
        <div className="bg-card-bg border-l-4 border-neon p-8 lg:p-10 mb-6">
          <div className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon mb-6">
            WHAT THIS SCORE MEANS
          </div>
          <div className="font-inter text-[17px] leading-[1.6] text-white space-y-5">
            {tier.body.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Next step */}
        <div className="bg-card-bg border-2 border-neon p-8 lg:p-10">
          <h3 className="font-space font-bold text-2xl lg:text-3xl text-white mb-5 leading-[1.2]">
            {NEXT_STEP.heading}
          </h3>

          <p className="font-inter text-[17px] leading-[1.6] text-supporting mb-8">
            {NEXT_STEP.lead}
          </p>

          <p className="font-space font-bold text-lg text-white leading-[1.4] mb-5">
            {NEXT_STEP.callLead}
          </p>

          <ol className="space-y-4 mb-8">
            {NEXT_STEP.points.map((p, i) => (
              <li key={p} className="flex gap-4">
                <span className="font-space font-extrabold text-xl text-neon flex-shrink-0 leading-[1.4]">
                  {i + 1}
                </span>
                <span className="font-inter text-[16px] leading-[1.6] text-white">
                  {p}
                </span>
              </li>
            ))}
          </ol>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="w-full sm:w-auto text-center bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
          >
            {NEXT_STEP.ctaLabel}
          </a>

          <p className="font-inter text-sm text-supporting leading-[1.6] mt-4">
            {NEXT_STEP.reassurance}
          </p>

          <div className="mt-10 pt-8 border-t border-neon/20 font-inter text-[15px] leading-[1.6] text-supporting space-y-3">
            {NEXT_STEP.offer.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
