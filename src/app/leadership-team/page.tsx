import HeroImageSection from '@/components/common/HeroImageSection';
import BoardOfDirectorsSection from './components/BoardOfDirectorsSection';
import CoreTeamSection from './components/CoreTeamSection';

const LeadershipTeamPage: React.FC = () => {
  return (
    <>
      <HeroImageSection
        imageSrc="/images/leadership-team-banner-image.png"
        imageAlt="Leadership Team Banner"
      />
      <BoardOfDirectorsSection />
      <CoreTeamSection />
    </>
  );
};

export default LeadershipTeamPage;
