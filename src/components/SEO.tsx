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
    title = "Moro - Gestion et financement de microprojet en Afrique",
    description = "Moro, est une solution inclusive de gestion des opérations courantes et d'assistance financière aux micros projets.",
    keywords = "coopérative, association, gestion, financement, Afrique, microfinance, cotisation, tontine, épargne",
    ogImage = "https://www.moro-apps.net/impact/action-1.jpg",
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
            <meta property="og:site_name" content="Moro" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />
        </Helmet>
    );
};
