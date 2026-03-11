import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { MapPin, Train, Car, Wifi, Clock, Navigation } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function Ubicacion() {
  return (
    <>
      <Helmet>
        <title>Consultorio en Olivos y sesiones online | Nicolás Quiroga</title>
        <meta
          name="description"
          content="Psicólogo en Olivos (Vicente López): cómo llegar al consultorio, opciones de transporte y modalidad online para Argentina y exterior."
        />
        <meta
          name="keywords"
          content="psicólogo en Olivos, consultorio psicológico en Vicente López, terapia presencial Olivos, psicólogo online Argentina"
        />
      </Helmet>

      <Section className="pt-6 md:pt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.h1
            className="h-serif text-3xl md:text-4xl font-semibold"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Ubicación del consultorio en Olivos y modalidad online
          </motion.h1>
          <motion.p
            className="mt-2 text-sumi/75 max-w-prose"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.05 }}
          >
            Atiendo de forma presencial en Olivos (Vicente López), en una zona
            de fácil acceso, y también online por videollamada para quienes
            prefieren sostener el proceso desde su casa o viven en otra ciudad.
          </motion.p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-4 md:grid-cols-2">
          <motion.article
            className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-semibold">Consultorio presencial (Olivos)</h2>
            <p className="mt-1 text-sm text-sumi/80">
              El espacio está pensado para trabajar con privacidad y
              tranquilidad. Si venís unos minutos antes, mejor: llegar sin
              correr ayuda a aprovechar mejor la sesión.
            </p>
            <p className="mt-2 text-sm text-sumi/80 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Zona Av. del Libertador, a metros de la Estación Olivos.
            </p>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.05 }}
          >
            <h2 className="font-semibold">Cómo llegar al consultorio</h2>
            <ul className="mt-2 text-sm text-sumi/80 space-y-1">
              <li className="flex items-center gap-2">
                <Train className="w-4 h-4" /> Tren Mitre (ramal Tigre) ·
                Estación Olivos.
              </li>
              <li className="flex items-center gap-2">
                <Car className="w-4 h-4" /> En auto, hay estacionamiento en la
                zona (recomendado venir con margen).
              </li>
              <li className="flex items-center gap-2">
                <Navigation className="w-4 h-4" /> También llegás rápido desde
                Vicente López, Núñez y zona norte.
              </li>
            </ul>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-semibold">Sesiones online</h2>
            <p className="mt-1 text-sm text-sumi/80">
              Si hacés terapia online, la propuesta es la misma: continuidad,
              foco clínico y un espacio cuidado. Funciona muy bien cuando hay
              una rutina clara de horarios.
            </p>
            <ul className="mt-2 text-sm text-sumi/80 space-y-1">
              <li className="flex items-center gap-2">
                <Wifi className="w-4 h-4" /> Conexión estable y auriculares.
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Un lugar sin interrupciones durante
                la sesión.
              </li>
            </ul>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.05 }}
          >
            <h2 className="font-semibold">Mapa</h2>
            <div className="mt-3 aspect-[16/9] w-full overflow-hidden rounded-xl border border-black/5 bg-white">
              <iframe
                title="Mapa del consultorio en Olivos"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Olivos+Buenos+Aires&output=embed"
              />
            </div>
          </motion.article>
        </div>
      </Section>

      <Section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-black/5 bg-white/70 p-5 text-center">
            <p className="text-sm text-sumi/80">
              Si querés consultar disponibilidad o resolver dudas puntuales,
              escribime por WhatsApp.
            </p>
            <a
              href="/contacto"
              className="mt-4 inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm hover:bg-white/90"
            >
              Ir a contacto
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
