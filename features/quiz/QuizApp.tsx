"use client";

import { useState } from "react";
import { quizData } from "./data/questions";
import { getBand } from "./data/bands";
import LoadingScreen from "./components/LoadingScreen";
import QuestionCard from "./components/QuestionCard";
import ResultsScreen from "./components/ResultsScreen";
import type { QuizPhase, QuizScore } from "./types";

const TOTAL_QUESTIONS = quizData.length;
const LOADING_MS = 2200;

export default function QuizApp() {
  const [phase, setPhase] = useState<QuizPhase>("questions");
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(TOTAL_QUESTIONS).fill(null)
  );
  const [scores, setScores] = useState<(number | null)[]>(
    new Array(TOTAL_QUESTIONS).fill(null)
  );
  const [labels, setLabels] = useState<string[]>(
    new Array(TOTAL_QUESTIONS).fill("")
  );

  const total = scores.reduce<number>((a, b) => a + (b ?? 0), 0);
  const band = getBand(total);

  function pickAnswer(i: number, score: QuizScore, label: string) {
    setAnswers((prev) => {
      const a = [...prev];
      a[qIdx] = i;
      return a;
    });
    setScores((prev) => {
      const s = [...prev];
      s[qIdx] = score;
      return s;
    });
    setLabels((prev) => {
      const l = [...prev];
      l[qIdx] = label;
      return l;
    });
  }

  function next() {
    if (answers[qIdx] === null) return;
    if (qIdx < TOTAL_QUESTIONS - 1) {
      setQIdx(qIdx + 1);
    } else {
      setPhase("loading");
      setTimeout(() => setPhase("results"), LOADING_MS);
    }
  }

  if (phase === "loading") return <LoadingScreen />;
  if (phase === "results")
    return (
      <ResultsScreen
        total={total}
        band={band}
        scores={scores as number[]}
        labels={labels}
      />
    );

  return (
    <QuestionCard
      question={quizData[qIdx]}
      qIdx={qIdx}
      totalQuestions={TOTAL_QUESTIONS}
      selectedIdx={answers[qIdx]}
      onPick={pickAnswer}
      onNext={next}
    />
  );
}
