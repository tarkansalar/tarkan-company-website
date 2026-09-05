import {
  WEBINAR_REGISTRATION_URL,
  WEBINAR_EVENT_ISO,
  WEBINAR_EVENT_LABEL,
} from "@/lib/constants";
import CountdownTimer from "../components/CountdownTimer";
import { TEASER_VIDEO, VSL_VIDEO } from "../data/images";

export default function HeroMain() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-neon/15">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Eyebrow */}
        <div className="font-space font-extrabold text-[12px] sm:text-sm tracking-[0.18em] uppercase text-neon mb-6">
          THE BLUE OCEAN CODE™ LIVE EVENT
        </div>

        {/* Audience */}
        <p className="font-inter text-lg sm:text-xl lg:text-2xl text-supporting leading-[1.45] max-w-3xl mb-12">
          For founders and leaders of consumer brands:{" "}
          <strong className="text-white">
            Beauty. Health &amp; wellness. Apparel. Food &amp; beverage.
            Lifestyle. And more.
          </strong>
        </p>

        {/* Webinar VSL - landscape 16:9, cover frame at 1s */}
        <video
          src={`${VSL_VIDEO}#t=1`}
          controls
          playsInline
          preload="metadata"
          className="w-full aspect-video bg-card-bg border-l-4 border-neon object-cover mb-12"
        />

        {/* Pain Questions */}
        <div className="mb-12 space-y-4">
          <p className="font-space font-bold text-lg sm:text-xl lg:text-2xl text-neon leading-[1.4] tracking-[0.02em]">
            Are your margins squeezed left and right - tariffs, platforms, rising ad costs?
          </p>
          <p className="font-space font-bold text-lg sm:text-xl lg:text-2xl text-neon leading-[1.4] tracking-[0.02em]">
            Is your customer acquisition cost at a level you&apos;d never have accepted three years ago?
          </p>
          <p className="font-space font-bold text-lg sm:text-xl lg:text-2xl text-neon leading-[1.4] tracking-[0.02em]">
            Do you want less firefighting - and more impact?
          </p>
        </div>

        {/* Bridge */}
        <p className="font-inter text-lg sm:text-xl lg:text-2xl text-supporting leading-[1.45] max-w-3xl mb-10">
          The squeeze isn&apos;t coming from your supply chain or your ad account. <strong className="text-white">It&apos;s coming from a problem you haven&apos;t named yet.</strong>
        </p>

        {/* Big Claim */}
        <h1 className="font-space font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-[-0.02em] text-white mb-10">
          We live in a <span className="text-neon">3-second world</span>. If customers don&apos;t see what you stand for in 3 seconds, you&apos;re gone.
        </h1>

        {/* Subheading */}
        <p className="font-inter text-lg sm:text-xl lg:text-2xl text-supporting leading-[1.45] max-w-3xl mb-10">
          In 60 minutes, find the 2&ndash;3 words your entire company should run on - the same way Amazon runs on &ldquo;price &amp; convenience&rdquo; and Apple runs on &ldquo;simplicity &amp; design.&rdquo; <strong className="text-white">What you stand for is how you stand out.</strong>
        </p>

        {/* Teaser Video - portrait 9:16 */}
        <div className="mb-10">
          <video
            src={`${TEASER_VIDEO}#t=1`}
            controls
            playsInline
            preload="metadata"
            className="w-full max-w-[320px] mx-auto aspect-[9/16] bg-card-bg border-l-4 border-neon object-cover"
          />
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
            Live only &middot; Free
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
