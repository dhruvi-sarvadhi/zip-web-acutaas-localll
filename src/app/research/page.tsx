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
        title="Research and Development"
        description="Advancing intermediates through rigorous science, robust processes, and state-of-the-art infrastructure."
        buttonLabel="Contact Us"
      />

      <HeroImageSection imageSrc="/images/research-banner-image.png" imageAlt="Research Banner" />

      <TechnologySection />

      <LaboratoryDetailsSection />

      <AnalyticalCapabilitiesSection />

      <ProcessChemistrySection />

      <ResearchAreasSection />

      <SpecificExperienceSection />

      <CapabilitiesGrid
        title="Analytical capabilities"
        background="muted"
        headline="Lorem Ipsum is simply dummy text of the printing"
        ctaLabel="Button Text"
      />

      {/* <ProcessSection /> */}

    </>
  );
};

export default ResearchPage;
