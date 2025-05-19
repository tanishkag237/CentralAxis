import VideoBanner from "@/components/VideoBanner";

export default function EnergyMap() {
  return (
    <>
      <div className="lg:px-20 text-white pt-8 md:px-7 sm:px-5 xs:px-5 p-4">
        <h1 className="text-4xl font-bold mb-4">
          Stranded Energy for Data Centers
        </h1>

        <h1 className="text-3xl py-3 mb-7 font-semibold">
          Unlock the Power of Stranded Energy
        </h1>
        <p className="font-thin text-lg mb-13">
          CentralAxis offers innovative solutions to help you identify and
          leverage stranded energy sources for your data center operations. Our
          interactive maps highlight potential hotspots in Latin America where
          you can access free or heavily discounted energy, significantly
          reducing operational costs and enhancing sustainability.
        </p>
        <h1 className="text-2xl mb-7 font-semibold">
          Interactive Stranded Energy Map
        </h1>
        <div className="w-full h-[40%] mt-6 p-4 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.421840173093!2d-122.41941668467938!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0abf93d%3A0xf7e8572876a3f398!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1680521549274!5m2!1sen!2sus"
            style={{ border: 0 }}
          />
        </div>

        <h1 className="text-2xl mt-7 mb-3 font-semibold">
          Key Features of Our Stranded Energy Solution
        </h1>

        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">Interactive Mapping</h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Real-time visualization of stranded energy hotspots</li>
              <li>Detailed information on energy availability and costs</li>
              <li>Customizable filters for specific energy requirements</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Data Center Suitability Analysis
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>
                Assessment of infrastructure and connectivity in target areas
              </li>
              <li>Climate and geological risk evaluation</li>
              <li>Regulatory and compliance insights for each location</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Energy Source Evaluation
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Analysis of energy source reliability and sustainability</li>
              <li>Forecasting of long-term energy availability</li>
              <li>Integration potential with renewable energy sources</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">ROI Calculator</h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Estimation of potential cost savings from stranded energy</li>
              <li>Comparison of different locations based on energy costs</li>
              <li>
                Long-term financial projections for data center operations
              </li>
            </ul>
          </div>
        </div>

        {/*  Key Benefits */}
        <h1 className="text-2xl mb-7 font-semibold">
          Benefits of Leveraging Stranded Energy
        </h1>
        <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
          <li>
            Significant reduction in operational costs through discounted or
            free energy
          </li>
          <li>Enhanced sustainability and reduced carbon footprint</li>
          <li>Access to untapped markets and expansion opportunities</li>
          <li>Improved energy security and reliability</li>
          <li>
            Potential for partnerships with local energy providers and
            communities
          </li>
          <li>Competitive advantage in the data center industry</li>
        </ul>

        <VideoBanner
          videoSrc="/"
          heading={
            <>
              <p className="text-white text-3xl mb-3">
                Optimize Your Data Center's Energy Strategy
              </p>
            </>
          }
          subtext={
            <p>
              Discover the potential of stranded energy for your data center
              operations. Let our experts guide you through the process of
              identifying and leveraging these cost-effective and sustainable
              energy sources.
            </p>
          }
          position="top-left"
          buttonContent={
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              className="inline-block px-6 py-3 text-white rounded-sm  transition font-light border border-black"
            >
              Schedule a Chat
            </a>
          }
        />
      </div>
    </>
  );
}
