import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ProfilePreview from "@/components/ProfilePreview";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <ProfilePreview />
      <CTASection />
    </div>
  );
};

export default Index;
