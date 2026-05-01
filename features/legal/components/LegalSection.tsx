import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function LegalSection({ title, children }: Props) {
  return (
    <section>
      <h2 className="font-syne font-bold text-xl lg:text-2xl text-neon mb-4 leading-tight">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
