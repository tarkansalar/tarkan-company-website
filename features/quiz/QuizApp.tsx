"use client";

import { useState } from "react";
import { quizData } from "./data/questions";
import { profileQuestions } from "./data/profile";
import { getBand } from "./data/bands";
import LoadingScreen from "./components/LoadingScreen";
import QuestionCard from "./components/QuestionCard";
import ResultsScreen from "./components/ResultsScreen";
import type {
  AnyQuestion,
  ProfileAnswer,
  ProfileRadioQuestion,
  ProfileTextQuestion,
  QuizPhase,
  QuizScore,
} from "./types";

const ALL_QUESTIONS: AnyQuestion[] = [...quizData, ...profileQuestions];
const TOTAL_QUESTIONS = ALL_QUESTIONS.length;
const SCORED_COUNT = quizData.length;
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
  const [texts, setTexts] = useState<string[]>(
    new Array(TOTAL_QUESTIONS).fill("")
  );
  const [otherTexts, setOtherTexts] = useState<string[]>(
    new Array(TOTAL_QUESTIONS).fill("")
  );

  const current = ALL_QUESTIONS[qIdx];
  const isScored = "interps" in current;
  const isRadio = isScored || (current as ProfileRadioQuestion).type === "radio";
  const isTextual =
    !isScored &&
    ((current as ProfileTextQuestion).type === "text" ||
      (current as ProfileTextQuestion).type === "textarea");

  const total = scores.reduce<number>((a, b) => a + (b ?? 0), 0);
  const band = getBand(total);

  function pickScored(i: number, score: QuizScore, label: string) {
    update(i, score, label, "");
  }

  function pickProfile(i: number, label: string) {
    const radio = current as ProfileRadioQuestion;
    const isOther = radio.allowOther && i === radio.options.length;
    update(i, 0, isOther ? "Other" : label, isOther ? otherTexts[qIdx] : "");
  }

  function update(
    idx: number,
    score: number,
    label: string,
    otherText: string
  ) {
    setAnswers((prev) => {
      const a = [...prev];
      a[qIdx] = idx;
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
    setOtherTexts((prev) => {
      const o = [...prev];
      o[qIdx] = otherText;
      return o;
    });
  }

  function handleText(value: string) {
    setTexts((prev) => {
      const t = [...prev];
      t[qIdx] = value;
      return t;
    });
    setLabels((prev) => {
      const l = [...prev];
      l[qIdx] = value;
      return l;
    });
    setScores((prev) => {
      const s = [...prev];
      s[qIdx] = 0;
      return s;
    });
    setAnswers((prev) => {
      const a = [...prev];
      a[qIdx] = value.length > 0 ? 0 : null;
      return a;
    });
  }

  function handleOther(value: string) {
    setOtherTexts((prev) => {
      const o = [...prev];
      o[qIdx] = value;
      return o;
    });
    setLabels((prev) => {
      const l = [...prev];
      l[qIdx] = value ? `Other: ${value}` : "Other";
      return l;
    });
  }

  function canProceed(): boolean {
    if (isTextual) {
      const q = current as ProfileTextQuestion;
      if (q.optional) return true;
      return texts[qIdx].trim().length > 0;
    }
    if (answers[qIdx] === null) return false;
    if (isScored) return true;
    const radio = current as ProfileRadioQuestion;
    const isOther = radio.allowOther && answers[qIdx] === radio.options.length;
    if (isOther) return otherTexts[qIdx].trim().length > 0;
    return true;
  }

  function next() {
    if (!canProceed()) return;
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
        scores={(scores as number[]).slice(0, SCORED_COUNT)}
        labels={labels.slice(0, SCORED_COUNT)}
        profileAnswers={profileQuestions.map((q, i) => ({
          question: q,
          answer: {
            label: labels[SCORED_COUNT + i],
            otherText: otherTexts[SCORED_COUNT + i],
          } as ProfileAnswer,
          text: texts[SCORED_COUNT + i],
        }))}
      />
    );

  return (
    <QuestionCard
      question={current}
      qIdx={qIdx}
      totalQuestions={TOTAL_QUESTIONS}
      selectedIdx={answers[qIdx]}
      textValue={texts[qIdx]}
      otherValue={otherTexts[qIdx]}
      onPick={pickScored}
      onPickProfile={pickProfile}
      onText={handleText}
      onOther={handleOther}
      onNext={next}
      canProceed={canProceed()}
    />
  );
}
