import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Apple, PlayCircle } from "lucide-react";
import { WavyBackground } from "@/components/ui/WavyBackground";
import waveBg from "@/assets/wave-bg.jpg";

export const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
        style={{ backgroundImage: `url(${waveBg})` }}
      />
      <WavyBackground
        colors={["#ffffff", "#F7941D", "#ffffff"]}
        opacity={0.05}
        className="opacity-40"
      />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Rejoignez une finance inclusive, durable et responsable en Afrique
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10">
            Plus de 1 000 utilisateurs nous font déjà confiance. <br />
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
              href="https://apps.apple.com/fr/app/moro/id6569222115"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-6 py-3 rounded-xl hover:bg-primary-foreground/90 transition-colors"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Télécharger sur</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.litekev.moro"
              target="_blank"
              rel="noopener noreferrer"
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
