import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SEO } from "@/components/SEO";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase, type BlogPost } from "@/lib/supabase";

const Blog = () => {
    const [articles, setArticles] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase
            .from("blog_posts")
            .select("*")
            .eq("published", true)
            .order("created_at", { ascending: false })
            .then(({ data }) => {
                setArticles((data as BlogPost[]) || []);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <SEO
                title="Moro - Blog et Actualités"
                description="Suivez nos actualités, nos conseils pour les coopératives et notre impact sur le terrain."
                keywords="Moro, blog, actualités, articles, coopératives, finance, Afrique"
                canonical="https://www.moro-apps.net/blog"
            />
            <Header />
            <main className="flex-grow pt-24 pb-16 px-8 sm:px-12 lg:px-20 font-futura bg-white">
                <div className="max-w-[1200px] mx-auto text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0a1a0f] leading-[1.1] mb-6"
                    >
                        Le Blog <br /> <span className="text-[#1e6641] italic">Moro</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Tenez-vous informés de nos dernières nouveautés, de nos partenariats et découvrez nos conseils pour booster la croissance de votre activité.
                    </motion.p>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-gray-400">Chargement des articles...</div>
                ) : articles.length === 0 ? (
                    <div className="text-center py-20 text-gray-400">Aucun article publié pour l'instant.</div>
                ) : (
                    <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-10">
                        {articles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[#f8f9fa] rounded-3xl overflow-hidden border border-gray-100 group flex flex-col"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={article.image || "/impact/action-1.jpg"}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#1e6641] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                                        <Calendar className="w-4 h-4" />
                                        <span>{new Date(article.created_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#0a1a0f] mb-3 leading-tight group-hover:text-[#1e6641] transition-colors line-clamp-2">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <Link
                                        to={`/blog/${article.slug}`}
                                        className="inline-flex items-center gap-2 text-[#1e6641] font-bold text-sm hover:gap-3 transition-all uppercase tracking-wide"
                                    >
                                        Lire la suite
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
