import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, BookOpen, Heart, MessageCircle, ExternalLink } from "lucide-react";

const academicWorkUrl = "https://www.aacademica.org/jornadas.psicopatologia.30.aniversario/101";

export default function ProfileSlide({ open = false }) {
  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.section
          key="profile-slide"
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <div className="overflow-hidden rounded-3xl border border-black/5 bg-white/80 p-6 md:p-8 shadow">
            <h3 className="h-serif text-2xl md:text-3xl font-semibold">Perfil ampliado</h3>
            <p className="mt-1 text-sm text-sumi/70">
              C.V. breve para que veas cómo trabajo y quién soy.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* CV corto */}
              <div className="rounded-2xl border border-black/5 bg-white/70 p-5">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-moss" />
                  <h4 className="font-medium">Formación académica</h4>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-sumi/80 space-y-1">
                  <li>Lic. en Psicología (UBA - 2013).</li>
                  <li>Posgrado en Psicoanálisis Lacaniano (ALEF - 2015).</li>
                  <li>Posgrado en Mindfulness, Meditación y Respiración Consciente (EESH - 2017).</li>
                </ul>
              </div>

              {/* Cursos */}
              <div className="rounded-2xl border border-black/5 bg-white/70 p-5">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-moss" />
                  <h4 className="font-medium">Actualizaciones profesionales</h4>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-sumi/80 space-y-1">
                  <li>Actualización profesional en Logoterapia y Análisis Existencial (UCA - 2022).</li>
                  <li>Actualización profesional en Estudios Budistas (Japón - 2023)</li>
                </ul>
              </div>

              {/* Producción académica */}
              <div className="rounded-2xl border border-black/5 bg-white/70 p-5">
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-moss" />
                  <h4 className="font-medium">Producción académica</h4>
                </div>
                <p className="mt-3 text-sm text-sumi/80">
                  Participación en jornadas de psicopatología, con trabajo disponible en Acta Académica.
                </p>
                <a
                  href={academicWorkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-sumi underline underline-offset-2"
                >
                  Ver publicación
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Hobbies */}
              <div className="rounded-2xl border border-black/5 bg-white/70 p-5">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-moss" />
                  <h4 className="font-medium">Hobbies</h4>
                </div>
                <p className="mt-3 text-sm text-sumi/80">
                  <li>Aikido</li>
                  <li>Jiu-Jitsu Brasileño</li>
                  <li>Bonsai</li>
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(
                  "Hola Nicolás, leí tu perfil. ¿Coordinamos una primera sesión?"
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm text-sumi hover:bg-gold2"
                onClick={() => {
                  try { window.gtag && window.gtag("event","cv_cta_whatsapp",{location:"profile_slide"});} catch {}
                  try { window.fbq && window.fbq("trackCustom","CvCtaWhatsapp",{location:"profile_slide"});} catch {}
                }}
              >
                <MessageCircle className="w-4 h-4" /> Escribime por WhatsApp
              </a>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
