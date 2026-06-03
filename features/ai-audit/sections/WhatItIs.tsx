export default function WhatItIs() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          What this actually is.
        </p>

        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-8 leading-[1.2] text-white">
          This is a Profit + AI Leak Audit.
        </h2>

        <p className="font-inter text-[17px] leading-[1.6] text-white mb-10">
          It looks at two things.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card-bg border-l-4 border-neon p-7">
            <p className="font-space font-extrabold text-4xl text-neon mb-3">
              1
            </p>
            <h3 className="font-space font-bold text-2xl text-white mb-4 leading-[1.3]">
              Profit leaks.
            </h3>
            <p className="font-inter text-[16px] leading-[1.6] text-supporting">
              Margin. Cash. Inventory. SKUs. Suppliers. Returns. Ad spend.
              Launch speed. Decision bottlenecks.
            </p>
          </div>

          <div className="bg-card-bg border-l-4 border-neon p-7">
            <p className="font-space font-extrabold text-4xl text-neon mb-3">
              2
            </p>
            <h3 className="font-space font-bold text-2xl text-white mb-4 leading-[1.3]">
              AI/tool leaks.
            </h3>
            <div className="font-inter text-[16px] leading-[1.6] text-supporting space-y-2">
              <p>Tools you pay for but barely use.</p>
              <p>AI workflows your team tested once and abandoned.</p>
              <p>Manual work that should be simplified.</p>
              <p>Complexity that does not create profit.</p>
            </div>
          </div>
        </div>

        <div className="font-space font-bold text-2xl lg:text-3xl text-white leading-[1.3] space-y-3 mb-8 mt-10">
          <p>The goal is not to make you &apos;more AI.&apos;</p>
          <p>
            The goal is to make the business clearer, faster, and more
            profitable.
          </p>
        </div>

        <div className="font-space font-extrabold text-3xl lg:text-4xl text-neon space-y-2 leading-[1.2]">
          <p>Profit first.</p>
          <p>AI second.</p>
        </div>
      </div>
    </section>
  );
}
