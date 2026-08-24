import type { Tier } from "../types";

export const TIERS: Tier[] = [
  {
    key: "coded",
    label: "CODED",
    min: 7,
    max: 11,
    emphasis: "soft",
    ctaLabel: "EXPLORE BLUE OCEAN CODE™ - $499",
    body: [
      "Your business runs on one standard. Everyone knows it. Decisions get made without you in the room.",
      "That's rare. Most founders I talk to are nowhere near this.",
      "You don't need this. Bookmark it for when you do.",
      "If you ever want to pressure-test your Code - find out if it holds at the next stage of growth - you know where to find me.",
    ],
  },
  {
    key: "drifting",
    label: "DRIFTING",
    min: 12,
    max: 17,
    emphasis: "primary",
    ctaLabel: "FIND MY BLUE OCEAN CODE™ - $499",
    body: [
      "The core is there. But your team is starting to interpret it differently.",
      "Marketing reads it one way. Sales reads it another. Operations does its own thing.",
      "Right now it's invisible. In 12 months it's meetings, firefighting, margin erosion, and customers who can't tell you apart from the cheaper option.",
      "This is the cheapest moment to fix it - before it compounds.",
    ],
  },
  {
    key: "fragmented",
    label: "FRAGMENTED",
    min: 18,
    max: 22,
    emphasis: "primary",
    ctaLabel: "FIND MY BLUE OCEAN CODE™ - $499",
    body: [
      "Five people. Five versions of the brand. Zero shared standard.",
      "You're paying for this every day - in meetings that shouldn't need to happen, in customers who ask why they should choose you and don't hear a clean answer, in discounts you're giving because your value isn't landing.",
      "The margin you think you're leaving on the table? You're not leaving it. It's being taken, slowly, by the complexity you haven't named yet.",
      "This is exactly where a Code has the biggest impact. Not because it's motivational. Because it stops the bleed.",
    ],
  },
  {
    key: "firefighting",
    label: "FIREFIGHTING MODE",
    min: 23,
    max: 28,
    emphasis: "urgent",
    ctaLabel: "FIND MY BLUE OCEAN CODE™ - $499",
    body: [
      "You are the Code. It lives in your head. Every decision routes through you.",
      "Your team can't move without you. Your brand can't scale without you. And you already know what that's doing to you.",
      "I've been there. My brand hit $40M in two years. A company offered me $50M to buy it. I said no.",
      "What I didn't see: I was too burnt out, too deep inside it, to think straight. I turned down $50M because I couldn't step back far enough to see clearly.",
      "That's what living inside the complexity does. It doesn't just slow the business - it costs you decisions worth millions.",
      "Start here. This week. Because every week this runs is another week the Code lives only in your head - and the business can't move without you in the room.",
    ],
  },
];

export function getTier(score: number): Tier {
  const found = TIERS.find((t) => score >= t.min && score <= t.max);
  // Score is always 7-28 by construction; clamp defensively rather than throw.
  return found ?? (score < TIERS[0].min ? TIERS[0] : TIERS[TIERS.length - 1]);
}

/** Shown below the tier copy on every result page. */
export const BRIDGE = {
  lead: "You just answered why a Code pays for itself.",
  intro:
    "When your brand has one clear standard - one reason customers choose you that everyone in the company knows and every touchpoint delivers - three things change:",
  benefits: [
    {
      title: "Lower customer acquisition cost.",
      body: "Customers understand the value before you explain it. The sale is easier.",
    },
    {
      title: "Higher customer lifetime value.",
      body: "Customers who chose you on purpose come back. Customers who bought on discount don't.",
    },
    {
      title: "Pricing power.",
      body: "You stop competing on price the moment customers can articulate why you're worth more.",
    },
  ],
  close: [
    "The Blue Ocean Code™ is the standard. Built in one session. One document. One reason to choose you - clear enough that your team can use it, your agencies can use it, and your customers can feel it.",
    "$499. One session. Yours to keep and deploy forever.",
  ],
  question: "The only question: what's yours?",
  ctaLabel: "FIND MY BLUE OCEAN CODE™ - $499",
  riskReversal:
    "If you go through the session and don't walk away with a clear Code - I'll refund you. No process. Just say so.",
};
