import { VSL_VIDEO } from "../data/images";

const BLOCKERS = [
  "Customer acquisition costs too high.",
  "Margins squeezed.",
  "Cash flow under pressure.",
  "Firefighting in operations.",
];

const ALTERNATIVES = [
  "Spend more on ads?",
  "Create more content?",
  "Hire another agency?",
  "Add more technology?",
  "Build another complicated funnel?",
];

const BRANDS: Array<[string, string, string?]> = [
  ["Amazon", "Price and convenience."],
  ["Apple", "Simplicity and design."],
  [
    "Zara",
    "Speed and design",
    "Bringing high fashion from the runway to the store faster than almost anyone.",
  ],
];

const STEPS = [
  {
    num: "1",
    title: "Find Your Code",
    body: [
      "In one 30-minute 1-on-1 session with me, we uncover the one thing your customers should always want from you.",
    ],
  },
  {
    num: "2",
    title: "Build Your Code",
    body: [
      "I turn it into your 1-page Blue Ocean Code™ - a simple standard your entire company can use to make better decisions.",
    ],
  },
  {
    num: "3",
    title: "Activate It",
    body: [
      "You receive your Blue Ocean Code™ within 48 hours, plus your 30-Day Activation Plan to put it into practice.",
    ],
  },
];

export default function Problem() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl text-white mb-10 leading-[1.2]">
          Do it like the most successful companies.
        </h2>

        {/* Sales VSL - landscape 16:9, cover frame at 1s */}
        <video
          src={`${VSL_VIDEO}#t=1`}
          controls
          playsInline
          preload="metadata"
          className="w-full aspect-video bg-card-bg border-l-4 border-neon object-cover mb-12"
        />

        <p className="font-inter text-[17px] lg:text-lg leading-[1.6] text-white mb-6">
          You want more customers. Of course you do.
        </p>

        <p className="font-inter text-[17px] lg:text-lg leading-[1.6] text-supporting mb-8">
          So what&apos;s standing in your way?
        </p>

        <div className="border-l-4 border-neon pl-6 font-inter text-[17px] lg:text-lg leading-[1.6] space-y-2 text-white mb-12">
          {BLOCKERS.map((b) => (
            <p key={b}>{b}</p>
          ))}
        </div>

        <p className="font-inter text-[17px] lg:text-lg leading-[1.6] text-supporting mb-6">
          And you&apos;re probably looking at your numbers thinking:
        </p>

        <p className="font-space font-bold text-2xl lg:text-3xl text-white leading-[1.3] mb-12">
          &ldquo;How the hell did this get so expensive?&rdquo;
        </p>

        {/* The three-second problem */}
        <div className="font-inter text-[17px] lg:text-lg leading-[1.6] space-y-6 mb-10">
          <p>And there&apos;s another problem.</p>
          <p className="text-white">
            Customers can leave you for another brand in three seconds.
          </p>
          <p>
            And AI agents are about to make that even more brutal.
          </p>
          <p>We&apos;re already seeing it.</p>
        </div>

        {/*
          BEFORE LAUNCH - this figure is presented as fact and needs a source
          on the page (study name and year), the way the old landing page
          credited Oracle for its 72% stat.
        */}
        <div className="bg-card-bg border-l-4 border-neon p-8 mb-10">
          <p className="font-space font-extrabold text-4xl lg:text-5xl text-neon leading-none mb-4">
            57%
          </p>
          <p className="font-inter text-[17px] leading-[1.6] text-white">
            of AI shoppers have bought from a brand they weren&apos;t even
            considering at the beginning of their journey.
          </p>
        </div>

        <p className="font-inter text-[17px] lg:text-lg leading-[1.6] text-supporting mb-12">
          And AI agents are barely getting started.
        </p>

        {/* The usual answers */}
        <p className="font-space font-bold text-2xl text-white leading-[1.3] mb-8">
          So what can you do?
        </p>

        <div className="font-inter text-[17px] lg:text-lg leading-[1.6] space-y-3 text-supporting mb-10">
          {ALTERNATIVES.map((a) => (
            <p key={a}>{a}</p>
          ))}
        </div>

        <div className="font-inter text-[17px] lg:text-lg leading-[1.6] space-y-6 mb-12">
          <p className="text-white">You can.</p>
          <p className="font-space font-bold text-2xl lg:text-3xl text-white leading-[1.3]">
            Or you can make it easier for customers to choose you.
          </p>
          <p className="text-neon font-space font-bold text-xl">
            I call it your Blue Ocean Code&trade;.
          </p>
        </div>

        {/* Brands that run on one */}
        <p className="font-inter text-[17px] lg:text-lg leading-[1.6] text-supporting mb-8">
          Look at the companies you admire.
        </p>

        <div className="space-y-4 mb-10">
          {BRANDS.map(([name, code, note]) => (
            <div key={name} className="bg-card-bg border-l-4 border-neon p-6">
              <div className="font-space font-bold text-[11px] tracking-[0.14em] uppercase text-neon mb-2">
                {name}
              </div>
              <p className="font-space font-bold text-xl text-white leading-[1.3]">
                {code}
              </p>
              {note && (
                <p className="font-inter text-[16px] leading-[1.6] text-supporting mt-2">
                  {note}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="font-inter text-[17px] lg:text-lg leading-[1.6] space-y-4 mb-12">
          <p>They don&apos;t just have a marketing strategy.</p>
          <p className="text-white font-space font-bold text-xl">
            They operate around a Code.
          </p>
        </div>

        {/* The question */}
        <p className="font-inter text-[17px] lg:text-lg leading-[1.6] text-supporting mb-6">
          Your Code is the answer to one simple question:
        </p>

        <p className="font-space font-bold text-2xl lg:text-4xl text-neon leading-[1.25] border-l-4 border-neon pl-6 mb-12">
          Why should a customer choose you instead of everyone else?
        </p>

        <p className="font-inter text-[17px] lg:text-lg leading-[1.6] mb-16">
          And once you know the answer, you build the company around it - your
          product, marketing, sales, operations and customer experience.
        </p>

        {/* How it works */}
        <h3 className="font-space font-bold text-3xl lg:text-4xl text-white leading-[1.2] mb-10">
          So how does it work?
        </h3>

        <div className="space-y-6 mb-10">
          {STEPS.map((s) => (
            <div key={s.num} className="bg-card-bg border-l-4 border-neon p-6 lg:p-8">
              <div className="flex gap-4">
                <span className="font-space font-extrabold text-2xl text-neon flex-shrink-0 leading-[1.3]">
                  {s.num}
                </span>
                <div>
                  <div className="font-space font-bold text-lg lg:text-xl text-white leading-[1.3] mb-2">
                    {s.title}
                  </div>
                  {s.body.map((b) => (
                    <p
                      key={b}
                      className="font-inter text-[16px] leading-[1.6] text-supporting"
                    >
                      {b}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-neon pl-6 font-inter text-[17px] leading-[1.6] space-y-1 text-white mb-12">
          <p>Your team can read it in 10 seconds.</p>
          <p>Then they feel it in the first week.</p>
          <p>Then they live it - without being told.</p>
        </div>

        {/* Price */}
        <div className="font-space font-bold text-3xl lg:text-4xl text-white leading-[1.2] mb-4">
          $499. One time.
        </div>
        <p className="font-inter text-[17px] leading-[1.6] text-supporting mb-16">
          If you don&apos;t walk away with a Code you&apos;d bet your business
          on, you get a full refund.
        </p>

        {/* Close */}
        <div className="font-inter text-[17px] lg:text-lg leading-[1.6] space-y-6">
          <p>So here&apos;s the question:</p>
          <p className="font-space font-bold text-3xl lg:text-4xl text-white leading-[1.2]">
            What&apos;s your Code?
          </p>
          <p>And most importantly -</p>
          <p className="font-space font-bold text-2xl lg:text-3xl text-neon leading-[1.3]">
            would your customer know it in three seconds?
          </p>
          <div className="pt-4 space-y-1 text-white">
            <p>Because if you don&apos;t know your Code,</p>
            <p>your customers probably don&apos;t either.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
