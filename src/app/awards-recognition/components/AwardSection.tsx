import SectionHeader from '@/components/common/SectionHeader';
import { ScanFace } from 'lucide-react';
import { describe } from 'node:test';
import React from 'react';

const AwardSection = () => {
    const awards = [
        {
            image: '/images/award-image.png',
            name: 'Southern Gujarat Chamber of Commerce and Industry (SGCCI)',
            description: 'Recognized for exceptional leadership and vision in building a strong, competitive MSME business.',
            award: 'Trishul Award'
        },
        {
            image: '/images/award-image.png',
            name: 'Federation of Gujarat Industries (FGI)',
            description: 'Honored for strategic leadership that strengthened growth and inspired excellence across the organization.',
            award: 'Trishul Award'
        },
        {
            image: '/images/award-image.png',
            name: 'Trishul Award',
            description: 'Awarded for exceptional export performance, expanding global reach and contributing to international trade.',
            award: 'Safe & Secure Manufacturing Facility'
        },
        {
            image: '/images/award-image.png',
            name: 'Trishus Recognized ',
            description: 'sustained export excellence, driving growth and strengthening presence in global markets.',
            award: 'Trishul Award'
        },
        {
            image: '/images/award-image.png',
            name: 'Safe & Secure Manufacturing Facility',
            description: 'Honored for creating a safe, compliant, and well-managed manufacturing environment.',
            award: 'Trishul Award'
        },
        {
            image: '/images/award-image.png',
            name: 'SGCCI Golden Jubilee Award',
            description: 'Recognized for exceptional contributions to research and development that advanced industry capabilities.',
            award: 'Trishul Award'
        }
    ];

    return (
        <section className="overflow-hidden py-16 bg-white">
            <div className="main-container">
                <div className="flex flex-col gap-12 sm:gap-14">
                    <SectionHeader title="Awards" />

                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                        <h2 className="text-4xl md:text-4xl font-bold text-gray-800">
                            Achievements
                            <br />
                            That Mirror Our Impact
                        </h2>
                        <p className="max-w-xl text-gray-600">
                            Behind every award is a team that showed up, stayed across, and kept going. These honors are not just for us but reflect the trust, care and creation we bring to the chemical world.
                        </p>
                    </div>

                    {/* Modified/New Code */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {awards.map((award, index) => (
                            <div key={index} className="group relative overflow-hidden cursor-pointer" style={{ paddingBottom: "100%" }}>
                                <div className="absolute inset-0 w-full h-full bg-[#FFF8EE]">
                                    <img
                                        src={award.image}
                                        alt={award.name}
                                        className="w-full h-full object-contain p-6"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                        <h3 className="text-xl font-medium">{award.name}</h3>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-[#F99D1C] p-6 flex flex-col justify-between  translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">                                    <div>
                                    <h3 className="text-xl font-semibold mb-4">{award.name}</h3>
                                    <p className="text-sm">{award.description}</p>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardSection;