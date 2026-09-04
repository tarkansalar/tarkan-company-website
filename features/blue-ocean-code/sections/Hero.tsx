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
              The one standard your whole company runs on.
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
                In one 30-minute 1-on-1 session, we find the one thing your
                customers will always want from you.
              </p>
              <p>
                Then I turn it into your 1-page Blue Ocean Code&trade; - the
                standard your entire company can use to make better decisions.
              </p>
            </div>

            <div className="font-inter text-[17px] leading-[1.6] space-y-1 border-l-4 border-neon pl-5">
              <p>Your people measure themselves against it.</p>
              <p>Marketing, sales, and operations measure decisions against it.</p>
              <p>You measure everything against it.</p>
            </div>

            <div className="font-inter text-[17px] leading-[1.6] space-y-1">
              <p>
                First your team <strong className="text-white">reads</strong> it
                - in 10 seconds.
              </p>
              <p>
                Then they <strong className="text-white">feel</strong> it - in
                the first week.
              </p>
              <p>
                Then they <strong className="text-white">live</strong> it -
                without being told.
              </p>
            </div>

            <div className="font-space font-bold text-xl lg:text-2xl leading-[1.35] text-white">
              <p>Your Blue Ocean Code&trade; - delivered in 48 hours</p>
              <p className="text-neon">+ your 30-Day Activation Plan</p>
            </div>

            <p className="font-inter text-[17px] leading-[1.6] text-supporting">
              <strong className="text-white">$499. One time.</strong> If you
              don&apos;t walk away with a Code you&apos;d bet your business on,
              you get a full refund.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={BLUE_OCEAN_CODE_URL}
                target="_blank"
                rel="noopener"
                className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
              >
                FIND MY BLUE OCEAN CODE&trade; - $499
              </a>
              <p className="font-inter text-sm text-supporting">
                For consumer brands - beauty, health &amp; wellness, apparel,
                food &amp; beverage, lifestyle.
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
