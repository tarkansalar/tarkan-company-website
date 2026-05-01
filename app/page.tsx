import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import RafeyVideo from "@/components/RafeyVideo";
import { BOOKING_URL } from "@/lib/quiz-data";

const HERO_IMG =
  "https://wobiecnlwkpkjseambzd.supabase.co/storage/v1/object/sign/tarkan-company-asset/img%201.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNTQxYWQyZi00N2UxLTQ0ODktOWRkMS05YjI3YzkwNWRjYTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0YXJrYW4tY29tcGFueS1hc3NldC9pbWcgMS5wbmciLCJpYXQiOjE3NzU5MDEyNzEsImV4cCI6MzMzMTE5MDEyNzF9.tU9UYtVcGPpbkeRfa03fG2VQZmx4zCu7Hr8QIvF9c9g";
const MULTIPLIER_IMG =
  "https://wobiecnlwkpkjseambzd.supabase.co/storage/v1/object/public/tarkan-company-asset/img%202.jpeg";
const BIO_IMG =
  "https://wobiecnlwkpkjseambzd.supabase.co/storage/v1/object/public/tarkan-company-asset/img%203.jpg";

const BragBar = () => (
  <div className="pt-2">
    <div className="font-space font-bold text-sm lg:text-base tracking-wide text-neon text-center leading-[1.6]">
      50M+ Units &nbsp;|&nbsp; 940 People Managed &nbsp;|&nbsp; 4 Countries
      &nbsp;|&nbsp; Louis Vuitton · Adidas · Zara · H&amp;M
    </div>
    <p className="font-inter text-sm text-supporting text-center leading-[1.6] mt-4">
      This is not marketing theory.<br />
      This is how real product businesses actually run.
    </p>
  </div>
);

