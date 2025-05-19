// components/DropdownMenu.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import {
  Root,
  List,
  Item,
  Trigger,
  Content,
} from "@radix-ui/react-navigation-menu";
import { AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DropdownMenu() {
  const menus = [
    {
      label: "Data Center Infrastructure Management",
      links: [
        { name: "Monitoring Devices", href: "/ddf/dc-management/monitoring" },
        { name: "Asset Tracking", href: "/ddf/dc-management/asset-track" },
        { name: "Network Management", href: "/ddf/dc-management/" },
        { name: "Change Management", href: "/ddf/dc-management/" },
        { name: "Colocation Management", href: "/ddf/dc-management/" },
        { name: "Management", href: "/ddf/dc-management/" },
        { name: "Firmware Management", href: "/ddf/dc-management/" },
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

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, 2000);
  };

  return (
    <div className="relative z-50 w-full">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-black/60 text-white">
        {/* <span className="font-semibold">Menu</span> */}
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          <AlignJustify />
        </button>
      </div>

      {/* Mobile Dropdown Content */}
      {mobileOpen && (
        <div className="bg-black text-white p-4 space-y-4 md:hidden">
          {menus.map((menu) => (
            <div key={menu.label}>
              <h3 className="text-sm font-semibold mb-2">{menu.label}</h3>
              <ul className="space-y-1 pl-2">
                {menu.links.map((link) => (
                  <li key={link.name}>
                    {/* <Link
                      href={link.href}
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      {link.name}
                    </Link> */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Desktop Navigation Menu */}
      <Root className="hidden md:block z-30 bg-black">
        <List className="flex items-center  gap-6 px-4 py-3 ">
          {menus.map((menu, index) => (
            <Item
              key={menu.label}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Trigger className="flex items-center gap-1 text-white hover:text-gray-300 z-30 bg-black transition-colors text-sm">
                {menu.label} ▼
              </Trigger>

              {activeIndex === index && (
                <Content className="absolute right-0 mt-2 w-72 bg-black bg-opacity-100 border border-white rounded-md shadow-lg">
                  <ul className="flex flex-col p-2">
                    {menu.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-sm text-white hover:text-gray-300 transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Content>
              )}
            </Item>
          ))}
        </List>
      </Root>
    </div>
  );
}
