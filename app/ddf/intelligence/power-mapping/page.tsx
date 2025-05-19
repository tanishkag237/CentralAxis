
import GridSection from "@/components/GridSection";
import VideoBanner from "@/components/VideoBanner";

const gridItems = [
  {
    title: "Upstream-to-Downstream Tracing",
    points: [
      "Map power flow from utility feed to rack level",
      "Track dependencies across UPS, panels, circuits, and PDUs",
      "Visualize chain of impact during outages or anomalies",
    ],
  },
  {
    title: "Live Circuit & PDU Monitoring",
    points: [
      "Track voltage, current, and power draw in real time",
      "Set alerts for load thresholds or fluctuations",
      "Support preventative maintenance with trend data",
    ],
  },
  {
    title: "Busway & Panel Board Visualization",
    points: [
      "View connection points across horizontal and vertical paths",
      "Identify unused breakers or capacity bottlenecks",
      "Supports legacy and modern power systems",
    ],
  },
  {
    title: "Impact Analysis & Fault Mapping",
    points: [
      "Quickly trace which racks are affected by an upstream failure",
      "Visual alerts for any cascading effects",
      "Supports rapid incident resolution workflows",
    ],
  },
  {
    title: "Energy Optimization Insights",
    points: [
      "Identify underutilized circuits and power zones",
      "Balance loads and optimize distribution efficiency",
      "Drive sustainability and cost-reduction goals",
    ],
  },
  {
    title: "Dynamic Power Dashboards",
    points: [
      "Real-time views of power draw by zone, room, or rack",
      "Custom KPI panels for energy, redundancy, and alerts",
      "Supports export, API, and role-based access",
    ],
  },
];

export default function PowerMapping() {
  return (
    <>
      <div className="lg:px-16 text-white pt-8 md:px-7 sm:px-5 xs:px-5">
        <h1 className="text-4xl font-bold mb-4 text-center">
          End-to-End Power Mapping & Optimization
        </h1>
        {/* Video Block */}
        <div className="w-full  p-4">
          <video
            src="https://www.centralaxis.com/landing/power-mapping.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover rounded"
          />
        </div>

        {/* Text Block */}
        <div className="m-5 mt-12 text-center font-medium lg:pl-25 lg:pr-25">
            <h1 className="text-2xl">Complete Visibility from Source to Rack</h1>
            <p className="text-lg p-5 font-light">CentralAxis gives you full-stack insight into power distribution — from transformers and UPS systems to busways, branch circuits, PDUs, and individual racks. Visualize your power infrastructure, track real-time utilization, and quickly identify the impact of upstream issues.</p>
        </div>



        {/* Second Section */}
        <div className="pt-8">
             <h1 className="text-3xl font-semibold text-center">Key Capabilities of Power Mapping</h1>
          <div className="lg:px-6 py-5 md:px-2 bg-black text-white">
      <GridSection className="md:grid-cols-2 text-[15px] md:p-3 lg:p-4" items={gridItems} />
    </div>
        </div>
 

        <VideoBanner
          videoSrc="https://www.centralaxis.com/landing/power-mapping.mp4"
          heading={
            <>
              <p className="text-white text-3xl mb-3">
                Map, Monitor, and Optimize Your Power Infrastructure
              </p>
            </>
          }
          subtext={
            <p>
             CentralAxis brings power data to life — so you can prevent issues, maximize uptime, and run a smarter data center.
            </p>
          }
          position="center"
          buttonContent={
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              className="inline-block px-6 py-3 bg-white text-black rounded-sm transition font-light border border-black"
            >
              Schedule a Demo
            </a>
          }
        />
      </div>
    </>
  );
}
