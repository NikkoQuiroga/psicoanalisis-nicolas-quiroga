import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, BookOpen, ExternalLink, MessageCircle } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const academicWorkUrl = "https://www.aacademica.org/jornadas.psicopatologia.30.aniversario/101";

export default function SobreMi() {
  return (
    <>
      <Helmet>
        <title>Sobre mí — Nicolás Quiroga, psicoanalista lacaniano</title>
        <meta
          name="description"
          content="Nicolás Quiroga, psicoanalista lacaniano (M.N. 59.272). Cómo pienso la clínica, mi formación y por qué trabajo desde Lacan."
        />
      </Helmet>

      {/* Header */}
      <div className="border-b border-black/5 bg-white/60">
        <div className="mx-auto max-w-4xl px-5 py-10 md:py-14">
          <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-sumi/60">Sobre mí</p>
              <h1 className="h-serif mt-1 text-3xl md:text-4xl font-semibold">
                Nicolás Quiroga
              </h1>
              <p className="mt-1 text-sumi/60 text-sm">
                Psicoanalista lacaniano · M.N. 59.272
              </p>
              <p className="mt-3 flex items-center gap-1.5 text-sm text-sumi/70">
                <MapPin className="h-4 w-4 shrink-0" />
                Olivos (Vicente López) y online para toda Argentina
              </p>
            </div>
            <div className="mx-auto md:mx-0 h-36 w-36 md:h-44 md:w-44 shrink-0 overflow-hidden rounded-full border border-black/5 shadow-md ring-4 ring-white">
              <img
                src="/media/lic-rodrigo-nicolas-quiroga-martinez.webp"
                alt="Nicolás Quiroga, psicoanalista lacaniano"
                className="h-full w-full object-cover [filter:saturate(.9)_contrast(1.05)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-10 md:py-14 space-y-10">

        {/* Cómo pienso la clínica */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="h-serif text-2xl font-semibold mb-4">Cómo pienso la clínica</h2>
          <div className="space-y-4 text-sumi/80 leading-relaxed">
            <p>
              El psicoanálisis no apunta a que te sientas mejor cuanto antes: apunta a que puedas
              leer lo que te pasa. El síntoma no es el problema a eliminar — es la entrada al trabajo.
            </p>
            <p>
              Trabajo desde Lacan. Eso significa que en sesión el lenguaje importa: un lapsus, una
              imagen que vuelve, una frase que se repite sin que uno la busque — ahí está la materia.
              El inconsciente habla, y el análisis es un trabajo de escucha sobre ese texto.
            </p>
            <p>
              No ofrezco protocolos ni técnicas. Ofrezco presencia, escucha y una apuesta por el
              sujeto que está más allá de sus síntomas. El análisis no tiene un número fijo de
              sesiones: dura lo que el analizante necesite.
            </p>
            <p>
              No hago coaching. No hago autoayuda. No hago mindfulness ni terapia basada en
              evidencia. Hago psicoanálisis — y en eso me concentro.
            </p>
          </div>
        </motion.section>

        {/* Formación */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-5">
            <GraduationCap className="h-5 w-5 text-moss" />
            <h2 className="text-lg font-semibold">Formación</h2>
          </div>
          <ul className="space-y-3 text-sm text-sumi/80">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-moss/70" />
              <div>
                <strong>Licenciado en Psicología</strong> — Universidad de Buenos Aires (UBA)
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-moss/70" />
              <div>
                <strong>Psicoanálisis lacaniano</strong> — Formación de posgrado en ALEF (Asociación Latinoamericana de Estudios y Freudianos)
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-moss/70" />
              <div>
                <strong>13 años de clínica</strong> — Trayectoria sostenida en procesos analíticos individuales,
                presencial y online
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-moss/70" />
              <div>
                <strong>Matrícula nacional activa</strong> — M.N. 59.272
              </div>
            </li>
          </ul>
        </motion.section>

        {/* Producción académica */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-moss" />
            <h2 className="text-lg font-semibold">Producción académica</h2>
          </div>
          <p className="text-sm leading-relaxed text-sumi/75">
            Participación en jornadas académicas de Psicopatología Cátedra II - Universidad de Buenos Aires, con trabajo disponible
            en Acta Académica. Lo incluyo como parte del recorrido de formación y escritura
            dentro del campo clínico.
          </p>
          <a
            href={academicWorkUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:bg-sumi hover:text-white"
          >
            Ver en Acta Académica
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.section>

        {/* Proyecto periférico */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm"
        >
          <div className="mb-4 flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-moss" />
            <h2 className="text-lg font-semibold">Proyecto digital</h2>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-sumi/75">
            <p>
              También desarrollo <strong>CoachPsi</strong>, un proyecto periférico ligado a
              tecnología, orientación y salud mental. Me interesa pensar qué puede hacer una
              herramienta digital cuando no pretende reemplazar la clínica.
            </p>
            <p>
              CoachPsi no es un tratamiento psicológico ni una consulta profesional. Funciona
              como una exploración sobre acompañamiento, primeras orientaciones y derivación
              responsable cuando hace falta hablar con alguien.
            </p>
          </div>
          <a
            href="https://coachpsi.com"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:bg-sumi hover:text-white"
          >
            Ver CoachPsi
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.section>

        {/* Otros intereses */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-moss" />
            <h2 className="text-lg font-semibold">Lecturas e intereses</h2>
          </div>
          <p className="text-sm text-sumi/75 leading-relaxed">
            Mi lectura clínica dialoga con la filosofía continental, especialmente con sus vertientes materialistas: pensar el sujeto sin separarlo del cuerpo, el lenguaje y las condiciones concretas de vida. También integro referencias de Oriente, en particular de la estética japonesa. Las artes marciales —Aikido y Jiu-Jitsu Brasileño— forman parte de esa misma línea: una filosofía material y aplicada al cuerpo.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-gold/30 bg-gold/5 p-6 text-center"
        >
          <p className="text-sumi/80 font-medium">
            Si algo de esto resuena, podemos trabajarlo.
          </p>
          <p className="mt-1 text-sm text-sumi/60">
            Primera sesión sin compromiso de continuidad.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="/#agenda"
              className="inline-flex items-center gap-2 rounded-full bg-sumi px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-sumi/90"
            >
              Agenda tu sesión
            </a>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-white/90"
            >
              Leer el blog
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
