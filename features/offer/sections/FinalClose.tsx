import { BLUE_OCEAN_CODE_URL } from "@/lib/constants";

export default function FinalClose() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl text-white leading-[1.2] mb-4">
          Your brand doesn&apos;t need more complexity.
        </h2>
        <p className="font-space font-bold text-3xl lg:text-4xl text-neon leading-[1.2] mb-12">
          It needs a standard.
        </p>

        <div className="font-space font-bold text-2xl lg:text-3xl text-white leading-[1.35] space-y-1 mb-12">
          <p>One page.</p>
          <p>One Code.</p>
          <p>Everything measured against it.</p>
        </div>

        <div className="border-l-4 border-neon pl-6 font-inter text-xl lg:text-2xl leading-[1.5] text-supporting space-y-1 mb-12">
          <p>Read it.</p>
          <p>Feel it.</p>
          <p className="text-white">Run your company on it.</p>
        </div>

        <div className="font-space font-bold text-2xl text-white leading-[1.3] mb-10">
          <p>$499. One time.</p>
          <p className="text-neon mt-1">Guaranteed.</p>
        </div>

        <a
          href={BLUE_OCEAN_CODE_URL}
          target="_blank"
          rel="noopener"
          className="bg-neon text-black font-space font-bold px-8 py-5 text-lg hover:bg-white transition-colors inline-block"
        >
          FIND MY BLUE OCEAN CODE&trade; - $499
        </a>
      </div>
    </section>
  );
}
