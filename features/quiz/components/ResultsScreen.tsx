"use client";

import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import { quizData } from "../data/questions";
import { getStatus } from "../data/bands";
import { getExposures } from "../data/exposures";
import type { Band, QuizScore } from "../types";
import RadarChart from "./RadarChart";

type Props = {
  total: number;
  band: Band;
  scores: number[];
  labels: string[];
};

export default function ResultsScreen({ total, band, scores, labels }: Props) {
  const exposures = getExposures(scores, total);

  return (
    <main className="min-h-screen bg-black flex items-start justify-center p-4 sm:p-8">
      <div className="w-full max-w-3xl my-8">
        <Link
          href="/"
          className="bg-neon text-black font-space font-bold px-6 py-3 text-sm hover:bg-white transition-colors mb-6 inline-block"
        >
          Back to Home
        </Link>

        <div className="bg-card-bg border-l-4 border-neon p-8 lg:p-10 mb-6">
          <div className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon mb-4">
            YOUR 80/20 PROFIT SCORE
          </div>
          <div className="font-space font-extrabold text-6xl lg:text-7xl text-white leading-none">
            {total}
            <span className="text-2xl text-supporting font-bold"> / 16</span>
          </div>
          <div
            className="font-space font-bold text-2xl lg:text-3xl mt-4 mb-3"
            style={{ color: band.color }}
          >
            {band.label}
          </div>
          <p className="font-inter text-[17px] leading-[1.6] text-white">
            {band.description}
          </p>
        </div>

        <div className="bg-card-bg border-l-4 border-neon p-8 lg:p-10 mb-6">
          <div className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon mb-6">
            OPERATIONAL PROFILE
          </div>
          <div className="max-w-md mx-auto">
            <RadarChart scores={scores} color={band.color} />
          </div>
          <p className="font-inter text-sm text-supporting text-center mt-4">
            Your operational profile across 8 dimensions
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {quizData.map((q, i) => {
            const s = scores[i];
            const st = getStatus(s);
            const ip = q.interps[s as QuizScore] ?? q.interps[0];
            return (
              <div
                key={i}
                className="bg-card-bg border-l-4 p-6"
                style={{ borderLeftColor: st.color }}
              >
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                  <div className="font-space font-bold text-white text-base">
                    {q.dim}
                  </div>
                  <div
                    className="font-space font-bold text-sm"
                    style={{ color: st.color }}
                  >
                    {s}/2 · {st.text}
                  </div>
                </div>
                <div className="font-inter text-xs text-supporting mb-2">
                  You answered: &ldquo;{labels[i]}&rdquo;
                </div>
                <div className="font-inter text-sm text-white leading-[1.6]">
                  {ip}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card-bg border-2 border-neon p-8 lg:p-10">
          <h3 className="font-space font-bold text-2xl text-white mb-3">
            What This Means
          </h3>
          <p className="font-inter text-[17px] text-supporting leading-[1.6] mb-6">
            {band.nextSteps}
          </p>
          {exposures.length > 0 && (
            <>
              <h4 className="font-space font-bold text-sm text-neon uppercase tracking-wide mb-3">
                Your biggest exposure areas:
              </h4>
              <ul className="space-y-2 mb-6">
                {exposures.map((e, i) => (
                  <li
                    key={i}
                    className="border-l-4 border-neon pl-4 font-inter text-[15px] text-white"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="font-space font-bold text-lg text-white leading-[1.4] mb-6">
            &ldquo;The 80/20 Bestseller Engine finds these in 48 hours. If it
            doesn&apos;t find at least 5x what you paid - I keep working until
            it does.&rdquo;
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
            No pitch. Just clarity on what these numbers mean for your specific
            business.
          </p>
        </div>
      </div>
    </main>
  );
}
