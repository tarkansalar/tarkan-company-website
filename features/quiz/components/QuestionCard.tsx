"use client";

import Link from "next/link";
import type {
  AnyQuestion,
  ProfileRadioQuestion,
  ProfileTextQuestion,
  QuizScore,
  ScoredQuestion,
} from "../types";

type Props = {
  question: AnyQuestion;
  qIdx: number;
  totalQuestions: number;
  selectedIdx: number | null;
  textValue: string;
  otherValue: string;
  onPick: (i: number, score: QuizScore, label: string) => void;
  onPickProfile: (i: number, label: string) => void;
  onText: (value: string) => void;
  onOther: (value: string) => void;
  onNext: () => void;
  canProceed: boolean;
};

function isScored(q: AnyQuestion): q is ScoredQuestion {
  return "interps" in q;
}

function isRadio(q: AnyQuestion): q is ScoredQuestion | ProfileRadioQuestion {
  return isScored(q) || (q as ProfileRadioQuestion).type === "radio";
}

function isTextual(q: AnyQuestion): q is ProfileTextQuestion {
  return !isScored(q) && (q.type === "text" || q.type === "textarea");
}

export default function QuestionCard({
  question,
  qIdx,
  totalQuestions,
  selectedIdx,
  textValue,
  otherValue,
  onPick,
  onPickProfile,
  onText,
  onOther,
  onNext,
  canProceed,
}: Props) {
  const isLast = qIdx === totalQuestions - 1;

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

        {isRadio(question) && (
          <RadioBody
            question={question}
            selectedIdx={selectedIdx}
            otherValue={otherValue}
            onPick={onPick}
            onPickProfile={onPickProfile}
            onOther={onOther}
          />
        )}

        {isTextual(question) && (
          <TextBody
            question={question}
            value={textValue}
            onChange={onText}
          />
        )}

        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors ${
            canProceed ? "" : "opacity-40 cursor-not-allowed"
          }`}
        >
          {isLast ? "See Results" : "Next"}
        </button>

        {isTextual(question) && question.optional && (
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

function RadioBody({
  question,
  selectedIdx,
  otherValue,
  onPick,
  onPickProfile,
  onOther,
}: {
  question: ScoredQuestion | ProfileRadioQuestion;
  selectedIdx: number | null;
  otherValue: string;
  onPick: (i: number, score: QuizScore, label: string) => void;
  onPickProfile: (i: number, label: string) => void;
  onOther: (value: string) => void;
}) {
  const scored = "interps" in question;
  const allowOther = !scored && (question as ProfileRadioQuestion).allowOther;
  const baseOptions = scored
    ? (question as ScoredQuestion).options.map((o) => o.label)
    : (question as ProfileRadioQuestion).options;
  const renderedOptions = allowOther ? [...baseOptions, "Other"] : baseOptions;

  return (
    <div className="space-y-3 mb-8">
      {renderedOptions.map((label, i) => {
        const selected = selectedIdx === i;
        const handleClick = () => {
          if (scored) {
            const opt = (question as ScoredQuestion).options[i];
            onPick(i, opt.score, opt.label);
          } else {
            onPickProfile(i, label);
          }
        };
        return (
          <button
            key={label + i}
            onClick={handleClick}
            className={
              selected
                ? "w-full text-left font-inter text-base p-5 border-2 border-neon bg-neon/10 text-white transition-colors"
                : "w-full text-left font-inter text-base p-5 border border-white/15 bg-black/40 text-white hover:border-neon hover:bg-neon/5 transition-colors"
            }
          >
            {label}
          </button>
        );
      })}

      {allowOther &&
        selectedIdx === renderedOptions.length - 1 && (
          <input
            type="text"
            value={otherValue}
            onChange={(e) => onOther(e.target.value)}
            placeholder="Please specify"
            autoFocus
            className="w-full font-inter text-base p-4 border-2 border-neon bg-black/40 text-white placeholder:text-supporting outline-none mt-2"
          />
        )}
    </div>
  );
}

function TextBody({
  question,
  value,
  onChange,
}: {
  question: ProfileTextQuestion;
  value: string;
  onChange: (v: string) => void;
}) {
  if (question.type === "textarea") {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={question.placeholder}
        rows={5}
        className="w-full font-inter text-base p-4 border-2 border-white/15 focus:border-neon bg-black/40 text-white placeholder:text-supporting outline-none mb-8 resize-y"
      />
    );
  }
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={question.placeholder}
      className="w-full font-inter text-base p-4 border-2 border-white/15 focus:border-neon bg-black/40 text-white placeholder:text-supporting outline-none mb-8"
    />
  );
}
