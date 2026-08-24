export type Option = {
  label: string;
  /** Points toward the Complexity Score. Null for unscored momentum questions. */
  points: number | null;
  /** Optional italic aside rendered after the label, e.g. "(obviously)". */
  aside?: string;
};

export type Question = {
  num: number;
  text: string;
  options: Option[];
  /** true for Q1-Q7 (counted), false for Q8-Q10 (momentum only). */
  scored: boolean;
};

export type Answer = {
  questionIdx: number;
  optionIdx: number | null;
  points: number | null;
  label: string;
};

export type TierKey = "coded" | "drifting" | "fragmented" | "firefighting";

export type Tier = {
  key: TierKey;
  label: string;
  min: number;
  max: number;
  /** Paragraphs of the result copy. */
  body: string[];
  ctaLabel: string;
  /** "soft" renders a lower-emphasis CTA; "urgent" adds the urgency treatment. */
  emphasis: "soft" | "primary" | "urgent";
};

export type Phase =
  | "intro"
  | "questions"
  | "transition"
  | "momentum"
  | "result";
