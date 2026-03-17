import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase, type BlogPost } from "@/lib/supabase";
import { ArrowLeft, LayoutDashboard, LogOut, Save, Loader2 } from "lucide-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useToast } from "@/hooks/use-toast";

const CATEGORIES = ["Produit", "Partenariat", "Conseil", "Événement", "Actualité"];

const generateSlug = (title: string) =>
    title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

const BlogEditor = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { toast } = useToast();
    const isNew = id === "new" || !id;
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState<"content" | "seo">("content");

    const [form, setForm] = useState<Partial<BlogPost>>({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        image: "",
        category: "Actualité",
        published: false,
        seo_title: "",
        seo_description: "",
        seo_keywords: "",
    });

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            if (!data.session) navigate("/admin/login");
        });
        if (!isNew && id) {
            supabase
                .from("blog_posts")
                .select("*")
                .eq("id", id)
                .single()
                .then(({ data, error }) => {
                    if (!error && data) setForm(data as BlogPost);
                });
        }
    }, [id, isNew, navigate]);

    const update = (field: keyof BlogPost, value: string | boolean) => {
        setForm((prev) => {
            const updated = { ...prev, [field]: value };
            if (field === "title" && isNew) {
                updated.slug = generateSlug(value as string);
            }
            if (field === "title" && !updated.seo_title) {
                updated.seo_title = value as string;
            }
            return updated;
        });
    };

    const handleSave = async (publish?: boolean) => {
        if (!form.title || !form.slug) {
            toast({ variant: "destructive", title: "Titre et slug requis" });
            return;
        }
        setSaving(true);
        const payload = { ...form, published: publish !== undefined ? publish : form.published };
        const { error } = isNew
            ? await supabase.from("blog_posts").insert([payload])
            : await supabase.from("blog_posts").update(payload).eq("id", id);
        if (error) {
            toast({ variant: "destructive", title: "Erreur", description: error.message });
        } else {
            toast({ title: isNew ? "Article créé !" : "Article mis à jour !" });
            navigate("/admin");
        }
        setSaving(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/admin/login");
    };

    return (
        <div className="min-h-screen bg-gray-50 font-futura">
            {/* Header */}
            <header className="bg-[#0a1a0f] text-white px-6 py-4 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-4">
                    <Link to="/admin" className="text-white/40 hover:text-white/80 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <LayoutDashboard className="w-5 h-5 text-[#4db87a]" />
                    <span className="font-bold text-lg">{isNew ? "Nouvel article" : "Modifier l'article"}</span>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => handleSave(false)}
                        disabled={saving}
                        className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                    >
                        <Save className="w-3.5 h-3.5" />
                        Brouillon
                    </button>
                    <button
                        onClick={() => handleSave(true)}
                        disabled={saving}
                        className="inline-flex items-center gap-2 bg-[#1e6641] hover:bg-[#2d8a58] text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all"
                    >
                        {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                        Publier
                    </button>
                    <button onClick={handleLogout} className="text-white/50 hover:text-white transition-colors">
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-10">
                {/* Tabs */}
                <div className="flex gap-1 bg-white border border-gray-100 rounded-xl p-1 w-fit mb-8 shadow-sm">
                    {(["content", "seo"] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === tab
                                ? "bg-[#0a1a0f] text-white shadow"
                                : "text-gray-500 hover:text-gray-800"
                                }`}
                        >
                            {tab === "content" ? "📝 Contenu" : "🔍 SEO"}
                        </button>
                    ))}
                </div>

                {activeTab === "content" && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Titre *</label>
                                <input
                                    type="text"
                                    value={form.title || ""}
                                    onChange={(e) => update("title", e.target.value)}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base outline-none focus:border-[#1e6641] focus:ring-2 focus:ring-[#1e6641]/10 transition-all"
                                    placeholder="Titre de l'article"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Slug (URL) *</label>
                                    <input
                                        type="text"
                                        value={form.slug || ""}
                                        onChange={(e) => update("slug", e.target.value)}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-mono outline-none focus:border-[#1e6641] focus:ring-2 focus:ring-[#1e6641]/10 transition-all"
                                        placeholder="titre-de-larticle"
                                    />
                                    <p className="text-xs text-gray-400 mt-1.5">URL publique: /blog/{form.slug || "..."}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Catégorie</label>
                                    <select
                                        value={form.category || "Actualité"}
                                        onChange={(e) => update("category", e.target.value)}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1e6641] transition-all"
                                    >
                                        {CATEGORIES.map((c) => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Image (URL)</label>
                                <input
                                    type="text"
                                    value={form.image || ""}
                                    onChange={(e) => update("image", e.target.value)}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1e6641] focus:ring-2 focus:ring-[#1e6641]/10 transition-all"
                                    placeholder="https://... ou /impact/action-1.jpg"
                                />
                                {form.image && (
                                    <img src={form.image} alt="Aperçu" className="mt-3 h-36 rounded-xl object-cover w-full" />
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Extrait (visible sur les cartes)</label>
                                <textarea
                                    value={form.excerpt || ""}
                                    onChange={(e) => update("excerpt", e.target.value)}
                                    rows={3}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1e6641] focus:ring-2 focus:ring-[#1e6641]/10 transition-all resize-none"
                                    placeholder="Courte description visible sur la liste du blog..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Contenu</label>
                                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white focus-within:border-[#1e6641] focus-within:ring-2 focus-within:ring-[#1e6641]/10 transition-all">
                                    <ReactQuill
                                        theme="snow"
                                        value={form.content || ""}
                                        onChange={(content) => update("content", content)}
                                        className="h-[400px]"
                                        modules={{
                                            toolbar: [
                                                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                                ['bold', 'italic', 'underline', 'strike'],
                                                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                                [{ 'script': 'sub'}, { 'script': 'super' }],
                                                [{ 'indent': '-1'}, { 'indent': '+1' }],
                                                ['link', 'image', 'video'],
                                                [{ 'color': [] }, { 'background': [] }],
                                                ['clean']
                                            ],
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "seo" && (
                    <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-6">
                        <div className="bg-[#f8f9fa] rounded-xl p-5 border border-gray-100">
                            <h3 className="text-sm font-bold text-gray-700 mb-1">Aperçu Google</h3>
                            <div className="mt-3">
                                <div className="text-[#1a0dab] text-base font-medium leading-snug line-clamp-1">
                                    {form.seo_title || form.title || "Titre SEO de l'article"}
                                </div>
                                <div className="text-[#006621] text-xs mt-0.5">
                                    https://moro-apps.net › blog › {form.slug || "slug"}
                                </div>
                                <div className="text-[#545454] text-sm mt-1 line-clamp-2">
                                    {form.seo_description || form.excerpt || "Méta description de l'article..."}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Titre SEO <span className="text-gray-400 font-normal">({(form.seo_title || "").length}/60 caractères recommandés)</span>
                            </label>
                            <input
                                type="text"
                                value={form.seo_title || ""}
                                onChange={(e) => update("seo_title", e.target.value)}
                                maxLength={80}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1e6641] focus:ring-2 focus:ring-[#1e6641]/10 transition-all"
                                placeholder="Titre optimisé ≤ 60 caractères pour Google"
                            />
                            <div className={`h-1 rounded-full mt-2 transition-all ${(form.seo_title || "").length <= 60 ? "bg-[#1e6641]" : "bg-red-400"}`}
                                style={{ width: `${Math.min(((form.seo_title || "").length / 60) * 100, 100)}%` }}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Méta description <span className="text-gray-400 font-normal">({(form.seo_description || "").length}/160 caractères recommandés)</span>
                            </label>
                            <textarea
                                value={form.seo_description || ""}
                                onChange={(e) => update("seo_description", e.target.value)}
                                rows={4}
                                maxLength={200}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1e6641] focus:ring-2 focus:ring-[#1e6641]/10 transition-all resize-none"
                                placeholder="Description du contenu ≤ 160 caractères..."
                            />
                            <div className={`h-1 rounded-full mt-2 transition-all ${(form.seo_description || "").length <= 160 ? "bg-[#1e6641]" : "bg-red-400"}`}
                                style={{ width: `${Math.min(((form.seo_description || "").length / 160) * 100, 100)}%` }}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Mots-clés (séparés par des virgules)</label>
                            <input
                                type="text"
                                value={form.seo_keywords || ""}
                                onChange={(e) => update("seo_keywords", e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1e6641] focus:ring-2 focus:ring-[#1e6641]/10 transition-all"
                                placeholder="moro, coopérative, OHADA, Afrique..."
                            />
                            {form.seo_keywords && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {form.seo_keywords.split(",").filter(Boolean).map((kw, i) => (
                                        <span key={i} className="bg-[#e8f5ee] text-[#1e6641] text-xs px-3 py-1 rounded-full font-medium">
                                            {kw.trim()}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="border-t border-gray-100 pt-4">
                            <h4 className="text-sm font-bold text-gray-700 mb-3">Checklist SEO</h4>
                            <ul className="space-y-2 text-sm">
                                {[
                                    [(form.title || "").length >= 10, "Titre ≥ 10 caractères"],
                                    [(form.seo_title || "").length > 0 && (form.seo_title || "").length <= 60, "Titre SEO entre 1 et 60 caractères"],
                                    [(form.seo_description || "").length >= 50 && (form.seo_description || "").length <= 160, "Méta description entre 50 et 160 caractères"],
                                    [(form.seo_keywords || "").split(",").filter(Boolean).length >= 3, "Au moins 3 mots-clés renseignés"],
                                    [(form.image || "").length > 0, "Image de couverture définie"],
                                    [(form.slug || "").length > 0, "Slug URL défini"],
                                ].map(([ok, label], i) => (
                                    <li key={i} className={`flex items-center gap-2 ${ok ? "text-[#1e6641]" : "text-gray-400"}`}>
                                        <span className="text-base">{ok ? "✅" : "⬜"}</span>
                                        {label as string}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default BlogEditor;
