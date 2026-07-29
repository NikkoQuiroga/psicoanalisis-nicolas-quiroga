import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  TimerReset,
} from "lucide-react";
import { motion } from "framer-motion";
import AgendaForm from "../components/AgendaForm.jsx";

const bullets = [
  "Ya intentaste entenderlo todo, pero la cabeza vuelve a arrancar.",
  "Te acostás cansado y aparece la lista: trabajo, vínculos, errores, decisiones.",
  "Funcionás, resolvés, cumplís; por dentro sentís ruido.",
  "Probaste técnicas, distracciones o consejos. Sirven un rato, después vuelve.",
];

const storyPoints = [
  "Primero parece cansancio. Después se vuelve una forma de estar: revisar, anticipar, medir, volver sobre cada decisión.",
  "No necesariamente se nota desde afuera. Podés trabajar, responder mensajes, cumplir, sostener vínculos. Pero por dentro la cabeza no se apaga.",
  "El problema no es que pienses. El problema es quedar obligado a pensar todo el tiempo, como si parar fuera perder el control.",
];

const steps = [
  {
    title: "Primera entrevista",
    text: "Ubicamos qué te trae, cómo aparece el sobrepensamiento y si este encuadre tiene sentido para vos.",
  },
  {
    title: "Encuadre",
    text: "Definimos modalidad, frecuencia posible y horario. No hay promesa mágica: hay un trabajo sostenido.",
  },
  {
    title: "Trabajo clínico",
    text: "Leemos lo que se repite: exigencia, ansiedad, insomnio, decisiones, cuerpo y relación con el deseo del Otro.",
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
  },
  {
    quote:
      "Siempre estuve tomada por exceso de pensamiento... por primera vez en mucho tiempo me siento bien.",
    source: "Doctoralia",
  },
];

