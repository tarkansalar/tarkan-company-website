export default function ProofLens() {
  const killScaleTestFix = ["Kill", "Scale", "Test", "Fix"];

  const streetwearMetrics = [
    { label: "LTV:CAC", value: "1.66 : 1" },
    { label: "ROAS", value: "2.65x" },
    { label: "Dead inventory", value: "$840K" },
    { label: "SKU count", value: "95" },
  ];

  const streetwearChanges = [
    "Killed 22 SKUs",
    "Identified 15 real profit drivers",
    "Liquidated trapped inventory",
    "Refocused spend",
  ];

  const supplementsMetrics = [
    { label: "LTV:CAC", value: "1.59 : 1" },
    { label: "Contribution margin", value: "18%" },
    { label: "Dead inventory", value: "$215,600" },
    { label: "Inventory turnover", value: "2.9x/yr" },
    { label: "Supplier risk", value: "78% from one factory in China" },
  ];

  const supplementsChanges = [
    "Ranked all 47 SKUs by actual profit contribution",
    "Identified the kill list",
    "Found a cannibal product competing with the number one seller",
    "Mapped a subscription retention fix",
    "Activated supplier testing engine",
  ];

  return (
    <section id="proof" className="py-24 lg:py-32 border-b border-neon/15 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          Proof this lens works.
        </p>

        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-10 leading-[1.2] text-white">
          This is how I look at a business.
        </h2>

        <div className="font-inter text-[17px] leading-[1.6] text-white space-y-4 mb-8">
          <p>The free audit is a first-pass diagnosis.</p>
          <p>
            It helps you see where the leak may be, what deserves attention
            first, and where AI/tools actually fit.
          </p>
          <p>
            When this lens goes deeper, it connects SKUs, margins, inventory,
            CAC, suppliers, and product decisions to find what to:
          </p>
        </div>

        <ul className="space-y-3 pl-0 mb-8">
          {killScaleTestFix.map((item) => (
            <li
              key={item}
              className="border-l-4 border-neon pl-6 font-space font-bold text-xl text-neon"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="font-space font-bold text-xl text-white leading-[1.3] mb-12">
          Here is what that operator lens has found before.
        </p>

        {/* Case Study 1 - Streetwear */}
        <div className="bg-card-bg border-l-4 border-neon p-7 lg:p-8 mb-8">
          <p className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-4">
            $25M Streetwear Brand
          </p>

          <p className="font-inter text-[17px] text-white mb-3">
            What they thought:
          </p>
          <p className="font-inter italic text-white text-[17px] leading-[1.6] border-l-2 border-neon/40 pl-4 mb-6">
            &quot;We are growing. Ads are working.&quot;
          </p>

          <p className="font-inter text-[17px] text-white mb-4">
            What the numbers showed:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {streetwearMetrics.map((m) => (
              <div
                key={m.label}
                className="bg-darker-bg border-l-[3px] border-neon p-4"
              >
                <p className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">
                  {m.label}
                </p>
                <p className="font-space font-extrabold text-2xl text-neon leading-[1.1]">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          <p className="font-inter text-[17px] leading-[1.6] text-supporting mb-6">
            They were acquiring customers that barely paid back while sitting
            on nearly $1M in dead stock.
          </p>

          <p className="font-inter text-[17px] text-white mb-4">
            What changed:
          </p>
          <ul className="space-y-3 pl-0 mb-6">
            {streetwearChanges.map((item) => (
              <li
                key={item}
                className="border-l-4 border-neon pl-5 font-inter text-[17px] text-white leading-[1.6]"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="font-space font-bold text-xl lg:text-2xl text-neon leading-[1.3]">
            Result: $1.2M+ liquidity unlocked in 90 days
          </p>
        </div>

        {/* Case Study 2 - Supplements */}
        <div className="bg-card-bg border-l-4 border-neon p-7 lg:p-8">
          <p className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-4">
            $15M Supplements Brand
          </p>

          <p className="font-inter text-[17px] text-white mb-3">
            What they thought:
          </p>
          <p className="font-inter italic text-white text-[17px] leading-[1.6] border-l-2 border-neon/40 pl-4 mb-6">
            &quot;I feel like I am guessing which products are actually making
            me money.&quot;
          </p>

          <p className="font-inter text-[17px] text-white mb-4">
            What the numbers showed:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {supplementsMetrics.map((m) => (
              <div
                key={m.label}
                className="bg-darker-bg border-l-[3px] border-neon p-4"
              >
                <p className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">
                  {m.label}
                </p>
                <p className="font-space font-extrabold text-2xl text-neon leading-[1.1]">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          <p className="font-inter text-[17px] leading-[1.6] text-supporting mb-6">
            47 SKUs on the shelf. 3 making real money. The other 44 were
            trapping cash and compressing margin.
          </p>

          <p className="font-inter text-[17px] text-white mb-4">
            What changed:
          </p>
          <ul className="space-y-3 pl-0 mb-6">
            {supplementsChanges.map((item) => (
              <li
                key={item}
                className="border-l-4 border-neon pl-5 font-inter text-[17px] text-white leading-[1.6]"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="font-space font-bold text-xl lg:text-2xl text-neon leading-[1.3]">
            Result: $215,600 trapped cash identified and a 30-day action plan
            locked
          </p>
        </div>
      </div>
    </section>
  );
}
