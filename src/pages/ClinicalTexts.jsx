import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, MessageCircle } from "lucide-react";
import { clinicalTextList } from "../content/clinicalTexts.js";

export default function ClinicalTexts() {
  const site = (import.meta.env.VITE_SITE_URL || "https://nicolasquiroga.com.ar").replace(/\/$/, "");
  const url = `${site}/blog`;

  return (
    <>
      <Helmet>
        <title>Textos clínicos | Psicólogo en Olivos — Nicolás Quiroga</title>
        <meta
          name="description"
          content="Textos clínicos de Nicolás Quiroga sobre sobrepensamiento, ansiedad, insomnio, angustia existencial y psicoanálisis online."
        />
        <link rel="canonical" href={url} />
      </Helmet>

      <section className="relative overflow-hidden border-b border-black/10 bg-[#F1E9DC]">
        <img
          src="/media/suminagashi-tinta-pensamiento.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07] mix-blend-multiply"
        />
        <div className="relative mx-auto max-w-5xl px-5 py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sumi/55">
            Textos clínicos
          </p>
          <h1 className="h-serif mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Algunas formas de nombrar eso que insiste.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-sumi/75 md:text-lg">
            No son consejos rápidos. Son textos para rodear preguntas que aparecen en consulta:
            sobrepensamiento, ansiedad, insomnio, angustia, repetición y psicoanálisis online.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-10 md:py-14">
        <div className="grid gap-4 md:grid-cols-2">
          {clinicalTextList.map((text) => (
            <Link
              key={text.slug}
              to={text.path}
              className="group rounded-2xl border border-black/10 bg-white/72 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white"
            >
              <BookOpen className="h-5 w-5 text-moss" />
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-sumi/45">
                {text.readingTime}
              </p>
              <h2 className="h-serif mt-2 text-2xl font-semibold leading-tight">
                {text.shortTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-sumi/68">
                {text.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
                Leer texto
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="rounded-3xl border border-black/10 bg-sumi p-6 text-washi md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Primera consulta
          </p>
          <h2 className="h-serif mt-3 text-3xl font-semibold">
            Si algo de esto te toca, no hace falta llegar con todo ordenado.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-washi/70">
            Podemos empezar por una frase, una escena, una duda o ese cansancio de pensar
            demasiado y no poder cortar.
          </p>
          <a
            href="https://wa.me/5491161402223?text=Hola%20Nicol%C3%A1s%2C%20le%C3%AD%20un%20texto%20en%20tu%20sitio%20y%20quer%C3%ADa%20consultar."
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-sumi"
          >
            <MessageCircle className="h-4 w-4" />
            Escribirme por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

