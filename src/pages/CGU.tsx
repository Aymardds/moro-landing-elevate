import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SEO } from "@/components/SEO";

const CGU = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const articleHeading = "text-2xl font-bold text-[#1e6641] mt-12 mb-6 border-b pb-2";
    const subHeading = "text-xl font-bold mt-6 mb-3";
    const td = "border border-gray-200 p-3";
    const tdH = "border border-gray-200 p-3 font-semibold";

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Conditions Générales d'Utilisation | Moro"
                description="Conditions Générales d'Utilisation de l'application mobile et de la plateforme web Moro — INEXIUMUS GROUP SARL."
                canonical="https://www.moro-apps.net/cgu"
            />
            <Header />
            <main className="flex-grow pt-32 pb-16 px-6 sm:px-12 lg:px-20 font-sans">
                <div className="max-w-[800px] mx-auto text-[#0a1a0f]">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold font-montserrat mb-6">CONDITIONS GÉNÉRALES D'UTILISATION</h1>
                        <p className="text-lg text-muted-foreground">Application mobile et plateforme web Moro<br />Outil de gestion financière inclusive · Comptabilité OHADA automatisée · Scoring financier · Pipeline IMF</p>
                    </div>

                    {/* Meta box */}
                    <div className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-8 mb-12 border border-gray-100">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div><span className="font-semibold">Version :</span> 1.0</div>
                            <div><span className="font-semibold">Date de publication :</span> Avril 2026</div>
                            <div><span className="font-semibold">Dernière mise à jour :</span> Avril 2026</div>
                            <div><span className="font-semibold">Éditeur :</span> INEXIUMUS GROUP SARL — <a href="https://www.inexiumus.com" className="text-[#1e6641] hover:underline" target="_blank" rel="noopener noreferrer">www.inexiumus.com</a></div>
                            <div><span className="font-semibold">Siège social :</span> Abidjan, Côte d'Ivoire (RCCM en cours d'enregistrement)</div>
                            <div><span className="font-semibold">Zones d'application :</span> Côte d'Ivoire — Zone UEMOA (8 pays)</div>
                            <div><span className="font-semibold">Groupe :</span> INEXIUMUS GROUP SARL · <a href="https://www.inexiumus.com" className="text-[#1e6641] hover:underline" target="_blank" rel="noopener noreferrer">www.inexiumus.com</a></div>
                            <div><span className="font-semibold">Contact :</span> <a href="mailto:contact@moro-apps.net" className="text-[#1e6641] hover:underline">contact@moro-apps.net</a></div>
                        </div>
                    </div>

                    {/* Warning */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12 shadow-sm">
                        <h3 className="font-bold text-yellow-800 flex items-center gap-2 mb-3 text-lg">⚠️ Avertissement important</h3>
                        <p className="text-yellow-900 mb-3 leading-relaxed">En accédant à l'application Moro, en créant un compte ou en utilisant l'un de ses services, vous reconnaissez avoir lu, compris et accepté les présentes Conditions Générales d'Utilisation dans leur intégralité.</p>
                        <p className="text-yellow-900 mb-3 leading-relaxed">Si vous n'acceptez pas ces conditions, vous ne pouvez pas utiliser l'application Moro. Ces CGU constituent un contrat juridiquement contraignant entre vous et <strong>INEXIUMUS GROUP SARL</strong>, société éditrice de l'application Moro (www.inexiumus.com).</p>
                        <p className="font-semibold text-yellow-900">Pour les GIE, coopératives, associations, mutuelles et tontines : le représentant légal ou la trésorière qui crée le compte collectif engage l'ensemble du groupement.</p>
                    </div>

                    {/* Sommaire */}
                    <div className="bg-[#f0f7f4] rounded-xl p-6 mb-12 border border-[#c6e0d4]">
                        <h3 className="font-bold text-[#1e6641] mb-4 text-lg">SOMMAIRE</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
                            {["Art. 1 — Définitions","Art. 2 — Présentation de l'application Moro","Art. 3 — Acceptation des CGU","Art. 4 — Inscription et création de compte","Art. 5 — Plans tarifaires et paiements","Art. 6 — Fonctionnalités de l'application","Art. 7 — Module Collectif","Art. 8 — Bilan OHADA et certification financière","Art. 9 — Score financier et pipeline de crédit","Art. 10 — Données personnelles","Art. 11 — Sécurité des données","Art. 12 — Propriété intellectuelle","Art. 13 — Responsabilités et limitations","Art. 14 — Intégrations tierces","Art. 15 — Conformité réglementaire BCEAO / UEMOA","Art. 16 — Suspension et résiliation","Art. 17 — Modifications des CGU","Art. 18 — Droit applicable et litiges","Art. 19 — Dispositions finales","Annexe A — Plans et fonctionnalités","Annexe B — Données collectées"].map(item => (
                                <div key={item} className="text-[#1e6641] py-0.5">{item}</div>
                            ))}
                        </div>
                    </div>

                    <div className="prose prose-green max-w-none">

                        {/* Art 1 */}
                        <h2 className={articleHeading}>Article 1 — Définitions</h2>
                        <p className="mb-4">Au sens des présentes Conditions Générales d'Utilisation, les termes suivants ont la signification qui leur est donnée ci-dessous :</p>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead><tr className="bg-gray-50"><th className={tdH + " w-1/3"}>Terme</th><th className={tdH}>Définition</th></tr></thead>
                                <tbody>
                                    {[
                                        ["Moro","Application mobile d'inclusion financière développée et éditée par INEXIUMUS GROUP SARL (www.inexiumus.com), domiciliée à Abidjan, Côte d'Ivoire. Accessible sur moro-apps.net"],
                                        ["Application","L'application mobile et/ou la plateforme web Moro, dans toutes leurs versions"],
                                        ["Utilisateur / Vous","Toute personne physique ou morale ayant créé un compte sur l'Application"],
                                        ["Compte","L'espace personnel ou collectif créé par l'Utilisateur après inscription"],
                                        ["Compte Collectif","Compte créé par un GIE, une coopérative, une association, une mutuelle, une tontine ou tout autre groupement économique, géré par un Administrateur"],
                                        ["Administrateur","Le représentant légal, la trésorière ou le responsable désigné d'un groupement"],
                                        ["Membre","Tout adhérent d'un groupement rattaché à un Compte Collectif Moro"],
                                        ["MiA","Le module d'intelligence artificielle conversationnelle de l'Application (saisie vocale, textuelle, photographique)"],
                                        ["Bilan OHADA","L'état financier conforme au Système Minimal de Trésorerie (SMT) SYSCOA/OHADA, généré automatiquement"],
                                        ["Bouton Certifier","Fonctionnalité permettant la certification officielle des états financiers"],
                                        ["Score Moro","Indicateur de santé financière (0 à 100) calculé automatiquement"],
                                        ["Pipeline IMF","Parcours intégré vers les Institutions de Microfinance partenaires"],
                                        ["IMF Partenaire","Institution de microfinance ayant conclu un accord de partenariat avec Moro"],
                                        ["Mobile Money","Services de paiement mobile (Wave, Orange Money, MTN MoMo) intégrés nativement"],
                                        ["Données Personnelles","Toute information relative à une personne physique identifiée ou identifiable"],
                                        ["Abonnement","Le plan tarifaire souscrit par l'Utilisateur (Journée, Essentiel, GIE)"],
                                        ["Mode Hors-Ligne","Utilisation de l'Application sans connexion internet, avec synchronisation différée"],
                                        ["BCEAO","Banque Centrale des États de l'Afrique de l'Ouest"],
                                        ["UEMOA","Union Économique et Monétaire Ouest-Africaine (8 pays : Bénin, Burkina Faso, Côte d'Ivoire, Guinée-Bissau, Mali, Niger, Sénégal, Togo)"],
                                        ["SYSCOA/OHADA","Système Comptable Ouest-Africain harmonisé, applicable dans les 17 États parties à l'OHADA"],
                                    ].map(([term, def]) => (
                                        <tr key={term}><td className={td + " font-medium"}>{term}</td><td className={td}>{def}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Art 2 */}
                        <h2 className={articleHeading}>Article 2 — Présentation de l'application Moro</h2>
                        <h3 className={subHeading}>2.1 Nature et objet</h3>
                        <p className="mb-4">Moro est une application mobile et plateforme web d'inclusion financière développée et éditée par <strong>INEXIUMUS GROUP SARL</strong> (www.inexiumus.com), société de droit ivoirien. Elle est destinée aux micro-entrepreneurs, travailleurs indépendants, et groupements collectifs de la zone UEMOA.</p>
                        <p className="mb-2">L'Application a pour objet de :</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Fournir un outil de comptabilité automatisée via saisie vocale, photographique ou textuelle en français, bambara et dioula ;</li>
                            <li>Générer automatiquement des bilans financiers conformes au Système Minimal de Trésorerie SYSCOA/OHADA ;</li>
                            <li>Permettre la certification officielle d'états financiers via le bouton « Certifier » ;</li>
                            <li>Calculer un score de santé financière (Score Moro) sur 7 dimensions comportementales ;</li>
                            <li>Faciliter l'accès au crédit formel via un pipeline intégré vers les IMF partenaires ;</li>
                            <li>Offrir un module de gestion collective pour les groupements (tontines, cotisations, budget partagé, coopératives) ;</li>
                            <li>Intégrer nativement les paiements via Wave, Orange Money et MTN MoMo.</li>
                        </ul>

                        <h3 className={subHeading}>2.2 Disponibilité géographique</h3>
                        <p className="mb-6">L'Application est disponible prioritairement en Côte d'Ivoire depuis le lancement officiel du 4 mai 2026, et s'étend progressivement à l'ensemble de la zone UEMOA.</p>

                        <h3 className={subHeading + " text-red-700"}>2.3 Nature non bancaire de Moro</h3>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                            <h4 className="font-bold text-red-800 mb-2">⚠️ Avertissement légal fondamental</h4>
                            <p className="text-red-900 mb-2"><strong>INEXIUMUS GROUP SARL</strong>, éditrice de l'application Moro, n'est <strong>PAS</strong> une banque, ni un établissement de paiement, ni une institution de microfinance.</p>
                            <p className="text-red-900 mb-2">Moro est un outil logiciel de gestion financière. INEXIUMUS GROUP SARL ne collecte <strong>PAS</strong> de fonds, n'effectue <strong>PAS</strong> d'opérations de paiement en son nom propre, et n'octroie <strong>PAS</strong> de crédit.</p>
                            <p className="text-red-900 mb-2">Les opérations de paiement sont réalisées exclusivement via les opérateurs de Mobile Money agréés (Wave, Orange Money, MTN MoMo).</p>
                            <p className="text-red-900">Les décisions de crédit appartiennent exclusivement aux IMF Partenaires. Moro ne garantit pas l'obtention d'un crédit.</p>
                        </div>

                        {/* Art 3 */}
                        <h2 className={articleHeading}>Article 3 — Acceptation des CGU</h2>
                        <ul className="space-y-4 mb-8">
                            <li><strong>3.1</strong> L'utilisation de l'Application implique l'acceptation pleine et entière des présentes CGU, matérialisée par le cochage de la case « J'accepte les CGU » lors de la création de compte.</li>
                            <li><strong>3.2</strong> En cas de création d'un Compte Collectif, la personne procédant à l'inscription déclare être habilitée à engager ledit groupement.</li>
                            <li><strong>3.3</strong> Les présentes CGU s'appliquent sans préjudice des conditions particulières avec des partenaires institutionnels.</li>
                            <li><strong>3.4</strong> L'Utilisateur reconnaît que tout refus des CGU emporte l'impossibilité d'utiliser l'Application.</li>
                        </ul>

                        {/* Art 4 */}
                        <h2 className={articleHeading}>Article 4 — Inscription et création de compte</h2>
                        <h3 className={subHeading}>4.1 Conditions d'inscription</h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Être une personne physique majeure (18 ans ou plus) ou le représentant légal d'une personne morale ;</li>
                            <li>Disposer d'un numéro de téléphone mobile valide et actif dans la zone UEMOA ;</li>
                            <li>Accepter les présentes CGU et la Politique de Confidentialité ;</li>
                            <li>Fournir des informations exactes, complètes et à jour.</li>
                        </ul>
                        <h3 className={subHeading}>4.2 Informations collectées à l'inscription</h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Nom et prénom(s) ou dénomination du groupement ;</li>
                            <li>Numéro de téléphone mobile (identifiant principal) ;</li>
                            <li>Type d'activité ou de groupement ;</li>
                            <li>Localisation (pays, région) ;</li>
                            <li>Mot de passe ou code PIN de sécurité.</li>
                        </ul>
                        <div className="space-y-4 mb-8">
                            <p><strong>4.3 Unicité du compte :</strong> Chaque numéro de téléphone mobile ne peut être associé qu'à un seul Compte individuel.</p>
                            <p><strong>4.4 Responsabilité des informations :</strong> L'Utilisateur est seul responsable de l'exactitude des informations fournies.</p>
                            <p><strong>4.5 Confidentialité des identifiants :</strong> L'Utilisateur est seul responsable de la confidentialité de son code PIN ou mot de passe. Compromission à signaler à contact@moro-apps.net.</p>
                        </div>
                        <h3 className={subHeading}>4.6 Compte Collectif — Dispositions spécifiques</h3>
                        <p className="mb-2">Pour la création d'un Compte Collectif, l'Administrateur fournit en outre :</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>La dénomination officielle ou usuelle du groupement ;</li>
                            <li>Le type de groupement (coopérative, association, mutuelle, tontine, GIE formel ou informel) ;</li>
                            <li>Le nombre de membres initial ;</li>
                            <li>La liste nominative des membres avec leur numéro de téléphone.</li>
                        </ul>
                        <p className="mb-8">L'Administrateur s'engage à informer les membres de leur inscription et de la collecte de leurs données.</p>

                        {/* Art 5 */}
                        <h2 className={articleHeading}>Article 5 — Plans tarifaires et paiements</h2>
                        <h3 className={subHeading}>5.1 Plans disponibles</h3>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead><tr className="bg-gray-50">
                                    <th className={tdH}>Plan</th><th className={tdH}>Tarif</th><th className={tdH}>Cible</th><th className={tdH}>Engagement</th>
                                </tr></thead>
                                <tbody>
                                    <tr><td className={td + " font-medium"}>Moro Journée</td><td className={td}>200 FCFA / 24 heures</td><td className={td}>Débutants, usage ponctuel</td><td className={td}>Aucun</td></tr>
                                    <tr><td className={td + " font-medium"}>Moro Essentiel</td><td className={td}>900 FCFA / mois</td><td className={td}>Entrepreneurs indépendants</td><td className={td}>Mensuel / Annuel (5% réduc.)</td></tr>
                                    <tr><td className={td + " font-medium"}>Moro GIE</td><td className={td}>1 500 FCFA / membre / mois</td><td className={td}>Coopératives 15+ membres, GIE</td><td className={td}>Mensuel / Annuel (5% réduc.)</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="space-y-4 mb-8">
                            <p><strong>5.2 Modalités de paiement :</strong> Exclusivement via Wave, Orange Money ou MTN MoMo. Aucun paiement en espèces ni par carte bancaire.</p>
                            <p><strong>5.3 Plan GIE — Facturation :</strong> Montant calculé sur la base du nombre de membres actifs au 1er jour du mois. L'Administrateur est responsable du paiement pour l'ensemble des membres. L'accès est gratuit pour l'entité GIE elle-même.</p>
                            <p><strong>5.4 Accès gratuit :</strong> Moro peut proposer des périodes d'essai ou des accès subventionnés dans le cadre de programmes partenaires.</p>
                            <p><strong>5.5 Non-remboursement :</strong> Les paiements ne sont pas remboursables sauf erreur avérée. Délai de signalement : 30 jours à contact@moro-apps.net.</p>
                            <p><strong>5.6 Modification des tarifs :</strong> Préavis minimum 30 jours par notification in-app et/ou SMS.</p>
                        </div>

                        {/* Art 6 */}
                        <h2 className={articleHeading}>Article 6 — Fonctionnalités de l'application</h2>
                        <div className="space-y-6 mb-8">
                            <div><h3 className="font-bold mb-2">6.1 Comptabilité automatisée</h3><p>L'Application permet d'enregistrer des opérations financières par saisie vocale, photographique (OCR) ou textuelle. MiA classe automatiquement chaque opération selon le référentiel SYSCOA/OHADA. L'Utilisateur reconnaît que ce classement est une aide à la gestion et ne se substitue pas à un comptable agréé.</p></div>
                            <div><h3 className="font-bold mb-2">6.2 Saisie multilingue</h3><p>L'Application supporte le français, le bambara et le dioula. D'autres langues (wolof, haoussa, twi) pourront être ajoutées.</p></div>
                            <div><h3 className="font-bold mb-2">6.3 Mode hors-ligne</h3><p>L'Application fonctionne en mode hors-ligne pour la saisie des opérations courantes, avec synchronisation différée lors de la prochaine connexion.</p></div>
                            <div><h3 className="font-bold mb-2">6.4 Gestion du portefeuille multi-comptes</h3><p>L'Application permet de gérer caisse espèces, comptes Mobile Money et comptes bancaires avec trésorerie nette consolidée.</p></div>
                            <div><h3 className="font-bold mb-2">6.5 Facturation et suivi des créances</h3><p>L'Application génère des références de facture au format INV-AAAA-XXXX et permet le suivi des créances clients avec intégration Wave.</p></div>
                        </div>

                        {/* Art 7 */}
                        <h2 className={articleHeading}>Article 7 — Module Collectif — Groupements</h2>
                        <h3 className={subHeading}>7.1 Champ d'application</h3>
                        <p className="mb-2">Le Module Collectif est conçu pour :</p>
                        <ul className="list-disc pl-6 mb-6 space-y-1">
                            <li>Groupements d'Intérêt Économique (GIE) formels enregistrés ;</li>
                            <li>Coopératives agricoles, d'épargne ou de consommation ;</li>
                            <li>Associations de femmes commerçantes, d'artisans ou de jeunes entrepreneurs ;</li>
                            <li>Mutuelles de santé, d'épargne ou de solidarité ;</li>
                            <li>Tontines et nansés (groupes d'épargne rotative informels) ;</li>
                            <li>Tout autre groupement économique collectif.</li>
                        </ul>
                        <h3 className={subHeading}>7.2 Fonctionnalités collectives</h3>
                        <ul className="list-disc pl-6 mb-6 space-y-1">
                            <li>Gestion des profils et soldes individuels des membres ;</li>
                            <li>Suivi des cotisations avec alertes automatiques ;</li>
                            <li>Gestion des tours de tontine / nansé avec verrouillage numérique de l'ordre ;</li>
                            <li>Budget collectif partagé en temps réel ;</li>
                            <li>Module de prêts internes entre membres ;</li>
                            <li>Score collectif du groupement ;</li>
                            <li>Bilan OHADA du groupement généré automatiquement ;</li>
                            <li>Tableau de bord trésorière avec alertes de seuil de réserves.</li>
                        </ul>
                        <div className="space-y-4 mb-8">
                            <p><strong>7.3 Responsabilité de l'Administrateur :</strong> L'Administrateur est responsable de l'exactitude des informations, de l'information préalable des membres, du règlement des abonnements, de la gestion des droits d'accès et de la conservation de sa clé de récupération.</p>
                            <p><strong>7.4 Droits des membres :</strong> Accès en lecture à leur solde individuel, à l'historique et au tableau de bord collectif selon leurs droits. Droit de demander correction ou dissociation de leur profil.</p>
                            <p><strong>7.5 Dissolution du groupement :</strong> Notification à Moro dans les 30 jours et désignation d'un responsable pour l'archivage ou la suppression des données.</p>
                        </div>

                        {/* Art 8 */}
                        <h2 className={articleHeading}>Article 8 — Bilan OHADA et certification financière</h2>
                        <h3 className={subHeading}>8.1 Nature du Bilan OHADA généré</h3>
                        <p className="mb-4">L'Application génère automatiquement un Bilan conforme au Système Minimal de Trésorerie (SMT) SYSCOA/OHADA avec les postes : Actif (TA/TB/SM/SP/SE/CC/IM/AZ) ; Passif (TP/TD/CF/FE/CA/CI/PZ) ; Résultat (TC/TZ/UZ).</p>
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
                            <h4 className="font-bold text-orange-800 mb-2">⚠️ Limites de la génération automatique</h4>
                            <p className="text-orange-900 mb-2">Le Bilan OHADA est élaboré à partir des seules opérations enregistrées par l'Utilisateur. Il ne tient pas compte des opérations non saisies ou antérieures à l'ouverture du compte.</p>
                            <p className="text-orange-900">Ce bilan est un outil de gestion et ne se substitue pas à un bilan certifié par un expert-comptable agréé pour les besoins légaux, fiscaux ou judiciaires.</p>
                        </div>
                        <div className="space-y-4 mb-8">
                            <p><strong>8.3 Fonctionnalité de certification :</strong> En actionnant « Certifier », l'Utilisateur atteste sous sa responsabilité de l'exactitude des données saisies et autorise la génération d'un PDF horodaté partageable avec les IMF Partenaires. Toute fausse déclaration l'expose à des sanctions pénales.</p>
                            <p><strong>8.4 Utilisation par les tiers :</strong> Les états certifiés sont transmis aux IMF Partenaires uniquement à la demande explicite et préalable de l'Utilisateur.</p>
                        </div>

                        {/* Art 9 */}
                        <h2 className={articleHeading}>Article 9 — Score financier et pipeline de crédit</h2>
                        <h3 className={subHeading}>9.1 Nature et calcul du Score Moro</h3>
                        <p className="mb-4">Le Score Moro est un indicateur de santé financière comportementale (0 à 100), mis à jour en continu sur 7 dimensions : régularité des enregistrements, diversité des revenus, ancienneté sur la plateforme, capacité d'épargne, complétude du profil, participation à un groupement, et volume d'activité.</p>
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
                            <h4 className="font-bold text-orange-800 mb-2">⚠️ Le Score Moro n'est pas un score de crédit officiel</h4>
                            <p className="text-orange-900 mb-2">Le Score Moro est un outil interne d'aide à la décision. Il n'est pas un score de solvabilité au sens des réglementations bancaires de la BCEAO.</p>
                            <p className="text-orange-900">Les IMF Partenaires appliquent leurs propres critères. Moro ne garantit pas l'obtention d'un crédit, même pour un score supérieur à 60.</p>
                        </div>
                        <p className="mb-8"><strong>9.3 Pipeline de crédit :</strong> Lorsque le Score atteint le seuil d'éligibilité (indicativement 60/100), l'Application propose de soumettre un dossier auprès d'une IMF Partenaire. Les conditions du crédit sont déterminées exclusivement par l'IMF. Moro n'est pas partie au contrat de crédit.</p>

                        {/* Art 10 */}
                        <h2 className={articleHeading}>Article 10 — Données personnelles et protection de la vie privée</h2>
                        <div className="space-y-4 mb-8">
                            <p><strong>10.1 Responsable de traitement :</strong> INEXIUMUS GROUP SARL, Abidjan, Côte d'Ivoire (www.inexiumus.com). Contact DPO : contact@moro-apps.net.</p>
                            <p><strong>10.2 Base légale :</strong> Exécution du contrat (CGU), consentement explicite, intérêt légitime, et obligation légale (LCB-FT conformément aux exigences BCEAO / Instruction n°01-01-2024).</p>
                            <p><strong>10.3 Données collectées :</strong> Détaillées à l'Annexe B des présentes CGU.</p>
                            <p><strong>10.4 Droits des Utilisateurs :</strong> Accès, rectification, effacement, portabilité, opposition et retrait du consentement. Demande à adresser à contact@moro-apps.net — réponse sous 30 jours.</p>
                            <p><strong>10.5 Conservation :</strong> Données financières historiques conservées 10 ans après clôture du compte (obligation OHADA). Données de connexion : 12 mois.</p>
                            <p><strong>10.6 Transferts :</strong> Moro ne vend pas les données à des tiers. Transferts uniquement aux IMF Partenaires (avec consentement), aux autorités compétentes (réquisition), et aux sous-traitants techniques.</p>
                        </div>

                        {/* Art 11-15 */}
                        <h2 className={articleHeading}>Article 11 — Sécurité des données</h2>
                        <div className="space-y-4 mb-8">
                            <p>11.1 Moro met en œuvre des mesures techniques et organisationnelles : chiffrement TLS en transit et au repos, authentification à deux facteurs, contrôle d'accès strict, surveillance continue.</p>
                            <p>11.2 Moro s'engage à notifier l'Utilisateur en cas de violation de données susceptible d'engendrer un risque élevé pour ses droits.</p>
                            <p>11.3 L'Utilisateur s'engage à ne pas tenter de contourner les mesures de sécurité et à signaler tout incident à contact@moro-apps.net.</p>
                        </div>

                        <h2 className={articleHeading}>Article 12 — Propriété intellectuelle</h2>
                        <div className="space-y-4 mb-8">
                            <p>12.1 L'Application Moro, son code source, ses interfaces, ses algorithmes (Score Moro, MiA), ses marques et logos sont la propriété exclusive d'INEXIUMUS GROUP SARL.</p>
                            <p>12.2 L'Utilisateur bénéficie d'une licence d'utilisation personnelle, non exclusive, non transférable et révocable, pour la durée de son abonnement.</p>
                            <p>12.3 Les données financières saisies par l'Utilisateur restent sa propriété exclusive. INEXIUMUS GROUP SARL ne revendique aucun droit de propriété sur ces données.</p>
                            <p>12.4 Moro se réserve le droit d'utiliser, sous forme agrégée et anonymisée, les données d'utilisation à des fins d'amélioration du service et de reporting sur l'inclusion financière.</p>
                        </div>

                        <h2 className={articleHeading}>Article 13 — Responsabilités et limitations</h2>
                        <div className="space-y-4 mb-8">
                            <p><strong>13.1 Responsabilités de l'Utilisateur :</strong> L'exactitude des données saisies, l'interprétation des bilans et scores générés, les décisions financières prises, le respect des obligations fiscales et légales, et l'usage conforme de la certification.</p>
                            <p><strong>13.2 Limitations de responsabilité de Moro :</strong> INEXIUMUS GROUP SARL ne peut être tenu responsable des erreurs de classement, décisions des IMF, pertes financières liées aux informations de l'Application, interruptions de service extérieures, pertes de données hors-ligne, ni d'une utilisation frauduleuse par un tiers.</p>
                            <p><strong>13.3 Plafond :</strong> La responsabilité d'INEXIUMUS GROUP SARL ne peut excéder le montant total des abonnements payés sur les 12 mois précédant le dommage.</p>
                        </div>

                        <h2 className={articleHeading}>Article 14 — Intégrations tierces</h2>
                        <div className="space-y-4 mb-8">
                            <p>14.1 L'Application intègre nativement Wave, Orange Money et MTN MoMo. Ces intégrations sont fournies à titre de commodité.</p>
                            <p>14.2 L'utilisation de ces services est soumise aux conditions générales propres à chaque opérateur. Moro ne peut être tenu responsable de leurs dysfonctionnements.</p>
                            <p>14.3 Dans le cadre de l'intégration PI-SPI (BCEAO), des règles supplémentaires peuvent s'appliquer.</p>
                            <p>14.4 Moro ne stocke pas les codes PIN des services Mobile Money. L'authentification est réalisée directement par l'Utilisateur auprès des opérateurs.</p>
                        </div>

                        <h2 className={articleHeading}>Article 15 — Conformité réglementaire BCEAO / UEMOA</h2>
                        <div className="space-y-4 mb-8">
                            <p>15.1 INEXIUMUS GROUP SARL opère en conformité avec l'Instruction n°01-01-2024 de la BCEAO relative aux établissements de paiement.</p>
                            <p>15.2 Moro met en œuvre les mesures LCB-FT conformément aux directives de la BCEAO et du GIABA.</p>
                            <p>15.3 L'Utilisateur s'engage à ne pas utiliser l'Application à des fins de blanchiment ou d'activités illicites.</p>
                            <p>15.4 Moro se réserve le droit de signaler aux autorités compétentes toute opération suspecte, sans préavis.</p>
                        </div>

                        <h2 className={articleHeading}>Article 16 — Suspension et résiliation du compte</h2>
                        <div className="space-y-4 mb-8">
                            <p><strong>16.1 Résiliation par l'Utilisateur :</strong> Possible à tout moment depuis les paramètres de l'Application. Prend effet à la fin de la période d'abonnement en cours.</p>
                            <p><strong>16.2 Suspension ou résiliation par Moro :</strong> En cas de non-paiement, violation des CGU, fausse déclaration, fraude, activité suspecte LCB-FT, décision judiciaire ou comportement abusif envers le support.</p>
                            <p><strong>16.3 Effets de la résiliation :</strong> L'Utilisateur peut exporter ses données financières (PDF/CSV) dans les 30 jours suivant la résiliation. Passé ce délai, la récupération n'est plus garantie.</p>
                        </div>

                        <h2 className={articleHeading}>Article 17 — Modifications des CGU</h2>
                        <div className="space-y-4 mb-8">
                            <p>17.1 Moro se réserve le droit de modifier les présentes CGU à tout moment.</p>
                            <p>17.2 Toute modification substantielle est notifiée au moins 30 jours avant son entrée en vigueur (notification in-app et/ou SMS).</p>
                            <p>17.3 La poursuite de l'utilisation après la date d'entrée en vigueur vaut acceptation.</p>
                            <p>17.4 Si l'Utilisateur refuse les nouvelles CGU, il peut demander la résiliation de son compte (Art. 16.1).</p>
                            <p>17.5 La version en vigueur est toujours accessible depuis l'Application et sur moro-apps.net.</p>
                        </div>

                        <h2 className={articleHeading}>Article 18 — Droit applicable et règlement des litiges</h2>
                        <div className="space-y-4 mb-8">
                            <p><strong>18.1 Droit applicable :</strong> Les présentes CGU sont régies par le droit ivoirien, les textes OHADA applicables et les directives de la BCEAO.</p>
                            <p><strong>18.2 Résolution amiable :</strong> Contact préalable à contact@moro-apps.net. Réponse sous 15 jours ouvrés.</p>
                            <p><strong>18.3 Médiation :</strong> À défaut de résolution amiable dans 45 jours, saisine possible de la Chambre de Commerce et d'Industrie de Côte d'Ivoire (CCI-CI).</p>
                            <p><strong>18.4 Juridiction compétente :</strong> Les juridictions d'Abidjan, Côte d'Ivoire, sont compétentes pour tout litige entre l'Utilisateur et INEXIUMUS GROUP SARL.</p>
                        </div>

                        <h2 className={articleHeading}>Article 19 — Dispositions finales</h2>
                        <div className="space-y-4 mb-12">
                            <p><strong>19.1 Intégralité de l'accord.</strong> Les présentes CGU, la Politique de Confidentialité et les éventuelles conditions particulières constituent l'intégralité de l'accord entre INEXIUMUS GROUP SARL et l'Utilisateur.</p>
                            <p><strong>19.2 Divisibilité.</strong> La nullité d'une disposition est limitée à cette disposition ; les autres restent en vigueur.</p>
                            <p><strong>19.3 Non-renonciation.</strong> Le fait pour Moro de ne pas se prévaloir d'une disposition ne vaut pas renonciation.</p>
                            <p><strong>19.4 Langue.</strong> Les présentes CGU sont rédigées en langue française, qui fait foi en cas de traduction.</p>
                            <p><strong>19.5 Contact.</strong> contact@moro-apps.net — INEXIUMUS GROUP SARL · moro-apps.net · www.inexiumus.com · Abidjan, Côte d'Ivoire.</p>
                        </div>

                        {/* Annexe A */}
                        <h2 className={articleHeading}>Annexe A — Plans tarifaires et fonctionnalités détaillées</h2>
                        <div className="overflow-x-auto mb-12">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead><tr className="bg-gray-50">
                                    <th className={tdH}>Fonctionnalité</th>
                                    <th className={tdH + " text-center w-20"}>Journée<br /><span className="text-xs font-normal">200 FCFA</span></th>
                                    <th className={tdH + " text-center w-20"}>Essentiel<br /><span className="text-xs font-normal">900 F/mois</span></th>
                                    <th className={tdH + " text-center w-20"}>GIE<br /><span className="text-xs font-normal">1 500 F/mbr</span></th>
                                </tr></thead>
                                <tbody>
                                    {[
                                        ["Saisie opérations / mode hors-ligne / Mobile Money","✓","✓","✓"],
                                        ["Saisie en dioula / bambara / Tableaux de bord","✓","✓","✓"],
                                        ["Projets actifs collaboratifs","1","5","Illimités"],
                                        ["Utilisateurs gérés","1","3","Illimités"],
                                        ["Devis & facturation pro","—","✓","✓"],
                                        ["Gestion du personnel et des marchandises","—","✓","✓"],
                                        ["Annonces de produits sur Moro Store","—","Illimitées","Illimitées"],
                                        ["Bilan SMT SYSCOA/OHADA (Export PDF/Excel)","—","✓","✓"],
                                        ["Score financier individuel & Pipeline crédit IMF","—","✓","✓"],
                                        ["Certification de bilan (Option payante)","—","✓","✓"],
                                        ["Gestion GIE (Cotisations, Tontines, Budget)","—","—","✓"],
                                        ["Hub ERP Coopérative / Approbation dossier","—","—","✓"],
                                        ["Score Moro collectif++ du groupement","—","—","✓"],
                                        ["Support prioritaire 24/7","—","✓","✓"],
                                    ].map(([feat, j, e, c]) => (
                                        <tr key={feat}><td className={td}>{feat}</td><td className={td + " text-center"}>{j}</td><td className={td + " text-center"}>{e}</td><td className={td + " text-center"}>{c}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Annexe B */}
                        <h2 className={articleHeading}>Annexe B — Données collectées et finalités</h2>
                        <div className="overflow-x-auto mb-12">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead><tr className="bg-gray-50">
                                    <th className={tdH}>Catégorie</th><th className={tdH}>Données collectées</th><th className={tdH}>Finalité</th><th className={tdH}>Conservation</th>
                                </tr></thead>
                                <tbody>
                                    {[
                                        ["Identification","Nom, prénom, numéro de téléphone, type d'activité, localisation","Création et gestion du compte","Durée du compte + 5 ans"],
                                        ["Données financières","Transactions (montants, dates, catégories), bilans, soldes, créances, stock","Service comptable, génération du bilan OHADA","10 ans (obligation OHADA)"],
                                        ["Score Moro","Indicateurs comportementaux agrégés (régularité, volume, épargne)","Calcul du Score Moro, pipeline IMF","Durée du compte + 3 ans"],
                                        ["Données de connexion","Adresse IP, appareil, OS, horodatage des sessions","Sécurité, lutte contre la fraude","12 mois"],
                                        ["Données voix / photo","Enregistrements vocaux transcrits, images de documents (OCR)","Saisie des transactions via MiA — non conservés après transcription","Traitement immédiat / non stocké"],
                                        ["Données groupement","Dénomination, membres, cotisations, tours de tontine, budget collectif","Module Collectif, score collectif","Durée du compte + 10 ans"],
                                        ["Données scoring IMF","Profil financier certifié transmis avec consentement","Demande de crédit auprès d'IMF Partenaires","Politique de l'IMF destinataire"],
                                        ["Données d'utilisation","Fonctionnalités utilisées, fréquence, langue, version","Amélioration du service, statistiques agrégées","36 mois anonymisés"],
                                    ].map(([cat, data, fin, dur]) => (
                                        <tr key={cat}><td className={td + " font-medium"}>{cat}</td><td className={td}>{data}</td><td className={td}>{fin}</td><td className={td}>{dur}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="text-center text-sm text-gray-500 mt-16 pt-8 border-t">
                            <p>— Fin des Conditions Générales d'Utilisation —</p>
                            <p>INEXIUMUS GROUP SARL · Application Moro · moro-apps.net · www.inexiumus.com · contact@moro-apps.net · Abidjan, Côte d'Ivoire · Version 1.0 — Avril 2026</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CGU;
