
import GridSection from "@/components/GridSection";
import VideoBanner from "@/components/VideoBanner";

const gridItems = [
  {
    title: "Remote Power Control",
    points: [
      "Power cycle servers and racks remotely",
      "Integrate with smart PDUs and UPS systems",
      "Enforce safety protocols and approval workflows",
    ],
  },
  {
    title: "Environmental Automation",
    points: [
      "Automate cooling adjustments based on sensor data",
      "Link temperature/humidity changes to control actions",
      "Improve efficiency while avoiding human error",
    ],
  },
  {
    title: "Access & Entry Management",
    points: [
      "Control badge access by schedule, role, or request",
      "Digitally authorize visitors and on-site work",
      "Integrates with facility security systems",
    ],
  },
  {
    title: "Policy-Based Workflows",
    points: [
      "Automate tasks based on thresholds or ticket status",
      "Trigger control actions from ITSM or CMDB events",
      "Audit every control action with logs and approvals",
    ],
  },
  {
    title: "Integration with Smart Hands",
    points: [
      "Assign tasks to on-site teams from the control portal",
      "Link control actions to change tickets or service orders",
      "Track and verify execution in real time",
    ],
  },
  {
    title: "Secure Control Infrastructure",
    points: [
      "Encrypted, role-based access to all control features",
      "Multi-factor control approval for sensitive operations",
      "Detailed audit trail for compliance and accountability",
    ],
  },
];


export default function ControlSystems() {
  return (
    <>
      <div className="lg:px-16 text-white pt-8 md:px-7 sm:px-5 xs:px-5">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Smart Control Systems for Modern Data Centers
        </h1>
        {/* Video Block */}
        <div className="w-full  p-4">
          <video
            src="https://www.centralaxis.com/landing/controls.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover rounded"
          />
        </div>

        {/* Text Block */}
        <div className="m-5 mt-12 text-center font-medium lg:pl-25 lg:pr-25">
            <h1 className="text-2xl">Take Control — From Anywhere</h1>
            <p className="text-[17px] p-5  lg:px-10 font-light">With CentralAxis Smart Control Systems, you get full command over key infrastructure components — remotely, securely, and intelligently. From power cycling and access control to environmental automation and service requests, every control is built to reduce response times and operational overhead.

</p>
        </div>



        {/* Second Section */}
       <div className="pt-8">
             <h1 className="text-3xl font-semibold text-center">What Makes CentralAxis Different</h1>
          <div className="lg:px-6 py-5 md:px-2 bg-black text-white">
      <GridSection className="md:grid-cols-2 text-[15px] md:p-3 lg:p-4" items={gridItems} />
    </div>
        </div>
 

        <VideoBanner
          videoSrc="https://www.centralaxis.com/landing/controls.mp4"
          heading={
            <>
              <p className="text-white text-3xl mb-3">
               Control Smarter. Operate Safer.
              </p>
            </>
          }
          subtext={
            <p>
             CentralAxis brings smart control to every layer of your data center — with the precision, speed, and accountability you need to operate at scale.
            </p>
          }
          position="center"
          buttonContent={
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              className="inline-block px-6 py-3 bg-white text-black rounded-sm hover:bg-gray-200 transition font-medium border border-black"
            >
              Schedule a Demo
            </a>
          }
        />
      </div>
    </>
  );
}
