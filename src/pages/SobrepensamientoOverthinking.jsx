import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import AgendaForm from "../components/AgendaForm.jsx";

const sections = [
  {
    title: "Qué es el sobrepensamiento",
    body: [
      "El sobrepensamiento puede presentarse como una actividad mental constante: revisar lo que se dijo, anticipar lo que puede pasar, imaginar escenarios negativos, buscar garantías antes de decidir o intentar encontrar una respuesta definitiva para algo que no la tiene.",
      "No siempre es falta de inteligencia ni falta de voluntad. Muchas veces aparece en personas muy lúcidas, responsables y exigentes, que están acostumbradas a resolver todo desde la cabeza.",
    ],
  },
  {
    title: "Cuando pensar deja de ayudar",
    body: [
      "Pensar puede orientar. Pero también puede volverse una forma de quedar tomado por la angustia. Cuando cada decisión abre nuevas dudas, cuando descansar se vuelve difícil o cuando la cabeza se activa justo en el momento de dormir, el pensamiento deja de funcionar como herramienta y empieza a funcionar como síntoma.",
    ],
  },
  {
    title: "Sobrepensamiento, ansiedad e insomnio",
    body: [
      "Muchas consultas empiezan por ansiedad o insomnio. La persona se acuesta y la cabeza se enciende: conversaciones pendientes, errores posibles, decisiones, trabajo, vínculos o escenas del pasado. El análisis permite ubicar qué insiste allí y qué relación tiene con la historia, el cuerpo y los modos de exigencia de cada sujeto.",
    ],
  },
  {
    title: "Autoexigencia, perfeccionismo y trabajo",
    body: [
      "En adultos profesionales o creativos, el sobrepensamiento suele estar ligado a la exigencia. No se trata solo de querer hacer las cosas bien. A veces aparece una relación más dura con la mirada del otro, con el rendimiento, con el error o con la idea de no estar nunca a la altura.",
    ],
  },
  {
    title: "Dificultad para decidir",
    body: [
      "Pensar demasiado puede bloquear la decisión. La persona busca garantías, revisa variables y analiza escenarios, pero no logra avanzar. Desde una lectura psicoanalítica, la pregunta no es solamente cómo decidir más rápido, sino qué se juega para esa persona en esa decisión.",
    ],
  },
  {
    title: "Por qué los consejos no siempre alcanzan",
    body: [
      "Hay técnicas que pueden ayudar a ordenar un momento de ansiedad. Pero cuando el malestar se repite, los consejos suelen quedarse cortos. No alcanza con decir “no pienses tanto” o “viví el presente”. El punto es leer por qué ese pensamiento vuelve, qué función cumple y qué intenta resolver.",
    ],
  },
  {
    title: "Cómo trabaja el psicoanálisis",
    body: [
      "El psicoanálisis ofrece un espacio de palabra, escucha e intervención clínica. No se trabaja con un protocolo igual para todos. Se construyen hipótesis caso por caso, a partir de lo que aparece en el discurso, en la repetición, en los vínculos, en el cuerpo y en la angustia.",
      "El objetivo no es eliminar rápidamente todo pensamiento, sino que la persona pueda quedar menos tomada por aquello que insiste y construir otra posición frente a su malestar.",
    ],
  },
];

const overthinkingSignals = [
  {
    emoji: "🌀",
    text: "Pensás demasiado y no podés cortar.",
  },
  {
    emoji: "⚖️",
    text: "Dudás de tus decisiones incluso después de haberlas tomado.",
  },
  {
    emoji: "⏳",
    text: "Llegás al final del día con la cabeza agotada.",
  },
  {
    emoji: "✦",
    text: "Te exigís de más y te cuesta descansar.",
  },
  {
    emoji: "🌙",
    text: "La cabeza se activa justo cuando intentás dormir.",
  },
  {
    emoji: "↻",
    text: "Ya entendiste muchas cosas, pero igual repetís lo mismo.",
  },
];

