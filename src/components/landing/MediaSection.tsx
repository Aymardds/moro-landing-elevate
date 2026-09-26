import { motion } from "framer-motion";
import { ArrowUpRight, Play, FileText } from "lucide-react";

interface MediaMention {
  logo: React.ReactNode;
  type: "video" | "article";
  typeLabel: string;
  url: string;
  mediaName: string;
}

const mediaMentions: MediaMention[] = [
  {
    mediaName: "Life TV",
    logo: (
      <img
        src="/press/lifetv.png"
        alt="Life TV"
        className="h-10 w-auto object-contain max-w-[140px]"
        loading="lazy"
      />
    ),
    type: "video",
    typeLabel: "Reportage Vidéo",
    url: "https://youtu.be/s9nitihJLrc",
  },
  {
    mediaName: "Reflet TV",
    logo: (
      <img
        src="/press/reflettv.png"
        alt="Reflet TV"
        className="h-10 w-auto object-contain max-w-[140px]"
        loading="lazy"
      />
    ),
    type: "video",
    typeLabel: "Reportage Vidéo",
    url: "https://youtu.be/QhsyY-MNnhc",
  },
  {
    mediaName: "Fratmat Info",
    logo: (
      <img
        src="/press/fratmat.png"
        alt="Fratmat Info"
        className="h-8 w-auto object-contain max-w-[140px]"
        loading="lazy"
      />
    ),
    type: "article",
    typeLabel: "Presse Nationale",
    url: "https://www.fratmat.info/article/2641713/economie/inclusion-financiere-les-portes-du-credit-souvrent-aux-acteurs-du-secteur-informel",
  },
  {
    mediaName: "Linfodrome",
    logo: (
      <img
        src="/press/linfodrome.png"
        alt="Linfodrome"
        className="h-11 w-auto object-contain max-w-[160px]"
        loading="lazy"
      />
    ),
    type: "article",
    typeLabel: "Presse / Actualités",
    url: "https://www.linfodrome.com/societe/121029-inclusion-financiere-une-application-innovante-pour-structurer-le-secteur-informel-et-faciliter-l-acces-au-credit",
  },
  {
    mediaName: "AIP",
    logo: (
      <img
        src="/press/aip.png"
        alt="AIP"
        className="h-10 w-auto object-contain max-w-[140px]"
        loading="lazy"
      />
    ),
    type: "article",
    typeLabel: "Agence de Presse",
    url: "https://www.aip.ci/358661/cote-divoire-aip-une-fintech-entend-accompagner-letat-dans-la-formalisation-du-secteur-informel-pour-faciliter-lacces-au-credit/",
  },
  {
    mediaName: "Impose",
    logo: (
      <img
        src="/press/impose.png"
        alt="Impose"
        className="h-8 w-auto object-contain max-w-[140px]"
        loading="lazy"
      />
    ),
    type: "article",
    typeLabel: "Magazine Économique",
    url: "https://impose-ci.com/moro-quand-la-technologie-tente-de-structurer-linformel-africain/le-mensuel/",
  },
  {
    mediaName: "Minutes Eco",
    logo: (
      <img
        src="/press/minuteseco.png"
        alt="Minutes Eco"
        className="h-6 w-auto object-contain max-w-[140px]"
        loading="lazy"
      />
    ),
    type: "article",
    typeLabel: "Presse Économique",
    url: "https://www.minutes-eco.com/news/3403-inclusion-financiere-une-application-aide-a-structurer-l-informel-et-facilite-l-acces-au-credit",
  },
];

export const MediaSection = () => {
  return (
    <section className="section-padding bg-muted/20 relative overflow-hidden section-deferred">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold mb-4 uppercase tracking-wider text-sm bg-accent/10 px-4 py-1.5 rounded-full">
            Presse & Médias
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2">
            Les médias parlent de <span className="text-gradient">Moro</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Retrouvez les articles et reportages des médias nationaux et internationaux qui s'intéressent à notre mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {mediaMentions.map((mention, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                    {mention.type === "video" ? (
                      <Play className="w-3 h-3 text-accent fill-accent/10" />
                    ) : (
                      <FileText className="w-3 h-3 text-primary" />
                    )}
                    {mention.typeLabel}
                  </span>
                </div>
                <div className="h-12 flex items-center justify-start mb-6">
                  {mention.logo}
                </div>
              </div>

              <div className="border-t border-border/50 pt-4 mt-auto">
                <a
                  href={mention.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-sm font-bold text-primary group-hover:text-accent transition-colors group/link"
                  aria-label={`Ouvrir le reportage ou article de ${mention.mediaName}`}
                >
                  <span>
                    {mention.type === "video"
                      ? "Regarder le reportage"
                      : "Lire l'article complet"}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-accent/10 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
