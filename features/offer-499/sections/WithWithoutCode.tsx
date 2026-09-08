export default function WithWithoutCode() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Without */}
          <div className="bg-card-bg border-l-4 border-white/20 p-8">
            <h2 className="font-space font-bold text-3xl lg:text-4xl text-white mb-8 leading-[1.2]">
              Without a Code
            </h2>
            <div className="font-inter text-[17px] leading-[1.6] space-y-4 text-supporting">
              <p>Your mission says one thing.</p>
              <p>Marketing goes one direction.</p>
              <p>Sales has another priority.</p>
              <p>Operations has its own.</p>
            </div>

            <div className="font-inter text-[17px] leading-[1.6] space-y-4 text-white mt-8">
              <p>Nobody&apos;s doing anything wrong.</p>
              <p>
                There&apos;s just no single standard to measure decisions
                against.
              </p>
            </div>

            <p className="font-inter text-[17px] leading-[1.6] text-supporting mt-8 mb-3">
              So you get:
            </p>
            <div className="font-inter text-[17px] leading-[1.6] space-y-1 text-white">
              <p>Too many meetings.</p>
              <p>Too much firefighting.</p>
              <p>Decisions reopened again and again.</p>
              <p>
                And customers who can&apos;t clearly say why they&apos;d choose
                you.
              </p>
            </div>
          </div>

          {/* With */}
          <div className="bg-card-bg border-l-4 border-neon p-8">
            <h2 className="font-space font-bold text-3xl lg:text-4xl text-white mb-8 leading-[1.2]">
              With a Code
            </h2>
            <p className="font-inter text-[17px] leading-[1.6] text-supporting mb-4">
              One question runs the company:
            </p>
            <p className="font-space font-bold text-xl lg:text-2xl text-neon leading-[1.3] mb-8">
              Does this strengthen our Code - or weaken it?
            </p>

            <div className="font-inter text-[17px] leading-[1.6] space-y-1 text-white mb-8">
              <p>Marketing uses it.</p>
              <p>Sales uses it.</p>
              <p>Ops uses it.</p>
              <p>New hires get it on day one.</p>
            </div>

            <div className="font-inter text-[17px] leading-[1.6] space-y-1 text-supporting mb-8">
              <p>And your customers feel the difference.</p>
              <p>Every touchpoint.</p>
              <p>Every time.</p>
            </div>

            <div className="font-inter text-[17px] leading-[1.6] space-y-1 text-white border-l-4 border-neon pl-5">
              <p>That&apos;s what builds consistency.</p>
              <p>That&apos;s what builds repeat purchase.</p>
              <p>That&apos;s what builds LTV.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
