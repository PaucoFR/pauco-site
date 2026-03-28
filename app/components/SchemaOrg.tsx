export default function SchemaOrg() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Pauco",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://paucoandco.com",
    description:
      "Logiciel de gestion tout-en-un pour restaurateurs indépendants : réponse automatique aux avis Google, gestion CA et dépenses, fiches techniques, coût matière, planning équipe.",
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: "EUR",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/LimitedAvailability",
      description: "Abonnement fondateur — 99€/mois à vie, 50 places maximum",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "12",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Paul Monfort",
    },
    provider: {
      "@type": "Organization",
      name: "Pauco",
      url: "https://paucoandco.com",
      logo: "https://paucoandco.com/og-image.jpg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33783470657",
        email: "contact@paucoandco.com",
        contactType: "customer service",
        availableLanguage: "French",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Saint-Cast-le-Guildo",
        addressRegion: "Bretagne",
        addressCountry: "FR",
      },
    },
    featureList: [
      "Réponse automatique aux avis Google, TripAdvisor, Booking",
      "Gestion CA et dépenses en 4 catégories",
      "Fiches techniques recettes avec 14 allergènes",
      "Calcul automatique du coût matière",
      "Planning équipe 3 pôles",
      "Coûts bar avec pertes intégrées",
      "Rapport matinal WhatsApp",
      "Tableau de bord avancé",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pauco",
    url: "https://paucoandco.com",
    logo: "https://paucoandco.com/og-image.jpg",
    description:
      "Logiciel de gestion restaurant tout-en-un pour restaurateurs indépendants.",
    founder: {
      "@type": "Person",
      name: "Paul Monfort",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint-Cast-le-Guildo",
      addressRegion: "Bretagne",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33783470657",
      email: "contact@paucoandco.com",
      contactType: "customer service",
      availableLanguage: "French",
    },
    sameAs: ["https://app.paucoandco.com"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
