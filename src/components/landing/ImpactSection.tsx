import { motion } from "framer-motion";
import impact1 from "@/assets/impact/impact-1.jpg";
import impact2 from "@/assets/impact/impact-2.jpg";
import impact3 from "@/assets/impact/impact-3.jpg";
import impact4 from "@/assets/impact/impact-4.jpg";
import impact5 from "@/assets/impact/impact-5.jpg";
import impact6 from "@/assets/impact/impact-6.jpg";
import impact7 from "@/assets/impact/impact-7.jpg";
import impact8 from "@/assets/impact/impact-8.jpg";
import impact9 from "@/assets/impact/impact-9.jpg";
import impact10 from "@/assets/impact/impact-10.jpg";
import impact11 from "@/assets/impact/impact-11.jpg";
import impact12 from "@/assets/impact/impact-12.jpg";
import impact13 from "@/assets/impact/impact-13.jpg";
import impact14 from "@/assets/impact/impact-14.jpg";
import impact15 from "@/assets/impact/impact-15.jpg";

const images = [
    // Block 1: Large Left (Interview terrain)
    { src: "/impact/action-5.jpg", alt: "Interview terrain", className: "md:col-span-2 md:row-span-2 h-full" },
    { src: impact1, alt: "Session de formation", className: "md:col-span-1 md:row-span-1 h-full" },
    { src: impact2, alt: "Utilisation app", className: "md:col-span-1 md:row-span-1 h-full" },
    { src: impact3, alt: "Réunion agriculteurs", className: "md:col-span-1 md:row-span-1 h-full" },
    { src: impact4, alt: "Présentation", className: "md:col-span-1 md:row-span-1 h-full" },

    // Block 2: Large Right (Impact social)
    { src: impact5, alt: "workshop avec les associations de la Mé", className: "md:col-span-1 md:row-span-1 h-full" },
    { src: impact6, alt: "Communauté", className: "md:col-span-1 md:row-span-1 h-full" },
    { src: impact8, alt: "Formation en éducation financière en partenariat avec L'AEJ et AERSP", className: "md:col-span-2 md:row-span-2 h-full" },
    { src: impact7, alt: "Formation groupe", className: "md:col-span-1 md:row-span-1 h-full" },
    { src: impact9, alt: "Partenariat local", className: "md:col-span-1 md:row-span-1 h-full" },

    // Block 3: Large Left (Impact communautaire)
    { src: "/impact/action-1.jpg", alt: "Impact communautaire", className: "md:col-span-2 md:row-span-2 h-full" },
    { src: impact10, alt: "Avenir meilleur", className: "md:col-span-1 md:row-span-1 h-full" },
    { src: impact11, alt: "Entrepreneurs", className: "md:col-span-1 md:row-span-1 h-full" },
    { src: impact12, alt: "Digitalisation du secteur Informel", className: "md:col-span-1 md:row-span-1 h-full" },
    { src: impact13, alt: "Stratégie", className: "md:col-span-1 md:row-span-1 h-full" },

    // Block 4: Large Right (Partenariats)
    { src: impact14, alt: "Formation pratique", className: "md:col-span-1 md:row-span-1 h-full" },
    { src: impact15, alt: "Succès partagé", className: "md:col-span-1 md:row-span-1 h-full" },
    { src: "/impact/action-4.png", alt: "Participation au FAUCI2024", className: "md:col-span-2 md:row-span-2 h-full" },
    { src: "/impact/action-2.jpg", alt: "Recompense à Moro pour son impact sur la jeunesse de la Mé", className: "md:col-span-1 md:row-span-1 h-full" },
    { src: "/impact/action-3.jpg", alt: "Stand de Moro au CAMP des Disciples d'Emmaüs dans le Tonpki", className: "md:col-span-1 md:row-span-1 h-full" },
];

export const ImpactSection = () => {
    return (
        <section id="impact" className="section-padding bg-background overflow-hidden">
            <div className="container-tight">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-primary font-semibold mb-4">
                        SUR LE TERRAIN
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
                        Nos actions au quotidien
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Nous ne sommes pas juste une application, nous sommes une communauté.
                        Découvrez nos actions auprès des coopératives et agriculteurs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group ${image.className}`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium">{image.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
