import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Apple, PlayCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Rejoignez les coopératives qui transforment leur gestion avec Moro
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10">
            Plus de 5 000 organisations nous font déjà confiance. 
            Lancez-vous gratuitement dès aujourd'hui.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              variant="accent"
              size="xl"
              className="group"
            >
              Inscrire ma coopérative
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
            >
              Demander une démo
            </Button>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-6 py-3 rounded-xl hover:bg-primary-foreground/90 transition-colors"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Télécharger sur</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-6 py-3 rounded-xl hover:bg-primary-foreground/90 transition-colors"
            >
              <PlayCircle className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Disponible sur</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
};
