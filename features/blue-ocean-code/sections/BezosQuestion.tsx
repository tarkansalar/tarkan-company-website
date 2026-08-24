export default function BezosQuestion() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl text-white mb-12 leading-[1.2]">
          What won&apos;t change for your customer in the next 10 years?
        </h2>

        <div className="font-inter text-[17px] leading-[1.6] space-y-6">
          <p>Jeff Bezos built Amazon around this question.</p>
          <p>
            Not what will change.{" "}
            <strong className="text-white">What won&apos;t change.</strong>
          </p>
          <p>
            Because if you know what your customers will always want - regardless
            of AI, trends or disruption - you can build your company around it.
          </p>
          <p>
            Right now everything is moving. AI is changing how customers buy, how
            we market, sell and operate.
          </p>
          <p className="font-space font-bold text-xl text-white">
            So what can you actually build around?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-card-bg border-l-4 border-neon p-8">
            <div className="font-space font-bold text-[11px] tracking-[0.12em] uppercase text-neon mb-4">
              AMAZON&apos;S CODE
            </div>
            <p className="font-space font-bold text-2xl text-white mb-3 leading-[1.3]">
              Price and convenience
            </p>
            <p className="font-inter text-[17px] leading-[1.6] text-supporting">
              Customer obsession at every touchpoint, frictionless at any cost.
            </p>
          </div>
          <div className="bg-card-bg border-l-4 border-neon p-8">
            <div className="font-space font-bold text-[11px] tracking-[0.12em] uppercase text-neon mb-4">
              APPLE&apos;S CODE
            </div>
            <p className="font-space font-bold text-2xl text-white mb-3 leading-[1.3]">
              Simplicity and design
            </p>
            <p className="font-inter text-[17px] leading-[1.6] text-supporting">
              Their why is the crossroads of technology and liberal arts; the
              code is how they make you feel it.
            </p>
          </div>
        </div>

        <div className="font-inter text-[17px] leading-[1.6] space-y-6">
          <p>
            Every great brand runs on one. Most just never wrote it down.
          </p>
        </div>

        <p className="font-space font-bold text-2xl lg:text-3xl text-white leading-[1.3] mt-12 border-l-4 border-neon pl-6">
          So what&apos;s yours? Find what should not change for your customer.
          Build your Blue Ocean Code&trade; around it. Then make the company live
          it.
        </p>
      </div>
    </section>
  );
}
