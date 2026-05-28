import { WEBINAR_REGISTRATION_URL, WEBINAR_SEAT_CAP } from "@/lib/constants";

type Point = {
  num: string;
  title: string;
  body: string;
};

const PRODUCTION: Point[] = [
  {
    num: "1",
    title: "SPEED - Idea to store in 2 weeks. The Zara concept.",
    body: "In this industry, speed reduces risk. Speed finds bestsellers faster. Find one, double down, multiply profits. The longer your idea-to-store cycle, the more you bet on each launch - and the more each miss costs you. I'll show you how to compress that cycle to 2 weeks. Even if you're certain you can't. Especially if you're certain you can't.",
  },
  {
    num: "2",
    title:
      "MARGINS - How to negotiate better, and why your factory will actually give it to you.",
    body: "Most founders negotiate margins like they're asking for a favor. They're not. There's a mechanic to this. I ran my own factory in Hong Kong and China for 15+ years - I sat on the other side of that table a thousand times. I'll show you exactly what makes a factory say yes, and what makes them quietly raise your price next quarter.",
  },
  {
    num: "3",
    title:
      "INNOVATION & QUALITY - How to increase both while reducing your cost price.",
    body: "Sounds impossible. That's the whole point. The factories pulling away from the pack are doing this every day. I'll show you the operational sequence - not the theory, the sequence.",
  },
];

const CUSTOMER: Point[] = [
  {
    num: "4",
    title:
      "SERVICE · CONVENIENCE · VALUE - What the factory's kid still can't deliver.",
    body: "This is where you out-execute them - if you build it before they figure it out. Once they do, the window closes. Most founders are spending 90% of their energy on the production side and zero on this. That's backwards in 2026.",
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
          You have two ends to defend.
        </h2>
        <p className="font-inter text-[18px] lg:text-xl leading-[1.6] text-white max-w-3xl mb-16">
          The production end. The customer end. The factory&apos;s kid is
          coming at you from one side. Your customer is the only thing standing
          on the other. We cover both.
        </p>

        <div className="mb-12">
          <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
            The production end.
          </p>
          <div className="grid lg:grid-cols-3 gap-5">
            {PRODUCTION.map((p) => (
              <Block key={p.num} point={p} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
            The customer end.
          </p>
          <div className="grid lg:grid-cols-1 gap-5">
            {CUSTOMER.map((p) => (
              <Block key={p.num} point={p} />
            ))}
          </div>
        </div>

        <p className="font-space font-bold text-xl lg:text-2xl text-white leading-[1.35] mb-10">
          This is the wake-up call I wish someone had given me before I figured
          it out the hard way - on both sides of the table.
        </p>

        <a
          href={WEBINAR_REGISTRATION_URL}
          className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
        >
          CLAIM MY SPOT - {WEBINAR_SEAT_CAP} SEATS
        </a>
      </div>
    </section>
  );
}
