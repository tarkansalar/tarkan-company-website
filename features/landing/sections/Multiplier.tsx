import { MULTIPLIER_IMG } from "../data/images";

export default function Multiplier() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-space font-bold text-4xl lg:text-5xl leading-[1.2]">
              The system shows you the truth.
              <br />
              The call shows you what to do with it.
            </h2>
            <div className="lg:hidden bg-card-bg border-l-4 border-neon overflow-hidden">
              <img
                src={MULTIPLIER_IMG}
                alt="Tarkan Salar"
                className="w-full h-full object-cover min-h-[500px]"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="border-t border-white/10 bg-white/[0.03] px-4 py-2.5 text-center">
                <p className="font-inter text-sm text-white font-medium tracking-wide">
                  Tarkan Salar
                </p>
              </div>
            </div>
            <div className="font-inter text-[17px] leading-[1.6] space-y-6">
              <p>After you get your report:</p>
              <p>
                You get <strong className="text-white">90 minutes with me</strong>
                <br />+{" "}
                <strong className="text-white">30-minute follow-up</strong>
              </p>
              <p>
                No slides.
                <br />
                No generic advice.
              </p>
              <p>
                I built an 8-figure brand from scratch. Created a world-first
                invention in denim. Designed and produced in my own factories
                for Louis Vuitton, Adidas, Zara, H&amp;M.
              </p>
              <p>
                Then someone offered me €50M to exit.
                <br />
                I turned it down. I was too close to my own business and burnt
                out.
              </p>
              <p>
                What came after was 12,000 hours of self-development - studying
                why some businesses compound and others just get bigger and
                more complicated.
              </p>
              <p className="font-space font-bold text-lg text-white leading-[1.4] py-2">
                This 90-minute call is where 30 years of battle experience
                meets your specific numbers and your questions.
              </p>
              <p>
                You ask anything about your business -
                <br />
                and get answers based on what I&apos;ve seen inside real
                P&amp;Ls at scale - not theory applied generically, but your
                business, with real operator context.
              </p>
              <p>This is where most of the value gets extracted.</p>
            </div>
          </div>
          <div className="hidden lg:block bg-card-bg border-l-4 border-neon overflow-hidden">
            <img
              src={MULTIPLIER_IMG}
              alt="Tarkan Salar"
              className="w-full h-full object-cover min-h-[500px]"
              style={{ objectPosition: "center 20%" }}
            />
            <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3 text-center">
              <p className="font-inter text-sm text-white font-medium tracking-wide">
                Tarkan Salar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
