import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase, type BlogPost } from "@/lib/supabase";

export const NewsSection = () => {
    const [articles, setArticles] = useState<BlogPost[]>([]);

    useEffect(() => {
        supabase
            .from("blog_posts")
            .select("*")
            .eq("published", true)
            .order("created_at", { ascending: false })
            .limit(3)
            .then(({ data }) => setArticles((data as BlogPost[]) || []));
    }, []);

    if (articles.length === 0) return null;

    return (
        <section id="news" className="section-padding bg-muted/20">
            <div className="container-tight">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-12"
                >
                    <div className="max-w-2xl">
                        <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
                            Notre Blog
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 md:mb-0">
                            Dernières <span className="text-primary italic">actualités</span>
                        </h2>
                    </div>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                        Tout voir
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-border"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={article.image || "/impact/action-1.jpg"}
                                    alt={article.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                                    {article.category}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>
                                        {new Date(article.created_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-muted-foreground mb-5 flex-grow line-clamp-3 text-sm">
                                    {article.excerpt}
                                </p>
                                <Link
                                    to={`/blog/${article.slug}`}
                                    className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group/link"
                                >
                                    Lire la suite
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
