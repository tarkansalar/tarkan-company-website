import CtaButton from "../components/CtaButton";
import { IconTile } from "../components/Icon";
import { Blob, FloatingProducts } from "../components/Visuals";
import { VP } from "../data/visuals";

// From revisi-instruksi.md "Conversion": what the call will address.
const CALL_COVERS = [
  "Which products make sense for your business",
  "Potential differentiation",
  "Realistic starting quantities",
  "Manufacturing costs",
  "Timelines",
  "Commercial viability",
];

export default function FinalCta() {
  return (
    <section id="book" className="scroll-mt-20 relative overflow-hidden py-20 lg:py-32 bg-[#282828] text-white">
      <Blob strong className="-top-48 -right-48 h-[480px] w-[480px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.35fr_0.65fr] gap-12 lg:gap-14 items-start">
        <div>
          <p className="font-[family-name:var(--font-cg-script)] text-[#fb6ba8] text-[40px] sm:text-5xl leading-none">
            Your next step
          </p>
          <h2 className="mt-5 text-[clamp(1.625rem,1rem+2.8vw,3.125rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            You built the business. You built the trust. Now decide whether that trust should also
            sell your own products - with real distinction.
          </h2>
          <div className="mt-10 space-y-5 text-[17px] sm:text-lg leading-[1.7] text-white/75 max-w-3xl">
            <p>
              You don’t need another complicated operation to manage. You don’t need to become an
              expert in international manufacturing. You don’t need to start from zero.
            </p>
            <p>
              You simply need a clear answer to one question:{" "}
              <span className="text-white font-semibold">
                Does it make commercial sense for your business to have its own supplement line -
                with better factory pricing and products that are actually differentiated?
              </span>
            </p>
            <p>
              Book a free 15-20 minute call. We’ll look at your business, the products that fit,
              realistic starting quantities, timelines, costs, and whether real distinction is
              possible - and tell you straight whether this is a good fit or not.
            </p>
          </div>

          <div
            data-reveal=""
            className="mt-12 rounded-3xl bg-[linear-gradient(160deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] ring-1 ring-white/12 p-7 sm:p-10 cg-card-shadow-dark"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#fb6ba8]">
              The call will address
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {CALL_COVERS.map((c) => (
                <li key={c} className="flex items-center gap-3 text-[16px] leading-[1.5]">
                  <IconTile name="check" size="sm" dark />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-col items-start gap-5">
            <p className="text-xl font-semibold">No pitch deck. No pressure. Just a practical conversation.</p>
            <CtaButton />
            <p className="text-sm text-white/60">
              No obligation. We’ll tell you honestly if this makes sense for your business.
            </p>
          </div>
        </div>

        {/* Your own product line: real catalog products */}
        <FloatingProducts
          dark
          sizes="(min-width: 1024px) 170px, 34vw"
          className="mx-auto aspect-[4/5] w-full max-w-[420px] lg:sticky lg:top-28 lg:mt-16"
          items={[
            { p: VP.collagenPowder, pos: "left-[6%] bottom-[12%] w-[38%]", d: 0.3, r: -6, z: 2 },
            { p: VP.omega, pos: "left-[36%] bottom-[24%] w-[34%]", d: 1.4, r: 2, z: 1 },
            { p: VP.collagenDrops, pos: "right-[6%] bottom-[10%] w-[18%]", d: 2.2, r: 6, z: 3 },
          ]}
        />
      </div>
    </section>
  );
}
