import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Découverte",
    price: "Gratuit",
    period: "",
    description: "Idéal pour démarrer et tester la plateforme",
    features: [
      "Jusqu'à 25 membres",
      "Suivi des cotisations",
      "1 projet actif",
      "Rapports basiques",
      "Support par email",
    ],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Coopérative",
    price: "9 900",
    currency: "FCFA",
    period: "/mois",
    description: "Pour les coopératives en croissance",
    features: [
      "Jusqu'à 100 membres",
      "Gestion financière complète",
      "Projets illimités",
      "Rapports avancés & PDF",
      "Accès microfinancement",
      "Support prioritaire",
    ],
    cta: "Choisir cette offre",
    popular: true,
  },
  {
    name: "Association Pro",
    price: "24 900",
    currency: "FCFA",
    period: "/mois",
    description: "Pour les grandes organisations",
    features: [
      "Membres illimités",
      "Multi-administrateurs",
      "API & intégrations",
      "Formation personnalisée",
      "Account manager dédié",
      "SLA garanti",
    ],
    cta: "Contacter les ventes",
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-secondary/30">
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
            TARIFS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Des prix adaptés à chaque besoin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Commencez gratuitement et évoluez selon vos besoins. 
            Pas de frais cachés, pas d'engagement.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl p-6 lg:p-8 border ${
                plan.popular
                  ? "border-primary shadow-glow scale-105 z-10"
                  : "border-border/50 shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-foreground">
                    {plan.price}
                  </span>
                  {plan.currency && (
                    <span className="text-lg font-semibold text-muted-foreground">
                      {plan.currency}
                    </span>
                  )}
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground mt-10"
        >
          💳 Paiement sécurisé par Mobile Money, carte bancaire ou virement
        </motion.p>
      </div>
    </section>
  );
};
