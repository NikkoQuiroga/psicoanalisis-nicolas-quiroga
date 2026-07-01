import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import AgendaForm from "../components/AgendaForm.jsx";

export default function Contacto() {
  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";
  const email = import.meta.env.VITE_CONTACT_EMAIL || "lic.nicolasquiroga@outlook.com";

  return (
    <>
      <Helmet>
        <title>Contacto · Agendá tu primera sesión — Lic. Nicolás Quiroga</title>
        <meta
          name="description"
          content="Agendá una primera consulta de psicoanálisis con Nicolás Quiroga. Atención en Olivos y online para sobrepensamiento, ansiedad, insomnio y repetición. Honorarios: $40.000 ARS / USD 35."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-washi border-b border-black/5">
        <div className="mx-auto max-w-5xl px-5 py-14 md:py-18">
          <p className="text-xs font-medium uppercase tracking-widest text-gold mb-3">
            Primera sesión
          </p>
          <h1 className="h-serif text-4xl md:text-5xl font-semibold text-sumi leading-tight mb-3">
            Agendá tu sesión
          </h1>
          <p className="text-base text-sumi/65 max-w-xl leading-relaxed">
            Si sentís que no podés apagar la cabeza, la primera consulta sirve
            para ubicar qué insiste y ver si este encuadre clínico tiene sentido.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-14 items-start">

          {/* Columna izquierda — info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sumi/50 mb-3">
                Modalidades
              </p>
              <div className="space-y-2 text-sm text-sumi/75 leading-relaxed">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                  <span><strong className="text-sumi/90">Presencial</strong> — Olivos, Vicente López (dirección exacta al confirmar turno)</span>
                </p>
                <p className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                  <span><strong className="text-sumi/90">Online</strong> — Toda Argentina y exterior</span>
                </p>
                <p className="flex items-start gap-2">
                  <Clock className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                  <span>Lunes a viernes, 9 a 21 h</span>
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sumi/50 mb-3">
                Contacto directo
              </p>
              <div className="space-y-2">
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent("Hola Nicolás, ¿coordinamos una sesión?")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-black/5 bg-white/80 px-4 py-3 text-sm hover:bg-white transition group"
                >
                  <MessageCircle className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-sumi/80 group-hover:text-sumi transition">WhatsApp</span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 rounded-xl border border-black/5 bg-white/80 px-4 py-3 text-sm hover:bg-white transition group"
                >
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-sumi/80 group-hover:text-sumi transition">{email}</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-sumi/4 border border-black/5 p-4 text-xs text-sumi/65 leading-relaxed space-y-1">
              <p className="font-semibold text-sumi/80 text-sm mb-1">Primer mes</p>
              <p>Honorarios: $40.000 ARS por sesión para Argentina y USD 35 para exterior.</p>
              <p className="mt-2">La frecuencia se define según el encuadre posible y el proceso.</p>
            </div>
          </motion.div>

          {/* Columna derecha — formulario */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm"
          >
            <p className="text-sm font-semibold text-sumi/80 mb-4">Completá el formulario</p>
            <AgendaForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
