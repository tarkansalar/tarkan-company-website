// One eyebrow style for every /canggus label (Hero, SectionIntro, FinalCta,
// Principles, legal pages): 14px on phones, 17px on desktop, semibold,
// uppercase, wide tracking (Tarkan 17 Nov: the old 11-12px was too small).
// Colour is added by the caller: pink #fb6ba8 everywhere, except on the pink
// Principles band where pink-on-pink would be invisible (white there).
export const EYEBROW_BASE = "text-[14px] sm:text-[15px] lg:text-[17px] font-semibold uppercase leading-[1.4] tracking-[0.18em]";

export const EYEBROW = `${EYEBROW_BASE} text-[#fb6ba8]`;
