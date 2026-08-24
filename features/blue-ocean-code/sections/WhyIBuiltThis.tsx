import { PORTRAIT_IMG } from "../data/images";

export default function WhyIBuiltThis() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-space font-bold text-4xl lg:text-5xl text-white leading-[1.2]">
              I know what happens without it.
            </h2>

            <div className="lg:hidden bg-card-bg border-l-4 border-neon overflow-hidden">
              <img
                src={PORTRAIT_IMG}
                alt="Tarkan Salar"
                className="w-full h-full object-cover min-h-[400px]"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="border-t border-white/10 bg-white/[0.03] px-4 py-2.5 text-center">
                <p className="font-inter text-sm text-white font-medium tracking-wide">
                  Tarkan Salar
                </p>
              </div>
            </div>

            <div className="font-inter text-[17px] leading-[1.6] space-y-6">
              <p>
                I&apos;ve been there. Too many decisions. Too many directions.
                Too much noise.
              </p>
              <p>
                I was so burned out by decisions that I once passed on a{" "}
                <strong className="text-white">$50M offer</strong>.
              </p>
              <p>
                Looking back, I wish I had something simple that told me:{" "}
                <em className="text-white">
                  This matters. This doesn&apos;t. Focus here.
                </em>
              </p>
              <p className="font-space font-bold text-xl text-white pt-2">
                That&apos;s what I want to give you.
              </p>
            </div>
          </div>

          <div className="hidden lg:block bg-card-bg border-l-4 border-neon overflow-hidden">
            <img
              src={PORTRAIT_IMG}
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
