import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { WavyBackground } from "@/components/ui/WavyBackground";
import waveBg from "@/assets/wave-bg.jpg";

const trustChips = [
  "Paiement Wave & MoMo",
  "Sans engagement",
  "IA en français naturel",
  "Score financier alternatif",
  "8 pays UEMOA",
];

export const CTASection = () => {
  return (
    <section id="cta-section" className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background image overlay */}
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Moro, du marché informel au crédit formel
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/75 mb-10 max-w-xl mx-auto leading-relaxed">
            La première app africaine qui transforme vos opérations quotidiennes
            en dossier de financement.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {trustChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 bg-white/8 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold text-white/85"
              >
                <span className="text-[#95d5b2] font-black">✓</span>
                {chip}
              </span>
            ))}
          </div>

          {/* Download CTA */}
          <button
            onClick={() => {
              // Scroll to download section or open store link
              const el = document.getElementById("download-cta");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-accent hover:bg-[#e08b0a] text-white font-black text-base px-9 py-4 rounded-xl shadow-[0_4px_20px_rgba(244,160,28,0.35)] transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-5 h-5" />
            Télécharger Moro — Gratuit
          </button>
        </motion.div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
