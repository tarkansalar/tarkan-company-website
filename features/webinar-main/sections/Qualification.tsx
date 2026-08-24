export default function Qualification() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-6">
          Who This Is For - And Who It&apos;s Not For.
        </h2>

        <div className="mb-12">
          <h3 className="font-space font-bold text-lg lg:text-xl text-white leading-[1.3] mb-6">For you if you run a consumer goods brand and:</h3>
          <ul className="space-y-4 font-inter text-[16px] lg:text-lg leading-[1.6] text-supporting">
            <li className="flex gap-3">
              <span className="text-neon font-bold flex-shrink-0">•</span>
              <span>Your margins are squeezed from every side - tariffs, platform fees, retailers, rising ad costs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-neon font-bold flex-shrink-0">•</span>
              <span>Your customer acquisition cost keeps climbing while customer lifetime value drops</span>
            </li>
            <li className="flex gap-3">
              <span className="text-neon font-bold flex-shrink-0">•</span>
              <span>Traffic to your store - online or retail - is declining, and discounts are your only lever left</span>
            </li>
            <li className="flex gap-3">
              <span className="text-neon font-bold flex-shrink-0">•</span>
              <span>You carry too many SKUs, and the bestsellers are financing the rest</span>
            </li>
            <li className="flex gap-3">
              <span className="text-neon font-bold flex-shrink-0">•</span>
              <span>Every department interprets the brand differently, and you&apos;re the human FAQ of your own company</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-space font-bold text-lg lg:text-xl text-white leading-[1.3] mb-4">Not for you if:</h3>
          <p className="font-inter text-[16px] lg:text-lg leading-[1.6] text-supporting">
            Everyone in your company already gives the same answer to &ldquo;what makes us different?&rdquo; - and your margins prove it. Genuinely - skip this and keep going.
          </p>
        </div>
      </div>
    </section>
  );
}
