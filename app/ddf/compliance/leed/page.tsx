import VideoBanner from "@/components/VideoBanner";
import Image from "next/image";


export default function Leed() {
  return (
    <>
      <div className="text-white text-start font-inter px-8 md:px-12 lg:px-50 py-8">
        <h1 className="text-3xl font-bold mb-6">
          LEED Compliance for Data Centers
        </h1>
        <h2 className="text-2xl font-semibold mb-6">What is LEED?</h2>
        <p className="font-light mb-8">
          LEED (Leadership in Energy and Environmental Design) is a globally
          recognized green building certification program developed by the U.S.
          Green Building Council (USGBC). It provides a framework for healthy,
          highly efficient, and cost-saving green buildings. <br />
          <br />
          For data centers, LEED certification demonstrates a commitment to
          sustainability, energy efficiency, and environmental responsibility
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Why LEED Matters for Data Centers
        </h2>
        <ul className="list-disc list-inside text-md mb-6 font-light space-y-2">
          <li>
            <strong>Energy Efficiency:</strong> LEED-certified data centers
            consume less energy, reducing operational costs.
          </li>
          <li>
            <strong>Environmental Impact:</strong> Certification ensures reduced
            carbon footprint and resource consumption.
          </li>
          <li>
            <strong>Water Conservation:</strong> LEED promotes water-efficient
            cooling systems and landscaping.
          </li>
          <li>
            <strong>Corporate Responsibility:</strong> Demonstrates commitment
            to sustainability and environmental stewardship.
          </li>
          <li>
            <strong>Market Differentiation:</strong> LEED certification can be a
            competitive advantage in the data center industry.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-6">
          LEED Certification Levels
        </h2>

        <Image
          src="/images/07leed-certification-levels.webp"
          alt="01ComplianceServices"
          width={600}
          height={400}
          className="w-full max-w-5xl object-cover"
        />
        <p className="font-light mt-5 text-[13px] ">
          Figure 1: LEED certification levels - Certified, Silver, Gold, and
          Platinum.
        </p>

        <h2 className="text-2xl mt-8 font-semibold mb-2">
          Key LEED Credits for Data Centers
        </h2>
        <h3 className="pb-4 font-light">
          Data centers can earn LEED points in several categories, including:
        </h3>
        <ul className="list-disc list-inside text-md font-light space-y-2">
          <li>
            <strong>Energy and Atmosphere:</strong> Optimize energy performance,
            use renewable energy
          </li>
          <li>
            <strong>Water Efficiency:</strong> Reduce water usage in cooling
            systems
          </li>
          <li>
            <strong>Materials and Resources:</strong> Use sustainable materials,
            manage waste
          </li>
          <li>
            <strong>Indoor Environmental Quality:</strong> Maintain good air
            quality, thermal comfort
          </li>
          <li>
            <strong>Innovation:</strong> Implement cutting-edge green
            technologies
          </li>
          <li>
            <strong>Regional Priority:</strong> Address geographically specific
            environmental priorities
          </li>
        </ul>

        <h2 className="text-2xl mt-8 font-semibold mb-4">
          How CentralAxis Helps with LEED Compliance
        </h2>
        <h3 className="pb-4 font-light">
          CentralAxis offers comprehensive solutions to help data centers
          achieve and maintain LEED certification:
        </h3>
        <ul className="list-disc list-inside text-md font-light space-y-2">
          <li>Energy monitoring and optimization tools</li>
          <li>Water usage tracking and efficiency recommendations</li>
          <li>Waste management and recycling program support</li>
          <li>Indoor environmental quality monitoring</li>
          <li>Automated reporting for LEED documentation</li>
          <li>Continuous performance tracking for maintaining certification</li>
        </ul>

        <h2 className="text-2xl mt-8 font-semibold mb-4">
          LEED Certification Process
        </h2>

        <Image
          src="/images/08leed-process_ongreening.webp"
          alt="01ComplianceServices"
          width={600}
          height={400}
          className="w-full max-w-5xl object-center px-25"
        />
        <p className="font-light mt-5 text-[13px] pb-8 ">
          Figure 2: Overview of the LEED certification process for data centers.
        </p>
         <VideoBanner
                  videoSrc="https://www.centralaxis.com/background.webm"
                  heading={
                    <>
                      <p className="text-white text-2xl mb-3">
                       Achieve LEED Compliance with CentralAxis
                      </p>
                    </>
                  }
                  subtext={
                    <p className="text-md">
                     Ready to make your data center more sustainable and efficient? Let CentralAxis guide you through the LEED certification process and help you maintain compliance.
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
                      href="https://calendly.com/margarita-centralaxis/30min"
                      className="inline-block px-7 py-2 bg-white text-black rounded-sm hover:bg-gray-200 transition font-light border border-black"
                    >
                     Request LEED Info Pack
                    </a>

                    
                  }
                />

       
        </div>
    </>
  );
}
