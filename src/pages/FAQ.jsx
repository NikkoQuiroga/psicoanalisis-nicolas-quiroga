import React, { useState } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    label: "Primeros pasos",
    items: [
      {
        q: "¿Cómo es la primera sesión?",
        a: "La primera sesión no tiene estructura fija. Traés lo que te trajo hasta acá —lo que duele, lo que se repite, lo que no podés nombrar bien— y de ahí arrancamos. No es una evaluación ni un formulario. Es una conversación que tiene peso propio.",
      },
      {
        q: "¿Para quién es el psicoanálisis clínico?",
        a: "Para quien siente que algo no cierra: sobrepensamiento, angustia, insomnio, autoexigencia, escenas que se repiten en los vínculos o en el trabajo, una sensación de estar estancado. No hace falta tener un diagnóstico ni haber estado antes en análisis.",
      },
      {
        q: "¿Cuánto dura el proceso?",
        a: "Depende de cada caso. No hay un número de sesiones prefijado. Algunos trabajos son focales y duran meses; otros abren preguntas que llevan más tiempo. Lo importante es que el proceso tenga una dirección clínica y que lo que insiste pueda empezar a leerse de otro modo.",
      },
    ],
  },
  {
    label: "Modalidad y honorarios",
    items: [
      {
        q: "¿Online o presencial?",
        a: "Ambas modalidades están disponibles. Las sesiones presenciales se realizan en Olivos, Vicente López. La dirección exacta se confirma al coordinar el turno. Las sesiones online funcionan igual de bien para quienes viven en otra ciudad o en el exterior.",
      },
      {
        q: "¿Con qué frecuencia nos vemos?",
        a: "El primer mes trabajamos semanalmente para tomar impulso y establecer el encuadre. Después podemos pasar a cada 15 días si es lo que funciona para vos. La frecuencia la conversamos según el ritmo del trabajo.",
      },
      {
        q: "¿Cuánto cuesta una sesión?",
        a: "Argentina: $40.000 ARS por sesión. Exterior: USD 35 por sesión. El valor y las formas de pago se confirman por WhatsApp antes de la primera sesión.",
      },
      {
        q: "¿Tienen obra social o prepaga?",
        a: "Por el momento las sesiones son particulares, sin cobertura de obra social. Si la situación económica es un obstáculo real, podemos conversarlo.",
      },
    ],
  },
  {
    label: "Confidencialidad",
    items: [
      {
        q: "¿Todo lo que digo es confidencial?",
        a: "Sí. Absoluta y sin excepciones. Todo lo que compartís —en el formulario inicial, en sesión, por WhatsApp— queda estrictamente entre nosotros. El secreto profesional no es una formalidad: es parte del encuadre que hace posible el trabajo.",
      },
      {
        q: "¿Usás mis datos para algo?",
        a: "No. No se comparte información con terceros, no se usa para estadísticas, no se menciona en ningún contexto fuera de la relación clínica. Los datos que dejás al agendar sirven únicamente para coordinar la sesión.",
      },
    ],
  },
  {
    label: "El trabajo clínico",
    items: [
      {
        q: "¿Cómo trabajás? ¿Qué orientación tenés?",
        a: "Trabajo desde una orientación lacaniana. No abordo el síntoma como algo a eliminar rápidamente, sino como una formación que tiene una lógica y una función en la vida de cada sujeto. La clínica no parte de recetas universales, sino de hipótesis conjeturales que se construyen caso por caso y se ajustan sesión a sesión, según lo que aparece en la palabra, la repetición y el cuerpo.",
      },
      {
        q: "¿El objetivo es sentirme mejor?",
        a: "El alivio importa, pero no trabajo desde la promesa de borrar rápido un síntoma. En psicoanálisis se trata de leer qué función cumple eso que insiste: el pensamiento excesivo, la angustia, la repetición, la exigencia. A veces el cambio empieza cuando dejás de pelearte con el síntoma y empezás a escucharlo.",
      },
      {
        q: "¿Es psicoanálisis o terapia cognitiva?",
        a: "Es psicoanálisis clínico. Mi recorrido formativo puede incluir otros campos, pero la práctica que ofrezco acá no se organiza como coaching, autoayuda ni entrenamiento de técnicas. El encuadre es psicoanalítico: palabra, escucha y lectura caso por caso de eso que se repite aunque ya lo entendiste.",
      },
    ],
  },
];

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

  return (
    <>
      <Helmet>
        <title>¿Cómo funciona? · Preguntas frecuentes · Lic. Nicolás Quiroga</title>
        <meta
          name="description"
          content="Preguntas frecuentes sobre psicoanálisis con Nicolás Quiroga: modalidad online y presencial, honorarios, confidencialidad y encuadre clínico."
        />
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
              Primera consulta sin compromiso. Reserva absoluta.
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
              Formulario <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
