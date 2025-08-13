import HeroImageSection from '@/components/common/HeroImageSection';
import PageIntro from '@/components/common/PageIntro';
import TechnologySection from './components/TechnologySection';
import CapabilitiesGrid from './components/CapabilitiesGrid';
import LaboratoryDetailsSection from './components/LaboratoryDetailsSection';
import AnalyticalCapabilitiesSection from './components/AnalyticalCapabilitiesSection';
import ProcessChemistrySection from './components/ProcessChemistrySection';
import ResearchAreasSection from './components/ResearchAreasSection';
import SpecificExperienceSection from './components/SpecificExperienceSection';

const ResearchPage: React.FC = () => {
  return (
    <>
      <PageIntro
        title="Advancing Science With Purpose"
        description="At ACUTAAS, research means creating change, turning possibilities into solutions that add value for industries and communities worldwide."
        buttonLabel="Contact Us"
        pageUrl='/contact-us'
      />

      <HeroImageSection imageSrc="/images/research-banner-image.png" imageAlt="Research Banner" />

      <TechnologySection />

      <LaboratoryDetailsSection />

      <AnalyticalCapabilitiesSection />

      <ProcessChemistrySection />

      <ResearchAreasSection />

      {/* <SpecificExperienceSection /> */}

      <CapabilitiesGrid
        title="Our Technology Platforms"
        background="muted"
        headline="Technology That Powers Every Process"
        ctaLabel="Explore our Solution"
      />

      {/* <ProcessSection /> */}

    </>
  );
};

export default ResearchPage;
