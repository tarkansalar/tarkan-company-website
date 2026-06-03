"use client";

import Link from "next/link";
import type { AuditQuestion } from "../types";

type Props = {
  question: AuditQuestion;
  qIdx: number;
  totalQuestions: number;
  selectedIdx: number | null;
  textValue: string;
  onPick: (i: number, profitPts: number, readinessPts: number, label: string) => void;
  onText: (value: string) => void;
  onNext: () => void;
  canProceed: boolean;
};

export default function QuestionCard({
  question,
  qIdx,
  totalQuestions,
  selectedIdx,
  textValue,
  onPick,
  onText,
  onNext,
  canProceed,
}: Props) {
  const isLast = qIdx === totalQuestions - 1;
  const isRadio = question.type === "radio";
  const isTextarea = question.type === "textarea";

  return (
    <main className="min-h-screen bg-black flex items-start justify-center p-4 sm:p-8">
      <div className="bg-card-bg border-l-4 border-neon w-full max-w-2xl my-8 p-6 sm:p-10 relative">
        <div className="flex items-center justify-between mb-6">
          <span className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon">
            Q{question.num} OF {totalQuestions}
          </span>
          <Link
            href="/"
            className="font-space font-bold text-sm text-supporting hover:text-white transition-colors"
          >
            ✕ Close
          </Link>
        </div>

        <div className="h-1 bg-white/10 rounded mb-10 overflow-hidden">
          <div
            className="h-full bg-neon transition-[width] duration-300"
            style={{ width: `${((qIdx + 1) / totalQuestions) * 100}%` }}
          />
        </div>

        <h2 className="font-space font-bold text-2xl lg:text-3xl text-white mb-8 leading-[1.3]">
          {question.text}
        </h2>

        {question.sublabel && (
          <p className="font-inter text-sm italic text-supporting mb-4 -mt-4">
            {question.sublabel}
          </p>
        )}

        {isRadio && question.options && (
          <div className="space-y-3 mb-8">
            {question.options.map((opt, i) => {
              const selected = selectedIdx === i;
              return (
                <button
                  key={opt.label + i}
                  onClick={() =>
                    onPick(i, opt.profitLeakPoints, opt.aiReadinessPoints, opt.label)
                  }
                  className={
                    selected
                      ? "w-full text-left font-inter text-base p-5 border-2 border-neon bg-neon/10 text-white transition-colors"
                      : "w-full text-left font-inter text-base p-5 border border-white/15 bg-black/40 text-white hover:border-neon hover:bg-neon/5 transition-colors"
                  }
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        )}

        {isTextarea && (
          <textarea
            value={textValue}
            onChange={(e) => onText(e.target.value)}
            placeholder={question.placeholder}
            rows={5}
            className="w-full font-inter text-base p-4 border-2 border-white/15 focus:border-neon bg-black/40 text-white placeholder:text-supporting outline-none mb-8 resize-y"
          />
        )}

        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block ${
            canProceed ? "" : "opacity-40 cursor-not-allowed"
          }`}
        >
          {isLast ? "See Results" : "Next"}
        </button>

        {isTextarea && question.optional && (
          <button
            type="button"
            onClick={onNext}
            className="ml-4 font-space font-bold text-sm text-supporting hover:text-white transition-colors"
          >
            Skip
          </button>
        )}
      </div>
    </main>
  );
}
