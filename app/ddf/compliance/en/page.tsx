import VideoBanner from "@/components/VideoBanner";
import Image from "next/image";


export default function En50600() {
  return (
    <>
      <div className="text-white text-start font-inter px-8 md:px-12 lg:px-50 py-8">
        <h1 className="text-3xl font-bold mb-6">
          EN 50600 Compliance for Data Centers
        </h1>
        <h2 className="text-2xl font-semibold mb-6">
          What is EN 50600 for Data Centers?
        </h2>
        <p className="font-light mb-8">
          EN 50600 is a comprehensive European standard series that provides
          detailed requirements and recommendations for data center facilities
          and infrastructures. This internationally recognized standard enables
          a modular approach to data center design, operation, and efficiency.{" "}
          <br />
          <br />
          The standard allows organizations to classify different aspects of
          their data center independently, providing greater flexibility and
          precision in facility assessment.
        </p>

        <Image
          src="/images/10EN-50600.webp"
          alt="01ComplianceServices"
          width={600}
          height={400}
          className="w-full max-w-5xl pb-2 object-cover"
        />

        <h2 className="text-2xl font-medium mb-6">
          Why EN 50600 Matters for Data Centers
        </h2>
        <ul className="list-disc list-inside text-md mb-6 font-light space-y-2 p-2">
          <li>
            Flexibility: Independent classification of different infrastructure
            components.
          </li>
          <li>
            International Recognition: Widely accepted standard, especially in
            European markets.
          </li>
          <li>
            Comprehensive Coverage: Addresses all critical facility
            infrastructure elements.
          </li>
          <li>
            Risk Management: Structured approach to availability and security
            requirements.
          </li>
          <li>
            Cost Optimization: Ability to target investments where they matter
            most.
          </li>
        </ul>

        <h2 className="text-2xl font-medium mb-4">
          EN 50600 Classification System
        </h2>

        <h3 className="pb-4 font-light">
          EN 50600 uses a class-based system (1-4) for different facility
          aspects:
        </h3>
        <ul className="list-disc list-inside text-md font-light space-y-2 p-2">
          <li>Power Distribution Systems (Class 1-4)</li>
          <li>Environmental Control Systems (Class 1-4)</li>
          <li>Telecommunications Cabling Infrastructure (Class 1-4)</li>
          <li>Physical Security Systems (Class 1-4)</li>
          <li>Data Center Management and Operation (Class 1-4)</li>
        </ul>

        <h3 className="pb-4 font-light mt-3">
          Each class represents increasing levels of availability and
          functionality, allowing facilities to optimize their infrastructure
          based on specific business needs.
        </h3>

        <h2 className="text-2xl mt-8 font-semibold mb-4">
          How CentralAxis Helps with EN 50600 Compliance
        </h2>
        <h3 className="pb-4 font-light">
         CentralAxis offers comprehensive solutions to help data centers achieve and maintain EN 50600 compliance:
        </h3>
        <ul className="list-disc list-inside text-md font-light space-y-2 p-2">
           <li>Component-level monitoring and classification assessment</li>
  <li>Real-time tracking of availability metrics for all infrastructure systems</li>
  <li>Customizable dashboards for different EN 50600 components</li>
  <li>Gap analysis tools for achieving desired classification levels</li>
  <li>Performance monitoring and optimization recommendations</li>
  <li>Documentation support for certification process</li>
  <li>Regular compliance checks and reporting</li>
        </ul>

        <VideoBanner
          videoSrc="https://www.centralaxis.com/background.webm"
          heading={
            <>
              <p className="text-white font-medium text-2xl mb-3">
                Achieve EN 50600 Compliance with CentralAxis
              </p>
            </>
          }
          subtext={
            <p className="text-md">
              Ready to enhance your data center's infrastructure and achieve EN 50600 compliance? Let CentralAxis guide you through the classification process and help you optimize your facility performance.
            </p>
          }
          position="top-left"
          buttonContent={
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              className="inline-block px-6 py-3  text-white rounded-sm transition font-light border border-black"
            >
              Get certified now
            </a>
          }
        />
      </div>
    </>
  );
}
