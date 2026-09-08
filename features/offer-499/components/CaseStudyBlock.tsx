export type CaseStudy = {
  brand: string;
  subhead: string;
  quoteLabel: string;
  quote: string;
  /** What was actually going on underneath. */
  findings: string[];
  /** The framing line before the diagnosis. */
  tension: string[];
  diagnosisLead: string;
  diagnosis: string;
  changesLead: string;
  changes: string[];
  result: string;
  closing: string[];
};

export const STREETWEAR: CaseStudy = {
  brand: "$25M streetwear brand",
  subhead: "When one standard made the hard decisions obvious.",
  quoteLabel: "SOFIA THOUGHT",
  quote: "We're growing. Ads are working.",
  tension: ["But underneath the growth:"],
  findings: [
    "LTV:CAC was unhealthy.",
    "30% of inventory was effectively dead.",
    "And the SKU count had become too complex for the team to execute properly.",
  ],
  diagnosisLead:
    "They were acquiring customers that barely paid back - while sitting on nearly $1M in dead stock.",
  diagnosis:
    "The real problem wasn't a lack of data. It was a lack of a standard for deciding what deserved more capital - and what didn't.",
  changesLead: "Once that standard was clear:",
  changes: [
    "22 SKUs killed",
    "15 real profit drivers identified",
    "Trapped inventory liquidated",
    "Spend refocused",
  ],
  result: "Result: $1.2M+ in liquidity unlocked in 90 days.",
  closing: [
    "No new agency.",
    "No new hire.",
    "Better decisions from one clear standard.",
  ],
};

export const SUPPLEMENTS: CaseStudy = {
  brand: "$15M supplements brand",
  subhead: "When the numbers finally told one clear story.",
  quoteLabel: "JAMES THOUGHT",
  quote: "I feel like I'm guessing which products actually make me money.",
  tension: ["47 SKUs were on the shelf."],
  findings: [
    "Only 3 were making meaningful money.",
    "The other 44 were trapping cash and compressing margins.",
  ],
  diagnosisLead: "The business didn't need another report.",
  diagnosis:
    "It needed a clear standard for deciding: what deserves capital - and what doesn't?",
  changesLead: "Once that standard was applied:",
  changes: [
    "All 47 SKUs ranked by real profit contribution",
    "Kill List actioned → $134,000 unlocked",
    "Cannibal product found competing with the #1 seller",
    "Subscription retention fix mapped",
  ],
  result:
    "Result: $215,600 in trapped cash identified. Kill List executed. 30-day plan locked.",
  closing: [
    "The answers were already in the business.",
    "The standard made them impossible to ignore.",
  ],
};

export default function CaseStudyBlock({
  study,
  dark,
}: {
  study: CaseStudy;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-dark-bg py-24" : "py-24"}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-3xl lg:text-4xl text-white leading-[1.2]">
          {study.brand}
        </h2>
        <p className="font-inter text-[17px] lg:text-lg leading-[1.6] text-neon mt-3 mb-10">
          {study.subhead}
        </p>

        <div className="bg-card-bg border-l-4 border-neon p-8 mb-10">
          <div className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-3">
            {study.quoteLabel}
          </div>
          <p className="font-inter text-lg text-white italic leading-[1.5]">
            &ldquo;{study.quote}&rdquo;
          </p>
        </div>

        <div className="font-inter text-[17px] leading-[1.6] text-supporting space-y-4 mb-8">
          {study.tension.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>

        <ul className="space-y-4 mb-10">
          {study.findings.map((f) => (
            <li
              key={f}
              className="border-l-4 border-neon pl-5 font-inter text-[17px] leading-[1.6] text-white"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="font-inter text-[17px] leading-[1.6] text-supporting space-y-5 mb-10">
          <p>{study.diagnosisLead}</p>
          <p className="text-white">{study.diagnosis}</p>
        </div>

        <div className="bg-card-bg border-l-4 border-neon p-8 mb-10">
          <div className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-4">
            {study.changesLead}
          </div>
          <ul className="font-inter text-base text-white leading-[1.7] space-y-2">
            {study.changes.map((c) => (
              <li key={c}>&bull; {c}</li>
            ))}
          </ul>
        </div>

        <p className="font-space font-bold text-2xl lg:text-3xl text-white leading-[1.3] mb-8">
          {study.result}
        </p>

        <div className="font-inter text-[17px] leading-[1.6] text-supporting space-y-1">
          {study.closing.map((c) => (
            <p key={c}>{c}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
