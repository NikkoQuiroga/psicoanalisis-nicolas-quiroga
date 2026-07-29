import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  GraduationCap,
  MapPin,
  Waves,
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const academicWorkUrl =
  "https://www.aacademica.org/jornadas.psicopatologia.30.aniversario/101";

const profiles = [
  ["Psychology Today", "https://www.psychologytoday.com/profile/1783533"],
  ["Doctoralia", "https://www.doctoraliar.com/nicolas-quiroga/psicologo/olivos"],
  ["BuscoPsi", "https://buscopsi.com/psicologo/nicolas-quiroga/"],
  ["LinkedIn", "https://www.linkedin.com/in/lic-nicolas-quiroga/"],
  [
    "Psicólogos Buenos Aires",
    "https://psicologosbuenosaires.com/nicolas-quiroga-psicoanalista-clinico-para-sobrepensamiento-y-ansiedad-2144",
  ],
];

const japanCards = [
  {
    src: "/media/minobu-templo-ceremonia.webp",
    title: "Shukubo en Minobu",
    text: "Dormir en un templo no tuvo para mí el tono de una postal espiritual. Fue más bien entrar en otro ritmo: levantarse temprano, caminar, escuchar, repetir.",
  },
  {
    src: "/media/minobu-peregrinacion-bosque.webp",
    title: "El cuerpo en la práctica",
    text: "En Minobu entendí algo sencillo y difícil: no todo se ordena pensando más. A veces el cuerpo llega antes que la explicación.",
  },
  {
    src: "/media/minobu-jardin-koi.webp",
    title: "Atención sin consigna",
    text: "Ese recorrido vuelve en mi trabajo como una sensibilidad: sostener una pausa, no correr a cerrar, dejar que algo tome forma.",
  },
];

const meditations = [
  {
    title: "Meditación guiada para dormir",
    href: "https://youtu.be/IQmN2RUYNac",
    embed: "https://www.youtube.com/embed/IQmN2RUYNac",
  },
  {
    title: "Meditación para dejar de sobrepensar",
    href: "https://youtu.be/hk6bPL0cWYg",
    embed: "https://www.youtube.com/embed/hk6bPL0cWYg",
  },
];

