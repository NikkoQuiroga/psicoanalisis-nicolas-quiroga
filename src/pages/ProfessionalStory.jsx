import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
} from "lucide-react";
import {
  getNextStory,
  professionalStories,
} from "../content/professionalStories.js";

function formatDate(date) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

export default function ProfessionalStory({ slug }) {
  const story = professionalStories[slug];

  if (!story) return null;

  const nextStory = getNextStory(slug);
  const site = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
  const pageUrl = `${site}${story.path}`;
  const imageUrl = `${site}${story.image}`;
  const authorId = `${site}/sobre-mi#nicolas-quiroga`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: story.heading,
    name: story.title,
    description: story.description,
    image: [imageUrl],
    datePublished: story.datePublished,
    dateModified: story.dateModified,
    inLanguage: "es-AR",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    author: {
      "@type": "Person",
      "@id": authorId,
      name: "Nicolás Quiroga",
      url: `${site}/sobre-mi`,
    },
    publisher: {
      "@type": "Person",
      "@id": authorId,
      name: "Nicolás Quiroga",
    },
    about: story.topics.map((topic) => ({ "@type": "Thing", name: topic })),
    isPartOf: {
      "@type": "WebSite",
      "@id": `${site}/#website`,
      name: "Nicolás Quiroga — Psicólogo y psicoanalista clínico",
      url: site,
    },
  };

  return (
    <>
      <Helmet>
        <title>{story.title}</title>
        <meta name="description" content={story.description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={story.title} />
        <meta property="og:description" content={story.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={story.imageAlt} />
        <meta property="article:published_time" content={story.datePublished} />
        <meta property="article:modified_time" content={story.dateModified} />
        <meta property="article:author" content="Nicolás Quiroga" />
        <meta name="twitter:title" content={story.title} />
        <meta name="twitter:description" content={story.description} />
        <meta name="twitter:image" content={imageUrl} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <article itemScope itemType="https://schema.org/Article">
        <header className="relative overflow-hidden border-b border-black/10 bg-[#F1E9DC]">
          <img
            src="/media/suminagashi-tinta-pensamiento.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.065] mix-blend-multiply"
          />
          <div className="relative mx-auto max-w-6xl px-5 py-8 md:py-14">
            <nav aria-label="Migas de pan" className="mb-7 flex flex-wrap items-center gap-2 text-xs text-sumi/55">
              <Link to="/" className="hover:text-sumi">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link to="/sobre-mi" className="hover:text-sumi">Sobre mí</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{story.label}</span>
            </nav>

            <div className="grid gap-8 md:grid-cols-[1.08fr_0.92fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sumi/55">
                  {story.eyebrow}
                </p>
                <h1 itemProp="headline" className="h-serif mt-3 max-w-4xl text-4xl font-semibold leading-[1.02] md:text-6xl">
                  {story.heading}
                </h1>
                <p itemProp="description" className="mt-5 max-w-3xl text-base leading-relaxed text-sumi/75 md:text-lg">
                  {story.lead}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-sumi/60">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Publicado el {formatDate(story.datePublished)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" />
                    Lectura: {story.readingTime}
                  </span>
                </div>
              </div>

              <figure className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-soft">
                <img
                  itemProp="image"
                  src={story.image}
                  alt={story.imageAlt}
                  loading="eager"
                  fetchPriority="high"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="border-t border-black/10 px-4 py-3 text-xs leading-relaxed text-sumi/55">
                  {story.imageCaption}
                </figcaption>
              </figure>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-9 px-5 py-10 md:grid-cols-[minmax(0,1fr)_17rem] md:items-start md:py-16">
          <div className="mx-auto w-full max-w-[46rem]">
            <blockquote className="h-serif border-l-4 border-gold bg-white/65 px-5 py-4 text-2xl leading-snug text-sumi md:text-3xl">
              {story.highlight}
            </blockquote>

            <div itemProp="articleBody" className="prose-lite mt-9 max-w-none">
              {story.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>

            {story.gallery && (
              <section aria-labelledby="galeria-minobu" className="mt-10">
                <h2 id="galeria-minobu" className="h-serif text-3xl font-semibold">
                  Imágenes de la experiencia en Minobu
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {story.gallery.map((image) => (
                    <figure key={image.src} className="overflow-hidden rounded-2xl border border-black/10 bg-white/70">
                      <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                      <figcaption className="p-3 text-xs leading-relaxed text-sumi/60">
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            <aside className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-5 text-sm leading-relaxed text-sumi/65">
              <p className="font-semibold text-sumi">Nota sobre este relato</p>
              <p className="mt-2">{story.note}</p>
            </aside>
          </div>

          <aside className="space-y-4 md:sticky md:top-28">
            <section className="rounded-2xl border border-black/10 bg-white/70 p-5">
              <BookOpen className="h-5 w-5 text-moss" />
              <h2 className="mt-3 font-semibold">Sobre el autor</h2>
              <p className="mt-2 text-sm leading-relaxed text-sumi/65">
                Nicolás Quiroga es psicólogo, psicoanalista clínico y M.N. 59.272. Atiende en Olivos y online.
              </p>
              <Link to="/sobre-mi" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
                Ver perfil y formación
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/50 p-5">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sumi/55">Temas</h2>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Temas del artículo">
                {story.topics.map((topic) => (
                  <li key={topic} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-sumi/70">
                    {topic}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>

        <footer className="border-y border-black/10 bg-white/55">
          <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-2">
            <Link
              to={story.serviceLink}
              className="group rounded-2xl border border-black/10 bg-white/75 p-5 transition hover:bg-white"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-sumi/50">Seguir por acá</span>
              <span className="mt-2 flex items-center justify-between gap-3 font-semibold">
                {story.serviceLabel}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              to={nextStory.path}
              className="group rounded-2xl border border-black/10 bg-[#F1E9DC] p-5 transition hover:bg-white"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-sumi/50">Próximo relato</span>
              <span className="mt-2 flex items-center justify-between gap-3 font-semibold">
                {nextStory.shortTitle}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
          <div className="mx-auto max-w-6xl px-5 pb-8">
            <Link to="/sobre-mi" className="inline-flex items-center gap-2 text-sm text-sumi/65 hover:text-sumi">
              <ArrowLeft className="h-4 w-4" />
              Volver a mi recorrido
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}
