import {
  WEBINAR_REGISTRATION_URL,
  WEBINAR_EVENT_ISO,
  WEBINAR_EVENT_LABEL,
} from "@/lib/constants";
import CountdownTimer from "@/features/webinar/components/CountdownTimer";

export default function HeroMain() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-neon/15">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Eyebrow */}
        <div className="font-space font-extrabold text-[12px] sm:text-sm tracking-[0.18em] uppercase text-neon mb-8">
          THE BLUE OCEAN CODE™ LIVE EVENT
        </div>

        {/* Pain Questions */}
        <div className="mb-12 space-y-4">
          <p className="font-space font-bold text-base sm:text-lg text-neon leading-[1.4] tracking-[0.02em]">
            Are your margins squeezed left and right — tariffs, platforms, rising ad costs?
          </p>
          <p className="font-space font-bold text-base sm:text-lg text-neon leading-[1.4] tracking-[0.02em]">
            Is your customer acquisition cost at a level you'd never have accepted three years ago?
          </p>
          <p className="font-space font-bold text-base sm:text-lg text-neon leading-[1.4] tracking-[0.02em]">
            Do you want less firefighting — and more impact?
          </p>
        </div>

        {/* Bridge */}
        <p className="font-inter text-lg lg:text-xl text-supporting leading-[1.6] max-w-3xl mb-10">
          The squeeze isn't coming from your supply chain or your ad account. <strong className="text-white">It's coming from a problem you haven't named yet.</strong>
        </p>

        {/* Big Claim */}
        <h1 className="font-space font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-[-0.02em] text-white mb-10">
          We live in a <span className="text-neon">3-second world</span>. If customers don't see what you stand for in 3 seconds, you're gone.
        </h1>

        {/* Subheading */}
        <p className="font-inter text-lg sm:text-xl lg:text-2xl text-supporting leading-[1.45] max-w-3xl mb-10">
          In 60 minutes, find the 2–3 words your entire company should run on — the same way Amazon runs on "price & convenience" and Apple runs on "simplicity & design." <strong className="text-white">What you stand for is how you stand out.</strong>
        </p>

        {/* Teaser Video */}
        <div className="mb-10 py-16 bg-card-bg border border-neon/15 rounded-lg flex items-center justify-center min-h-64">
          <div className="text-center">
            <p className="font-inter text-supporting mb-6">[TEASER VIDEO]</p>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-neon/10 rounded-full hover:bg-neon/20 transition">
              <svg className="w-10 h-10 text-neon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-10">
          <CountdownTimer targetIso={WEBINAR_EVENT_ISO || undefined} />
        </div>

        {/* Event Details Box */}
        <div className="border-l-4 border-neon pl-5 mb-10">
          <div className="font-space font-bold text-lg sm:text-xl text-white leading-[1.35]">
            LIVE - {WEBINAR_EVENT_LABEL}
          </div>
          <div className="font-inter text-sm text-supporting mt-1">
            Free live event. No replay guaranteed.
          </div>
        </div>

        {/* CTA */}
        <a
          href={WEBINAR_REGISTRATION_URL}
          target="_blank"
          rel="noopener"
          className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
        >
          CLAIM MY FREE SEAT
        </a>
      </div>
    </section>
  );
}
