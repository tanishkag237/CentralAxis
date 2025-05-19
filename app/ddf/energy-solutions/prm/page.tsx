import VideoBanner from "@/components/VideoBanner";
import Link from "next/link";

export default function PowResMgmt() {
  return (
    <>
      <div className="lg:px-20 text-white pt-8 md:px-7 sm:px-5 xs:px-5 p-4">
        <h1 className="text-4xl font-bold lg:mb-6 mb-4">
          Power Resource Mapping for Data Centers
        </h1>

        <h1 className="text-3xl mb-7 font-semibold">
          Revolutionize Your Data Center's Energy Efficiency
        </h1>
        <p className="font-light text-md mb-13">
          CentralAxis's Power Resource Mapping solution addresses a critical
          inefficiency in data center operations. Traditionally, data centers
          overprovision their energy supply, paying for significantly more power
          than they use on average to accommodate potential spikes. Our
          innovative approach allows you to operate closer to 100% of your
          energy capacity daily, dramatically reducing costs without
          compromising reliability. <br /> <br />
          During peak demand, our system instantly taps into alternative energy
          reserves, ensuring uninterrupted operation while maintaining optimal
          efficiency. This flexible and responsive approach translates to
          significant savings and improved sustainability for your data center.
        </p>
        <h1 className="text-2xl mb-7 font-medium">
         Key Features of Power Resource Mapping
        </h1>

        <div className="grid md:grid-cols-2 gap-4 grid-cols-1 pt-2 p-5">
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
             Real-time Energy Usage Monitoring
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>
                Granular tracking of power consumption patterns
              </li>
              <li>
                AI-driven prediction of energy demand spikes
              </li>
              <li>
                Dynamic adjustment of power allocation
              </li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Flexible Reserve System
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>
                Instant access to alternative energy sources
              </li>
              <li>Seamless integration with existing power infrastructure</li>
              <li>Automated switching to reserve power during peak demand</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Optimization Analytics
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Machine learning algorithms for energy usage optimization</li>
              <li>Customized recommendations for energy efficiency improvements</li>
              <li>Warranty and service contract tracking</li>
             
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Cost Savings Calculator
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Real-time visualization of cost savings</li>
              <li>Projected ROI based on optimized energy usage</li>
              <li>Comparison with traditional energy provisioning models</li>
             
            </ul>
          </div>
        </div>

         <h1 className="text-2xl pb-5 p-2 font-medium">
         Benefits of CentralAxis Power Resource Mapping
        </h1>
        <ul className="list-disc p-2 list-inside text-md font-light space-y-2">
  <li>Significant reduction in energy costs through optimized usage</li>
  <li>Enhanced reliability with instant access to reserve power</li>
  <li>Improved sustainability through more efficient energy consumption</li>
  <li>Increased operational flexibility to handle varying workloads</li>
  <li>Better capacity planning and infrastructure scaling</li>
  <li>Reduced carbon footprint and improved environmental compliance</li>
</ul>

 <h1 className="text-2xl pb-5 pt-9 font-medium">
        How It Works
        </h1>
<ol className="list-decimal p-2 list-inside text-md font-light space-y-2">
  <li>Continuous monitoring of data center power consumption</li>
  <li>AI-driven prediction of upcoming demand spikes</li>
  <li>Proactive allocation of power resources</li>
  <li>Instant activation of flexible reserves when needed</li>
  <li>Seamless return to standard operation post-spike</li>
</ol>


        

        <VideoBanner
                  videoSrc="/"
                  heading={
                    <>
                      <p className="text-white text-2xl font-normal mb-3">
                       Optimize Your Data Center's Energy Strategy
                      </p>
                    </>
                  }
                  subtext={
                    <p className="max-w-6xl pb-2">
                     Ready to revolutionize your data center's energy efficiency? Let our experts show you how Power Resource Mapping can significantly reduce your costs while maintaining peak performance.
                    </p>
                  }
                  position="top-left"
                  buttonContent={
                    <a
                      href="https://calendly.com/margarita-centralaxis/30min"
                      className="inline-block px-6 py-3  text-white rounded-sm transition font-light border border-black"
                    >
                      Schedule a Power Optimization Consultation
                    </a>
                  }
                />
      </div>
    </>
  );
}
