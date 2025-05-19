interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="p-2">
    <div className="bg-zinc-900 w-fit px-2 py-1 rounded-xl">
      <p className="text-zinc-500 text-sm font-medium font-custom">{text}</p>
    </div>
    </div>
   
  );
};

export default Badge;
