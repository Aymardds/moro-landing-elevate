import { motion } from "framer-motion";

const stats = [
  { value: "1,000+", label: "Utilisateurs actifs dont 40% sont des femmes" },
  { value: "500+", label: "transcation/jour" },
  { value: "5+", label: "Partenariats stratégiques" },
  { value: "1", label: "Pays africain" },
];

const testimonials = [
  {
    quote: "Avant Moro, on perdait des heures à gérer les cotisations sur papier. Maintenant, tout est automatique.",
    author: "Amadou Koné",
    role: "Trésorier, Coopérative Baobab",
    location: "Côte d'Ivoire",
  },
  {
    quote: "L'accès au microfinancement via Moro a permis à notre coopérative de financer notre premier entrepôt.",
    author: "Fatou Mbaye",
    role: "Présidente, GIE Teranga",
    location: "Sénégal",
  },
  {
    quote: "Simple, efficace, et ça marche même quand le réseau est faible. Exactement ce qu'il nous fallait.",
    author: "Emmanuel Okafor",
    role: "Secrétaire Général, Coop Unity",
    location: "Nigeria",
  },
];

export const TrustSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-hero rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold mb-4">
            TÉMOIGNAGES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Ils nous font confiance
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-elevated transition-shadow"
            >
              {/* Quote */}
              <div className="text-4xl text-primary/20 mb-4">"</div>
              <p className="text-foreground mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <p className="text-center text-muted-foreground mb-8 font-medium">
            Ils soutiennent notre mission
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              {
                name: "Days for Girls",
                logo: "/partners/days-for-girls.jpg",
              },
              {
                name: "MIPSE",
                logo: "/partners/mipse.jpg",
              },
              {
                name: "ONG Jeunes Espoir",
                logo: "/partners/ong-jeunes-espoir.jpg",
              },
              {
                name: "CDPAO",
                logo: "/partners/cdpao.png",
              },
              {
                name: "AERSP",
                logo: "/partners/aersp.jpg",
              },
              {
                name: "Impose",
                logo: "/partners/impose.png",
                className: "h-9 w-auto",
              },
            ].map((partner, i) => (
              <img
                key={i}
                src={partner.logo}
                alt={partner.name}
                className={`${partner.className || "h-16 w-auto"} object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
