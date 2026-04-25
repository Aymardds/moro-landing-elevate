import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase, type BlogPost, type EdufiZone } from "@/lib/supabase";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { 
    Plus, 
    Pencil, 
    Trash2, 
    Eye, 
    EyeOff, 
    LogOut, 
    LayoutDashboard, 
    CheckCircle, 
    XCircle, 
    MessageSquare, 
    Building2, 
    Clock, 
    Mail, 
    User,
    ChevronRight,
    Search,
    MapPin,
    Save
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactRequest {
    id: string;
    type: string;
    name: string;
    email: string;
    organization: string;
    message: string;
    status: string;
    created_at: string;
}

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [requests, setRequests] = useState<ContactRequest[]>([]);
    const [zones, setZones] = useState<EdufiZone[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"blog" | "requests" | "zones">("blog");
    const [selectedRequest, setSelectedRequest] = useState<ContactRequest | null>(null);
    const [editingZone, setEditingZone] = useState<Partial<EdufiZone> | null>(null);

    const fetchData = async () => {
        setLoading(true);
        
        // Fetch Blog Posts
        const { data: postsData, error: postsError } = await supabase
            .from("blog_posts")
            .select("*")
            .order("created_at", { ascending: false });
        
        if (postsError) {
            toast({ variant: "destructive", title: "Erreur Blog", description: postsError.message });
        } else {
            setPosts(postsData as BlogPost[]);
        }

        // Fetch Contact Requests
        const { data: reqData, error: reqError } = await supabase
            .from("contact_requests")
            .select("*")
            .order("created_at", { ascending: false });
        
        if (reqError) {
            toast({ variant: "destructive", title: "Erreur Demandes", description: reqError.message });
        } else {
            setRequests(reqData as ContactRequest[]);
        }

        // Fetch Zones
        const { data: zonesData, error: zonesError } = await supabase
            .from("edufi_zones")
            .select("*")
            .order("name", { ascending: true });
        
        if (zonesError) {
            toast({ variant: "destructive", title: "Erreur Zones", description: zonesError.message });
        } else {
            setZones(zonesData as EdufiZone[]);
        }

        setLoading(false);
    };

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                if (error || !data.session) {
                    navigate("/admin/login");
                } else {
                    fetchData();
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
            fetchData();
        }
    };

    const deletePost = async (post: BlogPost) => {
        if (!confirm(`Supprimer "${post.title}" ?`)) return;
        const { error } = await supabase.from("blog_posts").delete().eq("id", post.id);
        if (!error) {
            toast({ title: "Article supprimé" });
            fetchData();
        }
    };

    const updateRequestStatus = async (id: string, status: string) => {
        const { error } = await supabase
            .from("contact_requests")
            .update({ status })
            .eq("id", id);
        
        if (!error) {
            toast({ title: "Statut mis à jour" });
            fetchData();
            if (selectedRequest?.id === id) {
                setSelectedRequest({ ...selectedRequest, status });
            }
        }
    };

    const deleteRequest = async (id: string) => {
        if (!confirm("Supprimer cette demande ?")) return;
        const { error } = await supabase.from("contact_requests").delete().eq("id", id);
        if (!error) {
            toast({ title: "Demande supprimée" });
            fetchData();
            setSelectedRequest(null);
        }
    };

    const handleSaveZone = async () => {
        if (!editingZone || !editingZone.name || !editingZone.activity || !editingZone.target || !editingZone.imf) {
            toast({ variant: "destructive", title: "Erreur", description: "Veuillez remplir tous les champs." });
            return;
        }

        if (editingZone.id) {
            const { error } = await supabase
                .from("edufi_zones")
                .update({
                    name: editingZone.name,
                    activity: editingZone.activity,
                    target: editingZone.target,
                    imf: editingZone.imf
                })
                .eq("id", editingZone.id);
            if (!error) {
                toast({ title: "Zone mise à jour" });
                setEditingZone(null);
                fetchData();
            } else {
                toast({ variant: "destructive", title: "Erreur", description: error.message });
            }
        } else {
            const { error } = await supabase
                .from("edufi_zones")
                .insert([{
                    name: editingZone.name,
                    activity: editingZone.activity,
                    target: editingZone.target,
                    imf: editingZone.imf
                }]);
            if (!error) {
                toast({ title: "Zone créée" });
                setEditingZone(null);
                fetchData();
            } else {
                toast({ variant: "destructive", title: "Erreur", description: error.message });
            }
        }
    };

    const handleDeleteZone = async (id: string) => {
        if (!confirm("Supprimer cette zone ?")) return;
        const { error } = await supabase.from("edufi_zones").delete().eq("id", id);
        if (!error) {
            toast({ title: "Zone supprimée" });
            fetchData();
        } else {
            toast({ variant: "destructive", title: "Erreur", description: error.message });
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/admin/login");
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] font-futura selection:bg-[#1e6641] selection:text-white">
            {/* Sidebar Desktop */}
            <div className="fixed inset-y-0 left-0 w-64 bg-[#0a1a0f] text-white hidden lg:flex flex-col z-20">
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 bg-[#1e6641] rounded-xl flex items-center justify-center shadow-lg shadow-[#1e6641]/20">
                            <LayoutDashboard className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">Moro Admin</span>
                    </div>

                    <nav className="space-y-2">
                        <button 
                            onClick={() => setActiveTab("blog")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "blog" ? "bg-[#1e6641] text-white" : "text-white/40 hover:text-white hover:bg-white/5"}`}
                        >
                            <LayoutDashboard className="w-5 h-5" />
                            <span className="font-semibold text-sm">Blog</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab("requests")}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${activeTab === "requests" ? "bg-[#1e6641] text-white" : "text-white/40 hover:text-white hover:bg-white/5"}`}
                        >
                            <div className="flex items-center gap-3">
                                <MessageSquare className="w-5 h-5" />
                                <span className="font-semibold text-sm">Demandes</span>
                            </div>
                            {requests.filter(r => r.status === 'nouveau').length > 0 && (
                                <span className="bg-accent text-white text-[10px] font-black px-1.5 py-0.5 rounded-full animate-pulse">
                                    {requests.filter(r => r.status === 'nouveau').length}
                                </span>
                            )}
                        </button>
                        <button 
                            onClick={() => setActiveTab("zones")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "zones" ? "bg-[#1e6641] text-white" : "text-white/40 hover:text-white hover:bg-white/5"}`}
                        >
                            <MapPin className="w-5 h-5" />
                            <span className="font-semibold text-sm">Zones EDUFI</span>
                        </button>
                    </nav>
                </div>

                <div className="mt-auto p-8 pt-0">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-400/5 transition-all"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-semibold text-sm">Déconnexion</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="lg:pl-64 min-h-screen flex flex-col">
                {/* Header Mobile/Tablet */}
                <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between lg:hidden sticky top-0 z-10">
                    <div className="flex items-center gap-2">
                        <LayoutDashboard className="w-5 h-5 text-[#1e6641]" />
                        <span className="font-bold text-[#0a1a0f]">Moro Admin</span>
                    </div>
                    <button onClick={handleLogout} className="text-gray-400"><LogOut className="w-5 h-5" /></button>
                </header>

                <main className="flex-1 p-6 lg:p-10">
                    {/* Stats Overview */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                        <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Demandes</p>
                            <h3 className="text-2xl font-black text-[#0a1a0f]">{requests.length}</h3>
                            <div className="flex items-center gap-1 mt-2">
                                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                <span className="text-[10px] font-bold text-accent uppercase">{requests.filter(r => r.status === 'nouveau').length} Nouvelles</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Zones d'Action</p>
                            <h3 className="text-2xl font-black text-[#0a1a0f]">{zones.length}</h3>
                            <p className="text-[10px] font-bold text-gray-400 mt-2">Couverture EDUFI-CI</p>
                        </div>
                        <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Sponsors / Partenaires</p>
                            <h3 className="text-2xl font-black text-[#0a1a0f]">
                                {requests.filter(r => r.type === 'Sponsor Caravane Moro').length} <span className="text-gray-200">/</span> {requests.filter(r => r.type === 'Partenariat Stratégique').length}
                            </h3>
                            <p className="text-[10px] font-bold text-gray-400 mt-2">Répartition demandes</p>
                        </div>
                        <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Articles Publiés</p>
                            <h3 className="text-2xl font-black text-[#1e6641]">{posts.filter(p => p.published).length}</h3>
                            <p className="text-[10px] font-bold text-gray-400 mt-2">Visibles en ligne</p>
                        </div>
                        <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Brouillons</p>
                            <h3 className="text-2xl font-black text-gray-400">{posts.filter(p => !p.published).length}</h3>
                            <p className="text-[10px] font-bold text-gray-400 mt-2">En cours de rédaction</p>
                        </div>
                    </div>

                    {activeTab === "blog" && (
                        <>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                                <div>
                                    <h1 className="text-3xl font-black text-[#0a1a0f] tracking-tight">Articles du Blog</h1>
                                    <p className="text-gray-500 mt-1 font-medium">{posts.length} article{posts.length > 1 ? "s" : ""} enregistré{posts.length > 1 ? "s" : ""}</p>
                                </div>
                                <Link
                                    to="/admin/blog/new"
                                    className="inline-flex items-center justify-center gap-2 bg-[#1e6641] hover:bg-[#164d31] text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-[#1e6641]/10 transition-all hover:-translate-y-0.5"
                                >
                                    <Plus className="w-5 h-5" />
                                    Nouvel article
                                </Link>
                            </div>

                            {loading ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                                    {[1, 2, 3].map(i => <div key={i} className="h-64 bg-gray-200/50 rounded-[32px] border border-gray-100" />)}
                                </div>
                            ) : posts.length === 0 ? (
                                <div className="bg-white rounded-[40px] border border-gray-100 py-24 text-center">
                                    <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-gray-300">
                                        <LayoutDashboard className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0a1a0f] mb-2">Aucun article</h3>
                                    <p className="text-gray-400 mb-8 max-w-xs mx-auto">Commencez à partager l'actualité de Moro avec votre communauté.</p>
                                    <Link to="/admin/blog/new" className="text-[#1e6641] font-bold underline">Créer votre premier article</Link>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {posts.map((post) => (
                                        <div key={post.id} className="group bg-white rounded-[32px] border border-gray-100 p-5 shadow-sm hover:shadow-xl hover:shadow-[#1e6641]/5 transition-all duration-500">
                                            <div className="relative h-48 rounded-[24px] overflow-hidden mb-5">
                                                <img 
                                                    src={post.image || '/placeholder.svg'} 
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                                    alt="" 
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-white/90 backdrop-blur-md text-[#1e6641] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                                                        {post.category}
                                                    </span>
                                                </div>
                                                <div className="absolute top-4 right-4">
                                                    {post.published ? (
                                                        <div className="w-8 h-8 bg-[#1e6641] text-white rounded-full flex items-center justify-center shadow-lg" title="En ligne">
                                                            <CheckCircle className="w-4 h-4" />
                                                        </div>
                                                    ) : (
                                                        <div className="w-8 h-8 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center border border-white" title="Brouillon">
                                                            <Clock className="w-4 h-4" />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            <div className="px-1">
                                                <p className="text-xs text-gray-400 font-bold mb-2 uppercase tracking-tighter">
                                                    {format(new Date(post.created_at), "d MMMM yyyy", { locale: fr })}
                                                </p>
                                                <h3 className="font-bold text-lg text-[#0a1a0f] mb-6 line-clamp-2 min-h-[3.5rem] leading-tight">
                                                    {post.title}
                                                </h3>
                                                
                                                <div className="flex items-center justify-between gap-2 border-t border-gray-50 pt-5">
                                                    <div className="flex gap-1.5">
                                                        <button 
                                                            onClick={() => togglePublish(post)}
                                                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-[#e8f5ee] hover:text-[#1e6641] transition-all"
                                                        >
                                                            {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                        </button>
                                                        <Link 
                                                            to={`/admin/blog/${post.id}`}
                                                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all"
                                                        >
                                                            <Pencil className="w-4 h-4" />
                                                        </Link>
                                                        <button 
                                                            onClick={() => deletePost(post)}
                                                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-600 transition-all"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{post.slug.substring(0, 10)}...</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                    {activeTab === "requests" && (
                        <div className="flex flex-col h-full">
                            <div className="mb-10">
                                <h1 className="text-3xl font-black text-[#0a1a0f] tracking-tight">Demandes de Contact</h1>
                                <p className="text-gray-500 mt-1 font-medium">{requests.length} demande{requests.length > 1 ? "s" : ""} au total</p>
                            </div>

                            <div className="grid lg:grid-cols-[1.5fr_2fr] gap-8 h-full items-start">
                                {/* List */}
                                <div className="space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto pr-2 scrollbar-hide">
                                    {loading ? (
                                        [1, 2, 3].map(i => <div key={i} className="h-24 bg-gray-100 rounded-2xl animate-pulse" />)
                                    ) : requests.length === 0 ? (
                                        <div className="bg-white rounded-3xl border border-gray-100 p-8 text-center text-gray-400 font-medium">
                                            Aucune demande pour le moment.
                                        </div>
                                    ) : (
                                        requests.map((req) => (
                                            <button 
                                                key={req.id}
                                                onClick={() => setSelectedRequest(req)}
                                                className={`w-full text-left p-5 rounded-3xl border transition-all duration-300 ${selectedRequest?.id === req.id ? 'bg-[#1e6641] text-white border-[#1e6641] shadow-lg shadow-[#1e6641]/20' : 'bg-white text-[#0a1a0f] border-gray-100 hover:border-[#1e6641]/30 hover:shadow-md'}`}
                                            >
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${selectedRequest?.id === req.id ? 'bg-white/20 text-white' : 'bg-[#e8f5ee] text-[#1e6641]'}`}>
                                                        {req.type}
                                                    </span>
                                                    <span className={`text-[10px] font-bold ${selectedRequest?.id === req.id ? 'text-white/60' : 'text-gray-400'}`}>
                                                        {format(new Date(req.created_at), "d MMM", { locale: fr })}
                                                    </span>
                                                </div>
                                                <h4 className="font-bold mb-1 line-clamp-1">{req.name}</h4>
                                                <p className={`text-xs flex items-center gap-1.5 ${selectedRequest?.id === req.id ? 'text-white/70' : 'text-gray-400'}`}>
                                                    <Building2 className="w-3 h-3 flex-shrink-0" />
                                                    <span className="line-clamp-1">{req.organization}</span>
                                                </p>
                                                
                                                <div className="mt-4 flex items-center justify-between">
                                                    <div className={`text-[9px] font-black uppercase tracking-tighter flex items-center gap-1.5 ${selectedRequest?.id === req.id ? 'text-white' : req.status === 'nouveau' ? 'text-accent' : 'text-[#1e6641]'}`}>
                                                        {req.status === 'nouveau' ? <Clock className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
                                                        {req.status}
                                                    </div>
                                                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedRequest?.id === req.id ? 'translate-x-1' : 'opacity-0'}`} />
                                                </div>
                                            </button>
                                        ))
                                    )}
                                </div>

                                {/* Detail View */}
                                <div className="lg:sticky lg:top-10">
                                    {selectedRequest ? (
                                        <div className="bg-white rounded-[40px] border border-gray-100 p-8 lg:p-10 shadow-sm relative overflow-hidden">
                                            {/* Status Badge Background */}
                                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e8f5ee]/50 rounded-full blur-3xl -z-10" />
                                            
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                                                <span className="bg-[#e8f5ee] text-[#1e6641] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest self-start">
                                                    {selectedRequest.type}
                                                </span>
                                                <div className="flex gap-2">
                                                    <button 
                                                        onClick={() => updateRequestStatus(selectedRequest.id, selectedRequest.status === 'terminé' ? 'en cours' : 'terminé')}
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedRequest.status === 'terminé' ? 'bg-gray-100 text-gray-500 hover:bg-gray-200' : 'bg-[#e8f5ee] text-[#1e6641] hover:bg-[#d5ecd9]'}`}
                                                    >
                                                        {selectedRequest.status === 'terminé' ? <Clock className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                                                        {selectedRequest.status === 'terminé' ? 'Reporter' : 'Marquer Traité'}
                                                    </button>
                                                    <button 
                                                        onClick={() => deleteRequest(selectedRequest.id)}
                                                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-600 transition-all"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="space-y-8 mb-10">
                                                <div className="grid sm:grid-cols-2 gap-6">
                                                    <div className="space-y-1">
                                                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest flex items-center gap-2">
                                                            <User className="w-3 h-3" /> Nom du contact
                                                        </p>
                                                        <p className="font-bold text-lg text-[#0a1a0f]">{selectedRequest.name}</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest flex items-center gap-2">
                                                            <Mail className="w-3 h-3" /> Email
                                                        </p>
                                                        <a href={`mailto:${selectedRequest.email}`} className="font-bold text-lg text-[#1e6641] underline-offset-4 hover:underline">{selectedRequest.email}</a>
                                                    </div>
                                                </div>
                                                
                                                <div className="space-y-1">
                                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest flex items-center gap-2">
                                                        <Building2 className="w-3 h-3" /> Structure / Organisation
                                                    </p>
                                                    <p className="font-bold text-lg text-[#0a1a0f]">{selectedRequest.organization}</p>
                                                </div>

                                                <div className="p-6 lg:p-8 bg-gray-50/50 rounded-[32px] border border-gray-100">
                                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-4">Message</p>
                                                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap italic font-futura">
                                                        "{selectedRequest.message}"
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-[10px] text-gray-400 font-medium text-center italic">
                                                Reçu le {format(new Date(selectedRequest.created_at), "eeee d MMMM yyyy à HH:mm", { locale: fr })}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-10 bg-white/30 backdrop-blur-sm border-2 border-dashed border-gray-200 rounded-[40px]">
                                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
                                                <Search className="w-6 h-6 text-gray-300" />
                                            </div>
                                            <h4 className="font-bold text-gray-400">Sélectionnez une demande</h4>
                                            <p className="text-sm text-gray-400 max-w-xs mt-2">Cliquez sur une demande dans la liste pour voir les détails et répondre.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "zones" && (
                        <div className="flex flex-col h-full">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                                <div>
                                    <h1 className="text-3xl font-black text-[#0a1a0f] tracking-tight">Zones EDUFI-CI</h1>
                                    <p className="text-gray-500 mt-1 font-medium">{zones.length} zone{zones.length > 1 ? "s" : ""} au total</p>
                                </div>
                                {!editingZone && (
                                    <button
                                        onClick={() => setEditingZone({ name: '', activity: '', target: '', imf: '' })}
                                        className="inline-flex items-center justify-center gap-2 bg-[#1e6641] hover:bg-[#164d31] text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-[#1e6641]/10 transition-all hover:-translate-y-0.5"
                                    >
                                        <Plus className="w-5 h-5" />
                                        Nouvelle Zone
                                    </button>
                                )}
                            </div>

                            {editingZone ? (
                                <div className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm">
                                    <h2 className="text-xl font-bold mb-6">{editingZone.id ? 'Modifier la zone' : 'Ajouter une zone'}</h2>
                                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Nom de la Région</label>
                                            <input 
                                                type="text" 
                                                value={editingZone.name || ''} 
                                                onChange={e => setEditingZone({...editingZone, name: e.target.value})}
                                                placeholder="ex: Sud-Bandama"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e6641]/20 focus:border-[#1e6641]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Cibles (Nombre)</label>
                                            <input 
                                                type="text" 
                                                value={editingZone.target || ''} 
                                                onChange={e => setEditingZone({...editingZone, target: e.target.value})}
                                                placeholder="ex: 600"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e6641]/20 focus:border-[#1e6641]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Activités Agricoles</label>
                                            <input 
                                                type="text" 
                                                value={editingZone.activity || ''} 
                                                onChange={e => setEditingZone({...editingZone, activity: e.target.value})}
                                                placeholder="ex: Cacao, hévéa, palmier à huile"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e6641]/20 focus:border-[#1e6641]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Partenaire IMF</label>
                                            <input 
                                                type="text" 
                                                value={editingZone.imf || ''} 
                                                onChange={e => setEditingZone({...editingZone, imf: e.target.value})}
                                                placeholder="ex: Advans CI"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e6641]/20 focus:border-[#1e6641]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-3">
                                        <button 
                                            onClick={() => setEditingZone(null)}
                                            className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                                        >
                                            Annuler
                                        </button>
                                        <button 
                                            onClick={handleSaveZone}
                                            className="px-6 py-3 rounded-xl font-bold bg-[#1e6641] text-white hover:bg-[#164d31] transition-colors flex items-center gap-2"
                                        >
                                            <Save className="w-4 h-4" />
                                            Enregistrer
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {loading ? (
                                        [1, 2, 3].map(i => <div key={i} className="h-40 bg-gray-100 rounded-3xl animate-pulse" />)
                                    ) : zones.length === 0 ? (
                                        <div className="col-span-full bg-white rounded-[40px] border border-gray-100 py-24 text-center">
                                            <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-gray-300">
                                                <MapPin className="w-10 h-10" />
                                            </div>
                                            <h3 className="text-xl font-bold text-[#0a1a0f] mb-2">Aucune zone</h3>
                                            <p className="text-gray-400 mb-8 max-w-xs mx-auto">Ajoutez votre première zone d'intervention EDUFI-CI.</p>
                                        </div>
                                    ) : (
                                        zones.map((zone) => (
                                            <div key={zone.id} className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow relative group">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="font-bold text-lg text-[#1e6641]">{zone.name}</h3>
                                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">{zone.imf}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="font-black text-xl italic">{zone.target}</span>
                                                        <p className="text-[9px] text-gray-400 uppercase tracking-widest">Cibles</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-6">{zone.activity}</p>
                                                
                                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button 
                                                        onClick={() => setEditingZone(zone)}
                                                        className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors"
                                                    >
                                                        <Pencil className="w-4 h-4" />
                                                    </button>
                                                    <button 
                                                        onClick={() => handleDeleteZone(zone.id)}
                                                        className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