export default function SobreMi() {
  return (
    <>
      <Helmet>
        <title>Sobre mí — Nicolás Quiroga, psicólogo en Olivos</title>
        <meta
          name="description"
          content="Nicolás Quiroga, psicólogo en Olivos y psicoanalista clínico. Formación UBA, psicoanálisis lacaniano, mindfulness, meditación y budismo japonés."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-black/10 bg-[#F1E9DC]">
        <img
          src="/media/suminagashi-tinta-pensamiento.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07] mix-blend-multiply"
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[0.85fr_1.15fr] md:items-center md:py-16">
          <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-soft">
            <img
              src="/media/nicolas-quiroga-estudio-clinico.webp"
              alt="Nicolás Quiroga en su estudio"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">Sobre mí</p>
            <h1 className="h-serif mt-3 text-4xl font-semibold leading-tight md:text-6xl">
              Nicolás Quiroga
            </h1>
            <p className="mt-3 text-lg text-sumi/75">
              Psicólogo · Psicoanalista clínico · M.N. 59.272
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-sumi/65">
              <MapPin className="h-4 w-4" />
              Consultorio en Vicente López y atención online
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-sumi/75">
              Trabajo con personas tomadas por el sobrepensamiento, la ansiedad, la
              autoexigencia y la repetición. Mi eje es el psicoanálisis clínico; en
              algunos procesos incorporo recursos de mindfulness y meditación cuando
              ayudan a ubicar cuerpo y respiración.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">Clínica</p>
            <h2 className="h-serif mt-2 text-3xl font-semibold md:text-5xl">
              El síntoma no es solo algo a eliminar.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-sumi/78">
            <p>
              La mayoría llega porque quiere sentirse mejor. Y tiene razón: cuando la
              cabeza no corta o la angustia aprieta, nadie quiere una teoría elegante.
              Quiere alivio.
            </p>
            <p>
              El psicoanálisis toma en serio ese alivio, pero no lo confunde con tapar
              rápido lo que aparece. A veces el síntoma es también la puerta de entrada
              para leer una repetición, una exigencia o una manera de responderle al
              Otro que empezó a volverse demasiado costosa.
            </p>
            <p>
              No trabajo desde protocolos universales ni frases motivacionales. Trabajo
              desde una escucha caso por caso: qué se dice, qué vuelve, qué lugar ocupa
              el cuerpo, cómo aparece la ansiedad y qué se juega en cada decisión.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-black/10 bg-white/60">
        <img
          src="/media/suminagashi-tinta-pensamiento.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.045] mix-blend-multiply"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-10 md:py-16">
          <div className="mb-6 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">
              Mindfulness, meditación y budismo
            </p>
            <h2 className="h-serif mt-2 text-3xl font-semibold md:text-5xl">
              No llegué a la meditación para vender calma.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-sumi/70 md:text-base">
              Llegué por otro camino: por el cuerpo, por la respiración, por la
              pregunta de qué pasa cuando alguien ya entendió demasiado y aun así no
              puede descansar. Mindfulness y meditación entran en mi clínica desde
              ahí, como recursos posibles, nunca como mandato de serenidad.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {japanCards.map((card) => (
              <article key={card.src} className="overflow-hidden rounded-2xl border border-black/10 bg-white/70">
                <img src={card.src} alt={card.title} loading="lazy" className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sumi/65">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: "Formación",
              text: "Lic. en Psicología por la Universidad de Buenos Aires. Posgrado en Psicoanálisis Lacaniano en ALEF.",
            },
            {
              icon: Waves,
              title: "Mindfulness y meditación",
              text: "Posgrado en Mindfulness, Meditación y Respiración Consciente (EESH - 2017).",
            },
            {
              icon: BookOpen,
              title: "Producción académica",
              text: "Participación en jornadas de Psicopatología Cátedra II - UBA, con trabajo disponible en Acta Académica.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-black/10 bg-white/70 p-5"
            >
              <Icon className="h-5 w-5 text-moss" />
              <h2 className="mt-3 font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-sumi/65">{text}</p>
            </motion.article>
          ))}
        </div>
        <a
          href={academicWorkUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:bg-sumi hover:text-white"
        >
          Ver publicación académica
          <ExternalLink className="h-4 w-4" />
        </a>
      </section>

      <section className="relative overflow-hidden border-y border-black/10 bg-[#F1E9DC]">
        <img
          src="/media/suminagashi-tinta-pensamiento.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.075] mix-blend-multiply"
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[0.82fr_1.18fr] md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">Illusioterapia</p>
            <h2 className="h-serif mt-2 text-3xl font-semibold md:text-5xl">
              Meditaciones guiadas para dormir y dejar de sobrepensar.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-sumi/70 md:text-base">
              Escribo y grabo prácticas para Illusioterapia, un canal de YouTube con
              más de 1 millón de suscriptores. Ahí el trabajo es más directo:
              acompañar a alguien que está despierto a la noche, acelerado, tomado por
              la cabeza.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {meditations.map((item) => (
              <article key={item.href} className="overflow-hidden rounded-2xl border border-black/10 bg-white/80 shadow-sm">
                <iframe
                  title={item.title}
                  src={item.embed}
                  loading="lazy"
                  className="aspect-video w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <div className="flex items-center justify-between gap-3 p-4">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
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

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-3xl border border-black/10 bg-white/75 p-6">
            <h2 className="font-semibold">Recorrido</h2>
            <p className="mt-2 text-sm leading-relaxed text-sumi/70">
              UBA, psicoanálisis lacaniano, mindfulness, meditación y una experiencia
              de práctica budista en Japón. No como mezcla decorativa, sino como una
              pregunta que se fue armando con los años: qué hacer cuando pensar más ya
              no alcanza.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/75 p-6">
            <h2 className="font-semibold">Perfiles profesionales</h2>
            <p className="mt-2 text-sm leading-relaxed text-sumi/70">
              Referencias externas donde figura mi práctica clínica, reseñas y perfiles
              públicos vinculados al consultorio.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {profiles.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-sumi/75 transition hover:bg-sumi hover:text-white"
                >
                  {label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 md:pb-16">
        <div className="rounded-3xl border border-gold/30 bg-gold/5 p-6 text-center">
          <p className="text-sumi/80 font-medium">Si algo de esto resuena, podemos trabajarlo.</p>
          <p className="mt-1 text-sm text-sumi/60">
            Primera entrevista para ubicar qué está pasando y si este encuadre tiene sentido.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="/#agenda"
              className="inline-flex items-center gap-2 rounded-full bg-sumi px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-sumi/90"
            >
              Ver turnos disponibles
            </a>
            <Link
              to="/sobrepensamiento-overthinking"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium"
            >
              Sobrepensamiento
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
