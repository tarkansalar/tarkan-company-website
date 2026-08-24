"use client";

import Shell from "./Shell";
import type { Question } from "../types";
import { TOTAL_COUNT } from "../data/questions";

type Props = {
  question: Question;
  /** 0-based position across all 10 questions, for the progress bar. */
  position: number;
  selectedIdx: number | null;
  onPick: (optionIdx: number) => void;
  onBack?: () => void;
};

export default function QuestionCard({
  question,
  position,
  selectedIdx,
  onPick,
  onBack,
}: Props) {
  return (
    <Shell
      progress={(position + 1) / TOTAL_COUNT}
      eyebrow={`Q${question.num} of ${TOTAL_COUNT}`}
    >
      <h2 className="font-space font-bold text-2xl lg:text-3xl text-white mb-8 leading-[1.3]">
        {question.text}
      </h2>

      <div className="space-y-3">
        {question.options.map((opt, i) => {
          const selected = selectedIdx === i;
          return (
            <button
              key={opt.label}
              onClick={() => onPick(i)}
              aria-pressed={selected}
              className={
                selected
                  ? "w-full text-left font-inter text-base sm:text-lg p-5 sm:p-6 border-2 border-neon bg-neon/10 text-white transition-colors"
                  : "w-full text-left font-inter text-base sm:text-lg p-5 sm:p-6 border border-white/15 bg-black/40 text-white hover:border-neon hover:bg-neon/5 transition-colors"
              }
            >
              {opt.label}
              {opt.aside && (
                <span className="text-supporting italic"> {opt.aside}</span>
              )}
            </button>
          );
        })}
      </div>

      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="mt-8 font-space font-bold text-sm text-supporting hover:text-white transition-colors"
        >
          ← Back
        </button>
      )}
    </Shell>
  );
}
