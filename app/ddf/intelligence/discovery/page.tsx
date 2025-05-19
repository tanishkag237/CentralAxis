
import GridSection from "@/components/GridSection";
import VideoBanner from "@/components/VideoBanner";

const gridItems = [
  {
    title: "Zero-Touch Asset Detection",
    points: [
      "Instant detection of new servers, network gear, PDUs, and more",
      "No agent install or manual scanning required",
      "Captures model, location, and serial details automatically",
    ],
  },
  {
    title: "AI-Powered Classification",
    points: [
      "Auto-fills manufacturer, model, and specs using AI inference",
      "Cross-references public databases and internal lookup tables",
      "Normalizes naming and metadata for consistency",
    ],
  },
  {
    title: "Dynamic Port & Cable Mapping",
    points: [
      "Detects plugged/unplugged ports in real time",
      "Tracks cable path changes across racks and panels",
      "Maintains accurate live connection topology",
    ],
  },
  {
    title: "Change Detection & Auto-Updates",
    points: [
      "Captures infrastructure changes as they happen",
      "No manual audits or reconciliations needed",
      "Alert or log any unexpected changes in assets or cabling",
    ],
  },
  {
    title: "Bulk Import Friendly",
    points: [
      "Ingests spreadsheets, exports, or CMDB data",
      "Enriches incomplete records automatically",
      "Supports custom mapping rules and field merging",
    ],
  },
  {
    title: "Audit-Ready Accuracy",
    points: [
      "Complete history of discovery events",
      "Track who/what/when of every asset and change",
      "Ensure compliance with confidence",
    ],
  },
];


export default function Discovery() {
  return (
    <>
      <div className="lg:px-16 text-white pt-8 md:px-7 sm:px-5 xs:px-5">
        <h1 className="text-4xl font-bold mb-2 text-center">
          AI-Powered Automated Discovery
        </h1>

        {/* Text Block */}
        <div className="m-5 mt-7 text-center font-medium lg:pl-25 lg:pr-25">
            <h1 className="text-2xl">Discover, Classify, and Sync — Automatically</h1>
            <p className="text-[17px] p-5  lg:px-15 font-light">CentralAxis dramatically reduces the time and effort needed to manage your data center inventory. With AI-powered automated discovery, new assets are detected the moment they come online, classified with accurate metadata, and integrated seamlessly into your DCIM — no spreadsheets or manual entry required.

</p>
        </div>



        {/* Second Section */}
       <div className="pt-8">
             <h1 className="text-3xl font-semibold text-center">Built to Save Hours — and Prevent Errors</h1>
          <div className="lg:px-6 py-5 md:px-2 bg-black text-white">
      <GridSection className="md:grid-cols-2 text-[15px] md:p-3 lg:p-4" items={gridItems} />
    </div>
        </div>
 

        <VideoBanner
          videoSrc="/"
          heading={
            <>
              <p className="text-white text-3xl mb-3">
               Spend Less Time Managing — and More Time Optimizing
              </p>
            </>
          }
          subtext={
            <p className="max-w-3xl pb-2">
             With automated discovery from CentralAxis, you can eliminate hours of manual effort, reduce errors, and maintain real-time visibility across your infrastructure.
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
