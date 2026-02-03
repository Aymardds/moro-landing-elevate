import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Activity, Briefcase } from "lucide-react";
import { WavyBackground } from "@/components/ui/WavyBackground";
import waveBg from "@/assets/wave-bg.jpg";
import moroLogo from "@/assets/moro-logo.png";

export const BusinessHero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${waveBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white/80" />
            <WavyBackground
                colors={["#1B7D3C", "#F7941D", "#1B7D3C"]}
                opacity={0.03}
                className="opacity-40"
            />

            <div className="container-tight relative z-10 w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left flex-1"
                    >
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            <span className="text-sm font-medium">
                                Moro Business
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
                            <span className="text-gradient font-montserrat font-black">Gérez votre activité avec efficacité</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                            Une suite d'outils puissants pour piloter votre business, gérer vos paiements et analyser vos performances en temps réel.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                            <Button size="lg" className="h-12 px-8 text-lg gap-2">
                                Commencer maintenant <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                                Contacter l'équipe
                            </Button>
                        </div>

                        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-600" /> Gestion multicanale
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-600" /> Paiements sécurisés
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-600" /> Support dédié 24/7
                            </div>
                        </div>
                    </motion.div>

                    {/* Minimalist Web Interface Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex-1 w-full max-w-[650px] flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-2xl bg-white/40 backdrop-blur-2xl border border-white/50 shadow-2xl p-6 md:p-8 flex flex-col gap-8 transform hover:scale-[1.02] transition-transform duration-500">

                            {/* Header Mock */}
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <img src={moroLogo} alt="Moro Logo" className="h-8 w-auto opacity-90" />
                                    <div className="h-6 w-[1px] bg-border mx-2"></div>
                                    <div className="text-sm font-medium text-muted-foreground">Dashboard</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 border border-white"></div>
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                {/* Large Stat Card */}
                                <div className="col-span-1 md:col-span-2 bg-white/60 p-5 rounded-xl border border-white/50 shadow-sm flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Total opérations</p>
                                        <h3 className="text-2xl font-bold text-foreground">2,543,000 FCFA</h3>
                                        <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full mt-2 inline-block">+12.5%</span>
                                    </div>
                                    <div className="bg-primary/5 p-3 rounded-full text-primary">
                                        <Activity size={24} />
                                    </div>
                                </div>

                                {/* Smaller Stat Cards */}
                                <div className="bg-white/60 p-5 rounded-xl border border-white/50 shadow-sm flex flex-col justify-between">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                            <Users size={18} />
                                        </div>
                                        <span className="text-sm font-medium text-foreground">Utilisateurs</span>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold">1,250</h4>
                                        <p className="text-xs text-muted-foreground mt-1">Actifs ce mois</p>
                                    </div>
                                </div>

                                <div className="bg-white/60 p-5 rounded-xl border border-white/50 shadow-sm flex flex-col justify-between">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                                            <Briefcase size={18} />
                                        </div>
                                        <span className="text-sm font-medium text-foreground">Projets</span>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold">24</h4>
                                        <p className="text-xs text-muted-foreground mt-1">En cours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};