export default function Home() {
  return (
    <>
      <Header />

      {/* SECTION 1 - HERO */}
      <section className="min-h-screen flex items-center pt-24 pb-12 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="font-space font-extrabold text-[13px] sm:text-sm tracking-[0.1em] uppercase text-neon">
                FOR DTC & OMNICHANNEL BRANDS DOING $3M+
              </div>
              <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-white">
                72% of business leaders say data has paralyzed their decision-making.
              </h1>
              <p className="font-inter text-sm text-neon italic">
                (Oracle, 14,000 leaders, 17 countries)
              </p>

              {/* Mobile only image */}
              <div className="lg:hidden py-4 space-y-4">
                <div className="bg-card-bg border-l-4 border-neon overflow-hidden">
                  <img
                    src={HERO_IMG}
                    alt="Tarkan Salar"
                    className="w-full h-full object-cover max-h-[320px]"
                    style={{ objectPosition: "center 15%" }}
                  />
                  <div className="border-t border-white/10 bg-white/[0.03] px-4 py-2.5 text-center">
                    <p className="font-inter text-sm text-white font-medium tracking-wide">
                      Tarkan Salar
                    </p>
                  </div>
                </div>
                <BragBar />
              </div>

              <div className="font-inter text-[17px] leading-[1.6] space-y-4">
                <p>
                  You don&apos;t have a data problem.<br />
                  You have a &ldquo;what does this mean for my cash - and what do I do
                  next?&rdquo; problem.
                </p>
                <p>
                  Shopify shows revenue. Your sales team pushes new products. Your
                  ads team shows ROAS. Your warehouse shows stock.
                </p>
                <p>
                  None of them answer:{" "}
                  <strong className="text-white">What do I do next?</strong>
                </p>
              </div>

              <p className="font-space font-bold text-xl lg:text-2xl leading-[1.3] text-white">
                That unanswered question is costing you more than you think.
              </p>

              <div className="space-y-3 pt-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener"
                  className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
                >
                  FIND MY TRAPPED CASH
                </a>
                <p className="font-inter text-sm text-supporting">
                  48-hour turnaround. $25K guarantee.
                </p>
              </div>
            </div>

            {/* Desktop only image */}
            <div className="hidden lg:block space-y-4">
              <div className="bg-card-bg border-l-4 border-neon overflow-hidden">
                <img
                  src={HERO_IMG}
                  alt="Tarkan Salar"
                  className="w-full h-full object-cover min-h-[500px]"
                  style={{ objectPosition: "center 20%" }}
                />
                <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3 text-center">
                  <p className="font-inter text-sm text-white font-medium tracking-wide">
                    Tarkan Salar
                  </p>
                </div>
              </div>
              <BragBar />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - CREDIBILITY */}
      <section className="bg-dark-bg py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="font-space font-bold text-3xl lg:text-4xl text-white text-center mb-8 leading-[1.2]">
            Here&apos;s what a Dubai real estate billionaire has to say about Tarkan.
          </h2>
          <RafeyVideo />
          <p className="font-inter text-sm text-white text-center">
            Rafey Alam - Dubai Real Estate Billionaire
          </p>
        </div>
      </section>

      {/* SECTION 3 - REAL PROBLEM */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-space font-bold text-4xl lg:text-5xl mb-12 leading-[1.2]">
            Here&apos;s what that unanswered question is actually costing you.
          </h2>
          <div className="font-inter text-[17px] leading-[1.6] space-y-6">
            <p>At $5M+ revenue, the damage compounds every month you run without clarity:</p>
            <ul className="space-y-4 pl-0">
              <li className="border-l-4 border-neon pl-6">
                <strong className="text-white">5–15% of your inventory budget</strong> is trapped in SKUs that will never sell at full price
              </li>
              <li className="border-l-4 border-neon pl-6">
                <strong className="text-white">Your ad spend scales products with weak LTV:CAC</strong> - you&apos;re paying to acquire customers that barely pay back
              </li>
              <li className="border-l-4 border-neon pl-6">
                <strong className="text-white">Your best SKUs are starved of cash</strong> because your worst ones are eating it
              </li>
              <li className="border-l-4 border-neon pl-6">
                <strong className="text-white">Every new product your team pushes</strong> adds complexity without proof it will contribute margin
              </li>
            </ul>
            <p className="pt-4">
              You&apos;re not bad at running your business.<br />
              You just can&apos;t see which decisions are bleeding you - because no tool connects the full picture.
            </p>
            <p>The worst part? Your team is working hard. Your ads are running. Your revenue is growing.</p>
            <p className="font-space font-bold text-xl lg:text-2xl text-white pt-4 leading-[1.3]">
              And none of that tells you whether you&apos;re actually building something - or just getting busier going nowhere.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 - CASE STUDY 1 */}
      <section className="bg-darker-bg py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="font-space font-bold text-3xl lg:text-4xl text-white mb-12 leading-[1.2]">
            $25M STREETWEAR BRAND - 48 HOURS AFTER USING 80/20 PROFIT AI
          </h2>
          <div className="bg-card-bg border-l-[3px] border-neon p-8 lg:p-10 mb-8">
            <div className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-3">WHAT SOFIA THOUGHT</div>
            <p className="font-inter text-lg text-white italic leading-[1.5]">&ldquo;We&apos;re growing. Ads are working.&rdquo;</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-card-bg border-l-[3px] border-neon p-6">
              <div className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">LTV:CAC</div>
              <div className="font-space font-extrabold text-3xl text-neon">1.66 : 1</div>
            </div>
            <div className="bg-card-bg border-l-[3px] border-neon p-6">
              <div className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">ROAS</div>
              <div className="font-space font-extrabold text-3xl text-neon">2.65x</div>
              <div className="font-inter text-xs text-supporting mt-1">(unhealthy)</div>
            </div>
            <div className="bg-card-bg border-l-[3px] border-neon p-6">
              <div className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">DEAD INVENTORY</div>
              <div className="font-space font-extrabold text-3xl text-neon">$840K</div>
              <div className="font-inter text-xs text-supporting mt-1">(30%)</div>
            </div>
            <div className="bg-card-bg border-l-[3px] border-neon p-6">
              <div className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">SKU COUNT</div>
              <div className="font-space font-extrabold text-3xl text-neon">95</div>
              <div className="font-inter text-xs text-supporting mt-1">(too complex)</div>
            </div>
          </div>
          <div className="font-inter text-[17px] leading-[1.6] space-y-2 mb-8">
            <p>They were acquiring customers that barely paid back</p>
            <p>While sitting on nearly $1M in dead stock</p>
          </div>
          <div className="bg-card-bg border-l-[3px] border-neon p-8 mb-8">
            <div className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-4">WHAT CHANGED</div>
            <ul className="font-inter text-base text-white leading-[1.7] space-y-2">
              <li>- Killed 22 SKUs</li>
              <li>- Identified 15 real profit drivers</li>
              <li>- Liquidated trapped inventory</li>
              <li>- Refocused spend</li>
            </ul>
          </div>
          <p className="font-space font-bold text-2xl lg:text-3xl text-white mb-8 leading-[1.3]">
            Result: $1.2M+ liquidity unlocked in 90 days
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener" className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block">
            SEE IF YOUR NUMBERS LOOK LIKE THIS
          </a>
        </div>
      </section>

      {/* SECTION 5 - CASE STUDY 2 */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="font-space font-bold text-3xl lg:text-4xl text-white mb-12 leading-[1.2]">
            $15M SUPPLEMENTS BRAND - 48 HOURS AFTER USING 80/20 PROFIT AI
          </h2>
          <div className="bg-card-bg border-l-[3px] border-neon p-8 lg:p-10 mb-8">
            <div className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-3">WHAT JAMES THOUGHT</div>
            <p className="font-inter text-lg text-white italic leading-[1.5]">
              &ldquo;I feel like I&apos;m guessing which products are actually making me money.&rdquo;
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-card-bg border-l-[3px] border-neon p-6">
              <div className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">LTV:CAC</div>
              <div className="font-space font-extrabold text-3xl text-neon">1.59 : 1</div>
            </div>
            <div className="bg-card-bg border-l-[3px] border-neon p-6">
              <div className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">CONTRIBUTION MARGIN</div>
              <div className="font-space font-extrabold text-3xl text-neon">18%</div>
            </div>
            <div className="bg-card-bg border-l-[3px] border-neon p-6">
              <div className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">DEAD INVENTORY</div>
              <div className="font-space font-extrabold text-3xl text-neon">$215,600</div>
              <div className="font-inter text-xs text-supporting mt-1">(22%)</div>
            </div>
            <div className="bg-card-bg border-l-[3px] border-neon p-6">
              <div className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">INVENTORY TURNOVER</div>
              <div className="font-space font-extrabold text-3xl text-neon">2.9x/yr</div>
              <div className="font-inter text-xs text-supporting mt-1">(healthy: &gt;8x)</div>
            </div>
            <div className="bg-card-bg border-l-[3px] border-neon p-6 sm:col-span-2 lg:col-span-1">
              <div className="font-space font-bold text-[11px] tracking-wide uppercase text-supporting mb-2">SUPPLIER RISK</div>
              <div className="font-space font-extrabold text-3xl text-neon">78%</div>
              <div className="font-inter text-xs text-supporting mt-1">from one factory in China</div>
            </div>
          </div>
          <div className="font-inter text-[17px] leading-[1.6] space-y-2 mb-8">
            <p>47 SKUs on the shelf. 3 making real money.</p>
            <p>The other 44 trapping cash and compressing every margin in the business.</p>
          </div>
          <div className="bg-card-bg border-l-[3px] border-neon p-8 mb-8">
            <div className="font-space font-bold text-[11px] tracking-wide uppercase text-neon mb-4">WHAT CHANGED</div>
            <ul className="font-inter text-base text-white leading-[1.7] space-y-2">
              <li>- Ranked all 47 SKUs by actual profit contribution</li>
              <li>- Kill List: 3 SKUs → $134,000 to unlock</li>
              <li>- Found cannibal product competing with #1 seller</li>
              <li>- Subscription retention fix mapped</li>
              <li>- US supplier activated as testing engine</li>
            </ul>
          </div>
          <p className="font-space font-bold text-2xl lg:text-3xl text-white mb-8 leading-[1.3]">
            Result: $215,600 trapped cash identified. Kill List actioned. 30-day plan locked - in one session.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener" className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block">
            FIND OUT WHAT&apos;S TRAPPED IN YOUR BUSINESS
          </a>
        </div>
      </section>

      {/* SECTION 6 - MECHANISM */}
      <section className="bg-dark-bg py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-space font-bold text-4xl lg:text-5xl mb-12 leading-[1.2]">Not insights. Decisions.</h2>
          <div className="font-inter text-[17px] leading-[1.6] space-y-6">
            <p>This is not a dashboard.<br />And it&apos;s not consulting.</p>
            <p className="font-space font-bold text-2xl lg:text-3xl text-white leading-[1.3] py-4">
              80/20 Profit AI is a Profit Decision Engine.
            </p>
            <p>It connects your SKUs, margins, inventory, and acquisition costs - and gives you a ranked list of exactly what to kill, what to scale, and where your cash is trapped. In 48 hours.</p>
            <p className="pt-4">In 48 hours, it connects:</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 my-8">
            {["SKUs", "CAC", "Inventory", "Margins", "Suppliers"].map((label) => (
              <div key={label} className="bg-card-bg border-l-[3px] border-neon p-4 font-space font-bold text-neon text-sm">{label}</div>
            ))}
          </div>
          <p className="font-inter text-[17px] text-supporting mb-6">And turns that into:</p>
          <div className="space-y-5 mb-10">
            {[
              ["Kill this", "here's what it's costing you to keep it"],
              ["Scale this", "here's why it's your real profit driver"],
              ["Test this", "here's your next bet, ranked by upside"],
              ["Fix this", "here's where cash is leaking right now"],
            ].map(([k, v]) => (
              <div key={k} className="border-l-4 border-neon pl-6">
                <p className="font-inter text-[17px] leading-[1.6]">
                  <strong className="text-white">{k}</strong> - {v}
                </p>
              </div>
            ))}
          </div>
          <div className="font-inter text-[17px] leading-[1.6] space-y-6">
            <p>Most tools show you what&apos;s happening.<br />This tells you what to do about it.</p>
            <p className="font-space font-bold text-xl lg:text-2xl text-white pt-4 leading-[1.3]">
              That&apos;s the difference between a dashboard and a decision.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 - MULTIPLIER */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-space font-bold text-4xl lg:text-5xl leading-[1.2]">
                The system shows you the truth.<br />
                The call shows you what to do with it.
              </h2>
              <div className="lg:hidden bg-card-bg border-l-4 border-neon overflow-hidden">
                <img src={MULTIPLIER_IMG} alt="Tarkan Salar" className="w-full h-full object-cover min-h-[500px]" style={{ objectPosition: "center 20%" }} />
                <div className="border-t border-white/10 bg-white/[0.03] px-4 py-2.5 text-center">
                  <p className="font-inter text-sm text-white font-medium tracking-wide">Tarkan Salar</p>
                </div>
              </div>
              <div className="font-inter text-[17px] leading-[1.6] space-y-6">
                <p>After you get your report:</p>
                <p>You get <strong className="text-white">90 minutes with me</strong><br />+ <strong className="text-white">30-minute follow-up</strong></p>
                <p>No slides.<br />No generic advice.</p>
                <p>I built an 8-figure brand from scratch. Created a world-first invention in denim. Designed and produced in my own factories for Louis Vuitton, Adidas, Zara, H&amp;M.</p>
                <p>Then someone offered me €50M to exit.<br />I turned it down. I was too close to my own business and burnt out.</p>
                <p>What came after was 12,000 hours of self-development - studying why some businesses compound and others just get bigger and more complicated.</p>
                <p className="font-space font-bold text-lg text-white leading-[1.4] py-2">
                  This 90-minute call is where 30 years of battle experience meets your specific numbers and your questions.
                </p>
                <p>You ask anything about your business -<br />and get answers based on what I&apos;ve seen inside real P&amp;Ls at scale - not theory applied generically, but your business, with real operator context.</p>
                <p>This is where most of the value gets extracted.</p>
              </div>
            </div>
            <div className="hidden lg:block bg-card-bg border-l-4 border-neon overflow-hidden">
              <img src={MULTIPLIER_IMG} alt="Tarkan Salar" className="w-full h-full object-cover min-h-[500px]" style={{ objectPosition: "center 20%" }} />
              <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3 text-center">
                <p className="font-inter text-sm text-white font-medium tracking-wide">Tarkan Salar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - HOW IT WORKS */}
      <section className="bg-dark-bg py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["STEP 1", "Load Your Numbers into 80/20 Profit AI", "(20 minutes)", "Enter your data once."],
              ["STEP 2", "Clarity", "(48 hours)", "Get your full breakdown."],
              ["STEP 3", "Execution", null, <>Strategy call + follow-up<br />Turn decisions into action</>],
            ].map(([step, title, sub, body], i) => (
              <div key={i} className="border-l-4 border-neon pl-6">
                <div className="font-space font-bold text-[11px] tracking-[0.12em] uppercase text-neon mb-4">{step}</div>
                <h3 className="font-space font-bold text-xl lg:text-2xl mb-3 leading-[1.3]">{title}</h3>
                {sub && <p className="font-inter text-sm text-supporting mb-3">{sub}</p>}
                <p className="font-inter text-[17px] leading-[1.6] text-white">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - GUARANTEE */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-space font-bold text-4xl lg:text-5xl text-white mb-12 leading-[1.2]">
            Find $25,000 - or pay nothing.
          </h2>
          <div className="font-inter text-[17px] leading-[1.6] space-y-6">
            <p>If 80/20 Profit AI does not identify at least $25K in:</p>
            <ul className="space-y-3">
              <li className="border-l-4 border-neon pl-6 font-space font-bold text-xl text-white">Margin</li>
              <li className="border-l-4 border-neon pl-6 font-space font-bold text-xl text-white">Cash</li>
              <li className="border-l-4 border-neon pl-6 font-space font-bold text-xl text-white">Inventory</li>
            </ul>
            <p className="pt-4">You get a full refund.</p>
            <p className="font-space font-bold text-2xl text-white">No friction.</p>
          </div>
        </div>
      </section>

      {/* SECTION 10 - WHAT YOU GET */}
      <section className="bg-dark-bg py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="font-space font-bold text-3xl lg:text-4xl mb-12 leading-[1.2]">Here&apos;s everything included at $4,997:</h2>
          {/* Desktop table */}
          <div className="hidden md:block mb-12">
            <div className="bg-card-bg border-l-4 border-neon">
              <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-neon/20">
                <div className="col-span-4 font-space font-bold text-[11px] tracking-wide uppercase text-neon">WHAT YOU GET</div>
                <div className="col-span-6 font-space font-bold text-[11px] tracking-wide uppercase text-neon">WHAT IT DOES</div>
                <div className="col-span-2 font-space font-bold text-[11px] tracking-wide uppercase text-neon text-right">VALUE</div>
              </div>
              {[
                ["80/20 Bestseller Engine™", "We find your trapped cash, tell you exactly what to do with it, and build the system so it never leaks again. For the first time, every number in your business talks to each other.", "$15,000"],
                ["The Clarity Report™", "Your exact carry / kill / test / bet list", "$5,000"],
                ["90-Minute Strategy Intensive", "Your numbers + 30 years of operator context", "$7,500"],
                ["6 Months Access to 80/20 Profit AI", "Re-run as your business evolves", "$12,000"],
                ["Implementation Check-In", "Keep execution tight", "$2,500"],
              ].map(([name, desc, value], i, arr) => (
                <div key={i} className={`grid grid-cols-12 gap-4 px-6 py-5 ${i < arr.length - 1 ? "border-b border-white/5" : ""}`}>
                  <div className="col-span-4 font-space font-bold text-white">{name}</div>
                  <div className="col-span-6 font-inter text-sm text-supporting leading-[1.5]">{desc}</div>
                  <div className="col-span-2 font-space font-bold text-neon text-right">{value}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile cards */}
          <div className="md:hidden space-y-4 mb-12">
            {[
              ["80/20 Bestseller Engine™", "We find your trapped cash, tell you exactly what to do with it, and build the system so it never leaks again. For the first time, every number in your business talks to each other.", "$15,000"],
              ["The Clarity Report™", "Your exact carry / kill / test / bet list", "$5,000"],
              ["90-Minute Strategy Intensive", "Your numbers + 30 years of operator context", "$7,500"],
              ["6 Months Access to 80/20 Profit AI", "Re-run as your business evolves", "$12,000"],
              ["Implementation Check-In", "Keep execution tight", "$2,500"],
            ].map(([name, desc, value], i) => (
              <div key={i} className="bg-card-bg border-l-4 border-neon p-6">
                <div className="font-space font-bold text-white mb-2">{name}</div>
                <p className="font-inter text-sm text-supporting mb-3 leading-[1.5]">{desc}</p>
                <div className="font-space font-bold text-neon">{value}</div>
              </div>
            ))}
          </div>
          <div className="mb-10 space-y-3">
            <div className="font-space font-extrabold text-3xl lg:text-4xl text-white">Total Value: $42,000</div>
            <div className="font-space font-extrabold text-5xl lg:text-[64px] text-white leading-[1.1]">Your Investment: $4,997</div>
            <p className="font-inter text-sm text-supporting">Backed by the $25K guarantee. If we don&apos;t find it, you don&apos;t pay.</p>
          </div>
          <a href={BOOKING_URL} target="_blank" rel="noopener" className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block">FIND MY TRAPPED CASH</a>
        </div>
      </section>

      {/* SECTION 11 - OBJECTIONS */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="space-y-6">
            <div className="bg-card-bg border-l-4 border-neon p-8">
              <h3 className="font-space font-bold text-2xl text-white mb-5 leading-[1.3]">&ldquo;I don&apos;t have time&rdquo;</h3>
              <blockquote className="font-inter text-[17px] text-supporting italic leading-[1.6] border-l-2 border-neon/40 pl-4">
                &ldquo;I uploaded my data during a lunch break. 48 hours later I had a kill list that would&apos;ve taken my team 3 months to figure out.&rdquo;
              </blockquote>
              <p className="font-space font-semibold text-sm text-neon mt-4">- James, Founder, $15M supplements brand</p>
            </div>
            <div className="bg-card-bg border-l-4 border-neon p-8">
              <h3 className="font-space font-bold text-2xl text-white mb-5 leading-[1.3]">&ldquo;I have a team already&rdquo;</h3>
              <blockquote className="font-inter text-[17px] text-supporting italic leading-[1.6] border-l-2 border-neon/40 pl-4">
                &ldquo;My team is smart. They were optimizing the wrong things. This showed us what actually mattered - the whole system, not just the parts we could see.&rdquo;
              </blockquote>
              <p className="font-space font-semibold text-sm text-neon mt-4">- Sofia, Founder, $25M streetwear brand</p>
            </div>
            <div className="bg-card-bg border-l-4 border-neon p-8">
              <h3 className="font-space font-bold text-2xl text-white mb-5 leading-[1.3]">&ldquo;We&apos;re different&rdquo;</h3>
              <div className="font-inter text-[17px] text-white leading-[1.6] space-y-4">
                <p>Every brand thinks their business is the exception. Here&apos;s what&apos;s actually true:</p>
                <p>If you have products, customers, and inventory - the math works the same way. SKUs either make money or they don&apos;t. Cash is either moving or it&apos;s trapped. Customers either pay back their acquisition cost or they don&apos;t.</p>
                <p>The variables change. The structure doesn&apos;t.</p>
                <p>And if after 48 hours we haven&apos;t found $25K in margin, cash, or inventory - you pay nothing. That&apos;s not a pitch. That&apos;s a guarantee.</p>
              </div>
            </div>
            <div className="bg-card-bg border-l-4 border-neon p-8">
              <h3 className="font-space font-bold text-2xl text-white mb-5 leading-[1.3]">&ldquo;Is this just another tool?&rdquo;</h3>
              <blockquote className="font-inter text-[17px] text-supporting italic leading-[1.6] border-l-2 border-neon/40 pl-4">
                &ldquo;I&apos;ve tried dashboards, BI tools, consultants. This was the first time someone showed me a ranked list of exactly what to do, not just what was happening.&rdquo;
              </blockquote>
              <p className="font-space font-semibold text-sm text-neon mt-4">- Michael, Operator, $8M omnichannel brand</p>
            </div>
            <div className="bg-card-bg border-l-4 border-neon p-8">
              <h3 className="font-space font-bold text-2xl text-white mb-5 leading-[1.3]">&ldquo;Is $4,997 worth it?&rdquo;</h3>
              <div className="font-inter text-[17px] text-white leading-[1.6] space-y-4">
                <p>The average brand we work with finds $200K–$1.2M in trapped cash, dead inventory, or margin leakage in the first session.</p>
                <p>The question isn&apos;t whether $4,997 is worth it.</p>
                <p className="font-space font-bold text-xl text-white pt-2">
                  The question is: what is one more month of scaling without this clarity actually costing you?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 - WHO THIS IS FOR */}
      <section className="bg-dark-bg py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="font-space font-bold text-[11px] tracking-[0.12em] uppercase text-neon mb-8">WHO THIS IS FOR</div>
          <ul className="space-y-4 mb-10">
            {["$3M+ brands", "DTC or omnichannel", "Paid acquisition", "Inventory complexity"].map((t) => (
              <li key={t} className="border-l-4 border-neon pl-6 font-space font-bold text-2xl text-white">{t}</li>
            ))}
          </ul>
          <p className="font-inter text-lg text-supporting italic">Not for early-stage brands</p>
        </div>
      </section>

      {/* SECTION 13 - FUTURE */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-space font-bold text-4xl lg:text-5xl mb-12 leading-[1.2]">90 days from now:</h2>
          <div className="space-y-6 mb-6">
            <div className="border-l-4 border-neon pl-6 font-space font-bold text-2xl lg:text-3xl text-white">Less inventory</div>
            <div className="border-l-4 border-neon pl-6 font-space font-bold text-2xl lg:text-3xl text-white">Better cash flow</div>
            <div className="border-l-4 border-neon pl-6 font-space font-bold text-2xl lg:text-3xl text-white">Clear priorities</div>
          </div>
          <p className="font-space font-bold text-2xl lg:text-3xl text-white pt-6">No guessing</p>
        </div>
      </section>

      {/* SECTION 14 - FINAL CLOSE */}
      <section className="bg-dark-bg py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="font-inter text-2xl lg:text-3xl leading-[1.4] space-y-6 mb-12">
            <p>You already have the data.</p>
            <p>You&apos;re just not seeing it clearly.</p>
            <p className="font-space font-bold text-4xl lg:text-5xl text-white pt-4">Fix that.</p>
          </div>
          <a href={BOOKING_URL} target="_blank" rel="noopener" className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block">FIND MY TRAPPED CASH</a>
        </div>
      </section>

      {/* SECTION 15 - BIO */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="font-inter text-[17px] leading-[1.6] space-y-6">
                <p>I didn&apos;t start as a consultant.</p>
                <div className="lg:hidden bg-card-bg border-l-4 border-neon overflow-hidden my-4">
                  <img src={BIO_IMG} alt="Workshop with elite entrepreneurs - Dubai Harbour" className="w-full object-cover aspect-[4/3]" style={{ objectPosition: "center 40%" }} />
                  <div className="border-t border-white/10 bg-white/[0.03] px-4 py-2.5 text-center">
                    <p className="font-inter text-sm text-white font-medium tracking-wide">Workshop with elite entrepreneurs - Dubai Harbour</p>
                  </div>
                </div>
                <p>I built an 8-figure brand. Created a world-first invention in denim. Designed and produced 50 million units in my own factories for Louis Vuitton, Adidas, Zara, H&amp;M.</p>
                <p>Then someone offered me €50M to exit.<br />I turned it down. I was too close to my own business and burnt out.</p>
                <p>What came after was 12,000 hours of self-development - studying why some businesses compound and others just get bigger and more complicated.</p>
                <p className="font-space font-bold text-xl lg:text-2xl text-white pt-4 leading-[1.3]">80/20 Profit AI is what came out of it.</p>
              </div>
            </div>
            <div className="hidden lg:block bg-card-bg border-l-4 border-neon overflow-hidden">
              <img src={BIO_IMG} alt="Workshop with elite entrepreneurs - Dubai Harbour" className="w-full object-cover aspect-[4/3]" style={{ objectPosition: "center 40%" }} />
              <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3 text-center">
                <p className="font-inter text-sm text-white font-medium tracking-wide">Workshop with elite entrepreneurs - Dubai Harbour</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 16 - SECONDARY CTA */}
      <section className="bg-dark-bg border-t border-neon/20 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-space font-bold text-3xl lg:text-4xl mb-10 leading-[1.2]">Not ready to book a call?</h2>
          <Link href="/quiz" className="border-2 border-neon text-neon font-space font-bold px-8 py-4 text-lg hover:bg-neon hover:text-black transition-colors inline-block">
            TAKE MY FREE PROFIT CHECK
          </Link>
          <p className="font-inter text-sm text-neon mt-4">3 minutes · 8 questions · Find your trapped cash</p>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </>
  );
}
