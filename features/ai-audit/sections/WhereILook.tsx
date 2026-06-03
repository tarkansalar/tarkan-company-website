export default function WhereILook() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          Where I look.
        </p>

        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-12 leading-[1.2] text-white">
          I look for the leaks that usually hide in plain sight.
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-card-bg border-l-4 border-neon p-7">
            <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-4">
              Profit leaks.
            </p>
            <ul className="space-y-3 pl-0">
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Weak SKUs eating cash
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Ad spend going to low-margin products
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Inventory sitting too long
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Supplier costs or supplier risk
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Returns and quality issues
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Slow product launches
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Bottlenecks your team works around every day
              </li>
            </ul>
          </div>

          <div className="bg-card-bg border-l-4 border-neon p-7">
            <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-4">
              AI/tool leaks.
            </p>
            <ul className="space-y-3 pl-0">
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Tools nobody really uses
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Duplicate software
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Dashboards that do not drive decisions
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                AI tools that create more work
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Manual tasks that should be simplified
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Places AI could speed up decisions
              </li>
              <li className="border-l-4 border-neon pl-5 font-inter text-[16px] leading-[1.55] text-white">
                Places AI should be ignored completely
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 space-y-3">
          <p className="font-inter text-[17px] leading-[1.6] text-white">
            The point is not to find everything.
          </p>
          <p className="font-space font-bold text-2xl text-neon leading-[1.3]">
            The point is to find what matters first.
          </p>
        </div>
      </div>
    </section>
  );
}
