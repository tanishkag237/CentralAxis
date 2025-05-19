import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="w-full py-20">
        <div className="relative bg-[radial-gradient(ellipse_at_bottom,_rgba(139,92,246,0.3),_transparent_80%)]">
          
          {/* Vertical lines visible only on md and up */}
          <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
            <div className="absolute left-30 top-0 bottom-1 w-[0.5px] h-[325] bg-zinc-800" />
            <div className="absolute right-30 top-0 bottom-1 w-[0.5px] bg-zinc-800" />
          </div>

          {/* Main content */}
          <div className="w-full text-center font-inter text-white lg:px-50">
            <h1 className="lg:text-6xl font-medium md:text-4xl text-3xl">
              Data Center Management Software
            </h1>
            <p className="font-thin mt-2 mb-10">
              Increase uptime, reduce costs, automate operations, and stay
              compliant.
              <br />
              Built for colocations, data centers, and cloud providers.
            </p>
          </div>

          {/* Top hr */}
          <hr className="w-full h-[0.5px] bg-zinc-700 border-0 shadow" />

          {/* Request Demo Button */}
          <div className="flex justify-center mb-12">
            <div className="bg-[rgb(139,92,246)] p-4 text-center inline-block hover:bg-[rgb(124,58,237)]">
              <Link
                className="text-white font-thin px-30 py-0.5 inline-block "
                href={"https://calendly.com/margarita-centralaxis/30min?month=2025-05"}
              >
                Request Demo
              </Link>
            </div>
          </div>

          {/* Bottom hr */}
          <hr className="w-full h-[0.5px] bg-zinc-700 border-0 shadow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
