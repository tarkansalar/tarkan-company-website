import type {
  AuditAnswer,
  AuditLeakBand,
  AuditReadinessBand,
} from "../types";

const PROFIT_LEAK_MAX_RAW = 78;
const AI_READINESS_MAX_RAW = 170;

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function calculateProfitLeak(answers: AuditAnswer[]): number {
  const raw = answers.reduce((sum, a) => sum + (a?.profitPts ?? 0), 0);
  const pct = (raw / PROFIT_LEAK_MAX_RAW) * 100;
  return clamp(Math.round(pct), 0, 100);
}

export function calculateAIReadiness(answers: AuditAnswer[]): number {
  const raw = answers.reduce((sum, a) => sum + (a?.readinessPts ?? 0), 0);
  const pct = (raw / AI_READINESS_MAX_RAW) * 100;
  return clamp(Math.round(pct), 0, 100);
}

export function getLeakBand(score: number): AuditLeakBand {
  if (score >= 70) return "Critical";
  if (score >= 40) return "Moderate";
  return "Low";
}

export function getReadinessBand(score: number): AuditReadinessBand {
  if (score <= 30) return "Not Ready";
  if (score <= 60) return "Building";
  return "Ready";
}

export function getLeakBandLabel(band: AuditLeakBand): string {
  if (band === "Critical") return "Critical leak";
  if (band === "Moderate") return "Moderate leak";
  if (band === "High") return "High leak";
  return "Low leak";
}

export function getLeakBandColor(band: AuditLeakBand): string {
  if (band === "Critical") return "#FF3B30";
  if (band === "Moderate") return "#FFCC00";
  if (band === "High") return "#FF9500";
  return "#34C759";
}

export function getReadinessBandColor(band: AuditReadinessBand): string {
  if (band === "Not Ready") return "#FF9500";
  if (band === "Building") return "#FFCC00";
  return "#34C759";
}

export function getVerdict(
  profitLeak: number,
  aiReadiness: number
): { verdictTitle: string; verdictText: string } {
  const leak = getLeakBand(profitLeak);
  const ready = getReadinessBand(aiReadiness);

  if (leak === "Critical" && ready === "Not Ready") {
    return {
      verdictTitle: "Critical leak. AI is not your problem.",
      verdictText:
        "Fix operations first. Your answers show you're firefighting daily with no systems. AI will only add noise. Document your top 3 workflows before you touch any tool.",
    };
  }
  if (leak === "Critical" && ready === "Building") {
    return {
      verdictTitle: "Critical leak. AI can help, but later.",
      verdictText:
        "You have urgent operational gaps. AI could speed one or two workflows, but only after you fix the bottleneck you named in Q4. Don't buy tools yet.",
    };
  }
  if (leak === "Critical" && ready === "Ready") {
    return {
      verdictTitle: "Critical leak despite AI readiness.",
      verdictText:
        "You have the systems to use AI, but profit is still leaking. The issue is not technology. It's likely execution or focus. Fix the $500K priority you named in Q5 first.",
    };
  }
  if (leak === "Moderate" && ready === "Not Ready") {
    return {
      verdictTitle: "Moderate leak. Build foundation first.",
      verdictText:
        "You're not bleeding, but you're not scaling cleanly. Build SOPs for your core workflow before adding anything. The leak will get worse as you grow.",
    };
  }
  if (leak === "Moderate" && ready === "Building") {
    return {
      verdictTitle: "Moderate leak. Selective AI possible.",
      verdictText:
        "One or two AI tools could help, but only in the area you spend most time on. Don't spread thin. Pick one workflow, automate it, move on.",
    };
  }
  if (leak === "Moderate" && ready === "Ready") {
    return {
      verdictTitle: "Moderate leak. AI is your accelerator.",
      verdictText:
        "You have systems. Use AI to speed the one bottleneck you named. Everything else stays manual until that works.",
    };
  }
  if (leak === "Low" && ready === "Not Ready") {
    return {
      verdictTitle: "Low leak. Don't fix what isn't broken.",
      verdictText:
        "Your answers don't show urgent leaks. But your systems are weak. If you grow fast, you'll feel it. Document one core process now as insurance.",
    };
  }
  if (leak === "Low" && ready === "Building") {
    return {
      verdictTitle: "Low leak. Maintain and optimize.",
      verdictText:
        "You're in decent shape. The question is: what do you want next? Pick one area from Q5 and test AI there. Don't overhaul.",
    };
  }
  return {
    verdictTitle: "Low leak, high readiness. AI is your edge.",
    verdictText:
      "You have systems and margin. AI is your growth lever. Apply it to the one area where you still spend personal time. That's your multiplier.",
  };
}

function answerLabel(answers: AuditAnswer[], idx: number): string {
  return answers[idx]?.label ?? "";
}

