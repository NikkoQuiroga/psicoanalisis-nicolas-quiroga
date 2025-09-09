// src/pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "@dr.pogodin/react-helmet";
import { posts } from "../blog/posts.js";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog — Nicolás Quiroga</title>
        <meta name="description" content="Notas sobre psicoanálisis, clínica y cultura japonesa." />
      </Helmet>
      <section className="mx-auto max-w-5xl px-5 py-10">
        <h1 className="h-serif text-3xl font-semibold">Blog</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="group rounded-2xl border border-black/5 bg-white/70 hover:bg-white transition overflow-hidden">
              {p.hero && <img src={p.hero} alt="" className="h-40 w-full object-cover" />}
              <div className="p-4">
                <p className="text-xs text-sumi/60">{new Date(p.date).toLocaleDateString("es-AR")} · {p.readMinutes} min</p>
                <h2 className="mt-1 text-lg font-semibold group-hover:underline">{p.title}</h2>
                <p className="mt-1 text-sm text-sumi/70 line-clamp-2">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
