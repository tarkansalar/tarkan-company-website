export default function FAQ() {
  const faqs: { q: string; a: string[] }[] = [
    {
      q: "Is this actually free?",
      a: [
        "Yes. No card. No trial. No fake free offer. The audit is free. If it helps, I may ask for a review or short video testimonial. If you want deeper help after, you can ask me.",
      ],
    },
    {
      q: "Why would you do this free?",
      a: [
        "Because I want proof. Not content proof. Real founder proof. I would rather show you what I can see in 30 minutes than talk about AI online for six months.",
      ],
    },
    {
      q: "Is this AI consulting?",
      a: [
        "No. AI consulting starts with tools. This starts with your business. First, we find the leak. Then we decide if AI/tools help fix it.",
      ],
    },
    {
      q: "Will you pitch me?",
      a: [
        "No. The audit stands on its own. I will show you what I see, what I would fix first, and where AI/tools actually belong. If that is enough, take it and use it. If later you want help going deeper, you can ask me. But the call is not a disguised sales pitch.",
      ],
    },
    {
      q: "Do I need perfect numbers?",
      a: [
        "No. Ranges are enough. The sharper the numbers, the sharper the diagnosis. But even rough numbers can reveal patterns fast.",
      ],
    },
    {
      q: "What if I do not trust my numbers?",
      a: [
        "That is normal. Most founders do not fully trust their numbers because the context is missing. We do not need perfect data to start. We need enough to see the pattern.",
      ],
    },
    {
      q: "Will you make me buy tools?",
      a: [
        "No. Most brands already have too many tools. Usually the answer is: Use this better. Cancel that. Ignore the rest.",
      ],
    },
    {
      q: "What if I am not technical?",
      a: [
        "Good. This is not built for technical people. It is built for operators. If you can explain your business, your products, your margins, and where things feel messy, we can have a useful conversation.",
      ],
    },
    {
      q: "What if I already have a team?",
      a: [
        "Great. This helps your team focus on the right thing. Smart teams still waste time when the business does not have a clear decision system.",
      ],
    },
    {
      q: "What if I am too small?",
      a: [
        "If you are below roughly $30K/month, you probably need more revenue first. Come back when the business has more data, more complexity, and more margin to recover. This is best for brands doing $3M-$50M+.",
      ],
    },
    {
      q: "What happens after the call?",
      a: [
        "I send you a short summary you can act on. If that is enough, use it. If you want help going deeper later, you can ask me. No pressure.",
      ],
    },
  ];

  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          Questions founders usually ask.
        </p>

        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-12 leading-[1.2] text-white">
          Straight answers, no spin.
        </h2>

        <div className="space-y-5">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="bg-card-bg border-l-4 border-neon p-6 lg:p-7"
            >
              <p className="font-space font-bold text-lg lg:text-xl text-white mb-3 leading-[1.3]">
                {item.q}
              </p>
              <div className="font-inter text-[17px] leading-[1.6] text-supporting space-y-3">
                {item.a.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
