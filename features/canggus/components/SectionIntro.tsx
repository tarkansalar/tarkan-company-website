import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
};

// Pink uppercase eyebrow (same style as the hero eyebrow) + bold heading. One size for every section.
export default function SectionIntro({ eyebrow, title, align = "left", invert = false }: Props) {
  const center = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${center}`}>
      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#fb6ba8] mb-4">
        {eyebrow}
      </p>
      <h2
        className={`text-[clamp(1.625rem,1.15rem+2vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em] ${invert ? "text-white" : "text-[#282828]"}`}
      >
        {title}
      </h2>
    </div>
  );
}
