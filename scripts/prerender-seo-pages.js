import fs from "node:fs";
import path from "node:path";
import { storyList } from "../src/content/professionalStories.js";
import { faqCategories } from "../src/content/faq.js";
import { clinicalTextList } from "../src/content/clinicalTexts.js";

const site = "https://nicolasquiroga.com.ar";
const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");
const defaultImage = "/media/nicolas-quiroga-estudio-clinico.webp";
const faqItems = faqCategories.flatMap(category => category.items.map(item => [item.q, item.a]));

const staticPages = [
  {
    path: "/",
    title: "Psicoanálisis online y psicólogo en Olivos — Nicolás Quiroga",
    description:
      "Nicolás Quiroga, psicólogo en Olivos y psicoanalista clínico. Atención presencial y online para sobrepensamiento, ansiedad, insomnio y repetición.",
    type: "website",
    priority: "1.0",
    changefreq: "monthly",
    lastmod: "2026-10-14",
    image: "/media/nicolas-quiroga-estudio-clinico.webp",
  },
  {
    path: "/psicologo-olivos",
    title: "Psicólogo en Olivos | Psicoanalista clínico — Nicolás Quiroga",
    description:
      "Psicólogo en Olivos, Vicente López. Atención presencial y online para sobrepensamiento, ansiedad, insomnio, autoexigencia y repetición.",
    type: "website",
    priority: "1.0",
    changefreq: "monthly",
    lastmod: "2026-09-07",
    image: "/media/consultorio-psicoanalisis-olivos-divan.webp",
  },
  {
    path: "/blog",
    title: "Textos clínicos | Psicólogo en Olivos — Nicolás Quiroga",
    description:
      "Textos clínicos de Nicolás Quiroga sobre sobrepensamiento, ansiedad, insomnio, angustia existencial y psicoanálisis online.",
    type: "website",
    priority: "0.85",
    changefreq: "monthly",
    lastmod: "2026-09-07",
    image: "/media/suminagashi-tinta-pensamiento.webp",
  },
  {
    path: "/psicoanalisis-online",
    title: "Psicoanálisis online en Argentina | Nicolás Quiroga",
    description:
      "Psicólogo online y psicoanalista clínico. Sesiones para sobrepensamiento, ansiedad, insomnio y repetición en Argentina y exterior.",
    type: "website",
    priority: "0.9",
    changefreq: "monthly",
    lastmod: "2026-10-14",
    image: "/media/nicolas-quiroga-estudio-clinico.webp",
  },
  {
    path: "/contacto",
    title: "Primera entrevista online y en Olivos | Nicolás Quiroga",
    description:
      "Contacto para primera consulta con Nicolás Quiroga, psicólogo en Olivos y psicoanalista clínico. Atención presencial y online para sobrepensamiento, ansiedad e insomnio.",
    type: "website",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-10-14",
  },
  {
    path: "/sobrepensamiento-overthinking",
    title: "Sobrepensamiento y ansiedad | Psicólogo en Olivos",
    description:
      "Psicólogo en Olivos y online para sobrepensamiento, ansiedad, insomnio y autoexigencia. Psicoanálisis clínico con recursos de mindfulness cuando ayudan.",
    type: "website",
    priority: "0.95",
    changefreq: "monthly",
    lastmod: "2026-10-14",
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
    lastmod: "2026-10-14",
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
    lastmod: "2026-10-14",
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
    lastmod: "2026-10-14",
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

const storyPages = storyList.map((story) => ({
  path: story.path,
  title: story.title,
  description: story.description,
  type: "article",
  priority: "0.75",
  changefreq: "yearly",
  lastmod: story.dateModified,
  image: story.image,
  story,
}));

const clinicalTextPages = clinicalTextList.map((text) => ({
  path: text.path,
  title: text.title,
  description: text.description,
  type: "article",
  priority: "0.75",
  changefreq: "yearly",
  lastmod: text.dateModified,
  image: "/media/suminagashi-tinta-pensamiento.webp",
  clinicalText: text,
}));

const pages = [...staticPages, ...clinicalTextPages, ...storyPages];

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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

  const schemas = [
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

  if (page.path === "/sobre-mi") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${url}#profile-page`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "es-AR",
      mainEntity: {
        "@type": "Person",
        "@id": `${url}#nicolas-quiroga`,
        name: "Nicolás Quiroga",
        alternateName: "Rodrigo Nicolás Quiroga Martínez",
        jobTitle: "Psicólogo y psicoanalista clínico",
        identifier: "M.N. 59.272",
        url,
        image: absoluteAsset("/media/nicolas-quiroga-estudio-clinico.webp"),
      },
    });
  }

  if (page.path === "/faq") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      url,
      inLanguage: "es-AR",
      mainEntity: faqItems.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    });
  }

  if (page.story) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: page.story.heading,
      name: page.story.title,
      description: page.story.description,
      image: [absoluteAsset(page.story.image)],
      datePublished: page.story.datePublished,
      dateModified: page.story.dateModified,
      inLanguage: "es-AR",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: {
        "@type": "Person",
        "@id": `${site}/sobre-mi#nicolas-quiroga`,
        name: "Nicolás Quiroga",
        url: `${site}/sobre-mi`,
      },
      publisher: {
        "@type": "Person",
        "@id": `${site}/sobre-mi#nicolas-quiroga`,
        name: "Nicolás Quiroga",
      },
      about: page.story.topics.map((topic) => ({ "@type": "Thing", name: topic })),
    });
  }

  if (page.clinicalText) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: page.clinicalText.shortTitle,
      name: page.clinicalText.title,
      description: page.clinicalText.description,
      datePublished: page.clinicalText.datePublished,
      dateModified: page.clinicalText.dateModified,
      inLanguage: "es-AR",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: {
        "@type": "Person",
        "@id": `${site}/sobre-mi#nicolas-quiroga`,
        name: "Nicolás Quiroga",
        url: `${site}/sobre-mi`,
      },
      publisher: {
        "@type": "Person",
        "@id": `${site}/sobre-mi#nicolas-quiroga`,
        name: "Nicolás Quiroga",
      },
      about: page.clinicalText.keywords.map((keyword) => ({ "@type": "Thing", name: keyword })),
    });
  }

  return schemas;
}

