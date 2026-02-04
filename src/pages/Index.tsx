import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhyMoroSection } from "@/components/landing/WhyMoroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { DownloadCTA } from "@/components/landing/DownloadCTA";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { ImpactSection } from "@/components/landing/ImpactSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { TeamSection } from "@/components/landing/TeamSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Moro - Gestion et financement de microprojet en Afrique"
        description="Moro, est une solution inclusive de gestion des opérations courantes et d'assistance financière aux micros projets. Simplifiez vos cotisations et accédez au microfinancement."
        keywords="coopérative, association, gestion, financement, Afrique, microfinance, cotisation, tontine, épargne"
        canonical="https://www.moro-apps.net"
      />
      <Header />
      <main>
        <HeroSection />
        <WhyMoroSection />
        <FeaturesSection />
        <DownloadCTA />
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
