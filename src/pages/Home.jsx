import React, { useState } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import {
  CheckCircle2,
  ShieldCheck,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import AgendaForm from "../components/AgendaForm.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import Section from "../components/Section.jsx";
import ProfileSlide from "../components/ProfileSlide.jsx";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const placeholderPortrait =
  "https://dummyimage.com/1200x1600/0f172a/ffffff.png&text=Rodrigo+Nicolas+Quiroga+Psicologo";

export default function Home() {
  const [openCV, setOpenCV] = useState(false);

  return (
    <>
      <Helmet>
        <title>Psicólogo en Olivos y online — Lic. Nicolás Quiroga</title>
        <meta
          name="description"
          content="Psicoanálisis presencial en Olivos y online con el Lic. Rodrigo Nicolás Quiroga Martínez (M.N. 59.272). Honorario por sesión: $35.000 ARS. Acompañamiento cálido para ansiedad, duelos, vínculos y sentido personal."
        />
        <meta
          name="keywords"
          content="Nicolás Quiroga psicólogo, psicoanálisis en Olivos, Rodrigo Nicolás Quiroga Martínez, psicólogo online Argentina, terapia psicoanalítica, psicólogo Vicente López"
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
              Psicoanálisis y psicoterapia
              <span className="block font-light">en Olivos y online</span>
            </h1>
            <p className="mt-4 text-sumi/75 max-w-prose text-base">
              Soy psicólogo (M.N. 59.272) y acompaño a personas que buscan alivio y claridad. Integro el psicoanálisis con recursos basados en evidencia — respiración consciente, logoterapia, mindfulness — para trabajar ansiedad, duelos, vínculos y momentos de cambio.
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
              <a
                href="/honorarios"
                className="inline-flex items-center gap-2 rounded-full border border-sumi/10 bg-white/80 px-4 py-2 font-medium text-sumi hover:bg-white"
              >
                Ver honorarios y modalidad
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs text-sumi/70">
              {[
                "13 años de experiencia clínica",
                "Sesiones de 45 minutos",
                "Espacio luminoso en Olivos",
                "Atención online cuidada",
              ].map((x) => (
                <li
                  key={x}
                  className="rounded-full border border-black/5 bg-white/70 px-3 py-1"
                >
                  {x}
                </li>
              ))}
            </ul>
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

      {/* Servicios */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-16">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Modalidades y áreas de trabajo
          </motion.h2>
          <p className="mt-2 text-sm text-sumi/70 max-w-prose">
            Presencial en Olivos (Vicente López) y online por videollamada. Un proceso conversado, sin recetas enlatadas, con herramientas prácticas cuando querés alivio rápido.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Ansiedad y angustia",
                desc: "Exploración de la causa y técnicas de regulación para el día a día.",
              },
              {
                title: "Relaciones y vínculos",
                desc: "Patrones repetidos, límites y deseo propio.",
              },
              {
                title: "Duelo y pérdida",
                desc: "Acompañamiento en tiempos de tránsito y re-significación.",
              },
              {
                title: "Exploración personal",
                desc: "Preguntas por el sentido, elecciones y proyectos.",
              },
            ].map((c, i) => (
              <motion.article
                key={c.title}
                className="rounded-2xl border border-black/5 bg-white/60 p-5 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
              >
                <h3 className="font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-moss" /> {c.title}
                </h3>
                <p className="mt-1 text-sm text-sumi/75">{c.desc}</p>
              </motion.article>
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
