import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFab from "./components/WhatsAppFab.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import BackgroundInk from "./components/BackgroundInk.jsx";

// Páginas
import Home from "./pages/Home.jsx";
import Servicios from "./pages/Servicios.jsx";
import Honorarios from "./pages/Honorarios.jsx";
import Agenda from "./pages/Agenda.jsx";
import Testimonios from "./pages/Testimonios.jsx";
import FAQ from "./pages/FAQ.jsx";
import Ubicacion from "./pages/Ubicacion.jsx";
import Contacto from "./pages/Contacto.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Privacidad from "./pages/legal/Privacidad.jsx";
import Terminos from "./pages/legal/Terminos.jsx";
import Consentimiento from "./pages/legal/Consentimiento.jsx";
import AvisoInternacional from "./pages/AvisoInternacional.jsx";
import Gracias from "./pages/Gracias.jsx";
import NotFound from "./pages/NotFound.jsx";
import SiteSEO from "./components/SiteSEO.jsx";

// Analytics (opcional, como ya venías)
function usePageAnalytics() {
  const loc = useLocation();
  useEffect(() => {
    const title = document.title;
    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: loc.pathname,
      page_title: title,
    });
    window.fbq?.("track", "PageView");
  }, [loc.pathname]);
}

export default function App() {
  const location = useLocation();
  usePageAnalytics();

  return (
    <div className="min-h-screen flex flex-col bg-washi text-sumi relative">
      <BackgroundInk />
      <ScrollProgress />
      <Header />
      <SiteSEO />

      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {/* 👇 ¡IMPORTANTE! Pasamos el location a Routes para que haga match correcto */}
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/honorarios" element={<Honorarios />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/testimonios" element={<Testimonios />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/ubicacion" element={<Ubicacion />} />
              <Route path="/contacto" element={<Contacto />} />

              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              <Route path="/legal/politica-de-privacidad" element={<Privacidad />} />
              <Route path="/legal/terminos-y-condiciones" element={<Terminos />} />
              <Route path="/legal/consentimiento-informado" element={<Consentimiento />} />

              <Route path="/aviso-internacional" element={<AvisoInternacional />} />
              <Route path="/gracias" element={<Gracias />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      {/* Oculta el botón al entrar a la sección Agenda (id="agenda") */}
      <WhatsAppFab anchorId="agenda-form" showAboveOffset={96} />
    </div>
  );
}
