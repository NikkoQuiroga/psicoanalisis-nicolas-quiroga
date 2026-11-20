import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import AgendaForm from "../components/AgendaForm.jsx";

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
      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-6xl gap-9 px-5 py-10 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-16">
          <div>
            <p className="text-sm font-semibold text-moss">Psicólogo en Olivos · Atención online</p>
            <h1 className="h-serif mt-4 max-w-2xl text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">Un espacio para hablar de lo que te está pasando.</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-sumi/80 md:text-lg">Soy Nicolás Quiroga, psicólogo y psicoanalista. Si te cuesta dejar de pensar, sentís ansiedad o algo se repite en tus vínculos, podemos empezar por escucharlo.</p>
            <a href={whatsapp} target="_blank" rel="noreferrer" data-wa-location="home_hero" className="mt-6 inline-flex rounded-full bg-sumi px-6 py-3 text-base font-semibold text-white hover:bg-sumi/90">Consultar por WhatsApp</a>
            <p className="mt-3 text-sm text-sumi/70">Coordinamos una primera entrevista. No necesitás tener claro por dónde empezar.</p>
            <p className="mt-5 text-sm text-sumi/70">Lic. en Psicología · UBA · M.N. 59.272</p>
          </div>
          <img src="/media/nicolas-quiroga-estudio-clinico.webp" alt="Nicolás Quiroga en su consultorio" width="640" height="640" fetchPriority="high" className="aspect-square w-full rounded-3xl object-cover" />
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h2 className="h-serif text-3xl font-semibold md:text-4xl">¿Qué te trae a consultar?</h2>
          <p className="mt-4 text-base leading-relaxed text-sumi/80">Tal vez una preocupación concreta, una dificultad para descansar o un malestar que todavía no sabés cómo explicar. No hace falta esperar a estar desbordado para hablar.</p>
        </div>
        <ul className="space-y-3 text-base leading-relaxed text-sumi/80">
          <li className="border-b border-black/10 pb-3">Le das vueltas a todo y te cuesta parar o tomar decisiones.</li>
          <li className="border-b border-black/10 pb-3">La ansiedad, la angustia o el insomnio afectan tus días.</li>
          <li>Se repiten conflictos en tus vínculos o te exigís incluso cuando estás agotado.</li>
        </ul>
      </section>
      <section className="border-y border-black/10 bg-white/55">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <h2 className="h-serif text-3xl font-semibold md:text-4xl">Cómo es la primera entrevista</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-sumi/80">Conversamos sobre lo que te preocupa y cómo está afectando tu vida. Podés preguntarme cómo trabajo. Antes de empezar acordamos el horario y la forma de pago; después conversamos sobre cómo seguir. La primera entrevista no te obliga a continuar.</p>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-black/10 bg-white/70 p-5">
              <h3 className="text-xl font-semibold">Presencial en Olivos</h3>
              <p className="mt-3 text-base leading-relaxed text-sumi/80">Consultorio en Olivos, Vicente López. La dirección exacta se comparte al confirmar el turno.</p>
              <Link to="/psicologo-olivos" className="mt-4 inline-block font-semibold underline underline-offset-4">Conocer el consultorio en Olivos</Link>
            </article>
            <article className="rounded-2xl border border-black/10 bg-white/70 p-5">
              <h3 className="text-xl font-semibold">Psicoanálisis online</h3>
              <p className="mt-3 text-base leading-relaxed text-sumi/80">Por videollamada, desde un lugar privado. Atención en Argentina y consultas desde el exterior según posibilidad de atención.</p>
              <Link to="/psicoanalisis-online" className="mt-4 inline-block font-semibold underline underline-offset-4">Conocer la atención online</Link>
            </article>
          </div>
        </div>
      </section>
      <section id="agenda" className="mx-auto grid max-w-6xl scroll-mt-28 gap-8 px-5 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h2 className="h-serif text-3xl font-semibold md:text-4xl">Consultá por una primera entrevista</h2>
          <p className="mt-4 text-base leading-relaxed text-sumi/80">Escribime para consultar disponibilidad o hacer una pregunta antes de empezar. Atiendo de lunes a viernes, de 9 a 21 h, según los horarios disponibles.</p>
          <div className="mt-8 border-t border-black/10 pt-5">
            <p className="font-semibold">Formación y recorrido</p>
            <p className="mt-2 text-base leading-relaxed text-sumi/80">Licenciado en Psicología por la Universidad de Buenos Aires. Posgrado en Psicoanálisis Lacaniano en ALEF.</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold underline underline-offset-4"><Link to="/sobre-mi">Sobre mí</Link><Link to="/testimonios">Reseñas y testimonios</Link><Link to="/faq">Preguntas frecuentes</Link></div>
          </div>
        </div>
        <div id="agenda-form" className="rounded-3xl border border-black/10 bg-white/80 p-5 md:p-6"><AgendaForm /></div>
      </section>
    </>
  );
}
