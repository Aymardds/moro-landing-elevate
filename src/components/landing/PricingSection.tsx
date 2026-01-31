import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Moro Basic",
      price: "200",
      currency: "FCFA",
      period: "/24h",
      description: "idéale pour usage personnel ou microprojet",
      features: [
        "Gestion des opérations (Illimité)",
        "Gestion autonome de projet (05)",
        "Gestion de 2 utilisateurs",
        "État de caisse",
        "Annonces (1 par semaine)",
        "Envoyer ou recevoir de l'argent par Wave, Momo",
      ],
      cta: "Télécharger",
      popular: false,
      color: "bg-[#f59e0b]", // Orange from image
    },
    {
      name: "Moro Premium",
      price: isAnnual ? "25 600" : "2 500",
      currency: "FCFA",
      period: isAnnual ? "/an" : "/mois",
      description: "Pour les structures professionnelles",
      features: [
        "Gestion des opérations (Illimité)",
        "Gestion de projet (Illimité)",
        "Tableau de bord intelligent",
        "Gestion d'utilisateurs (Illimité)",
        "Résultat d'exploitation",
        "Assistance et financement de projet",
        "Annonces illimitées",
        "Support client privilégié 24/7",
        "Simulateur de crédit",
        "OCR Intelligente",
        "Envoyer ou recevoir de l'argent par Wave, Momo",
      ],
      cta: "Souscrire",
      popular: true,
      color: "bg-primary",
    },
    {
      name: "Moro Business",
      price: "Gratuit*",
      currency: "",
      period: "",
      description: "Pour les associations et coopératives d'au moins 50 membres",
      features: [
        "Gestion des opérations (illimité)",
        "Projets illimités",
        "Tableau de bord intelligent",
        "Utilisateurs illimités",
        "Résultat d’exploitation",
        "Assistance accès au financement de projet",
        "Annonces illimitées",
        "Support 24/7",
        "OCR Intelligente",
        "Envoyer ou recevoir de l'argent par Wave, Momo",
      ],
      cta: "Commencer",
      popular: false,
      color: "bg-[#0F172A]", // Slate 900 for Business
    },
  ];

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Des prix adaptés à vos besoins
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos offres abordables pour aider nos clients à bénéficier de services de qualité.
          </p>

          <div className="mt-8 flex justify-center items-center gap-1">
            <div className="bg-white p-1 rounded-lg border flex gap-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${!isAnnual ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${isAnnual ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}
              >
                Annuel
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-none mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl p-6 lg:p-8 text-white ${plan.color} shadow-2xl flex flex-col`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-4">
                  {plan.price === "Gratuit" ? (
                    <span className="text-3xl font-extrabold">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-3xl font-extrabold">{plan.price}</span>
                      <span className="text-base font-medium opacity-80">{plan.currency}{plan.period}</span>
                    </>
                  )}
                </div>
                <p className="text-sm opacity-90 mt-2 min-h-[40px]">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/90 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="lg"
                className={`w-full rounded-2xl py-6 text-lg font-bold border-2 mt-auto ${plan.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 border-transparent"
                  : "bg-transparent text-white border-white hover:bg-white/10"
                  }`}
                onClick={() => {
                  if (plan.name === "Moro Basic" || plan.name === "Moro Premium") {
                    window.location.href = "#download-cta";
                  } else if (plan.name === "Moro Business") {
                    window.location.href = "#cta-section";
                  }
                }}
              >
                {plan.cta}
              </Button>

              {plan.popular && (
                <div className="absolute top-6 right-6">
                  <span className="bg-[#f59e0b] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Populaire
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
