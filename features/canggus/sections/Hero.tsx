import CtaButton from "../components/CtaButton";
import { Blob, FloatingProducts } from "../components/Visuals";
import { FOUNDER_VSL_SRC, VP } from "../data/visuals";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-60 bg-[radial-gradient(60%_50%_at_85%_10%,rgba(251,107,168,0.16),transparent_70%),radial-gradient(50%_40%_at_0%_100%,rgba(251,107,168,0.10),transparent_70%)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Tuan 13 Nov: on desktop the video card is as tall as the text block.
            The grid row is stretched (default), the right column is a size
            container with no height of its own, so it takes the text column's
            height; the card height = min(column height, column width x 16/9). */}
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16">
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

          <div className="relative mx-auto w-full max-w-[420px] pb-32 lg:pb-0 lg:max-w-none lg:[container-type:size]">
            <Blob strong className="-right-24 -top-24 h-[420px] w-[420px]" />
            {/* Founder VSL (Teaser.mp4 from Tuan, public bucket URL, 1080x1920 = 9:16)
                in a 3D glass card. Same as the main LP (blue-ocean-code Hero): no
                poster image, src#t=1 + preload="metadata", so the cover is the video
                frame at 1 s and the full file only streams when the visitor presses play.
                Phone/tablet: full width up to 420px, after the text. */}
            <div className="relative mx-auto w-full lg:absolute lg:inset-y-0 lg:left-1/2 lg:w-auto lg:-translate-x-1/2 lg:h-[min(100cqh,calc(100cqw*16/9))] lg:aspect-[9/16]">
              <div data-tilt="5" className="cg-tilt relative lg:h-full">
                <div className="rounded-[30px] bg-white/70 p-2 ring-1 ring-white cg-card-shadow lg:h-full">
                  <video
                    src={`${FOUNDER_VSL_SRC}#t=1`}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label="Founder video: Tarkan Salar introduces the Canggus private label partnership"
                    className="block aspect-[9/16] w-full lg:h-full lg:aspect-auto rounded-[24px] bg-[radial-gradient(70%_80%_at_50%_30%,#ffffff_0%,#fde3ef_55%,#f9c6dc_100%)] object-cover"
                  />
                </div>
              </div>
              {/* Real products from the catalog at the card's lower corners (~1.5x
                  the old size). Positions are % of the card: the jars hang from the
                  card's bottom edge (top of each jar touches the white frame), so
                  the video's time, volume and fullscreen controls stay uncovered,
                  and they stay inside the column so the section never clips them. */}
              <div className="pointer-events-none absolute inset-0">
              <FloatingProducts
                eager
                disc={false}
                sizes="(min-width: 1024px) 130px, 24vw"
                className="h-full w-full"
                items={[
                  { p: VP.collagenGummy, pos: "-left-[2%] -bottom-[23%] w-[21%]", d: 0, r: -6, z: 2 },
                  { p: VP.magnesiumDrops, pos: "left-[16%] -bottom-[13%] w-[8%]", d: 1.2, r: 3, z: 3 },
                  { p: VP.electrolyte, pos: "-right-[2%] -bottom-[20%] w-[21%]", d: 2.1, r: 5, z: 2 },
                ]}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
