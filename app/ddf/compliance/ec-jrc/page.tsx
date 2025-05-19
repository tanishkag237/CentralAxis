import VideoBanner from "@/components/VideoBanner";
import Image from "next/image";
import Link from "next/link";

export default function ECJRC() {
  return (
    <>
      <div className="text-white text-start font-inter px-8 md:px-12 lg:px-50 py-8">
        <h1 className="text-3xl font-bold mb-6">
          European Commission Joint Research Centre (JRC) Guidelines for Data
          Centers
        </h1>
        <h2 className="text-2xl font-medium mb-4">
          What is the Joint Research Centre (JRC)?
        </h2>
        <p className="font-light mb-8">
          The Joint Research Centre (JRC) is the European Commission's science
          and knowledge service. It provides independent scientific advice and
          support to EU policy-making processes. In the context of data centers,
          the JRC has developed guidelines and best practices for energy
          efficiency and environmental sustainability.
        </p>

        <h2 className="text-2xl font-medium mb-4">
          JRC's Role in Data Center Efficiency
        </h2>
        <p className="font-light mb-8">
          The JRC has been instrumental in developing the EU Code of Conduct for
          Data Centre Energy Efficiency. This voluntary initiative aims to
          inform and stimulate data center operators and owners to reduce energy
          consumption in a cost-effective manner without hampering the
          mission-critical function of data centers.
        </p>

        <h2 className="text-2xl font-medium mb-6">
          Key Areas of JRC Guidelines
        </h2>
        <ul className="list-disc list-inside text-md mb-6 font-light space-y-2">
          <li>IT Equipment and Services</li>
          <li>Cooling Systems</li>
          <li>Data Center Power Equipment</li>
          <li>Data Center Building</li>
          <li>Monitoring and Reporting</li>
        </ul>

        <h2 className="text-2xl font-medium mb-6">
          Aligning with JRC Guidelines
        </h2>

        <Image
          src="/images/09sustainability.webp"
          alt="01ComplianceServices"
          width={600}
          height={400}
          className="w-full max-w-5xl object-cover"
        />
        <p className="font-light mt-5 text-[13px] ">
          Figure 1: Adhering to JRC guidelines for data centers requires
          understanding natural environment factors and energy efficiency
          measures.
        </p>

        <h2 className="text-2xl mt-8 font-semibold mb-2">
          JRC Best Practices for Data Centers
        </h2>
        <h3 className="pb-4 font-light">
          The JRC recommends several best practices, including:
        </h3>
        <ul className="list-disc list-inside text-md font-light space-y-2">
          <li>Implementing free cooling where possible</li>
          <li>Optimizing air management and temperature settings</li>
          <li>Using energy-efficient IT equipment</li>
          <li>Implementing effective power management strategies</li>
          <li>Regular monitoring and reporting of energy consumption</li>
          <li>Considering renewable energy sources</li>
        </ul>

        <h2 className="text-2xl mt-8 font-semibold mb-4">
          How CentralAxis Helps with JRC Compliance
        </h2>
        <h3 className="pb-4 font-light">
          CentralAxis offers comprehensive solutions to help data centers
          achieve and maintain LEED certification:
        </h3>
        <ul className="list-disc list-inside text-md font-light space-y-2 mb-5">
          <li>
            Energy and Atmosphere: Optimize energy performance, use renewable
            energy
          </li>
          <li>Water Efficiency: Reduce water usage in cooling systems</li>
          <li>
            Materials and Resources: Use sustainable materials, manage waste
          </li>
          <li>
            Indoor Environmental Quality: Maintain good air quality, thermal
            comfort
          </li>
          <li>Innovation: Implement cutting-edge green technologies</li>
          <li>
            Regional Priority: Address geographically specific environmental
            priorities
          </li>
        </ul>

        <VideoBanner
          videoSrc="https://www.centralaxis.com/background.webm"
          heading={
            <>
              <p className="text-white text-2xl font-medium mb-3">
                Align with JRC Guidelines using CentralAxis
              </p>
            </>
          }
          subtext={
            <p className="text-md">
              Ready to optimize your data center's energy efficiency according
              to European standards? Let CentralAxis help you implement JRC best
              practices and achieve compliance.
            </p>
          }
          position="top-left"
          buttonContent={
            <a
              href="/get-started"
              className="inline-block px-6 py-3  text-white rounded-sm transition font-light border border-black"
            >
              Schedule a Consultation
            </a>
          }
          buttonContent2={
            <a
              href="/get-started"
              className="inline-block px-7 py-2 bg-white text-black rounded-sm hover:bg-gray-200 transition font-light border border-black"
            >
              Request JRC Compliance Guide
            </a>
          }
        />
      </div>
    </>
  );
}
