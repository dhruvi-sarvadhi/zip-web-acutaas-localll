import { FlaskConical } from 'lucide-react';
import React from 'react';

export interface StatCardProps {
  value: string;
  label: string;
  description: string;
  showCornerIcon?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  showCornerIcon = true,
}) => {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border bg-white border-[#BCB2B2] hover:bg-[#FFF2EF] p-5 shadow-sm md:p-6 h-full">
      <div className="flex items-center justify-between">
        <div className="text-[32px] font-extrabold leading-none text-[#231F20] md:text-[36px]">
          {value}<span className="text-[#B03B23]">+</span>
        </div>

        {showCornerIcon && (
          <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#BCB2B2] bg-[#FFF2EF] group-hover:bg-white">
            <i className="fi fi-rr-flask text-[#B03B23] text-l leading-none"></i>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
  <h3 className="text-2xl font-semibold text-[#231F20]">{label}</h3>
  <p className="text-base text-[#8F7C79]">{description}</p>
</div>

    </div>
  );
};

export default StatCard;

