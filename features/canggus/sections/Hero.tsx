import CtaButton from "../components/CtaButton";
import AssetPlaceholder from "../components/AssetPlaceholder";
import { Blob, FloatingProducts } from "../components/Visuals";
import { VP } from "../data/visuals";

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
            <h1 className="text-[32px] sm:text-5xl lg:text-[50px] xl:text-[54px] font-extrabold uppercase leading-[1.06] tracking-[-0.02em] text-[#282828]">
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
            {/* [ASET] Founder VSL - video slot placeholder, framed as a 3D glass card */}
            <div data-tilt="5" className="cg-tilt relative">
              <div className="rounded-[30px] bg-white/70 p-2 ring-1 ring-white cg-card-shadow">
                <AssetPlaceholder label="Founder VSL - video slot" className="aspect-video lg:aspect-[4/5] w-full" />
              </div>
            </div>
            {/* Real products from the catalog, floating in front of the slot */}
            <FloatingProducts
              eager
              disc={false}
              sizes="(min-width: 1024px) 130px, (min-width: 640px) 120px, 26vw"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] lg:h-[40%]"
              items={[
                { p: VP.collagenGummy, pos: "left-[2%] bottom-[2%] w-[15%] sm:w-[17%] lg:left-[-2%] lg:w-[24%]", d: 0, r: -6, z: 2 },
                { p: VP.magnesiumDrops, pos: "left-[18%] bottom-[0%] w-[8%] sm:w-[9%] lg:left-[19%] lg:w-[13%]", d: 1.2, r: 3, z: 3 },
                { p: VP.electrolyte, pos: "right-[2%] bottom-[4%] w-[18%] sm:w-[20%] lg:right-0 lg:w-[28%]", d: 2.1, r: 5, z: 2 },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
