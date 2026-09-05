import { VSL_VIDEO } from "../data/images";

export default function Problem() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl text-white mb-10 leading-[1.2]">
          Sound familiar?
        </h2>

        {/* Sales VSL - landscape 16:9, cover frame at 1s */}
        <video
          src={`${VSL_VIDEO}#t=1`}
          controls
          playsInline
          preload="metadata"
          className="w-full aspect-video bg-card-bg border-l-4 border-neon object-cover mb-12"
        />

        <div className="font-inter text-[17px] lg:text-lg leading-[1.6] space-y-6 mb-10">
          <p>CAC keeps rising.</p>
          <p>Copycats keep launching.</p>
          <p>Retailers keep squeezing.</p>
        </div>

        <div className="border-l-4 border-neon pl-6 font-inter text-[17px] lg:text-lg leading-[1.6] space-y-1 mb-10 text-white">
          <p>Marketing says one thing.</p>
          <p>Sales says another.</p>
          <p>Operations does a third.</p>
        </div>

        <p className="font-inter text-[17px] lg:text-lg leading-[1.6] text-supporting mb-12">
          And the customer experiences the inconsistency.
        </p>

        <div className="font-space font-bold text-2xl lg:text-3xl leading-[1.3]">
          <p className="text-supporting">
            You don&apos;t have a marketing problem.
          </p>
          <p className="text-white mt-2">You have a standard problem.</p>
        </div>
      </div>
    </section>
  );
}
