import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ShieldCheck,
  MapPin,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Award,
  BadgeCheck,
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
  const blogPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  const blogSliderRef = useRef(null);

  useEffect(() => {
    const slider = blogSliderRef.current;
    if (!slider) return;

    let rafId;
    let direction = 1;
    let userIsInteracting = false;
    const speed = 0.3;

    const tick = () => {
      if (!slider || userIsInteracting) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (maxScroll <= 0) { rafId = requestAnimationFrame(tick); return; }
      if (slider.scrollLeft >= maxScroll - 1) direction = -1;
      if (slider.scrollLeft <= 1) direction = 1;
      slider.scrollLeft += speed * direction;
      rafId = requestAnimationFrame(tick);
    };

    let interactionTimeoutId;
    const stopInteraction = () => {
      userIsInteracting = true;
      window.clearTimeout(interactionTimeoutId);
      interactionTimeoutId = window.setTimeout(() => { userIsInteracting = false; }, 1400);
    };

    slider.addEventListener("touchstart", stopInteraction, { passive: true });
    slider.addEventListener("touchmove", stopInteraction, { passive: true });
    slider.addEventListener("wheel", stopInteraction, { passive: true });
    slider.addEventListener("pointerdown", stopInteraction);
    slider.addEventListener("pointerup", stopInteraction);
    slider.addEventListener("scroll", stopInteraction, { passive: true });

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(interactionTimeoutId);
      slider.removeEventListener("touchstart", stopInteraction);
      slider.removeEventListener("touchmove", stopInteraction);
      slider.removeEventListener("wheel", stopInteraction);
      slider.removeEventListener("pointerdown", stopInteraction);
      slider.removeEventListener("pointerup", stopInteraction);
      slider.removeEventListener("scroll", stopInteraction);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Lic. Nicolás Quiroga — Psicoanalista clínico en Olivos y online
        </title>
        <meta
          name="description"
          content="Lic. Nicolás Quiroga (M.N. 59.272), psicoanalista clínico en Olivos y online. Sesiones individuales con reserva absoluta. Para quienes atraviesan momentos que no saben cómo nombrar."
        />
        <meta
          name="keywords"
          content="psicoanalista clínico, psicoanalista Olivos, psicoanalista online Argentina, psicoanalista zona norte Buenos Aires, psicoanalista Vicente López, psicoanálisis confidencial"
        />
        <meta
          property="og:image"
          content="/media/lic-rodrigo-nicolas-quiroga-martinez.webp"
        />
        <meta
          property="og:image:alt"
          content="Lic. Nicolás Quiroga, psicoanalista clínico en Olivos"
        />
      </Helmet>

      {/* Hero */}
      <Section className="pt-6 pb-12 md:pt-10 md:pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6 }}
          >
            <h1 className="h-serif text-[2rem] leading-tight font-semibold sm:text-[2.5rem] md:text-5xl">
              Lic. Nicolás Quiroga
              <span className="block font-light">Psicoanalista clínico</span>
            </h1>
            <p className="mt-4 text-sumi/75 max-w-prose text-base">
              Trabajo con personas que atraviesan momentos que no saben cómo nombrar. Decisiones difíciles, presión sostenida, algo que empezó a fallar sin razón aparente. Sesiones individuales. Online o en Olivos. Reserva absoluta.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
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
              alt="Lic. Nicolás Quiroga, psicoanalista clínico en Olivos"
              loading="eager"
              fetchpriority="high"
              className="h-full w-full object-cover [filter:saturate(.9)_contrast(1.05)]"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/40" />
          </motion.div>
        </div>
      </Section>

      {/* Último artículo destacado */}
      <Section className="pb-4 md:pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            to={`/blog/${blogPosts[0].slug}`}
            className="group block overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="md:flex">
              {blogPosts[0].hero && (
                <div className="md:w-2/5 shrink-0">
                  <img
                    src={blogPosts[0].hero}
                    alt={blogPosts[0].title}
                    className="h-52 w-full object-cover md:h-full"
                  />
                </div>
              )}
              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-sumi/60 mb-2">
                    Último artículo del blog
                  </p>
                  <h2 className="h-serif text-2xl md:text-3xl font-semibold leading-snug group-hover:underline">
                    {blogPosts[0].title}
                  </h2>
                  <p className="mt-3 text-sm text-sumi/70 leading-relaxed line-clamp-3">
                    {blogPosts[0].description}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xs text-sumi/50">
                    {new Date(blogPosts[0].date).toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}
                    {" · "}{blogPosts[0].readMinutes} min
                  </p>
                  <span className="text-sm font-medium text-sumi flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Section>

      {/* Cómo pienso la clínica */}
      <Section className="pb-4 md:pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="rounded-3xl border border-black/5 bg-white/80 p-6 md:p-8 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-sumi/70">
              Mi mirada
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              Cómo pienso la clínica
            </h2>
            <div className="mt-4 space-y-3 text-sumi/80 leading-relaxed max-w-2xl">
              <p>
                El objetivo del proceso es que puedas sentirte mejor — y también entender por qué duele lo que duele. El alivio importa, y también el trabajo sobre lo que lo genera. No son cosas opuestas.
              </p>
              <p>
                Trabajo con hipótesis clínicas y protocolos de intervención. Cada sesión tiene una dirección. No es escucha pasiva a la espera de que algo aparezca: es un proceso activo, con objetivos definidos y revisados con quien consulta.
              </p>
              <p>
                La frecuencia, el foco y la duración se ajustan según el momento y lo que cada persona necesita. Algunos procesos duran meses, otros más. Eso se define en el camino, con criterio clínico.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Blog — posición elevada, más presencia */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-12">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-sumi/70">
                Lecturas
              </p>
              <h2 className="mt-1 text-2xl md:text-3xl font-semibold">
                Blog de psicoanálisis
              </h2>
              <p className="mt-2 text-sm text-sumi/75 max-w-lg">
                Artículos sobre clínica, síntoma, cultura y deseo — la misma materia que aparece en sesión.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:bg-sumi hover:text-white sm:w-auto"
            >
              Ver todos los artículos
            </Link>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 text-xs text-sumi/60 sm:hidden">
            <span>Deslizá para leer más artículos</span>
            <span aria-hidden="true">→</span>
          </div>
          <div className="relative">
            <div
              ref={blogSliderRef}
              className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 pr-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Blog de psicoanálisis"
            >
              {blogPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: 0.05 * i }}
                  className="min-w-[78%] snap-start sm:min-w-[65%] md:min-w-[40%] lg:min-w-[32%]"
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
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-ivory to-transparent sm:hidden" />
          </div>
        </div>
      </Section>

      {/* ¿Es para mí? */}
      <Section className="pb-2 md:pb-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-moss/20 bg-moss/5 p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-sumi/70">
              Para quién
            </p>
            <h2 className="mt-2 text-xl md:text-2xl font-semibold">
              El psicoanálisis clínico, ¿es para mí?
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                "Cuando algo se repite — en vínculos, trabajo o cuerpo — y no entendés por qué.",
                "Cuando aparece el síntoma: angustia, inhibición, un malestar que no tiene causa clara.",
                "Para hacer algo con un duelo, una crisis o una ruptura que no termina de cerrar.",
                "Para escuchar qué quiere tu deseo, más allá de lo que creés que querés.",
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

      {/* Formación */}
      <Section className="pb-4 md:pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-black/5 bg-white/70 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-sumi/70">
              Formación
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {[
                {
                  icon: GraduationCap,
                  title: "Formación clínica",
                  desc: "Lic. en Psicología (UBA) + Psicoanálisis en ALEF.",
                },
                {
                  icon: Award,
                  title: "13 años de clínica",
                  desc: "Trayectoria sostenida en procesos analíticos individuales.",
                },
                {
                  icon: BadgeCheck,
                  title: "Matrícula nacional activa",
                  desc: "M.N. 59.272. Atención presencial en Olivos y online.",
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

      {/* El trabajo analítico */}
      <Section className="pb-10 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-4 md:grid-cols-4">
          {[
            {
              t: "El síntoma trae algo",
              d: "La consulta empieza por lo que duele, lo que insiste o lo que no puede dejar de hacerse. Ese es el punto de entrada.",
            },
            {
              t: "El inconsciente habla",
              d: "Escuchamos lo que el lenguaje trae: las repeticiones, los sueños, los lapsus, lo que aparece sin que uno lo busque.",
            },
            {
              t: "La palabra opera",
              d: "La interpretación no explica: abre. Algo se desplaza, algo se afloja. El sujeto empieza a leer su propio texto.",
            },
            {
              t: "El tiempo es del análisis",
              d: "No hay pasos fijos ni manuales. El proceso dura lo que el analizante necesite — puede ser meses o años.",
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

      {/* Agenda */}
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
                <p className="mt-3 text-sm text-sumi/75">
                  Trabajo con quienes atraviesan momentos de presión, decisiones difíciles o algo que empezó a fallar sin razón aparente. El proceso es individual — sin modelo estándar.
                </p>
                <p className="mt-3 text-sm text-sumi/75">
                  Primer mes:{" "}
                  <strong>1 sesión semanal</strong> para delimitar el campo de trabajo. Luego podemos pasar a{" "}
                  <strong>cada 15 días</strong>.
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

      {/* CV */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 -mt-4 mb-2">
        <button
          onClick={() => {
            const next = !openCV;
            setOpenCV(next);
            try { window.gtag && window.gtag("event", "cv_toggle", { open: next }); } catch {}
            try { window.fbq && window.fbq("trackCustom", "CvToggle", { open: next }); } catch {}
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
          {openCV ? "Ocultar C.V., cursos y hobbies" : "Ver C.V., cursos y hobbies"}
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
