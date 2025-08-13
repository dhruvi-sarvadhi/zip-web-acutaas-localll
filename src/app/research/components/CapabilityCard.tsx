import { FlatIcon } from "@/components/Flaticon";

interface CapabilityCardProps {
  title: string;
  description: string;
  icon?: string;
  iconAlt?: string;
}

export const defaultCapabilityItems: CapabilityCardProps[] = [
  {
    title: 'Flow Chemistry',
    description: 'Continuous reactions for high efficiency',
    icon: 'flask',
    iconAlt: 'Route scouting',
  },
  {
    title: 'Microreactors',
    description: 'Precise control for complex reactions',
    icon: 'flask',
    iconAlt: 'Analytical development',
  },
  {
    title: 'UV Photo Reactors',
    description: 'Harnessing light for advanced synthesis',
    icon: 'flask',
    iconAlt: 'Scale-up',
  },
  {
    title: 'Slurry Flow Reactors',
    description: 'Smooth handling of solid-liquid systems',
    icon: 'flask',

  },
  {
    title: '3D Mixing Tubular Reactors',
    description: 'Uniform mixing for consistent quality',
    icon: 'flask',

  }
];

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  title,
  description,
  icon,
  iconAlt,
}) => {
  return (
    <div className="group flex h-full w-full md:w-[31%] flex-col items-center gap-8 md:gap-12  rounded-2xl border border-[#8F7C79] bg-[#FFF8EE] p-8 text-center shadow-sm relative z-10 transition-all">

      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#BCB2B2] bg-white group-hover:bg-[#FFF8EE] shadow-sm transition-colors duration-500">
        <FlatIcon icon={icon} className="text-[#F99D1C] !text-xl leading-none" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#231F20] md:text-xl">{title}</h3>
        <p className="text-[#8F7C79]">{description}</p>
      </div>
      <div className="bg-white absolute bottom-0 left-0 w-full h-full origin-bottom-left !rounded-2xl scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out z-[-1]"></div>
    </div>
  );
};

export default CapabilityCard;

