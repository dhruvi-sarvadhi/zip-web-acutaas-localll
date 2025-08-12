// src/components/common/SectionSideIntro.tsx
import React from 'react';
import Button from '../ui/Button';

interface SectionSideIntroProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
}

const SectionSideIntro: React.FC<SectionSideIntroProps> = ({ 
  title, 
  description, 
  buttonLabel, 
  buttonVariant = 'primary' 
}) => {
  return (
<div className="flex flex-col items-center gap-5 lg:items-start lg:gap-7">      
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] !leading-tight font-semibold">
        {title}
      </h2>
      
        <p>{description}</p>
        {buttonLabel && (
          <Button variant={buttonVariant}>{buttonLabel}</Button>
        )}
      </div>
  );
};

export default SectionSideIntro;