import React, { useMemo } from "react";
import { Helmet, HelmetProvider } from "@dr.pogodin/react-helmet";
import useGeo from "../hooks/useGeo.js";


export default function Honorarios(){
const geo = useGeo();
const isAR = useMemo(()=> geo.cc === 'AR', [geo.cc]);
return (
<>
<Helmet><title>Honorarios — $29.000 ARS / USD 35</title><meta name="description" content="Honorarios explícitos. AR: $29.000. Exterior: USD 35. WhatsApp para coordinar."/></Helmet>
<section className="mx-auto w-full max-w-3xl px-5 py-10">
<h1 className="h-serif text-3xl font-semibold">Honorarios</h1>
{isAR ? (
<ul className="mt-4 list-disc pl-6 text-sumi/80 space-y-2">
<li>Valor por sesión: <strong>$29.000 ARS</strong>.</li>
<li>Presencial en Olivos u online.</li>
<li>Se confirma por WhatsApp.</li>
</ul>
) : (
<ul className="mt-4 list-disc pl-6 text-sumi/80 space-y-2">
<li>Valor por sesión: <strong>USD 35</strong>.</li>
<li>Atención online para exterior.</li>
<li>Se confirma por WhatsApp.</li>
</ul>
)}
</section>
</>
);
}