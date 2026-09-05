import { WEBINAR_REGISTRATION_URL } from "@/lib/constants";
import { WORKSHOP_IMG } from "../data/images";

export default function WhatCodeChanges() {
  const outcomes = [
    { title: "Fewer SKUs, more profit", desc: "You know which products carry your difference and stop financing the ones that don't." },
    { title: "Lower acquisition cost", desc: "When customers instantly get why to choose you, you stop buying attention with discounts." },
    { title: "Higher lifetime value", desc: "Customers who feel the same difference at every touchpoint come back. Repeat purchase is where consumer brands make their money." },
    { title: "Pricing power", desc: "Chosen on purpose, not on price. That's margin nobody can squeeze." },
    { title: "Fewer meetings, faster decisions", desc: "One standard instead of five opinions." },
  ];

  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-6">
          Let Me Be Clear About What a Code Actually Changes.
        </h2>

        {/* Workshop photo */}
        <div className="bg-card-bg border-l-4 border-neon overflow-hidden mb-10">
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

        <p className="font-inter text-[18px] lg:text-xl leading-[1.6] text-supporting mb-10">Not &ldquo;alignment.&rdquo; Not &ldquo;clarity&rdquo; as a feel-good word. This:</p>
        <div className="space-y-6 font-inter text-[16px] lg:text-lg leading-[1.6]">
          {outcomes.map((item, idx) => (
            <div key={idx}>
              <p className="text-white font-bold mb-2">{item.title}</p>
              <p className="text-supporting">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="font-inter text-[18px] lg:text-xl leading-[1.6] text-supporting mt-12">That&apos;s the outcome side. The event shows you the way in.</p>
        <div className="mt-10">
          <a
            href={WEBINAR_REGISTRATION_URL}
            target="_blank"
            rel="noopener"
            className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
          >
            CLAIM MY FREE SEAT
          </a>
        </div>
      </div>
    </section>
  );
}
