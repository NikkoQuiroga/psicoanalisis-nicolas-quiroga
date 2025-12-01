import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "@dr.pogodin/react-helmet";
import { posts } from "../blog/posts.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="h-serif text-2xl font-semibold">Artículo no encontrado</h1>
        <p className="mt-2 text-sumi/70">
          Volver al <Link to="/blog" className="underline">blog</Link>.
        </p>
      </section>
    );
  }

  const { title, description, date, readMinutes, tags, hero, Component } = post;
  const site = import.meta.env.VITE_SITE_URL || "";
  const url = `${site}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Person", name: "Nicolás Quiroga" },
    datePublished: date,
    image: hero ? [`${site}${hero}`] : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${site}/blog` },
      { "@type": "ListItem", position: 2, name: title, item: url },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title} — Blog</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        {hero && <meta property="og:image" content={`${site}${hero}`} />}
        <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="w-full border-b border-black/5 bg-white/60">
        <div className="mx-auto max-w-3xl px-5 py-8 md:py-10">
          <p className="text-xs text-sumi/60">{new Date(date).toLocaleDateString("es-AR")} · {readMinutes} min</p>
          <h1 className="h-serif mt-1 text-3xl md:text-4xl font-semibold">{title}</h1>
          {tags?.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2 text-[11px] text-sumi/70">
              {tags.map((t) => (
                <li key={t} className="rounded-full border border-black/5 bg-white/70 px-2.5 py-1">{t}</li>
              ))}
            </ul>
          )}
        </div>
        {hero ? (
          <img src={hero} alt="" className="mx-auto max-w-5xl w-full h-56 md:h-72 object-cover" />
        ) : (
          <div
            className="mx-auto max-w-5xl h-40 md:h-56"
            style={{
              background:
                "linear-gradient(180deg,#F7F4EF,transparent), radial-gradient(50% 70% at 20% 10%, #BFA06A 0%, transparent 60%), radial-gradient(40% 50% at 90% 20%, #B48B7D 0%, transparent 55%)",
            }}
          />
        )}
      </section>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-5 py-10">
        <Component />
        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
          <Link to="/agenda" className="inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 hover:bg-white">
            Agenda una primera sesión
          </Link>
          <Link to="/blog" className="text-sumi/60 underline">← Volver al blog</Link>
        </div>
      </section>
    </>
  );
}
