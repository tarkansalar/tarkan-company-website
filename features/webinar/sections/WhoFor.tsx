const FOR_LIST = [
  "You run a fashion, beauty, or lifestyle brand doing $2M-$50M+",
  "You're the founder, CEO, or operator making the calls on strategy and supply",
  "DTC, wholesale, or omnichannel - doesn't matter",
  "You run your own retail",
  "You have at least one paid channel and can feel margins compressing",
  "You've noticed your factory or supplier launching products that look suspiciously like yours",
];

const NOT_FOR_LIST = [
  "You're pre-revenue or pre-product",
  "You believe your category is immune to commoditization (it isn't)",
  "You want ad tactics, not survival strategy",
  "You want a recording for next month - there's no replay",
];

export default function WhoFor() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="font-space font-bold text-[11px] tracking-[0.2em] uppercase text-neon mb-6">
              THIS IS FOR YOU IF
            </div>
            <ul className="space-y-5">
              {FOR_LIST.map((t) => (
                <li
                  key={t}
                  className="border-l-4 border-neon pl-5 font-inter text-[17px] leading-[1.5] text-white"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-space font-bold text-[11px] tracking-[0.2em] uppercase text-supporting mb-6">
              NOT FOR YOU IF
            </div>
            <ul className="space-y-5">
              {NOT_FOR_LIST.map((t) => (
                <li
                  key={t}
                  className="border-l-4 border-supporting/40 pl-5 font-inter text-[17px] leading-[1.5] text-supporting"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
