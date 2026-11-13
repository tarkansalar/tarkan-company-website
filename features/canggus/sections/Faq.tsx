import type { ReactNode } from "react";
import SectionIntro from "../components/SectionIntro";
import Icon from "../components/Icon";
import { Blob, FloatingProducts, PhotoCard } from "../components/Visuals";
import { PH, VP } from "../data/visuals";

// Answers reuse sentences from copy-lp.md / revisi-instruksi.md. The extra
// sentences (13 Nov 2026) add no new numbers, prices or medical claims: they
// only point to the call, the Certifications section and the production steps.
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
          Minimums depend on the format and the packaging you choose. We discuss concrete numbers
          on the call, once we know which products you have in mind.
        </p>
      </>
    ),
  },
  {
    q: "How does differentiation protect against Amazon comparison?",
    a: (
      <>
        <p>
          If the product is easy to compare, price becomes the only conversation - and you lose.
        </p>
        <p className="mt-4">
          We help develop products with clearer distinction through formulations, ingredient
          combinations, packaging and positioning. The goal is to help you launch products that
          members cannot easily replace with a cheaper alternative.
        </p>
      </>
    ),
  },
  {
    q: "What are the liability realities?",
    a: (
      <>
        <p>
          As the brand owner, you are responsible for your labels, your marketing claims and
          regulatory compliance in the markets where you sell.
        </p>
        <p className="mt-4">
          Production takes place in our partner manufacturing facilities, which hold the standards
          shown in the Certifications section on this page.
        </p>
        <p className="mt-4">
          We help you find your way through these questions, but this is not legal advice. Please
          check your labels and claims with a regulatory advisor in your own market.
        </p>
      </>
    ),
  },
  {
    q: "What are typical timelines?",
    a: (
      <>
        <p>
          Timelines depend on the format, on whether you start from an existing formula or a
          custom one, on sampling and on your packaging.
        </p>
        <p className="mt-4">
          The steps are shown in How Production Works on this page. We confirm your timeline once
          your samples are approved.
        </p>
      </>
    ),
  },
  {
    q: "What do the first 3-6 months usually look like?",
    a: (
      <>
        <p>
          Start with one or two products that make sense for your customers. Learn what sells.
          Then expand.
        </p>
        <p className="mt-4">
          In practice that means choosing the right products, approving samples, finalising your
          packaging, running your first production, launching to your members, and then reviewing
          what works before you add new products.
        </p>
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-[#fdf7fa]">
      <Blob className="-left-48 bottom-0 h-[480px] w-[480px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <SectionIntro eyebrow="Questions" title="Frequently asked questions" />
          {/* Real catalog products + QC lab photo (manifest) */}
          <div className="relative mt-10 mx-auto w-full max-w-[400px]">
            <PhotoCard
              photo={PH.qcLab}
              sizes="(min-width: 1024px) 360px, 80vw"
              rotate="rotate-[3deg]"
              className="w-[82%] ml-auto"
            />
            <FloatingProducts
              disc={false}
              sizes="(min-width: 1024px) 110px, 26vw"
              className="pointer-events-none absolute -left-2 -bottom-10 h-[80%] w-[60%]"
              items={[
                { p: VP.magnesiumGummy, pos: "left-0 bottom-0 w-[46%]", d: 0.6, r: -7, z: 2 },
                { p: VP.magnesiumDrops, pos: "left-[44%] bottom-[-2%] w-[24%]", d: 1.7, r: 4, z: 3 },
              ]}
            />
          </div>
        </div>
        <div className="space-y-3 lg:pt-4">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-3xl bg-white/90 px-6 sm:px-8 ring-1 ring-white shadow-[0_1px_2px_rgba(40,40,40,0.04),0_18px_44px_-30px_rgba(40,40,40,0.5)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-xl py-6 text-[17px] sm:text-lg font-semibold leading-[1.4] text-[#282828] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdf0f6] ring-1 ring-[#fb6ba8]/15 text-[#fb6ba8] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:rotate-180"
                >
                  <Icon name="chevronDown" className="h-5 w-5" />
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
