import RafeyVideo from "@/components/widgets/RafeyVideo";

export default function Credibility() {
  return (
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
  );
}
