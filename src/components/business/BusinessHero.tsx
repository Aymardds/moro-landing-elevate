import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export const BusinessHero = () => {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen bg-[#0a1a0f] grid lg:grid-cols-2 overflow-hidden font-futura">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-[50%] right-[-10%] w-[60%] h-[60%] bg-[#1e6641]/35 rounded-full blur-[120px] -translate-y-1/2"
                />
                <div
                    className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-[#e8870a]/12 rounded-full blur-[100px]"
                />
                {/* Grid Texture */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* Content Left */}
            <div className="relative z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-24 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 text-[#4db87a] text-[11px] font-semibold tracking-[0.2em] uppercase mb-8"
                >
                    <div className="w-7 h-0.5 bg-[#4db87a] rounded-full" />
                    Moro — Module Comptabilité
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-8"
                >
                    De la vente du jour<br />
                    à l'<em className="italic text-[#4db87a] not-italic">état financier</em><br />
                    certifié OHADA
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white/60 text-base sm:text-lg leading-relaxed max-w-md mb-12"
                >
                    Moro est la seule application mobile qui transforme vos opérations quotidiennes en bilan conforme SYSCOA/OHADA, exportable et certifiable — en un tap.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap gap-2.5 mb-12"
                >
                    {[
                        { text: "📊 Bilan SYSCOA/OHADA automatique", color: "green" },
                        { text: "📄 Export PDF instantané", color: "green" },
                        { text: "🏅 Certification intégrée", color: "orange" },
                        { text: "🤖 Saisie par IA conversationnelle", color: "green" }
                    ].map((chip, i) => (
                        <div
                            key={i}
                            className={`px-4 py-2 rounded-full text-[12px] font-semibold border ${chip.color === 'green'
                                    ? 'bg-[#4db87a]/15 border-[#4db87a]/30 text-[#4db87a]'
                                    : 'bg-[#e8870a]/15 border-[#e8870a]/30 text-[#f0a030]'
                                }`}
                        >
                            {chip.text}
                        </div>
                    ))}
                </motion.div>

                <motion.a
                    href="#journey"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="group inline-flex items-center gap-3 bg-[#4db87a] hover:bg-[#5dc98a] text-[#0a1a0f] px-8 py-4 rounded-xl text-sm font-bold transition-all hover:-translate-y-1 active:translate-y-0 w-fit"
                >
                    Découvrir le parcours comptable
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
            </div>

            {/* Mockup Right */}
            <div className="relative z-10 flex items-center justify-center p-8 lg:p-20">
                <div className="relative w-full max-w-[300px] aspect-[1/2]">
                    {/* Phone 2 (Behind) */}
                    <motion.div
                        animate={{
                            y: [0, -8, 0],
                            rotate: [3, 3, 3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-[60px] left-[30px] w-full bg-[#111] rounded-[36px] overflow-hidden border border-white/10 shadow-2xl opacity-60 z-10"
                    >
                        <div className="bg-[#e8870a] text-white py-2 px-4 text-center text-[10px] font-bold">Certification</div>
                        <div className="p-6 text-center">
                            <div className="text-3xl mb-3">🏅</div>
                            <div className="text-[#e8870a] text-[9px] font-bold mb-2 uppercase">État financier certifié</div>
                            <p className="text-white/50 text-[8px] leading-relaxed">
                                Bilan SMT SYSCOA/OHADA<br />Mars 2026 — Validé
                            </p>
                        </div>
                    </motion.div>

                    {/* Phone 1 (Front) */}
                    <motion.div
                        animate={{
                            y: [0, -12, 0],
                            rotate: [-2, -2, -2]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-full bg-[#111] rounded-[36px] overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)] z-20"
                    >
                        <div className="bg-[#1e6641] text-white py-3 px-4 text-center text-[10px] font-bold">Comptabilité — Mars 2026</div>
                        <div className="flex border-b border-gray-100 bg-white">
                            <div className="flex-1 py-2 text-center text-[8px] font-bold text-[#1e6641] border-b-2 border-[#1e6641]">Bilan</div>
                            <div className="flex-1 py-2 text-center text-[8px] font-bold text-gray-400">Résultat</div>
                        </div>
                        <div className="p-4 bg-white min-h-[300px]">
                            <div className="bg-[#f0faf4] rounded-xl p-3 mb-3">
                                <div className="flex justify-between text-[8px] text-gray-700 py-1">
                                    <span>Actifs</span>
                                    <span className="font-bold text-[#1e6641]">8 979 200 FCFA</span>
                                </div>
                                <div className="flex justify-between text-[8px] text-gray-700 py-1">
                                    <span>Passifs</span>
                                    <span>0 FCFA</span>
                                </div>
                                <div className="flex justify-between text-[8px] font-black text-[#1e6641] py-1 mt-1 border-t border-gray-100">
                                    <span>Capitaux propres</span>
                                    <span>8 979 200 FCFA</span>
                                </div>
                            </div>

                            <div className="text-[8px] font-bold text-gray-800 mb-2">Trésorerie</div>
                            <div className="flex justify-between p-2 bg-gray-50 rounded-lg text-[7.5px] items-center mb-1">
                                <span>Portefeuille (CASH)</span>
                                <span className="text-[#1e6641] font-bold">4 159 200 FCFA</span>
                            </div>
                            <div className="flex justify-between p-2 bg-gray-50 rounded-lg text-[7.5px] items-center">
                                <span>Caisse (CHECKING)</span>
                                <span className="text-[#1e6641] font-bold">100 000 FCFA</span>
                            </div>

                            <div className="mt-4 bg-[#1e6641] text-white py-2 rounded-lg text-[8px] font-bold text-center">
                                📄 Générer le bilan comptable
                            </div>
                            <div className="mt-1.5 border-1.5 border-[#1e6641] text-[#1e6641] py-2 rounded-lg text-[8px] font-bold text-center">
                                Exporter PDF
                            </div>
                        </div>
                    </motion.div>

                    {/* Certification Badge Overlay */}
                    <div className="absolute top-[-20px] right-[-30px] z-30">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-24 h-24 bg-gradient-to-br from-[#e8870a] to-[#f5a020] rounded-full border-4 border-white/20 shadow-xl flex items-center justify-center p-2"
                        >
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="text-center"
                            >
                                <div className="text-3xl mb-0.5">🏅</div>
                                <div className="text-white text-[8px] font-black tracking-widest leading-none">CERTIFIÉ</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
