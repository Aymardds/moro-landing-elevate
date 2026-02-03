import { motion } from "framer-motion";
import { Building2, Landmark, Users, Sprout } from "lucide-react";

const audiences = [
    {
        icon: Building2,
        title: "PMEs",
        description: "Digitalisez vos encaissements et paiements pour vous concentrer sur votre cœur de métier. Une gestion financière simplifiée pour une croissance accélérée.",
    },
    {
        icon: Landmark,
        title: "Associations",
        description: "ONG, associations communautaires, clubs. Simplifiez la gestion des cotisations et des projets en centralisant vos finances.",
    },
    {
        icon: Users,
        title: "Groupements",
        description: "Groupements d'intérêt économique, tontines formalisées, mutuelles de santé. Une transparence totale pour tous vos membres.",
    },
    {
        icon: Sprout,
        title: "Coopératives",
        description: "Coopératives agricoles, d'épargne et de crédit, de production. Gérez vos membres et vos finances efficacement avec des outils adaptés.",
    },
];

export const BusinessAudience = () => {
    return (
        <section className="py-20 bg-background relative z-10">
            <div className="container-tight">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold mb-6 font-montserrat"
                    >
                        Une solution adaptée à <span className="text-primary">votre structure</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Que vous soyez une entreprise ou une organisation à but non lucratif, Moro Business s'adapte à vos besoins.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {audiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-muted/30 p-6 rounded-2xl border border-border/50 hover:bg-muted/50 transition-colors text-center"
                        >
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-sm">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
