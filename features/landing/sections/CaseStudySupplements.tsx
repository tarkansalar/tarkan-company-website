import { BOOKING_URL } from "@/lib/constants";

type Metric = {
  label: string;
  value: string;
  sub?: string;
  span?: string;
};

const METRICS: Metric[] = [
  { label: "LTV:CAC", value: "1.59 : 1" },
  { label: "CONTRIBUTION MARGIN", value: "18%" },
  { label: "DEAD INVENTORY", value: "$215,600", sub: "(22%)" },
  {
    label: "INVENTORY TURNOVER",
    value: "2.9x/yr",
    sub: "(healthy: >8x)",
  },
  {
    label: "SUPPLIER RISK",
    value: "78%",
    sub: "from one factory in China",
    span: "sm:col-span-2 lg:col-span-1",
  },
];

const CHANGES = [
  "Ranked all 47 SKUs by actual profit contribution",
  "Kill List: 3 SKUs → $134,000 to unlock",
  "Found cannibal product competing with #1 seller",
  "Subscription retention fix mapped",
  "US supplier activated as testing engine",
];

export default function CaseStudySupplements() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-3xl lg:text-4xl text-white mb-12 leading-[1.2]">
          $15M SUPPLEMENTS BRAND - 48 HOURS AFTER USING 80/20 PROFIT AI
        </h2>
        <div className="bg-card-bg border-l-[3px] border-neon p-8 lg:p-10 mb-8">
          <div className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-3">
            WHAT JAMES THOUGHT
          </div>
          <p className="font-inter text-lg text-white italic leading-[1.5]">
            &ldquo;I feel like I&apos;m guessing which products are actually
            making me money.&rdquo;
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className={`bg-card-bg border-l-[3px] border-neon p-6 ${
                m.span ?? ""
              }`}
            >
              <div className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">
                {m.label}
              </div>
              <div className="font-space font-extrabold text-3xl text-neon">
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
        <div className="font-inter text-[17px] leading-[1.6] space-y-2 mb-8">
          <p>47 SKUs on the shelf. 3 making real money.</p>
          <p>
            The other 44 trapping cash and compressing every margin in the
            business.
          </p>
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
          Result: $215,600 trapped cash identified. Kill List actioned. 30-day
          plan locked - in one session.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener"
          className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
        >
          FIND OUT WHAT&apos;S TRAPPED IN YOUR BUSINESS
        </a>
      </div>
    </section>
  );
}
