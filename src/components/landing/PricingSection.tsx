import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Types ─── */
interface Plan {
  icon: string;
  name: string;
  tag: string;
  priceMonthly: string | null;
  priceAnnual: string | null;
  priceFree?: string;
  periodMonthly?: string;
  periodAnnual?: string;
  equiv: string;
  features: { text: string; badge?: string }[];
  cta: string;
  badge?: string;
  variant: "default" | "best" | "coop";
}

/* ─── Data ─── */
const plans: Plan[] = [
  {
    icon: "☀️",
    name: "Moro Journée",
    tag: "Sans engagement, par jour",
    priceMonthly: "200",
    priceAnnual: "200",
    periodMonthly: "par 24h",
    periodAnnual: "par 24h",
    equiv: "Essai sans risque",
    features: [
      { text: "Caisse quotidienne illimitée" },
      { text: "Suivi créances clients" },
      { text: "1 projet actif" },
      { text: "Moro AI — saisie vocale/texte" },
      { text: "Rapport journalier" },
      { text: "Début scoring financier", badge: "Nouveau" },
    ],
    cta: "Essayer aujourd'hui",
    variant: "default",
  },
  {
    icon: "📱",
    name: "Moro Essentiel",
    tag: "Le commerçant actif",
    priceMonthly: "900",
    priceAnnual: "720",
    periodMonthly: "/ mois",
    periodAnnual: "/ mois · facturé annuellement",
    equiv: "30 FCFA/jour",
    features: [
      { text: "Tout de Journée +" },
      { text: "Moro AI — saisie vocale/texte" },
      { text: "Analyses des flux financiers" },
      { text: "Projets illimités" },
      { text: "3 utilisateurs" },
      { text: "Gestion autonome de projet (5)" },
      { text: "Annonces 15/mois" },
      { text: "Score financier actif" },
    ],
    cta: "Commencer",
    variant: "default",
  },
  {
    icon: "🚀",
    name: "Moro Pro",
    tag: "TPE & structures professionnelles",
    priceMonthly: "3 000",
    priceAnnual: "2 500",
    periodMonthly: "/ mois",
    periodAnnual: "/ mois · facturé annuellement",
    equiv: "100 FCFA/jour ☕",
    features: [
      { text: "Tout de Essentiel +" },
      { text: "OCR Intelligent — scan factures", badge: "IA" },
      { text: "Simulateur de crédit", badge: "Exclusif" },
      { text: "Tableau de bord intelligent" },
      { text: "Résultat d'exploitation" },
      { text: "Utilisateurs illimités" },
      { text: "Assistance financement de projet" },
      { text: "Annonces illimitées" },
      { text: "Support 24/7 prioritaire" },
    ],
    cta: "Souscrire maintenant",
    badge: "⭐ POPULAIRE",
    variant: "best",
  },
  {
    icon: "🌾",
    name: "Moro Collectif",
    tag: "Coopératives, tontines, associations",
    priceFree: "Gratuit*",
    priceMonthly: null,
    priceAnnual: null,
    equiv: "*seuil abaissé à 20 membres",
    periodMonthly: "Pour 10+ membres",
    features: [
      { text: "Gestion cotisations & tontines" },
      { text: "Projets & budgets collectifs" },
      { text: "Tableau de bord partagé" },
      { text: "Score collectif IMF", badge: "Clé" },
      { text: "Accès coopérative (pipeline)", badge: "Clé" },
      { text: "Membres illimités" },
    ],
    cta: "Créer mon groupe",
    badge: "🤝 COOPÉRATIVES",
    variant: "coop",
  },
];

/* ─── Score bars ─── */
const scores = [
  { label: "Diversité des revenus", value: 15, max: 15 },
  { label: "Régularité des opérations", value: 11, max: 15 },
  { label: "Ancienneté plateforme", value: 8, max: 15 },
];

/* ─── Pipeline steps ─── */
const pipeline = [
  { label: "Profil complet", sub: "En cours — complétez vos infos", state: "active" as const },
  { label: "Score supérieur à 60", sub: "Complété ✓", state: "done" as const },
  { label: "Accès coopérative", sub: "En cours — rejoignez un groupe", state: "active" as const },
  { label: "Accès microfinance", sub: "À venir — déblocage automatique", state: "locked" as const },
];

