import { Apple, PlayCircle, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import moroLogo from "@/assets/moro-logo.png";

const footerLinks = {
  product: {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#features" },
      { label: "Tarifs", href: "#pricing" },
      { label: "Sécurité", href: "#" },
      { label: "Mises à jour", href: "#" },
    ],
  },
  resources: {
    title: "Ressources",
    links: [
      { label: "Centre d'aide", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Tutoriels", href: "#" },
    ],
  },
  company: {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "#" },
      { label: "Carrières", href: "#" },
      { label: "Partenaires", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  legal: {
    title: "Légal",
    links: [
      { label: "Confidentialité", href: "#" },
      { label: "CGU", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container-tight">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center mb-4">
              <img src={moroLogo} alt="Moro" className="h-10 w-auto brightness-0 invert" />
            </a>
            <p className="text-background/60 mb-6 max-w-xs">
              Moro, est une solution inclusive de gestion des opérations courantes et d'assistance financière aux micros projets.
            </p>
            {/* App Store Links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-background/10 hover:bg-background/20 px-4 py-2 rounded-lg transition-colors"
              >
                <Apple className="w-5 h-5" />
                <span className="text-sm font-medium">App Store</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-background/10 hover:bg-background/20 px-4 py-2 rounded-lg transition-colors"
              >
                <PlayCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Google Play</span>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-background mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Moro. Tous droits réservés.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
