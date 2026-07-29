import fs from "node:fs";
import path from "node:path";

const site = "https://nicolasquiroga.com.ar";
const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");
const defaultImage = "/media/nicolas-quiroga-estudio-clinico.webp";

const staticPages = [
  {
    path: "/",
    title: "Psicólogo en Olivos y psicoanalista clínico — Nicolás Quiroga",
    description:
      "Nicolás Quiroga, psicólogo en Olivos y psicoanalista clínico. Atención presencial y online para sobrepensamiento, ansiedad, insomnio y repetición.",
    type: "website",
    priority: "1.0",
    changefreq: "monthly",
    lastmod: "2026-07-27",
    image: "/media/nicolas-quiroga-estudio-clinico.webp",
  },
  {
    path: "/psicoanalista-olivos",
    title: "Psicólogo en Olivos | Psicoanalista clínico — Nicolás Quiroga",
    description:
      "Psicólogo en Olivos, Vicente López. Psicoanalista clínico para sobrepensamiento, ansiedad, insomnio, autoexigencia y repetición.",
    type: "website",
    priority: "0.9",
    changefreq: "monthly",
    lastmod: "2026-07-27",
    image: "/media/consultorio-psicoanalisis-olivos-divan.webp",
  },
  {
    path: "/psicoanalisis-online",
    title: "Psicólogo online | Psicoanálisis para sobrepensamiento",
    description:
      "Psicólogo online y psicoanalista clínico. Sesiones para sobrepensamiento, ansiedad, insomnio y repetición en Argentina y exterior.",
    type: "website",
    priority: "0.9",
    changefreq: "monthly",
    lastmod: "2026-07-27",
    image: "/media/nicolas-quiroga-estudio-clinico.webp",
  },
  {
    path: "/contacto",
    title: "Contacto | Psicólogo en Olivos — Lic. Nicolás Quiroga",
    description:
      "Contacto para primera consulta con Nicolás Quiroga, psicólogo en Olivos y psicoanalista clínico. Atención presencial y online para sobrepensamiento, ansiedad e insomnio.",
    type: "website",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-06-20",
  },
  {
    path: "/sobrepensamiento-overthinking",
    title: "Sobrepensamiento y ansiedad | Psicólogo en Olivos",
    description:
      "Psicólogo en Olivos y online para sobrepensamiento, ansiedad, insomnio y autoexigencia. Psicoanálisis clínico con recursos de mindfulness cuando ayudan.",
    type: "website",
    priority: "0.95",
    changefreq: "monthly",
    lastmod: "2026-07-27",
    image: "/media/nicolas-quiroga-estudio-clinico.webp",
  },
  {
    path: "/no-puedo-apagar-la-cabeza",
    title: "No podés apagar la cabeza | Psicólogo en Olivos y online",
    description:
      "Psicólogo en Olivos y online para adultos con sobrepensamiento, ansiedad e insomnio. Psicoanálisis clínico con recursos de mindfulness y meditación.",
    type: "website",
    priority: "0.95",
    changefreq: "monthly",
    lastmod: "2026-07-27",
    image: "/media/nicolas-quiroga-estudio-clinico.webp",
  },
  {
    path: "/sobre-mi",
    title: "Sobre mí — Nicolás Quiroga, psicólogo en Olivos",
    description:
      "Nicolás Quiroga, psicólogo en Olivos y psicoanalista clínico. Formación UBA, psicoanálisis lacaniano, mindfulness, meditación y budismo japonés.",
    type: "website",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-07-27",
    image: "/media/nicolas-quiroga-estudio-clinico.webp",
  },
  {
    path: "/faq",
    title: "Preguntas frecuentes | Psicólogo en Olivos — Nicolás Quiroga",
    description:
      "Preguntas frecuentes sobre atención psicológica y psicoanálisis con Nicolás Quiroga en Olivos y online: modalidad, honorarios, confidencialidad y encuadre.",
    type: "website",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-06-20",
  },
  {
    path: "/ubicacion",
    title: "Psicólogo en Olivos | Ubicación del consultorio — Nicolás Quiroga",
    description:
      "Consultorio de Nicolás Quiroga, psicólogo en Olivos y psicoanalista clínico. Atención presencial en Vicente López y sesiones online.",
    type: "website",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-06-20",
  },
  {
    path: "/testimonios",
    title: "Testimonios de pacientes — Psicólogo en Olivos | Nicolás Quiroga",
    description:
      "Reseñas públicas de pacientes sobre Nicolás Quiroga, psicólogo en Olivos y psicoanalista clínico online. 5/5 en BuscoPsi y Doctoralia.",
    type: "website",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-07-01",
  },
  {
    path: "/legal/politica-de-privacidad",
    title: "Política de privacidad — Nicolás Quiroga",
    description: "Cómo trato tus datos personales en este sitio y durante el contacto inicial.",
    type: "website",
    priority: "0.2",
    changefreq: "yearly",
    lastmod: "2026-06-20",
  },
  {
    path: "/legal/terminos-y-condiciones",
    title: "Términos y condiciones — Nicolás Quiroga",
    description: "Condiciones de uso del sitio y de los canales de contacto.",
    type: "website",
    priority: "0.2",
    changefreq: "yearly",
    lastmod: "2026-06-20",
  },
  {
    path: "/legal/consentimiento-informado",
    title: "Consentimiento informado — Nicolás Quiroga",
    description: "Información sobre encuadre clínico, confidencialidad, límites y modalidad de atención.",
    type: "website",
    priority: "0.2",
    changefreq: "yearly",
    lastmod: "2026-06-20",
  },
];

