import { BLUE_OCEAN_CODE_URL } from "@/lib/constants";
import { WORKSHOP_IMG } from "../data/images";

export default function NeedsACode() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl text-white mb-12 leading-[1.2]">
          Your brand doesn&apos;t need more complexity. It needs a Code.
        </h2>

        <div className="bg-card-bg border-l-4 border-neon overflow-hidden mb-12">
          <img
            src={WORKSHOP_IMG}
            alt="Workshop with elite entrepreneurs - Dubai Harbour"
            className="w-full object-cover aspect-[16/9]"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3 text-center">
            <p className="font-inter text-sm text-white font-medium tracking-wide">
              Workshop with elite entrepreneurs - Dubai Harbour
            </p>
          </div>
        </div>

        <div className="font-inter text-[17px] leading-[1.6] space-y-6">
          <p>You know the reality of consumer goods today:</p>
          <p>
            Rising CAC. Copycat brands. Retailers squeezing margins. Customers
            comparing you in seconds.
          </p>
          <p>The brands that win aren&apos;t the ones with more ads.</p>
          <p>
            They&apos;re the ones customers{" "}
            <strong className="text-white">feel a difference</strong> from - at
            every touchpoint, again and again.
          </p>
          <p>
            The Blue Ocean Code&trade; is the simplest way to organize your
            company around what actually makes you different.
          </p>
          <p>
            It is not another strategy document. Not another dashboard. Not more
            AI.
          </p>
          <p>
            It is the code that connects what you believe with what your company
            actually does - so marketing, sales, operations and the warehouse all
            create the <strong className="text-white">same feeling</strong> for
            your customer.
          </p>
          <p className="font-space font-bold text-2xl text-white pt-2">
            That&apos;s the whole game.
          </p>
        </div>

        <div className="mt-12">
          <a
            href={BLUE_OCEAN_CODE_URL}
            target="_blank"
            rel="noopener"
            className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
          >
            FIND MY BLUE OCEAN CODE&trade; - $499
          </a>
        </div>
      </div>
    </section>
  );
}
