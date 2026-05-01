import { BOOKING_URL } from "@/lib/constants";
import { HERO_IMG } from "../data/images";
import BragBar from "../components/BragBar";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="font-space font-extrabold text-[13px] sm:text-sm tracking-[0.1em] uppercase text-neon">
              FOR DTC & OMNICHANNEL BRANDS DOING $3M+
            </div>
            <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-white">
              72% of business leaders say data has paralyzed their decision-making.
            </h1>
            <p className="font-inter text-sm text-neon italic">
              (Oracle, 14,000 leaders, 17 countries)
            </p>

            <div className="lg:hidden py-4 space-y-4">
              <div className="bg-card-bg border-l-4 border-neon overflow-hidden">
                <img
                  src={HERO_IMG}
                  alt="Tarkan Salar"
                  className="w-full h-full object-cover max-h-[320px]"
                  style={{ objectPosition: "center 15%" }}
                />
                <div className="border-t border-white/10 bg-white/[0.03] px-4 py-2.5 text-center">
                  <p className="font-inter text-sm text-white font-medium tracking-wide">
                    Tarkan Salar
                  </p>
                </div>
              </div>
              <BragBar />
            </div>

            <div className="font-inter text-[17px] leading-[1.6] space-y-4">
              <p>
                You don&apos;t have a data problem.
                <br />
                You have a &ldquo;what does this mean for my cash - and what do I do
                next?&rdquo; problem.
              </p>
              <p>
                Shopify shows revenue. Your sales team pushes new products. Your
                ads team shows ROAS. Your warehouse shows stock.
              </p>
              <p>
                None of them answer:{" "}
                <strong className="text-white">What do I do next?</strong>
              </p>
            </div>

            <p className="font-space font-bold text-xl lg:text-2xl leading-[1.3] text-white">
              That unanswered question is costing you more than you think.
            </p>

            <div className="space-y-3 pt-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener"
                className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
              >
                FIND MY TRAPPED CASH
              </a>
              <p className="font-inter text-sm text-supporting">
                48-hour turnaround. $25K guarantee.
              </p>
            </div>
          </div>

          <div className="hidden lg:block space-y-4">
            <div className="bg-card-bg border-l-4 border-neon overflow-hidden">
              <img
                src={HERO_IMG}
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
            <BragBar />
          </div>
        </div>
      </div>
    </section>
  );
}
