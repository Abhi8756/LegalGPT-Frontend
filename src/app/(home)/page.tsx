import FeatureRevealSection from "./featureRevealSection";
import { FeatureSection } from "./featureSection";
import { HeroSection } from "./herosection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureRevealSection />
      <FeatureSection />
    </div>
  );
}
