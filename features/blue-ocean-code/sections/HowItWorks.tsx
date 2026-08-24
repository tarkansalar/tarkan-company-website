import type { ReactNode } from "react";

const STEPS = [
  {
    step: "STEP 1",
    title: "Book your session",
    body: "Pick a time that works for you.",
  },
  {
    step: "STEP 2",
    title: "30-minute session",
    body: "Via Zoom. Come as you are; I'll ask the questions.",
  },
  {
    step: "STEP 3",
    title: "Receive your Code + 30-day plan",
    body: "Within 48 hours, ready to share with your team.",
  },
];

type Faq = { q: string; a: ReactNode };

const FAQS: Faq[] = [
  {
    q: "Why only $499?",
    a: (
      <>
        <p>
          I spent 30 years building my own companies and helping bigger ones -
          searching, without knowing it, for the simplest way to impact any
          company. This is it.
        </p>
        <p className="mt-4">
          The results aren&apos;t new. The offer is. That&apos;s why the price is
          $499 - and it will rise.
        </p>
      </>
    ),
  },
  {
    q: "Who is this for?",
    a: (
      <p>
        Founders and leaders of consumer goods brands - DTC, retail or both.
      </p>
    ),
  },
  {
    q: "What do I need to prepare?",
    a: <p>Nothing. Your knowledge of your business is enough.</p>,
  },
  {
    q: "What if it doesn't work for me?",
    a: <p>Full refund. That&apos;s the guarantee.</p>,
  },
  {
    q: "Is the AI part required?",
    a: (
      <p>
        No. Optional one-time access to Blue Ocean AI&trade; to pressure-test
        your business against your Code.
      </p>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl text-white mb-12 leading-[1.2]">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {STEPS.map((s) => (
            <div key={s.step} className="border-l-4 border-neon pl-6">
              <div className="font-space font-bold text-[11px] tracking-[0.12em] uppercase text-neon mb-4">
                {s.step}
              </div>
              <h3 className="font-space font-bold text-xl lg:text-2xl mb-3 leading-[1.3]">
                {s.title}
              </h3>
              <p className="font-inter text-[17px] leading-[1.6] text-white">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <h3 className="font-space font-bold text-2xl lg:text-3xl text-white mb-8 leading-[1.2]">
          FAQ
        </h3>
        <div className="space-y-6">
          {FAQS.map((f) => (
            <div key={f.q} className="bg-card-bg border-l-4 border-neon p-8">
              <h4 className="font-space font-bold text-xl text-white mb-4 leading-[1.3]">
                {f.q}
              </h4>
              <div className="font-inter text-[17px] leading-[1.6] text-supporting">
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
