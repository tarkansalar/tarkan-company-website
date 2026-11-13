import SectionIntro from "../components/SectionIntro";
import { Blob, FloatingProducts } from "../components/Visuals";
import { VP } from "../data/visuals";

export default function BiggerPicture() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <Blob className="left-1/2 -translate-x-1/2 top-0 h-[420px] w-[640px]" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <SectionIntro
          align="center"
          eyebrow="The bigger picture"
          title="This doesn’t have to stay at one or two products."
        />
        {/* From one or two products to a full range: real catalog products */}
        <FloatingProducts
          sizes="(min-width: 1024px) 130px, 18vw"
          className="mt-10 mx-auto aspect-[2/1] w-full max-w-[720px]"
          items={[
            { p: VP.turmeric, pos: "left-[3%] bottom-[16%] w-[12%]", d: 2.2, r: -8, z: 1 },
            { p: VP.collagenPowder, pos: "left-[15%] bottom-[18%] w-[15%]", d: 1.1, r: -4, z: 2 },
            { p: VP.magnesiumGummy, pos: "left-[31%] bottom-[14%] w-[13%]", d: 0.3, r: -1, z: 3 },
            { p: VP.collagenDrops, pos: "left-[45%] bottom-[11%] w-[8%]", d: 1.8, r: 0, z: 4 },
            { p: VP.omega, pos: "left-[54%] bottom-[14%] w-[15%]", d: 0.7, r: 2, z: 3 },
            { p: VP.electrolyte, pos: "left-[70%] bottom-[18%] w-[14%]", d: 1.5, r: 4, z: 2 },
            { p: VP.ashwagandha, pos: "right-[3%] bottom-[16%] w-[11%]", d: 2.6, r: 8, z: 1 },
          ]}
        />
        <div className="mt-8 space-y-5 text-[17px] sm:text-lg leading-[1.75] text-[#282828]/80">
          <p>
            As your brand gains traction, we can expand the range, develop exclusive formulations,
            and build a complete product line around the customers you already have - with
            positioning that continues to protect you from pure price comparison.
          </p>
          <p>
            You don’t need to build a manufacturing department or spend years developing supplier
            relationships. You get access to the experience, relationships and operational
            infrastructure that make it possible.
          </p>
        </div>
        <p className="mt-12 text-xl sm:text-2xl leading-[1.5] font-semibold tracking-[-0.01em] text-[#282828]">
          Your customers create the demand. Your brand owns the relationship.{" "}
          <span className="text-[#fb6ba8]">
            We provide the manufacturing capability and the product development support.
          </span>
        </p>
      </div>
    </section>
  );
}
