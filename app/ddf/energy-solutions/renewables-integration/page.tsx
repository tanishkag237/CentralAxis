import VideoBanner from "@/components/VideoBanner";


export default function Renewables() {
  return (
    <>
      <div className="lg:px-20 text-white pt-8 md:px-7 sm:px-5 xs:px-5 p-4">
        <h1 className="text-4xl font-semibold lg:mb-6 mb-4">
          Renewable Energy Integration for Data Centers
        </h1>

        <h1 className="text-3xl mb-7 font-medium">
          Powering the Future with On-Site Renewables
        </h1>
        <p className="font-light text-md mb-13">
         CentralAxis leads the charge in integrating large-scale renewable energy reserves directly into data center operations. Our innovative approach combines on-site solar and wind installations with intelligent energy management systems, providing a sustainable, cost-effective, and reliable power solution for modern data centers. <br /> <br />
          By leveraging on-site renewable energy, data centers can significantly reduce their carbon footprint, lower operational costs, and tap into lucrative government incentives designed to promote sustainable practices in the tech industry.


        </p>
        <h1 className="text-2xl mb-7 font-medium">
        Key Features of Our Renewable Integration Services

        </h1>

        <div className="grid md:grid-cols-2 gap-4 grid-cols-1 pt-2 p-5">
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
             Large-Scale On-Site Solar Arrays
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Custom-designed solar installations to maximize energy capture</li>
  <li>Advanced photovoltaic technology for optimal efficiency</li>
  <li>Scalable solutions to meet growing energy demands</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              On-Site Wind Turbine Farms
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
               <li>Strategic placement for maximum wind energy harvesting</li>
  <li>Low-noise, high-efficiency turbine technology</li>
  <li>Adaptable designs for various geographical locations</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Intelligent Energy Management System
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Real-time monitoring and optimization of energy flow</li>
  <li>Seamless integration with grid power for uninterrupted operation</li>
  <li>Predictive analytics for energy production and consumption</li>
             
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Energy Storage Solutions
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
               <li>High-capacity battery systems for energy storage</li>
  <li>Load balancing to optimize renewable energy usage</li>
  <li>Backup power capabilities for enhanced reliability</li>
             
            </ul>
          </div>
        </div>

         <h1 className="text-2xl pb-5 p-2 font-medium">
         Government Incentives for Renewable Energy in Data Centers

        </h1>
        <ul className="list-disc p-2 list-inside text-md font-light space-y-2">
  <li>Federal Investment Tax Credit (ITC) for solar installations</li>
  <li>Production Tax Credits (PTC) for wind energy systems</li>
  <li>Accelerated depreciation benefits (MACRS)</li>
  <li>State-specific renewable energy credits and rebates</li>
  <li>Grants and low-interest loans for green energy projects</li>
  <li>Carbon offset credits and emissions reduction incentives</li>
</ul>

 <h1 className="text-2xl pb-5 pt-9 font-medium">
        Benefits of CentralAxis Renewable Integration
        </h1>
<ol className="list-decimal p-2 list-inside text-md font-light space-y-2">
  <li>Significant reduction in operational energy costs</li>
  <li>Enhanced energy independence and reliability</li>
  <li>Substantial decrease in carbon footprint and environmental impact</li>
  <li>Positive public image and corporate social responsibility</li>
  <li>Potential for energy sales back to the grid during low-usage periods</li>
  <li>Future-proofing against rising energy costs and regulations</li>
  <li>Competitive advantage in the data center market</li>
</ol>


        

        <VideoBanner
                  videoSrc="/"
                  heading={
                    <>
                      <p className="text-white text-2xl font-normal mb-3">
                      Transform Your Data Center with Renewable Energy
                      </p>
                    </>
                  }
                  subtext={
                    <p className="max-w-6xl pb-2">
                    Ready to harness the power of on-site renewables and unlock government incentives? Let our experts show you how to revolutionize your data center's energy strategy with large-scale solar and wind integration.
                    </p>
                  }
                  position="top-left"
                  buttonContent={
                    <a
                      href="https://calendly.com/margarita-centralaxis/30min"
                      className="inline-block px-6 py-3  text-white rounded-sm transition font-light border border-black"
                    >
                     Schedule a Renewable Energy Consultation
                    </a>
                  }
                />
      </div>
    </>
  );
}
