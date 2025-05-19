import { Check } from "lucide-react";

interface FeatureProps {
  heading: string;
  description: string;
  points: string[];
  url: string;
reverse?: boolean; // new optional prop
}


const FeatureBox = ({ heading, description, points, url, reverse = false }: FeatureProps) => {
  const layoutClass = reverse
    ? "flex-col-reverse md:flex-row-reverse"
    : "flex-col-reverse md:flex-row";

  return (
    <div className={`min-h-[400px] font-inter flex ${layoutClass} pb-4 items-center justify-between gap-8 p-3 border bg-zinc-900/90 m-5 mb-6 border-zinc-700 rounded-md`}>
      
      {/* Text Section */}
      <div className="rounded-xl pl-4 w-full md:w-1/2">
        <h1 className="text-white text-3xl pt-4 pl-4 mb-3">{heading}</h1>
        <p className="text-zinc-400 mb-4 pl-4 font-inter font-light text-lg">{description}</p>
        <ul className="space-y-3 text-zinc-500 pl-4 pt-2 pb-1">
          {points.map((point, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="bg-zinc-800/90 p-1 rounded-full" size={20} />
              <span className="text-zinc-400 font-inter font-thin text-lg">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Video Section */}
      <div className="w-full md:w-1/2 flex justify-end-safe pr-6">
        <video
          src={`/${url}`}
          autoPlay
          loop
          muted
          playsInline
          className="w-[95%] h-full object-cover"
        />
      </div>
    </div>
  );
};


export default FeatureBox;
