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
import { MediaSection } from "@/components/landing/MediaSection";
import { NewsSection } from "@/components/landing/NewsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Moro — Gérez votre activité & accédez au financement en Afrique"
        description="Moro est l'application de gestion financière inclusive pour entrepreneurs, coopératives, agriculteurs et PME en Afrique. +2 000 utilisateurs. Saisie vocale en français, anglais, bambara, malinké et arabe. Bilan OHADA automatique & accès au microfinancement."
        keywords="gestion financière Afrique, coopérative, association, GIE, microfinance, cotisation, tontine, épargne, OHADA, SYSCOA, bilan, scoring financier, bambara, malinké, arabe, inclusion financière, micro-entrepreneur, PME Afrique, EDUFI"
        canonical="https://www.moro-apps.net"
        ogImage="https://www.moro-apps.net/og-moro.jpg"
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
        <MediaSection />
        <NewsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
