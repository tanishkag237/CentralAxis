
import Image from "next/image"
const Footer = () =>{
    return(
        <>
        <br/>
        <hr className="border-gray-700" style={{ borderWidth: "0.3px" }} />
        <div className="bg-black px-6 py-4 w-full md:items-center">
        <div className="flex items-center text-white ">
                   <Image
                     src="/logo_white_icon_only.webp"
                     width={40}
                     height={40}
                     alt="logo"
                   />
                   <p className="p-2 font-custom font-light text-sm">Copyright © 2025</p>
        </div>
        </div>
       
        
        </>
    );
}

export default Footer