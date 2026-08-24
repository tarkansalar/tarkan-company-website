"use client";

import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import { BRIDGE } from "../data/tiers";
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
            YOUR COMPLEXITY SCORE&trade;
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

        {/* Bridge block - on every tier */}
        <div className="bg-card-bg border-l-4 border-neon p-8 lg:p-10 mb-6">
          <div className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon mb-6">
            WHY A CODE PAYS FOR ITSELF
          </div>
          <p className="font-space font-bold text-xl text-white leading-[1.3] mb-4">
            {BRIDGE.lead}
          </p>
          <p className="font-inter text-[17px] leading-[1.6] text-supporting mb-6">
            {BRIDGE.intro}
          </p>
          <ul className="space-y-4">
            {BRIDGE.benefits.map((b) => (
              <li key={b.title} className="border-l-4 border-neon pl-4">
                <div className="font-space font-bold text-base text-white leading-[1.3]">
                  {b.title}
                </div>
                <div className="font-inter text-[15px] leading-[1.6] text-supporting mt-1">
                  {b.body}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Final CTA */}
        <div className="bg-card-bg border-2 border-neon p-8 lg:p-10">
          <h3 className="font-space font-bold text-2xl text-white mb-3">
            What This Means
          </h3>
          <div className="font-inter text-[17px] text-supporting leading-[1.6] space-y-5 mb-6">
            {BRIDGE.close.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="font-space font-bold text-lg text-white leading-[1.4] mb-6">
            {BRIDGE.question}
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
          >
            Book Free Call
          </a>
          <p className="font-inter text-sm text-supporting mt-3">
            {BRIDGE.riskReversal}
          </p>
        </div>
      </div>
    </main>
  );
}
