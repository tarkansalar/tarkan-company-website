import { BLUE_OCEAN_CODE_URL } from "@/lib/constants";

export default function FinalClose() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl text-white mb-12 leading-[1.2]">
          Start here.
        </h2>

        <div className="font-inter text-[17px] leading-[1.6] space-y-6 mb-12">
          <p>
            After 30 years, this is one of the simplest things I wish I had built
            much earlier.
          </p>
          <p>
            Find your Blue Ocean Code&trade;. Then make the whole company live
            it.
          </p>
        </div>

        {/*
          BEFORE LAUNCH - final proof slot. Drop in a real client result or a
          short case study here. If none exists, leave it out entirely.
          Never publish a placeholder.
        */}

        <div className="font-space font-bold text-white leading-[1.2] mb-10">
          <p className="text-3xl lg:text-4xl">
            Your brand doesn&apos;t need more complexity.
          </p>
          <p className="text-2xl lg:text-3xl text-neon mt-3">
            It needs a Code.
          </p>
        </div>

        <p className="font-space font-bold text-xl lg:text-2xl text-white mb-10">
          $499 - one time. Guaranteed.
        </p>

        <a
          href={BLUE_OCEAN_CODE_URL}
          target="_blank"
          rel="noopener"
          className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
        >
          FIND MY BLUE OCEAN CODE&trade; - $499
        </a>
      </div>
    </section>
  );
}
