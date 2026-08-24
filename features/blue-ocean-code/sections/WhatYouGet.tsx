import { BLUE_OCEAN_CODE_URL } from "@/lib/constants";

const ITEMS = [
  {
    num: "1",
    name: "30-Minute Blue Ocean Code™ Session",
    desc: "Live 1-on-1. We identify the Code that makes your brand different and worth choosing.",
  },
  {
    num: "2",
    name: "Your Blue Ocean Code™",
    desc: "A simple operational standard your company can use across people, marketing, operations and customer experience. Delivered as a document within 48 hours.",
  },
  {
    num: "3",
    name: "30-Day Activation Plan",
    desc: "The first 30 days of making your Code visible and felt throughout the business. Because a Code without activation is just words.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl text-white mb-12 leading-[1.2]">
          What you get for $499
        </h2>

        <div className="space-y-6 mb-12">
          {ITEMS.map((item) => (
            <div
              key={item.num}
              className="bg-card-bg border-l-4 border-neon p-6 lg:p-8"
            >
              <div className="flex gap-4">
                <span className="font-space font-extrabold text-2xl text-neon flex-shrink-0 leading-[1.3]">
                  {item.num}
                </span>
                <div>
                  <div className="font-space font-bold text-lg lg:text-xl text-white leading-[1.3]">
                    {item.name}
                  </div>
                  <p className="font-inter text-[16px] leading-[1.6] text-supporting mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The alternative */}
        <div className="font-inter text-[17px] leading-[1.6] space-y-6 mb-12">
          <p>
            A branding agency gives you one answer. A marketing agency gives you
            another. A new COO brings their own playbook. Every hire leaves their
            own mark - and you rebuild again and again.
          </p>
          <p className="font-space font-bold text-2xl text-white">
            $15,000-$50,000 later, you have five directions. Not one.
          </p>
          <p>
            The Blue Ocean Code&trade; flips it: you set the standard, and
            everyone you hire - agency, COO, frontline - implements{" "}
            <em className="text-white">your</em> Code. Not their mark. Yours.
          </p>
        </div>

        <div className="mb-12 space-y-3">
          <div className="font-space font-extrabold text-5xl lg:text-[64px] text-white leading-[1.1]">
            $499. One time. One direction.
          </div>
          <p className="font-inter text-[17px] text-supporting">
            No retainer. No complicated implementation. No bullshit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card-bg border-l-4 border-neon p-8">
            <div className="font-space font-bold text-[11px] tracking-[0.12em] uppercase text-neon mb-4">
              THE GUARANTEE
            </div>
            <p className="font-inter text-[17px] leading-[1.6] text-white">
              If you don&apos;t walk away with a Code you&apos;d bet your
              business on, you pay nothing. Full refund. No questions.
            </p>
          </div>
          <div className="bg-card-bg border-l-4 border-neon p-8">
            <div className="font-space font-bold text-[11px] tracking-[0.12em] uppercase text-neon mb-4">
              ⏳ LIMITED AVAILABILITY
            </div>
            <p className="font-inter text-[17px] leading-[1.6] text-white">
              Every session is done personally by me. I take a limited number per
              month. When the calendar is full, it&apos;s full.
            </p>
          </div>
        </div>

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
