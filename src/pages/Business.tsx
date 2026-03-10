import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessInsight } from "@/components/business/BusinessInsight";
import { BusinessJourney } from "@/components/business/BusinessJourney";
import { BusinessCertification } from "@/components/business/BusinessCertification";
import { BusinessImpact } from "@/components/business/BusinessImpact";
import { BusinessTools } from "@/components/business/BusinessTools";
import { BusinessPricing } from "@/components/business/BusinessPricing";
import { SEO } from "@/components/SEO";

const Business = () => {
    return (
        <div className="min-h-screen">
            <SEO
                title="Moro Business - Comptabilité OHADA & Certification"
                description="Moro Business transforme vos opérations quotidiennes en bilan conforme SYSCOA/OHADA certifiable. La solution pour les entreprises et coopératives en Afrique."
                keywords="moro business, comptabilité OHADA, SYSCOA, certification financière, gestion coopérative, Afrique, microfinance"
                canonical="https://www.moro-apps.net/business"
                ogType="website"
            />
            <Header />
            <main>
                <BusinessHero />
                <BusinessInsight />
                <BusinessTools />
                <BusinessJourney />
                <BusinessCertification />
                <BusinessImpact />
                <BusinessPricing />

                {/* Footer CTA Section */}
                <section className="bg-[#1e6641] py-24 px-8 sm:px-12 lg:px-20 text-center relative overflow-hidden font-futura">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(0,0,0,0.2)_0%,transparent_60%)] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6">
                            Votre comptabilité OHADA,<br />en un tap. Certifiée.
                        </h2>
                        <p className="text-lg text-white/75 mb-10 max-w-lg mx-auto leading-relaxed">
                            Rejoignez les entrepreneurs africains qui transforment leur activité informelle en dossier financier certifié.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-white hover:bg-[#e8f5ee] text-[#1e6641] px-10 py-4 rounded-xl text-base font-bold transition-all hover:-translate-y-1 active:translate-y-0">
                                📥 Télécharger Moro
                            </button>
                            <button className="bg-transparent border-2 border-white/40 hover:border-white hover:bg-white/10 text-white px-10 py-4 rounded-xl text-base font-bold transition-all">
                                🤝 Partenariat IMF
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Business;
