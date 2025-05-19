import VideoBanner from "@/components/VideoBanner";


export default function EUDataCentre() {
  return (
    <>
      <div className="text-white text-start font-inter px-8 md:px-12 lg:px-50 py-8">
        <h1 className="text-3xl font-bold mb-5">
          EU Data Centre Regulation 2023/1791 Compliance
        </h1>
        <h2 className="text-2xl font-semibold mb-6">
          Understanding the EU Data Centre Directive
        </h2>

        <div className="">
          <p className="font-light">
            The EU Directive 2023/1791 introduces comprehensive reporting
            requirements for data centres across the European Union, focusing on
            transparency, energy efficiency, and sustainability of digital
            infrastructure.
          </p>
          <br />
          <p className="font-light mb-8 mt-0">
            This landmark regulation mandates detailed reporting on energy
            consumption, technical capabilities, and environmental impact for
            data centres.
          </p>
        </div>

        <div className="w-full pb-5  bg-black text-white">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Box 1 */}
    <div className="border border-white rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Reporting Requirementsg</h2>
      <ul className="list-disc list-inside space-y-2 text-xs font-light">
        <li>Installed IT Power Demand</li>
        <li>Total Energy Consumption</li>
        <li>Water Usage Effectiveness</li>
        <li>Renewable Energy Consumption</li>
        <li>Server and Storage Capacity</li>
        <li>Data Traffic Volumes</li>
        <li>Waste Heat Reuse</li>
      </ul>
    </div>

    {/* Box 2 */}
    <div className="border border-white rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Sustainability Indicators</h2>
      <ul className="list-disc list-inside space-y-2 text-xs font-light">
        <li>Power Usage Effectiveness (PUE)</li>
        <li>Water Usage Effectiveness (WUE)</li>
        <li>Energy Reuse Factor (ERF)</li>
        <li>Renewable Energy Factor (REF)</li>
      </ul>
      <em><p className="text-xs pt-2">Measures efficiency and impact</p></em>
    </div>

    {/* Box 3 */}
    <div className="border border-white rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">CentralAxis Compliance Solutions</h2>
      <ul className="list-disc list-inside space-y-2 text-xs font-light">
        <li>Automated Data Collection</li>
        <li>Real-time Metric Tracking</li>
        <li>Comprehensive Reporting</li>
        <li>Energy Monitoring</li>
        <li>Renewable Integration Assessment</li>
        <li>Waste Heat Optimization</li>
        <li>Compliance Documentation</li>
      </ul>
    </div>

  </div>
</div>


          <VideoBanner
            videoSrc="https://www.centralaxis.com/background.webm"
            heading={
              <>
                <p className="text-white text-2xl text-start mb-2">
                  Navigate EU Regulation Compliance with CentralAxis
                </p>
              </>
            }
            subtext={
              <p className="text-start">
                Ready to transform regulatory complexity into a competitive
                advantage? Let CentralAxis guide you through EU Data Centre
                Regulation compliance.
              </p>
            }
            position="top-left"
            buttonContent={
              <a
                href="https://calendly.com/margarita-centralaxis/30min"
                className="inline-block px-6 py-2 text-white text-left rounded-sm font-light border border-black"
              >
                Schedule Compliance Consultation
              </a>
            }
          />
        </div>
    </>
  );
}
