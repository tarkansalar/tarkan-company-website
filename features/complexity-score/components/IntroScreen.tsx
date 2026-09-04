"use client";

import Shell from "./Shell";

export default function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <Shell>
      <h1 className="font-space font-extrabold text-3xl lg:text-[42px] text-white leading-[1.15] tracking-[-0.02em] mb-6">
        How much is complexity costing your brand?
      </h1>

      <p className="font-inter text-lg lg:text-xl text-supporting leading-[1.6] mb-10">
        10 questions. 2 minutes. Find out where it&apos;s bleeding your margins
        - and what to do about it.
      </p>

      <button
        onClick={onStart}
        className="w-full sm:w-auto bg-neon text-black font-space font-bold px-8 py-5 text-lg hover:bg-white transition-colors"
      >
        SHOW ME MY SCORE
      </button>
    </Shell>
  );
}
