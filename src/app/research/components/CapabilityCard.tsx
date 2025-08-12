interface CapabilityCardProps {
  title: string;
  description: string;
  icon?: string;
  iconAlt?: string;
}

export const defaultCapabilityItems: CapabilityCardProps[] = [
  {
    title: 'Route Scouting & DoE',
    description: 'Design and optimize synthetic routes using data-driven experimentation and QbD.',
    icon: '/images/product-1.png',
    iconAlt: 'Route scouting',
  },
  {
    title: 'Analytical Development',
    description: 'Method development, validation and impurity profiling with HPLC, GC and LC-MS.',
    icon: '/images/product-2.png',
    iconAlt: 'Analytical development',
  },
  {
    title: 'Scale-up & Tech Transfer',
    description: 'Kilo-lab to pilot scale with documentation, validations and GMP-ready processes.',
    icon: '/images/product-3.png',
    iconAlt: 'Scale-up',
  },
  {
    title: 'Regulatory Support',
    description: 'Comprehensive dossiers, stability studies and compliance for regulated markets.',
  },
  {
    title: 'Safety & Sustainability',
    description: 'Process safety assessments and greener chemistry practices to lower E-factor.',
  },
  {
    title: 'IP & Documentation',
    description: 'Defensive documentation and data integrity across development lifecycle.',
  },
];

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  title,
  description,
  icon,
  iconAlt,
}) => {
  return (
    <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-[#BCB2B2] bg-white p-8 text-center shadow-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#E8D6CD] bg-white shadow-sm">
        {icon ? (
          <img src={icon} alt={iconAlt ?? ''} className="h-8 w-8 object-contain" />
        ) : (
          <i className="fi fi-rr-flask text-[#F99D1C] text-2xl leading-none" />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-[#231F20] md:text-2xl">{title}</h3>
        <p className="text-[#453A3D]">{description}</p>
      </div>
    </div>
  );
};

export default CapabilityCard;

