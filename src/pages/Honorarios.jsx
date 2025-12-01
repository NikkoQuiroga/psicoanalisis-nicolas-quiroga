import React, { useMemo } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import useGeo from "../hooks/useGeo.js";

export default function Honorarios() {
  const geo = useGeo();
  const isAR = useMemo(() => geo.cc === "AR", [geo.cc]);

  return (
    <>
      <Helmet>
        <title>Honorarios — $35.000 ARS / USD 35</title>
        <meta
          name="description"
          content="Honorarios claros. Argentina: $35.000 ARS por sesión. Exterior: USD 35. Presencial en Olivos y online."
        />
      </Helmet>

      <section className="mx-auto w-full max-w-3xl px-5 py-10">
        <h1 className="h-serif text-3xl font-semibold">Honorarios</h1>
        {isAR ? (
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sumi/80">
            <li>
              Valor por sesión: <strong>$35.000 ARS</strong> (45 minutos).
            </li>
            <li>Presencial en Olivos u online con videollamada privada.</li>
            <li>Se confirma por WhatsApp luego de elegir tu horario.</li>
          </ul>
        ) : (
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sumi/80">
            <li>
              Valor por sesión: <strong>USD 35</strong> (45 minutos).
            </li>
            <li>Atención online para quienes viven fuera de Argentina.</li>
            <li>Coordinamos día y horario por WhatsApp o correo.</li>
          </ul>
        )}
      </section>
    </>
  );
}
