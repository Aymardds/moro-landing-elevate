import { motion } from "framer-motion";

const stats = [
    {
        num: "17",
        label: "pays membres OHADA",
        sub: "Bénin, CI, Sénégal, Cameroun, Congo, Gabon… Un référentiel unique, un format reconnu partout.",
        color: "green",
        bg: "border-[#1e6641]"
    },
    {
        num: "10,2%",
        label: "Taux de dégradation des portefeuilles IMF",
        sub: "3× la norme BCEAO. Cause principale : absence de données financières fiables sur les emprunteurs informels. Moro résout ce problème.",
        color: "orange",
        bg: "border-[#e8870a]"
    },
    {
        num: "4 761",
        label: "Points de service IMF dans l'UEMOA",
        sub: "Chacun peut devenir un point de distribution Moro et un partenaire d'accès au crédit pour ses clients.",
        color: "blue",
        bg: "border-[#2563eb]"
    }
];

export const BusinessInsight = () => {
    return (
        <section className="bg-[#f5f0e8] py-20 px-8 sm:px-12 lg:px-20 relative overflow-hidden font-futura">
            {/* Design Element */}
            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 rotate-90 font-serif text-[100px] text-black/[0.04] whitespace-nowrap pointer-events-none select-none">
                SYSCOA/OHADA
            </div>

            <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[1fr,2fr] gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#2d8a58] mb-5">
                        Pourquoi c'est révolutionnaire
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-[#0a1a0f] mb-8">
                        Le <span className="text-[#1e6641]">premier dossier bancaire</span> du secteur informel africain
                    </h2>
                    <p className="text-[#6b7066] text-base sm:text-lg leading-relaxed">
                        Jusqu'ici, un commerçant du marché de Sandaga ou d'Adjamé avait beau réaliser 10 millions de FCFA de chiffre d'affaires par an — il n'existait pas pour le système financier formel. Pas de traçabilité, pas de bilan, pas de crédit.
                        <br /><br />
                        Moro change la règle du jeu : <strong className="text-[#0a1a0f]">chaque vente, chaque achat, chaque mouvement de caisse</strong> enregistré dans l'app devient automatiquement une ligne d'un bilan conforme au référentiel SYSCOA/OHADA — le standard officiel des 17 pays membres.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`bg-white rounded-[20px] p-8 border-l-4 ${stat.bg} shadow-sm hover:shadow-md hover:translate-x-2 transition-all group`}
                        >
                            <div className={`text-4xl lg:text-5xl font-bold mb-2 leading-none ${stat.color === 'green' ? 'text-[#1e6641]' :
                                    stat.color === 'orange' ? 'text-[#e8870a]' : 'text-[#2563eb]'
                                }`}>
                                {stat.num}
                            </div>
                            <div className="text-sm font-bold text-[#0a1a0f] mb-1">{stat.label}</div>
                            <div className="text-xs text-[#6b7066] leading-relaxed">{stat.sub}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
