import { testimonials, reviewProfiles } from "../content/testimonials.js";
import { SITE_URL } from "../seo/site.js";
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, MessageCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };
const MotionArticle = motion.article;



export default function Testimonios() {
  const site = SITE_URL;
  const url = `${site}/testimonios`;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Testimonios de pacientes — Nicolás Quiroga",
    description:
      "Reseñas públicas sobre Nicolás Quiroga, psicoanalista en Olivos y online, tomadas de perfiles externos como BuscoPsi y Doctoralia.",
    url,
    inLanguage: "es-AR",
    about: {
      "@type": "Psychologist",
      name: "Lic. Nicolás Quiroga",
      areaServed: ["Olivos", "Vicente López", "Argentina"],
    },
  };

  return (
    <>
      <Helmet>
        <title>Testimonios de pacientes — Psicólogo en Olivos | Nicolás Quiroga</title>
        <meta
          name="description"
          content="Reseñas públicas de pacientes sobre Nicolás Quiroga, psicólogo en Olivos y psicoanalista clínico online. Opiniones publicadas en BuscoPsi y Doctoralia."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Testimonios de pacientes — Nicolás Quiroga" />
        <meta
          property="og:description"
          content="Reseñas públicas sobre psicoanálisis en Olivos y online, tomadas de BuscoPsi y Doctoralia."
        />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-5 py-10 md:py-14">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-sumi/60">Reseñas públicas</p>
          <h1 className="h-serif mt-2 text-3xl font-semibold md:text-5xl">
            Testimonios de pacientes
          </h1>
          <p className="mt-4 text-sumi/70 leading-relaxed">
            Reseñas escritas en perfiles externos. Las reproduzco con referencia a la
            plataforma donde fueron publicadas, para que puedan consultarse en su contexto.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <aside className="rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Opiniones por plataforma</h2>
            <div className="mt-5 grid gap-3 text-sm">
              {reviewProfiles.map(profile => <a key={profile.name} href={profile.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-black/10 bg-white p-4 hover:border-gold"><span className="block font-semibold">{profile.name} · {profile.rating}</span><span className="mt-1 block text-sumi/70">{profile.count} · Leer en la plataforma</span></a>)}
            </div>
          </aside>

          <div className="grid gap-4">
            {testimonials.map((testimonial, i) => (
              <MotionArticle
                key={`${testimonial.source}-${testimonial.name}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.18) }}
                className="rounded-3xl border border-black/5 bg-white/80 p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-base font-semibold">{testimonial.name}</h2>
                    <a
                      href={testimonial.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-xs text-sumi/50 underline-offset-2 hover:underline"
                    >
                      Publicado en {testimonial.source}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <div className="flex items-center gap-0.5 text-gold" aria-label="5 estrellas">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-sumi/75">{testimonial.quote}</p>
              </MotionArticle>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-black/5 bg-sumi p-6 text-white shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                Primera entrevista
              </p>
              <h2 className="h-serif mt-2 text-2xl font-semibold leading-tight md:text-3xl">
                Si algo de esto te resuena, podemos ubicarlo en una primera consulta.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                No hace falta llegar con una explicación cerrada. A veces alcanza con
                empezar por eso que vuelve, pesa o no termina de encontrar nombre.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a
                href="https://wa.me/5491161402223?text=Hola%20Nicol%C3%A1s%2C%20le%C3%AD%20los%20testimonios%20y%20quer%C3%ADa%20consultar%20por%20una%20primera%20sesi%C3%B3n."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-sumi transition hover:bg-gold2"
              >
                <MessageCircle className="h-4 w-4" />
                Escribir por WhatsApp
              </a>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-sumi"
              >
                Ver formas de contacto
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
