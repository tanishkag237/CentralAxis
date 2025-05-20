import VideoBanner from "@/components/VideoBanner";

export default function EUDataCentre() {
  return (
    <>
      <div className="text-white text-start font-inter px-8 md:px-12 lg:px-50 py-8">
        <h1 className="text-3xl font-bold mb-5">
          Colocation Infrastructure Management
        </h1>
        <h2 className="text-2xl font-medium mb-6">
          Complete Building Infrastructure Visibility
        </h2>

        <div className="">
          <p className="font-light">
            CentralAxis provides colocation providers with comprehensive
            visibility and management capabilities for their entire building
            infrastructure, from power distribution to cooling systems.
          </p>
          <br />
        </div>

        <div className="w-full  p-4">
          <video
            src="https://www.centralaxis.com/colocation.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover rounded"
          />
        </div>

        <h2 className="text-2xl font-medium mb-6">Asset Management by Room</h2>

        <div className="">
          <p className="font-light">
            Organize and monitor your infrastructure assets with our intuitive
            room-based management system:
          </p>
          <br />
        </div>

        <div className="text-white p-6">
          <ul className="list-disc   space-y-4 pl-4">
            <li>
              <strong>Electrical Rooms:</strong>
              <ul className="list-none font-light pl-6 mt-2 space-y-1">
                <li>Power Distribution Units (PDUs)</li>
                <li>Transformers and switchgear</li>
                <li>UPS systems and batteries</li>
                <li>Bus ducts and power panels</li>
              </ul>
            </li>
            <li>
              <strong>Mechanical Rooms:</strong>
              <ul className="list-none font-light pl-6 mt-2 space-y-1">
                <li>CRAC/CRAH units</li>
                <li>Chillers and cooling towers</li>
                <li>Pumps and water treatment systems</li>
                <li>Air handlers and ventilation equipment</li>
              </ul>
            </li>
            <li>
              <strong>Generator Yards:</strong>
              <ul className="list-none  font-light pl-6 mt-2 space-y-1">
                <li>Backup generators</li>
                <li>Fuel storage tanks</li>
                <li>Transfer switches</li>
                <li>Outdoor electrical equipment</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="w-full pb-5  bg-black text-white"></div>

        <div className="w-full  p-4">
          <video
            src="https://www.centralaxis.com/colocation_room.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover rounded"
          />
        </div>

        <h2 className="text-2xl font-medium mb-6">
          Asset Types and Monitoring
        </h2>
        <div className="text-white p-6">
          <ul className="list-disc space-y-4 pl-4">
            <li>
              <strong>Power Infrastructure:</strong>
              <ul className="list-none font-light pl-6 mt-2 space-y-1">
                <li>
                  Real-time monitoring of transformer load and temperature
                </li>
                <li>Bus duct capacity and utilization tracking</li>
                <li>PDU power consumption and circuit mapping</li>
                <li>UPS performance and battery health monitoring</li>
              </ul>
            </li>
            <li>
              <strong>Cooling Systems:</strong>
              <ul className="list-none font-light pl-6 mt-2 space-y-1">
                <li>CRAC/CRAH unit performance metrics</li>
                <li>Chilled water temperature and flow rates</li>
                <li>Cooling tower efficiency monitoring</li>
                <li>Environmental sensor data integration</li>
              </ul>
            </li>
            <li>
              <strong>Building Systems:</strong>
              <ul className="list-none font-light pl-6 mt-2 space-y-1">
                <li>Fire suppression system status</li>
                <li>Security system integration</li>
                <li>Building automation system connectivity</li>
                <li>Loading dock and freight elevator monitoring</li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-medium mb-6">Key Features</h2>

        <div className="text-white p-6">
          <ul className="list-disc space-y-4 pl-4">
            <li>
              <strong>Asset Lifecycle Management:</strong>
              <ul className="list-none font-light pl-6 mt-2 space-y-1">
                <li>Warranty and maintenance tracking</li>
                <li>Service history documentation</li>
                <li>Replacement planning and budgeting</li>
                <li>Vendor contract management</li>
              </ul>
            </li>
            <li>
              <strong>Real-time Monitoring:</strong>
              <ul className="list-none font-light pl-6 mt-2 space-y-1">
                <li>Custom alerting and notification system</li>
                <li>Performance trending and analysis</li>
                <li>Predictive maintenance indicators</li>
                <li>Mobile access to critical metrics</li>
              </ul>
            </li>
            <li>
              <strong>Reporting and Analytics:</strong>
              <ul className="list-none font-light pl-6 mt-2 space-y-1">
                <li>Customizable dashboard views</li>
                <li>Equipment efficiency reporting</li>
                <li>Maintenance cost analysis</li>
                <li>Capacity planning tools</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="w-full  p-4">
          <video
            src="https://www.centralaxis.com/colocation.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover rounded"
          />
        </div>

        <VideoBanner
          videoSrc="https://www.centralaxis.com/colocation_data.mp4"
          heading={
            <>
              <p className="text-white text-2xl text-start mb-2">
                Optimize Your Colocation Infrastructure
              </p>
            </>
          }
          subtext={
            <p className="text-start">
              Ready to transform how you manage your colocation facility's
              infrastructure? Let CentralAxis show you how our solution can
              improve efficiency and reduce operational costs.
            </p>
          }
          position="top-left"
          buttonContent={
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              className="inline-block px-6 py-2 text-white text-left rounded-sm font-light border border-black"
            >
              Schedule a Demo
            </a>
          }
        />
      </div>
    </>
  );
}
