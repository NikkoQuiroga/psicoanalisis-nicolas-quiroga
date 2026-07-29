import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Clock3, MapPin, Moon, Repeat2, Waves } from "lucide-react";
import AgendaForm from "../components/AgendaForm.jsx";

const signals = [
  "Pensás demasiado y no podés cortar.",
  "Buscás garantías antes de decidir.",
  "La cabeza se activa cuando intentás dormir.",
  "Te exigís de más y aun así sentís que no alcanza.",
  "Ya entendiste mucho, pero algo vuelve.",
  "El cuerpo queda cansado de sostener tanta cabeza.",
];

const sections = [
  {
    title: "Qué pasa cuando pensar deja de ayudar",
    body:
      "Pensar orienta. Pero también puede volverse una forma de quedar tomado por la angustia. Cuando cada respuesta abre una nueva duda, el pensamiento deja de funcionar como herramienta y empieza a funcionar como síntoma.",
  },
  {
    title: "No es falta de inteligencia",
    body:
      "El sobrepensamiento suele aparecer en personas lúcidas, responsables y exigentes. El problema no es pensar poco o mucho: es quedar atrapado en una lógica que exige control, anticipación o respuesta permanente.",
  },
  {
    title: "Psicoanálisis, cuerpo y pausa",
    body:
      "El trabajo es psicoanalítico. En algunos momentos, mindfulness y meditación pueden ayudar a registrar cuerpo y respiración, no para callar la mente a la fuerza, sino para abrir un intervalo frente a lo que insiste.",
  },
  {
    title: "Qué se trabaja",
    body:
      "Ansiedad, insomnio, autoexigencia, dificultad para decidir, escenas que se repiten, exigencias heredadas y formas de responder al deseo del Otro que se volvieron demasiado costosas.",
  },
];

export default function SobrepensamientoOverthinking() {
  return (
    <>
      <Helmet>
        <title>Sobrepensamiento y ansiedad | Psicólogo en Olivos</title>
        <meta
          name="description"
          content="Psicólogo en Olivos y online para sobrepensamiento, ansiedad, insomnio y autoexigencia. Psicoanálisis clínico con recursos de mindfulness cuando ayudan."
        />
        <meta
          name="keywords"
          content="psicólogo Olivos, psicologo olivos, sobrepensamiento, overthinking, ansiedad, no puedo apagar la cabeza, psicoanalista Olivos, mindfulness clínico, insomnio"
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-black/10 bg-[#e8e5df]">
        <img
          src="/media/suminagashi-tinta-pensamiento.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-multiply"
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1fr_0.86fr] md:items-center md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">
              Psicólogo en Olivos · sobrepensamiento
            </p>
            <h1 className="h-serif mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              No poder apagar la cabeza también es un modo de sufrir.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-sumi/75">
              No se trata de dejar la mente en blanco. Se trata de ubicar por qué
              vuelve, a quién responde esa exigencia y qué lugar ocupa en tu vida.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#consulta" className="rounded-full bg-sumi px-5 py-3 text-sm font-semibold text-white">
                Ver turnos disponibles
              </a>
              <Link to="/no-puedo-apagar-la-cabeza" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold">
                Ver landing directa
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <img
            src="/media/nicolas-quiroga-estudio-clinico.webp"
            alt="Nicolás Quiroga, psicoanalista clínico"
            className="aspect-square w-full rounded-[1.5rem] border border-black/10 object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="grid gap-3 md:grid-cols-3">
          {signals.map((signal, index) => (
            <article
              key={signal}
              className="min-h-28 rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-washi">
                {[Brain, Moon, Clock3, Waves, Repeat2, Brain][index] &&
                  React.createElement([Brain, Moon, Clock3, Waves, Repeat2, Brain][index], {
                    className: "h-4 w-4 text-moss",
                  })}
              </div>
              <p className="text-sm leading-relaxed text-sumi/75">{signal}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/55">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[0.85fr_1.15fr] md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">Enfoque</p>
            <h2 className="h-serif mt-2 text-3xl font-semibold md:text-5xl">
              El pensamiento no se combate: se lee.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="border-t border-black/10 pt-4">
                <h3 className="font-semibold">{section.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sumi/70">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <img
            src="/media/consultorio-psicoanalisis-olivos-divan.webp"
            alt="Consultorio de psicoanálisis en Olivos"
            loading="lazy"
            className="aspect-[16/10] w-full rounded-3xl object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">Modalidad</p>
            <h2 className="h-serif mt-2 text-3xl font-semibold">
              Consultorio en Olivos y atención online.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-sumi/70">
              La modalidad se define según ubicación, disponibilidad y encuadre posible.
              Las sesiones son de 40 minutos.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link to="/psicoanalista-olivos" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium">
                <MapPin className="h-4 w-4" />
                Olivos
              </Link>
              <Link to="/psicoanalisis-online" className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium">
                Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="consulta" className="mx-auto max-w-6xl px-5 pb-12 md:pb-16">
        <div className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sumi/55">
                Primera consulta
              </p>
              <h2 className="h-serif mt-2 text-3xl font-semibold leading-tight md:text-4xl">
                Podemos empezar por eso que vuelve.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-sumi/70">
                La primera entrevista sirve para ubicar qué está pasando y si este
                encuadre puede ser adecuado para trabajarlo.
              </p>
            </div>
            <div id="agenda-form">
              <AgendaForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
