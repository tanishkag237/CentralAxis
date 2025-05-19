import Badge from "@/components/Badge";
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
          Data center software (DCIM, BMS and EPMS) has stagnated. We&apos;ve built a
          better way.
        </p>
      </div>
      <HomeScreen />
      {/* Purple block */}
    <div className="bg-[rgba(124,58,237,0.15)] p-5 m-5 rounded-xl flex flex-col md:flex-row md:items-center justify-between mb-25 gap-4">
  <div className="pl-3 pt-3 pb-3 md:text-left text-center">
    <h1 className="text-white text-3xl p-1">
      We&apos;ve Built the Future of Data Centers
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

 <section className="relative w-full pl-8 pr-8 overflow-hidden rounded-xl mt-18 ">
            <div className="relative w-full h-auto rounded-lg overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source
                  src="https://www.centralaxis.com/background.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 bg-black/70 z-10" />

              <div className="relative z-20 flex flex-col items-center justify-center px-6 py-12 text-white">
                <h1 className="text-2xl md:text-2xl font-semibold mb-2">
                  Book a Demo

                </h1>
                <p className="text-xl md:text-base max-w-3xl font-light mb-4">
                  See how CentralAxis can revolutionize your data center operations.
                </p>
                <Link
                  href="https://calendly.com/margarita-centralaxis/30min?month=2025-05"
                  className="inline-block text-black bg-white px-5 py-2  rounded-lg text-md font-medium transition-colors"
                >
                  Schedule Now
                </Link>
              </div>
            </div>
          </section>

<FAQ/>






    </>
  );
}
