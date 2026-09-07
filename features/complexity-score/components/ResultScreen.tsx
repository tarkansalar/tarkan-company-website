"use client";

import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import { DIAGNOSIS, NEXT_STEP } from "../data/tiers";
import { MAX_SCORE, scoredQuestions } from "../data/questions";
import type { Answer, Tier } from "../types";

type Props = {
  score: number;
  tier: Tier;
  answers: Answer[];
};

export default function ResultScreen({ score, tier, answers }: Props) {
  // The three scored answers that cost the most. Ties resolve by question
  // order, so the same answers always produce the same three.
  const worst = scoredQuestions
    .map((q, i) => ({ q, answer: answers[i] }))
    .filter((x) => x.answer?.points != null)
    .sort((a, b) => (b.answer.points ?? 0) - (a.answer.points ?? 0))
    .slice(0, 3);

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

        {/* The three worst answers - their own diagnosis */}
        {worst.length === 3 && (
          <div className="bg-card-bg border-l-4 border-neon p-8 lg:p-10 mb-6">
            <h3 className="font-space font-bold text-xl lg:text-2xl text-white leading-[1.3] mb-3">
              {DIAGNOSIS.heading}
            </h3>
            <p className="font-inter text-[16px] leading-[1.6] text-supporting mb-8">
              {DIAGNOSIS.lead}
            </p>

            <ol className="space-y-6">
              {worst.map(({ q, answer }) => (
                <li key={q.num} className="border-l-4 border-neon pl-5">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <span className="font-space font-bold text-[11px] tracking-[0.14em] uppercase text-neon">
                      Q{q.num}
                    </span>
                    <span className="font-space font-bold text-sm text-neon flex-shrink-0">
                      {answer.points}/4
                    </span>
                  </div>
                  <p className="font-inter text-[15px] leading-[1.5] text-supporting mb-2">
                    {q.text}
                  </p>
                  <p className="font-inter text-[16px] leading-[1.5] text-white">
                    &ldquo;{answer.label}&rdquo;
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Rest of the tier copy */}
        <div className="bg-card-bg border-l-4 border-neon p-8 lg:p-10 mb-6">
          <div className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon mb-6">
            {DIAGNOSIS.rootCauseLabel}
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
