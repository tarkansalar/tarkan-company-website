const STEPS = [
  {
    num: "01",
    title: "Find it",
    body: [
      "30 minutes together.",
      "We identify the one thing your customers should always be able to count on from your brand.",
    ],
  },
  {
    num: "02",
    title: "Code it",
    body: [
      "I turn it into your 1-page Blue Ocean Code™.",
      "Delivered within 48 hours.",
    ],
  },
  {
    num: "03",
    title: "Activate it",
    body: [
      "You get your 30-Day Activation Plan.",
      "Your team starts using the Code to make decisions.",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl text-white mb-12 leading-[1.2]">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div key={s.num} className="border-l-4 border-neon pl-6">
              <div className="font-space font-extrabold text-3xl text-neon mb-3 leading-none">
                {s.num}
              </div>
              <h3 className="font-space font-bold text-xl lg:text-2xl text-white mb-4 leading-[1.3] uppercase tracking-[0.04em]">
                {s.title}
              </h3>
              <div className="font-inter text-[17px] leading-[1.6] text-supporting space-y-3">
                {s.body.map((b) => (
                  <p key={b}>{b}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
