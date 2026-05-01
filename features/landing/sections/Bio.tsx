import { BIO_IMG } from "../data/images";

export default function Bio() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="font-inter text-[17px] leading-[1.6] space-y-6">
              <p>I didn&apos;t start as a consultant.</p>
              <div className="lg:hidden bg-card-bg border-l-4 border-neon overflow-hidden my-4">
                <img
                  src={BIO_IMG}
                  alt="Workshop with elite entrepreneurs - Dubai Harbour"
                  className="w-full object-cover aspect-[4/3]"
                  style={{ objectPosition: "center 40%" }}
                />
                <div className="border-t border-white/10 bg-white/[0.03] px-4 py-2.5 text-center">
                  <p className="font-inter text-sm text-white font-medium tracking-wide">
                    Workshop with elite entrepreneurs - Dubai Harbour
                  </p>
                </div>
              </div>
              <p>
                I built an 8-figure brand. Created a world-first invention in
                denim. Designed and produced 50 million units in my own
                factories for Louis Vuitton, Adidas, Zara, H&amp;M.
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
              <p className="font-space font-bold text-xl lg:text-2xl text-white pt-4 leading-[1.3]">
                80/20 Profit AI is what came out of it.
              </p>
            </div>
          </div>
          <div className="hidden lg:block bg-card-bg border-l-4 border-neon overflow-hidden">
            <img
              src={BIO_IMG}
              alt="Workshop with elite entrepreneurs - Dubai Harbour"
              className="w-full object-cover aspect-[4/3]"
              style={{ objectPosition: "center 40%" }}
            />
            <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3 text-center">
              <p className="font-inter text-sm text-white font-medium tracking-wide">
                Workshop with elite entrepreneurs - Dubai Harbour
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
