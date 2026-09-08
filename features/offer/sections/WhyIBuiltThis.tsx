import { PORTRAIT_IMG } from "../data/images";

export default function WhyIBuiltThis() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-space font-bold text-4xl lg:text-5xl text-white leading-[1.2]">
              I know what happens without one.
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

            <p className="font-inter text-[17px] lg:text-lg leading-[1.6]">
              I&apos;ve been there.
            </p>

            <div className="font-inter text-[17px] lg:text-lg leading-[1.6] space-y-1 text-supporting">
              <p>Too many decisions.</p>
              <p>Too many directions.</p>
              <p>Too much noise.</p>
            </div>

            <p className="font-inter text-[17px] lg:text-lg leading-[1.6] text-white">
              I was so burned out by decisions that I once passed on a{" "}
              <strong>$50M offer</strong>.
            </p>

            <p className="font-inter text-[17px] lg:text-lg leading-[1.6] text-supporting">
              Looking back, I wish I&apos;d had something simple that said:
            </p>

            <div className="border-l-4 border-neon pl-6 font-space font-bold text-xl lg:text-2xl text-white leading-[1.35] space-y-1">
              <p>This matters.</p>
              <p>This doesn&apos;t.</p>
              <p>Focus here.</p>
            </div>

            <div className="font-inter text-[17px] lg:text-lg leading-[1.6] space-y-2">
              <p>That&apos;s what I built for myself.</p>
              <p className="font-space font-bold text-xl text-white">
                That&apos;s what you get in 30 minutes.
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
