// components/MobileMenu.tsx
"use client"

import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

  const menus = [
    {
      label: "Data Center Infrastructure Management",
      links: [
        { name: "Monitoring Devices", href: "/dashboard" },
        { name: "Asset Tracking", href: "/" },
        { name: "Network Management", href: "/" },
        { name: "Change Management", href: "/" },
        { name: "Colocation Management", href: "/" },
        { name: "Management", href: "/" },
        { name: "Firmware Management", href: "/" },
        { name: "IP Address Management", href: "/" },
        { name: "Custom Portal", href: "/" },
        { name: "Custom Insights", href: "/" },
        { name: "Custom Data Center Solutions", href: "/" },
      ],
    },
    {
      label: "Intelligence Solutions",
      links: [
        { name: "Digital Twin", href: "/design" },
        { name: "Development", href: "/development" },
        { name: "Consulting", href: "/consulting" },
      ],
    },
    {
      label: "Data Center Compliance",
      links: [
        { name: "Company", href: "/company" },
        { name: "Team", href: "/team" },
      ],
    },
    {
      label: "Sustainability Blog",
      links: [
        { name: "Support", href: "/support" },
        { name: "Feedback", href: "/feedback" },
      ],
    },
  ]


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
