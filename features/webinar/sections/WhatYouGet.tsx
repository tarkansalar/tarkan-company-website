import { WEBINAR_REGISTRATION_URL, WEBINAR_SEAT_CAP } from "@/lib/constants";

const TAKEAWAYS = [
  {
    n: "1",
    h: "The full 90-minute strategic briefing.",
    p: "The BLUE OCEAN CODE, the machine behind the brand, and where 15-20% margin and better cash flow usually hide.",
  },
  {
    n: "2",
    h: "The full framework on paper.",
    p: "Your position. The machine. The 80/20 SKU truth. The unlock. Same lens I use with private clients.",
  },
  {
    n: "3",
    h: "The founder diagnostic result.",
    p: "Where you're weakest across product, supply, pricing, inventory, and channels - so you know which leak to fix first.",
  },
  {
    n: "4",
    h: "If you're one of the five - a direct, no-filter answer to your biggest bottleneck.",
    p: "Live hot seat. Your numbers. Your machine. The first three moves I would make if this were my business.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          What you walk away with.
        </p>
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-10">
          The BLUE OCEAN CODE, applied to your business.
        </h2>

        <div className="font-inter text-[18px] lg:text-xl leading-[1.7] text-white space-y-5 mb-12">
          <p>
            Not theory. Not slides. Not another AI pitch.
          </p>
          <p>
            The same lens I use with private clients - applied live so you
            leave knowing{" "}
            <strong className="text-white">
              what your position actually is
            </strong>
            ,{" "}
            <strong className="text-white">
              where the machine is leaking
            </strong>
            , and{" "}
            <strong className="text-white">what to fix first</strong>.
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
            this because the founders I care about are firefighting a machine
            that&apos;s misaligned - and I&apos;d rather spend 90 minutes
            showing a room the fix than watch good brands die quietly.
          </p>
          <p className="font-space font-bold text-xl text-neon">
            I find the leak. I fix it. I leave the business stronger and more
            profitable.
          </p>
        </div>

        <a
          href={WEBINAR_REGISTRATION_URL}
          target="_blank"
          rel="noopener"
          className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
        >
          SECURE MY FREE SEAT - {WEBINAR_SEAT_CAP} SPOTS
        </a>
      </div>
    </section>
  );
}
