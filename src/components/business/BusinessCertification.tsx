import { motion } from "framer-motion";

const steps = [
    {
        title: "Vos opérations → votre bilan OHADA",
        desc: "Généré automatiquement, conforme au SMT SYSCOA, avec toutes les références officielles"
    },
    {
        title: "Votre bilan → certifié en un tap",
        desc: "Le bouton \"Certifier\" déclenche le processus de validation de l'état financier"
    },
    {
        title: "État certifié → dossier de crédit complet",
        desc: "Les IMF partenaires reçoivent un dossier structuré, fiable et conforme — réduisant leur risque de 3x"
    },
    {
        title: "Dossier accepté → accès au financement",
        desc: "Étape finale du pipeline Moro : l'entrepreneur reçoit son premier crédit formel"
    }
];

export const BusinessCertification = () => {
    return (
        <section className="bg-[#0a1a0f] py-24 px-8 sm:px-12 lg:px-20 relative overflow-hidden font-futura">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-[50%] right-[-10%] w-[50%] h-[70%] bg-[#e8870a]/12 rounded-full blur-[100px] -translate-y-1/2"
                />
                <div
                    className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[#1e6641]/25 rounded-full blur-[100px]"
                />
            </div>

            <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6">
                        La <em className="italic text-[#e8870a] not-italic">certification</em><br />change tout pour<br />le secteur informel
                    </h2>
                    <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
                        Un état financier certifié, c'est la différence entre "ce commerçant existe" et "ce commerçant est finançable". Moro est le premier pont numérique entre l'économie informelle africaine et le système financier formel.
                    </p>

                    <div className="space-y-6">
                        {steps.map((step, i) => (
                            <div key={i} className="flex gap-5">
                                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-bold text-white/50 flex-shrink-0">
                                    {i + 1}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                                    <p className="text-xs text-white/55 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Certificate Document */}
                    <div className="bg-white rounded-[20px] p-8 sm:p-10 shadow-[0_32px_80px_rgba(0,0,0,0.5)] relative border-b-8 border-[#e8870a]">
                        {/* Stamp */}
                        <div className="absolute top-[-16px] right-[-16px] w-18 h-18 bg-gradient-to-br from-[#e8870a] to-[#f0a020] rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-white/20">
                            <span className="text-2xl">🏅</span>
                            <span className="text-[7px] font-black text-white tracking-widest text-center mt-[-2px]">CERTIFIÉ</span>
                        </div>

                        <div className="text-center pb-6 mb-6 border-b border-gray-100">
                            <div className="text-xl font-bold text-[#1e6641] tracking-wider mb-1">MORO</div>
                            <div className="text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase">Bilan SMT — SYSCOA / OHADA</div>
                            <div className="text-[11px] text-gray-400 mt-2">mars 2026</div>
                        </div>

                        <div className="space-y-3 mb-8">
                            {[
                                { ref: "TA", name: "Caisse", val: "4 159 200 FCFA" },
                                { ref: "TB", name: "Banque", val: "100 000 FCFA" },
                                { ref: "CC", name: "Clients", val: "4 720 000 FCFA" },
                                { ref: "AZ", name: "TOTAL ACTIF", val: "8 979 200 FCFA", bold: true, color: "orange" },
                            ].map((row, i) => (
                                <div key={i} className={`flex justify-between text-[12px] pb-2 border-b border-gray-50 last:border-none ${row.bold ? 'pt-2 font-black border-t-2 border-gray-100' : ''}`}>
                                    <div className="flex gap-4">
                                        <span className="text-gray-300 font-bold w-6">{row.ref}</span>
                                        <span className={row.bold ? "text-[#0a1a0f]" : "text-gray-600"}>{row.name}</span>
                                    </div>
                                    <span className={row.color === 'orange' ? "text-[#e8870a]" : "text-[#1e6641] font-bold"}>{row.val}</span>
                                </div>
                            ))}
                            <div className="h-3" />
                            {[
                                { ref: "TC", name: "Total Charges", val: "0 FCFA", light: true },
                                { ref: "TZ", name: "Total Produits", val: "0 FCFA" },
                                { ref: "UZ", name: "Bénéfice net", val: "0 FCFA", bold: true, color: "orange" },
                            ].map((row, i) => (
                                <div key={i} className={`flex justify-between text-[12px] pb-2 border-b border-gray-50 last:border-none ${row.bold ? 'pt-2 font-black border-t-2 border-gray-100' : ''}`}>
                                    <div className="flex gap-4">
                                        <span className="text-gray-300 font-bold w-6">{row.ref}</span>
                                        <span className={row.bold ? "text-[#0a1a0f]" : row.light ? "text-gray-400" : "text-gray-600"}>{row.name}</span>
                                    </div>
                                    <span className={row.color === 'orange' ? "text-[#e8870a]" : "text-gray-600 font-bold"}>{row.val}</span>
                                </div>
                            ))}
                        </div>

                        {/* Seal */}
                        <div className="bg-gradient-to-br from-[#e8870a]/10 to-[#1e6641]/10 border border-[#e8870a]/30 rounded-xl p-4 flex items-center gap-5">
                            <div className="text-3xl">🔐</div>
                            <div>
                                <h4 className="text-[12px] font-bold text-[#1e6641] mb-1">État financier certifié par Moro</h4>
                                <p className="text-[10.5px] text-gray-400 leading-relaxed">Conforme SYSCOA/OHADA — SMT<br />Validé le 03/03/2026 via Moro App</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
