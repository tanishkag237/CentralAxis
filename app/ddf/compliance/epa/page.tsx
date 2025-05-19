import VideoBanner from "@/components/VideoBanner";
import Image from "next/image";


export default function EPA() {
  return (
    <>
      <div className="text-white text-start font-inter px-8 md:px-12 lg:px-50 py-8">
        <h1 className="text-3xl font-bold mb-6">
          Energy Star Compliance for Data Centers
        </h1>
        <h2 className="text-2xl font-semibold mb-6">
          What is Energy Star for Data Centers?
        </h2>
        <p className="font-light mb-8">
          Energy Star is a voluntary program established by the U.S.
          Environmental Protection Agency (EPA) that promotes energy efficiency.
          The Energy Star certification for data centers recognizes
          top-performing facilities that demonstrate superior energy
          performance. <br />
          <br />
          This certification helps data centers reduce energy consumption, lower
          operating costs, and minimize their environmental impact.
        </p>

        <Image
          src="/images/11CA_EnergyStarts.webp"
          alt="01ComplianceServices"
          width={600}
          height={400}
          className="w-full max-w-5xl pb-2 object-cover"
        />

        <h2 className="text-2xl font-medium mt-5 mb-6">
          Why Energy Star Matters for Data Centers
        </h2>
        <ul className="list-disc list-inside text-md mb-6 font-light space-y-2 p-2">
          <li>
            Energy Efficiency: Encourages adoption of best practices in energy
            management.
          </li>
          <li>
            Cost Savings: Lower energy consumption leads to reduced operational
            costs.
          </li>
          <li>
            Environmental Impact: Helps reduce greenhouse gas emissions and
            carbon footprint.
          </li>
          <li>
            Industry Recognition: Demonstrates leadership in energy efficiency
            to stakeholders.
          </li>
          <li>
            Competitive Advantage: Differentiates your facility in the market.
          </li>
        </ul>

        <h2 className="text-2xl font-medium mb-4">
          Energy Star Score Calculation for Data Centers
        </h2>

        <h3 className="pb-4 font-light">
          Energy Star uses the Power Usage Effectiveness (PUE) metric as a key
          component in its scoring system:
        </h3>
        <h3 className="pb-4 font-light">
          <strong> PUE = Total Facility Energy / IT Equipment Energy</strong>
        </h3>
        <h3 className="pb-4 font-light">
          Key considerations in the Energy Star certification process include:
        </h3>
        <ul className="list-disc list-inside text-md font-light space-y-2 p-2">
          <li>Minimum of 12 months of energy consumption data</li>
          <li>IT energy metering at UPS output</li>
          <li>Whole building energy metering</li>
          <li>Achievement of a minimum Energy Star score of 75 out of 100</li>
          <li>Compliance with indoor environmental quality standards</li>
        </ul>

        <h2 className="text-2xl mt-8 font-semibold mb-4">
          How CentralAxis Helps with Energy Star Compliance
        </h2>
        <h3 className="pb-4 font-light">
          CentralAxis offers comprehensive solutions to help data centers
          achieve and maintain Energy Star certification:
        </h3>
        <ul className="list-disc list-inside text-md font-light space-y-2 p-2">
          <li>Automated PUE calculation and tracking</li>
          <li>Real-time energy monitoring and data collection</li>
          <li>Clear visualization of energy consumption trends</li>
          <li>Customizable reporting tools for Energy Star requirements</li>
          <li>Alerting system for energy efficiency deviations</li>
          <li>
            Recommendations for energy optimization based on collected data
          </li>
          <li>Support for Energy Star application and documentation process</li>
        </ul>

        <VideoBanner
          videoSrc="https://www.centralaxis.com/background.webm"
          heading={
            <>
              <p className="text-white font-medium text-2xl mb-3">
                Achieve Energy Star Certification with CentralAxis
              </p>
            </>
          }
          subtext={
            <p className="text-md">
              Ready to improve your data center's energy efficiency and earn
              Energy Star certification? Let CentralAxis guide you through the
              process and help you optimize your energy performance.
            </p>
          }
          position="top-left"
          buttonContent={
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              className="inline-block px-6 py-3  text-white rounded-xs transition font-light border border-white"
            >
              Get certified now
            </a>
          }
          buttonContent2={
            <a
              href="/https://calendly.com/margarita-centralaxis/30min"
              className="inline-block px-7 py-3 ml-4 text-black bg-white rounded-xs transition font-light border border-white"
            >
              Request Energy Star Guide
            </a>
          }
        />
      </div>
    </>
  );
}
