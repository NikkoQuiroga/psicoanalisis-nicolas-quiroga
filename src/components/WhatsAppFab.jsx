import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFab({
  anchorId = "agenda",
  showAboveOffset = 80, // px: margen para “aparecer” un poco antes de llegar a Agenda
}) {
  const location = useLocation();
  const phone = import.meta.env.VITE_WHATSAPP || "5491161402223";
  const [hidden, setHidden] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    const update = () => {
      const el = document.getElementById(anchorId);
      const rect = el?.getBoundingClientRect();
      const directVisible = [...document.querySelectorAll('a[data-wa-location]:not([data-wa-location="floating"])')].some(link => {
        const box = link.getBoundingClientRect();
        return box.width > 0 && box.height > 0 && box.top >= 0 && box.bottom <= window.innerHeight;
      });
      setHidden(directVisible || (rect ? rect.top < window.innerHeight - showAboveOffset && rect.bottom > 0 : false));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(update);
    };
    // Lazy routes can mount their form after the floating button's effect.
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList: true, subtree: true });
    update();
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf.current);
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", update);
    };
  }, [anchorId, showAboveOffset, location.pathname]);

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${encodeURIComponent("Hola Nicolás, quisiera consultar disponibilidad para una primera entrevista.")}`}
      data-wa-location="floating"
      aria-label="Consultá hoy por WhatsApp para una primera entrevista"
      target="_blank"
      rel="noreferrer"
      // Sin animación inicial; solo animamos cuando cambia "hidden"
      initial={false}
      animate={{ y: hidden ? 80 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="wa-attention fixed right-4 z-40 inline-flex items-center gap-3 rounded-full border border-white/30 p-1.5 pr-4 shadow-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
      aria-hidden={hidden ? "true" : "false"}
      tabIndex={hidden ? -1 : 0}
      style={{ bottom: "calc(16px + env(safe-area-inset-bottom, 0px))", pointerEvents: hidden ? "none" : "auto" }}
    >
      <span className="relative shrink-0" aria-hidden="true">
        <img src="/media/consultorio-psicoanalisis-olivos-divan.webp" alt="" width="44" height="44" className="h-11 w-11 rounded-full object-cover object-[center_20%]" />
        <span className="absolute -bottom-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-[#226a43] text-white"><MessageCircle className="h-3 w-3" /></span>
      </span>
      <span className="text-left leading-tight"><span className="block text-sm font-semibold">Consultá hoy</span><span className="mt-0.5 block text-xs text-white/90">Turnos por WhatsApp</span></span>
    </motion.a>
  );
}
