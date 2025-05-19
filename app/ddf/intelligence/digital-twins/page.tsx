import Link from "next/link";
import Image from "next/image";
import GridSection from "@/components/GridSection";
import VideoBanner from "@/components/VideoBanner";

const gridItems = [
  {
    title: "3D Rack & Room Views",
    points: [
      "Full 3D replication of rooms, racks, and assets",
      "Pan, zoom, and rotate with intuitive controls",
      "Hover and click for live status and metadata",
    ],
  },
  {
    title: "Live Heat Maps",
    points: [
      "Real-time thermal overlays across aisles and racks",
      "Visualize hot spots, airflow, and cooling impact",
      "Integrates with environmental sensors",
    ],
  },
  {
    title: "Asset-Level Drilldown",
    points: [
      "Click into any asset to view live status & details",
      "Track power draw, temperature, and network links",
      "Overlay alerts, maintenance status, or tickets",
    ],
  },
  {
    title: "Real-Time Synchronization",
    points: [
      "Instantly reflects asset moves, adds, or change",
      "No manual syncing or refresh required",
      "Backed by live DCIM data feeds",
    ],
  },
  {
    title: "Capacity & Planning Layers",
    points: [
      "View space, power, and cooling utilization",
      "Simulate placement scenarios in 3D",
      "Plan for growth with predictive overlays",
    ],
  },
  {
    title: "Custom Visualizations",
    points: [
      "Highlight custom KPIs or SLA zones",
      "Toggle layers like cabling, power, network, or alerts",
      "Filter views by team, customer, or site",
    ],
  },
];

export default function AssetTracking() {
  return (
    <>
      <div className="lg:px-16 text-white pt-8 md:px-7 sm:px-5 xs:px-5 p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Real-Time Digital Twin of Your Data Center
        </h1>
        {/* Video Block */}
        <div className="w-full  p-4">
          <video
            src="https://www.centralaxis.com/landing/digital-twin.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover rounded"
          />
        </div>

        {/* Text Block */}
        <div className="m-5 mt-12 text-center font-medium lg:pl-25 lg:pr-25">
            <h1 className="text-2xl">A Live 3D View of Your Infrastructure</h1>
            <p className="text-lg p-5 font-light">The CentralAxis Digital Twin creates a real-time 3D replica of your data center, synced directly with your DCIM environment. From rack-level views to temperature overlays, gain full visibility, faster troubleshooting, and smarter planning — all in one immersive interface.</p>
        </div>



        {/* Second Section */}
        <div className="pt-8">
             <h1 className="text-3xl font-semibold text-center">Digital Twin Capabilities</h1>
          <div className="lg:px-6 py-5 md:px-2 bg-black text-white">
      <GridSection className="md:grid-cols-2 text-md md:p-3 lg:p-4" items={gridItems} />
    </div>
        </div>
 

        <VideoBanner
          videoSrc="https://www.centralaxis.com/landing/digital-twin.mp4"
          heading={
            <>
              <p className="text-white text-3xl mb-3">
                Experience Your Data Center Like Never Before
              </p>
            </>
          }
          subtext={
            <p>
              Bring your operations to life with a true digital twin that shows
              everything in real time — and in 3D.
            </p>
          }
          position="center"
          buttonContent={
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              className="inline-block px-6 py-3 bg-white text-black rounded-sm hover:bg-gray-200 transition font-medium border border-black"
            >
              Schedule a Demo
            </a>
          }
        />
      </div>
    </>
  );
}
