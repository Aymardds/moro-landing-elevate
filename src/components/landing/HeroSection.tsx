import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Apple, PlayCircle, ArrowRight } from "lucide-react";
import { WavyBackground } from "@/components/ui/WavyBackground";
import waveBg from "@/assets/wave-bg.jpg";
import heroPeople from "@/assets/hero-people.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${waveBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40" />
      <WavyBackground
        colors={["#1B7D3C", "#F7941D", "#1B7D3C"]}
        opacity={0.02}
        className="opacity-30"
      />

      <div className="container-tight relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                +1000 utilisateurs nous font confiance
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              <span className="text-gradient font-montserrat font-black"> Une Solution Simple, Fiable et Inclusive</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Moro vous aidera à organiser, gérer vos ressources et vous accompagne dans le financement de votre projet.
            </p>

            {/* CTA Buttons */}


            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="https://apps.apple.com/fr/app/moro/id6569222115"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-foreground text-background px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
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
                className="inline-flex items-center gap-3 bg-foreground text-background px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                <PlayCircle className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Disponible sur</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Hero Image - People Illustration Highlighted */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[1080px]">
              {/* People Illustration */}
              {/* People Illustration */}
              <img
                src={heroPeople}
                alt="Jeunes filles utilisant Moro"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                loading="eager"
                // @ts-ignore
                fetchpriority="high"
                width="1024"
                height="682"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-4 md:-bottom-6 left-0 glass rounded-xl p-4 shadow-elevated z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">
                    Taux de satisfaction
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Users Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 right-0 glass rounded-xl p-4 shadow-elevated z-20"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-foreground">+1000</span>
                  <span className="text-muted-foreground"> utilisateurs</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};
