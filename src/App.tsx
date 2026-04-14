import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatWidget } from "./components/chat/ChatWidget";
import ScrollToHashElement from "./components/utils/ScrollToHashElement";
import { supabase } from "./lib/supabase";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Business = lazy(() => import("./pages/Business"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const BlogEditor = lazy(() => import("./pages/admin/BlogEditor"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CGU = lazy(() => import("./pages/CGU"));

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Check session on mount to handle stale 401 tokens
    const checkSession = async () => {
      try {
        const { error } = await supabase.auth.getSession();
        if (error) {
          console.warn("Auth session check — cleaning up stale data:", error.message);
          // If we get a 401 or similar auth error, clear local storage
          // to prevent background refresh 401 loops in the console.
          await supabase.auth.signOut({ scope: 'local' });
        }
      } catch (err) {
        console.error("Silent auth cleanup failed:", err);
      }
    };

    checkSession();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      // If we get an error or a 401 response during session refresh, 
      // Supabase might trigger a SIGNED_OUT event or keep it null.
      if (event === 'SIGNED_OUT') {
        // Clear any potentially stale data if needed
        console.log("Session signed out or expired.");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToHashElement />
          <Suspense fallback={
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50/50">
              <div className="w-10 h-10 border-4 border-[#1e6641]/20 border-t-[#1e6641] rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/business" element={<Business />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              {/* Protected Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/blog/:id" element={<BlogEditor />} />
              <Route path="/cgu" element={<CGU />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <ChatWidget />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
