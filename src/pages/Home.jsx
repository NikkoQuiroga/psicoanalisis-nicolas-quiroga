import React, { useState } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import {
  MapPin,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Award,
  BadgeCheck,
  ArrowRight,
  Headphones,
  PlayCircle,
  Radio,
  Brain,
  MessageSquareText,
  Repeat2,
  Scale,
  BatteryWarning,
  Trophy,
  CircleHelp,
  Star,
  ExternalLink,
} from "lucide-react";
import AgendaForm from "../components/AgendaForm.jsx";
import Section from "../components/Section.jsx";
import ProfileSlide from "../components/ProfileSlide.jsx";
import { motion } from "framer-motion";
import { posts } from "../blog/posts.js";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const spotifyEpisodeUrl = "https://open.spotify.com/episode/0QyLED54OZQJCQ5MC94dGB";
const spotifyEmbedUrl = "https://open.spotify.com/embed/episode/0QyLED54OZQJCQ5MC94dGB?utm_source=generator";
const podcastLinks = {
  spotify: spotifyEpisodeUrl,
  youtube: "",
};

const overthinkingSignals = [
  {
    icon: Brain,
    text: "Pensás demasiado y no podés cortar.",
  },
  {
    icon: MessageSquareText,
    text: "Anticipás conversaciones, errores o escenarios posibles.",
  },
  {
    icon: Scale,
    text: "Dudás de tus decisiones incluso después de haberlas tomado.",
  },
  {
    icon: BatteryWarning,
    text: "Te exigís de más y te cuesta descansar.",
  },
  {
    icon: CircleHelp,
    text: "Llegás al final del día con la cabeza agotada.",
  },
  {
    icon: Trophy,
    text: "Te va bien desde afuera, pero algo no cierra.",
  },
  {
    icon: Repeat2,
    text: "Ya entendiste muchas cosas, pero igual repetís lo mismo.",
  },
];

const reviewProfiles = [
  {
    label: "Doctoralia",
    href: "https://www.doctoraliar.com/nicolas-quiroga/psicologo/olivos",
    rating: "5/5",
    count: "2 opiniones",
  },
  {
    label: "Psychology Today",
    href: "https://www.psychologytoday.com/profile/1783533",
  },
  {
    label: "BuscoPsi",
    href: "https://buscopsi.com/psicologo/nicolas-quiroga/",
    rating: "5/5",
    count: "4 reseñas",
  },
  {
    label: "Psicólogos Buenos Aires",
    href: "https://psicologosbuenosaires.com/nicolas-quiroga-psicoanalista-clinico-para-sobrepensamiento-y-ansiedad-2144",
  },
];

