import { WEBINAR_REGISTRATION_URL, WEBINAR_EVENT_LABEL } from "@/lib/constants";

export default function FinalClose() {
  return (
    <>
      {/* One Last Thing Section */}
      <section className="py-24 lg:py-32 border-b border-neon/15">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-6">
            One Last Thing.
          </h2>
          <div className="space-y-6 font-inter text-[18px] lg:text-xl leading-[1.6] text-supporting">
            <p>
              Everything is changing right now. AI is rewriting how customers buy and how companies operate. Chasing every change is a losing game.
            </p>
            <p>
              There&apos;s exactly one winning move: <strong className="text-white">find what won&apos;t change for your customer - and build your company on it.</strong>
            </p>
            <p>
              That&apos;s what this hour is. The simplest, fastest, most important move you can make in an AI-driven world.
            </p>
            <p className="italic mt-8">
              You&apos;ll spend this hour anyway - in meetings, firefighting, explaining. Spend it finding your Code instead.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="border-l-4 border-neon pl-5 mb-10">
            <div className="font-space font-bold text-lg sm:text-xl text-white leading-[1.35]">
              LIVE - {WEBINAR_EVENT_LABEL}
            </div>
            <div className="font-inter text-sm text-supporting mt-1">
              Live only &middot; Free &middot; 3 Hot Seats
            </div>
          </div>

          <a
            href={WEBINAR_REGISTRATION_URL}
            target="_blank"
            rel="noopener"
            className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
          >
            CLAIM MY FREE SEAT
          </a>

          {/* Remove this line unless the platform seat cap is genuinely true. */}
          <p className="font-inter text-sm italic text-supporting mt-6">
            Seats are capped by the platform. When it&apos;s full, it&apos;s
            full.
          </p>
        </div>
      </section>
    </>
  );
}