function renderJsonLd(page) {
  return schemaForPage(page)
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .join("\n    ");
}

function renderStaticStory(story) {
  const gallery = story.gallery
    ? `<section aria-labelledby="static-gallery" class="mt-10">
        <h2 id="static-gallery" class="h-serif text-3xl font-semibold">Imágenes de la experiencia en Minobu</h2>
        <div class="mt-5 grid gap-4 sm:grid-cols-3">
          ${story.gallery
            .map(
              (image) => `<figure class="overflow-hidden rounded-2xl border border-black/10 bg-white/70">
            <img src="${escapeAttribute(image.src)}" alt="${escapeAttribute(image.alt)}" class="aspect-[4/5] w-full object-cover" />
            <figcaption class="p-3 text-xs leading-relaxed text-sumi/60">${escapeHtml(image.caption)}</figcaption>
          </figure>`,
            )
            .join("\n")}
        </div>
      </section>`
    : "";

  return `<article itemscope itemtype="https://schema.org/Article">
    <header class="border-b border-black/10 bg-[#F1E9DC]">
      <div class="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-14">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-sumi/55">${escapeHtml(story.eyebrow)}</p>
          <h1 itemprop="headline" class="h-serif mt-3 text-4xl font-semibold leading-[1.02] md:text-6xl">${escapeHtml(story.heading)}</h1>
          <p itemprop="description" class="mt-5 text-base leading-relaxed text-sumi/75 md:text-lg">${escapeHtml(story.lead)}</p>
          <p class="mt-5 text-xs text-sumi/60">Por Nicolás Quiroga · Publicado el 15 de agosto de 2026 · Lectura: ${escapeHtml(story.readingTime)}</p>
        </div>
        <figure class="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-soft">
          <img itemprop="image" src="${escapeAttribute(story.image)}" alt="${escapeAttribute(story.imageAlt)}" class="aspect-[4/3] w-full object-cover" />
          <figcaption class="border-t border-black/10 px-4 py-3 text-xs leading-relaxed text-sumi/55">${escapeHtml(story.imageCaption)}</figcaption>
        </figure>
      </div>
    </header>
    <div class="mx-auto max-w-[46rem] px-5 py-10 md:py-16">
      <blockquote class="h-serif border-l-4 border-gold bg-white/65 px-5 py-4 text-2xl leading-snug text-sumi md:text-3xl">${escapeHtml(story.highlight)}</blockquote>
      <div itemprop="articleBody" class="prose-lite mt-9 max-w-none">
        ${story.sections
          .map(
            (section) => `<section>
          <h2>${escapeHtml(section.heading)}</h2>
          ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n")}
        </section>`,
          )
          .join("\n")}
      </div>
      ${gallery}
      <aside class="mt-10 rounded-2xl border border-black/10 bg-white/60 p-5 text-sm leading-relaxed text-sumi/65">
        <p class="font-semibold text-sumi">Nota sobre este relato</p>
        <p class="mt-2">${escapeHtml(story.note)}</p>
      </aside>
    </div>
  </article>`;
}

