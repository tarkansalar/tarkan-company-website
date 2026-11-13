import CtaButton from "../components/CtaButton";
import { IconTile } from "../components/Icon";

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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-[#fb6ba8]/20 blur-3xl"
      />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <p className="font-[family-name:var(--font-cg-script)] text-[#fb6ba8] text-[40px] sm:text-5xl leading-none">
          Your next step
        </p>
        <h2 className="mt-5 text-[28px] sm:text-4xl lg:text-[50px] font-bold leading-[1.12] tracking-[-0.02em]">
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

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#fb6ba8]">
            The call will address
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
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
          {/* [TUAN ISI link booking] */}
          <CtaButton />
          <p className="text-sm text-white/60">
            No obligation. We’ll tell you honestly if this makes sense for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
