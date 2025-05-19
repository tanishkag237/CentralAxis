"use client";

const logos = [
  "https://www.centralaxis.com/landing/logos/nvidia.svg",
  "https://www.centralaxis.com/landing/logos/amd.svg",
  "https://www.centralaxis.com/landing/logos/cisco.svg",
  "https://www.centralaxis.com/landing/logos/dell.svg",
  "https://www.centralaxis.com/landing/logos/hp.svg",
  "https://www.centralaxis.com/landing/logos/intel.svg",
  "https://www.centralaxis.com/landing/logos/lenovo.svg",
  "https://www.centralaxis.com/landing/logos/schneider.svg",
  "https://www.centralaxis.com/landing/logos/nvidia.svg",
  "https://www.centralaxis.com/landing/logos/amd.svg",
  "https://www.centralaxis.com/landing/logos/cisco.svg",
  "https://www.centralaxis.com/landing/logos/dell.svg",
  "https://www.centralaxis.com/landing/logos/hp.svg",
  "https://www.centralaxis.com/landing/logos/intel.svg.svg",
  "https://www.centralaxis.com/landing/logos/lenovo.svg.svg",
  "https://www.centralaxis.com/landing/logos/schneider.svg",
];

const LogoSlider = () => {
  return (
    <div className="overflow-hidden w-full bg-black py-5 pb-25">
      <div className="animate-scroll flex gap-10 whitespace-nowrap">
        {/* Duplicate logos for smooth infinite scroll */}
        {logos.concat(logos).map((logo, i) => (
          <div key={i} className="inline-block min-w-[130px]">
            <img
              src={logo}
              alt={`Company Logo ${i}`}
              className="h-14 sm:h-16 md:h-20 lg:h-27 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
