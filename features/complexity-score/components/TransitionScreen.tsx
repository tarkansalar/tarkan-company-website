"use client";

import Shell from "./Shell";
import { SCORED_COUNT, TOTAL_COUNT } from "../data/questions";

export default function TransitionScreen({
  onContinue,
}: {
  onContinue: () => void;
}) {
  return (
    <Shell progress={SCORED_COUNT / TOTAL_COUNT}>
      <div className="font-inter text-xl lg:text-2xl text-white leading-[1.5] space-y-6 mb-10">
        <p>Every answer you just gave has a price tag attached to it.</p>
        <p>Here&apos;s what the numbers actually mean for your business.</p>
      </div>

      <button
        onClick={onContinue}
        className="w-full sm:w-auto bg-neon text-black font-space font-bold px-8 py-5 text-lg hover:bg-white transition-colors"
      >
        CONTINUE
      </button>
    </Shell>
  );
}
