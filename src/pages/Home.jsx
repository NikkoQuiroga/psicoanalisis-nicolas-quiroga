import React, { useState } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Brain,
  CircleHelp,
  ExternalLink,
  GraduationCap,
  MessageSquareText,
  Moon,
  Repeat2,
  Sparkles,
  Star,
  Waves,
} from "lucide-react";
import { motion } from "framer-motion";
import AgendaForm from "../components/AgendaForm.jsx";
import ProfileSlide from "../components/ProfileSlide.jsx";

const fadeUp = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } };

const signals = [
  { icon: Brain, text: "Pensás demasiado y no podés cortar." },
  { icon: Moon, text: "La cabeza se enciende justo cuando intentás descansar." },
  { icon: MessageSquareText, text: "Anticipás conversaciones, errores o escenas posibles." },
  { icon: CircleHelp, text: "Te va bien desde afuera, pero algo no termina de cerrar." },
  { icon: Repeat2, text: "Ya entendiste muchas cosas, pero igual repetís lo mismo." },
];

const reviewProfiles = [
  {
    label: "Doctoralia",
    href: "https://www.doctoraliar.com/nicolas-quiroga/psicologo/olivos",
    rating: "5/5",
    count: "2 opiniones",
  },
  {
    label: "BuscoPsi",
    href: "https://buscopsi.com/psicologo/nicolas-quiroga/",
    rating: "5/5",
    count: "4 reseñas",
  },
  {
    label: "Psychology Today",
    href: "https://www.psychologytoday.com/profile/1783533",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lic-nicolas-quiroga/",
  },
];

const meditations = [
  {
    title: "Meditación guiada",
    href: "https://youtu.be/IQmN2RUYNac",
    embed: "https://www.youtube.com/embed/IQmN2RUYNac",
  },
  {
    title: "Práctica de respiración y presencia",
    href: "https://youtu.be/hk6bPL0cWYg",
    embed: "https://www.youtube.com/embed/hk6bPL0cWYg",
  },
];

