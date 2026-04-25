import { useState, useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SEO } from "@/components/SEO";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Target,
    Users,
    Calendar,
    MapPin,
    Notebook as Money,
    ArrowRight,
    ShieldCheck,
    TrendingUp,
    Globe,
    Smartphone,
    Award,
    Clock,
    Loader2
} from "lucide-react";
import edufiHero from "@/assets/edufi-hero.png";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


const contactSchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Email invalide"),
    organization: z.string().min(2, "L'organisation est requise"),
    message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactDialog = ({ type, trigger }: { type: string, trigger: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            organization: "",
            message: ""
        }
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);

        try {
            // Save to Supabase
            const { error } = await supabase
                .from("contact_requests")
                .insert([{
                    type: type,
                    name: data.name,
                    email: data.email,
                    organization: data.organization,
                    message: data.message
                }]);

            if (error) throw error;

            toast.success("Demande enregistrée !", {
                description: "Ouverture de votre client mail pour finaliser l'envoi..."
            });

            // Construct mailto URL
            const subject = encodeURIComponent(`Demande : ${type}`);
            const body = encodeURIComponent(
                `Nom complet: ${data.name}\n` +
                `Email: ${data.email}\n` +
                `Organisation: ${data.organization}\n\n` +
                `Message:\n${data.message}`
            );

            setTimeout(() => {
                window.location.href = `mailto:info@inexiumus.com?subject=${subject}&body=${body}`;
            }, 100);

            setIsSubmitting(false);
            setIsOpen(false);
            form.reset();
        } catch (error: any) {
            console.error("Error saving request:", error);
            toast.error("Une erreur est survenue lors de l'enregistrement.");
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{type}</DialogTitle>
                    <DialogDescription>
                        Remplissez le formulaire ci-dessous pour nous contacter concernant cette opportunité.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nom complet</Label>
                        <Input id="name" {...form.register("name")} placeholder="Jean Dupont" />
                        {form.formState.errors.name && (
                            <p className="text-xs text-red-500 font-medium">{form.formState.errors.name.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" {...form.register("email")} placeholder="jean@exemple.com" />
                        {form.formState.errors.email && (
                            <p className="text-xs text-red-500 font-medium">{form.formState.errors.email.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="organization">Organisation / Entreprise</Label>
                        <Input id="organization" {...form.register("organization")} placeholder="Nom de votre structure" />
                        {form.formState.errors.organization && (
                            <p className="text-xs text-red-500 font-medium">{form.formState.errors.organization.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" {...form.register("message")} placeholder="Parlez-nous de votre projet..." className="min-h-[100px]" />
                        {form.formState.errors.message && (
                            <p className="text-xs text-red-500 font-medium">{form.formState.errors.message.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#1e6641] text-white py-3 rounded-xl font-bold hover:bg-[#164d31] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Envoi en cours...
                            </>
                        ) : (
                            "Envoyer la demande"
                        )}
                    </button>

                </form>
            </DialogContent>
        </Dialog>
    );
};

const Edufi = () => {

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const defaultZones = [
        { name: "Sud-Bandama", activity: "Cacao, hévéa, palmier à huile", target: "600", imf: "Advans CI" },
        { name: "Haut-Sassandra", activity: "Cacao, forêt, café", target: "500", imf: "EquiFinance" },
        { name: "Marahoué", activity: "Riz, coton, maraîchage", target: "500", imf: "MICROCRED CI" },
        { name: "Gôh", activity: "Cacao, anacarde", target: "500", imf: "UNACOOPEC-CI" },
        { name: "Lôh-Djiboua", activity: "Hévéa, palmier", target: "500", imf: "Advans CI" },
        { name: "Bélier", activity: "Riz irrigué, maraîchage", target: "500", imf: "Pamecas CI" },
        { name: "Agneby Tiassa", activity: "Anacarde, élevage", target: "400", imf: "MICROCRED CI" },
        { name: "Tonkpi", activity: "Coton, anacarde", target: "400", imf: "UNACOOPEC-CI" },
        { name: "Grands Ponts", activity: "Élevage, maraîchage", target: "300", imf: "CIF CI" },
        { name: "La Mé", activity: "Anacarde, sésame", target: "300", imf: "CIF CI" },
    ];

    const [zones, setZones] = useState<any[]>(defaultZones);
    const [loadingZones, setLoadingZones] = useState(true);

    useEffect(() => {
        const fetchZones = async () => {
            const { data, error } = await supabase.from('edufi_zones').select('*').order('name', { ascending: true });
            if (!error && data && data.length > 0) {
                setZones(data);
            }
            setLoadingZones(false);
        };
        fetchZones();
    }, []);


    return (

        <div className="min-h-screen font-futura selection:bg-[#1e6641] selection:text-white overflow-x-hidden">
            <SEO
                title="Projet EDUFI-CI - Éducation Financière Inclusive"
                description="Le Projet EDUFI-CI vise à former 5 000 bénéficiaires en zone rurale en Côte d'Ivoire à l'éducation financière grâce à la technologie Moro."
                keywords="EDUFI-CI, éducation financière, inclusion financière, Côte d'Ivoire, zone rurale, Moro tech, entrepreneuriat"
                canonical="https://www.moro-apps.net/edufi"
                ogType="website"
            />
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#e8f5ee] via-white to-white -z-10" />
                    <div className="container-tight relative">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1e6641]/10 text-[#1e6641] rounded-full text-xs font-bold mb-8 tracking-wider uppercase">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1e6641] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1e6641]"></span>
                                    </span>
                                    Projet Impact Social 2026-2027
                                </div>
                                <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter">
                                    Projet <br /><span className="text-[#1e6641] drop-shadow-sm">EDUFI-CI</span>
                                </h1>
                                <p className="text-xl lg:text-2xl text-muted-foreground mb-10 leading-relaxed font-medium">
                                    Formation Inclusive en <span className="text-foreground font-bold">Éducation Financière</span> en Zone Rurale. 18 mois pour transformer l'autonomie des entrepreneurs ivoiriens.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-12">
                                    <div className="flex items-center gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-[#1e6641]/5 border border-white">
                                        <div className="p-3 bg-[#e8f5ee] rounded-xl">
                                            <Users className="text-[#1e6641] w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold tracking-tight">5 000</p>
                                            <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em]">Bénéficiaires Directs</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-[#1e6641]/5 border border-white">
                                        <div className="p-3 bg-[#e8f5ee] rounded-xl">
                                            <TrendingUp className="text-[#1e6641] w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold tracking-tight">70%</p>
                                            <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em]">Femmes Rurales</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative group"
                            >
                                <div className="absolute -inset-4 bg-[#1e6641]/5 rounded-[40px] blur-2xl group-hover:bg-[#1e6641]/10 transition-colors duration-500" />
                                <div className="relative rounded-[32px] overflow-hidden border-[8px] border-white shadow-2xl">
                                    <img
                                        src={edufiHero}
                                        alt="EDUFI-CI Rural Entrepreneurs"
                                        className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto lg:h-[650px] scale-105 group-hover:scale-100 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                                        <div className="flex items-center gap-3 text-white">
                                            <MapPin className="w-5 h-5 text-[#e8f5ee]" />
                                            <span className="font-bold tracking-wide">Déploiement National : 10 Zones Rurales</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* The Problem Section */}
                <section className="py-24 bg-white border-y border-border">
                    <div className="container-tight">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div {...fadeIn}>
                                <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">Le paradoxe de l'entrepreneur <span className="text-[#1e6641]">informel</span></h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    En Côte d'Ivoire, l'analphabétisme atteint <span className="font-bold text-foreground">47%</span>. En zone rurale, plus de <span className="font-bold text-foreground">70% des femmes</span> n'ont jamais eu accès à une formation en gestion.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { val: "40%", label: "Part du secteur informel dans le PIB CI" },
                                        { val: "<15%", label: "Pénétration de la microfinance en zone rurale" },
                                        { val: "10,2%", label: "Taux de dégradation des portefeuilles IMF" }
                                    ].map((stat, idx) => (
                                        <div key={idx} className="flex items-center gap-6 group">
                                            <div className="text-3xl font-black text-[#1e6641] w-20 group-hover:scale-110 transition-transform">{stat.val}</div>
                                            <div className="flex-1 h-px bg-border group-hover:bg-[#1e6641]/20 transition-colors" />
                                            <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                {...fadeIn}
                                className="p-10 lg:p-16 bg-[#1e6641] rounded-[40px] text-white relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-12 opacity-10">
                                    <Globe className="w-32 h-32" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 relative z-10 italic">"La technologie seule ne suffit pas. Il faut d'abord créer la compréhension, puis l'outil qui la prolonge."</h3>
                                <p className="text-white/80 leading-relaxed mb-8 relative z-10">
                                    EDUFI-CI ne se limite pas à une formation : c'est un parcours de 18 mois qui conduit chaque bénéficiaire de l'alphabétisation financière jusqu'à l'obtention de son premier crédit formel.
                                </p>
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
                                        <ShieldCheck className="w-6 h-6 text-[#e8f5ee]" />
                                    </div>
                                    <span className="font-bold tracking-wide uppercase text-xs text-[#e8f5ee]">Certification OHADA / SYSCOA</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Methodology Grid */}
                <section className="py-32 bg-[#f9fafb] relative">
                    <div className="container-tight">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Un parcours à <span className="text-[#1e6641]">4 Niveaux</span></h2>
                            <p className="text-lg text-muted-foreground">
                                Une pédagogie inclusive utilisant des supports visuels et des sessions en bambara/dioula pour ne laisser personne de côté.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    level: "Niveau 1",
                                    title: "L'Éveil Financier",
                                    time: "Caravane Moro (30 jours)",
                                    desc: "Sensibilisation, création du compte Moro et enregistrement de la 1ère transaction.",
                                    icon: <Award className="w-8 h-8 text-[#1e6641]" />
                                },
                                {
                                    level: "Niveau 2",
                                    title: "Bases de Gestion",
                                    time: "3 mois (12 sessions)",
                                    desc: "Tenue de caisse, épargne structurée et gestion quotidienne des stocks.",
                                    icon: <CheckCircle2 className="w-8 h-8 text-[#1e6641]" />
                                },
                                {
                                    level: "Niveau 3",
                                    title: "L'Autonomie",
                                    time: "6 mois d'accompagnement",
                                    desc: "Génération de bilans mensuels et intégration dans des coopératives numériques.",
                                    icon: <Users className="w-8 h-8 text-[#1e6641]" />
                                },
                                {
                                    level: "Niveau 4",
                                    title: "Accès au Crédit",
                                    time: "9 mois de suivi IMF",
                                    desc: "Utilisation du score Moro pour le dépôt de dossiers de financement certifiés.",
                                    icon: <Money className="w-8 h-8 text-[#1e6641]" />
                                }
                            ].map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-white rounded-3xl border border-border/60 hover:border-[#1e6641]/30 hover:shadow-2xl hover:shadow-[#1e6641]/5 transition-all group"
                                >
                                    <div className="text-[10px] font-black text-[#1e6641] uppercase tracking-[0.2em] mb-4">{step.level}</div>
                                    <div className="mb-6 p-4 bg-[#e8f5ee] rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <div className="flex items-center gap-2 mb-4 text-[#1e6641] font-bold text-xs uppercase tracking-wider">
                                        <Clock className="w-3 h-3" />
                                        {step.time}
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Integration Section */}
                <section className="py-32 bg-white overflow-hidden">
                    <div className="container-tight">
                        <div className="flex flex-col lg:flex-row items-center gap-24">
                            <motion.div {...fadeIn} className="flex-1 relative">
                                <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#1e6641]/5 rounded-full blur-3xl" />
                                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#1e6641]/5 rounded-full blur-3xl" />
                                <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tighter">La Technologie <br /><span className="text-[#1e6641]">Inclusive</span></h2>
                                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                                    L'application Moro transforme immédiatement la formation en action. Chaque concept enseigné est mis en pratique le jour même via une interface adaptée.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-8">
                                    {[
                                        { title: "Saisie Vocale", desc: "Contourne la barrière de l'écrit pour les entrepreneurs ruraux.", icon: <Smartphone className="w-5 h-5" /> },
                                        { title: "Mode Hors-ligne", desc: "Fonctionne sans réseau mobile dans les zones reculées.", icon: <Globe className="w-5 h-5" /> },
                                        { title: "Bilan en 1 Tap", desc: "Génération automatique conforme au système OHADA.", icon: <ShieldCheck className="w-5 h-5" /> },
                                        { title: "Pipeline Bancaire", desc: "Score financier prêt pour le financement IMF.", icon: <TrendingUp className="w-5 h-5" /> },
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="p-2 h-fit bg-[#e8f5ee] rounded-lg text-[#1e6641]">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-1 text-sm">{feature.title}</h4>
                                                <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                {...fadeIn}
                                className="flex-1 w-full"
                            >
                                <div className="p-1 bg-gradient-to-br from-[#1e6641]/20 to-transparent rounded-[42px]">
                                    <div className="bg-[#1e6641] rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-8xl pointer-events-none">MORO</div>
                                        <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 italic">
                                            <Target className="w-8 h-8 text-[#e8f5ee]" />
                                            Impact Mesurable
                                        </h3>
                                        <div className="space-y-10">
                                            {[
                                                { label: "Bilans Financiers Certifiés", val: "3 000" },
                                                { label: "Crédits Facilités (Pipeline IMF)", val: "500" },
                                                { label: "Coopératives Équipées", val: "100" }
                                            ].map((item, idx) => (
                                                <div key={idx} className="relative group">
                                                    <div className="flex justify-between items-end mb-2">
                                                        <span className="text-white/70 text-xs uppercase tracking-widest font-black">{item.label}</span>
                                                        <span className="text-4xl font-bold text-[#e8f5ee]">{item.val}</span>
                                                    </div>
                                                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: "100%" }}
                                                            transition={{ delay: 0.5 + (idx * 0.2), duration: 1.5 }}
                                                            viewport={{ once: true }}
                                                            className="h-full bg-gradient-to-r from-[#e8f5ee] to-white"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Geographic Coverage */}
                <section className="py-32 bg-[#f9fafb]">
                    <div className="container-tight">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="lg:w-1/3">
                                <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Où nous <span className="text-[#1e6641]">agissons</span></h2>
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    Une présence stratégique dans 10 régions clés de Côte d'Ivoire, sélectionnées pour leur forte activité agricole et leur besoin d'inclusion.
                                </p>
                                <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
                                    <h4 className="font-bold mb-4 flex items-center gap-2">
                                        <ShieldCheck className="w-5 h-5 text-[#1e6641]" />
                                        Critères de sélection
                                    </h4>
                                    <ul className="text-sm space-y-3 text-muted-foreground">
                                        <li className="flex gap-2">
                                            <div className="w-1 h-1 rounded-full bg-[#1e6641] mt-1.5 shrink-0" />
                                            Présence d'un point focal Moro actif
                                        </li>
                                        <li className="flex gap-2">
                                            <div className="w-1 h-1 rounded-full bg-[#1e6641] mt-1.5 shrink-0" />
                                            Densité de coopératives agricoles
                                        </li>
                                        <li className="flex gap-2">
                                            <div className="w-1 h-1 rounded-full bg-[#1e6641] mt-1.5 shrink-0" />
                                            Proximité d'une IMF partenaire ({"<"}30km)
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                                {zones.map((zone, idx) => (
                                    <motion.div
                                        key={idx}
                                        {...fadeIn}
                                        transition={{ delay: idx * 0.05 }}
                                        className="p-5 bg-white rounded-2xl border border-border/80 flex items-center gap-3 group hover:border-[#1e6641]/40 transition-colors"
                                    >
                                        <div className="flex-1 min-w-0 pr-3">
                                            <h4 className="font-bold text-[#1e6641] group-hover:translate-x-1 transition-transform truncate">{zone.name}</h4>
                                            <p className="text-[10px] text-muted-foreground uppercase tracking-tight mb-2 leading-tight line-clamp-2 pr-2">{zone.activity}</p>
                                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#e8f5ee] text-[#1e6641] rounded text-[9px] font-bold whitespace-nowrap">
                                                <Money className="w-3 h-3 shrink-0" />
                                                <span className="truncate max-w-[80px] sm:max-w-none">{zone.imf}</span>
                                            </div>
                                        </div>
                                        <div className="text-right shrink-0 flex flex-col justify-center">
                                            <div className="font-black text-xl italic">{zone.target}</div>
                                            <div className="text-[9px] text-muted-foreground uppercase tracking-widest">Cibles</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Partnership Section */}
                <section className="py-24 bg-white">
                    <div className="container-tight text-center">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-[#1e6641] font-black text-sm uppercase tracking-[0.3em] mb-6">Opportunités de Collaboration</h3>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-12 tracking-tight">Rejoignez l'écosystème <span className="text-[#1e6641]">Impact</span></h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-10 bg-[#e8f5ee]/50 rounded-[32px] border border-[#1e6641]/10 text-left"
                                >
                                    <div className="w-14 h-14 bg-[#1e6641] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#1e6641]/20">
                                        <TrendingUp className="text-white w-7 h-7" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4">Sponsor Caravane Moro</h4>
                                    <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                                        Associez votre marque au plus grand événement d'éducation financière itinérant en Côte d'Ivoire. Visibilité directe auprès de 5 000+ acteurs du secteur informel.
                                    </p>
                                    <ContactDialog
                                        type="Sponsor Caravane Moro"
                                        trigger={
                                            <button className="w-full bg-[#1e6641] text-white py-4 rounded-xl font-bold hover:bg-[#164d31] transition-colors flex items-center justify-center gap-2">
                                                Devenir Sponsor
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        }
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-10 bg-white rounded-[32px] border border-border text-left shadow-sm hover:shadow-xl hover:shadow-[#1e6641]/5 transition-all"
                                >
                                    <div className="w-14 h-14 bg-[#f9fafb] border border-border rounded-2xl flex items-center justify-center mb-8">
                                        <Users className="text-[#1e6641] w-7 h-7" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4">Partenariat Stratégique</h4>
                                    <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                                        Institution financière, bailleur ou ONG ? Intégrez vos services à la pipeline EDUFI-CI et participez à la structuration numérique de l'économie rurale.
                                    </p>
                                    <ContactDialog
                                        type="Partenariat Stratégique"
                                        trigger={
                                            <button className="w-full bg-[#f9fafb] text-[#1e6641] border border-[#1e6641]/20 py-4 rounded-xl font-bold hover:bg-[#e8f5ee] transition-colors flex items-center justify-center gap-2">
                                                Demander un Partenariat
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        }
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA/Vision */}
                <section className="relative py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-[#1e6641] -z-10" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

                    <div className="container-tight text-center relative z-10">
                        <motion.div {...fadeIn}>
                            <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                                Transformons ensemble <br />l'intelligence financière rurale.
                            </h2>
                            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                                EDUFI-CI est bien plus qu'un projet : c'est un modèle de durabilité qui crée l'autonomie dès demain.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <ContactDialog
                                    type="Partenariat Stratégique (Vue Globale)"
                                    trigger={
                                        <button className="group bg-[#e8f5ee] text-[#1e6641] px-10 py-5 rounded-2xl font-black text-lg hover:shadow-[0_0_40px_rgba(232,245,238,0.3)] hover:-translate-y-1 transition-all flex items-center gap-3 font-futura">
                                            Devenir Partenaire
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    }
                                />
                                <button className="bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/5 transition-all font-futura">
                                    Télécharger le Dossier Complet
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#e8f5ee]/10 rounded-full blur-3xl" />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Edufi;
