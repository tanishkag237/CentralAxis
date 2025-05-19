
import GridSection from "@/components/GridSection";
import VideoBanner from "@/components/VideoBanner";

const gridItems = [
  {
    title: "Data Center Migrations",
    points: [
      "End-to-end asset tracking and transfer coordination",
      "Dependency mapping and risk analysis",
      "Visual migration plans with milestone tracking",
    ],
  },
  {
    title: "Legacy Network Mapping",
    points: [
      "Auto-discovery of devices and logical paths",
      "Visual topology maps across racks and layers",
      "Integration with existing documentation and diagrams",
    ],
  },
  {
    title: "Custom Dashboards & Interfaces",
    points: [
      "Tailored UIs for different teams or tenants",
      "Role-based access to specific views and data",
      "Interactive maps, KPI panels, and visualizations",
    ],
  },
  {
    title: "Workflow Automation",
    points: [
      "Custom ticketing and change processes",
      "API connectors to ITSM, BMS, CMDB, or HR systems",
      "Scheduled tasks, triggers, and automation rules",
    ],
  },
  {
    title: "Advanced Reporting & Exports",
    points: [
      "Exportable compliance and audit reports",
      "Custom data pipelines and historical trend reports",
      "Data federation from multiple DCIM sources",
    ],
  },
  {
    title: "Tailored Integrations",
    points: [
      "Connect legacy tools with modern APIs",
      "Bridge gaps between cloud and on-prem environments",
      "Build middleware or adapters around custom business logic",
    ],
  },
];


export default function CustomSolutions() {
  return (
    <>
      <div className="lg:px-16 text-white pt-8 md:px-7 sm:px-5 xs:px-5">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Custom Solutions Built for Your Data Center
        </h1>

        {/* Text Block */}
        <div className="m-5 mt-12 text-center font-medium lg:pl-25 lg:pr-25">
          <h1 className="text-2xl">
            Every data center is different — so we build to match.
          </h1>
          <p className="text-[17px] p-5  lg:px-13 font-light">
            Whether you’re migrating to a new site, mapping legacy networks, or need a custom integration built around your workflow — the CentralAxis team can help. We deliver full-service, flexible solutions tailored to your infrastructure, processes, and business goals.


          </p>
        </div>

        {/* Second Section */}
        <div className="pt-8">
          <h1 className="text-3xl font-semibold text-center">
           What We Can Deliver
          </h1>
          <div className="lg:px-6 py-5 md:px-2 bg-black text-white">
            <GridSection
              className="md:grid-cols-2 text-[15px] md:p-3 lg:p-4"
              items={gridItems}
            />
          </div>
        </div>

        <VideoBanner
          videoSrc="/"
          heading={
            <>
              <p className="text-white text-3xl mb-3">
                Let’s Build Your Ideal Data Center Solution
              </p>
            </>
          }
          subtext={
            <p className="max-w-2xl">
              CentralAxis is more than just a platform — it’s a partner. From migration to modernization, we collaborate with your team to design and deliver high-impact solutions that scale.
            </p>
          }
          position="center"
          buttonContent={
            <a
              href="https://calendly.com/margarita-centralaxis/30min?month=2025-05"
              className="inline-block px-6 py-3 bg-white text-black rounded-sm  transition font-light border border-black"
            >
              Book a Consultation
            </a>
          }
        />
      </div>
    </>
  );
}
