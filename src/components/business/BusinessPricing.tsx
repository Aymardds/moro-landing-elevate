import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
    {
        icon: "📱",
        name: "Moro Business Basic",
        tag: "Idéal pour démarrer",
        price: "25 000",
        period: "/ an",
        equiv: "≈ 2 083 FCFA / mois",
        features: [
            { text: "Comptabilité OHADA simplifiée" },
            { text: "Gestion des employés" },
            { text: "Gestion des factures" },
            { text: "Gestion des fournisseurs" },
            { text: "Suivi du stock" },
            { text: "Export PDF des états financiers" },
            { text: "1 utilisateur administrateur" },
        ],
        cta: "Démarrer Basic",
        variant: "default" as const,
    },
    {
        icon: "🚀",
        name: "Moro Business Pro",
        tag: "Pour les entreprises en croissance",
        price: "100 000",
        period: "/ an",
        equiv: "≈ 8 333 FCFA / mois",
        badge: "⭐ RECOMMANDÉ",
        features: [
            { text: "Tout de Basic +" },
            { text: "Bilan SYSCOA/OHADA certifiable", badge: "Clé" },
            { text: "Analyses & tableaux de bord avancés", badge: "Pro" },
            { text: "Gestion multi-utilisateurs illimitée" },
            { text: "MiA — saisie vocale & OCR", badge: "IA" },
            { text: "Accès pipeline IMF & microfinance" },
            { text: "Support prioritaire 24/7" },
            { text: "Certification intégrée depuis l'app", badge: "Exclusif" },
        ],
        cta: "Souscrire Pro",
        variant: "best" as const,
    },
];

export const BusinessPricing = () => {
    return (
        <section id="business-pricing" className="py-24 px-8 sm:px-12 lg:px-20 bg-[#f0faf4] font-futura overflow-hidden">
            {/* Background */}
            <div className="absolute left-0 w-64 h-64 bg-[#1e6641]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1000px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-flex items-center gap-2 bg-[#1e6641] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
                        💼 Offres MoroBusiness
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1a0f] leading-[1.15] mb-4">
                        Choisissez votre formule
                    </h2>
                    <p className="text-base text-[#6b7066] max-w-lg mx-auto leading-relaxed">
                        Des tarifs transparents, sans surprise. Passez à la comptabilité formelle au meilleur prix.
                    </p>
                </motion.div>

                {/* Plans */}
                <div className="grid md:grid-cols-2 gap-6 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className={`relative rounded-3xl p-8 flex flex-col border-2 transition-all duration-300 hover:-translate-y-1 ${plan.variant === "best"
                                    ? "bg-[#0a1a0f] text-white border-[#4db87a] shadow-[0_8px_40px_rgba(30,102,65,0.3)] md:scale-[1.03] z-10"
                                    : "bg-white text-[#0a1a0f] border-[#d1e9da] shadow-lg"
                                }`}
                        >
                            {plan.badge && (
                                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-black px-4 py-1 rounded-full bg-[#4db87a] text-[#0a1a0f]">
                                    {plan.badge}
                                </span>
                            )}

                            {/* Icon + Name */}
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 ${plan.variant === "best" ? "bg-white/10" : "bg-[#e8f5ee]"
                                }`}>
                                {plan.icon}
                            </div>
                            <p className="text-xl font-bold mb-1">{plan.name}</p>
                            <p className={`text-xs mb-6 ${plan.variant === "best" ? "text-white/60" : "text-[#6b7066]"}`}>
                                {plan.tag}
                            </p>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-5xl font-black">{plan.price}</span>
                                    <span className={`text-sm font-bold ${plan.variant === "best" ? "text-white/60" : "text-[#6b7066]"}`}>
                                        FCFA{plan.period}
                                    </span>
                                </div>
                                <span className={`inline-block mt-2 text-[11px] font-bold px-3 py-1 rounded-full ${plan.variant === "best" ? "bg-[#4db87a]/20 text-[#4db87a]" : "bg-[#e8f5ee] text-[#1e6641]"
                                    }`}>
                                    {plan.equiv}
                                </span>
                            </div>

                            {/* Divider */}
                            <div className={`h-px mb-6 ${plan.variant === "best" ? "bg-white/10" : "bg-[#d1e9da]"}`} />

                            {/* Features */}
                            <ul className="space-y-3 mb-8 flex-grow">
                                {plan.features.map((f, j) => (
                                    <li key={j} className="flex items-start gap-3 text-sm font-medium leading-snug">
                                        <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.variant === "best" ? "bg-[#4db87a]/20 text-[#4db87a]" : "bg-[#e8f5ee] text-[#1e6641]"
                                            }`}>
                                            <Check className="w-3 h-3" />
                                        </span>
                                        <span className="flex-1">{f.text}</span>
                                        {f.badge && (
                                            <span className={`flex-shrink-0 text-[9px] font-black px-2 py-0.5 rounded-full ${plan.variant === "best" ? "bg-[#4db87a]/20 text-[#4db87a]" : "bg-[#e8f5ee] text-[#1e6641]"
                                                }`}>
                                                {f.badge}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <button className={`w-full py-4 rounded-2xl text-sm font-black transition-all flex items-center justify-center gap-2 group ${plan.variant === "best"
                                    ? "bg-[#4db87a] hover:bg-[#5dc98a] text-[#0a1a0f] shadow-[0_4px_20px_rgba(77,184,122,0.3)]"
                                    : "bg-[#1e6641] hover:bg-[#2d8a58] text-white"
                                }`}>
                                {plan.cta}
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center text-sm text-[#6b7066] mt-8"
                >
                    Tous les prix HT · Facturation annuelle · Résiliable à tout moment
                </motion.p>
            </div>
        </section>
    );
};
