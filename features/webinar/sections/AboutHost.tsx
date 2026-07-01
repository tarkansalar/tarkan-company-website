import { HOST_IMG } from "../data/images";

const CREDENTIALS = [
  {
    h: "30 years across every layer of a product business.",
    p: "Louis Vuitton. Adidas. Zara. H&M - supplied and produced.",
  },
  {
    h: "Ran my own factory in Hong Kong and China for 15+ years.",
    p: "Sat on the supplier side of the table thousands of times. I know exactly what factories see when they look at your business - and how they think about your margin.",
  },
  {
    h: "Founded my own brand. Built a world-first denim technology.",
    p: "Grew it from €0 to €40M in two years.",
  },
  {
    h: "50M+ products developed and sold.",
    p: "Across categories, channels, and countries. I have seen where the machine breaks and where it compounds.",
  },
  {
    h: "Received a €50M acquisition offer. Declined.",
    p: "It was the wrong decision. That lesson taught me more than any success ever could.",
  },
];

const RESULTS = [
  {
    h: "€12M yoga brand. Revenue down 25%.",
    p: "Found their BLUE OCEAN CODE. Redesigned the hero product. Rebuilt the supply chain. Implemented an 80/20 product strategy. Result: +81.6% growth. €6M recovered.",
  },
  {
    h: "Another founder. €1.2M unlocked.",
    p: "Already sitting inside the business. No new customers. No miracle tactic. Just fixing the machine.",
  },
];

const PERSPECTIVES = [
  "The founder who got cloned by his own factory.",
  "The supplier who could have cloned the founder (and chose not to).",
  "The operator who has run every layer of a product business - and fixed the machine from the inside.",
];

export default function AboutHost() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-8">
          Who&apos;s running this.
        </p>

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
          30-year growth operator. Not a marketer. Not a coach. Operator.
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

        <div className="font-space font-bold text-[11px] tracking-[0.18em] uppercase text-supporting mb-6">
          WHAT THE MACHINE HAS DELIVERED FOR REAL CLIENTS
        </div>
        <ul className="space-y-5 mb-14">
          {RESULTS.map((r) => (
            <li
              key={r.h}
              className="bg-card-bg border-l-4 border-neon p-6 lg:p-7 font-inter text-[17px] leading-[1.55]"
            >
              <div className="text-white font-semibold mb-2">{r.h}</div>
              <div className="text-supporting">{r.p}</div>
            </li>
          ))}
        </ul>

        <div className="bg-card-bg border-l-4 border-neon p-7 lg:p-8 mb-14">
          <div className="font-space font-bold text-[11px] tracking-[0.18em] uppercase text-neon mb-4">
            ONE WARNING
          </div>
          <div className="font-inter text-[17px] lg:text-lg leading-[1.65] text-white space-y-3">
            <p>
              I&apos;m an operator, not a marketer. I can&apos;t burn more
              leads than I get, so my moat is real value, not slick
              acquisition.
            </p>
            <p className="font-space font-bold text-neon">
              Simplicity. Speed. Results.
            </p>
            <p>
              No BS. No posturing. No theatre. Real operator-to-founder
              conversation.
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
          I find the leak. I fix it. I leave the business stronger and more
          profitable.
        </p>
      </div>
    </section>
  );
}
