import React from 'react';

interface FeatureListProps {
    features: { title: string; icon: React.ReactNode; desc: string }[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
      {features.map((item, index) => (
        <div key={`${item.title}-${index}`} className="flex flex-col items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F99D1C]">
            {item.icon}
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-2xl font-semibold text-[#231F20]">{item.title}</div>
            <p className="text-base text-[#453A3D]">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
