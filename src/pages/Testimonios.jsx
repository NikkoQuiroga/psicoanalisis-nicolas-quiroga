import React from "react";
import { Helmet, HelmetProvider } from "@dr.pogodin/react-helmet";
import TestimonialCard from "../components/TestimonialCard.jsx";


export default function Testimonios(){
const items=[
["Me sentí escuchada sin apuro. Empecé a dormir mejor con pequeños cambios en la rutina.","María S.","34 — Insomnio"],
["Logré poner palabras a algo que repetía hace años. Me ayudó a ordenar decisiones.","Julián R.","41 — Ansiedad"],
["Las sesiones online me resultaron naturales. Pude trabajar un duelo que evitaba.","Lucía V.","29 — Duelo"],
["Entendí mis límites en la pareja sin sentir culpa.","Marta G.","45 — Vínculos"],
["Combina teoría con recursos concretos cuando lo necesito.","Nicolás A.","37 — Exploración"],
["Bajé la exigencia y ansiedad en el trabajo.","Ezequiel P.","32 — Estrés"],
];
return (
<>
<Helmet><title>Testimonios</title><meta name="description" content="Testimonios representativos con fines ilustrativos."/></Helmet>
<section className="mx-auto w-full max-w-6xl px-5 py-10">
<h1 className="h-serif text-3xl font-semibold">Testimonios</h1>
<div className="mt-6 grid gap-4 md:grid-cols-3">{items.map(([q,n,m])=> (<TestimonialCard key={n} quote={q} name={n} meta={m}/>))}</div>
</section>
</>
);
}