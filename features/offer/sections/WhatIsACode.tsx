export default function WhatIsACode() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl text-white mb-6 leading-[1.2]">
          Every great brand runs on a standard.
        </h2>
        <p className="font-inter text-[17px] lg:text-lg leading-[1.6] text-supporting mb-12">
          Most never write theirs down.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card-bg border-l-4 border-neon p-8">
            <div className="font-space font-bold text-[11px] tracking-[0.12em] uppercase text-neon mb-4">
              AMAZON
            </div>
            <p className="font-inter text-[17px] leading-[1.6] text-supporting mb-4">
              Jeff Bezos built Amazon around a powerful question:
            </p>
            <p className="font-space font-bold text-2xl text-white mb-4 leading-[1.3]">
              What won&apos;t change?
            </p>
            <p className="font-inter text-[17px] leading-[1.6] text-supporting">
              While products, technology and customer expectations change, some
              principles stay constant.
            </p>
          </div>

          <div className="bg-card-bg border-l-4 border-neon p-8">
            <div className="font-space font-bold text-[11px] tracking-[0.12em] uppercase text-neon mb-4">
              APPLE
            </div>
            <p className="font-inter text-[17px] leading-[1.6] text-supporting mb-4">
              Apple built its brand around another kind of consistency:
            </p>
            <p className="font-space font-bold text-2xl text-white mb-4 leading-[1.3]">
              Simplicity you can feel.
            </p>
            <div className="font-inter text-[17px] leading-[1.6] text-supporting space-y-1">
              <p>The product.</p>
              <p>The packaging.</p>
              <p>The store.</p>
              <p>The experience.</p>
            </div>
          </div>
        </div>

        <div className="font-inter text-[17px] lg:text-lg leading-[1.6] space-y-6">
          <p className="font-space font-bold text-xl text-white">
            That&apos;s the power of a standard.
          </p>
          <p>Your brand has one too.</p>
          <p>
            It&apos;s already hiding in the decisions you make without thinking.
          </p>
        </div>

        <div className="border-l-4 border-neon pl-6 mt-10 font-space font-bold text-2xl lg:text-3xl text-white leading-[1.3] space-y-1">
          <p>We pull it out.</p>
          <p>Write it down.</p>
          <p>Make it operational.</p>
          <p className="text-neon pt-2">In 30 minutes.</p>
        </div>
      </div>
    </section>
  );
}
