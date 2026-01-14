import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Apple, PlayCircle, ArrowRight } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup-real.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-warm" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
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
                +5000 coopératives nous font confiance
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              La solution de{" "}
              <span className="text-gradient">gestion et financement</span>{" "}
              pour les coopératives africaines
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Simplifiez la gestion de vos membres, cotisations et projets.
              Accédez à des financements adaptés au secteur informel.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="xl" className="group">
                Inscrire ma coopérative
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="accent" size="xl">
                Voir la démo
              </Button>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-foreground text-background px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Télécharger sur</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
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

          {/* Hero Image - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <img
                src={phoneMockup}
                alt="Application Moro sur smartphone"
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-elevated"
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
              className="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-elevated"
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
                  <span className="font-bold text-foreground">+50K</span>
                  <span className="text-muted-foreground"> utilisateurs</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
