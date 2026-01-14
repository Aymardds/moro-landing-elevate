import { motion } from "framer-motion";
import cooperativeMeeting from "@/assets/cooperative-meeting.jpg";

const audiences = [
  {
    emoji: "🤝",
    title: "Coopératives",
    description: "Coopératives agricoles, d'épargne et de crédit, de production. Gérez vos membres et vos finances efficacement.",
  },
  {
    emoji: "🏛️",
    title: "Associations",
    description: "ONG, associations communautaires, clubs. Simplifiez la gestion des cotisations et des projets.",
  },
  {
    emoji: "👥",
    title: "Groupements",
    description: "Groupements d'intérêt économique, tontines formalisées, mutuelles de santé.",
  },
  {
    emoji: "💼",
    title: "Secteur informel",
    description: "Marchands, artisans, micro-entrepreneurs. Formalisez votre activité et accédez au crédit.",
  },
];

export const AudienceSection = () => {
  return (
    <section id="audience" className="section-padding bg-background overflow-hidden">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold mb-4">
              POUR QUI ?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Moro s'adapte à votre réalité
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Que vous soyez une coopérative de 10 membres ou une association de 
              1000 personnes, Moro grandit avec vous.
            </p>

            {/* Audience Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {audiences.map((audience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card border border-border/50 rounded-xl p-5 hover:shadow-card transition-shadow"
                >
                  <span className="text-3xl mb-3 block">{audience.emoji}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {audience.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={cooperativeMeeting}
                alt="Réunion de coopérative africaine"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 left-6 right-6 glass rounded-xl p-5 shadow-elevated"
            >
              <p className="text-foreground italic mb-3">
                "Moro nous a permis de passer de 50 à 200 membres en gardant une gestion rigoureuse."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full" />
                <div>
                  <div className="font-semibold text-foreground">Mariama Diallo</div>
                  <div className="text-sm text-muted-foreground">Présidente, Coop Jëkko</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
