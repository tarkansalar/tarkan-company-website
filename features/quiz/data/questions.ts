import type { QuizQuestion } from "../types";

export const quizData: QuizQuestion[] = [
  {
    num: 1,
    dim: "SKU Count",
    text: "How many active SKUs are you currently selling across all channels?",
    options: [
      { label: "Under 30", score: 2 },
      { label: "30-100", score: 1 },
      { label: "100+", score: 0 },
      { label: "Not sure", score: 0 },
    ],
    interps: {
      2: "Lean catalog. Strong discipline.",
      1: "Moderate - likely some dead weight hiding.",
      0: "High SKU count. Statistically, 40-60% are bleeding you.",
    },
  },
  {
    num: 2,
    dim: "Revenue Concentration",
    text: "What percentage of your revenue comes from your top 20% of SKUs?",
    options: [
      { label: "70% or more", score: 2 },
      { label: "50-70%", score: 1 },
      { label: "Under 50%", score: 0 },
      { label: "I don't know", score: 0 },
    ],
    interps: {
      2: "Strong concentration. Your winners are clear.",
      1: "Moderate. Some winners, but too much noise diluting focus.",
      0: "Revenue is spread thin. No clear bestsellers = no clear strategy.",
    },
  },
  {
    num: 3,
    dim: "Dead Stock",
    text: "How much cash is currently sitting in inventory that hasn't moved in 90+ days?",
    options: [
      { label: "Under 5% of total inventory value", score: 2 },
      { label: "5-15% of total inventory value", score: 1 },
      { label: "Over 15% of total inventory value", score: 0 },
      { label: "I've never calculated this", score: 0 },
    ],
    interps: {
      2: "Clean inventory. Cash is flowing.",
      1: "Some trapped cash. Likely $100K-$500K sitting idle.",
      0: "Significant cash prison. This is where the Engine pays for itself fastest.",
    },
  },
  {
    num: 4,
    dim: "CAC Clarity",
    text: "Do you know your customer acquisition cost calculated on gross margin - not on revenue?",
    options: [
      { label: "Yes - and it's under 30% of first-order gross margin", score: 2 },
      { label: "Yes, but it's high / I calculate on revenue", score: 1 },
      { label: "No", score: 0 },
      { label: "What do you mean?", score: 0 },
    ],
    interps: {
      2: "You know your real numbers. Rare and valuable.",
      1: "You're tracking it, but on revenue - which masks the real cost. Your actual ratio is likely 40-60% worse than you think.",
      0: "Flying blind on acquisition economics. Most brands in this position are losing money on every new customer without knowing it.",
    },
  },
  {
    num: 5,
    dim: "Brand Positioning",
    text: "If your customers had to describe in one word WHY they buy from you - which would it be?",
    options: [
      { label: "Community / Emotional connection / Brand identity", score: 2 },
      { label: "Product quality", score: 1 },
      { label: "Customer service", score: 1 },
      { label: "Price", score: 0 },
      { label: "I'm not sure", score: 0 },
    ],
    interps: {
      2: "Defensible moat. AI can't replicate emotional connection.",
      1: "Functional advantage - real but vulnerable. AI and competitors can match this.",
      0: "No positioning moat. In the AI era, this is the most dangerous position to be in.",
    },
  },
  {
    num: 6,
    dim: "Founder Dependency",
    text: "If you disappeared for 30 days, what's the first thing that would break?",
    options: [
      { label: "Nothing critical - my team handles operations", score: 2 },
      { label: "A few things would slow down", score: 1 },
      { label: "Everything", score: 0 },
      { label: "I can think of 3+ things immediately", score: 0 },
    ],
    interps: {
      2: "System-driven. Your business runs without you.",
      1: "Partially systematized. You're still the answer to too many questions.",
      0: "You ARE the system. One illness away from crisis. This is the #1 thing the Engine fixes.",
    },
  },
  {
    num: 7,
    dim: "Channel Profitability",
    text: "Which of your sales channels has the highest profit margin after ALL costs - not the highest revenue?",
    options: [
      { label: "I know exactly which channel is most profitable", score: 2 },
      { label: "I think I know, but I'm not 100% sure", score: 1 },
      { label: "I don't know", score: 0 },
      { label: "I've been measuring by revenue, not profit", score: 0 },
    ],
    interps: {
      2: "Channel clarity. You allocate resources based on real profit.",
      1: "Gut feeling, not data. You're likely over-investing in your least profitable channel.",
      0: "Channel blindness. Most brands discover their 'biggest' channel is actually their least profitable after full-cost accounting.",
    },
  },
  {
    num: 8,
    dim: "Kill Discipline",
    text: "When's the last time you killed a product, a channel, or a cost line - not because you had to, but because the data told you to?",
    options: [
      { label: "Within the last 3 months", score: 2 },
      { label: "6-12 months ago", score: 1 },
      { label: "Once, a while back", score: 1 },
      { label: "Never / I can't remember", score: 0 },
    ],
    interps: {
      2: "Active pruning. This is the habit that separates operators from firefighters.",
      1: "Occasional, but not systematic. You prune when it hurts, not before.",
      0: "No kill discipline. Everything stays. This is how catalogs bloat, margins compress, and founders burn out.",
    },
  },
];
