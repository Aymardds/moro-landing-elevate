import { motion } from "framer-motion";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SEO } from "@/components/SEO";

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

const allImages = [
    // Block 1
    { src: "/impact/action-5.jpg", alt: "Interview terrain" },
    { src: impact1, alt: "Session de formation" },
    { src: impact2, alt: "Utilisation app" },
    { src: impact3, alt: "Réunion agriculteurs" },
    { src: impact4, alt: "Présentation" },
    // Block 2
    { src: impact5, alt: "workshop avec les associations de la Mé" },
    { src: impact6, alt: "Communauté" },
    { src: impact8, alt: "Formation en éducation financière en partenariat avec L'AEJ et AERSP" },
    { src: impact7, alt: "Formation groupe" },
    { src: impact9, alt: "Partenariat local" },
    // Block 3
    { src: "/impact/action-1.jpg", alt: "Impact communautaire" },
    { src: impact10, alt: "Avenir meilleur" },
    { src: impact11, alt: "Entrepreneurs" },
    { src: impact12, alt: "Digitalisation du secteur Informel" },
    { src: impact13, alt: "Stratégie" },
    // Block 4
    { src: impact14, alt: "Formation pratique" },
    { src: impact15, alt: "Succès partagé" },
    { src: "/impact/action-4.png", alt: "Participation au FAUCI2024" },
    { src: "/impact/action-2.jpg", alt: "Recompense à Moro pour son impact sur la jeunesse de la Mé" },
    { src: "/impact/action-3.jpg", alt: "Stand de Moro au CAMP des Disciples d'Emmaüs dans le Tonpki" },
];

const Gallery = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <SEO
                title="Moro - Nos actions sur le terrain"
                description="Découvrez en images l'impact de Moro sur le terrain, en Côte d'Ivoire et ailleurs."
                keywords="Moro, galerie, actions, terrain, impact, coopératives, Afrique"
            />
            <Header />
            <main className="flex-grow pt-24 pb-16 px-8 sm:px-12 lg:px-20 font-futura bg-muted/30">
                <div className="max-w-[1200px] mx-auto text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0a1a0f] leading-[1.1] mb-6"
                    >
                        Nos actions <br /> <span className="text-[#1e6641] italic">en images</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Parce que notre mission s'inscrit au plus près des réalités de nos partenaires et utilisateurs. Parcourez l'ensemble de nos interventions sur le terrain.
                    </motion.p>
                </div>

                <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[300px] gap-6">
                    {allImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
                            className={`relative overflow-hidden rounded-[20px] shadow-sm hover:shadow-xl transition-all duration-300 group ${index % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                                }`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium drop-shadow-md text-sm md:text-base leading-snug">
                                    {image.alt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Gallery;
