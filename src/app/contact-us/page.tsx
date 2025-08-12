import HeroImageSection from '@/components/common/HeroImageSection';
import ProductInquirySection from './components/ProductInquirySection';
import InquirySection from './components/InquirySection';

const ContactPage: React.FC = () => {
  return (
    <>
      <HeroImageSection imageSrc="/images/contact-us-banner-image.png" imageAlt="Contact Banner" />
      <ProductInquirySection />
      <InquirySection />
    </>
  );
};

export default ContactPage;
