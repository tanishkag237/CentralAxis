// components/MobileMenu.tsx
"use client"

import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

  const menus = [
    {
      label: "Data Center Infrastructure Management",
      links: [
        { name: "Monitoring Devices", href: "/dc-management/monitoring" },
        { name: "Asset Tracking", href: "/dc-management/asset-track" },
        { name: "Network Management", href: "/dc-management/" },
        { name: "Change Management", href: "/dc-management/" },
        { name: "Colocation Management", href: "/dc-management/" },
        { name: "Management", href: "/dc-management/" },
        { name: "Firmware Management", href: "/dc-management/" },
        { name: "IP Address Management", href: "/dc-management/" },
        { name: "Custom Portal", href: "/dc-management/" },
        { name: "Custom Insights", href: "/dc-management/" },
        { name: "Custom Data Center Solutions", href: "/dc-management/" },
      ],
    },
    {
      label: "Intelligence Solutions",
      links: [
        { name: "Digital Twin", href: "/intelligence/digital-twins" },
        { name: "Smart Power Mapping", href: "/intelligence" },
        { name: "Predictive Failure and Alerting", href: "/intelligence" },
        { name: "Smart Control Systems", href: "/intelligence" },
        { name: "Automated Discovery", href: "/intelligence" },
      ],
    },
    {
      label: "Data Center Compliance",
      links: [
        { name: "DCOI Compliance", href: "/compliance/dcoi" },
        { name: "(EU) 2023/1791", href: "/compliance" },
        { name: "EN 50600", href: "/compliance" },
        { name: "LEED Certification", href: "/compliance" },
        { name: "ISO/IEC 30134-2", href: "/compliance" },
        { name: "(EPA) ENERGY STAR", href: "/compliance" },
        {
          name: "European Commission Joint Research Centre (JRC)",
          href: "/team",
        },
      ],
    },
    {
      label: "Sustainability Blog",
      links: [
        { name: "Energy Efficiency", href: "/energy-solutions" },
        { name: "Stranded Energy Map", href: "/energy-solutions" },
        { name: "Environmental Product Declaration", href: "/energy-solutions" },
        { name: "Renewables Integration", href: "/energy-solutions" },
        { name: "Power Resource Management", href: "/energy-solutions" },
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
   
    <div className="bg-black text-white p-6 space-y-6 lg:hidden sticky">
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
