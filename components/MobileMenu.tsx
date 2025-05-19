// components/MobileMenu.tsx
"use client"

import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

  const menus = [
    {
      label: "Data Center Infrastructure Management",
      links: [
        { name: "Monitoring Devices", href: "/ddf/dc-management/monitoring" },
        { name: "Asset Tracking", href: "/ddf/dc-management/asset-track" },
        { name: "Network Management", href: "/ddf/dc-management/networking" },
        { name: "Change Management", href: "/ddf/dc-management/" },
        { name: "Colocation Management", href: "/ddf/dc-management/" },
        { name: "Data Center Planner", href: "/ddf/dc-management/" },
        { name: "Firmware Management", href: "/ddf/dc-management/firm" },
        { name: "IP Address Management", href: "/ddf/dc-management/ipam" },
        { name: "Custom Portal", href: "/ddf/dc-management/customer-portal" },
        { name: "Custom Insights", href: "/ddf/dc-management/insights" },
        { name: "Custom Data Center Solutions", href: "/ddf/dc-management/custom-solutions" },
      ],
    },
    {
      label: "Intelligence Solutions",
      links: [
        { name: "Digital Twin", href: "/ddf/intelligence/digital-twins" },
        { name: "Smart Power Mapping", href: "/ddf/intelligence/power-mapping" },
        { name: "Predictive Failure and Alerting", href: "/ddf/intelligence/predictive-failure" },
        { name: "Smart Control Systems", href: "/ddf/intelligence/control-systems" },
        { name: "Automated Discovery", href: "/ddf/intelligence/discovery" },
      ],
    },
    {
      label: "Data Center Compliance",
      links: [
        { name: "DCOI Compliance", href: "/ddf/compliance/dcoi" },
        { name: "(EU) 2023/1791", href: "/ddf/compliance/eu" },
        { name: "EN 50600", href: "/ddf/compliance/en" },
        { name: "LEED Certification", href: "/ddf/compliance/leed" },
        { name: "ISO/IEC 30134-2", href: "/ddf/compliance/iso" },
        { name: "(EPA) ENERGY STAR", href: "/ddf/compliance/epa" },
        {
          name: "European Commission Joint Research Centre (JRC)",
          href: "/ddf/compliance/ec-jrc",
        },
      ],
    },
    {
      label: "Sustainability Blog",
      links: [
        { name: "Energy Efficiency", href: "/ddf/energy-solutions/pue-tracking" },
        { name: "Stranded Energy Map", href: "/ddf/energy-solutions/energy-map" },
        { name: "Environmental Product Declaration", href: "/ddf/energy-solutions/epd" },
        { name: "Renewables Integration", href: "/ddf/energy-solutions/renewables-integration" },
        { name: "Power Resource Management", href: "/ddf/energy-solutions/prm" },
      ],
    },
  ];


export default function MobileMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleMenu = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <>
   
    <div className="bg-black text-white p-6 space-y-6 lg:hidden z-30 sticky">
      {menus.map((menu, index) => (
        <div key={menu.label}>
          <button
            className="flex  items-center w-full text-left text-lg font-medium text-gray-300 transition-colors"
            onClick={() => toggleMenu(index)}
          >
            {menu.label}
            {openIndex === index ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>

          {openIndex === index && (
            <ul className="mt-2 ml-4 space-y-2">
              {menu.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href || "#"}
                    className="block text-zinc-500 p-2 text-md hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
     </>
  )
}
