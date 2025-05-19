
import Image from "next/image";
import GridSection from "@/components/GridSection";
import VideoBanner from "@/components/VideoBanner";

const gridItems = [
  {
    title: "Unified Change Oversight",
    points: [
      "Real-time status tracking of all open change requests",
      "Central dashboard for managing work across sites",
      "Audit trail of changes with detailed timestamps",
    ],
  },
  {
    title: "ITSM & CMDB Sync",
    points: [
      "Consolidated data shared between DC & IT CMDBs",
      "Eliminate manual entry with bidirectional syncing",
      "Supports standard and custom field mappings",
    ],
  },
  {
    title: "Data Accuracy & Visibility",
    points: [
      "Ensure all stakeholders see the same data",
      "Improve decision-making with consistent updates",
      "Reduce errors with automated verification processes",
    ],
  },
];


export default function AssetTracking() {
  return (
    <>
      <div className="lg:px-20 text-white pt-8 md:px-7 sm:px-5 xs:px-5">
        <h1 className="text-3xl font-bold mb-4 text-center">
         Intelligent Change Management
        </h1>

        {/* First Section */}
        <div className="flex flex-wrap justify-around text-white bg-black px-4 py-8">
          {/* Video Block */}
          <div className="w-full md:w-1/2 p-4">
            <video
              src="https://www.centralaxis.com/landing/change-management.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover rounded"
            />
          </div>

          {/* Text Block */}
          <div className="w-full md:w-1/2 pt-10 p-4">
            <h2 className="text-2xl font-medium mb-3">
              Change Made Easy
            </h2>
            <p className="font-light text-lg pt-2 pb-4">
              CentralAxis simplifies change management with a built-in work order system that seamlessly guides tasks from creation to completion. Empower your data center team with automated workflows, smart routing, and complete visibility.
            </p>
            <ul className="list-disc pl-6 font-light text-lg leading-relaxed space-y-3 mb-8">
              <li>Streamlined request-to-complete change process</li>
  <li>Integrated work order creation, approval & fulfillment</li>
  <li>Minimized swivel-chair management and inbox chaos</li>
            </ul>
          </div>
        </div>

        {/* Second Section */}
        <h1 className="text-3xl font-medium mb-4  text-center">
          Visual, Accurate Work Orders
        </h1>
        <div className="flex flex-wrap justify-around text-white bg-black px-2 py-2">
          {/* Text Block */}
          <div className="w-full md:w-1/2 p-4">
            <p className="font-light text-lg pt-2 pb-4">
             Deliver clarity to every team member with visual work orders that contain everything needed to get the job done right—on time and the first time.
            </p>
            <ul className="list-disc pl-6 font-light text-lg leading-relaxed space-y-3 mb-8">
             <li>Visual rack elevations and diagrams included</li>
  <li>Smart routing to appropriate teams based on task type</li>
  <li>Complete, accurate working instructions pre-filled</li>
  <li>Work quality ensured through standardized templates</li>
            </ul>
          </div>

          {/* Image Block */}
 <div className="w-full md:w-1/2 p-4 bg-white rounded-xl flex justify-center">
  <Image
    src="/images/14change-request.png"
    alt="Automated Discovery Illustration"
    width={500}
    height={300}
    className="rounded-lg w-full max-w-[500px] h-auto"
  />
</div>



        </div>

        {/* third section */}
        <h2 className="text-2xl font-medium mb-3 text-center mt-10">
              Monitor, Manage & Report Across Systems
            </h2>
         <div className="px-6 py-10  bg-black text-white">
      <GridSection className="text-md" items={gridItems} />
    </div>

    <VideoBanner
             videoSrc="https://www.centralaxis.com/landing/change-management.mp4"
             heading={
               <>
                 <p className="text-white text-3xl mb-3">
                  Optimize Your Change Management Workflow
                 </p>
               </>
             }
             subtext={
               <p>
                Empower your data center operations team with intelligent, integrated change workflows.
               </p>
             }
             position="center"
             buttonContent={
               <a
                 href="https://calendly.com/margarita-centralaxis/30min"
                 className="inline-block px-6 py-3 bg-white text-black rounded-sm hover:bg-gray-200 transition font-light border border-black"
               >
                 Schedule a Demo
               </a>
             }
           />



      </div>
    </>
  );
}
