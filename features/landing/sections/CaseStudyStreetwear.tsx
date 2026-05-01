import { BOOKING_URL } from "@/lib/constants";

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

export default function CaseStudyStreetwear() {
  return (
    <section className="bg-darker-bg py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-3xl lg:text-4xl text-white mb-12 leading-[1.2]">
          $25M STREETWEAR BRAND - 48 HOURS AFTER USING 80/20 PROFIT AI
        </h2>
        <div className="bg-card-bg border-l-[3px] border-neon p-8 lg:p-10 mb-8">
          <div className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-3">
            WHAT SOFIA THOUGHT
          </div>
          <p className="font-inter text-lg text-white italic leading-[1.5]">
            &ldquo;We&apos;re growing. Ads are working.&rdquo;
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {METRICS.map(([label, value, sub]) => (
            <div
              key={label}
              className="bg-card-bg border-l-[3px] border-neon p-6"
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
        <div className="font-inter text-[17px] leading-[1.6] space-y-2 mb-8">
          <p>They were acquiring customers that barely paid back</p>
          <p>While sitting on nearly $1M in dead stock</p>
        </div>
        <div className="bg-card-bg border-l-[3px] border-neon p-8 mb-8">
          <div className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-4">
            WHAT CHANGED
          </div>
          <ul className="font-inter text-base text-white leading-[1.7] space-y-2">
            {CHANGES.map((c) => (
              <li key={c}>- {c}</li>
            ))}
          </ul>
        </div>
        <p className="font-space font-bold text-2xl lg:text-3xl text-white mb-8 leading-[1.3]">
          Result: $1.2M+ liquidity unlocked in 90 days
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener"
          className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
        >
          SEE IF YOUR NUMBERS LOOK LIKE THIS
        </a>
      </div>
    </section>
  );
}
