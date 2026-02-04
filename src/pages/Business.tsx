import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessServices } from "@/components/business/BusinessServices";
import { BusinessAudience } from "@/components/business/BusinessAudience";
import { CTASection } from "@/components/landing/CTASection";
import { SEO } from "@/components/SEO";

const Business = () => {
    return (
        <div className="min-h-screen">
            <SEO
                title="Moro Business - Solutions pour entreprises et coopératives"
                description="Découvrez Moro Business, la solution complète de gestion et de financement pour les entreprises, coopératives et associations en Afrique. Gestion de trésorerie, comptabilité et microfinancement."
                keywords="moro business, gestion entreprise, coopérative, comptabilité, trésorerie, financement entreprise, Afrique"
                canonical="https://www.moro-apps.net/business"
                ogType="website"
            />
            <Header />
            <main>
                <BusinessHero />
                <BusinessAudience />
                <BusinessServices />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default Business;
