import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { Brain, Moon, Repeat2, MessageCircle, CalendarDays, MessagesSquare, MapPin, Video, GraduationCap, ShieldCheck, Clock3 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import AgendaForm from "../components/AgendaForm.jsx";

function Reveal({ children, className = "" }) {
  const reducedMotion = useReducedMotion();
  return <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reducedMotion ? 0 : 0.5 }} className={className}>{children}</motion.div>;
}

const reasons = [
  { Icon: Brain, title: "La cabeza no para", text: "Le das vueltas a todo y te cuesta parar o tomar decisiones." },
  { Icon: Moon, title: "Te cuesta descansar", text: "La ansiedad, la angustia o el insomnio afectan tus días." },
  { Icon: Repeat2, title: "Algo se repite", text: "Conflictos en tus vínculos o una exigencia que no afloja, incluso cuando estás agotado." },
];
const steps = [
  { Icon: MessageCircle, title: "Me escribís", text: "Podés consultar disponibilidad o hacer una pregunta antes de empezar." },
  { Icon: CalendarDays, title: "Coordinamos", text: "Acordamos modalidad, horario y forma de pago antes del encuentro." },
  { Icon: MessagesSquare, title: "Conversamos", text: "Escuchamos qué te trae y vemos cómo seguir. No te obliga a continuar." },
];

