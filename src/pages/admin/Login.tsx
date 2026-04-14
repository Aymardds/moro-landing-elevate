import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            // First, ensure we start with a clean state to avoid session refresh conflicts
            await supabase.auth.signOut({ scope: 'local' });
            
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) {
                console.error("Login attempt failed:", error.message);
                toast({
                    variant: "destructive",
                    title: "Erreur de connexion",
                    description: error.message === "Invalid login credentials" 
                        ? "Email ou mot de passe incorrect." 
                        : "Une erreur est survenue lors de la connexion. Veuillez réessayer.",
                });
            } else {
                navigate("/admin");
            }
        } catch (err: any) {
            toast({
                variant: "destructive",
                title: "Erreur système",
                description: "Impossible de contacter le service d'authentification.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a1a0f] flex items-center justify-center px-4 font-futura">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1e6641]/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1e6641] rounded-2xl mb-4 shadow-xl">
                        <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-white">Administration Moro</h1>
                    <p className="text-white/50 text-sm mt-1">Accès réservé — Équipe Moro</p>
                </div>

                <form
                    onSubmit={handleLogin}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-5"
                >
                    <div>
                        <label className="block text-sm font-semibold text-white/80 mb-2">Adresse email</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="admin@moro-apps.net"
                                className="w-full bg-white/10 border border-white/15 text-white placeholder-white/20 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:border-[#4db87a] focus:ring-2 focus:ring-[#4db87a]/20 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-white/80 mb-2">Mot de passe</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="••••••••"
                                className="w-full bg-white/10 border border-white/15 text-white placeholder-white/20 rounded-xl pl-11 pr-11 py-3 text-sm outline-none focus:border-[#4db87a] focus:ring-2 focus:ring-[#4db87a]/20 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#1e6641] hover:bg-[#2d8a58] text-white py-3.5 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg mt-2"
                    >
                        {loading ? "Connexion..." : "Se connecter"}
                    </button>
                </form>

                <p className="text-center text-white/20 text-xs mt-6">
                    URL d'accès confidentielle — Ne pas partager
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
