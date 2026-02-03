import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessServices } from "@/components/business/BusinessServices";
import { BusinessAudience } from "@/components/business/BusinessAudience";
import { CTASection } from "@/components/landing/CTASection";

const Business = () => {
    return (
        <div className="min-h-screen">
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
