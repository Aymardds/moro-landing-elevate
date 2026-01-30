import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";

// Team member images
import dionStephaneImg from "@/assets/team/dion_stephane.jpg";
import dionClaudiaImg from "@/assets/team/dion_claudia.png";
import ouantoEnocImg from "@/assets/team/ouanto_enoc.png";
import ghossoubKevineImg from "@/assets/team/ghossoub_kevine.jpg";
import ambreDelcroixImg from "@/assets/team/ambre_delcroix.jpg";
import gnonzionJaulinaudImg from "@/assets/team/gnonzion_jaulinaud.png";

// Team member images - Updated Kevine's photo
const team = [
    {
        name: "Dion Stephane A",
        role: "CEO & CO-FOUNDER",
        description: "Chargé du développement stratégique de la solution, Alumni 10X1000, expert en UI/UX design",
        image: dionStephaneImg,
        socials: { linkedin: "#", twitter: "#", instagram: "#" },
    },
    {
        name: "Gnonzion Jaulinaud",
        role: "Office Manager",
        description: "Organise et planifie la montée en compétence de l'équipe opérationnelle et veille à la bonne exécution et l'atteinte des objectifs",
        image: gnonzionJaulinaudImg,
        socials: { linkedin: "#", twitter: "#", instagram: "#" },
    },
    {
        name: "Ouanto Enoc",
        role: "Chief Financial Officer",
        description: "Expert comptable et analyste financier assure la gestion des opération et la structuration financière de notre solution",
        image: ouantoEnocImg,
        socials: { linkedin: "#", twitter: "#", instagram: "#" },
    },
    {
        name: "Ambre Delcroix",
        role: "ASSOCIATE BUSINESS DEVELOPER",
        description: "Assure les partenariats stratégiques, l'activation & adoption utilisateur, la croissance et la performance de la solution Moro",
        image: ambreDelcroixImg,
        socials: { linkedin: "#", twitter: "#", instagram: "#" },
    },
    {
        name: "Mme Dion Claudia",
        role: "Chief Operating Officer",
        description: "Expert en gestion de patrimoine financier; elle assure les gestion optimale des opérations courantes de l'entreprise",
        image: dionClaudiaImg,
        socials: { linkedin: "#", twitter: "#", instagram: "#" },
    },
    {
        name: "Ghossoub kevine",
        role: "CHIEF TECHNICAL OFFICER",
        description: "Assure la Direction et supervision de l'ensemble des initiatives technologiques du groupe, le Développement de l'application Moro",
        image: ghossoubKevineImg,
        socials: { linkedin: "#", twitter: "#", instagram: "#" },
    },
];

export const TeamSection = () => {
    return (
        <section id="team" className="section-padding bg-white">
            <div className="container-tight">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#f59e0b] mb-6">
                        Notre Équipe Admin
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 items-center text-center"
                        >
                            <div className="w-32 h-32 rounded-full bg-secondary flex-shrink-0 overflow-hidden border-2 border-primary/20 bg-muted relative group">
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl">
                                        {member.name.split(" ").map(n => n[0]).join("")}
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 w-full">
                                <div className="flex items-center justify-center gap-3 mb-1">
                                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                                    <div className="flex gap-2">
                                        <Linkedin className="w-4 h-4 text-blue-600 cursor-pointer hover:opacity-80" />
                                        <Twitter className="w-4 h-4 text-blue-400 cursor-pointer hover:opacity-80" />
                                        <Instagram className="w-4 h-4 text-pink-500 cursor-pointer hover:opacity-80" />
                                    </div>
                                </div>
                                <p className="text-[#f59e0b] font-bold text-sm mb-3 uppercase tracking-wider">{member.role}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed px-2">
                                    {member.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
