export type QuizScore = 0 | 1 | 2;

export type QuizOption = {
  label: string;
  score: QuizScore;
};

export type QuizQuestion = {
  num: number;
  dim: string;
  text: string;
  options: QuizOption[];
  interps: Record<QuizScore, string>;
};

export type Band = {
  label: string;
  color: string;
  description: string;
  nextSteps: string;
};

export type QuizPhase = "questions" | "loading" | "results";
