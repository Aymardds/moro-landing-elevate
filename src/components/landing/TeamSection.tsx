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
        name: "Dion Stephane A.",
        role: "CEO & Co-Fondateur",
        description: "Visionnaire et architecte de la solution Moro, il pilote la stratégie globale de l'entreprise, fédère les équipes autour d'une ambition commune et conduit les décisions de développement produit. Alumni du programme 10X1000, il apporte une expertise pointue en UI/UX design et en croissance de startups technologiques.",

        image: dionStephaneImg,
        socials: { linkedin: "#", twitter: "#", instagram: "#" },
        roleColor: "bg-amber-100 text-amber-700"
    },
    {
        name: "Gnonzion Jaulinaud",
        role: "Office Manager",
        description: "Pilier organisationnel de l'équipe, il coordonne les opérations internes et assure la montée en compétence continue des collaborateurs. Il veille à ce que les processus soient fluides, les objectifs clairement définis et les échéances respectées, garantissant ainsi l'efficacité collective au quotidien.",

        image: gnonzionJaulinaudImg,
        socials: { linkedin: "#", twitter: "#", instagram: "#" },
        roleColor: "bg-green-100 text-green-700"
    },
    {
        name: "Ouanto Enoc",
        role: "Directeur Financier (CFO)",
        description: "Garant de la santé financière de l'entreprise, il supervise la comptabilité, l'analyse des performances économiques et la structuration financière de la solution Moro. Son expertise permet d'assurer une gestion rigoureuse des ressources et de sécuriser la trajectoire de croissance de l'organisation.",

        image: ouantoEnocImg,
        socials: { linkedin: "#", twitter: "#", instagram: "#" },
        roleColor: "bg-blue-100 text-blue-700"
    },
    {
        name: "Ambre Delcroix",
        role: "Développeur Business Associé",
        description: "Moteur de la croissance commerciale, elle orchestre les partenariats stratégiques et déploie les initiatives d'activation et d'adoption utilisateur. Elle joue un rôle central dans l'expansion de la solution Moro, en assurant une présence forte sur le marché et en maximisant l'impact de chaque collaboration.",

        image: ambreDelcroixImg,
        socials: { linkedin: "#", twitter: "#", instagram: "#" },
        roleColor: "bg-indigo-100 text-indigo-700"
    },
    {
        name: "Mme Dion Claudia",
        role: "Directrice des Opérations (COO)",
        description: "Responsable de l'excellence opérationnelle, elle supervise l'ensemble des activités courantes de l'entreprise et assure une gestion optimale du patrimoine organisationnel. Son rôle est de transformer la vision stratégique en réalisations concrètes, en maintenant un niveau de performance élevé dans chaque département.",
        image: dionClaudiaImg,
        socials: { linkedin: "#", twitter: "#", instagram: "#" },
        roleColor: "bg-pink-100 text-pink-700"
    },
    {
        name: "Ghossoub Kevine",
        role: "Directeur Technique (CTO)",
        description: "Architecte technologique du groupe, il dirige l'ensemble des initiatives techniques et supervise le développement de l'application Moro. Il garantit la robustesse, la scalabilité et l'innovation continue des systèmes, tout en assurant l'alignement entre les ambitions produit et les capacités technologiques de l'équipe.",
        image: ghossoubKevineImg,
        socials: { linkedin: "#", twitter: "#", instagram: "#" },
        roleColor: "bg-orange-100 text-orange-700"
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
                                <div className="flex justify-center mb-4">
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${member.roleColor || 'bg-primary/10 text-primary'}`}>
                                        {member.role}
                                    </span>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed px-2 text-left mb-4">
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
