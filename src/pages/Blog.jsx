import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "@dr.pogodin/react-helmet";
import { motion } from "framer-motion";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { posts } from "../blog/posts.js";

const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

function formatDate(d) {
  return new Date(d).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const [activeTag, setActiveTag] = useState(null);

  // Unique tags, sorted by frequency
  const allTags = useMemo(() => {
    const freq = {};
    sorted.forEach((p) => p.tags?.forEach((t) => { freq[t] = (freq[t] || 0) + 1; }));
    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag)
      .slice(0, 12); // top 12 tags
  }, []);

  const filtered = activeTag
    ? sorted.filter((p) => p.tags?.includes(activeTag))
    : sorted;

  const [featured, ...rest] = filtered;

  return (
    <>
      <Helmet>
        <title>Blog de psicoanálisis lacaniano — Nicolás Quiroga</title>
        <meta
          name="description"
          content="Artículos sobre psicoanálisis lacaniano, clínica, síntoma, angustia y cultura. Lecturas para pensar lo que no cierra."
        />
        <meta
          name="keywords"
          content="blog psicoanálisis lacaniano, artículos psicoanálisis, síntoma angustia, psicoanálisis online Argentina, Lacan"
        />
        <meta property="og:title" content="Blog de psicoanálisis — Nicolás Quiroga" />
        <meta
          property="og:description"
          content="Artículos sobre psicoanálisis lacaniano, síntoma, angustia y cultura."
        />
      </Helmet>

      {/* Header */}
      <div className="border-b border-black/5 bg-white/60">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-xs uppercase tracking-[0.22em] text-sumi/60">Lecturas</p>
          <h1 className="h-serif mt-1 text-3xl md:text-4xl font-semibold">
            Blog de psicoanálisis
          </h1>
          <p className="mt-2 text-sumi/70 max-w-lg">
            Artículos sobre clínica, síntoma, cultura y deseo —
            la misma materia que aparece en sesión.
          </p>
          <p className="mt-1 text-xs text-sumi/50">{sorted.length} artículos</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-8">

        {/* Tag filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTag(null)}
            className={[
              "rounded-full px-3 py-1 text-xs transition border",
              !activeTag
                ? "bg-sumi text-white border-sumi"
                : "border-black/10 bg-white/70 hover:bg-white text-sumi/70",
            ].join(" ")}
          >
            Todos
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={[
                "rounded-full px-3 py-1 text-xs transition border",
                activeTag === tag
                  ? "bg-sumi text-white border-sumi"
                  : "border-black/10 bg-white/70 hover:bg-white text-sumi/70",
              ].join(" ")}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {featured && (
          <motion.div
            key={featured.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to={`/blog/${featured.slug}`}
              className="group block overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="md:flex">
                {featured.hero && (
                  <div className="md:w-2/5 shrink-0">
                    <img
                      src={featured.hero}
                      alt={featured.title}
                      className="h-56 w-full object-cover md:h-full"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <span className="inline-block rounded-full bg-gold/20 px-2.5 py-0.5 text-[11px] font-medium text-sumi/80 mb-3">
                      Último artículo
                    </span>
                    <h2 className="h-serif text-2xl md:text-3xl font-semibold leading-snug group-hover:underline">
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-sumi/70 leading-relaxed line-clamp-3">
                      {featured.description}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-sumi/60">
                      <span>{formatDate(featured.date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {featured.readMinutes} min
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-sumi group-hover:gap-2 transition-all">
                      Leer <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid */}
        {rest.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 * i }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  {post.hero && (
                    <img
                      src={post.hero}
                      alt={post.title}
                      className="h-40 w-full object-cover"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-center gap-2 text-xs text-sumi/55">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span className="flex items-center gap-0.5">
                        <Clock className="h-3 w-3" /> {post.readMinutes} min
                      </span>
                    </div>
                    <h2 className="mt-2 text-base font-semibold leading-snug group-hover:underline flex-1">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-sumi/65 line-clamp-2">
                      {post.description}
                    </p>
                    {post.tags?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-black/5 bg-washi px-2 py-0.5 text-[10px] text-sumi/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="py-16 text-center text-sumi/50">
            No hay artículos con ese tag.
          </p>
        )}

        {/* CTA */}
        <div className="mt-14 rounded-3xl border border-black/5 bg-white/70 p-6 text-center shadow-sm">
          <p className="text-sumi/70 text-sm">
            Si algo de lo que leíste resuena — se puede trabajar en sesión.
          </p>
          <a
            href="/#agenda"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-sumi px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-sumi/90"
          >
            Agenda tu primera sesión
          </a>
        </div>
      </div>
    </>
  );
}
