import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function WhatsAppFab({
  anchorId = "agenda",
  showAboveOffset = 80, // px: margen para “aparecer” un poco antes de llegar a Agenda
}) {
  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";
  const [hidden, setHidden] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    const el = document.getElementById(anchorId);
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const anchorTopAbs = window.scrollY + rect.top;
      // Mostrar cuando estamos por ARRIBA de agenda (con un margen)
      const shouldShow = window.scrollY + showAboveOffset < anchorTopAbs;
      setHidden(!shouldShow);
    };

    // 1) Evaluación inicial
    update();

    // 2) Scroll/resize con rAF para evitar jank
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [anchorId, showAboveOffset]);

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${encodeURIComponent("Hola Nicolás, ¿coordinamos una sesión?")}`}
      target="_blank"
      rel="noreferrer"
      // Sin animación inicial; solo animamos cuando cambia "hidden"
      initial={false}
      animate={{ y: hidden ? 80 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ bottom: "calc(16px + env(safe-area-inset-bottom, 0px))" }}
      className="fixed right-4 z-40 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-sumi shadow-lg backdrop-blur hover:bg-gold2"
      aria-hidden={hidden ? "true" : "false"}
    >
      <Phone className="w-4 h-4" /> WhatsApp
    </motion.a>
  );
}
