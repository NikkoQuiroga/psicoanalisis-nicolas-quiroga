import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProfileDrop({ open, onClose }) {
  // Bloquear scroll cuando está abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // Cerrar con ESC
  useEffect(() => {
    function onKey(e){ if (e.key === "Escape") onClose?.(); }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Drawer que baja */}
          <motion.aside
            role="dialog" aria-modal="true"
            className="fixed left-0 right-0 top-0 z-50 mx-auto w-full max-w-3xl rounded-b-3xl bg-white shadow-2xl"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          >
            <div className="px-5 py-4 border-b border-black/5 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Perfil — Nicolás Quiroga</h3>
              <button onClick={onClose} className="text-sm text-sumi/70 hover:text-sumi">Cerrar ✕</button>
            </div>

            <div className="px-5 py-5 grid gap-5 text-sm text-sumi/80">
              {/* CV corto */}
              <section>
                <h4 className="font-medium text-sumi">CV (resumen)</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Lic. en Psicología (UBA).</li>
                  <li>Formación en Psicoanálisis (ALEF).</li>
                  <li>Práctica clínica: ansiedad, insomnio, vínculos, duelo.</li>
                  <li>Enfoque: psicoanálisis + recursos basados en evidencia.</li>
                </ul>
              </section>

              {/* Cursos */}
              <section>
                <h4 className="font-medium text-sumi">Cursos y entrenamientos</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Mindfulness aplicado a clínica (curso breve).</li>
                  <li>Logoterapia — intervenciones focalizadas.</li>
                  <li>Seminarios de lectura (Freud/Lacan).</li>
                </ul>
              </section>

              {/* Hobbies (editá libremente) */}
              <section>
                <h4 className="font-medium text-sumi">Hobbies</h4>
                <p className="mt-2">
                  Lectura, caligrafía japonesa y caminatas/trekking. {/* cambiá por los tuyos */}
                </p>
              </section>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/docs/instructivo-psicoterapia-nicolas-quiroga.pdf"
                  download
                  className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm hover:bg-white"
                >
                  Descargar instructivo (PDF)
                </a>
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent("Hola Nicolás, vi tu perfil. ¿Coordinamos una primera sesión?")}`}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-gold px-4 py-2 text-sm text-sumi hover:bg-gold2"
                >
                  Escribirme por WhatsApp
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
