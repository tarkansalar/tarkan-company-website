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
      <p className="font-[family-name:var(--font-cg-script)] text-[#fb6ba8] text-[34px] sm:text-[42px] leading-none mb-4">
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
