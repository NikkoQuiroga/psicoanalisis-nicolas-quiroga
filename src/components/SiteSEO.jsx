// src/components/SiteSEO.jsx
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { useLocation } from "react-router-dom";

export default function SiteSEO() {
  const location = useLocation();
  const site = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
  const pageUrl = `${site}${location.pathname}`;
  const defaultImage = `${site}/media/lic-rodrigo-nicolas-quiroga-martinez.webp`;
  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nicolás Quiroga",
    alternateName: "Rodrigo Nicolás Quiroga Martínez",
    jobTitle: "Psicoanalista clínico",
    identifier: "M.N. 59.272",
    image: defaultImage,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Olivos",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    url: site,
    telephone: `+${phone}`,
    knowsAbout: [
      "Psicoanálisis lacaniano",
      "Lacan",
      "Inconsciente",
      "Síntoma",
      "Angustia",
      "Goce",
      "Objeto a",
      "Transferencia",
      "Sujeto",
      "Deseo",
      "Psicoanálisis online",
      "Psicoanalista en Olivos",
      "Psicoanalista zona norte Buenos Aires",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: "Lic. Nicolás Quiroga — Psicoanalista clínico en Olivos y online",
    url: site,
    telephone: `+${phone}`,
    image: defaultImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Olivos, Vicente López",
      addressLocality: "Olivos",
      addressRegion: "Buenos Aires",
      postalCode: "1636",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.5138,
      longitude: -58.4943,
    },
    areaServed: [
      { "@type": "City", name: "Olivos" },
      { "@type": "City", name: "Vicente López" },
      { "@type": "AdministrativeArea", name: "Zona Norte Buenos Aires" },
      { "@type": "Country", name: "Argentina" },
    ],
    priceRange: "$$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: [`https://wa.me/${phone}`],
    description:
      "Psicoanalista clínico en Olivos y online. Sesiones individuales con reserva absoluta. Para quienes atraviesan momentos que no saben cómo nombrar.",
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Psicoanálisis clínico presencial",
        areaServed: { "@type": "City", name: "Olivos" },
      },
      {
        "@type": "MedicalTherapy",
        name: "Psicoanálisis clínico online",
        areaServed: { "@type": "Country", name: "Argentina" },
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lic. Nicolás Quiroga — Psicoanalista clínico",
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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#F8F7F2" />
      <meta name="author" content="Nicolás Quiroga" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={pageUrl} />
      <meta
        name="description"
        content="Lic. Nicolás Quiroga (M.N. 59.272), psicoanalista clínico en Olivos y online. Sesiones individuales con reserva absoluta."
      />

      {/* OG por defecto */}
      <meta property="og:site_name" content="Lic. Nicolás Quiroga · Psicoanalista clínico (M.N. 59.272)" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Nicolás Quiroga, psicoanalista lacaniano en Olivos" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={defaultImage} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(person)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </Helmet>
  );
}
