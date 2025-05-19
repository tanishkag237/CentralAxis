
import Image from "next/image";
import GridSection from "@/components/GridSection";
import VideoBanner from "@/components/VideoBanner";

const gridItems = [
  {
    title: "Real-Time Asset Tracking",
    points: [
      "Real-time server and application performance tracking with ML-powered anomaly detection",
      "Predictive analytics for capacity planning and resource optimization",
      "Custom alerting thresholds with automated incident response",
      "Historical trend analysis and performance forecasting",
    ],
  },
  {
    title: "Synchronized Data Management",
    points: [
      "Granular power monitoring with per-device energy profiling",
      "Advanced PUE optimization with AI-driven recommendations",
      "3D thermal mapping with predictive cooling analytics",
      "Environmental sensor integration and compliance tracking",
    ],
  },
  {
    title: "Comprehensive Lifecycle Management",
    points: [
      "Automated asset discovery and inventory management",
      "Predictive maintenance scheduling with failure prediction",
      "Warranty and service contract tracking",
      "Asset utilization optimization and replacement planning",
    ],
  },
  {
    title: "Advanced Capacity Planning",
    points: [
      "Comprehensive infrastructure health scoring",
      "Cost analysis and optimization recommendations",
      "Capacity trending and growth forecasting",
      "Custom reporting and compliance documentation",
    ],
  },
  {
    title: "Complete Asset Change History",
    points: [
      "Comprehensive infrastructure health scoring",
      "Cost analysis and optimization recommendations",
      "Capacity trending and growth forecasting",
      "Custom reporting and compliance documentation",
    ],
  },
  {
    title: "Parent-Child Relationship Tracking",
    points: [
      "Comprehensive infrastructure health scoring",
      "Cost analysis and optimization recommendations",
      "Capacity trending and growth forecasting",
      "Custom reporting and compliance documentation",
    ],
  },
];

export default function AssetTracking() {
  return (
    <>
      <div className="lg:px-20 text-white pt-8 md:px-7 sm:px-5 xs:px-5">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Intelligent Asset Management
        </h1>

        {/* First Section */}
        <div className="flex flex-wrap justify-around text-white bg-black px-4 py-8">
          {/* Video Block */}
          <div className="w-full md:w-1/2 p-4">
            <video
              src="/dc-mgmt/02asset-mgt.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover rounded"
            />
          </div>

          {/* Text Block */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-medium mb-3">
              Effortless Asset Management for Modern Data Centers
            </h2>
            <p className="font-light text-lg pt-2 pb-4">
              CentralAxis delivers streamlined data center infrastructure
              management through our intelligent asset management solution. Our
              platform removes the burden of manual inventory processes and
              eliminates disconnected systems.
            </p>
            <ul className="list-disc pl-6 font-light text-lg leading-relaxed space-y-3 mb-8">
              <li>
                <span className="font-semibold">Automated Discovery</span>: Identify and catalog your entire infrastructure automatically
              </li>
              <li>
                <span className="font-semibold">Real-Time Tracking</span>: Monitor assets with precise location and status information
              </li>
              <li>
                <span className="font-semibold">Synchronized Data</span>: Maintain a single source of truth across your organization
              </li>
              <li>
                <span className="font-semibold">Comprehensive Lifecycle</span>: Manage the full asset lifecycle seamlessly
              </li>
            </ul>
          </div>
        </div>

        {/* Second Section */}
        <h1 className="text-3xl font-medium mb-4  text-center">
          Automated Discovery & Effortless Onboarding
        </h1>
        <div className="flex flex-wrap justify-around text-white bg-black px-2 py-2">
          {/* Text Block */}
          <div className="w-full md:w-1/2 p-4">
            <p className="font-light text-lg pt-2 pb-4">
              Our intelligent discovery engine automatically identifies and catalogs your entire infrastructure—from servers and network devices to power systems and environmental sensors—with minimal configuration required.
            </p>
            <ul className="list-disc pl-6 font-light text-lg leading-relaxed space-y-3 mb-8">
              <li>
                <span className="font-semibold">Zero-touch discovery</span>: Infrastructure identification with no manual effort
              </li>
              <li>
                <span className="font-semibold">Bulk import capabilities</span>: Efficient onboarding of multiple assets at once
              </li>
              <li>
                <span className="font-semibold">Intelligent classification</span>: Automatically organize assets into logical categories
              </li>
            </ul>
          </div>

          {/* Image Block */}
 <div className="w-full md:w-1/2 p-4 bg-white rounded-xl flex justify-center">
  <Image
    src="/images/01asset-mgt-img.png"
    alt="Automated Discovery Illustration"
    width={500}
    height={300}
    className="rounded-lg w-full max-w-[500px] h-auto"
  />
</div>



        </div>

        {/* third section */}
        <h2 className="text-2xl font-medium mb-3 text-center mt-10">
              Comprehensive DCIM Features
            </h2>
         <div className="px-6 py-10  bg-black text-white">
      <GridSection className="text-md" items={gridItems} />
    </div>

    <VideoBanner
             videoSrc="/dc-mgmt/02asset-mgt.mp4"
             heading={
               <>
                 <p className="text-white text-3xl mb-3">
                   Transform Your Asset Management Today
                 </p>
               </>
             }
             subtext={
               <p>
                Experience the difference that intelligent, automated asset management can make for your data center
               </p>
             }
             position="center"
             buttonContent={
               <a
                 href="https://calendly.com/margarita-centralaxis/30min"
                 className="inline-block px-6 py-3 bg-white text-black rounded-sm hover:bg-gray-200 transition font-light border border-black"
               >
                 Schedule a Demo
               </a>
             }
           />



      </div>
    </>
  );
}
