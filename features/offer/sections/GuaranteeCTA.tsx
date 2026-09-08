import { BLUE_OCEAN_CODE_URL } from "@/lib/constants";

export default function GuaranteeCTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <a
          href={BLUE_OCEAN_CODE_URL}
          target="_blank"
          rel="noopener"
          className="bg-neon text-black font-space font-bold px-8 py-5 text-lg hover:bg-white transition-colors inline-block mb-14"
        >
          FIND MY BLUE OCEAN CODE&trade; - $499
        </a>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card-bg border-2 border-neon p-8">
            <div className="font-space font-bold text-[11px] tracking-[0.12em] uppercase text-neon mb-5">
              THE GUARANTEE
            </div>
            <p className="font-inter text-[17px] leading-[1.6] text-white mb-4">
              If you don&apos;t walk away with a Blue Ocean Code&trade; you
              &apos;d be willing to bet your business on, I&apos;ll refund your
              $499.
            </p>
            <p className="font-space font-bold text-xl text-white">
              No questions.
            </p>
          </div>

          <div className="bg-card-bg border-l-4 border-neon p-8">
            <div className="font-space font-bold text-[11px] tracking-[0.12em] uppercase text-neon mb-5">
              LIMITED AVAILABILITY
            </div>
            <p className="font-inter text-[17px] leading-[1.6] text-white mb-4">
              Every session is done personally by me.
            </p>
            <p className="font-inter text-[17px] leading-[1.6] text-supporting">
              When the calendar is full, it&apos;s full.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
