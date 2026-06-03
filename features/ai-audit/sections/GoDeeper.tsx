export default function GoDeeper() {
  const killScaleTestFix = ["Kill", "Scale", "Test", "Fix"];

  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          If you want to go deeper later.
        </p>

        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-10 leading-[1.2] text-white">
          The free audit is the first pass.
        </h2>

        <div className="font-inter text-[17px] leading-[1.6] text-white space-y-4 mb-8">
          <p>It helps you see where the leak may be.</p>
          <p>Some founders take the summary and fix it themselves.</p>
          <p className="font-space font-bold text-xl text-neon">
            Some ask for deeper help.
          </p>
          <p>
            If that happens, we can talk about the full 80/20 Profit AI process
            later.
          </p>
          <p>
            That is where we connect your SKUs, margins, inventory, CAC,
            suppliers, and product decisions into one clear decision engine.
          </p>
          <p>So you know what to:</p>
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

        <div className="font-inter text-[17px] leading-[1.6] text-white space-y-4">
          <p>But first, you should see how I think.</p>
          <p className="font-space font-bold text-xl text-neon leading-[1.3]">
            That is why the audit comes first.
          </p>
        </div>
      </div>
    </section>
  );
}
