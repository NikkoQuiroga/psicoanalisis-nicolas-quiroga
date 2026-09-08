import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { clinicalTexts } from "../content/clinicalTexts.js";

export default function ClinicalTextArticle() {
  const { slug } = useParams();
  const text = clinicalTexts[slug];
  const site = (import.meta.env.VITE_SITE_URL || "https://nicolasquiroga.com.ar").replace(/\/$/, "");

  if (!text) return <Navigate to="/blog" replace />;

  const url = `${site}${text.path}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: text.shortTitle,
    name: text.title,
    description: text.description,
    datePublished: text.datePublished,
    dateModified: text.dateModified,
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
    about: text.keywords.map((keyword) => ({ "@type": "Thing", name: keyword })),
  };

  return (
    <>
      <Helmet>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />
        <meta name="keywords" content={text.keywords.join(", ")} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={text.title} />
        <meta property="og:description" content={text.description} />
        <meta property="og:url" content={url} />
        <meta property="article:published_time" content={text.datePublished} />
        <meta property="article:modified_time" content={text.dateModified} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <article>
        <header className="relative overflow-hidden border-b border-black/10 bg-[#F1E9DC]">
          <img
            src="/media/suminagashi-tinta-pensamiento.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.065] mix-blend-multiply"
          />
          <div className="relative mx-auto max-w-[48rem] px-5 py-10 md:py-16">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-sumi/65 hover:text-sumi">
              <ArrowLeft className="h-4 w-4" />
              Textos clínicos
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-sumi/55">
              {text.readingTime}
            </p>
            <h1 className="h-serif mt-3 text-4xl font-semibold leading-tight md:text-6xl">
              {text.shortTitle}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-sumi/75 md:text-lg">
              {text.lead}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-[44rem] px-5 py-10 md:py-14">
          <div className="prose-lite max-w-none">
            {text.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <aside className="mt-10 rounded-3xl border border-black/10 bg-white/72 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sumi/45">
              Consulta
            </p>
            <h2 className="h-serif mt-2 text-3xl font-semibold">
              Si esto toca algo de tu historia, podemos trabajarlo.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-sumi/70">
              Atiendo como psicólogo en Olivos y online. La primera entrevista sirve
              para ubicar qué está pasando y si este encuadre tiene sentido para vos.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5491161402223?text=Hola%20Nicol%C3%A1s%2C%20le%C3%AD%20un%20texto%20en%20tu%20sitio%20y%20quer%C3%ADa%20consultar."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sumi px-5 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <Link to="/psicologo-olivos" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold">
                Psicólogo en Olivos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
