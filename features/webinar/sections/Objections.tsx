type Objection = {
  q: string;
  a: string;
};

const OBJECTIONS: Objection[] = [
  {
    q: "“I already know my ecosystem. I know what to buy.”",
    a: "Then you don't need this. If you genuinely already see what's coming and you're already moving on it - good luck, run your race. This briefing isn't for you. It's for the founder who senses something is off and wants the map.",
  },
  {
    q: "“I have a community.”",
    a: "A $12M beauty brand thought so too. Their “community” was 94% paid traffic. Meta tweaked the algorithm - gone in 6 weeks. A real community shows up as organic revenue, not a hashtag.",
  },
  {
    q: "“I'm on Amazon. I'm diversified.”",
    a: "Amazon is where factories study your pricing, your reviews, and your complaints - before launching their own brand with better margins. You're not diversified. You're training your replacement.",
  },
  {
    q: "“I have long-term factory relationships.”",
    a: "This isn't about relationships. It's about structural asymmetry. Your factory's kid has a US passport, a Delaware LLC, and a warmed-up ad account. They don't need your relationship. They want your market share.",
  },
  {
    q: "“I already run UGC, multi-angle creative, Meta, TikTok, live shopping.”",
    a: "Good. Keep doing it. We'll touch live shopping on the call too - it's real. But this briefing isn't about that. This is about what happens when someone shows up to take everything you built. Do you sit around and run the same ad variations? Or do you prepare?",
  },
  {
    q: "“I don't have time for this.”",
    a: "Then you're the one who disappears. Simple. The founders who survive the next 24 months are the ones who made time this quarter, not next.",
  },
];

export default function Objections() {
  return (
    <section className="bg-dark-bg py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="font-space font-bold text-[11px] tracking-[0.2em] uppercase text-neon mb-6">
          THE OSTRICH EFFECT
        </div>
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-6">
          &ldquo;But I think I&apos;m safe because…&rdquo;
        </h2>
        <p className="font-inter text-lg text-supporting leading-[1.55] mb-12">
          Let me stop you. Every one of these is the ostrich effect in
          disguise.
        </p>

        <div className="space-y-6">
          {OBJECTIONS.map((o) => (
            <div
              key={o.q}
              className="bg-card-bg border-l-4 border-neon p-7 lg:p-8"
            >
              <h3 className="font-space font-bold text-xl lg:text-2xl text-white mb-4 leading-[1.3]">
                {o.q}
              </h3>
              <p className="font-inter text-[17px] leading-[1.65] text-supporting">
                {o.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-4 font-inter text-[18px] lg:text-xl leading-[1.6] text-white">
          <p>
            Nobody is safe. The threat is already in your supplier&apos;s
            WhatsApp, their incorporation documents, and their TikTok ad
            library.
          </p>
          <p className="font-space font-bold text-xl lg:text-2xl text-neon">
            The question isn&apos;t whether this affects you. It&apos;s whether
            you see it before your factory does.
          </p>
        </div>
      </div>
    </section>
  );
}
