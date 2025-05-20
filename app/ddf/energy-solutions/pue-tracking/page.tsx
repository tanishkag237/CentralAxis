import VideoBanner from "@/components/VideoBanner";
import Image from "next/image";

export default function PUETracking() {
  return (
    <>
      <div className="text-white text-start font-inter px-8 md:px-12 lg:px-50 py-8">
        <h1 className="text-3xl font-bold mb-5">
          Understanding Data Center Efficiency Metrics
        </h1>
        <h2 className="text-2xl font-semibold mb-6">
          Power Usage Effectiveness (PUE)
        </h2>
        <p className="font-light mb-8">
          Power Usage Effectiveness (PUE) is the most widely adopted metric for
          data center energy efficiency. Developed by The Green Grid, PUE
          measures the ratio of total facility energy consumption to IT
          equipment energy consumption. A perfect PUE score would be 1.0,
          indicating all power is used by IT equipment.
        </p>

        <Image
          src="/images/02PUE_Example.webp"
          alt="01ComplianceServices"
          width={600}
          height={400}
          className="w-full max-w-5xl object-cover"
        />

        <h2 className="text-2xl font-semibold pt-3 mb-6">
          Data Center Performance per Energy (DPPE)
        </h2>
        <p className="font-light mb-8">
          DPPE is a comprehensive metric that evaluates data center energy
          efficiency through four key components:
        </p>
        <ul className="list-disc pl-6 font-light space-y-1">
          <li>IT Equipment Energy Efficiency (ITEE)</li>
          <li>IT Equipment Utilization (ITEU)</li>
          <li>Facility Energy Efficiency (FEE)</li>
          <li>Green Energy Coefficient (GEC)</li>
        </ul>

        <Image
          src="/images/03DPPE.webp"
          alt="01ComplianceServices"
          width={600}
          height={400}
          className="w-full max-w-5xl object-cover"
        />

        <h2 className="text-2xl font-semibold pt-3 mb-6">
          Data Center Energy Productivity (DCEP)
        </h2>
        <p className="font-light mb-8">
          DCEP measures the useful work produced by a data center divided by the
          total energy consumed to produce that work. This metric provides a
          more nuanced view of data center efficiency by focusing on
          productivity rather than just power consumption.
        </p>

        <div className="text-white pt-2 p-6">
          <ul className="list-disc space-y-4 pl-2">
            <li>
              <strong>Measuring Useful Work:</strong>
              <ul className="list-none pl-6 mt-2 font-light space-y-1">
                <li>Task completion metrics</li>
                <li>Network throughput</li>
                <li>Storage utilization</li>
                <li>Computing cycles completed</li>
              </ul>
            </li>
            <li>
              <strong>Energy Assessment:</strong>
              <ul className="list-none pl-6 mt-2 space-y-1">
                <li>Total facility energy consumption</li>
                <li>Time-based energy analysis</li>
                <li>Workload-specific energy tracking</li>
                <li>Environmental impact considerations</li>
              </ul>
            </li>
          </ul>
        </div>

        <Image
          src="/images/04DCEP.webp"
          alt="01ComplianceServices"
          width={600}
          height={400}
          className="w-full max-w-5xl object-cover"
        />

        <h2 className="text-2xl font-semibold pt-3 mb-6">
          How CentralAxis Tracks These Metrics
        </h2>

        <div className="text-white pt-1 p-6">
          <ul className="list-disc space-y-4 pl-4">
            <li>
              <strong>PUE Monitoring:</strong>
              <ul className="list-none pl-6 mt-2 font-light space-y-1">
                <li>Real-time PUE calculation and tracking</li>
                <li>Automated alerts for PUE threshold violations</li>
                <li>Historical PUE trend analysis</li>
                <li>Cooling efficiency optimization recommendations</li>
              </ul>
            </li>
            <li>
              <strong>DPPE Management:</strong>
              <ul className="list-none pl-6 mt-2 space-y-1">
                <li>Component-level DPPE tracking</li>
                <li>Green energy usage monitoring</li>
                <li>IT equipment efficiency analysis</li>
                <li>Facility optimization suggestions</li>
              </ul>
            </li>
            <li>
              <strong>DCEP Analysis:</strong>
              <ul className="list-none pl-6 mt-2 space-y-1">
                <li>Workload productivity measurement</li>
                <li>Energy consumption correlation</li>
                <li>Performance optimization recommendations</li>
                <li>Custom DCEP reporting and analytics</li>
              </ul>
            </li>
          </ul>
        </div>

        <VideoBanner
          videoSrc="https://www.centralaxis.com/background.webm"
          heading={
            <>
              <p className="text-white text-2xl text-start font-medium mb-2">
                Optimize Your Data Center Efficiency
              </p>
            </>
          }
          subtext={
            <p className="text-start">
              Ready to improve your data center's efficiency metrics? Let
              CentralAxis help you implement comprehensive monitoring and
              optimization strategies for PUE, DPPE, and DCEP.
            </p>
          }
          position="top-left"
          buttonContent={
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              className="inline-block px-6 py-2 text-white text-left rounded-sm font-light border border-black"
            >
              Schedule a Consultation
            </a>
          }
        />
      </div>
    </>
  );
}
