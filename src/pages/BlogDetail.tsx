import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase, type BlogPost } from "@/lib/supabase";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SEO } from "@/components/SEO";
import { ArrowLeft, Calendar } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;
        supabase
            .from("blog_posts")
            .select("*")
            .eq("slug", slug)
            .eq("published", true)
            .single()
            .then(({ data }) => {
                setPost(data as BlogPost | null);
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center font-futura">
                <div className="text-gray-400">Chargement de l'article...</div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center font-futura">
                <h1 className="text-3xl font-bold text-[#0a1a0f] mb-4">Article introuvable</h1>
                <Link to="/blog" className="text-[#1e6641] font-semibold hover:underline">
                    ← Retour au blog
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-white font-futura">
            <SEO
                title={post.seo_title || post.title}
                description={post.seo_description || post.excerpt}
                keywords={post.seo_keywords}
                canonical={`https://www.moro-apps.net/blog/${post.slug}`}
                ogType="article"
            />
            <Header />
            <main className="flex-grow pt-24 pb-20 px-6 sm:px-12">
                <div className="max-w-[800px] mx-auto">
                    {/* Breadcrumb */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-[#1e6641] text-sm font-semibold mb-8 hover:gap-3 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour au blog
                    </Link>

                    {/* Category */}
                    <span className="inline-block bg-[#e8f5ee] text-[#1e6641] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        {post.category}
                    </span>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl font-bold text-[#0a1a0f] leading-[1.1] mb-6">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-gray-400 text-sm mb-10 pb-8 border-b border-gray-100">
                        <Calendar className="w-4 h-4" />
                        <span>{format(new Date(post.created_at), "d MMMM yyyy", { locale: fr })}</span>
                    </div>

                    {/* Cover Image */}
                    {post.image && (
                        <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12 shadow-xl">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div
                        className="prose prose-lg prose-green max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogDetail;
