import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ExternalLink,
  GraduationCap,
  MessageCircle,
  Sparkles,
  Star,
  TimerReset,
} from "lucide-react";
import { motion } from "framer-motion";
import AgendaForm from "../components/AgendaForm.jsx";

const errors = [
  {
    kicker: "Primer error",
    title: "Intentar resolver el sobrepensamiento pensando mejor.",
    text:
      "Parece lógico: si la cabeza molesta, tratás de ordenar la cabeza. Pero muchas veces eso agranda el circuito. Pensás para calmarte, pero terminás más tomado.",
  },
  {
    kicker: "Segundo error",
    title: "Creer que entender ya es salir.",
    text:
      "Hay gente que explica perfecto lo que le pasa. Sabe cuándo empezó, sabe qué patrón repite, sabe qué debería hacer. Pero igual vuelve al mismo lugar. Ahí empieza el trabajo clínico.",
  },
  {
    kicker: "Tercer error",
    title: "Tratar de apagar la mente a la fuerza.",
    text:
      "Respirar puede ayudar. Meditar puede ayudar. Pero si se vuelve otra exigencia, 'tengo que calmarme, tengo que estar bien', termina siendo más de lo mismo.",
  },
];

const proofItems = [
  "Lic. en Psicología por la Universidad de Buenos Aires.",
  "M.N. 59.272.",
  "Posgrado en Psicoanálisis Lacaniano en ALEF.",
  "Posgrado en Mindfulness, Meditación y Respiración Consciente (EESH - 2017).",
  "Consultorio en Olivos y atención online.",
];

const reviewSnippets = [
  {
    quote:
      "Llegué con la cabeza tomada por exceso de análisis, la presión y la responsabilidad de decidir todo el tiempo.",
    source: "BuscoPsi",
    href: "https://buscopsi.com/psicologo/nicolas-quiroga/",
  },
  {
    quote:
      "Siempre estuve tomada por exceso de pensamiento... por primera vez en mucho tiempo me siento bien.",
    source: "Doctoralia",
    href: "https://www.doctoraliar.com/nicolas-quiroga/psicologo/olivos",
  },
];

const whatsAppHref =
  "https://wa.me/5491161402223?text=Hola%20Nicol%C3%A1s%2C%20vengo%20por%20la%20landing%20de%20sobrepensamiento.";

