import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase, type BlogPost } from "@/lib/supabase";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Plus, Pencil, Trash2, Eye, EyeOff, LogOut, LayoutDashboard, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("blog_posts")
            .select("*")
            .order("created_at", { ascending: false });
        if (error) {
            toast({ variant: "destructive", title: "Erreur", description: error.message });
        } else {
            setPosts(data as BlogPost[]);
        }
        setLoading(false);
    };

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                if (error || !data.session) {
                    if (error) console.error("Dashboard auth check error:", error.message);
                    navigate("/admin/login");
                } else {
                    fetchPosts();
                }
            } catch (err) {
                navigate("/admin/login");
            }
        };
        checkAuth();
    }, [navigate]);

    const togglePublish = async (post: BlogPost) => {
        const { error } = await supabase
            .from("blog_posts")
            .update({ published: !post.published })
            .eq("id", post.id);
        if (!error) {
            toast({ title: `Article ${!post.published ? "publié" : "dépublié"}` });
            fetchPosts();
        }
    };

    const deletePost = async (post: BlogPost) => {
        if (!confirm(`Supprimer "${post.title}" ?`)) return;
        const { error } = await supabase.from("blog_posts").delete().eq("id", post.id);
        if (!error) {
            toast({ title: "Article supprimé" });
            fetchPosts();
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/admin/login");
    };

    return (
        <div className="min-h-screen bg-gray-50 font-futura">
            {/* Header */}
            <header className="bg-[#0a1a0f] text-white px-6 py-4 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                    <LayoutDashboard className="w-5 h-5 text-[#4db87a]" />
                    <span className="font-bold text-lg">Moro Admin</span>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        to="/admin/blog/new"
                        className="inline-flex items-center gap-2 bg-[#1e6641] hover:bg-[#2d8a58] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                    >
                        <Plus className="w-4 h-4" />
                        Nouvel article
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="text-white/50 hover:text-white transition-colors"
                        title="Déconnexion"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Main */}
            <main className="max-w-7xl mx-auto px-6 py-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#0a1a0f]">Articles du Blog</h1>
                    <p className="text-gray-500 mt-1">{posts.length} article{posts.length > 1 ? "s" : ""} au total</p>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-gray-400">Chargement...</div>
                ) : posts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-400 mb-4">Aucun article pour l'instant.</p>
                        <Link
                            to="/admin/blog/new"
                            className="inline-flex items-center gap-2 bg-[#1e6641] text-white px-6 py-3 rounded-xl font-semibold"
                        >
                            <Plus className="w-4 h-4" />
                            Créer un article
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="text-left px-6 py-4 font-semibold">Article</th>
                                    <th className="text-left px-6 py-4 font-semibold hidden md:table-cell">Catégorie</th>
                                    <th className="text-left px-6 py-4 font-semibold hidden lg:table-cell">Date</th>
                                    <th className="text-center px-6 py-4 font-semibold">Statut</th>
                                    <th className="text-right px-6 py-4 font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {posts.map((post) => (
                                    <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                {post.image && (
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                                                    />
                                                )}
                                                <div>
                                                    <p className="font-semibold text-[#0a1a0f] line-clamp-1">{post.title}</p>
                                                    <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">{post.slug}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 hidden md:table-cell">
                                            <span className="bg-[#e8f5ee] text-[#1e6641] px-3 py-1 rounded-full text-xs font-semibold">
                                                {post.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-400 hidden lg:table-cell">
                                            {format(new Date(post.created_at), "d MMM yyyy", { locale: fr })}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {post.published ? (
                                                <span className="inline-flex items-center gap-1.5 text-[#1e6641] text-xs font-semibold">
                                                    <CheckCircle className="w-4 h-4" />
                                                    Publié
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 text-gray-400 text-xs font-semibold">
                                                    <XCircle className="w-4 h-4" />
                                                    Brouillon
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => togglePublish(post)}
                                                    title={post.published ? "Dépublier" : "Publier"}
                                                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#1e6641] hover:bg-[#e8f5ee] rounded-lg transition-colors"
                                                >
                                                    {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                </button>
                                                <Link
                                                    to={`/admin/blog/${post.id}`}
                                                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                    title="Éditer"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </Link>
                                                <button
                                                    onClick={() => deletePost(post)}
                                                    title="Supprimer"
                                                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
