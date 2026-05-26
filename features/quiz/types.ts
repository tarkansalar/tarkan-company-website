export type QuizScore = 0 | 1 | 2;

export type QuizOption = {
  label: string;
  score: QuizScore;
};

export type ScoredQuestion = {
  num: number;
  dim: string;
  text: string;
  options: QuizOption[];
  interps: Record<QuizScore, string>;
};

export type QuizQuestion = ScoredQuestion;

export type ProfileRadioQuestion = {
  type: "radio";
  num: number;
  dim: string;
  text: string;
  options: string[];
  allowOther?: boolean;
};

export type ProfileTextQuestion = {
  type: "text" | "textarea";
  num: number;
  dim: string;
  text: string;
  placeholder?: string;
  optional?: boolean;
};

export type ProfileQuestion = ProfileRadioQuestion | ProfileTextQuestion;

export type AnyQuestion = ScoredQuestion | ProfileQuestion;

export type ProfileAnswer = {
  label: string;
  otherText?: string;
};

export type Band = {
  label: string;
  color: string;
  description: string;
  nextSteps: string;
};

export type QuizPhase = "questions" | "loading" | "results";
