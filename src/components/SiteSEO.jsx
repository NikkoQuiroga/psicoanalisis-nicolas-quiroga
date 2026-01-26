// src/components/SiteSEO.jsx
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

export default function SiteSEO() {
  const site = import.meta.env.VITE_SITE_URL || window.location.origin;
  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";

  const org = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rodrigo Nicolás Quiroga Martínez",
    jobTitle: "Licenciado en Psicología",
    identifier: "M.N. 59.272",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Olivos",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    url: site,
    telephone: `+${phone}`,
    knowsAbout: [
      "psicólogo en Olivos",
      "psicoanalista online",
      "terapia online Buenos Aires",
      "psicólogo para ansiedad",
      "psicoterapia en Vicente López",
      "autoestima",
      "duelos",
      "vínculos",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: "Lic. Rodrigo Nicolás Quiroga Martínez - Psicólogo en Olivos y online",
    url: site,
    telephone: `+${phone}`,
    image: `${site}/media/lic-rodrigo-nicolas-quiroga-martinez.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Libertador (consultorio a metros de la estación Olivos)",
      addressLocality: "Olivos",
      addressRegion: "Buenos Aires",
      postalCode: "1636",
      addressCountry: "AR",
    },
    areaServed: ["Olivos", "Vicente López", "Buenos Aires", "Argentina"],
    priceRange: "$$$",
    sameAs: [
      "https://wa.me/5491161402223",
      "https://www.instagram.com/",
    ],
    description:
      "Psicólogo y psicoanalista en Olivos y online. Terapia individual para ansiedad, duelos, vínculos, autoestima y autoconocimiento con honorarios claros y agenda flexible.",
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Psicoanálisis y psicoterapia individual",
        areaServed: "AR",
      },
      {
        "@type": "MedicalTherapy",
        name: "Terapia online",
        areaServed: "AR",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nicolás Quiroga — Psicólogo y psicoanalista",
    url: site,
    inLanguage: "es-AR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${site}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet>
      {/* básicos */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#F8F7F2" />
      <meta name="author" content="Rodrigo Nicolás Quiroga Martínez" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={site} />

      {/* OG por defecto (las páginas pueden sobreescribir) */}
      <meta property="og:site_name" content="Rodrigo Nicolás Quiroga Martínez · Psicólogo (M.N. 59.272)" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site} />

      {/* JSON-LD Person */}
      <script type="application/ld+json">{JSON.stringify(org)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </Helmet>
  );
}
