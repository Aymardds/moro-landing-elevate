import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Shield,
  Wallet,
  BarChart3,
  Globe
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Gestion simplifiée",
    description: "Gérez vos membres, cotisations et assemblées en quelques clics. Fini les registres papier.",
  },
  {
    icon: Wallet,
    title: "Suivi financier en temps réel",
    description: "Visualisez l'état de vos finances, cotisations collectées et dépenses en un coup d'œil.",
  },
  {
    icon: TrendingUp,
    title: "Accès au financement",
    description: "Constituez votre historique financier et accédez à des microcrédits adaptés à vos besoins.",
  },
  {
    icon: Shield,
    title: "Transparence totale",
    description: "Chaque transaction est tracée. Renforcez la confiance entre vos membres.",
  },
  {
    icon: BarChart3,
    title: "Rapports automatisés",
    description: "Générez des bilans et rapports d'activité en un clic pour vos assemblées générales.",
  },
  {
    icon: Globe,
    title: "Adapté à l'Afrique",
    description: "Conçu pour le secteur informel africain. Fonctionne même en zone à faible connectivité.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const WhyMoroSection = () => {
  return (
    <section id="why" className="section-padding bg-background">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4">
            POURQUOI MORO ?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Une solution pensée pour vous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moro accompagne les Particuliers, PMEs, Coopératives et Associations dans leur transformation digitale
            avec des outils simples, sécurisés et adaptés au terrain.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
