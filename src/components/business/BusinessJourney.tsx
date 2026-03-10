import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
    {
        icon: "🗣️",
        step: "Étape 1",
        title: "Saisie par IA conversationnelle",
        desc: "L'utilisateur parle ou écrit en français naturel : \"J'ai vendu 3 box de poulet à 35 000 FCFA pour mon projet AfricaFood\". Moro AI comprend, confirme et enregistre 3 transactions distinctes en moins de 10 secondes. Pas de formulaire, pas de catégorie à choisir manuellement.",
        tags: ["Saisie vocale & texte", "OCR factures photo", "Confirmation IA avant action"],
        state: "done"
    },
    {
        icon: "📁",
        step: "Étape 2",
        title: "Classement automatique par projet",
        desc: "Chaque opération est automatiquement ventilée dans le bon projet, la bonne catégorie comptable (Trésorerie, Stock, Créances, Charges, Produits) et la bonne période mensuelle. Le tableau de bord se met à jour en temps réel.",
        tags: ["Multi-projets illimités", "Gestion stock", "Suivi créances clients", "Tableau de bord intelligent"],
        tagsOrange: ["Tableau de bord intelligent"],
        state: "done"
    },
    {
        icon: "📊",
        step: "Étape 3 — La fonctionnalité clé",
        title: "Génération du Bilan SMT SYSCOA/OHADA",
        desc: "D'un tap sur \"Générer le bilan comptable\", Moro produit automatiquement un bilan conforme au Système Minimal de Trésorerie (SMT) du référentiel SYSCOA/OHADA — avec les références officielles exactes, regroupées par poste.",
        ohadaMock: true,
        tags: ["Références SMT officielles (TA/TB/CC/AZ…)", "17 pays OHADA reconnus", "Compte de résultat intégré"],
        tagsBlue: ["17 pays OHADA reconnus"],
        tagsOrange: ["Compte de résultat intégré"],
        state: "active"
    },
    {
        icon: "📄",
        step: "Étape 4",
        title: "Export PDF instantané",
        desc: "Le bilan, le compte de résultat et les indicateurs de synthèse (Trésorerie nette, En-cours commercial net, Avoir net final) sont exportés en PDF professionnel — prêt à être envoyé à une IMF, une banque ou un comptable agréé.",
        tags: ["PDF bilan + compte de résultat", "Indicateurs synthèse automatiques", "Format accepté par les IMF partenaires"],
        tagsOrange: ["Format accepté par les IMF partenaires"],
        state: "active"
    },
    {
        icon: "🏅",
        step: "Étape 5 — La plus avancée",
        title: "Certification de l'état financier",
        desc: "Le bouton \"Certifier\" — visible en bas de l'écran — permet de faire certifier l'état financier directement depuis l'application mobile. C'est une fonctionnalité sans équivalent chez aucun concurrent sur le marché informel africain. Cette certification est la clé d'entrée vers l'accès au crédit formel via les IMF partenaires.",
        tags: ["🏅 Certification depuis l'app", "Dossier de crédit constitué", "Accès pipeline IMF débloqué"],
        tagsOrange: ["🏅 Certification depuis l'app", "Dossier de crédit constitué"],
        state: "active",
        special: true
    }
];

