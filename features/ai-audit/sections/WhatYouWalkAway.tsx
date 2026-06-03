export default function WhatYouWalkAway() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          What you walk away with.
        </p>

        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-12 leading-[1.2] text-white">
          Three things in 30 minutes.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card-bg border-l-4 border-neon p-6">
            <p className="font-space font-extrabold text-4xl text-neon mb-3">
              1
            </p>
            <h3 className="font-space font-bold text-xl text-white mb-3 leading-[1.3]">
              Your Profit Leak Snapshot
            </h3>
            <p className="font-inter text-[15px] leading-[1.55] text-supporting">
              Where cash, margin, time, or attention may be leaking inside the
              business.
            </p>
          </div>

          <div className="bg-card-bg border-l-4 border-neon p-6">
            <p className="font-space font-extrabold text-4xl text-neon mb-3">
              2
            </p>
            <h3 className="font-space font-bold text-xl text-white mb-3 leading-[1.3]">
              Your AI/Tool Stack Read
            </h3>
            <p className="font-inter text-[15px] leading-[1.55] text-supporting">
              What to use, what to cancel, what to ignore, and where AI actually
              belongs.
            </p>
          </div>

          <div className="bg-card-bg border-l-4 border-neon p-6">
            <p className="font-space font-extrabold text-4xl text-neon mb-3">
              3
            </p>
            <h3 className="font-space font-bold text-xl text-white mb-3 leading-[1.3]">
              Your Fix-First Plan
            </h3>
            <p className="font-inter text-[15px] leading-[1.55] text-supporting">
              The first 1-3 moves I would make if this were my business.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 space-y-2">
          <p className="font-inter text-[17px] leading-[1.6] text-white">
            Not a theory.
          </p>
          <p className="font-inter text-[17px] leading-[1.6] text-white">
            Not a dashboard.
          </p>
          <p className="font-space font-bold text-2xl text-neon">
            A clear direction.
          </p>
        </div>
      </div>
    </section>
  );
}
