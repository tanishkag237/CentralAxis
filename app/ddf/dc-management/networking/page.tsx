import VideoBanner from "@/components/VideoBanner";


export default function Network() {
  return (
    <>
      <div className="lg:px-20 text-white pt-8 md:px-7 sm:px-5 xs:px-5 p-4">
        <h1 className="text-4xl font-bold mb-4">
          Network Monitoring
        </h1>
        <video
          src={"https://www.centralaxis.com/landing/networking-b.mp4"}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <p className="text-center mb-10 text-sm font-light">
         CentralAxis Network Monitoring and Visualization Platform
        </p>
        <h1 className="text-3xl mb-7 font-semibold">
          Advanced Network Monitoring Solutions
        </h1>
        <p className="font-thin text-lg mb-13">
          CentralAxis provides comprehensive network monitoring with real-time visualization, detailed port mapping, and intelligent connection tracking. Our platform delivers deep insights into your network topology, traffic patterns, and device connectivity, enabling proactive management and optimal performance.
        </p>
        <h1 className="text-2xl mb-7 font-semibold">
          Network Monitoring Capabilities
        </h1>

        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Real-time Network Visualization
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Interactive topology maps with live updates</li>
  <li>Detailed device and connection status monitoring</li>
  <li>Port-level activity tracking and analysis</li>
  <li>Bandwidth utilization heat maps</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Connection Analytics
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Real-time connection tracking and logging</li>
  <li>Port mapping and service discovery</li>
  <li>Protocol-level traffic analysis</li>
  <li>Historical connection pattern analysis</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
             Performance Monitoring
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Detailed latency and throughput metrics</li>
  <li>Port-level performance statistics</li>
  <li>Network bottleneck identification</li>
  <li>Custom performance threshold alerts</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Advanced Diagnostics
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Automated network health checks</li>
  <li>Deep packet inspection and analysis</li>
  <li>Connection quality monitoring</li>
  <li>Network path analysis tools</li>

            </ul>
          </div>
        </div>

        {/*  Key Benefits */}
         <h1 className="text-2xl mb-7 font-semibold">
          Monitoring Benefits
        </h1>
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
             <div className=" p-4">
            <h1 className="text-lg font-medium mb-3">
              Visibility
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
               <li>Complete network topology mapping</li>
  <li>Real-time connection tracking</li>
  <li>Comprehensive port monitoring</li>
            </ul>
          </div>
           <div className=" p-4">
            <h1 className="text-lg font-medium mb-3">
            Analysis
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
             <li>Deep traffic pattern insights</li>
  <li>Historical trend analysis</li>
  <li>Performance bottleneck detection</li>
            </ul>
          </div>
           <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
             Optimization
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Data-driven network tuning</li>
  <li>Proactive issue detection</li>
  <li>Capacity planning insights</li>

            </ul>
          </div>

        </div>

        <VideoBanner
                  videoSrc="https://www.centralaxis.com/landing/networking-b.mp4"
                  heading={
                    <>
                      <p className="text-white text-3xl mb-3">
                       Try It Today
                      </p>
                    </>
                  }
                  subtext={
                    <p>
                     Experience comprehensive network monitoring with CentralAxis
                    </p>
                  }
                  position="center"
                  buttonContent={
                    <a
                      href="https://calendly.com/margarita-centralaxis/30min"
                      className="inline-block px-6 py-3 bg-white text-black rounded-sm  transition font-light border border-black"
                    >
                      Schedule a Chat
                    </a>
                  }
                />
      </div>
    </>
  );
}
