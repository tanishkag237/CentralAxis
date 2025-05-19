
import GridSection from "@/components/GridSection";
import VideoBanner from "@/components/VideoBanner";

const gridItems = [
  {
    title: "Automated Discovery",
    points: [
      "Continuously scans the network to detect new devices",
      "Auto-updates inventory when changes are made",
      "Integrates with switch, router, and DHCP data",
    ],
  },
  {
    title: "Visual IP Address Map",
    points: [
      "Interactive UI to browse IP blocks and usage",
      "Color-coded status indicators for availability",
      "Subnet visualizations with drill-down views",
    ],
  },
  {
    title: "IP Conflict Prevention",
    points: [
      "Detects duplicate or overlapping assignments instantly",
      "Alerts and blocks unauthorized changes",
      "Ensures policy-compliant IP usage",
    ],
  },
  {
    title: "DHCP/DNS Integration",
    points: [
      "Integrates with leading DNS & DHCP servers",
      "Keeps records consistent across network systems",
      "Real-time updates to leases and name resolutions",
    ],
  },
  {
    title: "Role-Based Access & Auditing",
    points: [
      "Granular user permissions by region, site, or subnet",
      "Detailed logs of every assignment and change",
      "Compliance-ready reporting and export tools",
    ],
  },
  {
    title: "Self-Service & API Access",
    points: [
      "Enable teams to request and reserve IPs via self-service",
      "APIs for provisioning, querying, and updating IP info",
      "Integrate with CI/CD and infrastructure-as-code tools",
    ],
  },
];




export default function IPam() {
  return (
    <>
      <div className="lg:px-16 text-white pt-8 md:px-7 sm:px-5 xs:px-5">
        <h1 className="text-4xl font-bold mb-4 text-center">
         Intelligent IP Address Management (IPAM)
        </h1>
       
        <div className="flex flex-wrap justify-around text-white bg-black px-4 py-8">
          {/* Video Block */}
          <div className="w-full md:w-1/2 p-4">
            <video
              src="https://www.centralaxis.com/landing/ipam-vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover rounded"
            />
          </div>

          {/* Text Block */}
          <div className="w-full md:w-1/2 p-5">
            <h2 className="text-2xl font-medium mb-3">
              Eliminate IP Conflicts & Simplify Network Management
            </h2>
            <p className="font-light text-lg pt-2 pb-4">
              CentralAxis IPAM provides a centralized, automated system for managing all IP addresses across your data center and enterprise networks. Reduce errors, streamline provisioning, and ensure total visibility over your IP space.
            </p>
            <ul className="list-disc pl-6 font-light text-lg leading-relaxed space-y-3 mb-8">
              <li>
               Real-time discovery and inventory of all IP addresses</li>
              <li>
                Automated conflict detection and resolution
              </li>
              <li>
                Centralized view of subnets, VLANs, and IP assignments
              </li>
              <li>
                Integrated with DNS and DHCP systems
              </li>
            </ul>
          </div>
        </div>




        {/* Second Section */}
       <div className="pt-8">
             <h1 className="text-3xl font-semibold text-center">Powerful IPAM Features Built for Scale</h1>
          <div className="lg:px-6 py-5 md:px-2 bg-black text-white">
      <GridSection className="md:grid-cols-2 text-[15px] md:p-3 lg:p-4" items={gridItems} />
    </div>
        </div>
 

        <VideoBanner
          videoSrc="https://www.centralaxis.com/landing/ipam-vid.mp4"
          heading={
            <>
              <p className="text-white text-3xl mb-3">
               Take Control of Your IP Infrastructure
              </p>
            </>
          }
          subtext={
            <p>
            Discover how CentralAxis IPAM can bring visibility, control, and efficiency to your network.
            </p>
          }
          position="center"
          buttonContent={
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              className="inline-block px-6 py-3 bg-white text-black rounded-sm  transition font-light border border-black"
            >
              Schedule a Demo
            </a>
          }
        />
      </div>
    </>
  );
}
