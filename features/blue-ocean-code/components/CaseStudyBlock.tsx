type Metric = {
  label: string;
  value: string;
  sub?: string;
  span?: string;
};

export type CaseStudy = {
  heading: string;
  quoteLabel: string;
  quote: string;
  metrics: Metric[];
  lines: string[];
  changes: string[];
  result: string;
};

export const STREETWEAR: CaseStudy = {
  heading: "$25M STREETWEAR BRAND - 48 HOURS AFTER USING 80/20 PROFIT AI",
  quoteLabel: "WHAT SOFIA THOUGHT",
  quote: "We're growing. Ads are working.",
  metrics: [
    { label: "LTV:CAC", value: "1.66 : 1" },
    { label: "ROAS", value: "2.65x", sub: "(unhealthy)" },
    { label: "DEAD INVENTORY", value: "$840K", sub: "(30%)" },
    { label: "SKU COUNT", value: "95", sub: "(too complex)" },
  ],
  lines: [
    "They were acquiring customers that barely paid back",
    "While sitting on nearly $1M in dead stock",
  ],
  changes: [
    "Killed 22 SKUs",
    "Identified 15 real profit drivers",
    "Liquidated trapped inventory",
    "Refocused spend",
  ],
  result: "Result: $1.2M+ liquidity unlocked in 90 days",
};

export const SUPPLEMENTS: CaseStudy = {
  heading: "$15M SUPPLEMENTS BRAND - 48 HOURS AFTER USING 80/20 PROFIT AI",
  quoteLabel: "WHAT JAMES THOUGHT",
  quote: "I feel like I'm guessing which products are actually making me money.",
  metrics: [
    { label: "LTV:CAC", value: "1.59 : 1" },
    { label: "CONTRIBUTION MARGIN", value: "18%" },
    { label: "DEAD INVENTORY", value: "$215,600", sub: "(22%)" },
    { label: "INVENTORY TURNOVER", value: "2.9x/yr", sub: "(healthy: >8x)" },
    {
      label: "SUPPLIER RISK",
      value: "78%",
      sub: "from one factory in China",
      span: "sm:col-span-2 lg:col-span-1",
    },
  ],
  lines: [
    "47 SKUs on the shelf. 3 making real money.",
    "The other 44 trapping cash and compressing every margin in the business.",
  ],
  changes: [
    "Ranked all 47 SKUs by actual profit contribution",
    "Kill List: 3 SKUs → $134,000 to unlock",
    "Found cannibal product competing with #1 seller",
    "Subscription retention fix mapped",
    "US supplier activated as testing engine",
  ],
  result:
    "Result: $215,600 trapped cash identified. Kill List actioned. 30-day plan locked - in one session.",
};

export default function CaseStudyBlock({ study }: { study: CaseStudy }) {
  return (
    <div>
      <h3 className="font-space font-bold text-xl lg:text-2xl text-white mb-8 leading-[1.2]">
        {study.heading}
      </h3>

      <div className="bg-card-bg border-l-4 border-neon p-6 lg:p-8 mb-6">
        <div className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-3">
          {study.quoteLabel}
        </div>
        <p className="font-inter text-lg text-white italic leading-[1.5]">
          &ldquo;{study.quote}&rdquo;
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {study.metrics.map((m) => (
          <div
            key={m.label}
            className={`bg-card-bg border-l-4 border-neon p-5 ${m.span ?? ""}`}
          >
            <div className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">
              {m.label}
            </div>
            <div className="font-space font-extrabold text-2xl text-neon">
              {m.value}
            </div>
            {m.sub && (
              <div className="font-inter text-xs text-supporting mt-1">
                {m.sub}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="font-inter text-[16px] leading-[1.6] text-supporting space-y-2 mb-6">
        {study.lines.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </div>

      <div className="bg-card-bg border-l-4 border-neon p-6 lg:p-8 mb-6">
        <div className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-4">
          WHAT CHANGED
        </div>
        <ul className="font-inter text-base text-white leading-[1.7] space-y-2">
          {study.changes.map((c) => (
            <li key={c}>- {c}</li>
          ))}
        </ul>
      </div>

      <p className="font-space font-bold text-xl lg:text-2xl text-white leading-[1.3]">
        {study.result}
      </p>
    </div>
  );
}
