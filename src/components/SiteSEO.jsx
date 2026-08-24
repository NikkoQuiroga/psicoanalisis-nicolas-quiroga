// src/components/SiteSEO.jsx
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { useLocation } from "react-router-dom";

export default function SiteSEO() {
  const location = useLocation();
  const site = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
  const pageUrl = `${site}${location.pathname}`;
  const defaultImage = `${site}/media/nicolas-quiroga-estudio-clinico.webp`;
  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";
  const linkedInUrl = "https://www.linkedin.com/in/lic-nicolas-quiroga";
  const academicWorkUrl = "https://www.aacademica.org/jornadas.psicopatologia.30.aniversario/101";
  const contactUrl = `${site}/contacto`;
  const professionalProfiles = [
    "https://www.psychologytoday.com/profile/1783533",
    "https://psicologosbuenosaires.com/nicolas-quiroga-psicoanalista-clinico-para-sobrepensamiento-y-ansiedad-2144",
    "https://www.doctoraliar.com/nicolas-quiroga/psicologo/olivos",
    "https://buscopsi.com/psicologo/nicolas-quiroga/",
    linkedInUrl,
    academicWorkUrl,
  ];

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site}/sobre-mi#nicolas-quiroga`,
    name: "Nicolás Quiroga",
    alternateName: "Rodrigo Nicolás Quiroga Martínez",
    jobTitle: "Psicoanalista clínico",
    description:
      "Psicólogo en Olivos y psicoanalista clínico. Atiende presencial en Vicente López y online.",
    identifier: "M.N. 59.272",
    image: defaultImage,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad de Buenos Aires",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Licenciatura",
        name: "Licenciatura en Psicología",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Universidad de Buenos Aires",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Posgrado",
        name: "Posgrado en Psicoanálisis Lacaniano en ALEF",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Posgrado",
        name: "Posgrado en Mindfulness, Meditación y Respiración Consciente (EESH - 2017)",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Olivos",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    url: `${site}/sobre-mi`,
    telephone: `+${phone}`,
    sameAs: professionalProfiles,
    subjectOf: [
      { "@type": "WebPage", name: "Sobre mí", url: `${site}/sobre-mi` },
      {
        "@type": "Article",
        name: "Conocí el sobrepensamiento antes de estudiarlo",
        url: `${site}/sobrepensamiento-experiencia-personal`,
      },
      {
        "@type": "Article",
        name: "En Minobu entendí que no todo se resuelve pensando más",
        url: `${site}/viaje-monte-minobu-budismo-japon`,
      },
    ],
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
      "Psicólogo en Olivos",
      "Psicologo Olivos",
      "Psicólogo Olivos",
      "Psicologo en Olivos",
      "Psicólogo Vicente López",
      "Psicoanalista zona norte Buenos Aires",
      "Sobrepensamiento",
      "Overthinking",
      "Pensar demasiado",
      "No puedo apagar la cabeza",
      "Ansiedad",
      "Insomnio",
      "Autoexigencia",
      "Perfeccionismo",
      "Dificultad para decidir",
      "Burnout",
      "Mindfulness clínico",
      "Meditación",
      "Budismo japonés",
      "Minobu",
      "Suminagashi",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "@id": `${site}/#practice`,
    name: "Lic. Nicolás Quiroga — Psicólogo y psicoanalista clínico en Olivos y online",
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
    email: "lic.nicolasquiroga@outlook.com",
    founder: { "@id": `${site}/sobre-mi#nicolas-quiroga` },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: [...professionalProfiles, `https://wa.me/${phone}`],
    description:
      "Psicólogo y psicoanalista clínico en Olivos y online. Sesiones individuales para sobrepensamiento, ansiedad e insomnio, incorporando mindfulness y meditación cuando ayudan a ubicar cuerpo y respiración.",
    knowsAbout: [
      "Psicólogo en Olivos",
      "Psicoanalista en Olivos",
      "Sobrepensamiento",
      "Ansiedad",
      "Insomnio",
      "Autoexigencia",
      "Psicoanálisis online",
      "Mindfulness clínico",
    ],
    availableService: [
      {
        "@type": "MedicalTherapy",
        "@id": `${site}/psicoanalista-olivos#service`,
        name: "Psicólogo en Olivos y psicoanálisis clínico presencial",
        description:
          "Atención presencial en Olivos, Vicente López, para adultos con sobrepensamiento, ansiedad, insomnio, autoexigencia y repetición.",
        areaServed: { "@type": "City", name: "Olivos" },
        url: `${site}/psicoanalista-olivos`,
      },
      {
        "@type": "MedicalTherapy",
        "@id": `${site}/psicoanalisis-online#service`,
        name: "Psicoanálisis clínico online",
        description:
          "Sesiones online para Argentina y exterior, con encuadre psicoanalítico y recursos de mindfulness o meditación cuando tienen sentido clínico.",
        areaServed: { "@type": "Country", name: "Argentina" },
        url: `${site}/psicoanalisis-online`,
      },
      {
        "@type": "MedicalTherapy",
        "@id": `${site}/no-puedo-apagar-la-cabeza#service`,
        name: "Consulta por sobrepensamiento y ansiedad",
        description:
          "Primera entrevista para ubicar sobrepensamiento, ansiedad, insomnio, autoexigencia o dificultad para apagar la cabeza.",
        areaServed: [
          { "@type": "City", name: "Olivos" },
          { "@type": "Country", name: "Argentina" },
        ],
        url: `${site}/no-puedo-apagar-la-cabeza`,
      },
    ],
    potentialAction: {
      "@type": "ContactAction",
      target: [contactUrl, `https://wa.me/${phone}`],
      name: "Agendar primera entrevista",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site}/#website`,
    name: "Lic. Nicolás Quiroga — Psicólogo en Olivos y psicoanalista clínico",
    url: site,
    inLanguage: "es-AR",
    about: { "@id": `${site}/#practice` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${site}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const aiProfilePage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site}/llms.txt#ai-summary`,
    name: "Resumen para asistentes de IA sobre Nicolás Quiroga",
    url: `${site}/llms.txt`,
    inLanguage: "es-AR",
    about: { "@id": `${site}/#practice` },
    mainEntity: { "@id": `${site}/sobre-mi#nicolas-quiroga` },
  };

  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#F1E9DC" />
      <meta name="author" content="Nicolás Quiroga" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={pageUrl} />
      <link rel="alternate" type="text/plain" href={`${site}/llms.txt`} title="Resumen para asistentes de IA" />
      <link rel="alternate" type="application/json" href={`${site}/ai-profile.json`} title="Perfil estructurado de Nicolás Quiroga" />
      {/* OG por defecto */}
      <meta property="og:site_name" content="Lic. Nicolás Quiroga · Psicoanalista clínico (M.N. 59.272)" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Nicolás Quiroga, psicoanalista clínico en su estudio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={defaultImage} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(person)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
      <script type="application/ld+json">{JSON.stringify(aiProfilePage)}</script>
    </Helmet>
  );
}
