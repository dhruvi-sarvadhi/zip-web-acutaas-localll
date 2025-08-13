'use client';

import { useRef } from 'react';
import HeroImageSection from '@/components/common/HeroImageSection';
import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import { FlatIcon } from '@/components/Flaticon';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import ArrowIcon from '@/components/common/ArrowIcon';
import SwiperSlider from '@/components/ui/SwiperSlider';

const bullets = [
  'CSR Annual Action Plan 2021-22',
  'CSR Annual Action Plan 2022-23',
  'CSR Annual Action Plan 2023-24',
  'CSR Annual Action Plan 2024-25',
];

interface IndustryCard {
  icon: string;
  title: string;
  description: string;
}

const industryCards: IndustryCard[] = [
  {
    icon: 'flask',
    title: 'Education',
    description:
      'Opening doors to learning, skill growth, and brighter futures for children and adults in every community we reach.',
  },
  {
    icon: 'flask',
    title: 'Healthcare',
    description:
      'Improving access to care, preventive health, and wellness awareness to help people lead healthier lives.',
  },
  {
    icon: 'flask',
    title: 'Community Development',
    description:
      'Working closely with local areas to improve facilities, create livelihoods, and strengthen social bonds. ',
  },
  {
    icon: 'flask',
    title: 'Empowerment',
    description:
      'Enabling individuals to build skills, gain independence, and shape their own economic resilience.',
  },
  {
    icon: 'flask',
    title: 'Sports & Culture',
    description:
      'Encouraging talent, participation, and preservation of traditions that bring communities together.',
  },
];