function renderStaticClinicalText(text) {
  return `<article itemscope itemtype="https://schema.org/Article">
    <header class="border-b border-black/10 bg-[#F1E9DC]">
      <div class="mx-auto max-w-[48rem] px-5 py-10 md:py-16">
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-sumi/55">Texto clínico · ${escapeHtml(text.readingTime)}</p>
        <h1 itemprop="headline" class="h-serif mt-3 text-4xl font-semibold leading-tight md:text-6xl">${escapeHtml(text.shortTitle)}</h1>
        <p class="mt-3 text-sm text-sumi/65">Por <a href="/sobre-mi">Nicolás Quiroga</a> · Psicólogo, M.N. 59.272</p>
        <p itemprop="description" class="mt-5 text-base leading-relaxed text-sumi/75 md:text-lg">${escapeHtml(text.lead)}</p>
      </div>
    </header>
    <div class="mx-auto max-w-[44rem] px-5 py-10 md:py-14">
      <div itemprop="articleBody" class="prose-lite max-w-none">
        ${text.sections
          .map(
            (section) => `<section>
          <h2>${escapeHtml(section.heading)}</h2>
          ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n")}
        </section>`,
          )
          .join("\n")}
      </div>
      <aside class="mt-10 rounded-3xl border border-black/10 bg-white/72 p-6 shadow-sm">
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-sumi/45">Consulta</p>
        <h2 class="h-serif mt-2 text-3xl font-semibold">Si esto toca algo de tu historia, podemos trabajarlo.</h2>
        <p class="mt-3 text-sm leading-relaxed text-sumi/70">Atiendo como psicólogo en Olivos y online. La primera entrevista sirve para ubicar qué está pasando y si este encuadre tiene sentido para vos.</p>
        <p><a href="/psicoanalisis-online">Consultar por psicoanálisis online</a></p>
      </aside>
    </div>
  </article>`;
}

