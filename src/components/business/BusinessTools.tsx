import { motion } from "framer-motion";
import { User, CreditCard, Briefcase, Inbox, Banknote, BarChart3, ChevronRight } from "lucide-react";

const tools = [
    { name: "Employés", icon: User },
    { name: "Factures", icon: CreditCard },
    { name: "Fournisseurs", icon: Briefcase },
    { name: "Stock", icon: Inbox },
    { name: "Comptabilité", icon: Banknote },
    { name: "Analyses", icon: BarChart3 },
];

export const BusinessTools = () => {
    return (
        <section className="bg-white py-24 px-8 sm:px-12 lg:px-20 font-futura overflow-hidden">
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block bg-[#e8f5ee] text-[#2d8a58] text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-5">
                        Outils financiers
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a1a0f] leading-[1.15] mb-6">
                        Centralisez la <span className="text-[#1e6641]">gestion de votre entreprise</span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#6b7066] leading-relaxed mb-8">
                        MoroBusiness regroupe tous les outils dont vous avez besoin pour piloter votre activité au quotidien. De la gestion de vos employés à l'analyse de vos performances, tout est disponible au même endroit, conçu pour être simple et rapide.
                    </p>
                </motion.div>

                {/* Right side: App Menu Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative max-w-[400px] mx-auto w-full"
                >
                    {/* Background blob for visual interest */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1e6641]/5 rounded-full blur-3xl -z-10" />

                    <div className="bg-[#f8f9fa] p-4 sm:p-6 rounded-[24px] border border-gray-100 shadow-xl">
                        <div className="text-[12px] font-bold text-gray-500 uppercase tracking-widest pl-2 mb-3">
                            Entreprise
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={tool.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                                    className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors ${index !== tools.length - 1 ? 'border-b border-gray-100' : ''
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="text-[#2d8a58]">
                                            <tool.icon size={22} className="stroke-[2.5px]" />
                                        </div>
                                        <span className="text-[17px] font-medium text-gray-800">
                                            {tool.name}
                                        </span>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-400" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
