"use client";

import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import QuestionCard from "./components/QuestionCard";
import ResultsScreen from "./components/ResultsScreen";
import { auditQuestions } from "./data/questions";
import {
  calculateAIReadiness,
  calculateProfitLeak,
  generateObservations,
  getFixFirst,
  getLeakBand,
  getReadinessBand,
  getVerdict,
} from "./data/scoring";
import type { AuditAnswer, AuditPhase, AuditVerdict } from "./types";

const TOTAL = auditQuestions.length;
const LOADING_MS = 2200;

function makeEmptyAnswer(idx: number): AuditAnswer {
  return {
    questionIdx: idx,
    optionIdx: null,
    profitPts: 0,
    readinessPts: 0,
    label: "",
    text: "",
  };
}

export default function AuditQuizApp() {
  const [phase, setPhase] = useState<AuditPhase>("questions");
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState<AuditAnswer[]>(
    auditQuestions.map((_, i) => makeEmptyAnswer(i))
  );
  const [texts, setTexts] = useState<string[]>(
    new Array(TOTAL).fill("")
  );
  const [result, setResult] = useState<{
    verdict: AuditVerdict;
    observations: string[];
    fixFirst: string;
  } | null>(null);

  const current = auditQuestions[qIdx];

  function handlePick(
    i: number,
    profitPts: number,
    readinessPts: number,
    label: string
  ) {
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = {
        questionIdx: qIdx,
        optionIdx: i,
        profitPts,
        readinessPts,
        label,
        text: prev[qIdx]?.text ?? "",
      };
      return next;
    });
  }

  function handleText(value: string) {
    setTexts((prev) => {
      const next = [...prev];
      next[qIdx] = value;
      return next;
    });
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = {
        ...next[qIdx],
        text: value,
        label: value,
      };
      return next;
    });
  }

  function canProceed(): boolean {
    if (current.type === "textarea") {
      if (current.optional) return true;
      return texts[qIdx].trim().length > 0;
    }
    return answers[qIdx]?.optionIdx !== null && answers[qIdx]?.optionIdx !== undefined;
  }

  function finalize() {
    const profitLeak = calculateProfitLeak(answers);
    const aiReadiness = calculateAIReadiness(answers);
    const { verdictTitle, verdictText } = getVerdict(profitLeak, aiReadiness);
    const verdict: AuditVerdict = {
      profitLeak,
      aiReadiness,
      leakBand: getLeakBand(profitLeak),
      readinessBand: getReadinessBand(aiReadiness),
      verdict: verdictText,
      verdictTitle,
    };
    const observations = generateObservations(answers);
    const fixFirst = getFixFirst(answers);
    setResult({ verdict, observations, fixFirst });
  }

  function next() {
    if (!canProceed()) return;
    if (qIdx < TOTAL - 1) {
      setQIdx(qIdx + 1);
      return;
    }
    finalize();
    setPhase("loading");
    setTimeout(() => setPhase("results"), LOADING_MS);
  }

  if (phase === "loading") return <LoadingScreen />;
  if (phase === "results" && result) {
    return (
      <ResultsScreen
        verdict={result.verdict}
        observations={result.observations}
        fixFirst={result.fixFirst}
        answers={answers}
      />
    );
  }

  return (
    <QuestionCard
      question={current}
      qIdx={qIdx}
      totalQuestions={TOTAL}
      selectedIdx={answers[qIdx]?.optionIdx ?? null}
      textValue={texts[qIdx]}
      onPick={handlePick}
      onText={handleText}
      onNext={next}
      canProceed={canProceed()}
    />
  );
}