export default function Home() {
  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";
  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent("Hola Nicolás, quisiera consultar por una primera entrevista.")}`;
  return (
    <>
      <Helmet>
        <title>Psicólogo en Olivos y psicoanálisis online | Nicolás Quiroga</title>
        <meta name="description" content="Nicolás Quiroga, psicólogo UBA y psicoanalista. Atención en Olivos y online. Conocé cómo es la primera entrevista, modalidades y honorarios. Consultá por WhatsApp." />
        <meta property="og:title" content="Psicólogo en Olivos y psicoanálisis online | Nicolás Quiroga" />
        <meta property="og:description" content="Un espacio para hablar de lo que te está pasando. Atención presencial en Olivos y online. Primera entrevista con Nicolás Quiroga." />
        <meta property="og:image" content="https://nicolasquiroga.com.ar/media/nicolas-quiroga-estudio-clinico.webp" />
      </Helmet>
      <section className="home-hero border-b border-black/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-10 pt-9 md:grid-cols-[1.12fr_0.88fr] md:items-center md:gap-14 md:py-16">
          <Reveal>
            <p className="home-eyebrow"><span className="h-px w-8 bg-moss/50" /> Psicólogo en Olivos · Atención online</p>
            <h1 className="h-serif mt-5 max-w-2xl text-[2.7rem] font-semibold leading-[1.02] sm:text-5xl md:text-[4.25rem]">Un espacio para hablar de lo que te está <span className="home-word">pasando.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sumi/80 md:text-lg">Soy Nicolás Quiroga, psicólogo y psicoanalista. Si te cuesta dejar de pensar, sentís ansiedad o algo se repite en tus vínculos, podemos empezar por escucharlo.</p>
            <a href={whatsapp} target="_blank" rel="noreferrer" data-wa-location="home_hero" className="home-contact mt-7"><MessageCircle aria-hidden="true" size={20} /> Consultar por WhatsApp</a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-sumi/65">No necesitás tener claro por dónde empezar.</p>
            <div className="mt-7 flex items-start gap-3 border-t border-black/10 pt-5 text-sm leading-relaxed text-sumi/75"><GraduationCap aria-hidden="true" size={22} className="shrink-0 text-moss" /><p>Lic. en Psicología · Universidad de Buenos Aires<br /><span className="text-sumi/60">M.N. 59.272</span></p></div>
          </Reveal>
          <Reveal className="home-portrait">
            <img src="/media/nicolas-quiroga-estudio-clinico.webp" alt="Nicolás Quiroga en su consultorio" width="640" height="640" fetchPriority="high" className="aspect-[5/6] w-full object-cover" />
            <div className="home-portrait-caption"><p className="h-serif text-2xl font-semibold">Nicolás Quiroga</p><p className="mt-1 text-sm">Psicólogo · Psicoanalista</p></div>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <Reveal className="grid gap-4 md:grid-cols-[1fr_0.85fr] md:gap-14">
          <div><p className="home-eyebrow">Un punto de partida</p><h2 className="h-serif mt-3 text-3xl font-semibold md:text-4xl">¿Qué te trae a consultar?</h2></div>
          <p className="text-base leading-relaxed text-sumi/75 md:self-end">Tal vez una preocupación concreta o un malestar que todavía no sabés cómo explicar. No hace falta esperar a estar desbordado para hablar.</p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reasons.map(({ Icon, title, text }) => <Reveal key={title}><article className="home-reason h-full"><span className="home-icon"><Icon aria-hidden="true" strokeWidth={1.5} size={25} /></span><h3 className="h-serif mt-5 text-2xl font-semibold">{title}</h3><p className="mt-3 text-base leading-relaxed text-sumi/75">{text}</p></article></Reveal>)}
        </div>
      </section>
      <section className="border-y border-black/10 bg-white/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <Reveal><p className="home-eyebrow">Empezar, de a poco</p><h2 className="h-serif mt-3 text-3xl font-semibold md:text-4xl">La primera entrevista empieza con un mensaje.</h2></Reveal>
          <div className="home-steps mt-9 grid gap-8 md:grid-cols-3 md:gap-10">
            {steps.map(({ Icon, title, text }) => <Reveal key={title}><article className="relative"><span className="home-step-icon"><Icon aria-hidden="true" size={24} strokeWidth={1.5} /></span><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 max-w-xs text-base leading-relaxed text-sumi/75">{text}</p></article></Reveal>)}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <Reveal className="mb-8"><p className="home-eyebrow">Dos formas de encontrarnos</p><h2 className="h-serif mt-3 text-3xl font-semibold md:text-4xl">Un tiempo y un lugar para vos.</h2></Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl border border-black/10 bg-white/65">
            <img src="/media/consultorio-psicoanalisis-olivos-divan.webp" alt="Nicolás Quiroga sentado en el diván del consultorio en Olivos" loading="lazy" width="800" height="500" className="aspect-[16/10] w-full object-cover object-[center_20%]" />
            <article className="p-6 md:p-7"><p className="home-eyebrow"><MapPin aria-hidden="true" size={17} /> Olivos · Vicente López</p><h3 className="h-serif mt-3 text-3xl font-semibold">Presencial, en el consultorio.</h3><p className="mt-3 text-base leading-relaxed text-sumi/75">Un espacio reservado para conversar. La dirección exacta se comparte al confirmar el turno.</p><Link to="/psicologo-olivos" className="home-text-link">Conocer el consultorio en Olivos</Link></article>
          </Reveal>
          <Reveal className="home-online overflow-hidden rounded-3xl">
            <div className="home-video-visual" aria-hidden="true"><div className="home-video-orbit" /><div className="home-video-frame"><Video strokeWidth={1} size={56} /><span>Un encuentro, a la distancia.</span></div></div>
            <article className="relative p-6 md:p-7"><p className="home-eyebrow text-[#DDC5A6]"><Video aria-hidden="true" size={17} /> Por videollamada</p><h3 className="h-serif mt-3 text-3xl font-semibold">Online, desde tu espacio.</h3><p className="mt-3 text-base leading-relaxed text-white/80">Desde un lugar donde puedas hablar con privacidad. Atención en Argentina y consultas desde el exterior según posibilidad de atención.</p><Link to="/psicoanalisis-online" className="home-text-link text-white">Conocer la atención online</Link></article>
          </Reveal>
        </div>
      </section>
      <section id="agenda" className="home-closing scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-9 px-5 py-12 md:grid-cols-[0.95fr_1.05fr] md:gap-16 md:py-16">
          <Reveal>
            <p className="home-eyebrow text-[#DDC5A6]">Tu primera entrevista</p><h2 className="h-serif mt-4 text-4xl font-semibold leading-tight md:text-5xl">Podemos empezar<br />por lo que te pasa hoy.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/80">Escribime para consultar disponibilidad o hacer una pregunta. Después, coordinamos un horario para encontrarnos.</p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80"><span className="inline-flex items-center gap-2"><ShieldCheck aria-hidden="true" size={18} /> Atención confidencial</span><span className="inline-flex items-center gap-2"><Clock3 aria-hidden="true" size={18} /> Sesiones de 40 minutos</span></div>
            <div className="mt-8 border-t border-white/20 pt-5"><p className="flex items-center gap-2 font-semibold"><GraduationCap aria-hidden="true" size={20} /> Formación y recorrido</p><p className="mt-3 text-base leading-relaxed text-white/75">Licenciado en Psicología por la UBA. Posgrado en Psicoanálisis Lacaniano en ALEF.</p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold underline underline-offset-4"><Link to="/sobre-mi">Sobre mí</Link><Link to="/testimonios">Reseñas y testimonios</Link><Link to="/faq">Preguntas frecuentes</Link></div></div>
          </Reveal>
          <Reveal><div id="agenda-form" className="rounded-3xl bg-[#FAF7F2] p-5 text-sumi shadow-soft md:p-7"><AgendaForm /><p className="mt-4 border-t border-black/10 pt-4 text-sm leading-relaxed text-sumi/65">Lunes a viernes, de 9 a 21 h, según disponibilidad.</p></div></Reveal>
        </div>
      </section>
    </>
  );
}