export const BusinessJourney = () => {
    return (
        <section id="journey" className="bg-white py-24 px-8 sm:px-12 lg:px-20 font-futura">
            <div className="max-w-[1200px] mx-auto text-center mb-20">
                <span className="inline-block bg-[#e8f5ee] text-[#2d8a58] text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-5">
                    Le parcours complet
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a1a0f] leading-[1.15] mb-4">
                    De l'opération à la certification<br />en 5 étapes automatiques
                </h2>
                <p className="text-base text-[#6b7066] max-w-[520px] mx-auto leading-relaxed">
                    Moro a construit la chaîne comptable complète pour l'informel — sans aucune connaissance préalable en comptabilité.
                </p>
            </div>

            <div className="max-w-[1000px] mx-auto relative lg:pl-10">
                {/* Vertical Line */}
                <div className="absolute left-[39px] lg:left-[49px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#e8f5ee] via-[#1e6641] to-[#e8f5ee]" />

                <div className="space-y-14">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="grid grid-cols-[80px,1fr] gap-8 relative"
                        >
                            <div className="flex flex-col items-center">
                                <div className={`w-[42px] h-[42px] rounded-full flex items-center justify-center text-xl z-10 border-[3px] border-white shadow-[0_0_0_2px] ${step.special ? 'bg-[#e8870a] shadow-[#e8870a] ring-[6px] ring-[#e8870a]/20' :
                                        step.state === 'done' ? 'bg-[#1e6641] shadow-[#1e6641]' :
                                            step.state === 'active' ? 'bg-white shadow-[#1e6641] ring-[6px] ring-[#1e6641]/15 text-[#1e6641]' :
                                                'bg-[#e8e2d9] shadow-[#e8e2d9]'
                                    }`}>
                                    {step.icon}
                                </div>
                            </div>

                            <div className="pt-1">
                                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#2d8a58] mb-2 block">
                                    {step.step}
                                </span>
                                <h3 className="text-2xl lg:text-3xl font-bold text-[#0a1a0f] mb-3 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-[#6b7066] text-sm sm:text-base leading-relaxed mb-4 max-w-[600px]">
                                    {step.desc}
                                </p>

                                {step.ohadaMock && (
                                    <div className="bg-[#0a1a0f] rounded-2xl p-6 my-6 max-w-[480px]">
                                        <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#4db87a] mb-4">
                                            Bilan SMT — SYSCOA/OHADA — mars 2026
                                        </div>
                                        <div className="grid grid-cols-[40px,1fr,120px] gap-2 py-2 px-3 bg-[#1e6641]/15 rounded-t-lg text-[12px]">
                                            <span className="text-[#4db87a] font-bold">ACTIF</span>
                                            <span className="text-white/50">Poste</span>
                                            <span className="text-white/40 text-right">Montant</span>
                                        </div>
                                        <div className="space-y-0.5 mt-1 px-3">
                                            {[
                                                { ref: "TA", name: "Caisse", val: "4 159 200" },
                                                { ref: "TB", name: "Banque", val: "100 000" },
                                                { ref: "SM", name: "Stock marchandises", val: "0" },
                                                { ref: "CC", name: "Clients", val: "4 720 000" },
                                                { ref: "IM", name: "Immobilisations", val: "0" },
                                            ].map((row, idx) => (
                                                <div key={idx} className="grid grid-cols-[40px,1fr,120px] gap-2 py-2 border-b border-white/[0.07] text-[12px]">
                                                    <span className="text-white/40 font-bold">{row.ref}</span>
                                                    <span className="text-white/80">{row.name}</span>
                                                    <span className="text-[#4db87a] font-bold text-right">{row.val}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-[40px,1fr,120px] gap-2 py-3 px-3 mt-1 bg-[#1e6641]/20 rounded-b-lg text-[12px] items-center">
                                            <span className="text-[#4db87a] font-bold">AZ</span>
                                            <span className="text-white font-bold">TOTAL ACTIF</span>
                                            <span className="text-[#e8870a] font-bold text-[13px] text-right">8 979 200</span>
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2">
                                    {step.tags.map((tag, j) => (
                                        <span
                                            key={j}
                                            className={`px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold border ${step.tagsOrange?.includes(tag) ? 'bg-[#fff4e0] border-[#e8870a]/20 text-[#e8870a]' :
                                                    step.tagsBlue?.includes(tag) ? 'bg-[#eff6ff] border-[#2563eb]/20 text-[#1d4ed8]' :
                                                        'bg-[#e8f5ee] border-[#1e6641]/20 text-[#1e6641]'
                                                }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
