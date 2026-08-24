import { BLUE_OCEAN_CODE_URL } from "@/lib/constants";
import { TEASER_VIDEO } from "../data/images";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="font-space font-extrabold text-[13px] sm:text-sm tracking-[0.1em] uppercase text-neon">
              THE BLUE OCEAN CODE&trade;
            </div>
            <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-white">
              Why customers choose your brand in 3 seconds - or never.
            </h1>

            <div className="lg:hidden py-4">
              <video
                src={`${TEASER_VIDEO}#t=1`}
                controls
                playsInline
                preload="metadata"
                className="w-full max-w-[380px] mx-auto aspect-[9/16] bg-card-bg border-l-4 border-neon object-cover"
              />
            </div>

            <div className="font-inter text-[17px] leading-[1.6] space-y-4">
              <p>
                Rising CAC. Copycat brands. Retailers squeezing margins.
              </p>
              <p>
                Marketing says one thing, sales another, operations a third - and
                the customer feels none of it.
              </p>
              <p>
                For consumer brands that want to stop competing on price, ads and
                discounts and start being{" "}
                <strong className="text-white">the obvious choice.</strong>
              </p>
              <p className="text-supporting">
                Beauty. Health &amp; wellness. Apparel. Food &amp; beverage.
                Lifestyle. And more.
              </p>
            </div>

            <p className="font-space font-bold text-xl lg:text-2xl leading-[1.3] text-white">
              30-minute session. Your Blue Ocean Code&trade;. 30-day activation
              plan. $499 - one time.
            </p>

            <div className="space-y-3 pt-4">
              <a
                href={BLUE_OCEAN_CODE_URL}
                target="_blank"
                rel="noopener"
                className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
              >
                FIND MY BLUE OCEAN CODE&trade; - $499
              </a>
              <p className="font-inter text-sm text-supporting">
                Delivered within 48 hours. Full refund guarantee.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Teaser trailer - portrait 9:16, cover frame at 1s */}
            <video
              src={`${TEASER_VIDEO}#t=1`}
              controls
              playsInline
              preload="metadata"
              className="w-full max-w-[460px] mx-auto aspect-[9/16] bg-card-bg border-l-4 border-neon object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
