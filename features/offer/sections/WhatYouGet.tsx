const ITEMS = [
  {
    num: "1",
    name: "The 30-Minute Blue Ocean Code™ Session",
    body: [
      "Live 1-on-1.",
      "Come as you are.",
      "I ask the questions. You bring your knowledge of your business.",
    ],
    outcome:
      "You leave knowing what your brand should never compromise on.",
  },
  {
    num: "2",
    name: "Your Blue Ocean Code™ - delivered in 48 hours",
    body: [
      "One page.",
      "Simple enough for your team to understand in seconds.",
      "Strong enough to guide decisions across people, marketing, operations and customer experience.",
    ],
    outcome: "You'll see exactly what you receive before you book.",
  },
  {
    num: "3",
    name: "Your 30-Day Activation Plan",
    body: [
      "Because a Code without activation is just words.",
      "The first 30 days of making your Code visible in the business.",
    ],
    outcome: "Not another strategy deck. A checklist your team can execute.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl text-white mb-12 leading-[1.2]">
          What you walk away with - for $499
        </h2>

        <div className="space-y-6">
          {ITEMS.map((item) => (
            <div
              key={item.num}
              className="bg-card-bg border-l-4 border-neon p-6 lg:p-8"
            >
              <div className="flex gap-4">
                <span className="font-space font-extrabold text-2xl text-neon flex-shrink-0 leading-[1.3]">
                  {item.num}
                </span>
                <div>
                  <div className="font-space font-bold text-lg lg:text-xl text-white leading-[1.3] mb-3">
                    {item.name}
                  </div>
                  <div className="font-inter text-[16px] leading-[1.6] text-supporting space-y-2">
                    {item.body.map((b) => (
                      <p key={b}>{b}</p>
                    ))}
                  </div>
                  <p className="font-inter text-[16px] leading-[1.6] text-neon mt-4">
                    &rarr; {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