function renderStaticClinicalTextsIndex() {
  return `<main>
    <section class="border-b border-black/10 bg-[#F1E9DC]">
      <div class="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-sumi/55">Textos clínicos</p>
        <h1 class="h-serif mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Algunas formas de nombrar eso que insiste.</h1>
        <p class="mt-5 max-w-2xl text-base leading-relaxed text-sumi/75 md:text-lg">No son consejos rápidos. Son textos para rodear preguntas que aparecen en consulta: sobrepensamiento, ansiedad, insomnio, angustia, repetición y psicoanálisis online.</p>
      </div>
    </section>
    <section class="mx-auto max-w-5xl px-5 py-10 md:py-14">
      <div class="grid gap-4 md:grid-cols-2">
        ${clinicalTextList
          .map(
            (text) => `<article class="rounded-2xl border border-black/10 bg-white/72 p-5 shadow-sm">
          <h2 class="h-serif text-2xl font-semibold leading-tight"><a href="${escapeAttribute(text.path)}">${escapeHtml(text.shortTitle)}</a></h2>
          <p class="mt-3 text-sm leading-relaxed text-sumi/68">${escapeHtml(text.description)}</p>
        </article>`,
          )
          .join("\n")}
      </div>
    </section>
  </main>`;
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
  if (page.story) {
    html = html.replace(
      "</head>",
      `    <meta property="article:published_time" content="${page.story.datePublished}" />\n    <meta property="article:modified_time" content="${page.story.dateModified}" />\n    <meta property="article:author" content="Nicolás Quiroga" />\n  </head>`,
    );
    html = html.replace('<div id="root"></div>', `<div id="root">${renderStaticStory(page.story)}</div>`);
  }
  if (page.clinicalText) {
    html = html.replace(
      "</head>",
      `    <meta property="article:published_time" content="${page.clinicalText.datePublished}" />\n    <meta property="article:modified_time" content="${page.clinicalText.dateModified}" />\n    <meta property="article:author" content="Nicolás Quiroga" />\n  </head>`,
    );
    html = html.replace('<div id="root"></div>', `<div id="root">${renderStaticClinicalText(page.clinicalText)}</div>`);
  }
  if (page.path === "/psicoanalisis-online") {
    html = html.replace('<div id="root"></div>', `<div id="root"><main>
      <h1>Psicoanálisis online para cuando la cabeza no corta.</h1>
      <p>Atención online en Argentina con Nicolás Quiroga, psicólogo y psicoanalista clínico, M.N. 59.272. Consultas por sobrepensamiento, ansiedad, insomnio y autoexigencia.</p>
      <h2>Cómo empezar psicoanálisis online</h2>
      <p>Coordinamos una primera entrevista por videollamada para conversar sobre tu consulta y evaluar si esta modalidad resulta adecuada para vos.</p>
      <h2>Qué necesitás</h2><p>Un lugar privado, conexión estable y teléfono o computadora con cámara y micrófono. El medio de conexión se acuerda al confirmar la entrevista.</p>
      <h2>Honorarios y horarios</h2><p>Sesiones de 40 minutos. $40.000 ARS por sesión para Argentina y USD 35 para exterior. Horario y forma de pago se acuerdan antes de empezar. Las consultas desde el exterior están sujetas a la posibilidad de atención según la normativa local.</p>
      <h2>Si vivís fuera de Argentina</h2><p>Las sesiones son en español. Indicá en qué país vivís y tus horarios posibles para coordinar la diferencia horaria y confirmar si es posible atenderte desde allí. La forma de pago se acuerda antes de empezar.</p>
      <h2>Después de la primera entrevista</h2><p>Conversamos sobre frecuencia y condiciones para sostener el trabajo. La primera entrevista no te obliga a continuar.</p>
      <p><a href="/contacto">Consultar primera entrevista</a></p>
      <p><a href="/blog/psicoanalisis-online-funciona">Leer sobre el encuadre del psicoanálisis online</a></p>
    </main></div>`);
  }
  if (page.path === "/faq") {
    const content = faqCategories.map(category => `<section><h2>${escapeHtml(category.label)}</h2>${category.items.map(item => `<h3>${escapeHtml(item.q)}</h3><p>${escapeHtml(item.a)}</p>`).join("")}</section>`).join("");
    html = html.replace('<div id="root"></div>', `<div id="root"><main><h1>Preguntas frecuentes</h1>${content}<p><a href="/contacto">Consultar primera entrevista</a></p><p><a href="/legal/politica-de-privacidad">Política de privacidad</a></p></main></div>`);
  }
  if (page.path === "/blog") {
    html = html.replace('<div id="root"></div>', `<div id="root">${renderStaticClinicalTextsIndex()}</div>`);
  }
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
