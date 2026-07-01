import React from "react";
import { Helmet, HelmetProvider } from "@dr.pogodin/react-helmet";
import AgendaForm from "../components/AgendaForm.jsx";


export default function Agenda(){
return (
<>
<Helmet><title>Agenda — Coordinar sesión</title><meta name="description" content="Formulario para coordinar una primera consulta de psicoanálisis. Honorarios: $40.000 ARS / USD 35. Atención online y presencial en Olivos."/></Helmet>
<section className="mx-auto w-full max-w-3xl px-5 py-10">
<h1 className="h-serif text-3xl font-semibold">Agenda</h1>
<p className="mt-2 text-sm text-sumi/75">La primera consulta sirve para ubicar qué está pasando y si este encuadre clínico tiene sentido para trabajarlo. Honorarios: <strong>$40.000 ARS</strong> o <strong>USD 35</strong>.</p>
<div className="mt-6 rounded-3xl border border-black/5 bg-white/70 p-6 shadow"><AgendaForm/></div>
</section>
</>
);
}