export function getFixFirst(answers: AuditAnswer[]): string {
  const q5 = answerLabel(answers, 4);
  const q9 = answerLabel(answers, 8);

  if (
    q5 === "Fix operations and bottlenecks" &&
    q9 === "Operations are messy and slow"
  ) {
    return "Fix this first: Map your current workflow. Find the 2 steps that eat 80% of your time. Document or delegate them.";
  }
  if (
    q5 === "Fix operations and bottlenecks" &&
    q9 === "I am the bottleneck - everything depends on me"
  ) {
    return "Fix this first: You named it. Build one SOP for the task only you do. Test it with your team this week.";
  }
  if (
    q5 === "Fix inventory / cash flow / margin" &&
    q9 === "Inventory / dead stock / margin compression"
  ) {
    return "Fix this first: Run a 30-day SKU report. Kill the bottom 20%. That cash is your oxygen.";
  }
  if (q5 === "Implement AI and automation properly") {
    return "Ignore this for now. You said AI, but your answers show your operating reality and systems aren't ready. Fix that first. AI later.";
  }
  if (
    q5 === "Improve marketing and customer acquisition" &&
    q9 === "Marketing spend is not converting profitably"
  ) {
    return "Fix this first: Don't spend more. Audit what you already spend. One channel, one metric, one fix.";
  }
  if (q5 === "Get me out of day-to-day execution") {
    return "Fix this first: You want out, but your systems and operating reality say you're not ready. Build one system that removes you from one decision.";
  }
  return "Fix this first: Pick one bottleneck. Document the workflow. Measure for 14 days. Then decide if AI or hiring solves it faster.";
}

export function generateObservations(answers: AuditAnswer[]): string[] {
  const q3 = answerLabel(answers, 2);
  const q4 = answerLabel(answers, 3);
  const q5 = answerLabel(answers, 4);
  const q8 = answerLabel(answers, 7);
  const q9 = answerLabel(answers, 8);
  const q10 = answerLabel(answers, 9);

  // Template 1: Operating reality x Time
  let obs1: string;
  if (
    q3 === "Constant firefighting - I fix problems all day" &&
    q4 === "Context switching between everything"
  ) {
    obs1 =
      "Q3 says you're in constant firefighting. Q4 says your time goes to context switching. I see this pattern often: founders try to fix everything at once and end up fixing nothing. Fix this first: pick the one workflow that costs you the most hours this week. Block-time it. Document it after.";
  } else if (
    q3 === "Constant firefighting - I fix problems all day" &&
    q4 === "Solving operational problems"
  ) {
    obs1 =
      "Q3 says firefighting all day. Q4 confirms it - time goes to operational problems. Usually means there's no system between you and the day-to-day. Fix this first: write down the 3 problems you solved this week. Two of them are probably the same problem.";
  } else {
    obs1 = `Q3 says your operating reality is "${q3 || "not stated"}". Q4 says your time goes to "${q4 || "not stated"}". I see this combination usually means the work is shaped around the founder, not the business. Watch this: track where your hours go for one week before you change anything.`;
  }

  // Template 2: $500K priority x Systems
  let obs2: string;
  if (
    q5 === "Implement AI and automation properly" &&
    q8 === "Almost nothing is documented"
  ) {
    obs2 =
      "Q5 says you would spend $500K on AI. Q8 says almost nothing is documented. I see this often: founders want AI to fix what only systems can fix. Ignore this for now: AI on undocumented chaos creates more chaos. Document one workflow first.";
  } else if (
    q5 === "Get me out of day-to-day execution" &&
    (q8 === "Almost nothing is documented" ||
      q8 === "Some processes exist, but inconsistently")
  ) {
    obs2 =
      "Q5 says you want out of day-to-day. Q8 says systems are thin. Usually this gap is the biggest profit leak. Fix this first: pick the one task only you do. Write it down. Hand it off. Repeat next month.";
  } else {
    obs2 = `Q5 priority is "${q5 || "not stated"}". Q8 systems maturity is "${q8 || "not stated"}". I see this combination usually means the spend is bigger than the system can absorb. Fix this first: align your spend to what your systems can absorb.`;
  }

  // Template 3: Profit Leak Belief x Urgency
  let obs3: string;
  if (
    q9 === "I honestly do not know" &&
    q10 === "Extremely urgent - current pace is not sustainable"
  ) {
    obs3 =
      "Q9 says you do not know where the leak is. Q10 says it is extremely urgent. I see this often: pressure without diagnosis. Fix this first: stop acting until you can name one number that is off. The diagnosis IS the work.";
  } else if (
    q9 === "I am the bottleneck - everything depends on me" &&
    q10 === "Extremely urgent - current pace is not sustainable"
  ) {
    obs3 =
      "Q9 names you as the bottleneck. Q10 says it is extremely urgent. Usually this means hiring sounds tempting. Fix this first: do not hire yet. Document the bottleneck task. Then decide if hiring or AI removes it.";
  } else {
    obs3 = `Q9 says you believe the leak is "${q9 || "not stated"}". Q10 says urgency is "${q10 || "not stated"}". I see this pattern usually means the belief and the timeline are not yet matched by a measured metric. Watch this: name one metric you can measure this week to confirm.`;
  }

  return [obs1, obs2, obs3];
}
