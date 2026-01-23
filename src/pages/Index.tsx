import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhyMoroSection } from "@/components/landing/WhyMoroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { ImpactSection } from "@/components/landing/ImpactSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { TeamSection } from "@/components/landing/TeamSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhyMoroSection />
        <FeaturesSection />
        <AudienceSection />
        <ImpactSection />
        <PricingSection />
        <TeamSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