export default function Home() {
  const [openCV, setOpenCV] = useState(false);

  return (
    <>
      <Helmet>
        <title>Psicólogo en Olivos y psicoanalista clínico — Nicolás Quiroga</title>
        <meta
          name="description"
          content="Nicolás Quiroga, psicólogo en Olivos y psicoanalista clínico. Atención presencial y online para sobrepensamiento, ansiedad, insomnio y repetición."
        />
        <meta
          name="keywords"
          content="psicólogo Olivos, psicologo olivos, psicólogo en Olivos, psicoanalista Olivos, psicoanalista clínico, sobrepensamiento, ansiedad, psicoanálisis online, no puedo apagar la cabeza"
        />
        <meta
          property="og:title"
          content="Psicólogo en Olivos y psicoanalista clínico — Nicolás Quiroga"
        />
        <meta
          property="og:description"
          content="Atención presencial en Olivos y online para sobrepensamiento, ansiedad, insomnio y repetición."
        />
        <meta property="og:image" content="/media/nicolas-quiroga-estudio-clinico.webp" />
        <meta
          property="og:image:alt"
          content="Nicolás Quiroga, psicoanalista clínico, en su estudio"
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-black/10 bg-[#F1E9DC]">
        <img
          src="/media/suminagashi-tinta-pensamiento.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-multiply"
        />
        <div className="relative mx-auto grid min-h-[calc(100vh-84px)] max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1fr_0.86fr] md:items-center md:py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sumi/55">
              Psicólogo en Olivos · Psicoanalista clínico
            </p>
            <h1 className="h-serif mt-4 text-4xl font-semibold leading-[0.98] text-sumi sm:text-5xl md:text-7xl">
              Psicólogo en Olivos para cuando la cabeza no corta.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-sumi/75 md:text-lg">
              Soy Nicolás Quiroga, psicólogo y psicoanalista clínico. Atiendo en
              Olivos y online a personas que llegan con sobrepensamiento, ansiedad,
              insomnio, autoexigencia o una repetición que ya no quieren seguir
              sosteniendo igual.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#agenda"
                className="inline-flex items-center gap-2 rounded-full bg-sumi px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-sumi/90"
              >
                Ver turnos disponibles
              </a>
              <Link
                to="/no-puedo-apagar-la-cabeza"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-5 py-3 text-sm font-semibold text-sumi transition hover:bg-white"
              >
                Landing sobre sobrepensamiento
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-soft">
              <img
                src="/media/nicolas-quiroga-estudio-clinico.webp"
                alt="Lic. Nicolás Quiroga, psicoanalista clínico"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="aspect-[1/1] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-black/10 bg-white/90 p-4 text-sm shadow backdrop-blur">
              <p className="font-semibold">M.N. 59.272 · Universidad de Buenos Aires</p>
              <p className="mt-1 text-sumi/65">
                Consultorio en Olivos, Vicente López. Atención online para Argentina y exterior.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">
              Sobrepensamiento
            </p>
            <h2 className="h-serif mt-2 text-3xl font-semibold leading-tight md:text-5xl">
              Pensar mucho no es el problema. Quedar atrapado ahí, sí.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-sumi/70 md:text-base">
              A veces la cabeza trabaja sin descanso porque intenta resolver algo que
              no se resuelve solo pensando más. La consulta abre un lugar para leer esa
              exigencia, esa duda, esa escena que vuelve.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {signals.map(({ icon: Icon, text }, index) => (
              <motion.article
                key={text}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex min-h-24 gap-3 border-t border-black/10 py-4"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 bg-white">
                  <Icon className="h-4 w-4 text-moss" />
                </span>
                <p className="text-sm leading-relaxed text-sumi/75">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="enfoque" className="border-y border-black/10 bg-white/55">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16">
          <div>
            <img
              src="/media/consultorio-psicoanalisis-olivos-divan.webp"
              alt="Consultorio de psicoanálisis en Olivos"
              loading="lazy"
              className="h-auto w-full rounded-2xl object-contain"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">Consultorio</p>
            <h2 className="h-serif mt-2 text-3xl font-semibold leading-tight md:text-5xl">
              Un consultorio en Olivos para hablar sin actuar enseguida.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-sumi/75 md:text-base">
              <p>
                La mayoría consulta porque quiere sentirse mejor. Es lógico. La
                diferencia está en no tapar rápido el síntoma para que todo vuelva al
                mismo lugar.
              </p>
              <p>
                El encuadre es psicoanalítico. En algunos procesos incorporo recursos
                de mindfulness y meditación cuando ayudan a ubicar el cuerpo, la
                respiración y la relación con el pensamiento.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/psicoanalista-olivos"
                className="rounded-full bg-sumi px-5 py-2.5 text-sm font-medium text-white"
              >
                Consultorio en Olivos
              </Link>
              <Link
                to="/sobre-mi"
                className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium"
              >
                Ver recorrido
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-black/10 bg-[#F1E9DC]">
        <img
          src="/media/suminagashi-tinta-pensamiento.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-multiply"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-10 md:py-16">
          <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: "Psicoanalista clínico",
              text: "Lic. en Psicología por la Universidad de Buenos Aires. Posgrado en Psicoanálisis Lacaniano en ALEF. M.N. 59.272.",
            },
            {
              icon: Waves,
              title: "Mindfulness y meditación",
              text: "Posgrado en Mindfulness, Meditación y Respiración Consciente (EESH - 2017). Lo incorporo solo cuando ayuda a ubicar cuerpo y respiración.",
            },
            {
              icon: BookOpen,
              title: "Budismo y Japón",
              text: "En Minobu hice una experiencia de Shukubo: templo, silencio, ritual y práctica. No como promesa espiritual, sino como otra forma de escuchar el ritmo del cuerpo.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-black/10 bg-white/65 p-5 shadow-soft backdrop-blur">
              <Icon className="h-5 w-5 text-moss" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sumi/65">{text}</p>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/55">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[0.9fr_1.1fr] md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">Illusioterapia</p>
            <h2 className="h-serif mt-2 text-3xl font-semibold md:text-5xl">
              Meditaciones guiadas para dormir y dejar de sobrepensar.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-sumi/70">
              Produzco meditaciones guiadas para dormir, bajar la activación mental
              y dejar de sobrepensar para Illusioterapia, un canal de YouTube con más
              de 1 millón de suscriptores. No reemplazan un análisis: funcionan como
              un recurso complementario para volver al cuerpo cuando la cabeza queda
              tomada.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {meditations.map((item) => (
              <article key={item.href} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <iframe
                  title={item.title}
                  src={item.embed}
                  loading="lazy"
                  className="aspect-video w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <div className="flex items-center justify-between gap-3 p-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-gold" />
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-xs font-semibold underline underline-offset-4"
                  >
                    YouTube
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-10 md:pb-16">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-black/10 bg-white/75 p-5">
            <div className="flex items-center gap-1 text-gold" aria-label="Cinco estrellas">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <h2 className="h-serif mt-3 text-3xl font-semibold">Reseñas externas</h2>
            <p className="mt-2 text-sm leading-relaxed text-sumi/65">
              5/5 en reseñas públicas visibles en BuscoPsi y Doctoralia, con enlaces a cada plataforma.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {reviewProfiles.map((profile) => (
                <a
                  key={profile.href}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium"
                >
                  {profile.label}
                  {profile.rating ? ` · ${profile.rating}` : ""}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
            <Link to="/testimonios" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
              Leer testimonios escritos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div id="agenda" className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">Primera entrevista</p>
            <h2 className="h-serif mt-2 text-3xl font-semibold md:text-4xl">
              Si algo de esto te toca, podemos ubicarlo en una primera consulta.
            </h2>
            <div id="agenda-form" className="mt-5">
              <AgendaForm />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-10">
        <button
          onClick={() => {
            const next = !openCV;
            setOpenCV(next);
            if (next) {
              setTimeout(
                () =>
                  document
                    .getElementById("cv-anchor")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" }),
                50,
              );
            }
          }}
          aria-expanded={openCV}
          aria-controls="cv-anchor"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs hover:bg-white"
        >
          <BadgeCheck className="h-4 w-4" />
          {openCV ? "Ocultar C.V. completo" : "Ver C.V. completo"}
        </button>
        <div id="cv-anchor" className="mt-3" />
        <ProfileSlide open={openCV} />
      </section>
    </>
  );
}
