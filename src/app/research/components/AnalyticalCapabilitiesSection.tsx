import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/ui/Button';
import { Check } from 'lucide-react';

const AnalyticalCapabilitiesSection: React.FC = () => {
  const bullets = [
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy text',
  ];

  return (
    <section className="overflow-hidden bg-[#FFF8EE] pt-7 md:pt-7 lg:pt-10">
      <div className="main-container">
      <SectionHeader title="Analytical capabilities" />
        <div className="  py-12 md:py-14 lg:py-18 flex flex-col items-center gap-8 md:gap-10 lg:gap-12 text-center">
          <h2 className="max-w-4xl text-3xl font-bold leading-tight text-[#231F20] sm:text-4xl md:text-5xl">
            Lorem Ipsum is simply dummy text
          </h2>
          <p className="text-[#453A3D]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry’s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <h4 className="text-xl font-semibold text-[#231F20]">Lorem Ipsum is simply dummy text?</h4>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bullets.map((text) => (
              <li key={text} className="flex items-center justify-start gap-3 text-[#231F20]">
                  <i className="fi fi-sr-comment-check text-[#B03B23]"></i>
                <span className="text-[#231F20]">{text}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Button variant="primary">Button Text</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticalCapabilitiesSection;

