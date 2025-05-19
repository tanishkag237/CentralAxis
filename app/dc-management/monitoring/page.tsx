import Link from "next/link";

export default function Monitor() {
  return (
    <>
      <div className="lg:px-20 text-white pt-8 md:px-7 sm:px-5 xs:px-5">
        <h1 className="text-4xl font-bold mb-4">
          Infrastructure Monitoring & Asset Management
        </h1>
        <video
          src={"/dc-mgmt/01hb-monitoring.mp4"}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <p className="text-center mb-10 text-sm font-light">
          Real-time monitoring and asset management dashboard
        </p>
        <h1 className="text-3xl mb-7 font-semibold">
          Intelligent Infrastructure Management
        </h1>
        <p className="font-thin text-lg mb-13">
          CentralAxis delivers an integrated platform that combines advanced
          monitoring capabilities with comprehensive asset management. Our
          solution provides real-time insights, predictive analytics, and
          automated maintenance scheduling to optimize your data center
          operations and extend infrastructure lifespan.
        </p>
        <h1 className="text-2xl mb-7 font-semibold">
          Comprehensive Monitoring Features
        </h1>

        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Advanced Performance Monitoring
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>
                Real-time server and application performance tracking with
                ML-powered anomaly detection
              </li>
              <li>
                Predictive analytics for capacity planning and resource
                optimization
              </li>
              <li>
                Custom alerting thresholds with automated incident response
              </li>
              <li>Historical trend analysis and performance forecasting</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Power & Environmental Monitoring
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>
                Granular power monitoring with per-device energy profiling
              </li>
              <li>
                Advanced PUE optimization with AI-driven recommendations
              </li>
              <li>
                3D thermal mapping with predictive cooling analytics
              </li>
              <li>Environmental sensor integration and compliance tracking</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
             Asset Lifecycle Management
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>
               Automated asset discovery and inventory management
              </li>
              <li>
               Predictive maintenance scheduling with failure prediction
              </li>
              <li>
               Warranty and service contract tracking
              </li>
              <li>Asset utilization optimization and replacement planning</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Infrastructure Analytics
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>
                Comprehensive infrastructure health scoring
              </li>
              <li>
                Cost analysis and optimization recommendations
              </li>
              <li>
                Capacity trending and growth forecasting
              </li>
              <li>Custom reporting and compliance documentation</li>
            </ul>
          </div>
        </div>

        {/*  Key Benefits */}
         <h1 className="text-2xl mb-7 font-semibold">
          Key Benefits
        </h1>
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
             <div className=" p-4">
            <h1 className="text-lg font-medium mb-3">
              Operational Excellence
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>
                Reduce downtime through predictive maintenance

              </li>
              <li>
                Optimize resource utilization
              </li>
              <li>
                Streamline maintenance workflows
              </li>
            </ul>
          </div>
           <div className=" p-4">
            <h1 className="text-lg font-medium mb-3">
             Cost Optimization
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>
                Reduce energy consumption by up to 40%
              </li>
              <li>
                Extend equipment lifespan
              </li>
              <li>
                Optimize maintenance costs
              </li>
            </ul>
          </div>
           <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
             Risk Management
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Ensure regulatory compliance</li>
              <li>
                Prevent equipment failures
              </li>
              <li>
                Enhance security monitoring
              </li>

            </ul>
          </div>

        </div>

         <section className="relative w-full overflow-hidden rounded-xl">
            <div className="relative w-full h-auto rounded-lg overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-[98%] h-full object-cover"
              >
                <source
                  src="/dc-mgmt/01hb-monitoring.mp4"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 bg-black/70 z-10" />

              <div className="relative z-20 flex flex-col items-center justify-center px-6 py-12 text-white">
                <h1 className="text-2xl md:text-2xl font-semibold mb-2">
                 Try It Today
                </h1>
                <p className="text-sm md:text-base max-w-3xl font-light mb-4">
                  See how CentralAxis can transform your infrastructure management
                </p>
                <Link
                  href="https://calendly.com/margarita-centralaxis/30min?month=2025-05"
                  className="inline-block text-white px-5 py-2 rounded-lg text-md font-light transition-colors"
                >
                  Schedule a Chat
                </Link>
              </div>
            </div>
          </section>
      </div>
    </>
  );
}
