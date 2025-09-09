import React from "react";
import { Helmet, HelmetProvider } from "@dr.pogodin/react-helmet";
import AgendaForm from "../components/AgendaForm.jsx";


export default function Agenda(){
return (
<>
<Helmet><title>Agenda — Coordinar sesión</title><meta name="description" content="Form para coordinar por WhatsApp. Honorarios: $29.000 ARS / USD 35. Primer mes semanal; luego cada 15 días si querés."/></Helmet>
<section className="mx-auto w-full max-w-3xl px-5 py-10">
<h1 className="h-serif text-3xl font-semibold">Agenda</h1>
<p className="mt-2 text-sm text-sumi/75">Durante el primer mes, propongo <strong>1 sesión semanal</strong> para delimitar el campo de trabajo. Luego, si querés, podemos pasar a <strong>cada 15 días</strong>.</p>
<div className="mt-6 rounded-3xl border border-black/5 bg-white/70 p-6 shadow"><AgendaForm/></div>
</section>
</>
);
}