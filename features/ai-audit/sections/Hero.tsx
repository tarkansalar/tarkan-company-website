import Link from "next/link";
import { BOOKING_URL, AUDIT_QUIZ_URL } from "@/lib/constants";
import { HERO_IMG } from "@/features/landing/data/images";

export default function Hero() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="font-space font-bold text-[12px] sm:text-sm tracking-[0.15em] uppercase text-neon mb-5">
              FREE PROFIT + AI LEAK AUDIT
            </p>

            <h2 className="font-space font-bold text-base lg:text-lg text-white mb-5 leading-[1.35]">
              For DTC and omnichannel founders doing $3M-$50M+
            </h2>

            <h1 className="font-space font-extrabold text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] text-white mb-6">
              you are not short on data. You are leaking profit in places your
              dashboards do not connect.
            </h1>

            <p className="font-inter text-base lg:text-lg text-supporting leading-[1.55] mb-7">
              In 30 minutes, I&apos;ll pinpoint your top 1-3 profit leaks and
              show you exactly where to start - no tools to buy, no AI hype,
              just context.
            </p>

            <p className="font-inter text-[15px] leading-[1.6] text-white mb-4">
              For founders tired of dashboards, AI noise, tool overload, and
              still not knowing:
            </p>

            <p className="font-space font-extrabold text-2xl lg:text-3xl text-neon mb-7 leading-[1.2]">
              &quot;What do I fix first?&quot;
            </p>

            <div className="font-inter text-[15px] leading-[1.55] text-white space-y-2 mb-8">
              <p>This is not AI consulting.</p>
              <p>It is a live operator audit.</p>
              <p>You tell me where the business feels messy.</p>
              <p>I look for the leaks.</p>
              <p>
                Then I show you what to fix, what to ignore, and where AI/tools
                actually belong.
              </p>
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="bg-neon text-black font-space font-bold px-7 py-3.5 text-base hover:bg-white transition-colors inline-block"
            >
              Book Free 30-Min Audit
            </a>

            <p className="font-inter text-sm text-supporting mt-4">
              Not ready for a call?{" "}
              <Link
                href={AUDIT_QUIZ_URL}
                className="font-space font-bold text-neon hover:text-white transition-colors"
              >
                Take 5-Min Quiz
              </Link>
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card-bg border-l-4 border-neon overflow-hidden">
              <img
                src={HERO_IMG}
                alt="Tarkan Salar"
                className="w-full aspect-[4/5] object-cover min-h-[400px] lg:min-h-[500px]"
              />
              <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3 text-center">
                <p className="font-inter text-sm text-white font-medium tracking-wide">
                  Tarkan Salar
                </p>
              </div>
            </div>

            <p className="font-space font-bold text-sm tracking-wide text-neon text-center leading-[1.6]">
              50M+ Units Produced &nbsp;&middot;&nbsp; 940 People Managed
              &nbsp;&middot;&nbsp; 4 Countries &nbsp;&middot;&nbsp; Louis
              Vuitton &middot; Adidas &middot; Zara &middot; H&amp;M
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
