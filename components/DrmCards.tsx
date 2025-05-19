interface Drm {
  icon: React.ReactNode;
  title: string;
  subtext: string;
}

export default function DRMCards({ icon, title, subtext }: Drm) {
  return (
    <div className="bg-zinc-900/80  border border-zinc-700 border-opacity-50 max-w-[600px] p-6 flex font-custom rounded-md items-center gap-4">
      
      {/* Icon Circle */}
     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800/90 text-white">
        {icon}
      </div>

      {/* Text Content */}
      <div className="p-1">
        <h1 className="text-white text-lg font-semibold">{title}</h1>
        <h2 className="text-zinc-400/70 text-sm">{subtext}</h2>
      </div>
    </div>
  );
}
