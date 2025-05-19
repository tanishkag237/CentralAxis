import Link from "next/link";
import Image from "next/image";
import GridSection from "@/components/GridSection";
import VideoBanner from "@/components/VideoBanner";

const gridItems = [
  {
    title: "Live Power Monitoring",
    points: [
      "Real-time visibility into power usage and trends",
      "Branch circuit monitoring and alerts",
      "Usage summaries by cabinet or service ID",
    ],
  },
  {
    title: "Access Control",
    points: [
      "Request and schedule access to the facility",
      "Manage authorized users per customer site",
      "Track access logs and approvals in one place",
    ],
  },
  {
    title: "Order & Service Cart",
    points: [
      "Request new IP addresses or VLANs",
      "Order smart hands, hardware, or installs",
      "Track order history and status updates",
    ],
  },
  {
    title: "Invoice History",
    points: [
      "View billing history and itemized charges",
      "Export invoices for reconciliation",
      "Optional integration with billing platforms",
    ],
  },
  {
    title: "White-Labeled Experience",
    points: [
      "Custom branding and customer-specific views",
      "Modular layout based on service entitlements",
      "Multi-tenant secure architecture",
    ],
  },
  {
    title: "Built-In with CentralAxis",
    points: [
      "No bolt-ons or separate systems needed",
      "Leverages existing DCIM data and logic",
      "Rapid deployment and customer onboarding",
    ],
  },
];



export default function CustomPortal() {
  return (
    <>
      <div className="lg:px-16 text-white pt-8 md:px-7 sm:px-5 xs:px-5">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Colocation Customer Portal
        </h1>
        {/* Video Block */}
        <div className="w-full  p-4">
          <video
            src="https://www.centralaxis.com/landing/colocation-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover rounded"
          />
        </div>

        {/* Text Block */}
        <div className="m-5 mt-12 text-center font-medium lg:pl-25 lg:pr-25">
            <h1 className="text-2xl">What if your colocation customers had real-time insight — and real control?</h1>
            <p className="text-[17px] p-5  lg:px-10 font-light">CentralAxis gives you a fully integrated, white-labeled customer portal that connects directly to your DCIM data. Let customers view power usage, manage access, submit orders, and track historical invoices — all in one unified interface.

</p>
        </div>



        {/* Second Section */}
       <div className="pt-8">
             <h1 className="text-3xl font-semibold text-center">Key Features for Your Colocation Clients</h1>
          <div className="lg:px-6 py-5 md:px-2 bg-black text-white">
      <GridSection className="md:grid-cols-2 text-[15px] md:p-3 lg:p-4" items={gridItems} />
    </div>
        </div>
 

        <VideoBanner
          videoSrc="https://www.centralaxis.com/landing/colocation-video.mp4"
          heading={
            <>
              <p className="text-white text-3xl mb-3">
               Give Your Colocation Customers the Experience They Deserve
              </p>
            </>
          }
          subtext={
            <p>
            With CentralAxis, you can offer a modern, data-rich portal as a built-in part of your colocation service.
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
