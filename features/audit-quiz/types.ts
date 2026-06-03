export type AuditScore = number;

export type AuditOption = {
  label: string;
  profitLeakPoints: number;
  aiReadinessPoints: number;
};

export type AuditQuestion = {
  num: number;
  dim: string;
  text: string;
  sublabel?: string;
  type: "radio" | "textarea";
  options?: AuditOption[];
  optional?: boolean;
  placeholder?: string;
};

export type AuditPhase = "questions" | "loading" | "results";

export type AuditLeakBand = "Critical" | "High" | "Moderate" | "Low";
export type AuditReadinessBand = "Not Ready" | "Building" | "Ready" | "Advanced";

export type AuditVerdict = {
  profitLeak: number;
  aiReadiness: number;
  leakBand: AuditLeakBand;
  readinessBand: AuditReadinessBand;
  verdict: string;
  verdictTitle: string;
};

export type AuditAnswer = {
  questionIdx: number;
  optionIdx: number | null;
  profitPts: number;
  readinessPts: number;
  label: string;
  text?: string;
};
