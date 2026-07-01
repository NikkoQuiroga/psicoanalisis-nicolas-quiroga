// src/pages/Servicios.jsx
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import { CircleSlash, Activity, AlertTriangle, Moon } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

const ITEMS = [
  {
    icon: CircleSlash,
    title: "Sobrepensamiento",
    blurb:
      "Cuando la cabeza no corta: revisás conversaciones, anticipás escenarios, dudás de decisiones y llegás agotado al final del día.",
    approach:
      "Abordaje: leer qué función cumple ese pensamiento que insiste, sin reducirlo a una falla de control.",
  },
  {
    icon: Activity,
    title: "Repetición",
    blurb:
      "Algo vuelve aunque ya lo entendiste: una escena, una elección, una forma de exigirte o de quedar tomado por el deseo del otro.",
    approach:
      "Abordaje: psicoanálisis, palabra y construcción caso por caso de una hipótesis clínica.",
  },
  {
    icon: AlertTriangle,
    title: "Angustia y ansiedad",
    blurb:
      "Nudo, vacío, alerta sin causa clara. No como defecto personal, sino como señal de algo que pide ser leído.",
    approach:
      "Abordaje: ubicar qué se juega en esa angustia, cómo aparece en el cuerpo y qué relación tiene con tu historia.",
  },
  {
    icon: Moon,
    title: "Insomnio y autoexigencia",
    blurb:
      "Cuando el día termina pero la cabeza sigue: pendientes, culpa, rendimiento, conversaciones imaginarias, error posible.",
    approach:
      "Abordaje: trabajar la exigencia y la lógica que sostiene ese estado de alerta.",
  },
];

export default function Servicios() {
  return (
    <>
      <Helmet>
        <title>Motivos de consulta — Sobrepensamiento y psicoanálisis | Nicolás Quiroga</title>
        <meta
          name="description"
          content="Motivos de consulta en psicoanálisis: sobrepensamiento, ansiedad, insomnio, autoexigencia y repetición. Atención online y presencial en Olivos."
        />
      </Helmet>

      {/* Intro breve */}
      <Section className="pt-6 md:pt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="h-serif text-3xl md:text-4xl font-semibold"
          >
            Motivos de consulta
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.05 }}
            className="mt-2 text-sumi/75 max-w-prose"
          >
            No trabajo con recetas ni protocolos. Trabajo desde el psicoanálisis: una escucha clínica para leer lo que insiste, especialmente cuando pensar más ya no alcanza.
          </motion.p>
        </div>
      </Section>

      {/* Bloques — minimal */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <motion.article
              key={it.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: 0.04 * i }}
              className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <it.icon className="w-5 h-5 text-moss" />
                <h2 className="text-lg font-semibold">{it.title}</h2>
              </div>
              <p className="mt-2 text-sm text-sumi/80">{it.blurb}</p>
              <p className="mt-3 text-sm text-sumi/70">{it.approach}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <em className="text-sm text-sumi/70">Lo esencial no siempre es agregar: a veces es hacer espacio.</em>
          <Link
            to="/agenda"
            className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm hover:bg-white"
          >
            Agenda tu primera sesión
          </Link>
        </div>
      </Section>
    </>
  );
}
