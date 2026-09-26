import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonical?: string;
}

export const SEO = ({
    title = "Moro — Gérez votre activité & accédez au financement en Afrique",
    description = "Moro est l'application de gestion financière inclusive pour entrepreneurs, coopératives, agriculteurs et PME en Afrique. +2 000 utilisateurs. Saisie vocale en français, anglais, bambara, malinké et arabe. Bilan OHADA automatique & accès au microfinancement.",
    keywords = "gestion financière Afrique, coopérative, association, GIE, microfinance, cotisation, tontine, épargne, OHADA, SYSCOA, bilan, scoring financier, bambara, malinké, arabe, inclusion financière, micro-entrepreneur, PME Afrique",
    ogImage = "https://www.moro-apps.net/og-moro.jpg",
    ogType = "website",
    canonical = "https://www.moro-apps.net"
}: SEOProps) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Moro — Application de gestion financière inclusive pour l'Afrique" />
            <meta property="og:site_name" content="Moro" />
            <meta property="og:locale" content="fr_FR" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content="Moro — Application de gestion financière inclusive pour l'Afrique" />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />
        </Helmet>
    );
};
