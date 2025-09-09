import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MessageCircle, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const loc = useLocation();

  // sombra al scrollear
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // cerrar menú al navegar
  useEffect(() => { setMobileOpen(false); }, [loc.pathname]);

  // cerrar si pasa a desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const items = [
    ["Inicio", "/"],
    ["Servicios", "/servicios"],
    ["Honorarios", "/honorarios"],
    ["Agenda", "/agenda"],
    ["Testimonios", "/testimonios"],
    ["Ubicación", "/ubicacion"],
    ["Blog", "/blog"],
  ];

  return (
    <header
      className={[
        "sticky top-0 z-40 border-b border-black/5",
        "bg-washi/80 backdrop-blur supports-[backdrop-filter]:bg-washi/60",
        scrolled ? "shadow-sm" : "",
      ].join(" ")}
    >
      {/* fila principal */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:py-5">
        {/* Logo + botón (en mobile el círculo abre/cierra el menú) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen(v => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="md:cursor-default inline-flex items-center justify-center"
            title="Abrir menú"
          >
            <div className="h-8 w-8 rounded-full bg-gold/80 ring-1 ring-sumi/10 relative md:pointer-events-none">
              <ChevronDown
                className={[
                  "absolute -bottom-3 left-1/2 -translate-x-1/2 md:hidden transition-transform",
                  mobileOpen ? "rotate-180" : "rotate-0",
                ].join(" ")}
                size={16}
              />
            </div>
          </button>

          <Link to="/" className="leading-tight">
            <p className="text-sm tracking-wide text-sumi/80">Lic. Nicolás Quiroga</p>
            <p className="text-xs text-sumi/60">Psicoanalista + Herramientas basadas en evidencia</p>
          </Link>
        </div>

        {/* nav desktop */}
        <nav className="hidden md:flex gap-6 text-sm text-sumi/75">
          {items.map(([label, href]) => (
            <NavLink key={href} to={href} className={({ isActive }) => (isActive ? "text-sumi" : "hover:text-sumi transition")}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* WhatsApp (desktop) */}
        <a
          href={`https://wa.me/${import.meta.env.VITE_WHATSAPP || "5491161402223"}?text=${encodeURIComponent(
            "Hola Nicolás, ¿coordinamos una sesión?"
          )}`}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gold text-sumi shadow hover:bg-gold2 transition-transform duration-300 hover:scale-[1.02]"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>

      {/* nav móvil desplegable (empuja el contenido hacia abajo) */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden border-t border-black/5 bg-white/80"
          >
            <div className="mx-auto max-w-6xl px-5 py-3 grid grid-cols-2 gap-2 text-sm">
              {items.map(([label, href]) => (
                <NavLink
                  key={href}
                  to={href}
                  className={({ isActive }) =>
                    "rounded-full px-3 py-2 text-center " +
                    (isActive ? "bg-gold text-sumi" : "bg-white/80 hover:bg-white border border-black/5")
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* mini barra legal en mobile */}
            <div className="mx-auto max-w-6xl px-5 pb-3 text-[11px] text-sumi/60 flex flex-wrap gap-x-4 gap-y-2">
              <NavLink to="/legal/politica-de-privacidad" className="hover:underline">Privacidad</NavLink>
              <NavLink to="/legal/terminos-y-condiciones" className="hover:underline">Términos</NavLink>
              <NavLink to="/legal/consentimiento-informado" className="hover:underline">Consentimiento</NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
