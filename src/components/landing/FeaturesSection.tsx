import { motion } from "framer-motion";
import {
  Wallet,
  Activity,
  Users,
  BrainCircuit,
  BarChart3,
  Network
} from "lucide-react";
import appDashboardMockup from "@/assets/app-dashboard-mockup.png";

const features = [
  {
    icon: Wallet,
    title: "Gestion des opérations courantes",
    description: "Moro organise, planifie les opérations financières liées à un projet par catégorie, auteur.",
  },
  {
    icon: Activity,
    title: "Analyse de flux financiers",
    description: "Moro génère un tableau de bord analytique de projet et des variations graphiques de vos opérations financières.",
  },
  {
    icon: Users,
    title: "Gestion des utilisateurs",
    description: "Le contrôle d'accès granulaire permet aux utilisateurs de définir qui peut accéder à certaines informations ou fonctionnalités.",
  },
  {
    icon: BrainCircuit,
    title: "Assistance projet par l'IA",
    description: "Notre assistant doté d'IA vous aide à peaufiner votre demande de financement sans tracas !",
  },
  {
    icon: BarChart3,
    title: "Résultat d'exploitation",
    description: "Création et gestion de projets illimité, organisation de projet par catégorie, date.",
  },
  {
    icon: Network,
    title: "Mise en relation avec des investisseurs",
    description: "Moro vous connecte directement aux investisseurs et grandes industries.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="container-tight">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4">
            FONCTIONNALITÉS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Financez votre projet avec la <br /> <span className="text-primary">méthode 310</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre IA optimise votre dossier de financement et vous connecte aux bons investisseurs pour maximiser vos chances de réussite.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-8 items-center">
          {/* Left Column: Features 1-3 */}
          <div className="space-y-12">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center lg:items-end lg:text-right gap-4 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-[500px] lg:max-w-none w-full"
          >
            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-primary/20 blur-3xl rounded-full -z-10" />

            <div className="relative z-10 p-4">
              <img
                src={appDashboardMockup}
                alt="Interface de l'application Moro"
                className="w-full h-auto drop-shadow-2xl scale-125 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column: Features 4-6 */}
          <div className="space-y-12">
            {features.slice(3, 6).map((feature, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
