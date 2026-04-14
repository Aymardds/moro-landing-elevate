import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Diagnostic logs for identifying configuration issues in production
if (import.meta.env.MODE === 'production' || !supabaseUrl || !supabaseAnonKey) {
    if (!supabaseUrl) console.warn("Diagnostic: VITE_SUPABASE_URL is missing.");
    if (!supabaseAnonKey) console.warn("Diagnostic: VITE_SUPABASE_ANON_KEY is missing.");
    
    if (supabaseUrl && supabaseAnonKey) {
        console.log("Diagnostic: Supabase environment variables detected.");
        // Safely partial log to verify correct variable is being picked up
        console.log(`Diagnostic: URL starts with ${supabaseUrl.substring(0, 10)}...`);
    }
}

if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
        "Missing Supabase environment variables! " +
        "Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your .env file (locally) " +
        "or in the Vercel Dashboard (production)."
    );
}

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "", {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
    }
});

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    image: string;
    published: boolean;
    category: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    created_at: string;
    updated_at: string;
}
