"use client"

import Image from "next/image"
import { AlignJustify } from "lucide-react"
import { useState } from "react"
import DropdownMenu from "./DropdownMenu"
import MobileMenu from "./MobileMenu"
import Link from "next/link"


const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <>
      <header className="px-6 py-3 w-full bg-black/90  z-35 sticky top-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={"/"}>
          <div className="flex items-center">
            <Image
              src="/logo_white_icon_only.webp"
              width={40}
              height={40}
              alt="logo"
            />
            <h1 className="pl-2 font-custom text-2xl text-white font-semibold md:text-md">
              CentralAxis
            </h1>
          </div>
          </Link>
          

          {/* Desktop Dropdown */}
          <div className="hidden lg:block">
            <DropdownMenu />
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            <div className="border-1 border-gray-700 rounded p-2"> <AlignJustify size={22} /></div>
           
          </button>
        </div>
      </header>

      {/* Show mobile dropdown if toggled */}
      {showMobileMenu && <MobileMenu />}

      {/* Thin gray border below header */}
      <hr className="border-gray-700" style={{ borderWidth: "0.5px" }} />
    </>
  )
}

export default Header
