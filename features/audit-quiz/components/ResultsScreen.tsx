"use client";

import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import {
  getLeakBandColor,
  getLeakBandLabel,
  getReadinessBandColor,
} from "../data/scoring";
import type { AuditAnswer, AuditVerdict } from "../types";

type Props = {
  verdict: AuditVerdict;
  observations: string[];
  fixFirst: string;
  answers: AuditAnswer[];
};

export default function ResultsScreen({
  verdict,
  observations,
  fixFirst,
}: Props) {
  const leakColor = getLeakBandColor(verdict.leakBand);
  const readinessColor = getReadinessBandColor(verdict.readinessBand);
  const leakLabel = getLeakBandLabel(verdict.leakBand);

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
          <div className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon mb-6">
            YOUR AUDIT SNAPSHOT
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="font-space font-bold text-sm text-supporting uppercase tracking-wide mb-2">
                Profit Leak Severity
              </div>
              <div className="font-space font-extrabold text-5xl text-white leading-none">
                {verdict.profitLeak}
                <span className="text-xl text-supporting font-bold"> /100</span>
              </div>
              <div
                className="font-space font-bold text-lg mt-3"
                style={{ color: leakColor }}
              >
                {leakLabel}
              </div>
            </div>
            <div>
              <div className="font-space font-bold text-sm text-supporting uppercase tracking-wide mb-2">
                AI Readiness
              </div>
              <div className="font-space font-extrabold text-5xl text-white leading-none">
                {verdict.aiReadiness}
                <span className="text-xl text-supporting font-bold"> /100</span>
              </div>
              <div
                className="font-space font-bold text-lg mt-3"
                style={{ color: readinessColor }}
              >
                {verdict.readinessBand}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card-bg border-2 border-neon p-8 lg:p-10 mb-6">
          <div className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon mb-4">
            VERDICT
          </div>
          <div className="font-space font-bold text-2xl lg:text-3xl text-neon mb-4 leading-[1.25]">
            {verdict.verdictTitle}
          </div>
          <p className="font-inter text-[17px] leading-[1.6] text-white">
            {verdict.verdict}
          </p>
        </div>

        <div className="bg-card-bg border-l-4 border-neon p-8 lg:p-10 mb-6">
          <div className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon mb-4">
            WHAT I SEE
          </div>
          <h3 className="font-space font-bold text-2xl text-white mb-6 leading-[1.3]">
            3 patterns from your answers
          </h3>
          <ol className="space-y-4 pl-0">
            {observations.map((obs, i) => (
              <li
                key={i}
                className="border-l-4 border-neon pl-5 font-inter text-[15px] text-white leading-[1.55]"
              >
                <span className="font-space font-bold text-neon mr-2">
                  {i + 1}.
                </span>
                {obs}
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-card-bg border-l-4 border-neon p-8 lg:p-10 mb-6">
          <div className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon mb-4">
            FIX-FIRST PLAN
          </div>
          <p className="font-space font-bold text-xl lg:text-2xl text-white leading-[1.35]">
            {fixFirst}
          </p>
        </div>

        <div className="bg-card-bg border-2 border-neon p-8 lg:p-10">
          <h3 className="font-space font-bold text-2xl text-white mb-4 leading-[1.3]">
            Want me to review these with you?
          </h3>
          <p className="font-inter text-[17px] text-supporting leading-[1.6] mb-6">
            I'll go through your answers live, show you what I see, and find the
            exact leak. 30 minutes, free.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors block text-center"
          >
            Book Free 30-Min Audit
          </a>
          <p className="font-inter text-sm text-supporting mt-3">
            No pitch. Just direct feedback from me.
          </p>
        </div>
      </div>
    </main>
  );
}
