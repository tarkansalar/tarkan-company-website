const CONNECTORS = ["SKUs", "CAC", "Inventory", "Margins", "Suppliers"];

const OUTPUTS: Array<[string, string]> = [
  ["Kill this", "here's what it's costing you to keep it"],
  ["Scale this", "here's why it's your real profit driver"],
  ["Test this", "here's your next bet, ranked by upside"],
  ["Fix this", "here's where cash is leaking right now"],
];

export default function Mechanism() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl mb-12 leading-[1.2]">
          Not insights. Decisions.
        </h2>
        <div className="font-inter text-[17px] leading-[1.6] space-y-6">
          <p>
            This is not a dashboard.
            <br />
            And it&apos;s not consulting.
          </p>
          <p className="font-space font-bold text-2xl lg:text-3xl text-white leading-[1.3] py-4">
            80/20 Profit AI is a Profit Decision Engine.
          </p>
          <p>
            It connects your SKUs, margins, inventory, and acquisition costs -
            and gives you a ranked list of exactly what to kill, what to scale,
            and where your cash is trapped. In 48 hours.
          </p>
          <p className="pt-4">In 48 hours, it connects:</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 my-8">
          {CONNECTORS.map((label) => (
            <div
              key={label}
              className="bg-card-bg border-l-[3px] border-neon p-4 font-space font-bold text-neon text-sm"
            >
              {label}
            </div>
          ))}
        </div>
        <p className="font-inter text-[17px] text-supporting mb-6">
          And turns that into:
        </p>
        <div className="space-y-5 mb-10">
          {OUTPUTS.map(([k, v]) => (
            <div key={k} className="border-l-4 border-neon pl-6">
              <p className="font-inter text-[17px] leading-[1.6]">
                <strong className="text-white">{k}</strong> - {v}
              </p>
            </div>
          ))}
        </div>
        <div className="font-inter text-[17px] leading-[1.6] space-y-6">
          <p>
            Most tools show you what&apos;s happening.
            <br />
            This tells you what to do about it.
          </p>
          <p className="font-space font-bold text-xl lg:text-2xl text-white pt-4 leading-[1.3]">
            That&apos;s the difference between a dashboard and a decision.
          </p>
        </div>
      </div>
    </section>
  );
}
