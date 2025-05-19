// components/GridSection.tsx
import React from "react";

interface GridItem {
  title: string;
  points: string[];
}

interface GridSectionProps {
  items: GridItem[];
  className?: string;
}

const GridSection: React.FC<GridSectionProps> = ({ items, className }) => {
  return (
    <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1 ${className || ""}`}>
      {items.map((item, index) => (
        <div key={index} className="p-4">
          <h1 className="text-xl font-medium mb-3">{item.title}</h1>
          <ul className="list-disc pl-6 text-white font-light leading-relaxed space-y-2 mb-8">
            {item.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GridSection;
