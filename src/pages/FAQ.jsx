import React, { useState } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { faqCategories as categories } from "../content/faq.js";

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/6 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-sumi/90 group-hover:text-sumi transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={[
            "shrink-0 mt-0.5 text-sumi/40 transition-transform duration-200",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-sumi/70 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";
  const site = (import.meta.env.VITE_SITE_URL || "https://nicolasquiroga.com.ar").replace(/\/$/, "");
  const url = `${site}/faq`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    inLanguage: "es-AR",
    mainEntity: categories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    ),
  };

  return (
    <>
      <Helmet>
        <title>Preguntas frecuentes | Psicólogo en Olivos — Nicolás Quiroga</title>
        <meta
          name="description"
          content="Preguntas frecuentes sobre atención psicológica y psicoanálisis con Nicolás Quiroga en Olivos y online: modalidad, honorarios, confidencialidad y encuadre."
        />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-washi border-b border-black/5">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-gold mb-3">
            Preguntas frecuentes
          </p>
          <h1 className="h-serif text-4xl md:text-5xl font-semibold text-sumi leading-tight mb-4">
            ¿Cómo funciona?
          </h1>
          <p className="text-base text-sumi/65 max-w-xl leading-relaxed">
            Todo lo que necesitás saber antes de tu primera sesión. Si algo no
            está acá,{" "}
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-sumi transition-colors"
            >
              escribime por WhatsApp
            </a>
            .
          </p>
        </div>
      </section>

      {/* Accordion por categorías */}
      <section className="mx-auto max-w-3xl px-5 py-14 space-y-12">
        {categories.map((cat) => (
          <div key={cat.label}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gold mb-1">
              {cat.label}
            </h2>
            <div className="rounded-2xl bg-white/70 border border-black/5 px-5">
              {cat.items.map((item) => (
                <AccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="rounded-2xl bg-sumi text-washi p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
              ¿Todo claro?
            </p>
            <p className="text-lg font-medium leading-snug">
              Agendá tu primera sesión
            </p>
            <p className="text-sm text-washi/65 mt-1">
              Conversamos sobre tu consulta y cómo seguir.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent("Hola Nicolás, ¿coordinamos una sesión?")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-gold text-sumi text-sm font-medium hover:bg-gold2 transition-colors"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-washi/20 text-washi/80 text-sm hover:bg-white/10 transition-colors"
            >
              Consultar horarios <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
