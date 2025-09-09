// src/pages/legal/Consentimiento.jsx
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

export default function Consentimiento() {
  return (
    <>
      <Helmet>
        <title>Consentimiento informado — Nicolás Quiroga</title>
        <meta name="description" content="Marco de trabajo, confidencialidad y condiciones de la atención psicológica." />
      </Helmet>

      <section className="mx-auto w-full max-w-3xl px-5 py-10">
        <h1 className="h-serif text-3xl font-semibold">Consentimiento informado</h1>
        <p className="mt-2 text-sm text-sumi/70">
          Profesional: <strong>Nicolás Quiroga, Licenciado en Psicología (M.N. 59.272)</strong>.
        </p>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-sumi/80">
          <section>
            <h2 className="font-medium text-sumi">1) Marco de trabajo</h2>
            <p>
              Trabajo desde el <strong>psicoanálisis</strong> y, cuando resulta pertinente, incorporo{" "}
              <strong>herramientas basadas en evidencia</strong> para objetivos puntuales.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">2) Frecuencia y modalidad</h2>
            <p>
              Primer mes: <strong>1 sesión semanal</strong> para delimitar el campo de trabajo. Luego, si deseás,{" "}
              <strong>encuentros cada 15 días</strong>. Modalidad: presencial en Olivos y online.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">3) Honorarios</h2>
            <p>Honorarios vigentes informados en la página de Agenda. El valor puede actualizarse.</p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">4) Confidencialidad</h2>
            <p>
              El contenido de las sesiones es confidencial. Existen excepciones legales (riesgo cierto para la propia vida o la
              de terceros, requerimientos judiciales, etc.).
            </p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">5) Teleconsulta</h2>
            <p>
              En atención online, procurá un espacio privado y conexión estable. Aceptás el uso de plataformas de terceros para
              videollamadas y mensajería.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">6) Cancelaciones y puntualidad</h2>
            <p>Si no podés asistir, avisá con 24 horas de anticipación para re-programar la sesión. No cobro honorarios ante ausentismo. Las llegadas tarde no extienden la duración.</p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">7) Emergencias</h2>
            <p>
              Este servicio no cubre emergencias. Ante una urgencia, comunicate con el 107/911 u otros servicios locales
              disponibles.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">8) Aceptación</h2>
            <p>
              Solicitar y tomar turno implica la aceptación de este consentimiento y de los Términos y condiciones del sitio.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
