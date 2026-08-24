import type { Question } from "../types";

/** Q1-Q7 are scored (1-4 points each, total range 7-28). */
export const scoredQuestions: Question[] = [
  {
    num: 1,
    scored: true,
    text: 'If we asked 5 people in your company "What makes us different?" - how many answers would we get?',
    options: [
      { label: "One clear answer", points: 1 },
      { label: "Roughly the same, different words", points: 2 },
      { label: "Three or four different answers", points: 3 },
      { label: "Five answers - or silence", points: 4 },
    ],
  },
  {
    num: 2,
    scored: true,
    text: "How often do you personally explain the same things again - to your team, agencies or partners?",
    options: [
      { label: "Almost never", points: 1 },
      { label: "Monthly", points: 2 },
      { label: "Weekly", points: 3 },
      { label: "Daily - I'm the human FAQ", points: 4 },
    ],
  },
  {
    num: 3,
    scored: true,
    text: "When marketing, sales and operations make a call - what do they measure it against?",
    options: [
      { label: "One shared standard we all know", points: 1 },
      { label: "Our mission and vision, loosely", points: 2 },
      { label: "Their own department goals", points: 3 },
      { label: "Whoever's loudest in the room", points: 4 },
    ],
  },
  {
    num: 4,
    scored: true,
    text: "How has your positioning moved in the last 2 years?",
    options: [
      { label: "Same core, sharper", points: 1 },
      { label: "Slightly adjusted", points: 2 },
      { label: "Changed with every agency or key hire", points: 3 },
      { label: "Honestly - it changes constantly", points: 4 },
    ],
  },
  {
    num: 5,
    scored: true,
    text: "What percentage of your week is firefighting instead of building?",
    options: [
      { label: "Under 10%", points: 1 },
      { label: "Around 25%", points: 2 },
      { label: "Around 50%", points: 3 },
      { label: "Most of it", points: 4 },
    ],
  },
  {
    num: 6,
    scored: true,
    text: "When a new agency, COO or key hire comes in - what happens?",
    options: [
      { label: "They implement our standard", points: 1 },
      { label: "Mostly ours, some of theirs", points: 2 },
      { label: "They bring their own playbook and we adapt", points: 3 },
      {
        label: "Every hire rebuilds things their way. We start over.",
        points: 4,
      },
    ],
  },
  {
    num: 7,
    scored: true,
    text: "Does a new customer immediately understand why they should choose you over the cheaper option?",
    options: [
      { label: "Yes - they say it back to us", points: 1 },
      { label: "Usually", points: 2 },
      { label: "Only after we explain it", points: 3 },
      { label: "No. We compete on price and discounts.", points: 4 },
    ],
  },
];

/** Q8-Q10 build momentum. Deliberately NOT counted in the score. */
export const momentumQuestions: Question[] = [
  {
    num: 8,
    scored: false,
    text: "If your customers instantly understood why to choose you over the cheaper option - what happens to your customer acquisition cost?",
    options: [
      { label: "Goes down", points: null, aside: "(obviously)" },
      { label: "Goes up", points: null },
    ],
  },
  {
    num: 9,
    scored: false,
    text: "If every touchpoint created the same feeling - same brand, same standard, same reason to come back - what happens to lifetime value?",
    options: [
      { label: "Goes up. They come back.", points: null },
      { label: "No difference.", points: null },
    ],
  },
  {
    num: 10,
    scored: false,
    text: "If customers chose you on purpose - not on price - could you charge more?",
    options: [
      { label: "Yes. Margin goes up.", points: null },
      { label: "No.", points: null },
    ],
  },
];

export const allQuestions: Question[] = [
  ...scoredQuestions,
  ...momentumQuestions,
];

export const SCORED_COUNT = scoredQuestions.length;
export const TOTAL_COUNT = allQuestions.length;
export const MAX_SCORE = SCORED_COUNT * 4;
