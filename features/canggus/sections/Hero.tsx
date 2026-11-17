import Image from "next/image";
import CtaButton from "../components/CtaButton";
import { EYEBROW } from "../components/eyebrow";
import { HERO_PRODUCTS } from "../data/visuals";

// Hook + one-line offer + fee model + CTA. Visual: one product per focus
// category (creatine, magnesium, electrolytes), static.
export default function Hero() {
  const { creatine, magnesium, electrolyte } = HERO_PRODUCTS;
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 lg:pt-40 lg:pb-28 bg-[radial-gradient(60%_50%_at_85%_10%,rgba(251,107,168,0.16),transparent_70%),radial-gradient(50%_40%_at_0%_100%,rgba(251,107,168,0.10),transparent_70%)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className={`${EYEBROW} mb-5`}>
            Private label supplements
          </p>
          <h1 className="text-[clamp(1.875rem,1rem+4vw,3.25rem)] font-extrabold uppercase leading-[1.06] tracking-[-0.02em] text-[#282828]">
            Your customers already buy supplements.{" "}
            <span className="text-[#fb6ba8]">Why leave that opportunity to someone else?</span>
          </h1>
          <p className="mt-6 text-[17px] sm:text-lg leading-[1.7] text-[#282828]/80 max-w-xl">
            Build your own creatine, magnesium and electrolyte range through our manufacturing
            network, with factory pricing and experienced support.
          </p>
          <p className="mt-5 border-l-2 border-[#fb6ba8] pl-5 text-[16px] sm:text-[17px] font-semibold leading-[1.6] text-[#282828] max-w-xl">
            No consulting, development or service fees. We earn through the purchasing advantage
            we create.
          </p>
          <CtaButton label="Explore the opportunity" className="mt-8 w-full min-[400px]:w-auto" />
        </div>

        <div aria-hidden="true" className="relative mx-auto aspect-[5/4] w-full max-w-[460px]">
          <span className="absolute left-1/2 top-1/2 aspect-square w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(251,107,168,0.28),rgba(253,240,246,0.7)_60%,transparent)]" />
          <span className="absolute bottom-[4%] left-1/2 h-[14%] w-[88%] -translate-x-1/2 rounded-[50%] border border-white bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(253,240,246,0.6))]" />
          <Image
            src={magnesium.src}
            alt=""
            width={magnesium.w}
            height={magnesium.h}
            priority
            sizes="(min-width: 1024px) 120px, 22vw"
            className="absolute bottom-[12%] left-[38%] w-[24%] h-auto drop-shadow-[0_18px_22px_rgba(40,40,40,0.2)]"
          />
          <Image
            src={creatine.src}
            alt=""
            width={creatine.w}
            height={creatine.h}
            priority
            sizes="(min-width: 1024px) 160px, 30vw"
            className="absolute bottom-[8%] left-[8%] w-[34%] h-auto -rotate-3 drop-shadow-[0_18px_22px_rgba(40,40,40,0.2)]"
          />
          <Image
            src={electrolyte.src}
            alt=""
            width={electrolyte.w}
            height={electrolyte.h}
            priority
            sizes="(min-width: 1024px) 160px, 30vw"
            className="absolute bottom-[8%] right-[8%] w-[34%] h-auto rotate-3 drop-shadow-[0_18px_22px_rgba(40,40,40,0.2)]"
          />
        </div>
      </div>
    </section>
  );
}