export default function NoPuedoApagarLaCabeza() {
  return (
    <>
      <Helmet>
        <title>No podés apagar la cabeza | Psicólogo en Olivos y online</title>
        <meta
          name="description"
          content="Psicólogo en Olivos y online para sobrepensamiento, ansiedad e insomnio. Psicoanálisis clínico con recursos de mindfulness y meditación cuando ayudan."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-black/10 bg-[#F1E9DC] text-sumi">
        <img
          src="/media/suminagashi-tinta-pensamiento.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-multiply"
        />
        <div className="relative mx-auto grid min-h-[calc(100vh-84px)] max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1fr_0.82fr] md:items-center md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-xs font-semibold text-sumi/65">
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_rgba(197,168,108,0.9)]" />
              Psicólogo en Olivos y online · sobrepensamiento
            </div>
            <h1 className="h-serif mt-4 text-5xl font-semibold leading-[0.96] md:text-7xl">
              Si no podés apagar la cabeza, el problema no es que pensás mucho.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sumi/75 md:text-lg">
              El problema es que pensar se volvió la manera de intentar controlar todo:
              lo que dijiste, lo que va a pasar, lo que el otro quiso decir, lo que
              deberías haber hecho distinto.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#agenda"
                className="inline-flex items-center gap-2 rounded-full bg-sumi px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Ver primera entrevista
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-5 py-3 text-sm font-semibold text-sumi"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
            <div className="mt-6 grid max-w-xl gap-2 sm:grid-cols-3">
              {[
                ["$40.000", "honorario Argentina"],
                ["40 min", "sesión"],
                ["Olivos/online", "modalidad"],
              ].map(([strong, small]) => (
                <div key={strong} className="rounded-2xl border border-black/10 bg-white/65 p-3 shadow-sm">
                  <p className="font-semibold">{strong}</p>
                  <p className="text-xs text-sumi/55">{small}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative pb-5">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/65 shadow-2xl"
            >
              <img
                src="/media/nicolas-quiroga-estudio-clinico.webp"
                alt="Nicolás Quiroga, psicoanalista clínico en su estudio"
                className="aspect-[4/5] w-full object-cover"
              />
            </motion.div>
            <div className="absolute bottom-0 left-5 right-5 rounded-2xl border border-black/10 bg-white/88 p-4 text-sm shadow backdrop-blur">
              <div className="flex items-center gap-1 text-gold" aria-label="Cinco estrellas">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-sumi/68">
                Reseñas públicas 5/5 en perfiles externos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">
              Lo que suele pasar
            </p>
            <h2 className="h-serif mt-2 text-3xl font-semibold leading-tight md:text-5xl">
              Pensás para calmarte, pero terminás más atrapado.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-sumi/75 md:text-base">
            <p>
              Te acostás cansado, pero aparece la lista. Trabajo. Vínculos. Errores.
              Decisiones. Algo que dijiste. Algo que no dijiste.
            </p>
            <p>
              Desde afuera funcionás. Respondés, cumplís, resolvés. Pero por dentro
              hay una escena que sigue prendida, como si descansar fuera bajar la
              guardia.
            </p>
            <p>
              Por lo tanto, no alcanza con decir “pensá menos”. Si fuera tan simple,
              ya lo habrías hecho.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-black/10 bg-white/55">
        <img
          src="/media/suminagashi-tinta-pensamiento.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.05] mix-blend-multiply"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-10 md:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">
              Tres errores frecuentes
            </p>
            <h2 className="h-serif mt-2 text-3xl font-semibold md:text-5xl">
              Tres formas de seguir alimentando el ruido sin darte cuenta.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {errors.map((error, index) => (
              <motion.article
                key={error.title}
                initial={{ opacity: 0, y: 22, rotate: index === 1 ? 1.1 : -1.1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                whileHover={{
                  y: -8,
                  rotate: index === 1 ? -0.6 : 0.6,
                  transition: { duration: 0.22 },
                }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/82 p-5 shadow-sm"
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/15"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.9, 0.55] }}
                  transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold2 transition-transform duration-500 group-hover:scale-x-100" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold2">
                  {error.kicker}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-tight">{error.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sumi/68">{error.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">
              Entonces
            </p>
            <h2 className="h-serif mt-2 text-3xl font-semibold leading-tight md:text-5xl">
              Quién soy y qué puedo ofrecerte.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-sumi/75 md:text-base">
            <p>
              Soy Nicolás Quiroga, psicólogo y psicoanalista clínico. Trabajo con
              personas que llegan cansadas de analizarlo todo, pero que igual sienten
              que algo vuelve: ansiedad, insomnio, autoexigencia, decisiones que pesan.
            </p>
            <p>
              Lo que puedo ofrecerte no es una frase tranquilizadora. Es un espacio
              para leer por qué la cabeza quedó obligada a funcionar así y, cuando el
              cuerpo está demasiado tomado, usar recursos de mindfulness, respiración
              o meditación para abrir un intervalo.
            </p>
            <p>
              La promesa es sobria: no seguir solo con eso que ya intentaste resolver
              pensando más. Empezar a ubicarlo en una primera entrevista, con un
              encuadre claro y una dirección de trabajo.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#F1E9DC]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-[0.92fr_1.08fr] md:items-start md:py-16">
          <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-moss" />
              <p className="text-xs uppercase tracking-[0.22em] text-sumi/55">
                Trabajo con esto
              </p>
            </div>
            <h2 className="h-serif mt-3 text-3xl font-semibold">
              Soy Nicolás Quiroga, psicólogo y psicoanalista clínico.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-sumi/70">
              Atiendo en Olivos y online. Trabajo especialmente con sobrepensamiento,
              ansiedad, insomnio y autoexigencia.
            </p>
            <div className="mt-5 grid gap-2">
              {proofItems.map((item) => (
                <p key={item} className="flex gap-2 text-sm leading-relaxed text-sumi/70">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <TimerReset className="h-5 w-5 text-gold" />
              <p className="text-xs uppercase tracking-[0.22em] text-sumi/55">
                Honorarios y disponibilidad
              </p>
            </div>
            <h2 className="h-serif mt-3 text-3xl font-semibold">
              $40.000 ARS por sesión.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-sumi/70">
              Lo pongo visible para que no tengas que escribir solo para preguntar
              cuánto sale. La sesión dura 40 minutos. Si estás fuera de Argentina, el
              honorario es USD 35.
            </p>
            <div className="mt-5 rounded-2xl border border-gold/35 bg-gold/10 p-4 text-sm leading-relaxed text-sumi/75">
              <strong className="text-sumi">Agenda cuidada.</strong> Trabajo con cupos
              limitados porque el encuadre necesita continuidad. En la agenda vas a ver
              horarios posibles; la disponibilidad real se confirma por WhatsApp.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16">
        <img
          src="/media/consultorio-psicoanalisis-olivos-divan.webp"
          alt="Consultorio de psicoanálisis en Olivos"
          loading="lazy"
          className="aspect-[16/10] w-full rounded-3xl object-cover"
        />
        <div>
          <div className="flex items-center gap-1 text-gold">
            {[0, 1, 2, 3, 4].map((star) => (
              <Star key={star} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <h2 className="h-serif mt-3 text-3xl font-semibold">
            No sos el único que llega con la cabeza tomada.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-sumi/70">
            Reseñas públicas 5/5 en perfiles externos. Las cito porque hablan de algo
            que se repite mucho en consulta: exceso de análisis, presión por decidir,
            dificultad para descansar.
          </p>
          <div className="mt-5 grid gap-3">
            {reviewSnippets.map((item) => (
              <a
                key={item.source}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-black/10 bg-white/75 p-4 transition hover:-translate-y-1 hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center gap-1 text-gold" aria-label="Cinco estrellas">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-sumi/75">“{item.quote}”</p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sumi/45">
                  {item.source}
                  <ExternalLink className="h-3.5 w-3.5" />
                </p>
              </a>
            ))}
          </div>
          <Link to="/testimonios" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
            Ver testimonios escritos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="agenda" className="mx-auto max-w-6xl px-5 pb-12 md:pb-16">
        <div className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm">
          <div className="grid gap-8 md:grid-cols-[0.88fr_1.12fr] md:items-start">
            <div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-gold" />
                <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">
                  Primera entrevista
                </p>
              </div>
              <h2 className="h-serif mt-2 text-3xl font-semibold md:text-4xl">
                Si algo de esto te pasa, no lo sigamos pensando solos.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-sumi/70">
                Elegí un horario posible. Lo confirmamos por WhatsApp y ubicamos en
                una primera entrevista qué está pasando y si este encuadre tiene
                sentido para vos.
              </p>
            </div>
            <div id="agenda-form">
              <AgendaForm />
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/90 px-4 py-3 shadow-2xl backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <a
            href="#agenda"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sumi px-4 py-3 text-sm font-semibold text-white"
          >
            <Sparkles className="h-4 w-4" />
            Ver primera entrevista
          </a>
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-3"
            aria-label="Escribir por WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
}
