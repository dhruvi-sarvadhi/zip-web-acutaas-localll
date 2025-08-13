import SectionHeader from '@/components/common/SectionHeader';
import CapabilityCard, { defaultCapabilityItems } from './CapabilityCard';
import Button from '@/components/ui/Button';

interface CapabilityItem {
  title: string;
  description: string;
  iconSrc?: string;
  iconAlt?: string;
}

interface CapabilitiesGridProps {
  title?: string;
  items?: CapabilityItem[];
  background?: 'default' | 'muted';
  headline?: string;
  ctaLabel?: string;
}

const CapabilitiesGrid: React.FC<CapabilitiesGridProps> = ({
  title = 'Our Capabilities',
  items = defaultCapabilityItems,
  background = 'default',
  headline,
  ctaLabel,
}) => {
  const sectionBgClass = background === 'muted' ? 'bg-[#FFF8EE]' : 'bg-white';

  return (
    <section className={`overflow-hidden py-12 md:py-16 lg:py-20 ${sectionBgClass}`}>
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title={title} />
          <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-14 text-center">
            {headline && (
              <h2 className="max-w-4xl text-3xl font-bold leading-tight text-[#231F20] sm:text-4xl md:text-5xl">
                {headline}
              </h2>
            )}
            <div className="flex flex-wrap gap-5 xl:gap-7 justify-center">
              {items.map((item, index) => (
                <CapabilityCard key={`${item.title}-${index}`} {...item} />
              ))}
            </div>
            {ctaLabel && (
              <div className="pt-2">
                <Button variant="primary">{ctaLabel}</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid;

