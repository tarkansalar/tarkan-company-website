"use client";

import { useEffect, useRef, useState } from "react";
import IntroScreen from "./components/IntroScreen";
import QuestionCard from "./components/QuestionCard";
import TransitionScreen from "./components/TransitionScreen";
import LeadGate, { type Lead } from "./components/LeadGate";
import ResultScreen from "./components/ResultScreen";
import { allQuestions, MAX_SCORE, SCORED_COUNT } from "./data/questions";
import { getTier } from "./data/tiers";
import { AUTO_ADVANCE_MS } from "./config";
import type { Answer, Phase } from "./types";

export default function ComplexityScoreApp() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(
    allQuestions.map((_, i) => ({
      questionIdx: i,
      optionIdx: null,
      points: null,
      label: "",
    }))
  );
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const score = answers
    .slice(0, SCORED_COUNT)
    .reduce((sum, a) => sum + (a.points ?? 0), 0);

  function advanceFrom(position: number) {
    // After the last scored question, break for the transition screen.
    if (position === SCORED_COUNT - 1) {
      setPhase("transition");
      return;
    }
    if (position === allQuestions.length - 1) {
      setPhase("gate");
      return;
    }
    setIdx(position + 1);
  }

  function handlePick(optionIdx: number) {
    const q = allQuestions[idx];
    const opt = q.options[optionIdx];
    const position = idx;

    setAnswers((prev) => {
      const next = [...prev];
      next[position] = {
        questionIdx: position,
        optionIdx,
        points: opt.points,
        label: opt.label,
      };
      return next;
    });

    // Auto-advance, with a beat so the selected state is visible first.
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => advanceFrom(position), AUTO_ADVANCE_MS);
  }

  async function sendLead(lead: Lead) {
    const tier = getTier(score);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...lead,
          score,
          maxScore: MAX_SCORE,
          tier: tier.label,
          answers: allQuestions.map(
            (q, i) => `Q${q.num}: ${answers[i].label || "(no answer)"}`
          ),
        }),
      });
    } catch (err) {
      // A failed webhook must never cost the visitor their result. Log it and
      // move on - the lead is lost, but the person still sees their score.
      console.error("[quiz] lead submission failed:", err);
    }
    setPhase("result");
  }

  function handleBack() {
    if (timer.current) clearTimeout(timer.current);
    if (idx === SCORED_COUNT) {
      setPhase("transition");
      return;
    }
    if (idx > 0) setIdx(idx - 1);
  }

  if (phase === "intro") {
    return <IntroScreen onStart={() => setPhase("questions")} />;
  }

  if (phase === "transition") {
    return (
      <TransitionScreen
        onContinue={() => {
          setIdx(SCORED_COUNT);
          setPhase("momentum");
        }}
      />
    );
  }

  if (phase === "gate") {
    return <LeadGate onSubmit={sendLead} />;
  }

  if (phase === "result") {
    return <ResultScreen score={score} tier={getTier(score)} />;
  }

  return (
    <QuestionCard
      question={allQuestions[idx]}
      position={idx}
      selectedIdx={answers[idx].optionIdx}
      onPick={handlePick}
      onBack={idx > 0 ? handleBack : undefined}
    />
  );
}
