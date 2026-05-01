import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Qu'est-ce que Moro ?",
    answer:
      "Moro est une application mobile inclusive dédiée à la gestion des opérations courantes des groupements (tontines, coopératives, associations) et à l'accès au microfinancement. Elle permet de gérer les cotisations, les dépenses, les événements et bien plus encore.",
  },
  {
    question: "Moro est-il disponible sur Android et iOS ?",
    answer:
      "Oui ! Moro est disponible sur Google Play (Android) et l'App Store (iOS). Vous pouvez télécharger l'application gratuitement et démarrer avec le plan de base sans engagement.",
  },
  {
    question: "Comment fonctionne la gestion des cotisations ?",
    answer:
      "Moro vous permet de créer des cycles de cotisation, d'ajouter vos membres, de suivre les paiements en temps réel et de générer des rapports automatiques. Les notifications push rappellent aux membres leurs échéances.",
  },
  {
    question: "Mon argent est-il en sécurité sur Moro ?",
    answer:
      "La sécurité est notre priorité. Moro utilise un chiffrement de bout en bout, une authentification à deux facteurs et est conforme aux réglementations financières locales. Nous ne stockons aucune donnée bancaire sensible sur nos serveurs.",
  },
  {
    question: "Qu'est-ce que Moro Business ?",
    answer:
      "Moro Business est une offre dédiée aux Institutions de Microfinance (IMF), coopératives et associations avec des besoins avancés. Elle inclut la comptabilité OHADA, la gestion multi-agences, des tableaux de bord analytiques et un support prioritaire.",
  },
  {
    question: "Est-ce que Moro fonctionne sans connexion internet ?",
    answer:
      "Oui, Moro dispose d'un mode hors-ligne qui vous permet de continuer à enregistrer des transactions. Les données se synchronisent automatiquement dès que la connexion est rétablie.",
  },
  {
    question: "Quels sont les tarifs de Moro ?",
    answer:
      "Moro propose une offre 'Moro Journée' à 200 FCFA/24h pour tester l'application sans engagement. Pour un accès complet aux fonctionnalités avancées (OCR intelligent, utilisateurs et projets illimités), l'offre 'Moro Essentiel' est disponible à 900 FCFA/mois. Une offre spécifique existe également pour les coopératives et GIE.",
  },
  {
    question: "Dans quelles langues Moro est-il disponible ?",
    answer:
      "Moro est disponible en Français et en Anglais. Pour être encore plus inclusif, l'application sera bientôt disponible en Bambara et en Malinké (Dioula). Moro intègre également la reconnaissance vocale et textuelle dans toutes ces langues, facilitant l'enregistrement de vos opérations.",
  },
  {
    question: "Comment contacter le support Moro ?",
    answer:
      "Notre équipe est disponible via le chat intégré dans l'application, par e-mail à support@moro-apps.net, ou via nos réseaux sociaux. Le support prioritaire est inclus dans les offres Business.",
  },
];

const FAQItem = memo(
  ({
    faq,
    index,
    isOpen,
    onToggle,
  }: {
    faq: (typeof faqs)[0];
    index: number;
    isOpen: boolean;
    onToggle: () => void;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-border/60 rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-elevated transition-shadow"
    >
      <button
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-semibold text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-primary"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
);

export const FAQSection = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Questions fréquentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur Moro. Vous ne trouvez pas votre
            réponse ?{" "}
            <a
              href="mailto:support@moro-apps.net"
              className="text-primary hover:underline font-medium"
            >
              Contactez-nous
            </a>
            .
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Vous avez d'autres questions ?{" "}
            <a
              href="mailto:support@moro-apps.net"
              className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
            >
              Écrivez-nous
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
});
