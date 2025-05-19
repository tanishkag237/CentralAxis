import Badge from "@/components/Badge";
import FeaturesLeft from "@/components/FeatureBox";
import Features from "@/components/FeatureBox";
import Image from "next/image";
import HomeScreen from "../data/featurebox";
import Link from "next/link";
import DrmCards from "@/data/drmCards";
import FAQ from "@/components/FAQs";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/InfiniteScroll";

export default function Home() {
  return (
    <>
      <Hero/>
      <p className="text-[rgb(113,113,122)] font-light text-md text-center">Seamless integrations with any data center hardware</p>
      <LogoSlider/>
      {/* Feature List */}
      <div className="flex flex-col text-center items-center justify-center font-inter mb-10">
        <Badge text={"Built for AI"} />
        <h1 className="text-white text-3xl font-medium mb-2">
          Modernizing the Digital Backbone
        </h1>
        <p className="text-[rgb(113,113,122)] font-thin text-lg">
          Data center software (DCIM, BMS and EPMS) has stagnated. We've built a
          better way.
        </p>
      </div>
      <HomeScreen />
      {/* Purple block */}
    <div className="bg-[rgba(124,58,237,0.15)] p-5 m-5 rounded-xl flex flex-col md:flex-row md:items-center justify-between mb-25 gap-4">
  <div className="pl-3 pt-3 pb-3 md:text-left text-center">
    <h1 className="text-white text-3xl p-1">
      We've Built the Future of Data Centers
    </h1>
    <h2 className="text-zinc-400 text-xl p-1">
      Contact our team for a demo
    </h2>
  </div>

  <div className="flex md:flex-col flex-row items-center justify-center gap-2">
    <div className="bg-[rgb(135,80,237)] hover:bg-[rgb(135,76,260)] text-white p-1 px-3 font-thin text-sm rounded-[2rem] transition-colors duration-200 ease-in-out text-center">
      <Link href="https://calendly.com/margarita-centralaxis/30min?month=2025-05">Set up a Time</Link>
    </div>
    <div className="bg-[rgb(24,24,27)] border border-zinc-800 hover:bg-[rgb(39,39,42)] text-white p-1 px-3 font-thin text-sm rounded-[2rem] transition-colors duration-200 ease-in-out text-center">
      <Link href="https://www.centralaxis.com/learn-more">Learn More</Link>
    </div>
  </div>
</div>

{/* -------------- */}
<DrmCards/>

{/* <div
  className=" w-[90%] h-auto] bg-cover bg-center bg-no-repeat md:w-auto -z-10"
  style={{ backgroundImage: "url('images/background.png')" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40 z-20">
<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-3xl md:text-5xl font-bold mb-2">Book a Demo</h1>
    <p className="text-lg md:text-xl font-light">See how CentralAxis can revolutionize your data center operations.</p>
  </div>

  </div>
  
</div> */}

<FAQ/>






    </>
  );
}
