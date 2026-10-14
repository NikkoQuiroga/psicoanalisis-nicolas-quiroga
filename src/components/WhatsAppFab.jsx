import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Phone } from "lucide-react";

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
      setHidden(rect ? rect.top < window.innerHeight - showAboveOffset && rect.bottom > 0 : false);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(update);
    };
    // Lazy routes can mount their form after the floating button's effect.
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList: true, subtree: true });
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [anchorId, showAboveOffset, location.pathname]);

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${encodeURIComponent("Hola Nicolás, ¿coordinamos una sesión?")}`}
      target="_blank"
      rel="noreferrer"
      // Sin animación inicial; solo animamos cuando cambia "hidden"
      initial={false}
      animate={{ y: hidden ? 80 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed right-4 z-40 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-sumi shadow-lg backdrop-blur hover:bg-gold2"
      aria-hidden={hidden ? "true" : "false"}
      tabIndex={hidden ? -1 : 0}
      style={{ bottom: "calc(16px + env(safe-area-inset-bottom, 0px))", pointerEvents: hidden ? "none" : "auto" }}
    >
      <Phone className="w-4 h-4" /> WhatsApp
    </motion.a>
  );
}