export default function Home() {
  const [openCV, setOpenCV] = useState(false);
  const blogPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  ).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Psicoanálisis para sobrepensamiento en Olivos y online — Nicolás Quiroga</title>
        <meta name="description" content="Psicoanálisis para adultos que no pueden apagar la cabeza. Atención online y presencial en Olivos para sobrepensamiento, ansiedad, autoexigencia, insomnio y dificultad para decidir." />
        <meta name="keywords" content="sobrepensamiento, overthinking, no puedo apagar la cabeza, pensar demasiado, ansiedad, autoexigencia, insomnio, psicoanalista Olivos, psicoanalista online Argentina, psicoanálisis online Argentina" />
        <meta property="og:title" content="Psicoanálisis para sobrepensamiento en Olivos y online — Nicolás Quiroga" />
        <meta property="og:description" content="Psicoanálisis para adultos que no pueden apagar la cabeza. Atención online y presencial en Olivos." />
        <meta property="og:image" content="/media/lic-rodrigo-nicolas-quiroga-martinez.webp" />
        <meta property="og:image:alt" content="Lic. Nicolás Quiroga, psicoanalista clínico en Olivos" />
        <meta name="twitter:title" content="Psicoanálisis para sobrepensamiento en Olivos y online — Nicolás Quiroga" />
        <meta name="twitter:description" content="Psicoanálisis para adultos que no pueden apagar la cabeza. Atención online y presencial en Olivos." />
      </Helmet>

      {/* ─── 1. HERO ─── */}
      <Section className="pt-6 pb-12 md:pt-10 md:pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-10">
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
            <h1 className="h-serif text-[2rem] leading-tight font-semibold sm:text-[2.5rem] md:text-5xl">
              Psicoanálisis para personas que no pueden apagar la cabeza
            </h1>
            <p className="mt-4 text-sumi/75 max-w-prose text-base">
              Atención online y presencial en Olivos para adultos que atraviesan sobrepensamiento, ansiedad, autoexigencia, insomnio, dificultad para decidir o escenas que se repiten aunque ya las hayan entendido.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href="#agenda"
                className="inline-flex items-center gap-2 rounded-full bg-sumi px-5 py-2.5 font-medium text-white shadow hover:bg-sumi/90 transition"
              >
                Solicitar una primera consulta
              </a>
              <a
                href="#enfoque"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-5 py-2.5 font-medium text-sumi hover:bg-white transition"
              >
                Conocer el enfoque <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-black/5 bg-white shadow-md">
            <img
              src="/media/lic-rodrigo-nicolas-quiroga-martinez.webp"
              alt="Lic. Nicolás Quiroga, psicoanalista clínico en Olivos"
              loading="eager"
              fetchpriority="high"
              decoding="sync"
              className="h-full w-full object-cover [filter:saturate(.9)_contrast(1.05)]"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/40" />
          </div>
        </div>
      </Section>

      {/* ─── 2. IDENTIFICACIÓN ─── */}
      <Section className="pb-10 md:pb-14">
        <div className="mx-auto grid max-w-6xl gap-8 border-y border-black/10 px-4 py-8 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-sumi/60">¿Te pasa algo de esto?</p>
            <h2 className="mt-2 h-serif text-3xl font-semibold leading-tight md:text-4xl">
              Cuando la cabeza no se apaga, entender no siempre alcanza.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-sumi/75">
              A veces ya entendiste lo que te pasa, lo hablaste, lo pensaste mil veces.
              Y aun así vuelve. Ahí empieza otra pregunta: ¿qué lugar ocupa esa insistencia?
            </p>
            <Link
              to="/sobrepensamiento-overthinking"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
            >
              Leer sobre sobrepensamiento y ansiedad
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid gap-2 text-sm text-sumi/80 sm:grid-cols-2">
            {overthinkingSignals.map(({ icon: Icon, text }) => (
              <p
                key={text}
                className="group flex min-h-16 items-start gap-3 border-t border-black/10 py-3 leading-relaxed"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-moss shadow-sm transition group-hover:border-gold/50 group-hover:text-gold">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span>{text}</span>
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── 3. ENFOQUE ─── */}
      <Section id="enfoque" className="pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-start"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-sumi/60">Mi mirada</p>
              <h2 className="mt-2 h-serif text-3xl font-semibold leading-tight md:text-4xl">
                No todo se resuelve pensando más
              </h2>
            </div>
            <div className="max-w-2xl space-y-4 border-l border-black/10 pl-5 text-sumi/80 leading-relaxed">
              <p>
                Muchas personas llegan a consulta después de haber intentado resolver su malestar pensando más, leyendo, buscando técnicas o tratando de controlarse. Sin embargo, siguen encontrándose con la misma escena: entienden mucho, pero algo se repite.
              </p>
              <p>
                El pensamiento excesivo no siempre es un problema de falta de control. A veces es el modo en que una angustia, una exigencia o una pregunta por el deseo encuentran una forma de insistir.
              </p>
              <p>
                Trabajo desde una orientación psicoanalítica y lacaniana. No parto de recetas universales ni frases motivacionales, sino de una escucha caso por caso: qué se dice, qué vuelve, qué lugar ocupa la angustia y cómo aparecen la exigencia, el cuerpo, los vínculos y el deseo.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ─── 4. MODALIDADES ─── */}
      <Section className="pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              {
                title: "Sobrepensamiento y ansiedad",
                desc: "Una landing específica para adultos que sienten que no pueden apagar la cabeza.",
                href: "/sobrepensamiento-overthinking",
              },
              {
                title: "Psicoanalista en Olivos",
                desc: "Atención presencial en Vicente López, con dirección exacta al confirmar turno.",
                href: "/psicoanalista-olivos",
              },
              {
                title: "Psicoanálisis online",
                desc: "Sesiones por videollamada para Argentina y exterior, con el mismo encuadre clínico.",
                href: "/psicoanalisis-online",
              },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group block border border-black/10 bg-white/65 p-4 transition hover:bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-sumi/65">{item.desc}</p>
                  </div>
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-sumi/40 transition group-hover:translate-x-0.5 group-hover:text-sumi" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── 5. BLOG ─── */}
      <Section className="pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-12">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-sumi/60">Lecturas</p>
              <h2 className="mt-1 h-serif text-3xl font-semibold md:text-4xl">Blog de psicoanálisis</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-sumi/70">
                Artículos sobre clínica, síntoma, cultura y deseo. Lecturas para pensar
                eso que insiste y no se acomoda del todo.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:bg-sumi hover:text-white sm:w-auto"
            >
              Ver todos los artículos
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.05 * i }}
                className="h-full"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  {post.hero && (
                    <img
                      src={post.hero}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="h-40 w-full object-cover"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-xs text-sumi/50">
                      {new Date(post.date).toLocaleDateString("es-AR")} · {post.readMinutes} min
                    </p>
                    <h3 className="mt-1 text-base font-semibold leading-snug group-hover:underline">
                      {post.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-sumi/65">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── 6. PODCAST ─── */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-14">
          <motion.div
            id="podcast-neurosis-argentina"
            className="relative overflow-hidden rounded-[1.25rem] border border-black bg-[#151515] text-white shadow-xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
            <div className="absolute -right-8 top-7 z-10 rotate-12 border border-white/20 bg-black/50 px-4 py-1 text-xs uppercase tracking-[0.28em] text-white/60">
              podcast
            </div>
            <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
              <div className="relative min-h-60 overflow-hidden bg-black">
                <img
                  src="/media/neurosis-argentina-podcast.webp"
                  alt="Neurosis Argentina, un podcast sobre lo que no anda"
                  loading="lazy"
                  decoding="async"
                  className="h-full min-h-60 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#151515]" />
                <div className="absolute bottom-5 left-5 right-5 lg:hidden">
                  <div className="inline-flex items-center gap-2 bg-black/70 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-white/80">
                    <Radio className="h-4 w-4" />
                    Podcast
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 p-5 md:p-8">
                <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">Podcast</p>
                <h2 className="mt-2 h-serif text-3xl font-semibold leading-tight md:text-4xl">
                  Neurosis Argentina
                </h2>
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.08em] text-[#d6f04c]">
                  Un podcast sobre lo que no anda.
                </p>
                <div className="mt-4 max-w-2xl space-y-3 text-sm leading-relaxed text-white/75 md:text-base">
                  <p>
                    Relato mis casos reales de consultorio... (desfigurados, para cuidar a quien los vivió).
                  </p>
                  <p>
                    Es un Psicoanálisis-sin-tira-postas. Sin tips. Sin promesa de felicidad rápida.
                  </p>
                  <p>
                    La época nos pide adaptación; pero el síntoma insiste. Este podcast entra rebelde por ahí:
                    por eso que molesta, se repite o todavía no encuentra nombre.
                  </p>
                </div>
                </div>

                <div className="border border-white/15 bg-black/45 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d6f04c] text-black">
                      <PlayCircle className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
                        Episodio 1
                      </p>
                      <h3 className="mt-1 text-base font-semibold leading-snug">
                        Lo que no anda
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">
                        Primer episodio disponible en Spotify.
                      </p>
                    </div>
                  </div>

                  <iframe
                    title="Neurosis Argentina en Spotify"
                    src={spotifyEmbedUrl}
                    width="100%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="mt-4 block rounded-xl"
                  />

                  <div className="mt-4 flex flex-wrap gap-2">
                    {podcastLinks.spotify ? (
                      <a
                        href={podcastLinks.spotify}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#1ed760] px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110"
                      >
                        <Headphones className="h-4 w-4" />
                        Spotify
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/45">
                        <Headphones className="h-4 w-4" />
                        Spotify
                      </span>
                    )}
                    {podcastLinks.youtube ? (
                      <a
                        href={podcastLinks.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
                      >
                        <PlayCircle className="h-4 w-4" />
                        YouTube
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/45">
                        <PlayCircle className="h-4 w-4" />
                        YouTube
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ─── 7. PROCESO ─── */}
      <Section id="proceso" className="pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-sumi/60">El proceso</p>
              <h2 className="mt-1 h-serif text-3xl font-semibold md:text-4xl">Cómo empieza un análisis</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-sumi/65">
              La primera entrevista no obliga a continuar. Sirve para ubicar qué está pasando y si podemos trabajarlo juntos.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { n: "01", t: "Primera sesión", d: "Delimitamos la consulta y el punto de urgencia clínica." },
              { n: "02", t: "Primer mes", d: "Una sesión semanal para ordenar hipótesis, foco y frecuencia." },
              { n: "03", t: "Proceso", d: "Trabajo activo sobre lo que se repite, bloquea o insiste." },
              { n: "04", t: "Cierre", d: "Sin duración fija: termina cuando el proceso puede concluir." },
            ].map((x, i) => (
              <motion.article
                key={x.t}
                className="border-t border-black/15 pt-4"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.07 * i }}
              >
                <span className="text-2xl font-light text-gold/80 leading-none">{x.n}</span>
                <h3 className="mt-2 font-semibold text-sm">{x.t}</h3>
                <p className="mt-1.5 text-xs text-sumi/70 leading-relaxed">{x.d}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── 8. CREDENCIALES Y RESEÑAS EXTERNAS ─── */}
      <Section className="pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-sumi/60">Formación</p>
              <div className="mt-4 grid gap-3">
                {[
                  { icon: GraduationCap, title: "Formación clínica", desc: "Lic. en Psicología (UBA) + especialización en psicoanálisis (ALEF)." },
                  { icon: Award, title: "13 años de clínica", desc: "Procesos individuales presenciales y online, en Argentina y exterior." },
                  { icon: BadgeCheck, title: "Matrícula nacional activa", desc: "M.N. 59.272. Habilitado para atención presencial en Olivos y online." },
                ].map((item) => (
                  <article key={item.title} className="flex gap-3 border-t border-black/10 pt-3">
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                    <div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="mt-1 text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <motion.h2
                className="h-serif text-3xl font-semibold md:text-4xl"
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              >
                Reseñas externas
              </motion.h2>
              <div className="mt-4 overflow-hidden rounded-3xl border border-black/5 bg-white/80 p-5 shadow-sm">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-gold" aria-label="Cinco estrellas">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <motion.span
                          key={star}
                          initial={{ opacity: 0, y: 4, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.25, delay: star * 0.06 }}
                        >
                          <Star className="h-5 w-5 fill-current" />
                        </motion.span>
                      ))}
                    </div>
                    <h3 className="mt-3 text-base font-semibold">5/5 en reseñas públicas</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-sumi/70">
                      Promedio consolidado a partir de las reseñas visibles en BuscoPsi y
                      Doctoralia. Las opiniones completas se pueden consultar en cada plataforma.
                    </p>
                  </div>
                  <div className="min-w-40 rounded-2xl border border-black/5 bg-washi/60 p-4">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-sumi/50">
                      <span className="h-2 w-2 rounded-full bg-gold" />
                      Consolidado
                    </div>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-4xl font-semibold leading-none text-sumi">5.0</span>
                      <span className="pb-1 text-sm text-sumi/55">/ 5</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/10">
                      <motion.div
                        className="h-full rounded-full bg-gold"
                        initial={{ width: "18%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-sumi/55">
                      6 reseñas públicas verificadas en perfiles externos.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {reviewProfiles.map((profile) => (
                    <a
                      key={profile.href}
                      href={profile.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center justify-between gap-3 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-sumi/75 transition hover:bg-sumi hover:text-white"
                    >
                      <span className="min-w-0">
                        <span className="block truncate">{profile.label}</span>
                        {profile.rating && (
                          <span className="mt-0.5 block text-[11px] font-normal text-sumi/50 group-hover:text-white/65">
                            {profile.rating} · {profile.count}
                          </span>
                        )}
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  ))}
                </div>
                <Link
                  to="/testimonios"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
                >
                  Leer testimonios escritos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 9. AGENDA — CIERRE ─── */}
      <Section id="agenda">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-10 md:pb-16">
          <div className="rounded-3xl border border-black/5 bg-white/80 p-6 shadow">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              <div className="md:w-1/2 space-y-4">
                <motion.h2
                  className="h-serif text-3xl font-semibold md:text-4xl"
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                >
                  Agenda tu primera sesión
                </motion.h2>

                <div className="space-y-2 text-sm text-sumi/75">
                  <p>Si sentís que no podés apagar la cabeza y querés trabajar eso en un espacio clínico serio, podés escribirme para una primera consulta.</p>
                  <p>Primer mes: <strong>1 sesión semanal</strong>. Luego definimos la frecuencia según el proceso.</p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 shrink-0" />
                    Olivos (Vicente López) y online para toda Argentina
                  </p>
                </div>
              </div>
              <div className="w-full min-w-0 md:w-1/2" id="agenda-form">
                <AgendaForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 10. CV (colapsable, al fondo) ─── */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 pb-10">
        <button
          onClick={() => {
            const next = !openCV;
            setOpenCV(next);
            try { window.gtag && window.gtag("event", "cv_toggle", { open: next }); } catch {}
            try { window.fbq && window.fbq("trackCustom", "CvToggle", { open: next }); } catch {}
            if (next) setTimeout(() => document.getElementById("cv-anchor")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
          }}
          aria-expanded={openCV}
          aria-controls="cv-anchor"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs hover:bg-white transition"
        >
          {openCV ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {openCV ? "Ocultar C.V. completo" : "Ver C.V. completo"}
        </button>
        <div id="cv-anchor" className="mt-3" />
        <ProfileSlide open={openCV} />
      </section>
    </>
  );
}
