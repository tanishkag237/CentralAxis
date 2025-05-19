import Link from "next/link";
import Image from "next/image";
import GridSection from "@/components/GridSection";
import VideoBanner from "@/components/VideoBanner";

const gridItems = [
  {
    title: "Predictive Failure Models",
    points: [
      "Analyzes patterns to detect early signs of failure",
      "Monitors sensors, power, environment, and asset behavior",
      "Supports proactive maintenance workflows",
    ],
  },
  {
    title: "Smart Alert Filtering",
    points: [
      "Reduces false alarms and alert storms",
      "Correlates events to avoid duplicates",
      "Escalates only high-risk, confirmed issues",
    ],
  },
  {
    title: "Root Cause Correlation",
    points: [
      "Links alerts to physical, network, and power dependencies",
      "Heatmap-based fault tracing and impact zones",
      "Drives faster incident resolution",
    ],
  },
  {
    title: "Ticketing Integration",
    points: [
      "Auto-create tickets in ServiceNow, Jira, Zendesk, and more",
      "Bi-directional sync for ticket status and updates",
      "Custom routing rules by site, team, or asset type",
    ],
  },
  {
    title: "Real-Time Dashboards",
    points: [
      "Live view of all active and predicted incidents",
      "Group alerts by location, severity, or asset class",
      "Enable operations to act before failures occur",
    ],
  },
  {
    title: "Custom Alert Policies",
    points: [
      "Set thresholds based on asset, site, or risk profile",
      "Integrate business logic into alert rules",
      "Enable silent alerts for observability without noise",
    ],
  },
];

export default function PredictiveFailure() {
  return (
    <>
      <div className="lg:px-16 text-white pt-8 md:px-7 sm:px-5 xs:px-5">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Predictive Failure Detection & Smart Alerting
        </h1>
        {/* Video Block */}
        <div className="w-full  p-4">
          <video
            src="https://www.centralaxis.com/landing/alerts.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover rounded"
          />
        </div>

        {/* Text Block */}
        <div className="m-5 mt-12 text-center font-medium lg:pl-25 lg:pr-25">
            <h1 className="text-2xl">Real Issues. Zero Noise.</h1>
            <p className="text-[17px] lg:px-10 p-5 font-light">CentralAxis monitors your infrastructure for both real-time failures and early warning signals. Our intelligent alerting engine filters out the noise, prioritizes true risk, and integrates with the tools your team already uses — like ServiceNow, Jira, and more.</p>
        </div>



        {/* Second Section */}
        <div className="pt-8">
             <h1 className="text-3xl font-semibold text-center">What Makes CentralAxis Different</h1>
          <div className="lg:px-6 py-5 md:px-2 bg-black text-white">
      <GridSection className="md:grid-cols-2 text-[15px] md:p-3 lg:p-4" items={gridItems} />
    </div>
        </div>
 

        <VideoBanner
          videoSrc="https://www.centralaxis.com/landing/alerts.mp4"
          heading={
            <>
              <p className="text-white text-3xl mb-3">
               Spot Problems Early — and Solve Them Fast
              </p>
            </>
          }
          subtext={
            <p>
             CentralAxis gives you predictive intelligence and alerting that makes sense — not noise. Empower your ops teams to focus on what matters most.
            </p>
          }
          position="center"
          buttonContent={
            <a
              href="/get-started"
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
