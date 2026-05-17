import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { posts } from "../blog/posts.js";

const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

function formatDate(d) {
  return new Date(d).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getRelated(current, count = 3) {
  const currentTags = new Set(current.tags || []);
  return sorted
    .filter((p) => p.slug !== current.slug)
    .map((p) => ({
      ...p,
      score: (p.tags || []).filter((t) => currentTags.has(t)).length,
    }))
    .sort((a, b) => b.score - a.score || new Date(b.date) - new Date(a.date))
    .slice(0, count);
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="h-serif text-2xl font-semibold">Artículo no encontrado</h1>
        <p className="mt-2 text-sumi/70">
          Volver al{" "}
          <Link to="/blog" className="underline">
            blog
          </Link>
          .
        </p>
      </section>
    );
  }

  const { title, description, date, readMinutes, tags, hero, Component } = post;
  const site = import.meta.env.VITE_SITE_URL || "";
  const url = `${site}/blog/${post.slug}`;
  const related = getRelated(post);

  // Prev / Next in chronological order
  const idx = sorted.findIndex((p) => p.slug === slug);
  const prev = idx < sorted.length - 1 ? sorted[idx + 1] : null;
  const next = idx > 0 ? sorted[idx - 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: "Nicolás Quiroga",
      jobTitle: "Psicoanalista lacaniano",
      url: site,
    },
    datePublished: date,
    image: hero ? [`${site}${hero}`] : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    publisher: {
      "@type": "Person",
      name: "Nicolás Quiroga",
      url: site,
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: site },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title} — Nicolás Quiroga</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        {hero && <meta property="og:image" content={`${site}${hero}`} />}
        {hero && <meta property="og:image:alt" content={title} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {hero && <meta name="twitter:image" content={`${site}${hero}`} />}
        <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero header */}
      <motion.section
        className="w-full border-b border-black/5 bg-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mx-auto max-w-3xl px-5 py-8 md:py-10">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-xs text-sumi/50">
            <Link to="/" className="hover:text-sumi">Inicio</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-sumi">Blog</Link>
            <span>/</span>
            <span className="line-clamp-1 text-sumi/70">{title}</span>
          </nav>

          <div className="flex items-center gap-3 text-xs text-sumi/60">
            <span>{formatDate(date)}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {readMinutes} min de lectura
            </span>
          </div>
          <h1 className="h-serif mt-2 text-3xl md:text-4xl font-semibold leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-sumi/70 leading-relaxed max-w-2xl">{description}</p>

          {tags?.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-black/5 bg-white/70 px-2.5 py-1 text-[11px] text-sumi/70"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Hero image */}
        {hero ? (
          <img
            src={hero}
            alt={title}
            className="mx-auto max-w-5xl w-full h-56 md:h-80 object-cover"
          />
        ) : (
          <div
            className="mx-auto max-w-5xl h-40 md:h-56"
            style={{
              background:
                "linear-gradient(180deg,#F7F4EF,transparent), radial-gradient(50% 70% at 20% 10%, #BFA06A 0%, transparent 60%), radial-gradient(40% 50% at 90% 20%, #B48B7D 0%, transparent 55%)",
            }}
          />
        )}
      </motion.section>

      {/* Body */}
      <motion.section
        className="mx-auto max-w-3xl px-5 py-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        {/* Article content */}
        <div className="prose prose-sumi max-w-none">
          <Component />
        </div>

        {/* Author box */}
        <div className="mt-12 flex items-start gap-4 rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gold/20 ring-1 ring-gold/30">
            <img
              src="/media/lic-rodrigo-nicolas-quiroga-martinez.webp"
              alt="Nicolás Quiroga"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-sm">Nicolás Quiroga</p>
            <p className="text-xs text-sumi/60 mt-0.5">
              Psicoanalista lacaniano · M.N. 59.272 · Olivos y online
            </p>
            <p className="text-xs text-sumi/70 mt-2 leading-relaxed">
              Escribo sobre lo que aparece en la clínica: síntoma, angustia, repetición, deseo.
              Sin manual ni protocolo — solo escucha.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-3xl border border-gold/30 bg-gold/5 p-6 text-center">
          <p className="text-sumi/80 font-medium">
            Si algo de esto resuena, se puede trabajar en sesión.
          </p>
          <p className="mt-1 text-sm text-sumi/60">
            Psicoanálisis lacaniano · Olivos y online
          </p>
          <a
            href="/#agenda"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-sumi px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-sumi/90"
          >
            Agenda tu primera sesión
          </a>
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <div className="mt-8 grid grid-cols-2 gap-3">
            {prev ? (
              <Link
                to={`/blog/${prev.slug}`}
                className="group flex flex-col gap-1 rounded-2xl border border-black/5 bg-white/70 p-4 hover:bg-white transition"
              >
                <span className="flex items-center gap-1 text-xs text-sumi/50">
                  <ArrowLeft className="h-3 w-3" /> Anterior
                </span>
                <span className="text-sm font-medium leading-snug line-clamp-2 group-hover:underline">
                  {prev.title}
                </span>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                to={`/blog/${next.slug}`}
                className="group flex flex-col items-end gap-1 rounded-2xl border border-black/5 bg-white/70 p-4 hover:bg-white transition text-right"
              >
                <span className="flex items-center gap-1 text-xs text-sumi/50">
                  Siguiente <ArrowRight className="h-3 w-3" />
                </span>
                <span className="text-sm font-medium leading-snug line-clamp-2 group-hover:underline">
                  {next.title}
                </span>
              </Link>
            ) : <div />}
          </div>
        )}

        {/* Back */}
        <div className="mt-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-sumi/60 hover:text-sumi"
          >
            <ArrowLeft className="h-4 w-4" /> Volver al blog
          </Link>
        </div>
      </motion.section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-black/5 bg-white/40 py-12">
          <div className="mx-auto max-w-5xl px-5">
            <p className="text-xs uppercase tracking-[0.22em] text-sumi/60 mb-4">
              También puede interesarte
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  {p.hero && (
                    <img
                      src={p.hero}
                      alt={p.title}
                      className="h-32 w-full object-cover"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-xs text-sumi/50 mb-1">
                      {p.readMinutes} min
                    </p>
                    <h3 className="text-sm font-semibold leading-snug group-hover:underline line-clamp-2">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
