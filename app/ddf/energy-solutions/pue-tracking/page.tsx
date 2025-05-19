import VideoBanner from "@/components/VideoBanner";
import Image from "next/image";


export default function PUETracking() {
  return (
    <>
      <div className="text-white text-start font-inter px-8 md:px-12 lg:px-50 py-8">

        <h1 className="text-3xl font-bold mb-5">
         Understanding Data Center Efficiency Metrics

        </h1>
        <h2 className="text-2xl font-semibold mb-6">Power Usage Effectiveness (PUE)</h2>
        <p className="font-light mb-8">
          Power Usage Effectiveness (PUE) is the most widely adopted metric for data center energy efficiency. Developed by The Green Grid, PUE measures the ratio of total facility energy consumption to IT equipment energy consumption. A perfect PUE score would be 1.0, indicating all power is used by IT equipment.
        </p>

         <Image
                  src="/images/02PUE_Example.webp"
                  alt="01ComplianceServices"
                  width={600}
                  height={400}
                  className="w-full max-w-5xl object-cover"
        />

        

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
                Ready to improve your data center's efficiency metrics? Let CentralAxis help you implement comprehensive monitoring and optimization strategies for PUE, DPPE, and DCEP.
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
