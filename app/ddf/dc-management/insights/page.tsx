import Link from "next/link";
import Image from "next/image";
import GridSection from "@/components/GridSection";
import VideoBanner from "@/components/VideoBanner";

const gridItems = [
  {
    title: "GPU & Memory Utilization",
    points: [
      "Track usage trends over time across servers or clusters",
      "Set alerts for thresholds and usage anomalies",
      "Support workload placement decisions with data",
    ],
  },
  {
    title: "CPU & Compute Health",
    points: [
      "Monitor processor utilization across applications",
      "Analyze spikes and dips across days or weeks",
      "Identify underperforming or overloaded systems",
    ],
  },
  {
    title: "PDU & UPS Utilization",
    points: [
      "Analyze load distribution across power strips",
      "Track voltage/current trends over time",
      "Detect early signs of failure or inefficiency",
    ],
  },
  {
    title: "Custom Metrics & Sensors",
    points: [
      "Bring in any telemetry from your existing devices",
      "Build custom dashboards and analytics views",
      "Correlate environmental metrics with workload data",
    ],
  },
  {
    title: "Correlation Heatmaps",
    points: [
      "Visualize interdependencies between metrics",
      "Detect root cause patterns across systems",
      "Power anomaly detection models and alerting",
    ],
  },
  {
    title: "Historical Trend Analysis",
    points: [
      "Look back across weeks or months of usage data",
      "Compare performance across assets or clusters",
      "Support capacity planning and resource allocation",
    ],
  },
];


export default function Insights() {
  return (
    <>
      <div className="lg:px-16 text-white pt-8 md:px-7 sm:px-5 xs:px-5">
        <h1 className="text-4xl font-bold mb-4 text-center">
         Custom Insights & Analytics
        </h1>
        {/* Video Block */}
        <div className="w-full  p-4">
          <video
            src="https://www.centralaxis.com/landing/insights.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover rounded"
          />
        </div>

        {/* Text Block */}
        <div className="m-5 mt-12 text-center font-medium lg:pl-25 lg:pr-25">
            <h1 className="text-2xl">Unified Visibility Across Your Infrastructure</h1>
            <p className="text-[17px] p-5  lg:px-10 font-light">CentralAxis brings together performance and operational data from all corners of your data center — compute, power, and environment — into a single analytics engine. Gain insights that go beyond charts to detect patterns, identify root causes, and prevent downtime.

</p>
        </div>



        {/* Second Section */}
       <div className="pt-8">
          <div className="lg:px-6 py-5 md:px-2 bg-black text-white">
      <GridSection className="md:grid-cols-2 text-[15px] md:p-3 lg:p-4" items={gridItems} />
    </div>
        </div>
 

        <VideoBanner
          videoSrc="https://www.centralaxis.com/landing/insights.mp4"
          heading={
            <>
              <p className="text-white font-semibold text-3xl mb-3">
               Unlock Deep Operational Intelligence
              </p>
            </>
          }
          subtext={
            <p>
             CentralAxis Custom Insights empowers your team to see the whole picture, react faster, and plan smarter.
            </p>
          }
          position="center"
          buttonContent={
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              className="inline-block px-6 py-3 bg-white text-black rounded-sm  transition font-medium border border-black"
            >
              Schedule a Demo
            </a>
          }
        />
      </div>
    </>
  );
}
