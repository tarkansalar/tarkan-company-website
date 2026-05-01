import type { Band, QuizScore } from "../types";

export function getBand(total: number): Band {
  if (total >= 13)
    return {
      label: "Operator",
      color: "#34C759",
      description:
        "You're running tight. The diagnostic confirms it. Small optimizations could still unlock significant margin.",
      nextSteps:
        "You're in strong shape. The 80/20 Bestseller Engine would sharpen what's already working - finding the last 10-15% of hidden margin and giving your team a system to maintain it without you.",
    };
  if (total >= 9)
    return {
      label: "Firefighter",
      color: "#FFCC00",
      description:
        "You're working harder than you should for the results you're getting. The instinct is there - the system isn't.",
      nextSteps:
        "You have the instincts. You're missing the system. The Engine would show you which SKUs to cut, which channels actually make money, and how to stop being the bottleneck. Most Firefighters find 5-8x the Engine cost in trapped cash within the first week.",
    };
  if (total >= 5)
    return {
      label: "Bleeding",
      color: "#FF9500",
      description:
        "There's significant cash trapped in your business - in dead stock, in unprofitable SKUs, in channels that look good on the top line but lose money underneath.",
      nextSteps:
        "The Engine was built for exactly where you are. It will show you - in dollars - where the bleeding is, which SKUs to kill this week, and how to free cash you didn't know was trapped. Most brands in this band find $50K-$500K+ in recoverable margin.",
    };
  return {
    label: "Critical",
    color: "#FF3B30",
    description:
      "You're flying blind. The margins are compressing, the SKUs are bloated, and nobody in the building can point to the exact source.",
    nextSteps:
      "This is urgent, but it's fixable. The Engine installs in 48 hours and shows you exactly where you're bleeding - not in theory, in dollars. If it doesn't find at least 5x what you paid, I keep working until it does.",
  };
}

export function getStatus(s: QuizScore | number) {
  if (s === 2) return { color: "#34C759", text: "Strong" };
  if (s === 1) return { color: "#FFCC00", text: "At Risk" };
  return { color: "#FF3B30", text: "Critical" };
}
