import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import AgendaForm from "../components/AgendaForm.jsx";
import { Link } from "react-router-dom";
import { ArrowRight, Laptop, Lock, Wifi } from "lucide-react";

export default function PsicoanalisisOnlineLanding() {
  const site = (import.meta.env.VITE_SITE_URL || "https://nicolasquiroga.com.ar").replace(/\/$/, "");
  const url = `${site}/psicoanalisis-online`;
  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: site },
      { "@type": "ListItem", position: 2, name: "Psicoanálisis online", item: url },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Psicoanálisis online",
    serviceType: "Psicoanálisis clínico online",
    provider: {
      "@type": "Psychologist",
      name: "Lic. Nicolás Quiroga",
      url: site,
      telephone: `+${phone}`,
    },
    areaServed: [
      { "@type": "Country", name: "Argentina" },
      { "@type": "Place", name: "Exterior" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Psicoanálisis online en Argentina | Nicolás Quiroga</title>
        <meta
          name="description"
          content="Psicólogo online y psicoanalista clínico. Sesiones para sobrepensamiento, ansiedad, insomnio y repetición en Argentina y exterior."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Psicólogo online y psicoanalista clínico — Nicolás Quiroga" />
        <meta
          property="og:description"
          content="Sesiones online de psicoanálisis para trabajar la cabeza que no corta, angustia, ansiedad, insomnio y repetición."
        />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
        <script type="application/ld+json">{JSON.stringify(service)}</script>
      </Helmet>

      <section className="border-b border-black/10 bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.05fr_.95fr] md:items-center md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-sumi/55">Psicólogo online · Argentina y exterior</p>
            <h1 className="h-serif mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Psicoanálisis online para cuando la cabeza no corta.
            </h1>
            <p className="mt-4 max-w-2xl text-sumi/75 leading-relaxed">
              Quizás vivís lejos de Olivos, te mudaste a otro país o preferís
              encontrarnos por videollamada. Podés consultar por sobrepensamiento,
              ansiedad, dificultad para dormir o algo que todavía te cuesta explicar.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#agenda"
                className="inline-flex items-center gap-2 rounded-full bg-sumi px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-sumi/90"
              >
                Consultar primera entrevista online <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/sobrepensamiento-overthinking"
                className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-sumi hover:bg-white/80"
              >
                Ver enfoque clínico
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
            <img
              src="/media/nicolas-quiroga-estudio-clinico.webp"
              alt="Nicolás Quiroga, psicoanalista clínico"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Laptop, title: "Por videollamada", text: "Nos encontramos por videollamada, en un horario que acordamos antes de la sesión." },
            { icon: Lock, title: "Confidencialidad", text: "La reserva profesional también rige online. Conviene elegir un lugar donde puedas hablar sin interrupciones." },
            { icon: Wifi, title: "Continuidad", text: "Sirve para quienes viven lejos, viajan, están en otra provincia o necesitan sostener el proceso desde el exterior." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm">
              <Icon className="h-5 w-5 text-gold" />
              <h2 className="mt-3 text-base font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-sumi/70">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-white/50">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <h2 className="h-serif text-3xl font-semibold">Cómo es una sesión online</h2>
          <div className="mt-5 space-y-4 text-sumi/75 leading-relaxed">
            <p>
              Nos conectamos en el horario que acordamos y empezamos a hablar.
              Podés contar lo que te trajo a consultar o algo que pasó durante
              la semana. Yo escucho, pregunto y voy interviniendo. No necesitás
              preparar un tema antes de cada encuentro.
            </p>
            <p>
              Necesitás un lugar donde puedas hablar con privacidad y sin estar
              atendiendo otras tareas. Si la conexión o las condiciones para hablar
              dificultan el encuentro, lo conversamos y revisamos cómo seguir.
            </p>
            <p>
              Atiendo online a personas en Argentina y, según disponibilidad y normativa local,
              a quienes viven en el exterior.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12">
        <h2 className="h-serif text-3xl font-semibold">Cómo empezar psicoanálisis online</h2>
        <div className="mt-5 space-y-5 text-sumi/75 leading-relaxed">
          <p>Podés consultar desde cualquier provincia de Argentina. Coordinamos una primera entrevista por videollamada para conversar sobre lo que te trae y evaluar si esta modalidad resulta adecuada para vos.</p>
          <h3 className="text-xl font-semibold">Qué necesitás para la videollamada</h3>
          <p>Un lugar privado donde puedas hablar sin interrupciones, conexión estable y un teléfono o computadora con cámara y micrófono. El medio de conexión se acuerda al confirmar la entrevista.</p>
          <h3 className="text-xl font-semibold">Honorarios y horarios</h3>
          <p>La sesión dura 40 minutos. El honorario es de $40.000 ARS por sesión para Argentina y USD 35 para exterior. Antes de empezar acordamos horario y forma de pago.</p>
          <h3 className="text-xl font-semibold">Si vivís fuera de Argentina</h3>
          <p>Las sesiones son en español. Al escribir, indicá en qué país vivís y tu disponibilidad: así podemos coordinar la diferencia horaria y confirmar si es posible atenderte desde allí. El honorario para exterior es USD 35 por sesión; la forma de pago se acuerda antes de la primera entrevista.</p>
          <h3 className="text-xl font-semibold">Qué pasa después de la primera entrevista</h3>
          <p>Conversamos sobre la frecuencia y las condiciones para sostener el trabajo. La primera entrevista no te obliga a continuar. Si la modalidad online no resulta adecuada, lo hablamos.</p>
          <Link to="/blog/psicoanalisis-online-funciona" className="inline-block font-semibold underline underline-offset-4">Leer más sobre el encuadre del psicoanálisis online</Link>
        </div>
      </section>
      <section id="agenda" className="mx-auto max-w-3xl scroll-mt-28 px-5 pb-12">
        <div id="agenda-form" className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-sm">
          <h2 className="h-serif mb-5 text-3xl font-semibold">Coordinemos tu primera entrevista online</h2>
          <AgendaForm onlineOnly />
        </div>
        <p className="mt-6 text-sm text-sumi/65">Si preferís atención presencial, podés consultar por el <Link to="/psicologo-olivos" className="underline">consultorio en Olivos</Link>.</p>
      </section>
    </>
  );
}
