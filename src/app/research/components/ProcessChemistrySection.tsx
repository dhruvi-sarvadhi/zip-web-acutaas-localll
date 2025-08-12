import SectionHeader from '@/components/common/SectionHeader';
import StatCard from '@/components/common/StatCard';
import SectionIntro from '@/components/common/SectionIntro';


const stats =[
  {
    "value": "150",
    "label": "Lorem Ipsum",
    "description": "text of the printing and typesetting industry."
  },
  {
    "value": "450",
    "label": "Lorem Ipsum",
    "description": "text of the printing and typesetting industry."
  }
]


const ProcessChemistrySection: React.FC = () => {
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <SectionHeader title="Process chemistry capability & infrastructure" />

          <SectionIntro 
          title = 'There are many variations of passages of Lorem Ipsum'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled.'/>


          <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/chemistry-image-1.png"
                alt="Laboratory view"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Middle stacked stat cards */}
            <div className="flex flex-col gap-5 md:gap-6">
              {stats.map((s) => (
                <StatCard
                  key={s.value + s.label}
                  value={s.value}
                  label={s.label}
                  description={s.description}
                />
              ))}
            </div>

            {/* Right image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/chemistry-image-2.png"
                alt="Scientist at work"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessChemistrySection;