export default function SobrepensamientoOverthinking() {
  return (
    <>
      <Helmet>
        <title>Sobrepensamiento y ansiedad | Psicoanalista en Olivos y online</title>
        <meta
          name="description"
          content="Psicoanálisis para adultos que no pueden apagar la cabeza. Atención online y presencial en Olivos para sobrepensamiento, ansiedad, insomnio, autoexigencia y dificultad para decidir."
        />
        <meta
          name="keywords"
          content="sobrepensamiento, overthinking, no puedo apagar la cabeza, pensar demasiado, ansiedad, insomnio, autoexigencia, perfeccionismo, dificultad para decidir, psicoanalista en Olivos, psicoanalista online"
        />
      </Helmet>
      <style>{`
        @keyframes signal-rise {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.98);
            filter: blur(3px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes signal-breathe {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        .signal-card {
          animation: signal-rise 620ms cubic-bezier(.22, 1, .36, 1) both;
        }

        .signal-card:hover .signal-mark {
          animation: signal-breathe 1.8s ease-in-out infinite;
        }
      `}</style>

      <section className="border-b border-black/5 bg-white/55">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-sumi/60">
            Sobrepensamiento / overthinking
          </p>
          <h1 className="h-serif mt-2 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Cuando no podés apagar la cabeza
          </h1>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-sumi/75">
            <p>
              El sobrepensamiento no siempre aparece como un problema visible. Muchas veces la persona funciona, trabaja, cumple y resuelve, pero por dentro siente que la cabeza no se detiene: anticipa escenarios, revisa decisiones, imagina conversaciones, se exige de más o llega agotada al final del día.
            </p>
            <p>
              En psicoanálisis, no se trata simplemente de forzar un silencio mental. Se trata de leer qué lógica tiene eso que insiste y por qué el pensamiento se vuelve el lugar donde algo de la angustia, el deseo o la exigencia queda atrapado.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <a
              href="#consulta"
              className="inline-flex items-center gap-2 rounded-full bg-sumi px-5 py-2.5 font-medium text-white shadow transition hover:bg-sumi/90"
            >
              Solicitar una primera consulta
            </a>
            <a
              href="#enfoque-sobrepensamiento"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 px-5 py-2.5 font-medium text-sumi transition hover:bg-white"
            >
              Ver enfoque clínico
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <div className="grid gap-3 md:grid-cols-3">
          {overthinkingSignals.map((item, index) => (
            <div
              key={item.text}
              className="signal-card group flex min-h-28 items-start gap-3 border border-black/10 bg-white/65 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sumi/20 hover:bg-white hover:shadow-soft"
              style={{ animationDelay: `${index * 85}ms` }}
            >
              <span className="signal-mark grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 bg-washi text-base shadow-sm transition duration-300 group-hover:border-gold/30 group-hover:bg-white">
                {item.emoji}
              </span>
              <p className="pt-1 text-sm leading-relaxed text-sumi/75 transition duration-300 group-hover:text-sumi/90">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="enfoque-sobrepensamiento" className="mx-auto max-w-6xl px-5 pb-8 md:pb-12">
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="border-t border-black/10 pt-5">
              <h2 className="h-serif text-2xl font-semibold leading-tight">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-sumi/75">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-10 md:pb-14">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="border border-black/10 bg-white/70 p-5">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-moss" />
              <h2 className="text-base font-semibold">Atención online y presencial en Olivos</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-sumi/75">
              Atiendo adultos en modalidad online y presencial en Olivos, Vicente López. La modalidad se define según ubicación, disponibilidad y encuadre posible para cada consulta.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/psicoanalista-olivos" className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium hover:bg-sumi hover:text-white">
                Psicoanalista en Olivos
              </Link>
              <Link to="/psicoanalisis-online" className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium hover:bg-sumi hover:text-white">
                Psicoanálisis online
              </Link>
            </div>
          </article>

          <article className="border border-black/10 bg-white/70 p-5">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-moss" />
              <h2 className="text-base font-semibold">Cuándo consultar</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-sumi/75">
              Puede ser un buen momento para consultar si sentís que no podés cortar con ciertas ideas, si el pensamiento afecta tu sueño, tus decisiones o tus vínculos, si la exigencia se volvió agotadora o si ya entendiste muchas cosas pero seguís repitiendo lo mismo.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-10 md:pb-14">
        <div className="border-l-4 border-sumi/30 bg-white/60 p-5 text-sm leading-relaxed text-sumi/75">
          <h2 className="font-semibold text-sumi">Emergencias y límites del dispositivo</h2>
          <p className="mt-2">
            Este espacio no funciona como guardia ni dispositivo de urgencias. Si estás en riesgo de hacerte daño, dañar a otra persona o necesitás asistencia inmediata, acudí a una guardia, llamá a emergencias o contactá servicios locales de asistencia en crisis.
          </p>
        </div>
      </section>

      <section id="consulta" className="mx-auto max-w-6xl px-5 pb-12 md:pb-16">
        <div className="rounded-3xl border border-black/5 bg-white/80 p-6 shadow">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-sumi/60">Primera consulta</p>
              <h2 className="h-serif mt-2 text-3xl font-semibold leading-tight md:text-4xl">
                Si no podés apagar la cabeza, podemos empezar por ahí.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-sumi/75">
                La primera entrevista sirve para ubicar qué está pasando, qué lugar ocupa el pensamiento excesivo y si este encuadre clínico puede ser adecuado para trabajarlo.
              </p>
            </div>
            <AgendaForm />
          </div>
        </div>
      </section>
    </>
  );
}
