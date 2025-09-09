// src/pages/Servicios.jsx
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import { CircleSlash, Activity, AlertTriangle, Compass } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

const ITEMS = [
  {
    icon: CircleSlash,
    title: "Inhibición",
    blurb:
      "Cuando algo que podés hacer no sale: postergás, te trabás, “no me sale”. Leemos la escena que frena, sin culpas.",
    approach:
      "Abordaje: conversación clínica + pequeños ensayos (si ayudan) para habilitar movimientos posibles.",
  },
  {
    icon: Activity,
    title: "Síntoma",
    blurb:
      "Molesta, pero también sostiene algo. Buscamos su función, historizamos y cambiamos la escena desde la palabra.",
    approach:
      "Abordaje: psicoanálisis con registro breve de repeticiones y decisiones concretas en lo cotidiano.",
  },
  {
    icon: AlertTriangle,
    title: "Angustia / Ansiedad",
    blurb:
      "Nudo, vacío, alerta sin motivo claro. No es un defecto: es una señal. Ubicarla devuelve margen de maniobra.",
    approach:
      "Abordaje: palabra + recursos puntuales (respiración 4–6, anclajes sensoriales) cuando sirven.",
  },
  {
    icon: Compass,
    title: "Desarrollo personal",
    blurb:
      "Entre ideales y miedos, ordenar proyectos. Sin recetas ni sobreexigencia: explorar lo que te mueve, paso a paso.",
    approach:
      "Abordaje: entrevistas clínicas + experimentos acotados en la semana (si querés).",
  },
];

export default function Servicios() {
  return (
    <>
      <Helmet>
        <title>Servicios — Inhibición, síntoma y angustia | Nicolás Quiroga</title>
        <meta
          name="description"
          content="Trabajo clínico focal en inhibición, síntoma, angustia/ansiedad y desarrollo personal. Psicoanálisis con inspiración japonesa y recursos breves cuando son útiles."
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
            Inhibición, síntoma y angustia
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.05 }}
            className="mt-2 text-sumi/75 max-w-prose"
          >
            Psicoanálisis con inspiración japonesa: menos receta, más espacio. Cuando ayuda, sumo recursos breves para el día a día.
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
