import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import moroLogo from "@/assets/moro-logo.png";

const navLinks = [
  { label: "Moro", href: "#why" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Pour qui", href: "#audience" },
  { label: "Tarifs", href: "#pricing" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-card py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container-tight flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={moroLogo} alt="Moro" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            isHomePage ? (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={`/${link.href}`}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Connexion
          </Button>
          <Link to="/business">
            <Button size="sm">Moro Business</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <nav className="container-tight py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                isHomePage ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={`/${link.href}`}
                    className="text-foreground font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" className="w-full">
                  Connexion
                </Button>
                <Link to="/business" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">Moro Business</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
