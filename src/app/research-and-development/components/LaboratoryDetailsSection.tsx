import FeatureList from '@/components/common/FeatureList';
import SectionHeader from '@/components/common/SectionHeader';
import SectionIntro from '@/components/common/SectionIntro';
import SectionSideIntro from '@/components/common/SectionSideIntro';
import { FlaskConical } from 'lucide-react';

const LaboratoryDetailsSection: React.FC = () => {
    const features: { title: string; icon: React.ReactNode; desc: string }[] = [
        {
            title: 'R&D Space',
            icon: <i className="fi fi-rr-flask text-[#231F20] text-xl leading-none"></i>,
            desc: 'DSIR-approved center spanning 2,200 SQ MT.',
        },
        {
            title: 'Laboratory Units',
            icon: <i className="fi fi-br-bio-leaves text-[#231F20] text-xl leading-none"></i>,
            desc: '4 labs equipped with 30 advanced fume hoods.',
        },
        {
            title: 'Pilot Plant',
            icon: <i className="fi fi-br-bio-leaves text-[#231F20] text-xl leading-none"></i>,
            desc: 't8 reactors with temperature and pressure contro.',
        },
        {
            title: 'Special Equipment',
            icon: <i className="fi fi-rr-flask text-[#231F20] text-xl leading-none"></i>,
            desc: 'Hydrogenators and high vacuum distillation units.',
        },
    ];

    return (
        <section className="overflow-hidden py-12 md:py-16 lg:py-20">
            <div className="main-container">
                <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
                    <SectionHeader title="Laboratories details" />
                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
                        <div className="order-2 flex flex-col gap-12 md:gap-14 lg:order-1">
                            <SectionSideIntro
                                title='Labs Designed for Discovery'
                                description='Our R&D spaces are built to enable innovation, rigorous experimentation, and scalable development that turn ideas into market-ready solutions.' />

                            <FeatureList features={features} />
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="overflow-hidden rounded-2xl">
                                <img src="/images/laboratry-image.png" alt="Laboratory facility" className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LaboratoryDetailsSection;

