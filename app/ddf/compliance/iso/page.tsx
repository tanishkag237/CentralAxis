import VideoBanner from "@/components/VideoBanner";
import Image from "next/image";
import Link from "next/link";

export default function Iso() {
  return (
    <>
      <div className="text-white text-start font-inter px-8 md:px-12 lg:px-50 py-8">
        <h1 className="text-3xl font-bold mb-6">
          ISO/IEC 30134-2 Compliance for Data Centers
        </h1>
        <h2 className="text-2xl font-semibold mb-6">
          What is ISO/IEC 30134-2?
        </h2>
        <p className="font-light mb-8">
          ISO/IEC 30134-2 is an international standard that specifies the
          requirements for determining the Power Usage Effectiveness (PUE) of a
          data center. It provides a consistent and globally recognized method
          for calculating and reporting PUE. <br />
          <br />
          This standard is part of the ISO/IEC 30134 series, which focuses on
          data center Key Performance Indicators (KPIs).
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Why ISO/IEC 30134-2 Matters
        </h2>
        <ul className="list-disc list-inside text-md mb-6 font-light space-y-2">
          <li>
            Standardization: Ensures consistent PUE calculation across the
            industry.
          </li>
          <li>
            Benchmarking: Allows for fair comparison between different data
            centers.
          </li>
          <li>
            Efficiency Improvement: Provides a clear metric for tracking and
            improving energy efficiency.
          </li>
          <li>
            Regulatory Compliance: Many regions are adopting this standard for
            energy efficiency regulations.
          </li>
          <li>
            Credibility: Demonstrates commitment to recognized international
            standards.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-6">
          Key Aspects of ISO/IEC 30134-2
        </h2>

        <div className="flex gap-3">
            <div>
                 <Image
          src="/images/12ESG_reporting.webp"
          alt="01ComplianceServices"
          width={600}
          height={400}
          className="w-full max-w-5xl object-cover"
        />
        <p className="font-light mt-5 text-[13px] ">
          Figure 1: Key aspects and requirements of ISO/IEC 30134-2 standard.
        </p>
            </div>

            <div>
                 <Image
          src="/images/13ISO_info.webp"
          alt="01ComplianceServices"
          width={600}
          height={400}
          className="w-full max-w-5xl object-cover"
        />
        <p className="font-light mt-5 text-[13px] ">
          Figure 2: Additional information about ISO/IEC 30134-2.
        </p>
            </div>

        </div>

       

        <h2 className="text-2xl mt-8 font-semibold mb-2">
          PUE Calculation According to ISO/IEC 30134-2
        </h2>

        <h3 className="pb-4 font-light">The standard defines PUE as:</h3>
        <h3 className="pb-4 font-light">
          <strong> PUE = Total Data Center Energy / IT Equipment Energy</strong>
        </h3>
        <h3 className="pb-4 font-light">
          Key considerations in the calculation include:
        </h3>

        <ul className="list-disc list-inside text-md font-light space-y-2">
          <li>Clear definition of data center boundaries</li>
          <li>Specified measurement points for energy consumption</li>
          <li>Guidelines for measurement intervals and data collection</li>
          <li>Categorization of PUE measurement (PUE0, PUE1, PUE2, PUE3)</li>
          <li>Reporting requirements and data presentation</li>
        </ul>

        <h2 className="text-2xl mt-8 font-semibold mb-4">
          How CentralAxis Helps with ISO/IEC 30134-2 Compliance
        </h2>
        <h3 className="pb-4 font-light">
          CentralAxis offers comprehensive solutions to help data centers
          achieve and maintain compliance with ISO/IEC 30134-2:
        </h3>
        <ul className="list-disc list-inside text-md font-light space-y-2">
          <li>Automated PUE calculation according to the standard</li>
          <li>Real-time energy monitoring and data collection</li>
          <li>Clear visualization of PUE trends and components</li>
          <li>Customizable reporting tools for ISO/IEC 30134-2 requirements</li>
          <li>Alerting system for PUE threshold violations</li>
          <li>Recommendations for PUE improvement based on collected data</li>
          <li>Integration with other data center management tools</li>
        </ul>

        <VideoBanner
          videoSrc="https://www.centralaxis.com/background.webm"
          heading={
            <>
              <p className="text-white text-2xl mb-3">
                Achieve ISO/IEC 30134-2 Compliance with CentralAxis
              </p>
            </>
          }
          subtext={
            <p className="text-md">
              Ready to ensure your data center's PUE measurements meet international standards? Let CentralAxis guide you through ISO/IEC 30134-2 compliance and help you optimize your energy efficiency.
            </p>
          }
          position="top-left"
          buttonContent={
            <a
              href="/get-started"
              className="inline-block px-6 py-3 lg:ml-30 text-white rounded-sm transition font-light border border-black"
            >
              Schedule a Consultation
            </a>
          }
          buttonContent2={
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              className="inline-block px-7 py-2 bg-white text-black rounded-sm hover:bg-gray-200 transition font-light border border-black"
            >
              Request ISO/IEC 30134-2 Guide
            </a>
          }
        />
      </div>
    </>
  );
}
