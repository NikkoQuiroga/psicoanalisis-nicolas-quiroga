// src/pages/legal/Terminos.jsx
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

export default function Terminos() {
  return (
    <>
      <Helmet>
        <title>Términos y condiciones — Nicolás Quiroga</title>
        <meta name="description" content="Condiciones de uso del sitio, agenda y limitaciones de responsabilidad." />
      </Helmet>

      <section className="mx-auto w-full max-w-3xl px-5 py-10">
        <h1 className="h-serif text-3xl font-semibold">Términos y condiciones</h1>
        <p className="mt-2 text-sm text-sumi/70">
          Este sitio pertenece a <strong>Nicolás Quiroga (Psicólogo, M.N. 59.272)</strong>.
        </p>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-sumi/80">
          <section>
            <h2 className="font-medium text-sumi">1) Uso del sitio</h2>
            <p>La información tiene fines <strong>informativos</strong>. No sustituye atención de urgencia ni diagnósticos.</p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">2) Agenda y honorarios</h2>
            <p>
              La coordinación de turnos se realiza por formulario o WhatsApp. Honorarios informados en la página de Agenda.
              Pueden actualizarse sin previo aviso hasta la confirmación del turno.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">3) Cancelaciones</h2>
            <p>
              Las sesiones se reservan por franja horaria. Si necesitás cancelar o reprogramar, por favor avisá con al menos
              24&nbsp;hs. Las cancelaciones fuera de término pueden considerarse como sesión realizada.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">4) Limitación de responsabilidad</h2>
            <p>
              No me responsabilizo por indisponibilidades del sitio o servicios de terceros (plataformas de videollamada,
              WhatsApp, etc.). Ante emergencias, comunicate con servicios locales de urgencia.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">5) Menores de edad</h2>
            <p>La atención a menores requiere consentimiento de quien ejerza responsabilidad parental.</p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">6) Jurisdicción</h2>
            <p>Estas condiciones se rigen por las leyes de la República Argentina.</p>
          </section>
        </div>
      </section>
    </>
  );
}
