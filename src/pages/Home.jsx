import React, { useState } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import {
  CheckCircle2,
  ShieldCheck,
  MapPin,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Microscope,
  BookText,
  BadgeCheck,
} from "lucide-react";
import AgendaForm from "../components/AgendaForm.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import Section from "../components/Section.jsx";
import ProfileSlide from "../components/ProfileSlide.jsx";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
export default function Home() {
  const [openCV, setOpenCV] = useState(false);

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
                "Lic. en Psicología (UBA)",
                "Sesiones de 45 minutos",
                "Posgrados en psicoanálisis y mindfulness",
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

      <Section className="pb-4 md:pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-black/5 bg-white/70 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-sumi/70">
              Confianza profesional
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Formación sólida",
                  desc: "Licenciatura UBA + posgrados clínicos.",
                },
                {
                  icon: Microscope,
                  title: "Herramientas basadas en evidencia",
                  desc: "Protocolos breves para ansiedad y regulación.",
                },
                {
                  icon: BookText,
                  title: "Actualización constante",
                  desc: "Estudio continuo en clínica contemporánea.",
                },
                {
                  icon: BadgeCheck,
                  title: "Matrícula nacional activa",
                  desc: "M.N. 59.272 con práctica en consultorio y online.",
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

      {/* Orientación y enfoque */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-14 grid gap-6 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-sumi/70">
              Psicólogo en Olivos · Psicólogo online
            </p>
            <h2 className="mt-1 text-2xl md:text-3xl font-semibold">
              Un enfoque integrador para que la terapia sea clara y accionable
            </h2>
            <p className="mt-3 text-sm text-sumi/75 leading-relaxed">
              Trabajo desde el psicoanálisis contemporáneo con herramientas
              breves y basadas en evidencia. Esto significa que combinamos la
              profundidad de la historia personal con recursos prácticos que
              podés aplicar entre sesiones. El foco está en entender lo que te
              pasa y darte estrategias concretas para ansiedad, duelos,
              inseguridades en vínculos o bloqueos profesionales.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-sumi/80">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-moss" />
                Terapia individual presencial en Olivos (Vicente López) o
                videollamada segura con audio encriptado.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-moss" />
                Sesiones de 45 minutos con agenda flexible y seguimiento cada
                cuatro semanas.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-moss" />
                Experiencia en ansiedad, duelos, estrés laboral, autoestima,
                relaciones y sensación de vacío.
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <h3 className="text-lg font-semibold">
              Cómo es trabajar conmigo
            </h3>
            <ol className="mt-3 space-y-3 text-sm text-sumi/80 list-decimal list-inside">
              <li>
                Primera sesión diagnóstica: definimos objetivos, frecuencia y
                necesidades (presencial en Olivos u online).
              </li>
              <li>
                Plan breve de regulación: ejercicios de respiración,
                mindfulness y escritura guiada para aliviar síntomas.
              </li>
              <li>
                Profundización psicoanalítica: exploramos repeticiones, deseos y
                límites para sostener cambios en el tiempo.
              </li>
              <li>
                Revisión periódica: cada pocas semanas evaluamos avances para
                que la terapia siga siendo útil y ajustada a tu vida.
              </li>
            </ol>
            <div className="mt-4 rounded-2xl bg-gold/10 border border-gold/30 p-4">
              <p className="text-sm font-medium text-sumi">
                Palabras clave que me buscan pacientes:
              </p>
              <p className="mt-1 text-sm text-sumi/75">
                psicólogo en Olivos, psicólogo online Buenos Aires, terapia
                para ansiedad, psicólogo para duelos, psicólogo Vicente López,
                psicólogo para vínculos.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 md:py-12">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-black/5 bg-sumi text-white p-6 md:p-8 shadow-md">
              <p className="text-xs uppercase tracking-[0.2em] text-white/75">
                Autoridad clínica
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                Un marco de trabajo serio, humano y verificable
              </h2>
              <p className="mt-3 text-sm text-white/85 max-w-prose">
                La terapia funciona mejor cuando hay método, vínculo y
                seguimiento. Por eso mi trabajo combina evaluación inicial,
                hipótesis clínica, herramientas concretas entre sesiones y
                revisión periódica de resultados.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-gold" />
                  Primera sesión diagnóstica con objetivos claros.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-gold" />
                  Intervenciones ajustadas a tu momento vital.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-gold" />
                  Revisión de avances cada 4 semanas.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-gold/30 bg-gold/10 p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-semibold">Perfil académico visible</h3>
              <p className="mt-2 text-sm text-sumi/75">
                Si querés reforzar la percepción de autoridad sin perder
                autenticidad, este sitio puede mostrar: participaciones en
                jornadas, clases, certificaciones y publicaciones breves.
              </p>
              <div className="mt-4 space-y-3 text-sm text-sumi/80">
                <div className="rounded-2xl border border-black/5 bg-white/80 p-3">
                  <p className="font-medium">Docencia y conferencias</p>
                  <p className="text-xs mt-1">
                    Sumá fotos reales de clases, charlas o seminarios para
                    aumentar confianza.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white/80 p-3">
                  <p className="font-medium">Producción escrita</p>
                  <p className="text-xs mt-1">
                    Destacá artículos del blog con enfoque clínico y evidencia.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white/80 p-3">
                  <p className="font-medium">Transparencia profesional</p>
                  <p className="text-xs mt-1">
                    Matrícula, enfoque y límites del tratamiento en lenguaje
                    claro.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
