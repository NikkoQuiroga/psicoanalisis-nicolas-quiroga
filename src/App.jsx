import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFab from "./components/WhatsAppFab.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import BackgroundInk from "./components/BackgroundInk.jsx";
import SiteSEO from "./components/SiteSEO.jsx";

// Páginas — lazy loaded (cada una en su propio chunk)
const Home            = lazy(() => import("./pages/Home.jsx"));
const Testimonios     = lazy(() => import("./pages/Testimonios.jsx"));
const FAQ             = lazy(() => import("./pages/FAQ.jsx"));
const Ubicacion       = lazy(() => import("./pages/Ubicacion.jsx"));
const Contacto        = lazy(() => import("./pages/Contacto.jsx"));
const PsicoanalistaOlivos = lazy(() => import("./pages/PsicoanalistaOlivos.jsx"));
const PsicoanalisisOnlineLanding = lazy(() => import("./pages/PsicoanalisisOnlineLanding.jsx"));
const SobreMi         = lazy(() => import("./pages/SobreMi.jsx"));
const Blog            = lazy(() => import("./pages/Blog.jsx"));
const BlogPost        = lazy(() => import("./pages/BlogPost.jsx"));
const Privacidad      = lazy(() => import("./pages/legal/Privacidad.jsx"));
const Terminos        = lazy(() => import("./pages/legal/Terminos.jsx"));
const Consentimiento  = lazy(() => import("./pages/legal/Consentimiento.jsx"));
const AvisoInternacional = lazy(() => import("./pages/AvisoInternacional.jsx"));
const Gracias         = lazy(() => import("./pages/Gracias.jsx"));
const NotFound        = lazy(() => import("./pages/NotFound.jsx"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <div className="w-6 h-6 rounded-full border-2 border-gold border-t-transparent animate-spin" />
    </div>
  );
}

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
            <Suspense fallback={<PageLoader />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/testimonios" element={<Testimonios />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/ubicacion" element={<Ubicacion />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/psicoanalista-olivos" element={<PsicoanalistaOlivos />} />
              <Route path="/psicoanalisis-online" element={<PsicoanalisisOnlineLanding />} />
              <Route path="/sobre-mi" element={<SobreMi />} />

              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              <Route path="/legal/politica-de-privacidad" element={<Privacidad />} />
              <Route path="/legal/terminos-y-condiciones" element={<Terminos />} />
              <Route path="/legal/consentimiento-informado" element={<Consentimiento />} />

              <Route path="/aviso-internacional" element={<AvisoInternacional />} />
              <Route path="/gracias" element={<Gracias />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <WhatsAppFab anchorId="agenda-form" showAboveOffset={96} />
    </div>
  );
}
