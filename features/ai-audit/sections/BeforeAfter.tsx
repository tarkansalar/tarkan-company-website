export default function BeforeAfter() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          Before and after.
        </p>

        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-12 leading-[1.2] text-white">
          The shift in 30 minutes.
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-card-bg border-l-4 border-supporting/40 p-7">
            <h3 className="font-space font-bold text-xl text-supporting mb-5 leading-[1.3]">
              Before the audit.
            </h3>
            <ul className="space-y-3 pl-0">
              <li className="border-l-4 border-supporting/40 pl-5 font-inter text-[16px] leading-[1.55] text-supporting italic">
                I don&apos;t trust my numbers fully
              </li>
              <li className="border-l-4 border-supporting/40 pl-5 font-inter text-[16px] leading-[1.55] text-supporting">
                Something feels off, but you cannot see exactly where
              </li>
              <li className="border-l-4 border-supporting/40 pl-5 font-inter text-[16px] leading-[1.55] text-supporting">
                Your team has data everywhere
              </li>
              <li className="border-l-4 border-supporting/40 pl-5 font-inter text-[16px] leading-[1.55] text-supporting">
                AI feels noisy and unclear
              </li>
              <li className="border-l-4 border-supporting/40 pl-5 font-inter text-[16px] leading-[1.55] text-supporting">
                Tools are stacking up
              </li>
              <li className="border-l-4 border-supporting/40 pl-5 font-inter text-[16px] leading-[1.55] text-supporting">
                You are not sure what to fix first
              </li>
            </ul>
          </div>

          <div className="bg-card-bg border-l-4 border-neon p-7">
            <h3 className="font-space font-bold text-xl text-neon mb-5 leading-[1.3]">
              After the audit.
            </h3>
            <ul className="space-y-3 pl-0">
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Your top likely leaks are named
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Your numbers have more context
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Your AI/tool stack is clearer
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                You know what to ignore
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                You know what to fix first
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                You have a simple 7-30 day direction
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 space-y-1 leading-[1.3]">
          <p className="font-space font-bold text-xl text-neon">
            That is the shift.
          </p>
          <p className="font-space font-bold text-xl text-supporting">
            From guessing.
          </p>
          <p className="font-space font-bold text-2xl text-neon">
            To knowing what deserves attention first.
          </p>
        </div>
      </div>
    </section>
  );
}
