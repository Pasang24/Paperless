import Container from "@/components/custom/Container";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import GetStartedSection from "@/components/sections/GetStartedSection";

function LandingPage() {
  return (
    <Container className="max-w-[1000px] space-y-26">
      <HeroSection />
      <FeatureSection />
      <GetStartedSection />
    </Container>
  );
}

export default LandingPage;