/* ─── Helper ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const getPrice = (plan: Plan) => {
    if (plan.priceFree) return plan.priceFree;
    return isAnnual ? plan.priceAnnual : plan.priceMonthly;
  };

  const getPeriod = (plan: Plan) => {
    if (plan.priceFree) return plan.periodMonthly ?? "";
    return isAnnual ? plan.periodAnnual : plan.periodMonthly;
  };

  return (
    <section id="pricing" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* ── decorative blobs ── */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-tight relative z-10">

        {/* ── Header ── */}
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            🌍 Zone UEMOA — Secteur informel &amp; PME
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 font-montserrat">
            De la caisse du jour<br />à votre{" "}
            <span className="text-gradient">premier crédit</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Moro enregistre vos opérations par IA, construit votre score financier
            et ouvre l'accès au microfinancement.
          </p>

          {/* Toggle */}
          <div className="inline-flex bg-muted rounded-full p-1 gap-1 relative">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${!isAnnual ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${isAnnual ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Annuel
            </button>
            <span className="absolute -top-3 -right-2 bg-accent text-white text-[10px] font-black px-2.5 py-0.5 rounded-full">
              −20%
            </span>
          </div>
        </motion.div>

        {/* ── Feature strip ── */}
        <motion.div {...fadeUp(0.1)} className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: "🤖",
              title: "IA Comptable — Moro AI",
              desc: "Dites ou photographiez vos opérations. L'IA les enregistre dans le bon projet, dans la bonne catégorie, instantanément.",
            },
            {
              icon: "📊",
              title: "Score financier alternatif",
              desc: "Diversité des revenus, régularité, ancienneté : votre score se construit automatiquement à chaque opération enregistrée.",
            },
            {
              icon: "🏦",
              title: "Pipeline vers le financement",
              desc: "Profil → Score >60 → Coopérative → Microfinance. Un chemin clair et progressif vers l'accès au crédit formel.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 + i * 0.08)}
              className="bg-foreground rounded-2xl p-5 relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/[0.04]" />
              <span className="text-3xl block mb-3">{item.icon}</span>
              <h3 className="font-montserrat font-bold text-primary-light text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
              <span className="inline-block mt-3 bg-primary/30 text-primary-light text-[10px] font-black px-2.5 py-0.5 rounded-full">
                Vu dans l'app ✓
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Plans grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.05 + i * 0.08)}
              className={`relative rounded-2xl p-6 flex flex-col border-2 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${plan.variant === "best"
                ? "bg-foreground text-white border-primary lg:scale-[1.04] z-10 shadow-elevated"
                : plan.variant === "coop"
                  ? "bg-gradient-to-br from-[#f4a01c] to-[#d4880f] text-white border-transparent"
                  : "bg-white text-foreground border-transparent"
                }`}
            >
              {/* Top badge */}
              {plan.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-black px-3 py-1 rounded-full ${plan.variant === "best"
                    ? "bg-accent text-white"
                    : "bg-primary text-white"
                    }`}
                >
                  {plan.badge}
                </span>
              )}

              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4 ${plan.variant === "default" ? "bg-primary/10" : "bg-white/15"
                  }`}
              >
                {plan.icon}
              </div>

              {/* Name & tag */}
              <p className="font-montserrat font-bold text-base mb-0.5">{plan.name}</p>
              <p className={`text-xs mb-5 ${plan.variant === "default" ? "text-muted-foreground" : "text-white/65"}`}>
                {plan.tag}
              </p>

              {/* Price */}
              <div className="mb-5">
                <div className="flex items-baseline gap-1">
                  <span className="font-montserrat font-black text-4xl">{getPrice(plan)}</span>
                  {!plan.priceFree && (
                    <span className={`text-sm font-semibold ${plan.variant === "default" ? "text-muted-foreground" : "text-white/65"}`}>
                      FCFA
                    </span>
                  )}
                </div>
                <p className={`text-xs mt-1 ${plan.variant === "default" ? "text-muted-foreground" : "text-white/65"}`}>
                  {getPeriod(plan)}
                </p>
                <span
                  className={`inline-block mt-2 text-[10px] font-bold px-2.5 py-0.5 rounded-full ${plan.variant === "best"
                    ? "bg-white/12 text-white/85"
                    : plan.variant === "coop"
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary"
                    }`}
                >
                  {plan.equiv}
                </span>
              </div>

              {/* Divider */}
              <div className={`h-px mb-4 ${plan.variant === "default" ? "bg-border" : "bg-white/15"}`} />

              {/* Features */}
              <ul className="space-y-2.5 mb-6 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs font-semibold leading-snug">
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.variant === "default" ? "bg-primary/15 text-primary" : "bg-white/18 text-white"
                        }`}
                    >
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span className="flex-1">{f.text}</span>
                    {f.badge && (
                      <span
                        className={`flex-shrink-0 text-[9px] font-black px-1.5 py-0.5 rounded-full ${plan.variant === "best"
                          ? "bg-accent/25 text-[#f4a01c]"
                          : plan.variant === "coop"
                            ? "bg-white/20 text-white"
                            : "bg-accent/12 text-accent"
                          }`}
                      >
                        {f.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl text-sm font-black transition-all mt-auto ${plan.variant === "best"
                  ? "bg-accent text-white hover:bg-[#e08b0a] shadow-[0_4px_16px_rgba(244,160,28,0.35)]"
                  : plan.variant === "coop"
                    ? "bg-white text-[#e08b0a] hover:opacity-90"
                    : "bg-primary text-white hover:bg-primary/90"
                  }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* ── Moro AI Deep Dive ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="bg-foreground rounded-2xl p-8 mb-10 grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Left */}
          <div>
            <h2 className="font-montserrat font-black text-2xl text-white mb-3 leading-snug">
              Moro AI :<br />
              <span className="text-primary-light">votre comptable</span><br />
              dans la poche
            </h2>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Pas besoin de savoir tenir une comptabilité. Parlez à Moro en français
              naturel, envoyez une photo de facture — l'IA fait le reste. Chaque
              opération enregistrée renforce votre score financier.
            </p>
            <div className="flex flex-wrap gap-2">
              {["📸 OCR factures", "🗣️ Saisie naturelle", "⚡ Confirmation IA", "📁 Classement auto"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold px-3 py-1.5 rounded-full border bg-primary/25 border-primary/40 text-primary-light"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — chat mockup */}
          <div className="bg-white/[0.06] border border-white/10 rounded-xl p-5">
            <div className="bg-primary text-white text-sm rounded-xl px-4 py-3 ml-4 mb-3 leading-relaxed">
              Je viens de vendre trois box de poulet à 35 000 chacune pour mon projet AfricaFood
            </div>
            <div className="bg-white/[0.08] border border-white/10 text-white/90 text-sm rounded-xl px-4 py-3 mr-4 mb-3 leading-relaxed">
              Je vais créer 3 transactions de revenu de 35 000 FCFA, liées au projet «&nbsp;AfricaFood&nbsp;». Confirmes-tu&nbsp;?
            </div>
            <div className="bg-primary text-white text-sm rounded-xl px-4 py-2 ml-4 mb-3">
              Oui vas-y ✅
            </div>

            {/* Result card */}
            <div className="bg-white/[0.05] border border-primary/40 rounded-xl p-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex justify-between text-xs text-white/75 py-1">
                  <span>Vente box {n}</span>
                  <span className="text-primary-light font-bold">+35 000 FCFA</span>
                </div>
              ))}
              <div className="border-t border-white/10 mt-2 pt-2 flex justify-between text-xs font-black text-primary-light">
                <span>Total enregistré</span>
                <span>+105 000 FCFA</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Scoring Deep Dive ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="bg-white rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-start shadow-card"
        >
          {/* Left — pipeline */}
          <div>
            <h2 className="font-montserrat font-black text-2xl text-foreground mb-3">
              Votre score = votre accès au crédit
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-7">
              Chaque opération enregistrée dans Moro construit silencieusement votre dossier
              financier. Le pipeline d'éligibilité vous guide pas à pas vers l'accès au
              microfinancement formel.
            </p>

            <div className="flex flex-col gap-0">
              {pipeline.map((step, i) => (
                <div key={i} className="relative flex items-start gap-4 pb-6 last:pb-0">
                  {/* vertical line */}
                  {i < pipeline.length - 1 && (
                    <div className="absolute left-[14px] top-8 w-0.5 h-[calc(100%-20px)] bg-border" />
                  )}
                  {/* dot */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 relative z-10 ${step.state === "done"
                      ? "bg-primary text-white"
                      : step.state === "active"
                        ? "border-2 border-primary text-primary bg-white"
                        : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {step.state === "done" ? "✓" : i + 1}
                  </div>
                  <div className="pt-0.5">
                    <p className="text-sm font-bold text-foreground">{step.label}</p>
                    <p
                      className={`text-xs mt-0.5 font-semibold ${step.state === "done"
                        ? "text-primary"
                        : step.state === "active"
                          ? "text-accent"
                          : "text-muted-foreground"
                        }`}
                    >
                      {step.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — score bars + tips */}
          <div>
            {scores.map((s, i) => (
              <div key={i} className="bg-secondary/50 rounded-xl p-4 mb-3">
                <div className="flex justify-between text-sm font-bold text-foreground mb-2">
                  <span>{s.label}</span>
                  <span className="text-primary">{s.value} / {s.max}</span>
                </div>
                <div className="h-2 bg-[#ddd] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(s.value / s.max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                  />
                </div>
              </div>
            ))}

            <ul className="mt-4 divide-y divide-border">
              {[
                { icon: "💰", tip: "Épargnez régulièrement pour augmenter votre score de régularité" },
                { icon: "📅", tip: "Votre ancienneté sur la plateforme améliore votre score automatiquement" },
                { icon: "🤝", tip: "Rejoignez une coopérative pour débloquer de nouvelles opportunités" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 py-3 text-xs text-muted-foreground leading-snug">
                  <div className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center text-base flex-shrink-0">
                    {item.icon}
                  </div>
                  {item.tip}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
