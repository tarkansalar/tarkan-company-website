import {
  WEBINAR_REGISTRATION_URL,
  WEBINAR_EVENT_ISO,
  WEBINAR_EVENT_LABEL,
  WEBINAR_SEAT_CAP,
} from "@/lib/constants";
import CountdownTimer from "../components/CountdownTimer";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-neon/15">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="font-space font-extrabold text-[12px] sm:text-sm tracking-[0.18em] uppercase text-neon mb-8">
          FREE LIVE WEBINAR FOR FASHION, BEAUTY AND LIFESTYLE FOUNDERS
        </div>

        <h1 className="font-space font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-[-0.02em] text-white mb-10">
          The Factory That Made Your Product Is Now Building The Brand That
          Replaces You
        </h1>

        <p className="font-inter text-lg sm:text-xl lg:text-2xl text-supporting leading-[1.45] max-w-3xl mb-10">
          A 90-minute live briefing for fashion, beauty, and lifestyle founders
          doing{" "}
          <strong className="text-white font-semibold">$2M to $50M+</strong>{" "}
          who can feel their margins compressing - and know something bigger is
          coming.
        </p>

        <div className="mb-10">
          <CountdownTimer targetIso={WEBINAR_EVENT_ISO || undefined} />
        </div>

        <div className="border-l-4 border-neon pl-5 mb-10">
          <div className="font-space font-bold text-lg sm:text-xl text-white leading-[1.35]">
            LIVE - {WEBINAR_EVENT_LABEL}
          </div>
          <div className="font-inter text-sm text-supporting mt-1">
            Capped at {WEBINAR_SEAT_CAP} founders. No replay guaranteed.
          </div>
        </div>

        <a
          href={WEBINAR_REGISTRATION_URL}
          className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
        >
          CLAIM MY SEAT - FREE
        </a>
      </div>
    </section>
  );
}
