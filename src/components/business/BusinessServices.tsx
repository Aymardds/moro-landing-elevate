import { motion } from "framer-motion";
import { CreditCard, BarChart3, Users, Globe, ShieldCheck, Zap } from "lucide-react";

const services = [
    {
        icon: CreditCard,
        title: "Paiements de masse",
        description: "Envoyez des paiements à plusieurs bénéficiaires en un clic. Idéal pour les salaires et les fournisseurs.",
    },
    {
        icon: BarChart3,
        title: "Analytique avancée",
        description: "Suivez vos flux financiers en temps réel avec des graphiques détaillés et des rapports exportables.",
    },
    {
        icon: Users,
        title: "Gestion d'équipe",
        description: "Gérez les accès et les permissions de votre équipe avec des rôles personnalisables.",
    },
    {
        icon: Globe,
        title: "Opérations internationales",
        description: "Facilitez vos transactions transfrontalières avec des taux de change compétitifs.",
    },
    {
        icon: ShieldCheck,
        title: "Sécurité renforcée",
        description: "Protocoles de sécurité bancaire pour protéger toutes vos transactions et données sensibles.",
    },
    {
        icon: Zap,
        title: "API pour développeurs",
        description: "Intégrez nos solutions de paiement directement dans votre propre application ou site web.",
    },
];

export const BusinessServices = () => {
    return (
        <section className="py-20 bg-muted/30 relative overflow-hidden" id="services">
            <div className="container-tight relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold mb-6 font-montserrat"
                    >
                        Pourquoi choisir <span className="text-primary">Moro Business</span> ?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Des outils conçus pour accélérer votre croissance et simplifier votre gestion quotidienne.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card hover:bg-card/80 p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
