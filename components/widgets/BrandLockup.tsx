/**
 * The Blue Ocean Code lockup, matching the LinkedIn banner: big neon
 * wordmark over a spaced-out "CODE. CASH. SCALE" rule.
 */
export default function BrandLockup({
  align = "center",
}: {
  /** Centred like the banner, or flush left to sit in a left-aligned hero. */
  align?: "center" | "left";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : "text-left"}>
      <div className="font-space font-extrabold text-neon uppercase leading-[0.95] tracking-[-0.02em] text-[34px] sm:text-5xl lg:text-[56px]">
        Blue Ocean Code
      </div>

      <div
        className={`flex items-center gap-3 sm:gap-4 mt-3 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        {centered && <span className="h-px w-8 sm:w-12 bg-white/25" />}
        <span className="font-space font-bold text-white uppercase text-[11px] sm:text-sm tracking-[0.24em] whitespace-nowrap">
          Code. Cash. Scale
        </span>
        <span className="h-px w-8 sm:w-12 bg-white/25" />
      </div>
    </div>
  );
}