const CSRPage: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const slides = industryCards.map((card, index) => (
    <div key={index}>
      <div className="border border-[#8F7C79] rounded-2xl bg-[#FFF8EE] transition-all p-5 duration-300 hover:bg-[#FFFFFF] lg:p-7">
        <FlatIcon icon={card.icon} className="text-[#F99D1C]" />
        <div className="flex flex-col gap-2 mt-8 lg:gap-3 lg:mt-10">
          <h3 className="section-subtitle">{card.title}</h3>
          <p className="text-[#8F7C79]">{card.description}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <section className="py-10 md:py-12 lg:py-[60px]">
        <div className="main-container">
          <div className="flex flex-col gap-6 text-center max-w-[876px] mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight xl:leading-tight text-[#231f20]">
              Driving Change Beyond Business
            </h1>
            <p className="max-w-[758px] mx-auto">
              We empower communities through education, health, and sustainable growth, building
              stronger futures where our roots run deep.
            </p>
            <Link href="/esg">
              <Button>Explore Our Impact</Button>
            </Link>
          </div>
        </div>
      </section>
      <HeroImageSection imageSrc="/images/csr-banner-image.png" imageAlt="CSR Banner" />
      <section className="pt-16 lg:pt-20 pb-5 overflow-hidden">
        <div className="main-container">
          <div className="flex flex-col gap-10 lg:gap-14">
            <SectionHeader title="Our Commitment" />
            <div className="max-w-[992px] mx-auto flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
              <div className="flex flex-col justify-center gap-6 md:gap-8 lg:gap-10">
                <h2 className="text-xl md:text-2xl lg:text-[32px] !leading-snug font-medium text-center">
                  Our CSR approach is built on responsibility, collaboration, and long-term impact
                  that strengthens communities and protects the environment.
                </h2>
                <div className="border-b border-[#BCB2B2]"></div>
                <div className="flex flex-wrap justify-between items-center gap-4 md:gap-6">
                  <div className="flex items-center gap-3">
                    <FlatIcon icon="bio-leaves" className="!text-xl lg:!text-2xl text-[#B03B23]" />
                    <p>Empower learning for all</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FlatIcon icon="flask" className="!text-xl lg:!text-2xl text-[#B03B23]" />
                    <p>Advance health and wellness</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FlatIcon icon="flask" className="!text-xl lg:!text-2xl text-[#B03B23]" />
                    <p>Support rural progress</p>
                  </div>
                </div>
              </div>
              <Link href="/contact-us">
                <Button>Discover More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 overflow-hidden">
        <div className="main-container">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
            <SectionHeader title="CSR Mission & Vision" />
            <SectionIntro
              title="Building Stronger Communities Together"
              description="We approach CSR with a focus on collaboration, measurable progress, and sustainable practices, ensuring every initiative delivers tangible benefits for people and the environment."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-[#BCB2B2] rounded-2xl bg-white transition-all p-5 duration-300 hover:bg-[#FFF2EF] lg:p-7">
                <FlatIcon icon="flask" className="text-[#B03B23]" />
                <div className="flex flex-col gap-2 mt-8 lg:gap-3 lg:mt-10">
                  <h3 className="section-subtitle">Mission</h3>
                  <p className="text-[#8F7C79]">
                    To implement programs that improve learning, advance healthcare, and create
                    lasting economic opportunities.
                  </p>
                </div>
              </div>
              <div className="border border-[#BCB2B2] rounded-2xl bg-white transition-all p-5 duration-300 hover:bg-[#FFF2EF] lg:p-7">
                <FlatIcon icon="flask" className="text-[#B03B23]" />
                <div className="flex flex-col gap-2 mt-8 lg:gap-3 lg:mt-10">
                  <h3 className="section-subtitle">Vision</h3>
                  <p className="text-[#8F7C79]">
                    To see communities thrive with equal access to education, health, and
                    sustainable livelihoods for generations ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFF8EE] py-16 lg:py-20 overflow-hidden">
        <div className="main-container">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
            <SectionHeader title="CSR Policy" />
            <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 items-center">
              <div className="text-center max-w-[1080px] mx-auto flex flex-col gap-5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] !leading-tight font-semibold">
                  Guidelines That Shape Our Impact
                </h2>
                <p>
                  Our CSR policy defines the principles and framework that steer our community
                  programs. It ensures resources are used responsibly, initiatives are transparent
                  and measurable, and every effort aligns with our goal of creating meaningful,
                  lasting benefits for people and the environment.
                </p>
              </div>
              <Button>Read our CSR Policy</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden py-16 lg:py-20">
        <div className="main-container">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
            <SectionHeader title="CSR Annual Plan" />
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col items-center gap-5 lg:items-start lg:gap-16">
                <div className="flex flex-col gap-5 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] !leading-tight font-semibold">
                    Yearly Roadmap for Impact
                  </h2>
                  <p className="text-[#8F7C79] text-sm md:text-base">
                    Each year we define clear CSR priorities, allocate resources, and outline
                    measurable actions that address community needs while aligning with our
                    commitment to sustainable and inclusive growth.
                  </p>
                </div>
                <Link href="/about-us">
                  <Button>Explore Our Journey</Button>
                </Link>
              </div>
              <div className="rounded-2xl border border-[#BCB2B2] bg-[#FFF2EF] p-6 shadow-sm md:p-8 lg:p-10">
                <h3 className="mb-4 text-2xl font-semibold text-[#231F20] md:mb-6 md:text-3xl">
                  Annual CSR Plans and Reports
                </h3>
                <ul className="flex list-none flex-col gap-4">
                  {bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#8F7C79]">
                      <span className="mt-0.5 inline-block">*</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-[#FFF8EE] py-10 md:py-16 lg:py-20">
        <div className="main-container">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
            <SectionHeader title="CSR Programs" />
            <SectionIntro
              title="Focused Efforts for a Better Tomorrow"
              description={`Our programs address pressing social and environmental priorities with actions designed to improve quality of life, expand opportunities, and create positive change that endures across regions where we operate.`}
            />
            <div>
              <SwiperSlider
                children={slides}
                spaceBetween={24}
                slidesPerView={3}
                // autoplay={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="!overflow-visible"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 1.5,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              />
              <div className="flex items-center justify-between mt-8">
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#BCB2B2] transition-all duration-300 hover:bg-white lg:h-11 lg:w-11 lg:rounded-[10px]"
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="Previous"
                >
                  <ArrowIcon direction="left" fill="#8F7C79" className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#BCB2B2] transition-all duration-300 hover:bg-white lg:h-11 lg:w-11 lg:rounded-[10px]"
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label="Next"
                >
                  <ArrowIcon direction="right" fill="#8F7C79" className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CSRPage;
