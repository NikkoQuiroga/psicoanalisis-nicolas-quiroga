import React, { useState } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ShieldCheck,
  MapPin,
  ChevronDown,
  ChevronUp,
  GraduationCap,
} from "lucide-react";
import AgendaForm from "../components/AgendaForm.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import Section from "../components/Section.jsx";
import ProfileSlide from "../components/ProfileSlide.jsx";
import { motion } from "framer-motion";
import { posts } from "../blog/posts.js";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
export default function Home() {
  const [openCV, setOpenCV] = useState(false);
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>
          Psicólogo en Olivos y psicólogo online en Buenos Aires — Lic. Nicolás
          Quiroga
        </title>
        <meta
          name="description"
          content="Psicólogo y psicoanalista en Olivos y online en Buenos Aires. Lic. Rodrigo Nicolás Quiroga Martínez (M.N. 59.272). Terapia individual para ansiedad, duelos, vínculos, autoestima y sentido personal."
        />
        <meta
          name="keywords"
          content="psicólogo en Olivos, psicoanalista online, psicólogo online Buenos Aires, psicoterapia online Argentina, terapia individual ansiedad, terapia para duelos, psicólogo Vicente López, psicoterapia en CABA, psicólogo para vínculos, terapia virtual, autoestima"
        />
        <meta
          property="og:image"
          content="/media/lic-rodrigo-nicolas-quiroga-martinez.webp"
        />
        <meta
          property="og:image:alt"
          content="Retrato del psicoanalista Rodrigo Nicolás Quiroga Martínez en su consultorio"
        />
      </Helmet>

      {/* Hero — mobile-first */}
      <Section className="pt-6 pb-12 md:pt-10 md:pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6 }}
          >
            <h1 className="h-serif text-[2rem] leading-tight font-semibold sm:text-[2.5rem] md:text-5xl">
              Psicoanálisis clínico
              <span className="block font-light">en Olivos y online</span>
            </h1>
            <p className="mt-4 text-sumi/75 max-w-prose text-base">
              Soy psicólogo y psicoanalista (M.N. 59.272). Trabajo con un
              modelo integrador: profundidad psicoanalítica + recursos basados
              en evidencia (mindfulness, respiración y logoterapia) para que
              avances con alivio real y cambios sostenibles.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 font-semibold text-white shadow-soft">
                Honorario por sesión: $35.000 ARS
              </span>
              <a
                href="#agenda"
                className="inline-flex items-center gap-2 rounded-full border border-transparent bg-sumi px-4 py-2 font-medium text-white shadow hover:bg-sumi/90"
              >
                Agenda tu sesión
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-black/5 bg-white shadow-md"
          >
            <img
              src="/media/lic-rodrigo-nicolas-quiroga-martinez.webp"
              alt="Rodrigo Nicolás Quiroga Martínez, psicólogo y psicoanalista en Olivos"
              loading="eager"
              fetchpriority="high"
              className="h-full w-full object-cover [filter:saturate(.9)_contrast(1.05)]"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/40" />
          </motion.div>
        </div>
      </Section>

      <Section className="pb-2 md:pb-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-moss/20 bg-moss/5 p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-sumi/70">
              ¿Para qué hacer terapia?
            </p>
            <h2 className="mt-2 text-xl md:text-2xl font-semibold">
              Para que lo que hoy te pesa deje de ordenar tu vida
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                "Bajar ansiedad y recuperar calma en el día a día.",
                "Entender patrones que se repiten en vínculos, trabajo o decisiones.",
                "Atravesar duelos, crisis o cambios sin quedar solo con la angustia.",
                "Tomar decisiones con más claridad, deseo propio y menos culpa.",
              ].map((item) => (
                <p
                  key={item}
                  className="rounded-2xl border border-black/5 bg-white/80 px-4 py-3 text-sm text-sumi/85 flex items-start gap-2"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-4 md:pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-black/5 bg-white/70 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-sumi/70">
              Confianza profesional
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-1">
              {[
                {
                  icon: GraduationCap,
                  title: "Formación sólida",
                  desc: "Licenciatura UBA + posgrados clínicos.",
                },
                 {
                  icon: GraduationCap,
                  title: "Formación sólida",
                  desc: "Licenciatura UBA + posgrados clínicos.",
                },
                 {
                  icon: GraduationCap,
                  title: "Formación sólida",
                  desc: "Licenciatura UBA + posgrados clínicos.",
                },
                 {
                  icon: GraduationCap,
                  title: "Formación sólida",
                  desc: "Licenciatura UBA + posgrados clínicos.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-white p-4"
                >
                  <item.icon className="h-5 w-5 text-moss" />
                  <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-xs text-sumi/70">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Story-telling en 4 capas */}
          <Section className="pb-10 md:pb-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-4 md:grid-cols-4">
              {[
                {
                  t: "Llegás con algo que duele",
                  d: "Partimos de la urgencia y la leemos desde el psicoanálisis para entender qué la sostiene en tu historia y en tu cuerpo.",
                },
                {
                  t: "Hacemos foco psicoanalítico",
                  d: "Identificamos repeticiones, exigencias y fantasías. Ordenamos qué es urgente y qué necesita un trabajo de fondo.",
                },
                {
                  t: "Herramientas a medida",
                  d: "Sumo recursos breves (respiración, mindfulness, escritura guiada) para que tengas alivio mientras avanzamos en profundidad clínica.",
                },
                {
                  t: "Seguimiento claro",
                  d: "Definimos juntos la frecuencia y los objetivos. Cada pocas semanas revisamos avances para que el proceso psicoanalítico sea sostenible.",
                },
              ].map((x, i) => (
            <motion.article
              key={x.t}
              className="rounded-2xl border border-black/5 bg-white/60 p-5 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            >
              <h3 className="font-medium flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> {x.t}
              </h3>
              <p className="mt-1 text-sm text-sumi/75">{x.d}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-sumi/70">
                Blog
              </p>
              <h2 className="mt-1 text-2xl md:text-3xl font-semibold">
                Últimos posteos
              </h2>
              <p className="mt-2 text-sm text-sumi/75">
                Referencias de lectura para profundizar ideas que también
                trabajamos en sesión.
              </p>
            </div>
            <Link
              to="/blog"
              className="shrink-0 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium hover:bg-sumi hover:text-white transition"
            >
              Ver todos
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.05 * i }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  {post.hero && (
                    <img
                      src={post.hero}
                      alt={post.title}
                      className="h-40 w-full object-cover"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-xs text-sumi/60">
                      {new Date(post.date).toLocaleDateString("es-AR")} ·{" "}
                      {post.readMinutes} min
                    </p>
                    <h3 className="mt-1 text-lg font-semibold group-hover:underline">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-sm text-sumi/70 line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Agenda + Honorarios */}
      <Section id="agenda">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-10 md:pb-16">
          <div className="rounded-3xl border border-black/5 bg-white/80 p-6 shadow">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="md:w-1/2">
                <motion.h2
                  className="text-2xl md:text-3xl font-semibold"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  Agenda tu primera sesión
                </motion.h2>
                <p className="mt-2 text-sm text-sumi/75">
                  Durante el primer mes, propongo{" "}
                  <strong>1 sesión semanal</strong> para entender qué necesitás.
                  Luego, si querés, podemos pasar a{" "}
                  <strong>cada 15 días</strong> y sostener los avances.
                </p>
                <p className="mt-2 text-sm text-sumi/75 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Olivos (Vicente López) y online
                </p>
              </div>
              <div className="md:w-1/2" id="agenda-form">
                <AgendaForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Acá va el c.v. */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 -mt-4 mb-2">
        <button
          onClick={() => {
            const next = !openCV;
            setOpenCV(next);
            try {
              window.gtag && window.gtag("event", "cv_toggle", { open: next });
            } catch {}
            try {
              window.fbq &&
                window.fbq("trackCustom", "CvToggle", { open: next });
            } catch {}
            if (next) {
              setTimeout(() => {
                document
                  .getElementById("cv-anchor")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 50);
            }
          }}
          aria-expanded={openCV}
          aria-controls="cv-anchor"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs hover:bg-white"
        >
          {openCV ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
          {openCV
            ? "Ocultar C.V., cursos y hobbies"
            : "Ver C.V., cursos y hobbies"}
        </button>

        <div id="cv-anchor" className="mt-3" />
        <ProfileSlide open={openCV} />
      </section>

      {/* Testimonios */}
      <Section className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-16">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Testimonios
          </motion.h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <TestimonialCard
              quote="Me sentí escuchada sin apuro. Empecé a dormir mejor con pequeños cambios en la rutina."
              name="María S."
              meta="34 — Insomnio"
            />
            <TestimonialCard
              quote="Logré poner palabras a algo que repetía hace años. Me ayudó a ordenar decisiones."
              name="Julián R."
              meta="41 — Ansiedad"
            />
            <TestimonialCard
              quote="Las sesiones online me resultaron naturales. Pude trabajar un duelo que evitaba."
              name="Lucía V."
              meta="29 — Duelo"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
