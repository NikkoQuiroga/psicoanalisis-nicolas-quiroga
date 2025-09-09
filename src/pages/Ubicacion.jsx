import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { motion } from "framer-motion";
import Section from "../components/Section.jsx";
import { MapPin, Train, Car, Wifi, Clock } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function Ubicacion() {
  return (
    <>
      <Helmet>
        <title>Ubicación y modalidad — Nicolás Quiroga</title>
        <meta name="description" content="Consultorio en Olivos (Vicente López) y modalidad online. Cómo llegar, qué esperar del espacio, y un pequeño ritual de inicio." />
      </Helmet>

      <Section className="pt-6 md:pt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.h1 className="h-serif text-3xl md:text-4xl font-semibold" variants={fadeUp} initial="hidden" animate="show">
            Dónde y cómo nos encontramos
          </motion.h1>
          <motion.p className="mt-2 text-sumi/75 max-w-prose" variants={fadeUp} initial="hidden" animate="show" transition={{ delay: .05 }}>
            Llegar también es parte del trabajo. Afuera, el movimiento; adentro, la luz. En online, armamos un “cuarto propio” por 45 minutos.
          </motion.p>
        </div>
      </Section>

      {/* Paneles: Antes de entrar / El espacio / Online / Cómo llegar */}
      <Section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-4 md:grid-cols-2">
          <motion.article className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }}>
            <h2 className="font-semibold">Antes de entrar</h2>
            <p className="mt-1 text-sm text-sumi/80">
              Si venís con tiempo, una caminata corta por Olivos ayuda a cambiar de frecuencia. Llegar unos minutos antes permite que el cuerpo alcance a la palabra.
            </p>
          </motion.article>

          <motion.article className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }} transition={{ delay: .05 }}>
            <h2 className="font-semibold">El espacio</h2>
            <p className="mt-1 text-sm text-sumi/80">
              Ambiente luminoso, silencio trabajado —no absoluto—. Lo de afuera entra apenas, como recordatorio de que la vida sigue. Puntualidad: cuidamos la franja que reservamos.
            </p>
          </motion.article>

          <motion.article className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }}>
            <h2 className="font-semibold">Online</h2>
            <ul className="mt-1 text-sm text-sumi/80 space-y-1">
              <li className="flex items-center gap-2"><Wifi className="w-4 h-4" /> Auriculares y conexión estable.</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Aviso en casa de que estás en sesión.</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Un vaso de agua; teléfono en silencio.</li>
            </ul>
          </motion.article>

          <motion.article className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }} transition={{ delay: .05 }}>
            <h2 className="font-semibold">Cómo llegar (Olivos)</h2>
            <ul className="mt-1 text-sm text-sumi/80 space-y-1">
              <li className="flex items-center gap-2"><Train className="w-4 h-4" /> Tren Mitre (ramal Tigre) — Estación Olivos.</li>
              <li className="flex items-center gap-2"><Car className="w-4 h-4" /> Estacionamiento en la zona; vení con tiempo.</li>
            </ul>
            <div className="mt-3 aspect-[16/9] w-full overflow-hidden rounded-xl border border-black/5 bg-white">
              <iframe
                title="Mapa Olivos"
                width="100%" height="100%" style={{ border: 0 }}
                loading="lazy" allowFullScreen
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
            <p className="text-sm text-sumi/80">“El deseo orienta aunque no cierre.” — inspirado en Lacan</p>
            <a href="/agenda" className="mt-4 inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm hover:bg-white/90">
              Elegí presencial u online
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
