import { WEBINAR_REGISTRATION_URL, WEBINAR_SEAT_CAP } from "@/lib/constants";

type Point = {
  num: string;
  title: string;
  body: string;
};

const OWNERS: Array<[string, string]> = [
  ["Amazon", "owns price and convenience."],
  ["Apple", "owns technology and liberal arts."],
  ["Alo Yoga", "owns community and status."],
];

const PILLARS: Point[] = [
  {
    num: "1",
    title: "Your position.",
    body: "What you actually own that no one can copy. Not what you think you own - what's true when you look at the machine. Where every decision either reinforces or drains that position.",
  },
  {
    num: "2",
    title: "The machine.",
    body: "How supply chain, inventory, pricing, and channels line up behind that position - or work against it. This is where 15-20% margin and better cash flow usually live, hidden in plain sight.",
  },
  {
    num: "3",
    title: "The 80/20 SKU truth.",
    body: "Why 20% of your products carry the business and 80% quietly consume attention, cash, and CAC. What to kill, what to double, what to build the rest of the business around.",
  },
  {
    num: "4",
    title: "The unlock.",
    body: "Where margin, cash, and CAC are already leaking. The first three moves to move from firefighting to compounding - so the business builds equity, not dependency.",
  },
];

function Block({ point }: { point: Point }) {
  return (
    <div className="bg-card-bg border-l-4 border-neon p-7 lg:p-8">
      <div className="font-space font-extrabold text-3xl text-neon mb-3">
        {point.num}
      </div>
      <h3 className="font-space font-bold text-xl lg:text-2xl text-white mb-4 leading-[1.3]">
        {point.title}
      </h3>
      <p className="font-inter text-[17px] leading-[1.65] text-supporting">
        {point.body}
      </p>
    </div>
  );
}

export default function Framework() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          What this webinar is actually about.
        </p>
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-8">
          The BLUE OCEAN CODE.
        </h2>
        <p className="font-inter text-[18px] lg:text-xl leading-[1.6] text-white max-w-3xl mb-10">
          Every brand that compounds owns one position. Every decision -
          product, supply, pricing, inventory, channels, team - reinforces it.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {OWNERS.map(([brand, claim]) => (
            <div
              key={brand}
              className="bg-card-bg border-l-4 border-neon p-5"
            >
              <div className="font-space font-bold text-lg text-neon mb-1">
                {brand}
              </div>
              <div className="font-inter text-[15px] text-supporting leading-[1.5]">
                {claim}
              </div>
            </div>
          ))}
        </div>

        <div className="font-inter text-[18px] lg:text-xl leading-[1.65] text-white space-y-5 max-w-3xl mb-14">
          <p>
            Most founders know what they stand for. Their business isn&apos;t
            built around it.
          </p>
          <p>
            That&apos;s where margins disappear, founders become firefighters,
            and the machine builds dependency instead of equity.
          </p>
          <p className="font-space font-bold text-xl lg:text-2xl text-neon leading-[1.35]">
            A business built around the BLUE OCEAN CODE aligns everything
            behind one position. It compounds instead of getting more complex.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mb-12">
          {PILLARS.map((p) => (
            <Block key={p.num} point={p} />
          ))}
        </div>

        <p className="font-space font-bold text-xl lg:text-2xl text-white leading-[1.35] mb-10">
          This is the wake-up call I wish someone had given me before I figured
          it out the hard way - on both sides of the table.
        </p>

        <a
          href={WEBINAR_REGISTRATION_URL}
          target="_blank"
          rel="noopener"
          className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
        >
          CLAIM MY SPOT - {WEBINAR_SEAT_CAP} SEATS
        </a>
      </div>
    </section>
  );
}
