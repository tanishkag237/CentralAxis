import Badge from "@/components/Badge";
import DRMCards from "@/components/DrmCards";
import { Mail } from "lucide-react";

export default function DrmCardsSection() {
  return (
    <div className="flex flex-col md:flex-row p-6 md:p-10 gap-10">
      
      {/* Text Block */}
      <div className="w-full md:w-1/2 break-words ">
        <Badge text={"Built for Scale"} />
        <h1 className="text-white font-inter text-4xl mt-0 mb-3 pl-2">
          Dynamic Resource
        </h1>
        <h1 className="text-white font-inter text-4xl mt-0 mb-3 pl-2">
          Management
        </h1>
        <p className="text-zinc-400 font-inter font-thin text-lg pl-2">
          Seamlessly expand from racks to data centers. Our system grows with you, automatically managing resources across your entire infrastructure.
        </p>
      </div>

      {/* Cards Block */}
      <div className="w-full md:w-1/2 flex overflow-x-auto md:overflow-visible gap-4">
        <div className="flex flex-row md:flex-col gap-4">
          <DRMCards
            title={"Resource Management"}
            subtext={
              "See all of your resources in one place, update issues, and dynamically plan your resources."
            }
            icon={<Mail />}
          />
          <DRMCards
            title={"Deployment Automation"}
            subtext={
              "From design, sourcing, supply, manufacturing, and deployment - our system automates the entire process."
            }
            icon={<Mail />}
          />
          <DRMCards
            title={"Networking"}
            subtext={
              "Ensure that your networking infrastructure is always in place and ready to scale with your deployments."
            }
            icon={<Mail />}
          />
          <DRMCards
            title={"Firmware Versioning"}
            subtext={
              "Ensure that your firmware is always up to date and secure with our automated versioning system."
            }
            icon={<Mail />}
          />
          <DRMCards
            title={"Digital Twins"}
            subtext={"Plan capacity intelligently with our digital twin technology."}
            icon={<Mail />}
          />
        </div>
      </div>
    </div>
  );
}
