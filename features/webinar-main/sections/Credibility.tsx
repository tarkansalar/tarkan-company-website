import { HOST_IMG } from "../data/images";

const METRICS: Array<[string, string, string?]> = [
  ["LTV:CAC", "1.66 : 1"],
  ["ROAS", "2.65x", "(unhealthy)"],
  ["DEAD INVENTORY", "$840K", "(30%)"],
  ["SKU COUNT", "95", "(too complex)"],
];

const CHANGES = [
  "Killed 22 SKUs",
  "Identified 15 real profit drivers",
  "Liquidated trapped inventory",
  "Refocused spend",
];

export default function Credibility() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-6">
          Who Am I to Promise That?
        </h2>
        <div>
          {/* Host photo */}
          <div className="bg-card-bg border-l-4 border-neon overflow-hidden w-full max-w-[260px] mx-auto mb-10">
            <img
              src={HOST_IMG}
              alt="Tarkan Salar"
              className="w-full aspect-[4/5] object-cover"
              style={{ objectPosition: "center 15%" }}
            />
            <div className="border-t border-white/10 bg-white/[0.03] px-4 py-2.5 text-center">
              <p className="font-inter text-sm text-white font-medium tracking-wide">
                Tarkan Salar
              </p>
            </div>
          </div>

          <div className="space-y-6 font-inter text-[18px] lg:text-xl leading-[1.6] text-supporting">
            <p>
              I&apos;ve been building product businesses for 30 years - starting at 18, no outside funding.
            </p>
            <p>
              HQ in Germany. Office in Hong Kong. My own factory and denim laundry in China. 17 retail stores - built from the factory floor to the checkout. Private label manufacturing for Louis Vuitton, Zara, Diesel and major retailers. 50M+ products produced. Two world-first inventions in colored denim.
            </p>
            <p>
              When those inventions hit the market, my brand went to $40M in two years - and I was offered $50M for the business. I turned it down. Not from strategy - from overload. I was too burned out, too close to the business, with no code to measure that decision against.
            </p>
            <p className="text-white">
              <strong>I didn&apos;t learn this in a book. I paid for it.</strong>
            </p>
          </div>
        </div>

        {/* Proof - $25M streetwear brand */}
        <div className="mt-16 pt-12 border-t border-neon/15">
          <h3 className="font-space font-extrabold text-2xl lg:text-3xl text-white leading-[1.2] tracking-[-0.02em] mb-8">
            $25M streetwear brand - 48 hours after we looked at the
            numbers.
          </h3>

          <div className="bg-card-bg border-l-4 border-neon p-6 lg:p-7 mb-6">
            <div className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-3">
              WHAT SOFIA THOUGHT
            </div>
            <p className="font-inter text-lg text-white italic leading-[1.5]">
              &ldquo;We&apos;re growing. Ads are working.&rdquo;
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {METRICS.map(([label, value, sub]) => (
              <div
                key={label}
                className="bg-card-bg border-l-4 border-neon p-6"
              >
                <div className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">
                  {label}
                </div>
                <div className="font-space font-extrabold text-3xl text-neon">
                  {value}
                </div>
                {sub && (
                  <div className="font-inter text-xs text-supporting mt-1">
                    {sub}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="font-inter text-[17px] leading-[1.6] text-supporting space-y-2 mb-6">
            <p>They were acquiring customers that barely paid back.</p>
            <p>While sitting on nearly $1M in dead stock.</p>
          </div>

          <div className="bg-card-bg border-l-4 border-neon p-6 lg:p-7 mb-8">
            <div className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-4">
              WHAT CHANGED
            </div>
            <ul className="font-inter text-base text-white leading-[1.7] space-y-2">
              {CHANGES.map((c) => (
                <li key={c}>- {c}</li>
              ))}
            </ul>
          </div>

          <p className="font-space font-bold text-2xl lg:text-3xl text-white leading-[1.3]">
            Result: $1.2M+ liquidity unlocked in 90 days
          </p>
        </div>
      </div>
    </section>
  );
}
