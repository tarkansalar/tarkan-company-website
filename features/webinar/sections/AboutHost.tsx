import { HOST_IMG } from "../data/images";

const CREDENTIALS = [
  {
    h: "Built a $50M company with zero outside investment.",
    p: "Started at 18.",
  },
  {
    h: "Invented the world's first double-dye and triple-dye process.",
    p: "Industry-changing, not a side project.",
  },
  {
    h: "Ran B2B private label, DTC, and my own retail - at the same time.",
    p: "Three sides of the same business, simultaneously. Most operators run one. I ran all three.",
  },
  {
    h: "Supplied brands like Louis Vuitton, Zara, Arcadia Group - and many more at that level.",
    p: "I know what those buying offices look for, how they negotiate, and why they quietly switch suppliers.",
  },
  {
    h: "Founded my own brand - One Green Elephant.",
    p: "Built it, ran it, lived it.",
  },
  {
    h: "Ran my own factory in Hong Kong and China for 15+ years.",
    p: "I sat on the supplier side of the table thousands of times. I know exactly what factories see when they look at your business.",
  },
  {
    h: "Took factories directly to market as a consultant.",
    p: "I've literally done what we're talking about on this call - from the inside. I know what they want, what they're afraid of, and what they're already planning.",
  },
];

const PERSPECTIVES = [
  "The founder who got cloned by his own factory.",
  "The supplier who could have cloned the founder (and chose not to).",
  "The consultant who walked factories into direct-to-consumer.",
];

export default function AboutHost() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="font-space font-bold text-[11px] tracking-[0.2em] uppercase text-neon mb-8">
          WHO&apos;S RUNNING THIS
        </div>

        <div className="bg-card-bg border-l-4 border-neon overflow-hidden mx-auto w-full max-w-[260px] mb-8">
          <img
            src={HOST_IMG}
            alt="Tarkan Salar"
            className="w-full aspect-[4/5] object-cover"
            style={{ objectPosition: "center 15%" }}
          />
          <div className="border-t border-white/10 bg-white/[0.03] px-4 py-2.5 text-center">
            <p className="font-inter text-sm text-white font-medium tracking-wide">
              Tarkan Salar
            </p>
          </div>
        </div>

        <p className="font-space font-bold text-base lg:text-lg text-neon text-center leading-[1.5] max-w-2xl mx-auto mb-16 lg:mb-20">
          Operator, not a marketer. 26 years inside global manufacturing,
          product development, and brand building.
        </p>

        <div className="font-space font-bold text-[11px] tracking-[0.18em] uppercase text-supporting mb-6">
          WHAT I&apos;VE ACTUALLY DONE
        </div>
        <ul className="space-y-5 mb-14">
          {CREDENTIALS.map((c) => (
            <li
              key={c.h}
              className="border-l-4 border-neon pl-5 font-inter text-[17px] leading-[1.55]"
            >
              <div className="text-white font-semibold mb-1">{c.h}</div>
              <div className="text-supporting">{c.p}</div>
            </li>
          ))}
        </ul>

        <div className="bg-card-bg border-l-4 border-neon p-7 lg:p-8 mb-14">
          <div className="font-space font-bold text-[11px] tracking-[0.18em] uppercase text-neon mb-4">
            ONE WARNING
          </div>
          <div className="font-inter text-[17px] lg:text-lg leading-[1.65] text-white space-y-3">
            <p>
              I&apos;m an operator, not a marketer. I burn more on leads than I
              should - my moat is real value, not slick acquisition.
            </p>
            <p className="font-space font-bold text-neon">
              Simplicity. Speed. Results.
            </p>
            <p>
              No BS. No posturing. No teardowns of other people&apos;s work.
              You&apos;ve seen enough of that. This is real operator-to-founder
              talk.
            </p>
          </div>
        </div>

        <div className="font-inter text-[18px] lg:text-xl leading-[1.7] text-white space-y-5 mb-8">
          <p className="font-space font-bold text-xl text-white">
            I&apos;ve sat on every side of this table:
          </p>
          <ul className="space-y-3">
            {PERSPECTIVES.map((p) => (
              <li
                key={p}
                className="border-l-4 border-neon pl-5 font-inter text-[17px] leading-[1.55] text-supporting"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        <p className="font-space font-bold text-xl lg:text-2xl text-neon leading-[1.4]">
          Find one other person teaching this who&apos;s done all three. If you
          can, go to their webinar. If you can&apos;t, you&apos;re in the right
          place.
        </p>
      </div>
    </section>
  );
}
