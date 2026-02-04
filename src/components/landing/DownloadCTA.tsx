import { motion } from "framer-motion";
import { Apple, PlayCircle } from "lucide-react";

export const DownloadCTA = () => {
    return (
        <section id="download-cta" className="section-padding bg-gradient-to-br from-primary/10 to-secondary/20 relative overflow-hidden">
            <div className="container-tight relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
                        Téléchargez l'application Moro
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground mb-10">
                        Disponible sur iOS et Android. <br />
                        Commencez gratuitement dès aujourd'hui.
                    </p>

                    {/* App Store Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://apps.apple.com/fr/app/moro/id6569222115"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-3 rounded-xl hover:bg-foreground/90 transition-colors"
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
                            className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-3 rounded-xl hover:bg-foreground/90 transition-colors"
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
        </section>
    );
};
