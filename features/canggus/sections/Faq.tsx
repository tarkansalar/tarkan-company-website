import type { ReactNode } from "react";
import SectionIntro from "../components/SectionIntro";

// Answers only reuse sentences from copy-lp.md / revisi-instruksi.md.
// Everything the copy does not cover is marked [TUAN ISI].
const TuanIsi = () => <span className="font-semibold text-[#f466a2]">[TUAN ISI]</span>;

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "What are realistic minimums?",
    a: (
      <>
        <p>
          Because we work with multiple brands, we can access more realistic starting quantities
          and stronger factory pricing than most single businesses can negotiate on their own.
        </p>
        <p className="mt-4">Start with a realistic first order and expand from there.</p>
        <p className="mt-4">
          <TuanIsi />
        </p>
      </>
    ),
  },
  {
    q: "How does differentiation protect against Amazon comparison?",
    a: (
      <>
        <p>
          If the product is easy to compare, price becomes the only conversation — and you lose.
        </p>
        <p className="mt-4">
          We help develop products with clearer distinction through formulations, ingredient
          combinations, packaging and positioning. The goal is to help you launch products that
          members cannot easily replace with a cheaper alternative.
        </p>
        <p className="mt-4">
          <TuanIsi />
        </p>
      </>
    ),
  },
  {
    q: "What are the liability realities?",
    a: (
      <p>
        <TuanIsi />
      </p>
    ),
  },
  {
    q: "What are typical timelines?",
    a: (
      <p>
        <TuanIsi />
      </p>
    ),
  },
  {
    q: "What do the first 3–6 months usually look like?",
    a: (
      <>
        <p>
          Start with one or two products that make sense for your customers. Learn what sells.
          Then expand.
        </p>
        <p className="mt-4">
          <TuanIsi />
        </p>
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section className="py-20 lg:py-32 bg-[#fdf7fa]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionIntro eyebrow="Questions" title="Frequently asked questions" />
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-3xl bg-white px-6 sm:px-8 shadow-[0_12px_40px_-30px_rgba(40,40,40,0.5)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-xl py-6 text-[17px] sm:text-lg font-semibold leading-[1.4] text-[#282828] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdf0f6] text-xl text-[#fb6ba8] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="pb-7 text-[16px] leading-[1.7] text-[#282828]/75">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
