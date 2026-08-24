import CaseStudyBlock, {
  SUPPLEMENTS,
} from "../components/CaseStudyBlock";

export default function WithWithoutCode() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Without */}
          <div className="bg-card-bg border-l-4 border-white/20 p-8">
            <h2 className="font-space font-bold text-3xl lg:text-4xl text-white mb-8 leading-[1.2]">
              Without a Code.
            </h2>
            <div className="font-inter text-[17px] leading-[1.6] space-y-5 text-supporting">
              <p>
                Your mission says one thing. Marketing goes one direction. Sales
                has another priority. Operations another.
              </p>
              <p>
                Not because anyone is doing something wrong - but because there
                is no single standard to measure decisions against.
              </p>
              <p>
                The result: too many decisions, too many meetings, too much
                firefighting, a positioning that keeps changing - and customers
                who don&apos;t immediately understand why they should choose you.
              </p>
            </div>
          </div>

          {/* With */}
          <div className="bg-card-bg border-l-4 border-neon p-8">
            <h2 className="font-space font-bold text-3xl lg:text-4xl text-white mb-8 leading-[1.2]">
              With a Code.
            </h2>
            <div className="font-inter text-[17px] leading-[1.6] space-y-5 text-supporting">
              <p>Everyone has one reference point:</p>
              <p className="font-space font-bold text-xl text-neon leading-[1.3]">
                Does this decision strengthen our Code - or weaken it?
              </p>
              <p>Marketing uses it. Sales uses it. Operations uses it.</p>
              <p>
                And your customers experience the same difference - again and
                again. That&apos;s what builds repeat purchase and lifetime
                value.
              </p>
            </div>
          </div>
        </div>

        {/*
          Proof slot 2 (copy: "[SECOND REAL CLIENT TESTIMONIAL - one line,
          specific result]"). Filled with the supplements case study.
        */}
        <div className="mt-16 pt-12 border-t border-neon/15">
          <CaseStudyBlock study={SUPPLEMENTS} />
        </div>
      </div>
    </section>
  );
}
