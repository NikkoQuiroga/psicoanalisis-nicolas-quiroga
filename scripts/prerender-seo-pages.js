import fs from "node:fs";
import path from "node:path";
import { posts } from "../src/blog/posts.js";

const site = "https://nicolasquiroga.com.ar";
const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");
const defaultImage = "/media/lic-rodrigo-nicolas-quiroga-martinez.webp";
const linkedInUrl = "https://www.linkedin.com/in/lic-nicolas-quiroga";
const academicWorkUrl = "https://www.aacademica.org/jornadas.psicopatologia.30.aniversario/101";

const staticPages = [
  {
    path: "/",
    title: "Lic. Nicolás Quiroga — Psicoanalista clínico en Olivos y online",
    description:
      "Lic. Nicolás Quiroga (M.N. 59.272), psicoanalista clínico en Olivos y online. Sesiones individuales con reserva absoluta.",
    type: "website",
    priority: "1.0",
    changefreq: "monthly",
    lastmod: "2026-06-20",
  },
  {
    path: "/psicoanalista-olivos",
    title: "Psicoanalista en Olivos — Lic. Nicolás Quiroga",
    description:
      "Psicoanalista en Olivos, Vicente López. Sesiones presenciales y online con Nicolás Quiroga, M.N. 59.272.",
    type: "website",
    priority: "0.9",
    changefreq: "monthly",
    lastmod: "2026-06-20",
    image: "/media/lic-nicolas-quiroga-psicoanalista-olivos.webp",
  },
  {
    path: "/psicoanalisis-online",
    title: "Psicoanálisis online en Argentina — Lic. Nicolás Quiroga",
    description:
      "Psicoanálisis online para Argentina y exterior. Sesiones individuales por videollamada con encuadre clínico y reserva absoluta.",
    type: "website",
    priority: "0.9",
    changefreq: "monthly",
    lastmod: "2026-06-20",
    image: "/media/lic-nicolas-quiroga-psicoanalisis-online.webp",
  },
  {
    path: "/contacto",
    title: "Contacto · Agendá tu primera sesión — Lic. Nicolás Quiroga",
    description:
      "Agendá tu primera sesión con Nicolás Quiroga, psicoanalista clínico en Olivos y online. Formulario de contacto, WhatsApp y email.",
    type: "website",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-06-20",
  },
  {
    path: "/sobre-mi",
    title: "Sobre mí — Nicolás Quiroga, psicoanalista lacaniano",
    description:
      "Nicolás Quiroga, psicoanalista lacaniano. Formación, mirada clínica, producción académica, lecturas, podcast y proyectos periféricos.",
    type: "website",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-06-28",
  },
  {
    path: "/blog",
    title: "Blog de psicoanálisis lacaniano — Nicolás Quiroga",
    description:
      "Artículos sobre psicoanálisis lacaniano, clínica, síntoma, angustia y cultura. Lecturas para pensar lo que no cierra.",
    type: "website",
    priority: "0.9",
    changefreq: "weekly",
    lastmod: "2026-06-20",
  },
  {
    path: "/faq",
    title: "Preguntas frecuentes sobre psicoanálisis — Nicolás Quiroga",
    description:
      "Modalidad online y presencial, primera sesión, honorarios, confidencialidad y forma de trabajo clínico.",
    type: "website",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-06-20",
  },
  {
    path: "/ubicacion",
    title: "Consultorio en Olivos y sesiones online — Nicolás Quiroga",
    description:
      "Ubicación del consultorio en Olivos, Vicente López, y modalidad online para Argentina y exterior.",
    type: "website",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-06-20",
  },
  {
    path: "/testimonios",
    title: "Testimonios — Nicolás Quiroga",
    description:
      "Experiencias de pacientes sobre el proceso terapéutico, la modalidad online y la atención clínica.",
    type: "website",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-06-20",
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

const blogPages = posts.map((post) => ({
  path: `/blog/${post.slug}`,
  title: `${post.title} — Nicolás Quiroga`,
  description: post.description,
  type: "article",
  image: post.hero,
  priority: "0.8",
  changefreq: "yearly",
  lastmod: post.date,
  article: post,
}));

const pages = [...staticPages, ...blogPages];

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
  const image = absoluteAsset(page.image);
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
      ...(page.path.startsWith("/blog/")
        ? [
            { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
            { "@type": "ListItem", position: 3, name: page.article?.title || page.title, item: url },
          ]
        : page.path === "/"
          ? []
          : [{ "@type": "ListItem", position: 2, name: page.title.replace(" — Nicolás Quiroga", ""), item: url }]),
    ],
  };

  if (page.type === "article" && page.article) {
    return [
      breadcrumbs,
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: page.article.title,
        description: page.article.description,
        image: [image],
        datePublished: page.article.date,
        dateModified: page.article.date,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: {
          "@type": "Person",
          name: "Nicolás Quiroga",
          jobTitle: "Psicoanalista clínico",
          url: site,
          sameAs: [linkedInUrl, academicWorkUrl],
        },
        publisher: {
          "@type": "Person",
          name: "Nicolás Quiroga",
          url: site,
        },
      },
    ];
  }

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

fs.writeFileSync(path.join(distDir, "sitemap.xml"), renderSitemap());

console.log(`Generated SEO HTML for ${pages.length} routes and sitemap.xml.`);
