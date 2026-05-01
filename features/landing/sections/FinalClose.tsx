import { BOOKING_URL } from "@/lib/constants";

export default function FinalClose() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="font-inter text-2xl lg:text-3xl leading-[1.4] space-y-6 mb-12">
          <p>You already have the data.</p>
          <p>You&apos;re just not seeing it clearly.</p>
          <p className="font-space font-bold text-4xl lg:text-5xl text-white pt-4">
            Fix that.
          </p>
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener"
          className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
        >
          FIND MY TRAPPED CASH
        </a>
      </div>
    </section>
  );
}
