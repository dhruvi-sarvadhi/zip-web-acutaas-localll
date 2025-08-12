import HeroImageSection from '@/components/common/HeroImageSection';
import CertificationSection from './components/CertificationSection';
import AwardSection from './components/AwardSection';

const LeadershipTeamPage: React.FC = () => {
    return (
        <>
            <HeroImageSection
                imageSrc="/images/award-banner-image.png"
                imageAlt="Award Banner"
            />
            <CertificationSection />
            <AwardSection />
        </>
    );
};

export default LeadershipTeamPage;
