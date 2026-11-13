import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
};

export default function SectionIntro({ eyebrow, title, align = "left", invert = false }: Props) {
  const center = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${center}`}>
      {/* Pink script eyebrow: its size is set here only, for every section. */}
      <p className="font-[family-name:var(--font-cg-script)] text-[#fb6ba8] text-[40px] min-[360px]:text-[44px] sm:text-[52px] lg:text-[62px] leading-[1.05] mb-4 lg:mb-5">
        {eyebrow}
      </p>
      <h2
        className={`text-[28px] sm:text-4xl lg:text-[46px] font-bold leading-[1.15] tracking-[-0.02em] ${invert ? "text-white" : "text-[#282828]"}`}
      >
        {title}
      </h2>
    </div>
  );
}
