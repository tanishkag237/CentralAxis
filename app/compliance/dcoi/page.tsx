import Image from "next/image";
import Link from "next/link";

export default function DCOI() {
  return (
    <>
      <div className="text-white text-start font-inter px-8 md:px-12 lg:px-50 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Data Center Optimization Initiative (DCOI) Compliance
        </h1>
        <h2 className="text-2xl font-semibold mb-6">What is DCOI?</h2>
        <p className="font-light mb-8">
          The Data Center Optimization Initiative (DCOI) is a United States
          federal government mandate designed to improve the efficiency and
          performance of federal data centers. Established in 2016 and updated
          in 2019, DCOI aims to optimize and consolidate data centers across
          federal agencies.
        </p>

        <Image
          src="/compliance/01ComplianceServices.webp"
          alt="01ComplianceServices"
          width={600}
          height={400}
          className="w-full max-w-5xl object-cover"
        />

        <h2 className="text-2xl mt-10 font-semibold mb-4">
          Key DCOI Requirements
        </h2>
        <p className="font-light mb-6">
          DCOI mandates several key optimization metrics:
        </p>
        <ul className="list-disc pl-6 text-zinc-300 leading-relaxed space-y-2 mb-8">
          <li>Virtualization: Increase virtual machine-to-server ratio</li>
          <li>Energy Metering: Install energy metering in all data centers</li>
          <li>
            Power Usage Effectiveness (PUE): Maintain a PUE of 1.5 or lower (1.4
            for new data centers)
          </li>
          <li>
            Facility Utilization: Improve space utilization and maintain high
            server utilization
          </li>
          <li>
            Cloud Migration: Prioritize cloud-based solutions over on-premises
            infrastructure
          </li>
        </ul>

        <Image
          src="/compliance/02DCOI_requirements.webp"
          alt="02DCOI_requirements"
          width={600}
          height={400}
          className="w-full max-w-5xl object-cover"
        />
        <p className="font-light text-sm mt-6 mb-8">
          Figure 3: Visual representation of key DCOI requirements and targets.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          How CentralAxis Facilitates DCOI Compliance?
        </h2>
        <p className="font-light mb-8">
          CentralAxis offers a comprehensive suite of tools and features
          designed to meet and exceed DCOI requirements, helping agencies
          optimize their data center operations and achieve compliance:
        </p>

        <div className="text-white max-w-5xl mx-auto">
          {[
            {
              title: "Power Management and PUE Tracking",
              points: [
                "Real-time energy consumption monitoring across all data center components",
                "Automated PUE calculation and trending",
                "Alerts for PUE thresholds exceeding DCOI requirements (1.5 for existing, 1.4 for new data centers)",
                "Power usage forecasting and optimization recommendations",
              ],
            },
            {
              title: "Virtualization Management",
              points: [
                "Detailed VM-to-server ratio tracking and reporting",
                "Automated VM allocation and load balancing to maximize efficiency",
                "Idle VM detection and consolidation recommendations",
                "Virtualization capacity planning tools",
              ],
            },
            {
              title: "Energy Metering and Environmental Monitoring",
              points: [
                "Integration with facility-wide energy metering systems",
                "Granular energy usage breakdown by equipment type and area",
                "Environmental sensor data correlation (temperature, humidity) with energy usage",
                "Automated reporting on energy metering coverage and accuracy",
              ],
            },
            {
              title: "Utilization Rate Tracking and Optimization",
              points: [
                "Real-time server and storage utilization monitoring",
                "Automated identification of underutilized resources",
                "Capacity trending and forecasting to prevent over-provisioning",
                "Recommendations for resource reallocation or decommissioning",
              ],
            },
            {
              title: "Cloud Migration and Hybrid Infrastructure Management",
              points: [
                "Cloud readiness assessments for on-premises workloads",
                "Cost comparison tools for on-premises vs. cloud scenarios",
                "Automated workload migration planning and execution",
                "Unified management interface for hybrid cloud/on-premises environments",
              ],
            },
            {
              title: "Compliance Reporting and Analytics",
              points: [
                "Automated generation of OMB-compliant DCOI reports",
                "Customizable dashboards for real-time compliance status monitoring",
                "Historical trend analysis for all DCOI metrics",
                "AI-driven predictive analytics for future compliance challenges",
              ],
            },
            {
              title: "Integration and Interoperability",
              points: [
                "Seamless integration with existing government IT management systems",
                "Support for standard data exchange formats and APIs",
                "Compatibility with major hardware vendors and cloud service providers",
                "Scalable architecture to accommodate agencies of all sizes",
              ],
            },
          ].map((section, idx) => (
            <div className="mb-6" key={idx}>
              <h2 className="text-md font-semibold">• {section.title}</h2>
              <ul className="pl-7 text-md font-light list-inside mt-2">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

          <Image
            src="/compliance/03Compliance_dashboard.webp"
            alt="03Compliance_dashboard"
            width={600}
            height={400}
            className="w-full max-w-5xl object-cover mb-8"
          />

          <section className="relative w-full overflow-hidden rounded-xl">
            <div className="relative w-full h-auto rounded-lg overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source
                  src="https://www.centralaxis.com/background.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 bg-black/70 z-10" />

              <div className="relative z-20 flex flex-col items-start justify-center px-6 py-12 text-white">
                <h1 className="text-2xl md:text-2xl font-semibold mb-2">
                  Achieve DCOI Compliance with CentralAxis
                </h1>
                <p className="text-sm md:text-base max-w-3xl font-light mb-4">
                  Ready to optimize your government data center and meet DCOI
                  requirements? Let CentralAxis guide you through the compliance
                  process and help you maintain optimal performance.
                </p>
                <Link
                  href="https://calendly.com/margarita-centralaxis/30min?month=2025-05"
                  className="inline-block text-white px-5 py-2 rounded-lg text-md font-light transition-colors"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
