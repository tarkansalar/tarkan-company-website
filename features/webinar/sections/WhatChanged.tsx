const COLLAPSED = [
  ["UGC", "AI-generated in minutes, any face, any language."],
  ["Product photography", "no studio."],
  ["Ad copy", "no senior copywriter."],
  ["Email flows", "no Klaviyo agency."],
  [
    "Brand voice",
    "cloned from your own site in 15 minutes.",
  ],
];

export default function WhatChanged() {
  return (
    <section className="bg-dark-bg py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="font-space font-bold text-[11px] tracking-[0.2em] uppercase text-neon mb-6">
          WHAT CHANGED
        </div>
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-10">
          Here&apos;s what changed, in plain English.
        </h2>

        <div className="font-inter text-[18px] lg:text-xl leading-[1.7] text-white space-y-6 mb-10">
          <p>
            For ten years, your edge was front-end execution. Better creative.
            Better landing pages. Better flows. A $20M DTC brand looked nothing
            like a factory&apos;s Alibaba page.
          </p>
          <p className="text-neon font-medium">
            That gap is closing by the quarter, not the year.
          </p>
        </div>

        <ul className="space-y-4 mb-10">
          {COLLAPSED.map(([k, v]) => (
            <li
              key={k}
              className="border-l-4 border-neon pl-5 font-inter text-[17px] leading-[1.55] text-white"
            >
              <strong className="text-white font-semibold">{k}:</strong>{" "}
              <span className="text-supporting">{v}</span>
            </li>
          ))}
        </ul>

        <div className="font-inter text-[18px] lg:text-xl leading-[1.7] text-white space-y-6">
          <p>
            So when the factory in Guangzhou can replicate your creative output
            for $40 a month - and they own the production, the price, the
            speed, and the flexibility - what exactly is your moat?
          </p>
          <p className="font-space font-bold text-xl lg:text-2xl text-neon leading-[1.35]">
            That&apos;s what I&apos;m answering on this call. Specifically.
            With the order to build, starting Monday.
          </p>
        </div>
      </div>
    </section>
  );
}
