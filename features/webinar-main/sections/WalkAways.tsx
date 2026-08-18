import { WEBINAR_REGISTRATION_URL } from "@/lib/constants";

export default function WalkAways() {
  const items = [
    {
      num: "1",
      title: "The Bezos Question, Answered For Your Brand",
      desc: "What won't change for your customer in 10 years. We do this exercise live, together. You leave with your answer written down.",
    },
    {
      num: "2",
      title: "The 3-Second Test, Done",
      desc: "You'll run your own brand through it during the event and know — not guess — whether customers instantly get why to choose you, or whether you're silently competing on price.",
    },
    {
      num: "3",
      title: "The Code Extraction Method",
      desc: "The exact way I pull a company's Code out of the founder's head — the same method behind my six-figure consulting work. You'll see it performed live.",
    },
    {
      num: "4",
      title: "The Hiring Firewall",
      desc: "Why every agency, COO and key hire rewrites your company in their own image — and the one-page standard that stops it forever.",
    },
    {
      num: "5 🔥",
      title: "3 Live Hot Seats",
      desc: "Three attendees get their Blue Ocean Code™ found live, on the spot, by me. Watch what I do with them — then do it to yourself.",
      isHotSeat: true,
    },
  ];

  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-12">
          Here's Exactly What You'll Walk Away With (Not Just "Learn"):
        </h2>
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className={item.isHotSeat ? "bg-card-bg border border-neon p-6 lg:p-7" : "bg-card-bg border-l-4 border-neon p-6 lg:p-7"}>
              <div>
                {item.isHotSeat ? (
                  <div className="font-space font-bold text-lg lg:text-xl text-white leading-[1.3] flex items-center gap-3">
                    <span className="font-extrabold text-2xl text-neon flex-shrink-0">{item.num}</span>
                    <span>{item.title}</span>
                  </div>
                ) : (
                  <div className="font-space font-bold text-lg lg:text-xl text-white leading-[1.3] flex items-center justify-between">
                    <span>{item.title}</span>
                    <span className="font-extrabold text-2xl text-neon flex-shrink-0 ml-4">{item.num}</span>
                  </div>
                )}
                <p className="font-inter text-[16px] leading-[1.6] text-supporting mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="font-inter text-[18px] lg:text-xl leading-[1.6] text-white mt-12 italic">Show up with a brand. Leave with a direction.</p>
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
