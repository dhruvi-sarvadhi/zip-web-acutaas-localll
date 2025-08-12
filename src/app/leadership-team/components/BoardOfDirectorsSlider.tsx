'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ArrowIcon from '@/components/common/ArrowIcon';

interface SlideData {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  thumb: string;
}

const slidesData: SlideData[] = [
  {
    id: 1,
    name: 'Mr. Nareshkumar Ramjibhai Patel',
    role: 'Executive Chairman & Managing Director',
    description:'Nareshkumar Patel founded Ami Organics (now ACUTAAS) in 2004. Over 17 years, he led its rise to become India’s largest advanced intermediate manufacturing company. A Bachelor of Engineering graduate from Gujarat University, his visionary leadership has fueled global growth, innovation-driven R&D, and diversification into specialty chemicals and sustainable solutions.',    image: '/images/team-1.png',
    thumb: '/images/team-thumb-1.png',
  },
  {
    id: 2,
    name: 'Mr.Chetankumar Vaghasia',
    role: 'Whole time Director',
    description:'Chetankumar C. Vaghasia, Whole‑time Director since incorporation, holds a diploma in man‑made textile processing from Surat. With over 22 years in speciality chemicals manufacturing, he oversees operations, production, logistics, HR, IT and purchase. His strategic and hands-on leadership has strengthened Ami Organics’ core and fueled sustainable growth.',
    image: '/images/team-1.png',
    thumb: '/images/team-thumb-2.png',
  },
  {
    id: 3,
    name: 'Virendra Nath Mishra',
    role: 'Whole Time Director',
    description: 'Associated with the company since 2005, Virendra Nath Mishra holds a B.Sc. and M.Sc. in Chemistry from Purvanchal University. Starting as Production Manager, he rose through leadership roles including Executive Director and Director–Operations. His deep technical expertise drives operational excellence and process optimization across the company.',
    image: '/images/team-1.png',
    thumb: '/images/team-thumb-3.png',
  },
  {
    id: 4,
    name: 'Ram Mohan Lokhande',
    role: 'Whole Time Director',
    description: 'Ram Mohan Lokhande, Whole-time Director since Feb 2022, holds a B.Tech in Chemical Engineering from NIT. With 20+ years in pharma and chemical manufacturing, he brings expertise in API projects, plant operations, EHS, and technology absorption. His leadership spans strategic planning, project execution, and quality-driven process optimization.',
    image: '/images/team-1.png',
    thumb: '/images/team-thumb-4.png',
  },
  {
    id: 5,
    name: 'Hetal Gandhi',
    role: 'Independent Director',
    description: 'Hetal Gandhi, Independent Director, is a B.Com graduate and Chartered Accountant with 34+ years in financial services, spanning private equity, credit markets, and investment banking. He is co-founder & MD of Tano India Advisors. His past roles include leadership at IL&FS, ORIX Auto & Business Solutions, and consultancy with A.F. Ferguson & Co.',
    image: '/images/team-1.png',
    thumb: '/images/team-thumb-5.png',
  },
  {
    id: 6,
    name: 'Girikrishna Maniar',
    role: 'Independent Director',
    description: 'Girikrishna Maniar, Independent Director since April 23, 2018, holds a B.Sc. in Chemistry from the University of Bombay and is a fellow of the Institute of Cost and Works Accountants of India. A practising cost accountant since 1988, he brings decades of financial insight, cost optimization expertise, and governance experience to the Board.',
    image: '/images/team-1.png',
    thumb: '/images/team-thumb-6.png',
  },
  {
    id: 7,
    name: 'Richa Manoj Goyal',
    role: 'Independent Director',
    description: 'Richa Manoj Goyal, Independent Director since April 1, 2021, holds a B.Com and LLB from Gujarat University and is a fellow of The Institute of Company Secretaries of India. A certified trademarks agent, she is the Managing Partner at Richa Goyal and Associates, bringing deep expertise in corporate law, governance, and regulatory compliance to the Board.',
    image: '/images/team-1.png',
    thumb: '/images/team-thumb-7.png',
  },
  {
    id: 8,
    name: 'Anita Bandyopadhyay',
    role: 'Independent Director',
    description: 'Dr. Anita Bandyopadhyay, Independent Director since Feb 8, 2022, holds a Ph.D. in Applied Psychology from Kolkata University and an Executive MBA from SP Jain, Mumbai. A renowned HR consultant, she brings deep expertise in leadership, talent, and performance management across pharma, FMCG, retail, education, and manufacturing sectors.',
    image: '/images/team-1.png',
    thumb: '/images/team-thumb-8.png',
  },
];

const BoardOfDirectorsSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setFadeKey((prev) => prev + 1);
    setActiveIndex(swiper.activeIndex);
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setActiveIndex(swiperRef.current.activeIndex);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setActiveIndex(swiperRef.current.activeIndex);
    }
  };

  return (
    <div className="w-full mt-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div key={fadeKey} className="flex-1 pt-0 md:pt-16 lg:pt-24">
          <div className="md:min-h-60 fade-in text-center md:text-left">
            <h2 className="!leading-[1.125] text-[#231F20] font-semibold text-3xl md:text-4xl lg:text-[64px]">
              {slidesData[activeIndex].name}
            </h2>
            <h4 className="text-xl lg:text-2xl !leading-[1.083] font-normal mt-4 lg:mt-1 mb-4">
              {slidesData[activeIndex].role}
            </h4>
            <p className="text-base text-[#8F7C79]">{slidesData[activeIndex].description}</p>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={handlePrev}>
              <ArrowIcon direction={'left'} fill="#231F20" className="w-10 h-10" />
            </button>
            <button onClick={handleNext}>
              <ArrowIcon direction={'right'} fill="#231F20" className="w-10 h-10" />
            </button>
          </div>
        </div>
        <div
          key={fadeKey + '-img'}
          className="w-full max-w-[424px] flex-1 flex justify-center items-center fade-in mx-auto md:mx-0"
        >
          <img src={slidesData[activeIndex].image} alt={slidesData[activeIndex].name} />
        </div>
      </div>
      <div className="bg[#FFFFFF3D] backdrop-blur -mt-32 py-4 md:py-8 md:-mt-24 lg:py-10 lg:-mt-32">
        <Swiper
          modules={[Navigation]}
          navigation={false}
          slidesPerView={8}
          slidesPerGroup={1}
          spaceBetween={24}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 8,
            },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={slide.id}
              onClick={() => {
                setActiveIndex(index);
                swiperRef.current.slideTo(index);
              }}
            >
              <div className={`flex flex-col gap-4 lg:gap-5`}>
                <div
                  className={`transition-all duration-300 mx-auto ${index === activeIndex ? 'w-20 h-20 lg:w-24 lg:h-24' : 'w-16 h-16 lg:w-20 lg:h-20'}`}
                >
                  <img src={slide.thumb} alt={slide.name} className="rounded-full" />
                </div>

                <p
                  className={`transition-all duration-300 text-base text-center ${index === activeIndex ? 'font-bold' : 'font-regular text-[#8F7C79]'}`}
                >
                  {slide.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BoardOfDirectorsSlider;