export default function NoPuedoApagarLaCabeza() {
  return (
    <>
      <Helmet>
        <title>No podés apagar la cabeza | Psicólogo en Olivos y online</title>
        <meta
          name="description"
          content="Psicólogo en Olivos y online para adultos con sobrepensamiento, ansiedad e insomnio. Psicoanálisis clínico con recursos de mindfulness y meditación."
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
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-xs font-semibold text-sumi/65">
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_rgba(197,168,108,0.9)]" />
              Psicólogo en Olivos y online · sobrepensamiento
            </div>
            <h1 className="h-serif mt-4 text-5xl font-semibold leading-[0.96] md:text-7xl">
              ¿No podés apagar la cabeza?
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sumi/75 md:text-lg">
              Si la mente no corta, quizá no alcanza con distraerte, respirar tres
              veces o prometerte que mañana lo resolvés. Podemos empezar por eso que
              insiste.
            </p>
            <div className="mt-5 grid max-w-xl gap-2 sm:grid-cols-3">
              {[
                ["$40.000", "honorario Argentina"],
                ["40 min", "primera entrevista"],
                ["Olivos/online", "modalidad"],
              ].map(([strong, small]) => (
                <div key={strong} className="rounded-2xl border border-black/10 bg-white/65 p-3 shadow-sm">
                  <p className="font-semibold">{strong}</p>
                  <p className="text-xs text-sumi/55">{small}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#agenda"
                className="inline-flex items-center gap-2 rounded-full bg-sumi px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Ver turnos disponibles
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/5491161402223?text=Hola%20Nicol%C3%A1s%2C%20vengo%20por%20la%20landing%20de%20sobrepensamiento."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-5 py-3 text-sm font-semibold text-sumi"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
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
              <div className="flex items-center gap-1 text-gold">
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
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">
              La escena
            </p>
            <h2 className="h-serif mt-2 text-3xl font-semibold leading-tight md:text-5xl">
              No llegás porque pensás mucho. Llegás porque ya cansa.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-sumi/75 md:text-base">
            {storyPoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/55">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-16">
          <div className="mb-8 grid gap-4 md:grid-cols-[0.82fr_1.18fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">
                Cómo funciona
              </p>
              <h2 className="h-serif mt-2 text-3xl font-semibold md:text-5xl">
                Una primera consulta para ordenar el ruido.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-sumi/70 md:text-base">
              No necesitás llegar con un diagnóstico ni con una explicación cerrada.
              Alcanza con ubicar por dónde empieza a insistir: sueño, trabajo,
              vínculos, decisiones, cuerpo.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-black/10 bg-white/80 p-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sumi text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sumi/68">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="mb-6 grid gap-3 md:grid-cols-3">
          {[
            {
              icon: Clock3,
              title: "No esperes tenerlo claro",
              text: "Podés consultar aun si todavía no sabés explicar qué te pasa.",
            },
            {
              icon: ShieldCheck,
              title: "Encuadre cuidado",
              text: "Confidencialidad, honorarios visibles y un encuadre claro desde el inicio.",
            },
            {
              icon: CalendarDays,
              title: "Agenda dinámica",
              text: "Elegís un horario posible y lo confirmamos por WhatsApp.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-black/10 bg-white/75 p-4">
              <Icon className="h-5 w-5 text-moss" />
              <h2 className="mt-3 text-sm font-semibold">{title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-sumi/65">{text}</p>
            </article>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          {bullets.map((bullet, index) => (
            <motion.article
              key={bullet}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-2xl border border-black/10 bg-white/75 p-4"
            >
              <CheckCircle2 className="h-5 w-5 text-moss" />
              <p className="mt-3 text-sm leading-relaxed text-sumi/75">{bullet}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#F1E9DC]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-[0.92fr_1.08fr] md:items-start md:py-16">
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

          <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-moss" />
              <p className="text-xs uppercase tracking-[0.22em] text-sumi/55">
                Autoridad clínica
              </p>
            </div>
            <h2 className="h-serif mt-3 text-3xl font-semibold">
              Psicólogo en Olivos. Psicoanalista clínico.
            </h2>
            <div className="mt-5 grid gap-2">
              {proofItems.map((item) => (
                <p key={item} className="flex gap-2 text-sm leading-relaxed text-sumi/70">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/55">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[0.9fr_1.1fr] md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">La diferencia</p>
            <h2 className="h-serif mt-2 text-3xl font-semibold md:text-5xl">
              No es un método para calmarte rápido.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-sumi/75 md:text-base">
            <p>
              El trabajo es psicoanalítico. No parte de una técnica universal ni de
              frases motivacionales. Parte de lo que decís, de lo que vuelve, de cómo
              se arma tu exigencia y de qué lugar ocupa el pensamiento en tu vida.
            </p>
            <p>
              Mindfulness y meditación pueden aparecer como recursos cuando ayudan a
              ubicar cuerpo y respiración. No reemplazan el análisis: abren un intervalo.
            </p>
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
            Consultorio en Olivos. Online para Argentina y exterior.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-sumi/70">
            Reseñas públicas 5/5 en perfiles externos. Sesiones de 40 minutos.
            Honorarios visibles antes de coordinar.
          </p>
          <div className="mt-5 grid gap-3">
            {reviewSnippets.map((item) => (
              <blockquote key={item.source} className="rounded-2xl border border-black/10 bg-white/75 p-4">
                <div className="flex items-center gap-1 text-gold" aria-label="Cinco estrellas">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-sumi/75">“{item.quote}”</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-sumi/45">
                  {item.source}
                </p>
              </blockquote>
            ))}
          </div>
          <Link to="/testimonios" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
            Ver testimonios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="agenda" className="mx-auto max-w-6xl px-5 pb-12 md:pb-16">
        <div className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm">
          <div className="grid gap-8 md:grid-cols-[0.88fr_1.12fr] md:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">
                Primera entrevista
              </p>
              <h2 className="h-serif mt-2 text-3xl font-semibold md:text-4xl">
                Elegí un horario posible y lo confirmamos por WhatsApp.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-sumi/70">
                No necesitás llegar con una explicación cerrada. Podemos empezar por el
                ruido, la repetición o eso que vuelve cuando intentás descansar.
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
            Ver turnos
          </a>
          <a
            href="https://wa.me/5491161402223?text=Hola%20Nicol%C3%A1s%2C%20vengo%20por%20la%20landing%20de%20sobrepensamiento."
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
