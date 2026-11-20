import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { Brain, Moon, Repeat2, MessageCircle, CalendarDays, MessagesSquare, MapPin, Video, GraduationCap, Clock3 } from "lucide-react";
import AgendaForm from "../components/AgendaForm.jsx";
import ReviewHighlights from "../components/ReviewHighlights.jsx";
import { homeFaqs } from "../content/homeFaqs.js";

const reasons = [
  { Icon: Brain, title: "Pensás y volvés a pensar", text: "Revisás conversaciones, anticipás problemas o dudás de cada decisión." },
  { Icon: Moon, title: "Te cuesta descansar", text: "El día termina, pero la ansiedad o las preocupaciones siguen ahí." },
  { Icon: Repeat2, title: "Volvés al mismo lugar", text: "Entendés lo que te pasa, pero ciertos conflictos o exigencias se repiten." },
];
const steps = [
  { Icon: MessageCircle, title: "Me escribís", text: "Por WhatsApp, para consultar disponibilidad o hacer una pregunta." },
  { Icon: CalendarDays, title: "Coordinamos", text: "Acordamos modalidad, horario y forma de pago antes de empezar." },
  { Icon: MessagesSquare, title: "Conversamos", text: "En la primera entrevista hablamos de lo que te trae y vemos cómo seguir." },
];
export default function Home() {
  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";
  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent("Hola Nicolás, quisiera consultar por una primera entrevista.")}`;
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: homeFaqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  return <>
    <Helmet>
      <title>Psicólogo en Olivos y psicoanálisis online | Nicolás Quiroga</title>
      <meta name="description" content="Nicolás Quiroga, psicólogo UBA y psicoanalista. Atención en Olivos y online para ansiedad y sobrepensamiento. Sesiones de 40 minutos. Honorarios y primera entrevista." />
      <meta property="og:title" content="Psicólogo en Olivos y psicoanálisis online | Nicolás Quiroga" />
      <meta property="og:description" content="Cuando pensar tanto no te deja estar bien. Atención en Olivos y online con Nicolás Quiroga. Conocé honorarios, opiniones y cómo empezar." />
      <meta name="twitter:image" content="https://nicolasquiroga.com.ar/media/consultorio-psicoanalisis-olivos-divan.webp" />
      <meta property="og:image" content="https://nicolasquiroga.com.ar/media/consultorio-psicoanalisis-olivos-divan.webp" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <section className="border-b border-black/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-9 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12 md:py-14">
        <div>
          <p className="home-eyebrow">Psicólogo en Olivos · Atención online</p>
          <h1 className="h-serif mt-4 max-w-2xl text-[2.65rem] font-semibold leading-[1.04] sm:text-5xl md:text-6xl">Cuando pensar tanto no te deja <span className="home-word">estar bien.</span></h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-sumi/80 md:text-lg">Soy Nicolás Quiroga, psicólogo UBA y psicoanalista. Atiendo a adultos con ansiedad, dificultad para descansar o conflictos que se repiten. Podemos empezar por lo que te está pasando hoy.</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-sumi/80"><span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" size={17} /> Olivos y online</span><span className="inline-flex items-center gap-2"><Clock3 aria-hidden="true" size={17} /> Sesiones de 40 minutos</span></div>
          <p className="mt-3 text-base font-semibold">$40.000 ARS por sesión <span className="font-normal text-sumi/70">· USD 35 para exterior</span></p>
          <a href={whatsapp} target="_blank" rel="noreferrer" data-wa-location="home_hero" className="home-contact mt-6"><MessageCircle aria-hidden="true" size={20} /> Consultar primera entrevista</a>
          <p className="mt-3 text-sm leading-relaxed text-sumi/65">No necesitás saber por dónde empezar. Consultar no reserva un turno.</p>
          <p className="mt-5 flex items-center gap-2 text-sm text-sumi/70"><GraduationCap aria-hidden="true" size={19} /> Universidad de Buenos Aires · M.N. 59.272</p>
        </div>
        <div className="home-portrait">
          <img src="/media/consultorio-psicoanalisis-olivos-divan.webp" alt="Nicolás Quiroga sentado en el diván de su consultorio en Olivos" width="1024" height="1536" fetchPriority="high" className="aspect-[5/6] w-full object-cover object-[center_30%]" />
          <div className="home-portrait-caption"><p className="h-serif text-2xl font-semibold">Nicolás Quiroga</p><p className="mt-1 text-sm">Psicólogo · Psicoanalista</p></div>
        </div>
      </div>
    </section>
    <ReviewHighlights />
    <section className="mx-auto max-w-6xl px-5 py-10 md:py-12">
      <h2 className="h-serif text-3xl font-semibold md:text-4xl">¿Te pasa algo de esto?</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">{reasons.map(({ Icon, title, text }) => <article key={title} className="border-t border-black/15 pt-4"><Icon aria-hidden="true" size={24} strokeWidth={1.5} className="text-moss" /><h3 className="mt-3 text-lg font-semibold">{title}</h3><p className="mt-2 text-base leading-relaxed text-sumi/75">{text}</p></article>)}</div>
      <p className="mt-5 text-sm leading-relaxed text-sumi/70">También podés consultar por algo que todavía te cuesta explicar.</p>
    </section>
    <section id="como-empezar" className="border-y border-black/10 bg-white/60 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-12">
        <h2 className="h-serif text-3xl font-semibold md:text-4xl">¿Cómo empiezo?</h2>
        <div className="home-steps mt-7 grid gap-7 md:grid-cols-3 md:gap-10">{steps.map(({ Icon, title, text }) => <article key={title} className="relative"><span className="home-step-icon"><Icon aria-hidden="true" size={24} strokeWidth={1.5} /></span><h3 className="mt-4 text-lg font-semibold">{title}</h3><p className="mt-2 max-w-xs text-base leading-relaxed text-sumi/75">{text}</p></article>)}</div>
        <p className="mt-6 text-sm text-sumi/70">La primera entrevista no te obliga a continuar.</p>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-5 py-10 md:py-12">
      <h2 className="h-serif text-3xl font-semibold md:text-4xl">¿Dónde nos encontramos?</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-black/10 bg-white/60 p-5"><MapPin aria-hidden="true" className="text-moss" size={24} /><h3 className="mt-3 text-xl font-semibold">Presencial en Olivos</h3><p className="mt-3 text-base leading-relaxed text-sumi/75">Consultorio en Olivos, Vicente López. La dirección exacta se comparte al confirmar el turno.</p><Link to="/psicologo-olivos" className="home-text-link">Conocer el consultorio</Link></article>
        <article className="rounded-2xl border border-black/10 bg-white/60 p-5"><Video aria-hidden="true" className="text-moss" size={24} /><h3 className="mt-3 text-xl font-semibold">Online por videollamada</h3><p className="mt-3 text-base leading-relaxed text-sumi/75">Desde un lugar privado. Atención en Argentina y consultas desde el exterior según posibilidad de atención.</p><Link to="/psicoanalisis-online" className="home-text-link">Conocer la atención online</Link></article>
      </div>
    </section>
    <section className="border-y border-black/10 bg-white/60">
      <div className="mx-auto max-w-3xl px-5 py-10 md:py-12"><h2 className="h-serif text-3xl font-semibold md:text-4xl">Antes de consultar</h2><div className="mt-6">{homeFaqs.map(faq => <details key={faq.question} className="border-b border-black/15 py-4"><summary className="cursor-pointer text-base font-semibold leading-relaxed">{faq.question}</summary><p className="mt-3 text-base leading-relaxed text-sumi/75">{faq.answer}</p></details>)}</div><Link to="/faq" className="home-text-link">Ver todas las preguntas frecuentes</Link></div>
    </section>
    <section id="agenda" className="scroll-mt-28">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-2 md:gap-14 md:py-12">
        <div><h2 className="h-serif text-3xl font-semibold md:text-4xl">Consultá por una primera entrevista.</h2><p className="mt-4 text-base leading-relaxed text-sumi/75">Escribime para consultar disponibilidad o hacer una pregunta. Atiendo de lunes a viernes, de 9 a 21 h, según los horarios disponibles.</p><div className="mt-6 border-t border-black/10 pt-5"><p className="font-semibold">¿Querés conocer cómo trabajo?</p><p className="mt-2 text-base leading-relaxed text-sumi/75">Soy licenciado en Psicología por la UBA, con posgrado en Psicoanálisis Lacaniano en ALEF.</p><Link to="/sobre-mi" className="home-text-link">Mi formación y recorrido</Link></div></div>
        <div id="agenda-form" className="rounded-3xl border border-black/10 bg-white/80 p-5 md:p-6"><AgendaForm /></div>
      </div>
    </section>
  </>;
}
