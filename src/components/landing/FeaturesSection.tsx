import { motion } from "framer-motion";
import { 
  UserCheck, 
  PieChart, 
  Landmark, 
  FileText, 
  Lock 
} from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.png";

const features = [
  {
    icon: UserCheck,
    title: "Gestion des membres",
    description: "Inscrivez, modifiez et suivez tous vos membres. Historique complet des cotisations par personne.",
  },
  {
    icon: PieChart,
    title: "Suivi financier",
    description: "Tableau de bord complet avec entrées, sorties, solde. Alertes automatiques sur les impayés.",
  },
  {
    icon: Landmark,
    title: "Projets & Microfinancement",
    description: "Créez des projets collectifs, suivez les contributions et accédez à des financements adaptés.",
  },
  {
    icon: FileText,
    title: "Rapports automatisés",
    description: "Générez des PV d'assemblée, bilans financiers et rapports d'activité en PDF.",
  },
  {
    icon: Lock,
    title: "Sécurité des données",
    description: "Vos données sont chiffrées et sauvegardées. Conformité aux standards internationaux.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              
              {/* Phone */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={phoneMockup}
                  alt="Application Moro sur mobile"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-primary font-semibold mb-4">
              FONCTIONNALITÉS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tout ce dont vous avez besoin, au bout des doigts
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Une application complète pour gérer votre coopérative de A à Z. 
              Simple à utiliser, puissante dans ses fonctionnalités.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
