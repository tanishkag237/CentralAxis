
import GridSection from "@/components/GridSection";
import VideoBanner from "@/components/VideoBanner";



export default function Dcc() {
  return (
    <>
      <div className="lg:px-16 text-white pt-8 md:px-7 sm:px-5 xs:px-5">
        <h1 className="text-4xl font-bold mb-4 text-start">
         Data Center Planning
        </h1>
        {/* Video Block */}
        <div className="w-full  p-4">
          <video
            src="https://www.centralaxis.com/Video3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover rounded"
          />
        </div>

        <h1 className="text-3xl mb-7 pt-8 font-semibold">
         Advanced Planning Solutions
        </h1>
        <p className="font-thin text-lg mb-13">
          CentralAxis offers state-of-the-art planning solutions for your data center, providing interactive rack selection and real-time updates on power and infrastructure requirements to optimize layout, capacity, and efficiency.
        </p>
        <h1 className="text-2xl mb-7 font-semibold">
          Key Planning Features
        </h1>

        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
             Interactive Rack Selection
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Visual 3D modeling of data center layout</li>
  <li>Drag-and-drop rack placement and configuration</li>
  <li>Real-time updates on space utilization</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
             Power Requirement Analysis
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
               <li>Instant power consumption estimates based on rack selection</li>
  <li>Power distribution planning and optimization</li>
  <li>Capacity planning for UPS and backup systems</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
             Cooling Infrastructure Planning
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
              <li>Heat load calculations based on selected equipment</li>
  <li>Cooling system recommendations and sizing</li>
  <li>Airflow modeling and optimization</li>
            </ul>
          </div>
          <div className=" p-4">
            <h1 className="text-xl font-medium mb-3">
              Network Infrastructure Planning
            </h1>
            <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
             <li>Automated cable length calculations and routing</li>
  <li>Network topology visualization and optimization</li>
  <li>Bandwidth requirement forecasting</li>
            </ul>
          </div>
        </div>
   
     <h1 className="text-3xl mb-7 pt-8 font-semibold">
         Benefits of CentralAxis Planning
        </h1>
        <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
             <li>Optimized space utilization and capacity planning</li>
  <li>Reduced time and cost in data center design and deployment</li>
  <li>Improved energy efficiency through precise infrastructure sizing</li>
  <li>Future-proofing through scalable design and growth forecasting</li>
  <li>Risk mitigation through comprehensive infrastructure analysis</li>
        </ul>

        <VideoBanner
          videoSrc="https://www.centralaxis.com/background.webm"
          heading={
            <>
              <p className="text-white text-3xl mb-3">
               Plan Your Ideal Data Center with CentralAxis
              </p>
            </>
          }
          subtext={
            <p>
            Experience the power of CentralAxis's advanced planning solutions. Our team of experts is ready to help you design and optimize your data center for maximum efficiency and scalability.
            </p>
          }
          position="top-left"
          buttonContent={
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              className="inline-block px-6 py-3  text-white rounded-sm  transition font-light border border-black"
            >
              Schedule a Consultation
            </a>
          }
        />
      </div>
    </>
  );
}
