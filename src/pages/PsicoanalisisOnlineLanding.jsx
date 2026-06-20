import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Laptop, Lock, MessageCircle, Wifi } from "lucide-react";

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
        <title>Psicoanálisis online en Argentina — Lic. Nicolás Quiroga</title>
        <meta
          name="description"
          content="Psicoanálisis online para Argentina y exterior. Sesiones individuales por videollamada con encuadre clínico, reserva absoluta y continuidad."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Psicoanálisis online en Argentina — Lic. Nicolás Quiroga" />
        <meta
          property="og:description"
          content="Sesiones online de psicoanálisis para trabajar angustia, ansiedad, vínculos, duelos y repetición."
        />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
        <script type="application/ld+json">{JSON.stringify(service)}</script>
      </Helmet>

      <section className="border-b border-black/5 bg-white/60">
        <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Argentina y exterior</p>
          <h1 className="h-serif mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Psicoanálisis online
          </h1>
          <p className="mt-4 max-w-2xl text-sumi/75 leading-relaxed">
            La modalidad online no es una versión menor del trabajo clínico. Si hay encuadre,
            continuidad y transferencia, también puede haber análisis.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-sumi px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-sumi/90"
            >
              Agendar primera sesión <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/blog/psicoanalisis-online-funciona"
              className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-sumi hover:bg-white/80"
            >
              Leer sobre análisis online
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Laptop, title: "Por videollamada", text: "Un espacio privado, estable y con horario acordado. No es chat ni acompañamiento improvisado." },
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
          <h2 className="h-serif text-3xl font-semibold">Qué cambia y qué no</h2>
          <div className="mt-5 space-y-4 text-sumi/75 leading-relaxed">
            <p>
              Cambia el dispositivo material: no estamos en el mismo consultorio. Pero no
              necesariamente cambia lo esencial del trabajo: la palabra, la escucha, la
              repetición, el síntoma, la transferencia y el modo singular en que alguien sufre.
            </p>
            <p>
              Para algunas personas, empezar online facilita hablar. Para otras, lo presencial
              ofrece una escena más clara. No hay una regla universal. La primera entrevista
              sirve también para pensar qué modalidad conviene.
            </p>
            <p>
              Atiendo online a personas en Argentina y, según disponibilidad y normativa local,
              a quienes viven en el exterior.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">También hay atención presencial en Olivos</h2>
            <p className="mt-3 text-sm leading-relaxed text-sumi/70">
              Si estás en zona norte o preferís un consultorio físico, podés consultar por la
              modalidad presencial en Olivos, Vicente López.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/psicoanalista-olivos" className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-white/80">
              Psicoanalista en Olivos
            </Link>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent("Hola Nicolás, quería consultar por psicoanálisis online.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-sumi shadow hover:bg-gold2"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
