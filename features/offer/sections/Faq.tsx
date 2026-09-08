import type { ReactNode } from "react";

type Faq = { q: string; a: ReactNode };

const FAQS: Faq[] = [
  {
    q: "Why only $499?",
    a: (
      <>
        <p>
          I&apos;ve spent 30 years searching for the simplest way to create
          clarity inside a company.
        </p>
        <p className="mt-4">This is it.</p>
        <p className="mt-4">The experience behind it isn&apos;t new.</p>
        <p className="mt-4">The offer is.</p>
        <p className="mt-4">
          That&apos;s why I&apos;m making it available for $499.
        </p>
      </>
    ),
  },
  {
    q: "Who is this for?",
    a: (
      <>
        <p>
          Founders and leaders of consumer goods brands - DTC, retail, or both.
        </p>
        <div className="mt-4 space-y-1">
          <p>Beauty.</p>
          <p>Health &amp; wellness.</p>
          <p>Apparel.</p>
          <p>Food &amp; beverage.</p>
          <p>Lifestyle.</p>
        </div>
      </>
    ),
  },
  {
    q: "What do I need to prepare?",
    a: (
      <>
        <p>Nothing.</p>
        <p className="mt-4">Your knowledge of your business is enough.</p>
      </>
    ),
  },
  {
    q: "What if it doesn't work for me?",
    a: (
      <>
        <p>Full refund.</p>
        <p className="mt-4">That&apos;s the guarantee.</p>
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-3xl lg:text-4xl text-white mb-12 leading-[1.2]">
          Frequently asked questions
        </h2>

        <div className="space-y-6">
          {FAQS.map((f) => (
            <div key={f.q} className="bg-card-bg border-l-4 border-neon p-8">
              <h3 className="font-space font-bold text-xl text-white mb-4 leading-[1.3]">
                {f.q}
              </h3>
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
