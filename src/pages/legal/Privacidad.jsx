// src/pages/legal/Privacidad.jsx
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

const EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "hola@tu-dominio.com";
const WHATS = import.meta.env.VITE_WHATSAPP || "5491161402223";

export default function Privacidad() {
  return (
    <>
      <Helmet>
        <title>Política de privacidad — Nicolás Quiroga</title>
        <meta name="description" content="Cómo trato tus datos personales en este sitio y durante el contacto inicial." />
      </Helmet>

      <section className="mx-auto w-full max-w-3xl px-5 py-10">
        <h1 className="h-serif text-3xl font-semibold">Política de privacidad</h1>
        <p className="mt-2 text-sm text-sumi/70">
          Última actualización: {new Date().toLocaleDateString("es-AR")}. Responsable del tratamiento:
          <strong> Nicolás Quiroga (Psicólogo, M.N. 59.272)</strong>.
        </p>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-sumi/80">
          <section>
            <h2 className="font-medium text-sumi">1) Qué datos recolecto</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Datos de contacto provistos por vos en el formulario (nombre, email o WhatsApp).</li>
              <li>Tu motivo de consulta y mensaje libre (si lo escribís).</li>
              <li>Datos técnicos mínimos de uso del sitio (cookies esenciales) y medición anónima con GA4/Meta Pixel.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-sumi">2) Para qué los uso</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responder tu consulta y coordinar una primera sesión.</li>
              <li>Mejorar el sitio (estadísticas agregadas y anónimas).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-medium text-sumi">3) Base legal y consentimiento</h2>
            <p>
              El tratamiento se basa en tu <strong>consentimiento</strong> al enviar el formulario o escribirme por WhatsApp.
              Podés revocarlo en cualquier momento solicitando la eliminación de tus datos.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">4) Conservación</h2>
            <p>
              Los datos de contacto del <em>pre-encuentro</em> se conservan el tiempo necesario para coordinar o descartar la
              sesión inicial. No se almacenan <strong>historias clínicas</strong> en este sitio.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">5) Destinatarios y terceros</h2>
            <p>
              Los mensajes que envíes por <strong>WhatsApp</strong> se cursan por los servicios de Meta Platforms; el
              tratamiento puede realizarse fuera de Argentina. Las mediciones anónimas del sitio las realiza Google (GA4) y
              Meta (Pixel). No vendo ni cedo tus datos.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">6) Derechos</h2>
            <p>
              Podés ejercer <strong>acceso, rectificación y supresión</strong> de tus datos escribiendo a{" "}
              <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a> o por WhatsApp al{" "}
              <a className="underline" href={`https://wa.me/${WHATS}`} target="_blank" rel="noreferrer">
                +{WHATS}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">7) Cookies</h2>
            <p>
              Uso cookies esenciales para el funcionamiento del sitio y cookies de medición anónima para entender su uso. Podés
              bloquearlas desde tu navegador si preferís.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-sumi">8) Contacto</h2>
            <p>
              Email: <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a> · WhatsApp:{" "}
              <a className="underline" href={`https://wa.me/${WHATS}`} target="_blank" rel="noreferrer">
                +{WHATS}
              </a>
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
