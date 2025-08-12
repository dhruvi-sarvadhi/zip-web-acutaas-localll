import SectionHeader from '@/components/common/SectionHeader';

const CertificationSection: React.FC = () => {
    const awardIcons = [
        { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
        { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
        { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
        { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
        { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
        { image: '/images/sgs-gmp.png', imageAlt: 'SGS GMP Certification' },
    ];

    const tripledAwardIcons = [...awardIcons, ...awardIcons, ...awardIcons];

    return (
        <section className="overflow-hidden bg-[#FFF8EE] py-12 md:py-16 lg:py-20">
            <div className="main-container">
                <div className="flex flex-col gap-12 sm:gap-14 ">
                    <SectionHeader title="Certifications" />
                    <div className="slider-container">
                        <div className="slider-track">
                            {tripledAwardIcons?.map((item, index) => (
                                <div key={index} className="w-[140px] sm:w-[160px] mx-auto flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.imageAlt}
                                        className="grayscale hover:grayscale-0 w-full h-auto transition duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationSection;
