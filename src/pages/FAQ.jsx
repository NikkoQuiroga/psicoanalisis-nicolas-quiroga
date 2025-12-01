import React from "react";
import { Helmet, HelmetProvider } from "@dr.pogodin/react-helmet";
export default function FAQ(){
const faqs=[
["¿Online o presencial?","Ambas. Presencial en Olivos (si estás en Argentina) y online en todos los casos."],
["¿Cómo es la primera sesión?","Escuchamos lo que trae el síntoma hoy. Delimitamos el campo de trabajo del primer mes."],
["¿Frecuencia?","Primer mes semanal; luego podemos pasar a cada 15 días si querés."],
["¿Honorarios?","Argentina: $35.000 ARS. Exterior: USD 35. Se confirman por WhatsApp."],
];
return (
<>
<Helmet><title>Preguntas frecuentes</title><meta name="description" content="Frecuencia, primera sesión, online/presencial, honorarios."/></Helmet>
<section className="mx-auto w-full max-w-3xl px-5 py-10">
<h1 className="h-serif text-3xl font-semibold">Preguntas frecuentes</h1>
<div className="mt-6 space-y-4">
{faqs.map(([q,a])=> (
<details key={q} className="rounded-xl border border-black/5 bg-white/60 p-4">
<summary className="cursor-pointer font-medium">{q}</summary>
<p className="mt-2 text-sm text-sumi/75">{a}</p>
</details>
))}
</div>
</section>
</>
);
}