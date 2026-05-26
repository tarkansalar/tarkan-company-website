import { WEBINAR_HOT_SEATS } from "@/lib/constants";
import { WORKSHOP_IMG } from "../data/images";

export default function HowItRuns() {
  return (
    <section className="bg-dark-bg py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="font-space font-bold text-[11px] tracking-[0.2em] uppercase text-neon mb-6">
          HOW THE SESSION RUNS
        </div>
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-12">
          90 minutes. Live. No replay.
        </h2>

        <div className="bg-card-bg border-l-4 border-neon overflow-hidden mb-12">
          <img
            src={WORKSHOP_IMG}
            alt="Workshop with elite entrepreneurs - Dubai Harbour"
            className="w-full object-cover aspect-[16/9]"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3 text-center">
            <p className="font-inter text-sm text-white font-medium tracking-wide">
              Workshop with elite entrepreneurs - Dubai Harbour
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card-bg border-l-4 border-neon p-7 lg:p-8">
            <div className="font-space font-extrabold text-4xl text-neon mb-3">
              45 MIN
            </div>
            <div className="font-space font-bold text-xl text-white mb-4 leading-[1.3]">
              The full map.
            </div>
            <p className="font-inter text-[17px] leading-[1.65] text-supporting">
              No fluff. The shift, both ends to defend (production + customer),
              the order to build them in, what to stop doing immediately.
            </p>
          </div>

          <div className="bg-card-bg border-l-4 border-neon p-7 lg:p-8">
            <div className="font-space font-extrabold text-4xl text-neon mb-3">
              45 MIN
            </div>
            <div className="font-space font-bold text-xl text-white mb-4 leading-[1.3]">
              {WEBINAR_HOT_SEATS} founders, {WEBINAR_HOT_SEATS} bottlenecks,{" "}
              {WEBINAR_HOT_SEATS} direct answers.
            </div>
            <p className="font-inter text-[17px] leading-[1.65] text-supporting">
              {WEBINAR_HOT_SEATS} founders, on the call, on camera, in front of
              the room. Not a coaching upsell. The actual answer. The actual
              sequence. The actual call to make this week.
            </p>
          </div>
        </div>

        <p className="font-inter text-[18px] lg:text-xl leading-[1.6] text-white max-w-3xl">
          Supply decision, brand positioning, margin call, &ldquo;sue or
          out-execute&rdquo; - bring it. I&apos;ve made every one of those with
          real money on the table.
        </p>
      </div>
    </section>
  );
}