const pages = [...staticPages];

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}

function absoluteUrl(pagePath) {
  return `${site}${pagePath === "/" ? "/" : pagePath}`;
}

function absoluteAsset(assetPath) {
  if (!assetPath) return `${site}${defaultImage}`;
  if (/^https?:\/\//.test(assetPath)) return assetPath;
  return `${site}${assetPath.startsWith("/") ? assetPath : `/${assetPath}`}`;
}

function replaceOrInsert(html, pattern, replacement, before = "</head>") {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace(before, `    ${replacement}\n  ${before}`);
}

function schemaForPage(page) {
  const url = absoluteUrl(page.path);
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
      ...(page.path === "/"
          ? []
          : [{ "@type": "ListItem", position: 2, name: page.title.replace(" — Nicolás Quiroga", ""), item: url }]),
    ],
  };

  return [
    breadcrumbs,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.description,
      url,
      inLanguage: "es-AR",
    },
  ];
}

function renderJsonLd(page) {
  return schemaForPage(page)
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .join("\n    ");
}

function renderPage(template, page) {
  const url = absoluteUrl(page.path);
  const image = absoluteAsset(page.image);
  let html = template;

  html = replaceOrInsert(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeAttribute(page.title)}</title>`);
  html = replaceOrInsert(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttribute(page.description)}" />`,
  );
  html = replaceOrInsert(html, /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`);
  html = replaceOrInsert(html, /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escapeAttribute(page.title)}" />`);
  html = replaceOrInsert(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeAttribute(page.description)}" />`,
  );
  html = replaceOrInsert(html, /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/, `<meta property="og:type" content="${page.type}" />`);
  html = replaceOrInsert(html, /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`);
  html = replaceOrInsert(html, /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${image}" />`);
  html = replaceOrInsert(html, /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${escapeAttribute(page.title)}" />`);
  html = replaceOrInsert(
    html,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeAttribute(page.description)}" />`,
  );
  html = replaceOrInsert(html, /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/, `<meta name="twitter:image" content="${image}" />`);
  html = html.replace("</head>", `    ${renderJsonLd(page)}\n  </head>`);

  return html;
}

function renderSitemap() {
  const entries = pages
    .map(
      (page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

if (!fs.existsSync(templatePath)) {
  throw new Error("Build output not found. Run this script after vite build.");
}

const template = fs.readFileSync(templatePath, "utf8");

for (const page of pages) {
  const outputDir = page.path === "/" ? distDir : path.join(distDir, page.path.slice(1));
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), renderPage(template, page));
}

const sitemap = renderSitemap();
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.resolve("public/sitemap.xml"), sitemap);

console.log(`Generated SEO HTML for ${pages.length} routes and sitemap.xml.`);
