import Link from "next/link";
import RafeyVideo from "@/components/widgets/RafeyVideo";

export default function WhyListen() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          Why listen to me.
        </p>

        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-10 leading-[1.2] text-white">
          I did not start as a consultant.
        </h2>

        <p className="font-inter text-[17px] leading-[1.6] text-white mb-8">
          I built an 8-figure brand. Created a world-first invention in denim.
        </p>

        <ul className="space-y-6 pl-0 mb-10">
          <li className="border-l-4 border-neon pl-6">
            <p className="font-inter text-[17px] leading-[1.6]">
              <strong className="text-white font-space font-bold">
                Produced over 50 million units.
              </strong>
            </p>
          </li>
          <li className="border-l-4 border-neon pl-6">
            <p className="font-inter text-[17px] leading-[1.6]">
              <strong className="text-white font-space font-bold">
                Managed 940 people across 4 countries.
              </strong>
            </p>
          </li>
          <li className="border-l-4 border-neon pl-6">
            <p className="font-inter text-[17px] leading-[1.6]">
              <strong className="text-white font-space font-bold">
                Designed and produced in my own factories for brands like Louis
                Vuitton, Adidas, Zara, and H&amp;M.
              </strong>
            </p>
          </li>
        </ul>

        <div className="font-inter text-[17px] leading-[1.6] text-white space-y-4 mb-8">
          <p>Then someone offered me &euro;50M to exit.</p>
          <p className="font-space font-bold text-xl text-neon">
            I turned it down.
          </p>
          <p>I was too close to my own business to see clearly.</p>
          <p>That lesson never left me.</p>
          <p>
            Because when you are inside the machine, working every day, pushing
            revenue, managing people, fixing problems - you can still miss the
            obvious leak.
          </p>
          <p>Not because you are bad.</p>
          <p>Because you are too close.</p>
        </div>

        <p className="font-space font-bold text-xl lg:text-2xl text-neon mb-4 leading-[1.3]">
          That is why context matters.
        </p>

        <p className="font-space font-bold text-xl lg:text-2xl text-white leading-[1.3]">
          And that is why I can usually see things quickly.
        </p>

        <h3 className="font-space font-bold text-xl lg:text-2xl text-white text-center mb-6 mt-16 leading-[1.3]">
          Hear what a Dubai real estate billionaire says about Tarkan.
        </h3>

        <RafeyVideo />

        <p className="font-inter text-sm text-white text-center mt-3">
          Rafey Alam - Dubai Real Estate Billionaire
        </p>

        <div className="border-y border-neon/20 py-8 mt-16">
          <p className="text-center font-space font-bold text-[10px] tracking-[0.25em] uppercase text-supporting mb-4">
            Produced for
          </p>
          <p className="text-center font-syne font-extrabold text-lg sm:text-xl lg:text-2xl tracking-[0.2em] uppercase text-neon">
            Louis Vuitton &middot; Adidas &middot; Zara &middot; H&amp;M
          </p>
        </div>

        <Link
          href="#proof"
          className="block bg-card-bg border-l-4 border-neon p-6 lg:p-7 mt-10 hover:bg-card-bg/70 transition-colors group"
        >
          <p className="font-space font-bold text-[10px] tracking-[0.18em] uppercase text-neon mb-3">
            Case study preview
          </p>
          <p className="font-space font-bold text-xl lg:text-2xl text-white leading-[1.3] mb-3">
            $1.2M+ liquidity unlocked in 90 days.
          </p>
          <p className="font-inter text-[15px] text-supporting leading-[1.6] mb-4">
            $25M streetwear brand. 22 SKUs killed. 15 real profit drivers
            identified. Same operator lens you would get on the audit call.
          </p>
          <span className="font-space font-bold text-sm text-neon group-hover:text-white transition-colors">
            See full case studies
          </span>
        </Link>
      </div>
    </section>
  );
}
