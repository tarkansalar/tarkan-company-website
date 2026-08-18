export default function Credibility() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-6">
          Who Am I to Promise That?
        </h2>
        <div className="space-y-6 font-inter text-[18px] lg:text-xl leading-[1.6] text-supporting">
          <p>
            I've been building product businesses for 30 years — starting at 18, no outside funding.
          </p>
          <p>
            HQ in Germany. Office in Hong Kong. My own factory and denim laundry in China. 17 retail stores — built from the factory floor to the checkout. Private label manufacturing for Louis Vuitton, Zara, Diesel and major retailers. 50M+ products produced. Two world-first inventions in colored denim.
          </p>
          <p>
            When those inventions hit the market, my brand went to $40M in two years — and I was offered $50M for the business. I turned it down. Not from strategy — from overload. I was too burned out, too close to the business, with no code to measure that decision against.
          </p>
          <p className="text-white">
            <strong>I didn't learn this in a book. I paid for it.</strong>
          </p>
        </div>

        {/* Testimonial / Credential Fallback */}
        <div className="mt-12 pt-12 border-t border-neon/15">
          <p className="font-inter text-[16px] italic text-supporting">
            <span className="text-neon">"</span>[ONE-LINE TESTIMONIAL]<span className="text-neon">"</span> — Name, Consumer Brand
          </p>
          <p className="font-inter text-xs text-supporting mt-4">
            <em>If no testimonial by launch: delete the line above and replace with a true credential, e.g. "I've run this diagnosis inside consumer product businesses from [$X] to [$X] in revenue."</em>
          </p>
        </div>
      </div>
    </section>
  );
}
