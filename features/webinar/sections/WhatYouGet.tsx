import { WEBINAR_REGISTRATION_URL, WEBINAR_SEAT_CAP } from "@/lib/constants";

const TAKEAWAYS = [
  {
    n: "1",
    h: "The full 90-minute strategic briefing.",
    p: "You will see the value the moment you show up.",
  },
  {
    n: "2",
    h: "The full framework on paper.",
    p: "Production end (Speed · Margins · Quality) + Customer end (Service · Convenience · Value).",
  },
  {
    n: "3",
    h: "Working access to the AI context engine.",
    p: "$5,000 standalone value. Live on the call.",
  },
  {
    n: "4",
    h: "If you're one of the five - a direct, no-filter answer to your biggest bottleneck.",
    p: "Live hot seat in front of the room.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          What you also get for showing up live.
        </p>
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-10">
          Time-limited access to my 80/20 Profit AI context engine.
        </h2>

        <div className="font-inter text-[18px] lg:text-xl leading-[1.7] text-white space-y-5 mb-12">
          <p>
            The same system I use with private clients. Standalone license:{" "}
            <strong className="text-neon font-semibold">$5,000</strong>. You get
            working access on the call.
          </p>
          <p>
            Not a generic chatbot. This is the brand-and-supply context engine
            I&apos;ve built from 26 years of operating - the filter I run
            decisions through. Plug in your numbers, ask your questions, and
            get back exactly{" "}
            <strong className="text-white">what to kill, what to scale,</strong>{" "}
            and{" "}
            <strong className="text-white">
              how to increase profits while reducing chaos
            </strong>
            .
          </p>
        </div>

        <div className="font-space font-bold text-[11px] tracking-[0.18em] uppercase text-neon mb-6">
          YOU LEAVE WITH
        </div>
        <ol className="space-y-5 mb-12">
          {TAKEAWAYS.map((t) => (
            <li
              key={t.n}
              className="bg-card-bg border-l-4 border-neon p-6 lg:p-7 flex gap-5 items-start"
            >
              <div className="font-space font-extrabold text-3xl text-neon leading-none flex-shrink-0">
                {t.n}
              </div>
              <div>
                <div className="font-space font-bold text-lg text-white mb-2 leading-[1.3]">
                  {t.h}
                </div>
                <p className="font-inter text-[16px] leading-[1.6] text-supporting">
                  {t.p}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="font-inter text-[18px] lg:text-xl leading-[1.65] text-white space-y-5 mb-10">
          <p>
            No pitch. No upsell. No &ldquo;but wait.&rdquo; I&apos;m running
            this because the founders I care about are about to get hit by
            something they didn&apos;t see coming - and I&apos;d rather spend
            90 minutes warning a room than two years watching good brands die
            quietly.
          </p>
          <p className="font-space font-bold text-xl text-neon">
            Some of you have a great message. The world needs to see it.
          </p>
        </div>

        <a
          href={WEBINAR_REGISTRATION_URL}
          className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
        >
          SECURE MY FREE SEAT - {WEBINAR_SEAT_CAP} SPOTS
        </a>
      </div>
    </section>
  );
}
