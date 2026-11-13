import CtaButton from "../components/CtaButton";
import { Blob, FloatingProducts } from "../components/Visuals";
import { FOUNDER_PHOTO, FOUNDER_VSL_SRC, VP } from "../data/visuals";

// Poster: founder photo resized + converted by the Next image optimizer
// (same remotePatterns host as every other image), not the 500px PNG.
const FOUNDER_POSTER = `/_next/image?url=${encodeURIComponent(FOUNDER_PHOTO.src)}&w=640&q=70`;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[radial-gradient(60%_50%_at_85%_10%,rgba(251,107,168,0.16),transparent_70%),radial-gradient(50%_40%_at_0%_100%,rgba(251,107,168,0.10),transparent_70%)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-16 items-center">
          <div>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#fb6ba8] mb-6">
              Private Label Supplement Partnership
            </p>
            <h1 className="text-[clamp(1.875rem,1rem+4.5vw,3rem)] lg:text-[clamp(2.875rem,1.2rem+2.6vw,3.375rem)] font-extrabold uppercase leading-[1.06] tracking-[-0.02em] text-[#282828]">
              Your customers already buy supplements.{" "}
              <span className="text-[#fb6ba8]">Why are they buying someone else’s brand?</span>
            </h1>

            <div className="mt-8 space-y-4 text-[17px] sm:text-lg leading-[1.7] text-[#282828]/80 max-w-xl">
              <p>
                You already have their trust. You already have the customers. And they already
                spend money on supplements every month.
              </p>
              <p>
                But when they buy creatine, collagen, magnesium or other wellness products, they
                go somewhere else.
              </p>
              <p className="font-semibold text-[#282828]">
                Build your own supplement brand with products that stand apart - backed by direct
                factory relationships, manufacturing experience and product development designed
                around your customers.
              </p>
            </div>

            <p className="mt-6 border-l-2 border-[#fb6ba8] pl-5 text-[17px] leading-[1.7] text-[#282828] max-w-xl">
              You bring the customers and the relationship. We bring the manufacturing capability,
              product development and commercial positioning.
            </p>

            <div className="mt-10 space-y-4">
              <CtaButton />
              <p className="text-sm leading-[1.6] text-[#282828]/60 max-w-md">
                No obligation. We’ll look at your business and tell you honestly whether this
                makes commercial sense.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none pb-10 sm:pb-16 lg:pb-16">
            <Blob strong className="-right-24 -top-24 h-[420px] w-[420px]" />
            {/* Founder VSL (Teaser.mp4 from Tuan, public bucket URL, 1080x1920 = 9:16)
                in a 3D glass card. No autoplay, preload="none" so the 10 MB file only
                loads when the visitor presses play; the poster is the founder photo
                through the Next image optimizer (small webp). */}
            <div data-tilt="5" className="cg-tilt relative mx-auto w-[64%] max-w-[300px]">
              <div className="rounded-[30px] bg-white/70 p-2 ring-1 ring-white cg-card-shadow">
                <video
                  controls
                  playsInline
                  preload="none"
                  poster={FOUNDER_POSTER}
                  aria-label="Founder video: Tarkan Salar introduces the Canggus private label partnership"
                  className="block aspect-[9/16] w-full rounded-[24px] bg-[radial-gradient(70%_80%_at_50%_30%,#ffffff_0%,#fde3ef_55%,#f9c6dc_100%)] object-cover"
                >
                  <source src={FOUNDER_VSL_SRC} type="video/mp4" />
                </video>
              </div>
            </div>
            {/* Real products from the catalog, floating beside the card */}
            <FloatingProducts
              eager
              disc={false}
              sizes="(min-width: 1024px) 130px, (min-width: 640px) 120px, 26vw"
              // The card is a narrow 9:16 column in the middle, so the products
              // keep to the outer corners and stay clear of the video controls.
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%]"
              items={[
                // The card takes the middle 64% (max 300px), so every product
                // stays inside the outer 18% on each side, off the video controls.
                { p: VP.collagenGummy, pos: "left-[0%] bottom-[2%] w-[14%]", d: 0, r: -6, z: 2 },
                { p: VP.magnesiumDrops, pos: "left-[10%] bottom-[0%] w-[6%]", d: 1.2, r: 3, z: 3 },
                { p: VP.electrolyte, pos: "right-[0%] bottom-[4%] w-[15%]", d: 2.1, r: 5, z: 2 },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
