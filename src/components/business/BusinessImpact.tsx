import { motion } from "framer-motion";

const impacts = [
    {
        icon: "👩‍💼",
        title: "L'entrepreneur informel",
        desc: "Pour la première fois, son activité est visible, tracée et crédible aux yeux des institutions financières.",
        benefits: [
            "Obtient son premier crédit formel",
            "Gagne du temps sur la comptabilité",
            "Construit un historique financier valorisable",
            "Accède à la marketplace d'investisseurs"
        ],
        variant: "green"
    },
    {
        icon: "🏦",
        title: "L'Institution de Microfinance",
        desc: "Elle reçoit des dossiers structurés, conformes OHADA, avec un scoring alternatif fiable — réduisant son risque de crédit.",
        benefits: [
            "Réduction du taux de dégradation (−10,2% → 3%)",
            "Instruction de dossier accélérée",
            "Nouveaux clients qualifiés du secteur informel",
            "Reporting BCEAO facilité"
        ],
        variant: "orange"
    },
    {
        icon: "🌍",
        title: "L'écosystème UEMOA",
        desc: "Des milliards de FCFA de transactions informelles deviennent traçables, finançables et intégrables à l'économie formelle.",
        benefits: [
            "Formalisation progressive du secteur informel",
            "Données macro pour les décideurs BCEAO",
            "Inclusion financière des femmes et coopératives",
            "Réduction du gap de financement PME"
        ],
        variant: "blue"
    }
];

export const BusinessImpact = () => {
    return (
        <section className="bg-[#f5f0e8] py-24 px-8 sm:px-12 lg:px-20 font-futura">
            <div className="max-w-[1100px] mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block bg-[#e8f5ee] text-[#2d8a58] text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-5">
                        Impact systémique
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a1a0f] leading-[1.15] mb-6">
                        Ce que la certification Moro<br />change pour chaque acteur
                    </h2>
                    <p className="text-base text-[#6b7066] max-w-[500px] mx-auto leading-relaxed">
                        Moro ne crée pas seulement de la valeur pour l'entrepreneur — il transforme l'ensemble de l'écosystème financier informel.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {impacts.map((impact, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`bg-white rounded-[20px] p-8 sm:p-10 border-b-[6px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all relative overflow-hidden ${impact.variant === 'green' ? 'border-[#1e6641]' :
                                    impact.variant === 'orange' ? 'border-[#e8870a]' : 'border-[#2563eb]'
                                }`}
                        >
                            <span className="text-5xl mb-6 block">{impact.icon}</span>
                            <h3 className="text-2xl font-bold text-[#0a1a0f] mb-4">{impact.title}</h3>
                            <p className="text-sm text-[#6b7066] leading-relaxed mb-8 min-h-[60px]">
                                {impact.desc}
                            </p>
                            <div className="space-y-3">
                                {impact.benefits.map((benefit, j) => (
                                    <div key={j} className="flex gap-3 text-sm font-semibold text-[#0a1a0f] py-2 border-b border-gray-50 last:border-none items-center group/item">
                                        <span className={`text-lg transition-transform group-hover/item:translate-x-1 ${impact.variant === 'green' ? 'text-[#1e6641]' :
                                                impact.variant === 'orange' ? 'text-[#e8870a]' : 'text-[#2563eb]'
                                            }`}>→</span>
                                        {benefit}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
