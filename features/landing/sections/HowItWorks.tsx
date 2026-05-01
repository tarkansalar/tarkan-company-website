import type { ReactNode } from "react";

type Step = {
  step: string;
  title: string;
  sub?: string;
  body: ReactNode;
};

const STEPS: Step[] = [
  {
    step: "STEP 1",
    title: "Load Your Numbers into 80/20 Profit AI",
    sub: "(20 minutes)",
    body: "Enter your data once.",
  },
  {
    step: "STEP 2",
    title: "Clarity",
    sub: "(48 hours)",
    body: "Get your full breakdown.",
  },
  {
    step: "STEP 3",
    title: "Execution",
    body: (
      <>
        Strategy call + follow-up
        <br />
        Turn decisions into action
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div key={s.step} className="border-l-4 border-neon pl-6">
              <div className="font-space font-bold text-[11px] tracking-[0.12em] uppercase text-neon mb-4">
                {s.step}
              </div>
              <h3 className="font-space font-bold text-xl lg:text-2xl mb-3 leading-[1.3]">
                {s.title}
              </h3>
              {s.sub && (
                <p className="font-inter text-sm text-supporting mb-3">
                  {s.sub}
                </p>
              )}
              <p className="font-inter text-[17px] leading-[1.6] text-white">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
