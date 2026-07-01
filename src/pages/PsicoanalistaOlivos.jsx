import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { MapPin, MessageCircle, ShieldCheck, Clock, ArrowRight, ExternalLink } from "lucide-react";

const professionalProfiles = [
  {
    label: "Doctoralia",
    href: "https://www.doctoraliar.com/nicolas-quiroga/psicologo/olivos",
  },
  {
    label: "Psychology Today",
    href: "https://www.psychologytoday.com/profile/1783533",
  },
  {
    label: "BuscoPsi",
    href: "https://buscopsi.com/psicologo/nicolas-quiroga/",
  },
  {
    label: "Psicólogos Buenos Aires",
    href: "https://psicologosbuenosaires.com/nicolas-quiroga-psicoanalista-clinico-para-sobrepensamiento-y-ansiedad-2144",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lic-nicolas-quiroga/",
  },
];

export default function PsicoanalistaOlivos() {
  const site = (import.meta.env.VITE_SITE_URL || "https://nicolasquiroga.com.ar").replace(/\/$/, "");
  const url = `${site}/psicoanalista-olivos`;
  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: site },
      { "@type": "ListItem", position: 2, name: "Psicoanalista en Olivos", item: url },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Psicoanálisis presencial en Olivos",
    serviceType: "Psicoanálisis clínico",
    provider: {
      "@type": "Psychologist",
      name: "Lic. Nicolás Quiroga",
      url: site,
      telephone: `+${phone}`,
      sameAs: professionalProfiles.map((profile) => profile.href),
    },
    areaServed: [
      { "@type": "City", name: "Olivos" },
      { "@type": "AdministrativeArea", name: "Vicente López" },
      { "@type": "AdministrativeArea", name: "Zona Norte Buenos Aires" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Psicoanalista en Olivos — Lic. Nicolás Quiroga</title>
        <meta
          name="description"
          content="Psicoanalista en Olivos, Vicente López. Psicoanálisis para sobrepensamiento, ansiedad, insomnio, autoexigencia y repetición. Honorarios: $40.000 ARS."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Psicoanalista en Olivos — Lic. Nicolás Quiroga" />
        <meta
          property="og:description"
          content="Sesiones de psicoanálisis en Olivos. Un espacio clínico para trabajar sobrepensamiento, angustia, ansiedad, autoexigencia y repetición."
        />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
        <script type="application/ld+json">{JSON.stringify(service)}</script>
      </Helmet>

      <section className="border-b border-black/5 bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.1fr_.9fr] md:items-center md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Olivos · Vicente López</p>
            <h1 className="h-serif mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              Psicoanalista en Olivos
            </h1>
            <p className="mt-4 max-w-2xl text-sumi/75 leading-relaxed">
              Un espacio presencial para trabajar eso que insiste: la cabeza que no corta,
              la ansiedad, el insomnio, la autoexigencia, los vínculos que se repiten o un
              malestar que no termina de encontrar nombre.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-sumi px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-sumi/90"
              >
                Agendar primera sesión <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/ubicacion"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-sumi hover:bg-white/80"
              >
                Ver ubicación
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
            <img
              src="/media/lic-nicolas-quiroga-psicoanalista-olivos.webp"
              alt="Lic. Nicolás Quiroga, psicoanalista en Olivos"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: MapPin, title: "Consultorio en Olivos", text: "La dirección exacta se comparte al confirmar el turno. Zona de acceso cómodo desde Vicente López y alrededores." },
            { icon: Clock, title: "Encuadre claro", text: "Primera entrevista para ubicar la consulta, definir modalidad y decidir si tiene sentido iniciar un proceso." },
            { icon: ShieldCheck, title: "Reserva absoluta", text: "El trabajo clínico requiere intimidad, tiempo y cuidado. La confidencialidad no es un detalle administrativo." },
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
          <h2 className="h-serif text-3xl font-semibold">Cuándo consultar</h2>
          <div className="mt-5 space-y-4 text-sumi/75 leading-relaxed">
            <p>
              Muchas consultas empiezan con una frase imprecisa: “no sé bien qué me pasa”.
              Esa imprecisión no es un obstáculo. Es, muchas veces, el punto de partida.
            </p>
            <p>
              El psicoanálisis no apunta solo a eliminar un síntoma rápido, sino a leer qué
              función tiene, por qué se repite y qué lugar ocupa en la historia de cada quien.
            </p>
            <p>
              Si vivís en Olivos, Vicente López, Florida, La Lucila, Martínez o zona norte,
              la modalidad presencial puede ayudar a sostener un encuadre estable. También
              puede combinarse con sesiones online cuando haga falta.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-6 md:grid-cols-[.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Olivos · referencias</p>
            <h2 className="h-serif mt-2 text-3xl font-semibold">Perfiles donde también figuro</h2>
          </div>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-sumi/70">
              Además de este sitio, podés encontrar mi perfil profesional en algunos directorios
              y espacios públicos. La idea no es reemplazar la consulta por una vidriera, sino
              dejar señales consistentes: Lic. Nicolás Quiroga, psicoanalista clínico en Olivos
              y online.
            </p>
            <div className="flex flex-wrap gap-2">
              {professionalProfiles.map((profile) => (
                <a
                  key={profile.href}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-sumi/75 transition hover:bg-sumi hover:text-white"
                >
                  {profile.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">También trabajo online</h2>
            <p className="mt-3 text-sm leading-relaxed text-sumi/70">
              Si no estás cerca de Olivos o necesitás una modalidad más flexible, el trabajo
              online conserva el mismo encuadre clínico: horario, continuidad, palabra y transferencia.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/psicoanalisis-online" className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-white/80">
              Psicoanálisis online
            </Link>
            <Link to="/sobrepensamiento-overthinking" className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-white/80">
              Sobrepensamiento y ansiedad
            </Link>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent("Hola Nicolás, quería consultar por sesiones en Olivos.")}`}
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
